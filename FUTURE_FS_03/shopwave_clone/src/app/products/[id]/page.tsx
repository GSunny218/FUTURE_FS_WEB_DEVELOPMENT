'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { products, reviews as allReviews } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import { StarRating } from '@/components/shop/star-rating';
import { ProductRecommendations } from '@/components/shop/product-recommendations';
import { ShoppingCart, Star } from 'lucide-react';
import { useCart } from '@/context/cart-context';
import { useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id);
  const reviews = allReviews.filter((r) => r.productId === params.id);
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    notFound();
  }
  
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="flex flex-col gap-4">
            <Carousel
                opts={{
                    loop: true,
                }}
                className="w-full"
                onSelect={(api) => {
                    if (api) setSelectedImage(api.selectedScrollSnap())
                }}
            >
                <CarouselContent>
                {product.images.map((img, index) => (
                    <CarouselItem key={index}>
                    <div className="relative aspect-square w-full">
                        <Image
                            src={img.url}
                            alt={`${product.name} image ${index + 1}`}
                            fill
                            className="object-cover rounded-lg shadow-md"
                            data-ai-hint={img.hint}
                        />
                    </div>
                    </CarouselItem>
                ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
            </Carousel>
             <div className="flex gap-4 justify-center">
                {product.images.map((img, index) => (
                    <button key={index} onClick={() => setSelectedImage(index)} className={`relative w-24 h-24 rounded-md overflow-hidden transition-all ${selectedImage === index ? 'ring-2 ring-primary ring-offset-2' : ''}`}>
                        <Image
                            src={img.url}
                            alt={`${product.name} thumbnail ${index + 1}`}
                            fill
                            className="object-cover"
                            data-ai-hint={img.hint}
                        />
                    </button>
                ))}
            </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold font-headline">{product.name}</h1>
          <div className="flex items-center gap-4">
            <StarRating rating={product.rating} />
            <span className="text-muted-foreground">({product.reviewCount} reviews)</span>
          </div>
          <p className="text-3xl font-bold text-primary">${product.price.toFixed(2)}</p>
          <p className="text-lg text-muted-foreground">{product.description}</p>
          
          <Button size="lg" className="w-full max-w-sm" onClick={() => addToCart(product)}>
            <ShoppingCart className="mr-2 h-5 w-5" />
            Add to Cart
          </Button>
        </div>
      </div>
      
      <Separator className="my-12" />

      <div className="grid md:grid-cols-2 gap-12">
        <Card>
          <CardHeader><CardTitle className="font-headline">Product Specifications</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-2 text-muted-foreground">
                <li className="flex justify-between"><span>Category:</span> <strong>{product.category}</strong></li>
                <li className="flex justify-between"><span>Weight:</span> <strong>1.2 lbs</strong></li>
                <li className="flex justify-between"><span>Dimensions:</span> <strong>8 x 4 x 1 inches</strong></li>
                <li className="flex justify-between"><span>Material:</span> <strong>Premium Composite</strong></li>
            </ul>
          </CardContent>
        </Card>
        <Card>
            <CardHeader><CardTitle className="font-headline">Customer Reviews</CardTitle></CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {reviews.map(review => (
                        <div key={review.id}>
                            <div className="flex items-center gap-2">
                                <StarRating rating={review.rating}/>
                                <h4 className="font-bold">{review.title}</h4>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">by {review.author} on {review.date}</p>
                            <p className="mt-2">{review.comment}</p>
                        </div>
                    ))}
                    <Separator/>
                    <div>
                        <h4 className="font-bold mb-2 font-headline">Write a review</h4>
                        <div className="grid gap-4">
                            <Textarea placeholder="Share your thoughts..."/>
                            <Button className="justify-self-start bg-accent hover:bg-accent/90">Submit Review</Button>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
      </div>
      <ProductRecommendations />
    </div>
  );
}
