import ScrollToReviewsButton from '@/components/reviews/ScrollToReviewsButton';
import { fetchProductRating } from '@/utils/actions';

const ProductRating = async ({ productId }: { productId: string }) => {
  const { count, rating } = await fetchProductRating({ productId });
  return <ScrollToReviewsButton rating={rating} count={count} />;
};

export default ProductRating;
