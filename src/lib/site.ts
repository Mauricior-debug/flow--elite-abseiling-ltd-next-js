export const site = {
  name: "Elite Abseiling Ltd",
  tagline: "Ascending to New Heights in Service and Safety",
  description:
    "Expert rope access and height safety services across the UK. IRATA-qualified technicians for inspections, façade work, cleaning, coatings, and confined-space related work.",
  phones: [
    { display: "+44 783 155 6343", href: "tel:+447831556343" },
    { display: "+44 779 273 8408", href: "tel:+447792738408" },
  ],
  email: "contact@eliteabseiling.co.uk",
  address: {
    line1: "39 Station Road",
    line2: "Liphook, Hampshire",
    country: "United Kingdom",
  },
  founded: "2017",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const serviceGroups = [
  {
    slug: "inspections-surveys",
    title: "Rope access inspections & surveys",
    summary:
      "Thorough condition reporting on concrete, paint, masonry, and steel — reached safely without scaffolding.",
    points: [
      "Visual inspections & reporting",
      "Photographic & video surveys",
      "Bridge inspections",
      "Structural inspections",
      "Condition surveys",
    ],
  },
  {
    slug: "installation",
    title: "Rope access installation",
    summary:
      "Installation work across construction and engineering where height access is the constraint.",
    points: [
      "Glazing, curtain walling & glass change",
      "Cladding",
      "Steel erection",
      "Banners and signs",
      "Electrical installations",
    ],
  },
  {
    slug: "cleaning-maintenance",
    title: "Cleaning & maintenance",
    summary:
      "From window cleaning to leak fixes and gutter work — maintenance that needs difficult access.",
    points: [
      "Window cleaning",
      "Industrial & façade cleaning",
      "Pressure washing & soft wash",
      "Structural repairs & maintenance",
      "Leak detection and fixing",
      "Gutter and downpipe maintenance",
      "Fabric canopy cleaning",
      "Sash window repair and replacement",
      "Ducting access and cleaning",
    ],
  },
  {
    slug: "painting-coatings",
    title: "Painting, decorating & coatings",
    summary:
      "Protective coatings and decoration for industrial and commercial structures at height.",
    points: [
      "Priming & base coatings",
      "Steel, masonry, timber & cladding coatings",
      "Silo & vessel painting",
      "Gutter lining systems",
      "Balcony & balustrade painting",
      "Waterproofing coatings & systems",
      "Full building & difficult-access painting",
    ],
  },
  {
    slug: "fabric-repair",
    title: "Brickwork, concrete & façade fabric",
    summary:
      "Repair and restore building fabric where rope access keeps disruption and cost down.",
    points: [
      "Brickwork and concrete repair",
      "Crack repair, repointing & resurfacing",
      "Glazing and fixing",
      "Curtain walling and cladding",
      "Mastic and silicone application",
      "Anchor bolt testing and installation",
    ],
  },
  {
    slug: "groundwork",
    title: "Construction & refurbishment — ground work",
    summary:
      "Foundational and ground-level refurbishment alongside height-access programmes.",
    points: [
      "Domestic groundwork",
      "Refurbishment & temporary works design",
      "Floor renovation",
      "Hardwood and engineered floors",
      "Tiling",
      "Concreting and self-levelling floors",
    ],
  },
] as const;

export const capabilityList = [
  "Glazing and fixing",
  "Industrial cleaning services",
  "Mastic and silicone application",
  "Leak detection",
  "PPE inspection and certification",
  "Painting and decorating",
  "Curtain walling and cladding",
  "Surveying and maintenance",
  "Brickwork and concrete repair",
  "Anchor bolt testing and installation",
] as const;
