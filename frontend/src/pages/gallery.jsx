import UserNavbar from "../components/usernavbar";
import imageOne from "../images/user1.png";
import imageTwo from "../images/user2.png";
import imageThree from "../images/user3.png";
import imageFour from "../images/user4.png";
import imageFive from "../images/user5.png";
import imageSix from "../images/user6.png";

export default function UserGallery() {
  return (
    <div className="bg-black bg-opacity-100 text-white pb-10">
      <UserNavbar />
      <div className="pl-20 pr-10">
        <p className="text-[22px]">
          View all kinds of pictures taken by photographers
          <br /> in our
          <span className="text-[#B60418]"> Collection Gallery</span>
        </p>
        <div className="flex flex-col items-center justify-center">
          <div className="flex xl:flex-row flex-col pl-2 pr-2 gap-5 pt-5 items-center justify-center">
            <div className="relative w-[250px] md:w-[300px] h-[500px] text-center">
              <img
                src={imageOne}
                alt=""
                className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                <p className="text-[30px] font-bold">Senior Photography</p>
              </div>
            </div>

            <div className="flex flex-col flex-wrap gap-10 items-center justify-center pl-4 pr-4">
              <div className="flex flex-wrap gap-4">
                <div className="relative w-[250px] h-[210px] text-center">
                  <img
                    src={imageTwo}
                    alt=""
                    className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <p className="text-[30px] font-bold">Wedding Photography</p>
                  </div>
                </div>

                <div className="relative w-[250px] md:w-[300px] h-[210px] text-center">
                  <img
                    src={imageThree}
                    alt=""
                    className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <p className="text-[30px] font-bold">Fashion Photography</p>
                  </div>
                </div>

                <div className="relative w-[250px] h-[210px] text-center">
                  <img
                    src={imageFour}
                    alt=""
                    className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <p className="text-[30px] font-bold">Stilllife Photography</p>
                  </div>
                </div>
              </div>

              <div className="flex md:flex-row flex-col gap-4 items-center justify-center">
                <div className="relative w-[250px] md:w-[570px] h-[210px] text-center">
                  <img
                    src={imageFive}
                    alt=""
                    className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <p className="text-[30px] font-bold">Landscape Photography</p>
                  </div>
                </div>

                <div className="relative w-[250px] h-[210px] text-center">
                  <img
                    src={imageSix}
                    alt=""
                    className="w-full h-full opacity-100 transition-opacity duration-300 hover:opacity-50"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 transition-opacity duration-300 hover:opacity-100">
                    <p className="text-[30px] font-bold">Headshot Photography</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
