import img1 from "../staticimages/38.jpg";
import img2 from "../staticimages/41.jpg";
import img3 from "../staticimages/42.jpg";
import img4 from "../staticimages/40.jpg";
import img5 from "../staticimages/43.jpg";
import img6 from "../staticimages/44.jpg";
import img7 from "../staticimages/45.jpg";
import img8 from "../staticimages/istock1.webp";
import img9 from "../staticimages/35.webp";

export default function Homepage4() {
  return (
    <>
      <div className="border-t-2 border-b-2 border-black text-center font-bold p-4 mb-5">
        Driven By Need
        <br />
        <span className="">
          <div className="mt-5 ml-18 mr-18 text-sm">
            In the ever-evolving landscape of technology, the driving force in
            the unyielding need for progress.
            <br /> Our tech company not only meets the needs but propels them
            forward, igniting innovation <br />
            and empowering our member sto shape a compelling digital future.
          </div>
        </span>
      </div>
      <div className=" flex  flex-wrap justify-between m-5 ">
        <div>
          <img src={img1} alt="img1" className="rounded-lg h-52  w-96 mb-3 " />
        </div>
        <div>
          <img src={img2} alt="img2" className="rounded-lg h-52  w-96 mb-3" />
        </div>
        <div>
          <img src={img3} alt="img3" className="rounded-lg h-52 w-96 mb-3" />
        </div>
        <div>
          <img src={img4} alt="img4" className="rounded-lg h-52  w-96 mb-3" />
        </div>
        <div>
          <img src={img5} alt="img5" className="rounded-lg h-52  w-96 mb-3" />
        </div>
        <div>
          <img src={img6} alt="img6" className="rounded-lg h-52 w-96 mb-3" />
        </div>
        <div>
          <img src={img7} alt="img4" className="rounded-lg h-52  w-96 mb-3" />
        </div>
        <div>
          <img src={img8} alt="img5" className="rounded-lg h-52  w-96 mb-3" />
        </div>
        <div>
          <img src={img9} alt="img6" className="rounded-lg h-52 w-96 mb-3" />
        </div>
      </div>
      <div className=" py-5 border-t-2 border-b-2 border-black mb-5">
        <div className="text-center font-bold bg-black text-gray-300 text-2xl  ">
          Driven By innovation
          <br className="mt-5" />
          <span>
            <div className=" text-sm p-10 ">
              “Pio-Tech is dedicated to delivering cutting-edge technological
              <br />
              solutions, prioritizing the need of both its members and clients,
              <br />
              ensuring fulfillment through impeccable delivery.”
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
