'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Plus, Minus, Trash2 } from 'lucide-react';

type CartDrawerProps = {
  onCheckout: () => void;
};

export function CartDrawer({ onCheckout }: CartDrawerProps) {
  const { items, updateQuantity, removeFromCart, clearCart } = useCart();
  const subtotal = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="flex h-full flex-col">
      {items.length === 0 ? (
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <h3 className="font-headline text-lg">Your cart is empty</h3>
          <p className="text-muted-foreground">Add some items to get started!</p>
        </div>
      ) : (
        <>
          <ScrollArea className="flex-1">
            <div className="space-y-4 pr-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-start gap-4">
                  <Image
                    src={item.image.url}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-md object-cover"
                    data-ai-hint={item.image.hint}
                  />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ${item.price.toFixed(2)}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={item.quantity}
                        readOnly
                        className="h-7 w-12 text-center"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-destructive"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
          <div className="mt-auto border-t pt-4">
            <div className="flex justify-between font-medium">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Shipping and taxes calculated at checkout.
            </p>
            <Button asChild size="lg" className="mt-4 w-full bg-accent hover:bg-accent/90">
              <Link href="/checkout" onClick={onCheckout}>Checkout</Link>
            </Button>
            <Button variant="outline" className="mt-2 w-full" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
