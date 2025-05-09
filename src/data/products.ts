import * as XLSX from 'xlsx';

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
      "/cognitiev-uploads/A1.jpg",
      "/cognitiev-uploads/A2.png"
    ],
    description: "Boho Macrame woven cotton handbag\nSize - 20D x 20W x 65H CM",
  },
  {
    id: "B",
    name: "Natural Diamond Pattern",
    images: [
      "/cognitiev-uploads/B1.jpg",
      "/cognitiev-uploads/B2.png"
    ],
    description: "Boho Macrame woven cotton handbag\nSize - 20D x 20W x 65H CM",
  },
  {
    id: "C",
    name: "Lime Checkerboard",
    images: [
      "/cognitiev-uploads/C1.jpg",
      "/cognitiev-uploads/C2.png"
    ],
    description: "Boho Macrame woven cotton handbag\nSize - 20D x 20W x 65H CM",
  },
  {
    id: "D",
    name: "Natural Market Tote",
    images: [
      "/cognitiev-uploads/D1.jpg",
      "/cognitiev-uploads/D2.png"
    ],
    description: "Boho Macrame woven cotton handbag\nSize - 20D x 20W x 65H CM",
  },
  {
    id: "E",
    name: "Natural Diamond Weave",
    images: [
      "/cognitiev-uploads/E1.jpg",
      "/cognitiev-uploads/E2.png"
    ],
    description: "Boho Macrame woven cotton handbag\nSize - 20D x 20W x 65H CM",
  },
  {
    id: "F",
    name: "Lavender Wave",
    images: [
      "/cognitiev-uploads/F1.jpg",
      "/cognitiev-uploads/F2.png"
    ],
    description: "Boho Macrame woven cotton handbag\nSize - 20D x 20W x 65H CM",
  },
  {
    id: "G",
    name: "Natural Diamond Accent",
    images: [
      "/cognitiev-uploads/G2.png" 
    ],
    description: "Boho Macrame woven cotton handbag\nSize - 20D x 20W x 65H CM",
  },
];

export function loadProductsFromExcel(excelUrl: string): void {
  fetch(excelUrl)
    .then(response => response.arrayBuffer())
    .then(buffer => {
      const workbook = XLSX.read(buffer, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const data: Product[] = XLSX.utils.sheet_to_json(worksheet);

      data.forEach(product => {
        products.push({
          id: product.id,
          name: product.name,
images: (product.images as unknown as string).split(','),
          description: product.description
        });
      });
    })
    .catch(error => console.error('Error loading Excel file:', error));
}
