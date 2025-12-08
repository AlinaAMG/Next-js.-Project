"use client";
import { useUser } from "@clerk/nextjs";

const UserInitial = () => {
  const { user, isLoaded } = useUser();
  if (!isLoaded) return <span className="text-lg font-semibold">...</span>;
  const userInitial = user?.firstName ? user.firstName : '';

  return (
    <span className="text-xs font-semibold">
      {userInitial ? <p> Welkom {userInitial}</p> : ''}
    </span>
  );
};

export default UserInitial;
