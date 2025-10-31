import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/shop/product-card';
import { products } from '@/lib/data';
import Image from 'next/image';
import placeholderImages from '@/lib/placeholder-images.json';

export default function Home() {
  const heroImage = placeholderImages.placeholderImages.find(p => p.id === "hero-1");

  return (
    <div className="flex flex-col">
      <section className="relative w-full h-[50vh] md:h-[60vh] bg-primary/10">
        {heroImage && (
            <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                className="object-cover"
                priority
                data-ai-hint={heroImage.imageHint}
            />
        )}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-primary-foreground bg-black/40 p-4">
          <h1 className="text-4xl font-headline font-bold md:text-6xl text-white drop-shadow-lg">
            Find Your Next Wave of Style
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-neutral-200 drop-shadow-md">
            Discover the best deals on electronics, fashion, home goods, and
            more. Quality products, unbeatable prices.
          </p>
          <Button asChild size="lg" className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#products">Shop Now</Link>
          </Button>
        </div>
      </section>

      <section id="products" className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-headline font-bold text-center mb-10">
            Top Picks For You
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
