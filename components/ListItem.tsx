import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

type ListItemProps = {
  handleClick: () => void;
  icon: any;
  text: string;
  target: string;
};

const ListItem = ({ icon, text, target, handleClick }: ListItemProps) => {
  return (
    <Link
      onClick={handleClick}
      href={target}
      className="flex px-2 py-1 items-center gap-2 hover:bg-gray-200 rounded-md"
    >
      <span className="">{icon}</span> <span>{text}</span>
    </Link>
  );
};

export default ListItem;
