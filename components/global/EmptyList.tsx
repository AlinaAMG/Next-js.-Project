import { cn } from '@/lib/utils';

const EmptyList = ({
  heading = 'No items found...',
  className,
}: {
  heading?: string;
  className?: string;
}) => {
  return (
    <h2 className={cn('text-xl mt-3 text-center text-red-800', className)}>
      {heading}
    </h2>
  );
};

export default EmptyList;
