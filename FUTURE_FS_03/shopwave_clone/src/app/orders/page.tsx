import Image from 'next/image';
import { orders } from '@/lib/data';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function OrdersPage() {
  const getStatusVariant = (status: (typeof orders)[0]['status']) => {
    switch (status) {
      case 'Delivered':
        return 'default';
      case 'Shipped':
        return 'secondary';
      case 'Processing':
        return 'outline';
      case 'Cancelled':
        return 'destructive';
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold font-headline text-center mb-10">My Orders</h1>
      <div className="space-y-8">
        {orders.map((order) => (
          <Card key={order.id}>
            <CardHeader className="flex flex-row justify-between items-start">
              <div>
                <CardTitle className="font-headline">Order #{order.id}</CardTitle>
                <CardDescription>Date: {order.date}</CardDescription>
              </div>
              <Badge variant={getStatusVariant(order.status)}>{order.status}</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {order.items.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Image src={item.image.url} alt={item.name} width={64} height={64} className="rounded-md object-cover" data-ai-hint={item.image.hint} />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </CardContent>
            <Separator />
            <CardFooter className="flex justify-end pt-4 font-bold text-lg">
                <p>Total: ${order.total.toFixed(2)}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
