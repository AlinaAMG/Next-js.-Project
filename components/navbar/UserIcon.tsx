import { LuUser } from 'react-icons/lu';
import { currentUser } from '@clerk/nextjs/server';

const UserIcon = async () => {
  // const { userId } = auth();
  const user = await currentUser();

  const profileImage = user?.imageUrl;
  if (profileImage) {
    return (
      <img
        src={profileImage}
        alt="avatar"
        className="w-6 h-6 rounded-full object-cover"
      />
    );
  }

  return (
    <LuUser className="size-5 bg-primary rounded-full text-white"></LuUser>
  );
};

export default UserIcon;
