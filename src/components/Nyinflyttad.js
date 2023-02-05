import { Link } from "react-router-dom";
import nyinflyttadimage from "../assets/nyinflyttadimage.jpg";
import AnimatedPage from "./AnimatedPage";
export const Nyinflyttad = () => {
  return (
    <>
      <AnimatedPage>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="lg:ml-3">
            <img className="w-full h-full" src={nyinflyttadimage} />
          </div>
          <div className="mx-3 flex justify-center items-center flex-col mt-12 md:mt-12">
            <h4 className="text-3xl text-center font-body">Nyinflyttad</h4>
            <p className="text-center mt-8 font-body">
              Välkommen till samfällighetsföreningen Stenbocken i Tullinge{" "}
              <br />
              Vi har försökt samla en del nyttig information <br /> som kan vara
              bra att veta inför flytten till ditt nya hem, ta del av den{" "}
              <Link to="/">här</Link>
            </p>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};
