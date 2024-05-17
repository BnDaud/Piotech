import Login from "../components/login";

export default function Loginpage() {
  return (
    <>
      <div className=" flex flex-row h-screen items-center">
        <div className=" basis-2/6"> </div>
        <div className="basis-2/6 container mx-auto px-4 ">
          <div className="mt-3 flex flex-col justify-center ">
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
