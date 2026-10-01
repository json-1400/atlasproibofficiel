import { SITE_URL } from "@/lib/seo";

export const DEFAULT_BRAND = {
  "@type": "Brand",
  name: "Atlas Pro ONTV",
};

export const DEFAULT_PRODUCT_IMAGES = [
  `${SITE_URL}/atlasapp.webp`,
  `${SITE_URL}/ATLAS-PRO-interface.png`,
  `${SITE_URL}/logo.png`,
];

export const DEFAULT_RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "FR",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 7,
  returnFees: "https://schema.org/FreeReturn",
};
