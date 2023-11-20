import { CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import taiwan from "/public/taiwan.png";
export function Logo() {
  return (
    <>
      <CardHeader>
        <div className="w-full flex justify-center">
          <Image src={taiwan} alt="taiwan" width={80} height={10} />
        </div>
        <CardTitle className="w-full flex justify-center font-['cursive']">
          T<span className="text-blue-400">A</span>I<span> W</span>
          <span className="text-lime-600">A</span>N
        </CardTitle>
        <CardTitle className="w-full flex justify-center font-['cursive']">
          R<span>E</span>
          <span className="text-red-500">A</span>L<span>T</span>
          <span> Y</span>
        </CardTitle>
      </CardHeader>
    </>
  );
}
