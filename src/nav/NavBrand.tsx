import React from "react";
import { Link } from "react-location";
import { GiAnvilImpact } from "react-icons/gi";

type Props = {
  to: string;
};

function NavLink(props: React.PropsWithChildren<Props>) {
  return (
    <Link
      to={props.to}
      className={
        "text-2xl font-bold text-gray-800 flex dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
      }
    >
      <div className="flex">
        <GiAnvilImpact className={""} />
        <span>Mythwright</span>
      </div>
    </Link>
  );
}

export default NavLink;
