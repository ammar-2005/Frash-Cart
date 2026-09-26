import FeaturedProduct from "./-component/FeaturedProduct/FeaturedProduct";
import ShopCategory from "./-component/ShopCategory/ShopCategory";
import HeroSlider from "./-component/Slider/HomeSlider";
import Subscription from "./-component/Subscription/Subscription";
import PromoBanners from "./-component/item-cart/PromoBanners";
import ItemCart from "./-component/item-cart/item-cart";
import { Toaster } from "@/components/ui/toast"
export default function Home() {
  return (
    <main className="mx-auto max-w-9xl px-4">
      <HeroSlider/>
      <ItemCart/>
      <ShopCategory/>
      <PromoBanners/>
      <FeaturedProduct/>
      <Subscription/>
    </main>
  );
}
