import { db } from "@/config/firebase.config"
import { timestampToDate } from "@/utils/timestamp-to-date"
import { doc, getDoc } from "firebase/firestore"
import Image from "next/image"
import { notFound } from "next/navigation"


async function fetchMovies(movieId){
 const movieRef = doc(db,"movies",movieId)
 const movieSnapshot = await getDoc(movieRef);

 if(!movieSnapshot.exists()){
    return notFound()
 }
 return{
    id : movieId,
    ...movieSnapshot.data(),
 }

}


export default async function Movies({params}){
     const {id} = await params;
      const movie = await fetchMovies(id)

return(
    <main className="min-h-screen bg-gray-50 p-6">
    <div className="flex justify-center">
        <Image
         width={500}
         height={500}
         alt="image"
         src="/movie.jpg"
        className="rounded-lg w-[100%] h-[300px]"
        />
     </div>
        <p className="text-2xl fontbold">{movie.title}</p>
        <p className="text-sm text-gray-600">{movie.status}</p>
        <p className="text-sm text-gray-500 italic">{movie.comment}</p>
        <p className="text-sm">{timestampToDate(movie.timestampToDate)}</p>
       

    </main>
)
}