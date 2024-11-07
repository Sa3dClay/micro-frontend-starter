declare module "home/header" {
  const Header: React.ComponentType;
  export default Header;
}

declare module "home/footer" {
  const Footer: React.ComponentType;
  export default Footer;
}

declare module "home/products-api" {
  export interface ProductType {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string;
  }

  export function getProducts(): Promise<ProductType[]>;
  export function getProductById(id: string): Promise<ProductType>;
  export const currency: Intl.NumberFormat;
}
