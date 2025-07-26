import { Authorizationcheck } from "@/config/authorization-check"
import MovieList from "./movie-list"
import { auth } from "@/auth";

export default async function Page(){
  const session = await auth();
  return(
    <>
    <Authorizationcheck/>
    <MovieList userId={session?.user?.id}/>
    
    </>
  )
}