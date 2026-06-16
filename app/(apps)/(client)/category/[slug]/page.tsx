import CategoryPage from "@/features/category/components/CategoryPage";
import { categoryData } from "@/features/category/model/category-data";

export async function generateStaticParams() {
  return Object.keys(categoryData).map((slug) => ({
    slug,
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  return <CategoryPage slug={params.slug} />;
}
