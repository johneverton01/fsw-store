import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./category-item";

const Categories = async () => {
  const categories= await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 md:gap-2 gap-y-3 gap-x-4">
      {categories.map(category => (
        <CategoryItem category={category} key={category.id} />
      ))}
    </div>
  )
};

export default Categories;
