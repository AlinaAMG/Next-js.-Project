
export type FormState = {
  message: string;
  errors?: { [key: string]: string[]; }
}

export type actionFunction = (
  prevState: FormState,
  formData: FormData
) => Promise<FormState>;

export type CartItem = {
  productId: string;
  image: string;
  title: string;
  price: string;
  amount: number;
  company: string;
};

export type CartState = {
  cartItems: CartItem[];
  numItemsInCart: number;
  cartTotal: number;
  shipping: number;
  tax: number;
  orderTotal: number;
};
