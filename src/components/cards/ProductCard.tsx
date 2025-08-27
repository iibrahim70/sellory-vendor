import { IProduct } from "@/types";
import { Badge, Button } from "../ui";
import { Eye, ShoppingCart, Star } from "lucide-react";
import Image from "next/image";

export const ProductCard = ({ item }: { item: IProduct }) => {
  return (
    <div className="border rounded overflow-hidden group transition-all duration-300 hover:shadow-md hover:-translate-y-1 cursor-pointer">
      <div className="relative">
        <Image
          width={500}
          height={500}
          src={item?.image}
          alt={item?.title}
          className="w-full h-[200px] object-cover"
        />

        <Badge className="absolute top-2 right-2" variant="destructive">
          {Math.round(
            ((item?.price - item?.discountPrice) / item?.price) * 100
          )}
          % OFF
        </Badge>
      </div>

      <div className="p-3.5 space-y-3.5">
        <div className="space-y-1">
          <h6 className="truncate">{item?.title}</h6>
          <p>{item?.description}</p>
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-1">
            <Star
              className="size-5 text-yellow-500"
              fill="currentColor"
              stroke="none"
            />

            <div className="flex items-center gap-1 text-sm">
              <span className="font-semibold">{item?.rating}</span>
              <span className="text-muted-foreground">
                ({item?.totalRating})
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <h6>${item?.discountPrice}</h6>

            <span className="text-sm text-gray-500 line-through">
              ${item?.price}
            </span>
          </div>
        </div>

        <div className="space-y-3.5">
          <div className="flex items-center justify-between">
            <Button className="w-[60%]">
              <ShoppingCart />
              Bag
            </Button>

            <Button variant="outline" className="w-[35%]">
              <Eye />
              <span>Preview</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
