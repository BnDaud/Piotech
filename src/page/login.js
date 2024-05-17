import { FcGoogle } from "react-icons/fc";
import Login from "../components/login";

export default function Loginpage() {
  return (
    <>
      <div className=" flex flex-row h-screen items-center">
        <div className=" basis-2/6"> </div>
        <div className="basis-2/6 container mx-auto px-4 ">
          <div className="mt-3 flex flex-col justify-center ">
            <div className=" mx-auto"> Sign In</div>
            <div className="mt-3   cursor-pointer mx-auto flex flex-wrap">
              {" "}
              <FcGoogle className="text-2xl" />
              <span className="ml-3"> Sign In With Google</span>
            </div>
            <div className="mx-auto ">
              <Login />
            </div>
          </div>
        </div>
        <div className="basis-2/6 bg-green-900"></div>
      </div>
    </>
  );
}
