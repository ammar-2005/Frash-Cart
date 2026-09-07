import FeaturedProduct from "./-commponent/FeaturedProduct/FeaturedProduct";
import ShopCategory from "./-commponent/ShopCategory/ShopCategory";
import HeroSlider from "./-commponent/Slider/HomeSlider";
import PromoBanners from "./-commponent/item-cart/PromoBanners";
import ItemCart from "./-commponent/item-cart/item-cart";
import { Toaster } from "@/components/ui/toast"
export default function Home() {
  return (
    <main className="mx-auto max-w-8xl px-4">
      <HeroSlider/>
      <ItemCart/>
      <ShopCategory/>
      <PromoBanners/>
      <FeaturedProduct/>
      <Toaster />
    </main>
  );
}
