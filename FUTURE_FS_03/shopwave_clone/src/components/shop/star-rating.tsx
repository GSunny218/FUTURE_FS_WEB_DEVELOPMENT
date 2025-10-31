import { Star, StarHalf, StarOff } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
}

export function StarRating({ rating, maxRating = 5, className }: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = maxRating - fullStars - halfStar;

  return (
    <div className={`flex items-center gap-0.5 ${className}`}>
      {Array(fullStars)
        .fill(0)
        .map((_, i) => (
          <Star key={`full-${i}`} className="h-4 w-4 text-amber-400 fill-amber-400" />
        ))}
      {halfStar === 1 && <StarHalf className="h-4 w-4 text-amber-400 fill-amber-400" />}
      {Array(emptyStars)
        .fill(0)
        .map((_, i) => (
          <Star key={`empty-${i}`} className="h-4 w-4 text-amber-200 fill-amber-200" />
        ))}
    </div>
  );
}
