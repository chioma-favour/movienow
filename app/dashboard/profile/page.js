import Image from "next/image"
import { Button } from "@mui/material"
import { auth } from "@/auth"


export default async function profile (){
  const session = await auth()

    return(

 <main className="min-h-screen flex justify-center py-4 md:w-px-12 lg:py-8 px-16  bg-gray-100">
   <div className="w-full md:w-[380px] flex flex-col gap-4 border border-gray-200 rounded-md bg-gray-50 md:p-6">
    
    <div className="flex justify-center">
      <Image
      width={80}
      height={80}
      src={session?.user?.image}
      alt="proflie"
      className="w-[80px] h-[80px] rounded-full"
      />
    </div>
    <p className="text-center py-3 border-b border-gray-600">{session?.user?.name}</p>
     <p className="text-center py-3 border-b border-gray-600">{session?.user?.email}</p>
     <p className="text-center py-3 border-b border-gray-600">{session?.user?.id}</p>
     

     <form>
        <Button className="w-full" variant="contained" color="error">Log Out</Button>
     </form>

   </div>
           
</main>
    )
}