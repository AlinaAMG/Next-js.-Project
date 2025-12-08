import { Prisma } from '@prisma/client';

export type CartItemWithProduct = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type FormState = {
  message: string | undefined;
  errors?: { [key: string]: string[] };
};

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
