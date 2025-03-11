import Image from "next/image";

interface ProfileCardProps {
  name: string;
  position: string;
  img: string; //
}

// ProfileCard for images of people in about page.
// Name image with people's names. Locate images at /images. Maybe restructure the folder structures just for
// Somebody please use Image instead of img. -David

export const ProfileCard = ({ name, position, img }: ProfileCardProps) => {
  return (
    <div className="flex flex-col pt-4 items-center">
      <div className="h-52 w-52 rounded-xl">
        <Image height={208} width={208} src={img} alt={"/images/uveec3.png"} />
      </div>
      <div className="text-start md:text-center">
        <div className="text-slate-900 font-semibold dark:text-slate-50">
          {name}
        </div>
        <div className="text-slate-400 mt-0.5 text-sm leading-6 text-center">
          {position}
        </div>
      </div>
    </div>
  );
};
