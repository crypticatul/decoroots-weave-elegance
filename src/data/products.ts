
export interface Product {
  id: string;
  name: string;
  images: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: "A",
    name: "Mint Tassel Tote",
    images: [
      "/lovable-uploads/8a8bce5b-eaa7-47bb-83de-6dc70363f9e6.png",
      "/lovable-uploads/19efa9d8-45ed-4e97-9590-02c26f7f16cf.png"
    ],
    description: "A spacious mint green macrame tote with decorative tassels and wooden handle, perfect for daily use.",
  },
  {
    id: "B",
    name: "Natural Diamond Pattern",
    images: [
      "/lovable-uploads/cecd9add-be72-4382-b8d0-3f3700b564f0.png",
      "/lovable-uploads/bcc36e6d-b295-4ae9-9157-3bdf789c016d.png"
    ],
    description: "An elegant cream-colored macrame bag featuring intricate diamond patterns and wooden button details.",
  },
  {
    id: "C",
    name: "Lime Checkerboard",
    images: [
      "/lovable-uploads/552c14ef-5bb0-47ca-bb87-216dc709d632.png",
      "/lovable-uploads/d1b694da-0ccc-450d-9962-5a5a3176fe86.png"
    ],
    description: "A vibrant lime green tote with checkerboard pattern and natural rope handle, ideal for shopping or beach days.",
  },
  {
    id: "D",
    name: "Natural Market Tote",
    images: [
      "/lovable-uploads/c9c2dab5-31a9-4e22-b53f-af3da4f70a5c.png",
      "/lovable-uploads/a3a4cb3f-0da2-4239-a59b-f76a8accc83a.png"
    ],
    description: "A lightweight natural-colored market tote with rope handles, perfect for everyday errands.",
  },
  {
    id: "E",
    name: "Natural Diamond Weave",
    images: [
      "/lovable-uploads/66ed4f7b-49a2-415c-a709-6d8666bd6c5a.png",
      "/lovable-uploads/de8ec7d7-4da2-4fb0-9051-d619c1364a4b.png"
    ],
    description: "A sophisticated cream handbag featuring unique diamond weave pattern with decorative elements.",
  },
  {
    id: "F",
    name: "Lavender Wave",
    images: [
      "/lovable-uploads/a871e9fe-b4b3-4166-a0cc-65d8dbae6aa2.png",
      "/lovable-uploads/c6524221-4aa6-4bab-8641-796a6f49d244.png"
    ],
    description: "A delicate lavender-colored handbag with wave pattern macrame and metal handles for an elegant look.",
  },
  {
    id: "G",
    name: "Natural Diamond Accent",
    images: [
      "/lovable-uploads/c04c2297-b92e-46b9-bbd0-8056a8104ef9.png",
      "/lovable-uploads/ff002f36-9dcb-4d8f-8fe4-8d97ded6c057.png"
    ],
    description: "A natural tote featuring turquoise and beige diamond accents with tassel details for a bohemian style.",
  },
];
