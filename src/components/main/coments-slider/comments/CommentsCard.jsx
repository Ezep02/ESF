import { useState, useEffect } from "react";

function CommentsCard({
  video1ID,
  video1Title,
  video2ID,
  video2Title,
  video3ID,
  video3Title,
}) {
  const [videos, setVideo] = useState(null);
  

  useEffect(() => {
    const searchComments = async (video1, video2, video3) => {
      try {
        const responseVideo1 = await fetch(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&textFormat=plainText&videoId=${video1}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
        );
        
        const responseVideo2 = await fetch(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${video2}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
        );

        const responseVideo3 = await fetch(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${video3}&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`
        );

        if (!responseVideo1.ok) {
          throw new Error("Error al obtener los datos");
        }

        //set video 1 response
        const resultVideo1 = await responseVideo1.json();
        const resultVideo2 = await responseVideo2.json();
        const resultVideo3 = await responseVideo3.json();

        setVideo({resultVideo1, resultVideo2, resultVideo3});
        
      } catch (e) {
        console.error("error", e.message);
      }
    };

    searchComments(video1ID, video2ID, video3ID);
  }, []);

  if (!videos) {
    // Mientras se cargan los datos, puedes renderizar un componente de carga o un mensaje.
    return <div>Cargando...</div>;
  }

  const {resultVideo1, resultVideo2, resultVideo3} = videos
  

  return (
    <article className=" 
        rounded-2xl bg-zinc-950 
        col-start-1 col-end-13 row-start-1 row-end-13
        xl:col-start-1 xl:col-end-13 xl:row-start-1 xl:row-end-13
        lg:col-start-1 lg:col-end-13 lg:row-start-1 lg:row-end-13
        md:col-start-1 md:col-end-13 md:row-start-1 md:row-end-13
        sm:col-start-1 sm:col-end-13 sm:row-start-1 sm:row-end-13
        flex flex-col items-center 
    ">
      <div className="w-full flex justify-center p-10
        xl:justify-start lg:justify-start md:justify-start sm:justify-center

      ">
        <h2 className="font-bold text-5xl">Comentarios</h2>
      </div>
      
      <div className="
        w-3/4 p-4 flex flex-col gap-2 overflow-y-scroll
        xl:p-4 lg:p-4 md:p-2 ms:p-1

      ">
        
        <ul className="flex flex-col gap-2">
          {resultVideo1 ? (
            resultVideo1.items.map((item) => (   
                item.snippet.topLevelComment.snippet.authorDisplayName == "@eros.s.f" ? 
                (
                    <li key={item.id} className="bg-red-900 p-2 rounded-md shadow-2xl ">
                        <span className="text-white">
                            <h3 className="font-bold text-pretty">{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>   
                            {item.snippet.topLevelComment.snippet.textOriginal}
                        </span> 
                        
                    </li>
                ) : 
                <li key={item.id} className="bg-zinc-900 p-2 rounded-md shadow-2xl">
                        <span className="text-white">
                            <h3 className="font-bold text-pretty">{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>   
                            {item.snippet.topLevelComment.snippet.textOriginal}
                        </span> 
                    <h4 className="opacity-50 text-xs">{video1Title}</h4>
                </li>
                         
            ))
          ) : (
            <p>Cargando datos...</p>
          )}
        </ul>

        <ul className="flex flex-col gap-2">
          {resultVideo2 ? (
            resultVideo2.items.map((item) => (
              item.snippet.topLevelComment.snippet.authorDisplayName == "@eros.s.f" ? 
                (
                    <li key={item.id} className="bg-red-900 p-2 rounded-md shadow-2xl">
                        <span className="text-white">
                            <h3 className="font-bold">{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>   
                            {item.snippet.topLevelComment.snippet.textOriginal}
                        </span> 
                        
                    </li>
                ) : 
                <li key={item.id} className="bg-zinc-900 p-2 rounded-md shadow-2xl">
                        <span className="text-white">
                            <h3 className="font-bold">{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>   
                            {item.snippet.topLevelComment.snippet.textOriginal}
                        </span> 
                    <h4 className="opacity-50 text-xs">{video2Title}</h4>
                </li>
                         
            ))
          ) : (
            <p>Cargando datos...</p>
          )}
        </ul>

        <ul className="flex flex-col gap-2">
          {resultVideo3 ? (
            resultVideo3.items.map((item) => (
              item.snippet.topLevelComment.snippet.authorDisplayName == "@eros.s.f" ? 
                (
                    <li key={item.id} className="bg-red-900 p-2 rounded-md shadow-2xl">
                        <span className="text-white">
                            <h3 className="font-bold">{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>   
                            {item.snippet.topLevelComment.snippet.textOriginal}
                        </span> 
                        
                    </li>
                ) : 
                <li key={item.id} className="bg-zinc-900 p-2 rounded-md shadow-2xl">
                        <span className="text-white">
                            <h3 className="font-bold text-pretty">{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>   
                            {item.snippet.topLevelComment.snippet.textOriginal}
                        </span> 
                    <h4 className="opacity-50 text-xs">{video3Title}</h4>
                </li>
                         
            ))
          ) : (
            <p>Cargando datos...</p>
          )}
        </ul>

      </div>
    </article>
  );
}

export default CommentsCard;
