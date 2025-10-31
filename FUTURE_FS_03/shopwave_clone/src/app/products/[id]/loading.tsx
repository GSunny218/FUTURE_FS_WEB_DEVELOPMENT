import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <Skeleton className="w-full h-96 rounded-lg" />
          <div className="flex gap-4 mt-4">
            <Skeleton className="w-24 h-24 rounded-md" />
            <Skeleton className="w-24 h-24 rounded-md" />
            <Skeleton className="w-24 h-24 rounded-md" />
          </div>
        </div>
        <div className="space-y-6">
          <Skeleton className="h-10 w-3/4" />
          <Skeleton className="h-6 w-1/4" />
          <Skeleton className="h-8 w-1/3" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-5/6" />
          </div>
          <Skeleton className="h-12 w-full max-w-sm" />
        </div>
      </div>
    </div>
  );
}
