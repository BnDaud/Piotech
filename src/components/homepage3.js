import img1 from "../staticimages/38.jpg";
import img2 from "../staticimages/41.jpg";
import img3 from "../staticimages/42.jpg";
import img4 from "../staticimages/40.jpg";
import img5 from "../staticimages/43.jpg";
import img6 from "../staticimages/44.jpg";

export default function Homepage3() {
  return (
    <>
      {" "}
      <div className="flex m-5 justify-between  ">
        <div>
          <img src={img1} alt="img1" className="rounded-lg h-52  w-96 " />
        </div>
        <div>
          <img src={img2} alt="img2" className="rounded-lg h-52  w-96" />
        </div>
        <div>
          <img src={img3} alt="img3" className="rounded-lg h-52 w-96" />
        </div>
      </div>
      <div className="text-center m-5 font-mono tracking-[6.5em] italic bg-red-800 p-5 text-white">
        {" "}
        PIO-TECH
      </div>
      <div className="flex m-5 justify-between ">
        <div>
          <img src={img4} alt="img4" className="rounded-lg h-52  w-96 " />
        </div>
        <div>
          <img src={img5} alt="img5" className="rounded-lg h-52  w-96" />
        </div>
        <div>
          <img src={img6} alt="img6" className="rounded-lg h-52 w-96" />
        </div>
      </div>
    </>
  );
}
