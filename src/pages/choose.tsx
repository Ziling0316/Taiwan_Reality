import { Navbar } from "@/component/navbar";
import Image from "next/image";
import Footer from "/public/footer.jpg";
import { Button } from "@/components/ui/button";
import { FcLandscape } from "react-icons/fc";
import { FcDepartment } from "react-icons/fc";
import taiwan from "/public/taiwan.png";
export default function Choose() {
  return (
    <>
      <div className="h-screen w-screen flex-col flex-1">
        <div className="h-16">
          <Navbar />
        </div>
        <div className="flex-col flex-1">
          <div className="mt-28 w-screen flex justify-center">
            <Image src={taiwan} alt="taiwan" width={100} height={10} />
          </div>

          <div className="text-5xl font-bold flex-col pb-2">
            <h1 className="flex justify-center">
              T<span className="text-blue-400">A</span>I W
              <span className="text-lime-600">A</span>N
            </h1>
            <h1 className="flex justify-center">
              <div className="w-20"></div>R E
              <span className="text-red-500">A</span>L T Y
            </h1>
          </div>

          <h1 className="text-5xl font-bold flex justify-center">
            <span className="text-lime-600">台</span>
            <span className="text-blue-400">灣</span>房
            <span className="text-yellow-600">地</span>
            <span className="text-red-500">網</span>
          </h1>
          <div className="flex justify-center space-x-28 pt-10">
            <Button variant={"outline"} className="w-40 h-40 flex-col">
              <FcLandscape size={80} />
              聯賣土地
            </Button>
            <Button variant={"outline"} className="w-40 h-50 flex-col">
              <FcDepartment size={80} />
              聯賣建物
            </Button>
          </div>
        </div>
        {/* <div className="flex-col flex-1 mt-4">
          <Image src={Footer} alt="footer" width={1450} height={5} />
        </div> */}
      </div>
    </>
  );
}
