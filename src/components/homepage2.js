import { FaArrowLeft } from "react-icons/fa6";

export default function Homepage2() {
  return (
    <>
      <div className="flex items-center ">
        <div className="col-span-3 text-red-900 w-1/2  ml-20 p-20">
          PIO-TECH is a versatile organization that provides a comprehensive
          range of tech-related products and and services while actively
          promoting self-improvement among it members.Additionally the company
          empowers it members by offering opportunities to earn while they learn
          creating a holistic and supportive environment for personal and
          professional growth.
        </div>

        <div className="col-span-5 bg-black text-white w-80 mr-40">
          <div className="text-center font-bold text-lg mt-3"> Our Service</div>
          <ul className="mt-5 list-disc ml-10 ">
            <li className="mb-3">Web Development</li>{" "}
            <li className="mb-3">App Development</li>{" "}
            <li className="mb-3">Cyber Security</li>{" "}
            <li className="mb-3">FrontEnd/BackEnd Development</li>{" "}
            <li className="mb-3">Data Analysis</li>{" "}
            <li className="mb-3">Software Engineering</li>{" "}
            <li className="mb-3">Mentorship Services</li>{" "}
            <li className="mb-12">Financial Services</li>{" "}
          </ul>
        </div>
      </div>
      <div className="mt-5 font-mono text-center italic tracking-wider border-t-2 border-b-2 border-black p-4 mb-4">
        Works
      </div>
    </>
  );
}
