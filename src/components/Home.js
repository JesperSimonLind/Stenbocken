import homeImage2 from "../assets/homeImage2.jpg";
import AnimatedPage from "./AnimatedPage";
export const Home = () => {
  return (
    <>
      <div className="flex justify-start items-center flex-col h-screen">
        <div className="relative w-full h-full">
          <img className="w-full h-full object-cover" src={homeImage2}></img>
          <div className="absolute flex flex-col justify-center item-center top-0 right-0 left-0 bottom-0  bg-blackOverlay pl-4 pr-4">
            <AnimatedPage>
              <div className="flex justify-center">
                <h1 className="text-white text-6xl text-center font-body drop-shadow-4xl">
                  Välkommen till Stenbocken
                </h1>
              </div>
            </AnimatedPage>
          </div>
        </div>
      </div>
    </>
  );
};
