import { Input } from '../ui/input';
import { Label } from '../ui/label';

const name = 'price';

type FormInputNumberProps = {
  defaultValue?: number;
};

const PriceInput = ({ defaultValue }: FormInputNumberProps) => {
  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize mb-2">
        Price (€)
      </Label>
      <Input
        id={name}
        name={name}
        min={0}
        defaultValue={defaultValue || 100}
        type="number"
        required
      />
    </div>
  );
};

export default PriceInput;
