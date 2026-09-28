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

export const DEFAULT_SHIPPING_DETAILS = {
  "@type": "OfferShippingDetails",
  shippingRate: {
    "@type": "MonetaryAmount",
    value: "0.00",
    currency: "EUR",
  },
  shippingDestination: {
    "@type": "DefinedRegion",
    addressCountry: "FR",
  },
  deliveryTime: {
    "@type": "ShippingDeliveryTime",
    handlingTime: {
      "@type": "QuantitativeValue",
      minValue: 0,
      maxValue: 0,
      unitCode: "MIN",
    },
    transitTime: {
      "@type": "QuantitativeValue",
      minValue: 0,
      maxValue: 15,
      unitCode: "MIN",
    },
  },
};

export const DEFAULT_RETURN_POLICY = {
  "@type": "MerchantReturnPolicy",
  applicableCountry: "FR",
  returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
  merchantReturnDays: 7,
  returnMethod: "https://schema.org/ReturnByMail",
  returnFees: "https://schema.org/FreeReturn",
};
