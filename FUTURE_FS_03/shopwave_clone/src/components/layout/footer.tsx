import Link from 'next/link';
import { Logo } from '@/components/icons';
import { Github, Twitter, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col space-y-4">
            <Logo className="h-8 w-auto" />
            <p className="text-sm text-muted-foreground">
              Your one-stop shop for everything you need.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Github size={20} />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="font-headline font-semibold">Shop</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm hover:text-primary">Electronics</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Fashion</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Home Goods</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Books</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold">About</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="#" className="text-sm hover:text-primary">About Us</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Careers</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Press</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/contact" className="text-sm hover:text-primary">Contact Us</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">FAQ</Link></li>
              <li><Link href="#" className="text-sm hover:text-primary">Shipping & Returns</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} ShopWave. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
