import { ProductHero } from '@/components/product/ProductHero';
import { UserFeatureSection } from '@/components/product/UserFeatureSection';
import { MerchantFeatureSection } from '@/components/product/MerchantFeatureSection';
import { ProductCTA } from '@/components/product/ProductCTA';

export default function ProductPage() {
  return (
    <div className="flex w-full flex-col">
      <ProductHero />
      <UserFeatureSection />
      <MerchantFeatureSection />
      <ProductCTA />
    </div>
  );
}