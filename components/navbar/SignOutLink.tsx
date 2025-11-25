'use client';

import { toast } from 'sonner';
import { SignOutButton } from '@clerk/nextjs';
import Link from 'next/link';

const SignOutLink = () => {
  const handleLogout = () => {
    toast('Logout successfully!');
  };

  return (
    <SignOutButton>
      <Link href="/" className="w-full text-left" onClick={handleLogout}>
        Logout
      </Link>
    </SignOutButton>
  );
};

export default SignOutLink;
