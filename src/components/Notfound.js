import { Link } from "react-router-dom";
import AnimatedPage from "./AnimatedPage";
export const NotFound = () => {
  return (
    <>
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <div className="absolute flex flex-col justify-center item-center top-0 right-0 left-0 bottom-0  bg-blackOverlay pl-4 pr-4">
            <AnimatedPage>
              <div className="flex justify-center">
                <h1 className="text-black text-2xl text-center drop-shadow-4xl">
                  Sidan du letar efter finns tyvärr inte, klicka på knappen
                  nedan för att komma hem.
                </h1>
              </div>
              <div className="flex justify-center mt-3">
                <Link to="/">
                  <button
                    type="button"
                    className="bg-green-500 hover:bg-btnBlueHover py-2 px-4 rounded text-lg text-white"
                  >
                    Hem
                  </button>
                </Link>
              </div>
            </AnimatedPage>
          </div>
        </div>
      </div>
    </>
  );
};
