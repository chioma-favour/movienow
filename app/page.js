import Image from "next/image"
export default function Landing () {

    return(
<main className="min-h-[520px] flex justify-center bg-gray-50 py-8 px-2 bg-red-600">
    <div>
        <Image
        width={300}
        height={300}
        src="/pop.png"
        alt="static image"
         className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-36 pointer-events-none w-[500px] h-[300px]"
        />
    </div>
<div className="w-full md:w-[30e] rounded-md bg-red-800 bg-opacity-50 p-4">
    <h1 className="text-3xl font-bold text-center pt-15 mb-3 text-white">WELCOME TO MovieNow</h1>
  
    <div>
 <Image
 width={400}
 height={400}
 src="/pop.webp"
 alt="image"
 className="w-[1200px] rounded-sm"
 />
 <div className=" mt-4 px-6">
    <h1 className="text-2xl font-bold text-white text-center">Grab your pop-corn every bite is an auction</h1>
 </div>
 </div>

<div>
  <Image
 width={400}
 height={400}
 src="/cinema1.avif"
 alt="image"
 className="w-[1200px] rounded-sm pt-10 "
 />
 <div>
    <h1 className="text-2xl font-bold text-white text-center">Every watch is a story to tell</h1>
 </div>
</div>
 
 <div>

     <Image
 width={400}
 height={400}
 src="/add.avif"
 alt="image"
 className="w-[1200px] rounded-sm pt-10"
 />
  <div>
    <h1 className="text-2xl font-bold text-white text-center">DREAMS TO REALITY</h1>
 </div>
 </div>
 </div>
</main>

)
}