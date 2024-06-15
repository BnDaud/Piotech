import { RiSpam2Fill } from "react-icons/ri";

export default function Dashboardpage() {
  return (
    <>
      <div className="  min-h-screen ">
        <div className="h-36 bg-general_blue text-amber_gold uppercase text-center pt-7">
          {" "}
          Welcome, username
          <br />
          <span className="normal-case text-white ">
            <div className="mt-5">
              Manage your account,view your progress,and track your earnings.
            </div>
          </span>
        </div>
        <div className="px-8">
          <div className="flex justify-between  mt-12">
            <div className="self-end w-96 ">
              <div className="uppercase text-center font-bold"> username</div>
            </div>
            <div className=" text-white ">
              <div>
                {" "}
                <button className="bg-amber_gold mb-5 w-full p-2">
                  {" "}
                  Edit Profile
                </button>
              </div>
              <div>
                <button className="bg-amber_gold w-full p-2">
                  {" "}
                  Account Settings
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <p className="mt-2">
              Email:<span>username@mail.com</span>
            </p>
            <p className="mt-2">
              Phone Number:<span>+2349080878698</span>
            </p>
            <p className="mt-2">
              Member Since:<span>January 2024</span>
            </p>
          </div>
        </div>
        <div className="flex justify-between p-3  mt-10 ml-8 border border-1 w-7/12 rounded-lg h-40 uppercase">
          <div className="text-center w-1/3 border border-1 border-black mr-3">
            Direct Referrals{" "}
            <span>
              <div className="mt-10"> $10</div>
            </span>
          </div>
          <div className="text-center w-1/3  border border-1 border-black mr-3">
            indirect Referrals{" "}
            <span>
              <div className="mt-10"> $20</div>
            </span>
          </div>
          <div className="text-center w-1/3 border border-1 border-black">
            Monthly subscripton earning
            <span>
              <div className=" mt-3"> $30</div>
            </span>
          </div>
        </div>{" "}
        <div className="grid grid-cols-12 mt-2 p-10">
          <div className="col-span-3"></div>
          <div className="   col-span-9 p-3  border border-1 h-52 rounded-lg">
            <div className="font-bold text-lg"> Your Learning progress</div>
            <div className="border border-1 border-black h-36 mt-3 p-3  ">
              <p className="mb-4"> Web Development</p>
              <div className="border border-5  w-36  h-2 rounded-lg mb-5 ">
                <div className=" bg-blue-600  w-24 h-2 rounded-md "></div>
              </div>
              <p className="mb-1">completed 8/10 modules</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-1  mx-8 p-5 rounded-lg">
        {" "}
        <div className="uppercase font-bold text-lg ml-5 mb-3">
          Upcoming Mentorship
        </div>
        <div className="border border-1  h-72 mb-3"></div>
      </div>
      <footer>
        {" "}
        <div className=" mt-5 w-full bg-general_blue text-center text-white p-8">
          {" "}
          2024 Piotech, All rights reserved.
          <br />
          <span>
            <div className="mt-3">Contact support@piotech.com</div>
          </span>
        </div>
      </footer>
    </>
  );
}
