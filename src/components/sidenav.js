import { MdSearch } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { MdMedicalServices } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";

export default function Sidenavbar(arg) {
  return (
    <>
      <div className="flex  relative">
        <ul className="uppercase text-2xl tracking-tighter p-2 bg-slate-400 w-10 h-screen fixed hover:opacity-100 opacity-20">
          <li>
            {" "}
            <a href="">
              <MdSearch className="mt-20 " />
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <IoHomeSharp className="mt-20 " />
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <TbListDetails className="mt-20 " />
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <MdOutlineWork className="mt-20 " />
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <MdMedicalServices className="mt-20 " />
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <RiContactsBook3Line className="mt-20 " />
            </a>
          </li>
        </ul>
        <div>{<arg.homepage />}</div>
      </div>
    </>
  );
}
