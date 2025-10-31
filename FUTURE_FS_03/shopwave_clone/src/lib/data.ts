import type { Product, Review, Order } from './types';
import placeholderImages from './placeholder-images.json';

const getImage = (id: string) => {
  const image = placeholderImages.placeholderImages.find(p => p.id === id);
  return {
    id: image?.id ?? 'default',
    url: image?.imageUrl ?? 'https://picsum.photos/seed/default/600/400',
    hint: image?.imageHint ?? 'product photo',
  };
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'Experience immersive sound with these noise-cancelling wireless headphones. Long-lasting battery and comfortable design for all-day wear.',
    price: 99.99,
    rating: 4.5,
    reviewCount: 150,
    category: 'Electronics',
    image: getImage('product-1'),
    images: [getImage('product-1'), getImage('product-2'), getImage('product-3')],
  },
  {
    id: '2',
    name: 'Modern Leather Backpack',
    description: 'A stylish and durable leather backpack perfect for work or travel. Features multiple compartments and a padded laptop sleeve.',
    price: 129.99,
    rating: 4.8,
    reviewCount: 88,
    category: 'Fashion',
    image: getImage('product-4'),
    images: [getImage('product-4'), getImage('product-5'), getImage('product-6')],
  },
  {
    id: '3',
    name: 'Smart Home Hub',
    description: 'Control all your smart devices from one central hub. Compatible with Alexa, Google Assistant, and Apple HomeKit.',
    price: 79.50,
    rating: 4.2,
    reviewCount: 210,
    category: 'Electronics',
    image: getImage('product-7'),
    images: [getImage('product-7'), getImage('product-8'), getImage('product-9')],
  },
  {
    id: '4',
    name: 'Organic Green Tea Set',
    description: 'A curated set of 12 premium organic green teas from around the world. The perfect gift for any tea lover.',
    price: 39.99,
    rating: 4.9,
    reviewCount: 305,
    category: 'Home Goods',
    image: getImage('product-10'),
    images: [getImage('product-10'), getImage('product-11'), getImage('product-12')],
  },
  {
    id: '5',
    name: 'Advanced Running Shoes',
    description: 'Lightweight and responsive running shoes with advanced cushioning technology for maximum comfort and performance.',
    price: 149.99,
    rating: 4.7,
    reviewCount: 412,
    category: 'Fashion',
    image: getImage('product-13'),
    images: [getImage('product-13'), getImage('product-14'), getImage('product-15')],
  },
  {
    id: '6',
    name: '4K Action Camera',
    description: 'Capture your adventures in stunning 4K. Waterproof, durable, and packed with features like image stabilization and Wi-Fi.',
    price: 199.99,
    rating: 4.6,
    reviewCount: 180,
    category: 'Electronics',
    image: getImage('product-16'),
    images: [getImage('product-16'), getImage('product-17'), getImage('product-18')],
  },
  {
    id: '7',
    name: 'Non-Stick Cookware Set',
    description: 'A complete 10-piece non-stick cookware set. Eco-friendly, easy to clean, and suitable for all stovetops.',
    price: 179.00,
    rating: 4.4,
    reviewCount: 254,
    category: 'Home Goods',
    image: getImage('product-19'),
    images: [getImage('product-19'), getImage('product-20'), getImage('product-21')],
  },
  {
    id: '8',
    name: 'The Alchemist by Paulo Coelho',
    description: 'A classic novel about following your dreams. A must-read for anyone seeking inspiration and purpose.',
    price: 14.95,
    rating: 4.9,
    reviewCount: 1023,
    category: 'Books',
    image: getImage('product-22'),
    images: [getImage('product-22'), getImage('product-23'), getImage('product-24')],
  },
];

export const reviews: Review[] = [
    { id: '1', productId: '1', author: 'Jane Doe', rating: 5, title: 'Amazing Sound!', comment: 'These headphones are incredible. The noise cancellation is top-notch and they are so comfortable.', date: '2023-10-15' },
    { id: '2', productId: '1', author: 'John Smith', rating: 4, title: 'Great value', comment: 'For the price, you can\'t beat the quality. Battery life is impressive.', date: '2023-10-12' },
    { id: '3', productId: '2', author: 'Emily White', rating: 5, title: 'My new favorite bag', comment: 'So stylish and functional. I get compliments everywhere I go!', date: '2023-09-28' },
];

export const orders: Order[] = [
    {
        id: 'SW-1024',
        date: '2023-10-20',
        status: 'Delivered',
        total: 144.98,
        items: [
            { ...products[1], quantity: 1 },
        ]
    },
    {
        id: 'SW-1023',
        date: '2023-10-18',
        status: 'Shipped',
        total: 108.98,
        items: [
            { ...products[0], quantity: 1 },
        ]
    },
    {
        id: 'SW-1022',
        date: '2023-09-05',
        status: 'Delivered',
        total: 223.94,
        items: [
            { ...products[4], quantity: 1 },
            { ...products[3], quantity: 1 },
        ]
    }
]

export const userHistory = {
  browsingHistory: [
    {
      productId: '3',
      productName: 'Smart Home Hub',
      category: 'Electronics',
    },
    {
      productId: '6',
      productName: '4K Action Camera',
      category: 'Electronics',
    },
  ],
  purchaseHistory: [
    {
      productId: '1',
      productName: 'Wireless Bluetooth Headphones',
      category: 'Electronics',
    },
  ],
};
