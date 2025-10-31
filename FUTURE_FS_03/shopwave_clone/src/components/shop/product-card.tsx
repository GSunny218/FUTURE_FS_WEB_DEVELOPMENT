'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { Product } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { StarRating } from '@/components/shop/star-rating';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/cart-context';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      <Link href={`/products/${product.id}`} className="block">
        <CardContent className="p-0">
          <div className="relative h-56 w-full">
            <Image
              src={product.image.url}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={product.image.hint}
            />
          </div>
          <div className="p-4 space-y-2">
            <h3 className="font-headline text-lg font-medium truncate">{product.name}</h3>
            <p className="text-sm text-muted-foreground">{product.category}</p>
            <div className="flex items-center justify-between">
              <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
              <StarRating rating={product.rating} />
            </div>
          </div>
        </CardContent>
      </Link>
       <div className="px-4 pb-4">
         <Button 
            className="w-full bg-primary hover:bg-primary/90"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
          </Button>
       </div>
    </Card>
  );
}
