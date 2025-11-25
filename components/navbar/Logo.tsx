import { AiFillHome } from 'react-icons/ai';
import { Button } from '../ui/button';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex flex-col">
      <Button size="icon" asChild>
        <Link href="/">
          <AiFillHome className="text-white" />
        </Link>
      </Button>
      <span className="text-md font-semibold italic text-gray-600">
        HomeVibes
      </span>
    </div>
  );
};

export default Logo;
