const projects = [
  // ---------------- Shopify ----------------
  // {
  //   id: 1,
  //   title: "I-Brand",
  //   description: "A Shopify storefront for I-Brand with a clean product catalog and a streamlined checkout experience.",
  //   category: "Shopify",
  //   tech: ["Shopify"],
  //   url: "https://i-brand-globosoft.myshopify.com/"  
  // },
  {
    id: 2,
    title: "Coral Perfumes",
    description: "An online fragrance store presenting Coral Perfumes' range of perfumes and scents in a polished storefront.",
    category: "Shopify",
    tech: ["Shopify"],
    url: "https://www.coralperfumes.com/"  
  },
  {
    id: 3,
    title: "Pax Hospitality",
    description: "A Shopify-built website for Pax Hospitality, presenting the brand's hospitality offerings and enquiry options.",
    category: "Shopify",
    tech: ["Shopify"],
    url: "https://paxhospitality.com/"  
  },
  {
    id: 4,
    title: "Priya Boutique",
    description: "A Shopify store for Priya Boutique, showcasing a curated women's fashion and apparel collection.",
    category: "Shopify",
    tech: ["Shopify"],
    url: "https://priyabtqonline.com/"  
  },
  // {
  //   id: 5,
  //   title: "Western Lady",
  //   description: "A Shopify store for Western Lady, featuring women's western wear and everyday fashion.",
  //   category: "Shopify",
  //   tech: ["Shopify"],
  //   url: "https://western-lady-globosoft.myshopify.com/"  
  // },
  {
    id: 6,
    title: "Oceano",
    description: "A Shopify storefront for Oceano with a curated product range and a smooth shopping flow.",
    category: "Shopify",
    tech: ["Shopify"],
    url: "https://shop.oceano.ae/"  
  },
  {
    id: 7,
    title: "Ekava",
    description: "The India storefront for Ekava, offering the brand's products with online ordering and delivery.",
    category: "Shopify",
    tech: ["Shopify"],
    url: "https://ekava.in/"  
  },
  {
    id: 8,
    title: "Ekava UAE",
    description: "The UAE edition of Ekava's Shopify store, extending the brand's catalog to Gulf customers.",
    category: "Shopify",
    tech: ["Shopify"],
    url: "https://ekava.ae/"  
  },
  {
    id: 9,
    title: "Samsonite Saudi Arabia",
    description: "The Samsonite Saudi Arabia storefront, offering the brand's premium luggage, travel bags, and business cases.",
    category: "Shopify",
    tech: ["Shopify"],
    url: "https://samsonite.com.sa/"
  },
  {
    id: 10,
    title: "American Tourister Saudi Arabia",
    description: "American Tourister's Saudi Arabia store, featuring durable, colourful luggage, backpacks, and travel accessories.",
    category: "Shopify",
    tech: ["Shopify"],
    url: "https://americantourister.com.sa/"
  },
  // {
  //   id: 11,
  //   title: "Nestalgia",
  //   description: "A Shopify store for Nestalgia, presenting its product collection in a modern, mobile-friendly storefront.",
  //   category: "Shopify",
  //   tech: ["Shopify"],
  //   url: "https://nestalgia-globosoft.myshopify.com/"  
  // },
  {
    id: 12,
    title: "Deorkart",
    description: "An e-commerce platform offering premium dental and oral care products at affordable prices, powered by Penta Orthodontics and backed by innovative R&D from Amphilora Life Care",
    category: "Shopify",
    tech: ["Shopify"],
    url: "https://deorkart.com/"
  },
  {
    id: 13,
    title: "Jasperware",
    description: "A Shopify storefront for Jasperware, showcasing its products with a clean catalog and checkout.",
    category: "Shopify",
    tech: ["Shopify"],
    url: "https://jasperware.in/"  
  },
  // {
  //   id: 14,
  //   title: "Thai Arab",
  //   description: "A Shopify store for Thai Arab with a full product catalog and online checkout.",
  //   category: "Shopify",
  //   tech: ["Shopify"],
  //   url: "https://thai-arab.myshopify.com/"  
  // },
  {
    id: 15,
    title: "American Tourister Bahrain",
    description: "American Tourister's Bahrain storefront, offering the brand's luggage, suitcases, and travel gear with local shipping.",
    category: "Shopify",
    tech: ["Shopify"],
    url: "https://www.americantourister.bh/"
  },

  // ---------------- OpenCart ----------------
  {
    id: 16,
    title: "Freshlandia",
    description: "A Dubai-based online grocery store delivering fresh produce, pantry essentials, and daily necessities with seamless shopping experience and doorstep delivery",
    category: "OpenCart",
    tech: ["OpenCart", "CSS"],
    url: "https://freshlandia.ae/"
  },
  {
    id: 17,
    title: "Black Rose",
    description: "An OpenCart store for Black Rose, featuring its product range with category browsing and checkout.",
    category: "OpenCart",
    tech: ["OpenCart", "CSS"],
    url: "https://blackrose.shop/"  
  },
  {
    id: 18,
    title: "EC Products",
    description: "Online store showcasing innovative height management solutions including adjustable ladders, lifts, and poles for domestic, industrial, and farming applications",
    category: "OpenCart",
    tech: ["OpenCart", "CSS"],
    url: "https://www.ecproduct.in/"
  },
  {
    id: 19,
    title: "Tarshish",
    description: "An OpenCart e-commerce site for Tarshish, offering an online product catalog with UAE delivery.",
    category: "OpenCart",
    tech: ["OpenCart", "CSS"],
    url: "https://tarshish.ae/"  
  },
  {
    id: 20,
    title: "AAM Trading",
    description: "E-commerce platform for a Qatar-based electrical and switchgear products supplier, featuring calibration services and product catalog with Dubai delivery options",
    category: "OpenCart",
    tech: ["OpenCart", "CSS"],
    url: "https://aamtrading.com/"
  },
  {
    id: 21,
    title: "Arar",
    description: "An OpenCart storefront for Arar with a full product catalog and shopping-cart checkout.",
    category: "OpenCart",
    tech: ["OpenCart", "CSS"],
    url: "https://arar.com/"  
  },
  {
    id: 22,
    title: "Lulu Connect",
    description: "A concept storefront for Lulu Connect, showcasing consumer electronics, gadgets, and home appliances.",
    category: "OpenCart",
    tech: ["OpenCart", "CSS"],
    url: "https://globosoft.org/2025/01/luluconnectnew/"  
  },

  // ---------------- HTML ----------------
  {
    id: 23,
    title: "Plumtrip",
    description: "A Dubai-based travel agency website offering curated travel packages, tour bookings, and destination guides for travelers exploring the UAE and beyond",
    category: "HTML",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://plumtrip.com/"
  },
  {
    id: 24,
    title: "Dreamzone Thrissur",
    description: "A professional website for DreamZone's Thrissur branch, showcasing creative skill development programs in design, fashion, and interior decoration offered by CADD Centre Training Services",
    category: "HTML",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://dreamzonethrissur.co.in/"
  },
  {
    id: 25,
    title: "Nirmala Study Abroad",
    description: "An informative consultancy website helping students navigate international education opportunities, featuring university listings, visa guidance, and application support services",
    category: "HTML",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://nirmalastudyabroad.com/"
  },
  {
    id: 26,
    title: "Eka Breath",
    description: "A wellness-focused website for Eka Breath, presenting breathing and mindfulness offerings with a calm, minimal design.",
    category: "HTML",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://ekabreath.com/"  
  },
  {
    id: 27,
    title: "John Paul Realty",
    description: "A real estate website for John Paul Realty, featuring property listings, project showcases, and buyer enquiries.",
    category: "HTML",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://johnpaulrealty.in/"  
  },
  {
    id: 28,
    title: "GSS Digital",
    description: "A digital agency website for GSS Digital, presenting services, portfolio, and contact options.",
    category: "HTML",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://gss-digital.com/"  
  },
  // {
  //   id: 29,
  //   title: "Crown Cres Events",
  //   description: "A dynamic event management platform featuring comprehensive event planning services, portfolio showcase, and booking capabilities for corporate and social gatherings",
  //   category: "HTML",
  //   tech: ["HTML", "CSS", "JavaScript"],
  //   url: "https://crowncres.com/"
  // },
  {
    id: 30,
    title: "Finmantra Group",
    description: "A corporate website for Finmantra Group presenting its financial and investment services with an enquiry-driven layout.",
    category: "HTML",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://finmantragroup.com/"  
  },
  {
    id: 31,
    title: "Budget Holidays",
    description: "A travel website for Budget Holidays, presenting affordable holiday packages and tour enquiries.",
    category: "HTML",
    tech: ["HTML", "CSS", "JavaScript"],
    url: "https://globosoft.org/2026/03/budgetholidays/"  
  }
];

export default projects;