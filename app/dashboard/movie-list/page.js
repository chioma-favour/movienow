        "use client"
import { db } from "@/config/firebase.config";
import { timestampToDate } from "@/utils/timestamp-to-date";
import { collection, getDocs, or, orderBy, query, where } from "firebase/firestore";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";



export default  function AddMovie({userId}){

      const [movies, setMovies] = React.useState([]);
      const {data : session} =useSession()
      const userIdentifier = userId || session?.user?.id


React.useEffect (()=>{

  const fetchMovies = async ()=>{
     try{
    const q = query(collection(db,"movies"));
    const onsnap = await getDocs(q,
      where("user","===", userIdentifier),
      orderBy("timecreated","desc")
    );

    //sent the fetch data into an array
     const compileMovies = [];
     onsnap.docs.forEach(doc => {
      compileMovies.push({
        id:doc.id,
        data:doc.data(),
      })
     })
     setMovies(compileMovies)
     console.log(compileMovies)

    
     } catch(error) {
      console.error("An error occoured fetching movies:",error)
     }
  }
  if (userIdentifier){
    fetchMovies()
  }
},[userIdentifier,session])

    return(
<main className="min-h-dvh p-4 bg-gray-50">
 <h1 className="text-center text-4xl font-bold text-red-400 mb-2">Your movie shelf</h1>
  <p className="text-center text-gray-500 texr-sm mb-6">A collection of all the movies you've added.Watchlist or completed.</p>
        
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:gap-12 px-8">
    {movies.map(movies =><Link href={`/dashboard/movie-list/${movies.id}`} key={movies.id}>
    <div className="w-[250px] h-[400px] bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <Image
      width={300}
      height={300}
      src="/love.webp"
      alt="movie-poster"
      className="w-[250px] h-[250px] rounded-t-xl"
      
      />
      <div className="p-3">
       <span className="block text-xl font-semibold text-gray-800">{movies.data.title}</span>
       <span className="block text-xl font-semibold text-gray-800 mb-1">{timestampToDate(movies.data.timestampToDate)}</span>
       <span className="block text-xl font-sm  text-gray-500 ">{movies.data.status}</span>
       <span className="text-sm text-gray-500 italic line-clamp-2">{movies.data.comment}</span>
      </div>
    </div>
    </Link>
    )}
    </div>     
        
 </main>
    )
}