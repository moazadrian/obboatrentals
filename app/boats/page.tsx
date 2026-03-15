import { SEO } from "@/content/seo";
import BoatsContent from "@/components/sections/BoatsContent";

export const metadata = SEO.boats;

export default function BoatsPage() {
  return <BoatsContent />;
}
