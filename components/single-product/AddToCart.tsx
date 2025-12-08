'use client';

import { addToCartAction } from '@/utils/actions';
import { useState } from 'react';
import { FiShoppingCart } from 'react-icons/fi';
import SelectProductAmount, { Mode } from './SelectProductAmount';
import FormContainer from '../form/FormContainer';
import { ProductSignInButton, SubmitButton } from '../form/Buttons';
import { useAuth } from '@clerk/nextjs';

type AddToCartProps = {
  productId: string,
};

const AddToCart = ({ productId }: AddToCartProps) => {
  console.log('CLIENT-SIDE: ID in formulier:', productId);
  const [amount, setAmount] = useState(1);
  const { userId } = useAuth();
  return (
    <div className="">
      <SelectProductAmount
        mode={Mode.SingleProduct}
        amount={amount}
        setAmount={setAmount}
      />
      {userId ? (
        <FormContainer action={addToCartAction}>
          <input type="hidden" name="productId" value={productId} />
          <input type="hidden" name="amount" value={amount} />
          <SubmitButton
            text="add to cart"
            className="capitalize gap-2 mt-8 flex  items-center justify-center"
            size="xl"
          >
            <FiShoppingCart size={20} />
          </SubmitButton>
        </FormContainer>
      ) : (
        <ProductSignInButton />
      )}
    </div>
  );
};

export default AddToCart;
