import { Menu } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type ProfilePicType = string | StaticImageData;

export default function Header({
  onMenuClick,
  profilePic,
  name,
}: {
  onMenuClick: () => void;
  profilePic: ProfilePicType;
  name: string;
}) {
  return (
    <div className="flex justify-between items-center border-b px-4 sm:px-6 py-3 sm:py-4">
      {/* Mobile Menu Button */}
      <button className="lg:hidden" onClick={onMenuClick}>
        <Menu className="w-6 h-6 text-gray-700" />
      </button>

      {/* Course Info */}
      <div className="flex-1 text-left ml-3 lg:ml-0">
        <h1 className="text-lg sm:text-xl font-semibold truncate">
          TypeScript Programming
        </h1>
        <p className="text-xs sm:text-sm text-gray-500">
          Total Score: 88.26%
        </p>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-2 sm:gap-3 ml-2 sm:ml-0">
        <Image
          src={profilePic}
          alt="profile"
          className="w-9 h-9 sm:w-12 sm:h-12 rounded-full"
        />
        <p className="text-xs sm:text-sm font-medium hidden md:block truncate max-w-[100px] sm:max-w-none">
          {name}
        </p>
      </div>
    </div>
  );
}
