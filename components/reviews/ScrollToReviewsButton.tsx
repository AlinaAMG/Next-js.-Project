'use client';

import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

type ScrollButtonProps = {
  rating: number | string;
  count: number;
};

const ScrollToReviewsButton = ({ rating, count }: ScrollButtonProps) => {
  const scrollToReviews = () => {
    const reviewsSection = document.getElementById('product-reviews');

    if (reviewsSection) {
      reviewsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <span className="flex items-center gap-x-2 cursor-pointer hover:text-primary my-3">
      <FaStar className="w-3 h-3" />
      {rating}/{count}
      <Link
        href="#product-reviews"
        onClick={scrollToReviews}
        className="underline text-blue-800 hover:text-primary"
      >
        {count === 0
          ? 'Geen reviews'
          : count === 1
          ? `Bekijk ${count} review`
          : `Bekijk ${count}reviews`}
      </Link>
    </span>
  );
};

export default ScrollToReviewsButton;
