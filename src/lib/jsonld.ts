export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LegalService",
    "name": "Law Office of Michael Hailu APLC",
    "url": "https://www.hailulawyers.com",
    "logo": "https://www.hailulawyers.com/ceo1.jpg",
    "description":
      "Experienced California legal representation in Employment Law, Tenant Habitability, Personal Injury, and Immigration Law. Serving Los Angeles and Oakland.",
    "telephone": "(213) 455-5595",
    "priceRange": "$$",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "3435 Wilshire Blvd, Suite 2285",
        "addressLocality": "Los Angeles",
        "addressRegion": "CA",
        "postalCode": "90010",
        "addressCountry": "US",
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "1999 Harrison Street, Suite 1800",
        "addressLocality": "Oakland",
        "addressRegion": "CA",
        "postalCode": "94612",
        "addressCountry": "US",
      },
    ],
    "areaServed": ["California", "Los Angeles", "Oakland", "Bay Area", "Southern California"],
  };
}

export function getAttorneySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Attorney",
    "name": "Michael Hailu",
    "jobTitle": "Managing Attorney",
    "worksFor": {
      "@type": "LegalService",
      "name": "Law Office of Michael Hailu APLC",
    },
    "url": "https://www.hailulawyers.com/attorneys/michael-hailu",
    "image": "https://www.hailulawyers.com/ceo1.jpg",
    "telephone": "(213) 455-5595",
  };
}

export function getBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((it, idx) => ({
      "@type": "ListItem",
      "position": idx + 1,
      "name": it.name,
      "item": `https://www.hailulawyers.com${it.item}`,
    })),
  };
}
