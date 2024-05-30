import { MdSearch } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { MdMedicalServices } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { RiContactsBook3Line } from "react-icons/ri";
import { useEffect, useState } from "react";

export default function Sidenavbar(arg) {
  const [hover, setHover] = useState(false);
  const [x_cordinate, setX_cordinate] = useState();

  return (
    <>
      <div
        className="flex  relative"
        onMouseMove={(e) => {
          console.log(e.clientX);
          if ((e.clientX <= 47) & (hover == false)) {
            setHover(true);
          }
          if ((e.clientX >= 285) & (hover == true)) {
            setHover(false);
          }
        }}
      >
        <ul className="uppercase text-xl tracking-tighter p-2 bg-slate-400 w-12 h-screen fixed hover:opacity-100 opacity-20 duration-1000 hover:w-72 ">
          <li
            className={`flex items-center p-1 mt-10 bg-slate-500 rounded-lg h-10  ${
              !hover ? "w-8" : ""
            }`}
          >
            <span>
              {" "}
              <MdSearch className="ml-1 mt-1" />
            </span>
            <span>
              <input
                className={`w-56 ml-2  pl-2 text-base rounded-md focus:outline-none  ${
                  hover ? "block" : "hidden"
                }`}
                type="text"
              />
            </span>
          </li>
          <li className="mt-20">
            <a className="flex" href="">
              <span>
                <IoHomeSharp className="ml-1" />
              </span>
              <span className={`${hover ? "block" : "hidden"} ml-2`}>Home</span>
            </a>
          </li>
          <li className="mt-20">
            <a className="flex " href="">
              <span>
                <TbListDetails className="mt-1 ml-1" />
              </span>
              <span className={`ml-2 ${hover ? "block" : "hidden"}`}>
                About
              </span>
            </a>
          </li>
          <li className="mt-20">
            {" "}
            <a className="flex" href="">
              <span>
                {" "}
                <MdOutlineWork className="mt-1 ml-1" />
              </span>
              <span className={`ml-2 ${hover ? "block" : "hidden"}`}>Work</span>
            </a>
          </li>
          <li className="mt-20">
            {" "}
            <a className=" flex" href="">
              <span>
                <MdMedicalServices className="mt-1 ml-1" />
              </span>
              <span className={`ml-2 ${hover ? "block" : "hidden"}`}>
                Services
              </span>
            </a>
          </li>
          <li className="mt-20">
            {" "}
            <a className="flex " href="">
              <span>
                <RiContactsBook3Line className=" mt-1 ml-1" />
              </span>
              <span className={`ml-2 ${hover ? "block" : "hidden"}`}>
                Contact
              </span>
            </a>
          </li>
        </ul>
        <div>{<arg.homepage />}</div>
      </div>
    </>
  );
}
