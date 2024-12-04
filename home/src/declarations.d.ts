declare module "cart/login" {
  const Login: React.ComponentType;
  export default Login;
}

declare module "cart/mini-cart" {
  const MiniCart: React.ComponentType;
  export default MiniCart;
}

declare module "pdp/product-details" {
  const ProductDetails: React.ComponentType;
  export default ProductDetails;
}

declare module "home/header" {
  const Header: React.ComponentType;
  export default Header;
}

declare module "home/footer" {
  const Footer: React.ComponentType;
  export default Footer;
}

declare module "cart/cart-api" {
  export function useLoggedIn(): Boolean;
  export function addToCart(id: string);
}
