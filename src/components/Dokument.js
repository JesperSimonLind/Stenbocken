import nyinflyttadimage from "../assets/nyinflyttadimage.jpg";
import AnimatedPage from "./AnimatedPage";
export const Dokument = () => {
  return (
    <>
      <AnimatedPage>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="lg:ml-3 ">
            <img className="w-full h-full" src={nyinflyttadimage} />
          </div>
          <div className="mx-3 flex justify-center items-center flex-col mt-12 md:mt-12">
            <h4 className="text-3xl text-center font-body">Dokument</h4>
            <p className="text-center mt-8 font-body">
              Välkommen till samfällighetsföreningen Stenbocken i Tullinge{" "}
              <br />
              Här har vi samlat en del nyttiga dokument som kan vara bra att ha.
            </p>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};
