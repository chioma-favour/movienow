import { auth } from "@/auth"
import { Authorizationcheck } from "@/config/authorization-check"
import AddMovie from "./add-movie";


export default async function Page (){
  const session = await auth();
  return(
    <>
    <Authorizationcheck/>
    <AddMovie userId={session?.user.id}/>
    </>
  )
}