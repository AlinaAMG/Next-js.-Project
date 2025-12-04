import { Button } from "@/components/ui/button";
import { FiShoppingCart } from 'react-icons/fi';

const AddToCart = () => {
  return (
    <div className="relative inline-block ">
      <Button className="capitalize mt-8  flex gap-x-6 " size="xl">
        <FiShoppingCart className="absolute left-2 " />
        <p>add To cart</p>
      </Button>
    </div>
  );
};

export default AddToCart
