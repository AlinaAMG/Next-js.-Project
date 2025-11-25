import { AiFillHome } from 'react-icons/ai';
import { Button } from '../ui/button';
import Link from 'next/link';

const Logo = () => {
  return (
    <div className="flex items-center gap-x-3">
      <Button size="icon-lg" asChild>
        <Link href="/">
          <AiFillHome className="size-6" />
        </Link>
      </Button>
      <Link href="/">
        <span className="text-xl font-bold italic text-primary">HomeVibes</span>
      </Link>
    </div>
  );
};

export default Logo;
