import { getPersonalizedRecommendations } from "@/ai/flows/personalized-product-recommendations";
import { products, userHistory } from "@/lib/data";
import { ProductCard } from "./product-card";

export async function ProductRecommendations() {

  const recommendations = await getPersonalizedRecommendations({
      ...userHistory,
      maxRecommendations: 4,
  });

  if (!recommendations?.recommendations?.length) {
    return null;
  }

  const recommendedProducts = recommendations.recommendations
    .map(rec => products.find(p => p.id === rec.productId))
    .filter((p): p is NonNullable<typeof p> => p !== undefined);
  
  if (recommendedProducts.length === 0) {
      return null;
  }

  return (
    <div className="mt-16">
      <h2 className="text-3xl font-headline font-bold text-center mb-10">You Might Also Like</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
