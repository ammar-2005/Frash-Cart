import FeaturedProduct from "./-commponent/FeaturedProduct/FeaturedProduct";
import ShopCategory from "./-commponent/ShopCategory/ShopCategory";

export default function Home() {
  return (
    <main className="mx-auto max-w-8xl px-4">
      <ShopCategory/>
      <FeaturedProduct/>
    </main>
  );
}
