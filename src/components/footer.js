import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <div className="flex justify-between p-2 mb-5 static">
        <div className="ml-4">
          2024@<span className="text-red-500">PioTech</span>
        </div>

        <ul className=" inline-flex flex-wrap space-x-10 ">
          <li>Home</li>
          <li>Work</li>
          <li>About</li>
          <li>Services</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <div className="inline-flex mr-4 space-x-2">
          <FaFacebookF />
          <FaInstagram />
          <BsTwitterX />
        </div>
      </div>
    </>
  );
}
