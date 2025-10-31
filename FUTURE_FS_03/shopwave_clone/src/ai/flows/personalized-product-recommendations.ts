'use server';

/**
 * @fileOverview Personalized product recommendations based on browsing history and purchase behavior.
 *
 * - getPersonalizedRecommendations - A function that retrieves personalized product recommendations.
 * - PersonalizedRecommendationsInput - The input type for the getPersonalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the getPersonalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  browsingHistory: z.array(
    z.object({
      productId: z.string().describe('The ID of the product browsed.'),
      productName: z.string().describe('The name of the product browsed.'),
      category: z.string().describe('The category of the product browsed.'),
    })
  ).describe('The user browsing history.'),
  purchaseHistory: z.array(
    z.object({
      productId: z.string().describe('The ID of the product purchased.'),
      productName: z.string().describe('The name of the product purchased.'),
      category: z.string().describe('The category of the product purchased.'),
    })
  ).describe('The user purchase history.'),
  maxRecommendations: z.number().default(5).describe('The maximum number of product recommendations to return.'),
});

export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      productId: z.string().describe('The ID of the recommended product.'),
      productName: z.string().describe('The name of the recommended product.'),
      category: z.string().describe('The category of the recommended product.'),
      reason: z.string().describe('The reason for recommending this product.'),
    })
  ).describe('A list of personalized product recommendations.'),
});

export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function getPersonalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an expert e-commerce product recommendation engine.

  Based on the user's browsing history and purchase behavior, you will provide a list of personalized product recommendations.
  The user wants to see a maximum of {{maxRecommendations}} recommendations.

  Browsing History:
  {{#each browsingHistory}}
  - Product ID: {{productId}}, Name: {{productName}}, Category: {{category}}
  {{/each}}

  Purchase History:
  {{#each purchaseHistory}}
  - Product ID: {{productId}}, Name: {{productName}}, Category: {{category}}
  {{/each}}

  Provide the recommendations in JSON format.
  Each recommendation should include the product ID, product name, category, and a brief reason for the recommendation.
  Ensure the recommendations are relevant to the user's interests based on their history.
  Do not recommend items that are already in the browsing or purchase history.

  {{#if browsingHistory.length}}
    The user has browsing history so recommendations should match the browsing history.
  {{/if}}

  {{#if purchaseHistory.length}}
    The user has purchase history so recommendations should match the purchase history.
  {{/if}}
  `,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
