import { FcGoogle } from "react-icons/fc";
export default function Login() {
  return (
    <>
      <div class=" w-96 mt-5 bg-rose-400">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className=" ml-32"> Sign In</div>
          <div className="mt-3  mb-10 cursor-pointer mx-auto flex flex-wrap border border-black rounded-lg pl-14 py-2">
            {" "}
            <FcGoogle className="text-2xl " />
            <span className="ml-3"> Sign In With Google</span>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm  mb-2 " for="email">
              Email
            </label>
            <input
              class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="example@email.com"
            />
          </div>
          <div class="mb-6">
            <label class="block text-gray-700 text-sm mb-2" for="password">
              Password
            </label>
            <input
              class="shadow appearance-none border border-black rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>

          <div className=" flex">
            <button
              class=" mx-auto  w-full block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-3"
              type="button"
            >
              Sign In
            </button>
          </div>

          <div>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Sign Up ?
            </a>
          </div>
          <div>
            <a
              class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form>
      </div>
    </>
  );
}
