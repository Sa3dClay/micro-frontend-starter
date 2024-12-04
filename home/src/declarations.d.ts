declare module "cart/login" {
  const Login: React.ComponentType;
  export default Login;
}

declare module "cart/mini-cart" {
  const MiniCart: React.ComponentType;
  export default MiniCart;
}

declare module "cart/cart-api" {
  export function useLoggedIn(): Boolean;
  export function addToCart(id: string);
}
