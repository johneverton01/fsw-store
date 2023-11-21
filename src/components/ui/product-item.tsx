import { ProductWithTotalPrice } from "@/helpers/products";
import { ArrowDownIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./badge";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex flex-col gap-4 max-w-[156px]">
      <div className="relative bg-accent rounded-md w-[156px] h-[170px] flex items-center justify-center">
        <Image 
          src={product.imageUrls[0]} 
          height={0} 
          width={0} 
          sizes="100vw" 
          alt={product.name} 
          className="h-[90px] w-auto object-contain max-h-[70%] max-w-[80%]"
        />
        {product.discountPercent > 0 && (
          <Badge className="absolute left-3 top-3 flex gap-1 px-2 py-0.5">
            <ArrowDownIcon size={16}/> {product.discountPercent}%
          </Badge>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-sm overflow-hidden whitespace-nowrap text-ellipsis">{product.name}</p>
        <div className="flex items-center gap-2">
          {product.discountPercent > 0 ? (
            <>
              <span className="font-semibold">
                { 
                  Intl.NumberFormat('pt-BR', { 
                    style: 'currency', 
                    currency: 'BRL' 
                  }).format(Number(product.totalPrice))
                }
              </span>
              <span className="opacity-75 line-through text-xs">
                {
                  Intl.NumberFormat('pt-BR', { 
                    style: 'currency', 
                    currency: 'BRL' 
                  }).format(Number(product.basePrice))
                }
              </span>
            </>
          ) : (
            <span className="font-semibold">
              {
                Intl.NumberFormat('pt-BR', { 
                  style: 'currency', 
                  currency: 'BRL' 
                }).format(Number(product.basePrice))
              }
            </span>
          )}

        </div>
      </div>
    </div>
  )
};

export default ProductItem;