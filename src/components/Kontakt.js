import nyinflyttadimage from "../assets/nyinflyttadimage.jpg";
import AnimatedPage from "./AnimatedPage";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
export const Kontakt = () => {
  return (
    <>
      <AnimatedPage>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
          <div className="lg:ml-3">
            <img className="w-full h-full" src={nyinflyttadimage} />
          </div>
          <div className="mx-3 flex justify-center items-center flex-col mt-12 md:mt-12">
            <h4 className="text-3xl text-center font-body">Kontakt</h4>
            <p className="text-center mt-8 font-body">
              Kontakta styrelsen i Samfälligheten Stenbocken via brevlådan
              Rundan 38 eller maila oss.
            </p>
            <p className="text-center font-body">Org.nr. 716416-2682</p>
            <Link
              to={{
                pathname: "https://www.facebook.com/groups/1048849535577506",
              }}
              target="_blank"
            >
              <p className="text-center font-body mt-3">
                <AiFillFacebook className="inline-block mr-1" />
                Gå med i vår facebook grupp
              </p>
            </Link>
          </div>
        </div>
      </AnimatedPage>
    </>
  );
};
