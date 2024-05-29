export default function Signup() {
  return (
    <>
      <form className="flex h-screen justify-center items-center">
        <div className="w-96 p-6 pt-12 rounded-lg shadow-2xl">
          <div className="text-center mb-7">Sign Up And Start Learning </div>
          <div className="mx-auto">
            <div className="my-3">
              <label> First Name</label>
              <br />
              <input
                type="text"
                className="w-full mt-2 rounded-md p-1 outline outline-2 focus:outline-blue-400 "
              />
            </div>{" "}
            <div className="my-3">
              <label> Last Name</label>
              <br />
              <input
                type="text"
                className="w-full mt-2 rounded-md p-1 outline outline-2 focus:outline-blue-400"
              />
            </div>{" "}
            <div className="my-3">
              <label> E-mail</label>
              <br />
              <input
                type="email"
                className="w-full mt-2 rounded-md p-1 outline outline-2 focus:outline-blue-400"
                placeholder="example@gmail.com"
              />
            </div>{" "}
            <div className="my-3">
              <label> Password</label>
              <br />
              <input
                type="password"
                className="w-full mt-2 rounded-md p-1 outline outline-2 focus:outline-blue-400"
                placeholder="*************"
              />
            </div>
            <p className="text-xs tracking-tighter my-5">
              {" "}
              By signing up, you agree to our Terms of Use and Privacy Policy.
            </p>
            <button
              type="Submit"
              name="submit"
              className=" bg-blue-400 hover:bg-blue-600 mb-3 w-full text-center p-1 float-end rounded-md"
            >
              Sign Up{" "}
            </button>
            <div className="mb-5">
              {" "}
              Already have an account ?{" "}
              <a href="" className="text-blue-400 hover:text-blue-600 ml-3">
                Login
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
