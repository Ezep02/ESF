import { API_KEY, CHANEL_ID } from "../../../../Utils.js";

import { useState, useEffect } from "react";

function CommentsCard({
  video1ID,
  video1Title,
  video2ID,
  video2Title,
  video3ID,
  video3Title,
}) {
  const [video1, setVideo1] = useState(null);
  const [video2, setVideo2] = useState(null);
  const [video3, setVideo3] = useState(null);

  useEffect(() => {
    const searchComments = async (video1, video2, video3) => {
      try {
        const responseVideo1 = await fetch(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&order=relevance&textFormat=plainText&videoId=${video1}&key=${API_KEY}`
        );
        

        
        const responseVideo2 = await fetch(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${video2}&key=${API_KEY}`
        );

        const responseVideo3 = await fetch(
          `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${video3}&key=${API_KEY}`
        );

        if (!responseVideo1.ok) {
          throw new Error("Error al obtener los datos");
        }

        //set video 1 response
        const resultVideo1 = await responseVideo1.json();
        setVideo1(resultVideo1);

        const resultVideo2 = await responseVideo2.json();
        setVideo2(resultVideo2);

        const resultVideo3 = await responseVideo3.json();
        setVideo3(resultVideo3);
        
      } catch (e) {
        console.error("error", e.message);
      }
    };

    searchComments(video1ID, video2ID, video3ID);
  }, []);

  return (
    <article className=" 
        rounded-2xl bg-zinc-950 pb-10
        col-start-1 col-end-13 row-start-5 row-end-13
        xl:col-start-1 xl:col-end-13 xl:row-start-5 xl:row-end-13
        lg:col-start-1 lg:col-end-13 lg:row-start-5 lg:row-end-13
        md:col-start-1 md:col-end-13 md:row-start-5 md:row-end-13
        sm:col-start-1 sm:col-end-13 sm:row-start-5 sm:row-end-13
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
          {video1 ? (
            video1.items.map((item) => (   
                item.snippet.topLevelComment.snippet.authorDisplayName == "@eros.s.f" ? 
                (
                    <li key={item.id} className="bg-red-900 p-2 rounded-md">
                        <span className="text-white">
                            <h3 className="font-bold text-pretty">{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>   
                            {item.snippet.topLevelComment.snippet.textOriginal}
                        </span> 
                        
                    </li>
                ) : 
                <li key={item.id} className="bg-zinc-900 p-2 rounded-md">
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
          {video2 ? (
            video2.items.map((item) => (
              item.snippet.topLevelComment.snippet.authorDisplayName == "@eros.s.f" ? 
                (
                    <li key={item.id} className="bg-red-900 p-2 rounded-md">
                        <span className="text-white">
                            <h3 className="font-bold">{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>   
                            {item.snippet.topLevelComment.snippet.textOriginal}
                        </span> 
                        
                    </li>
                ) : 
                <li key={item.id} className="bg-zinc-900 p-2 rounded-md">
                        <span className="text-white">
                            <h3 className="font-bold">{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>   
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
          {video3 ? (
            video3.items.map((item) => (
              item.snippet.topLevelComment.snippet.authorDisplayName == "@eros.s.f" ? 
                (
                    <li key={item.id} className="bg-red-900 p-2 rounded-md">
                        <span className="text-white">
                            <h3 className="font-bold">{item.snippet.topLevelComment.snippet.authorDisplayName}</h3>   
                            {item.snippet.topLevelComment.snippet.textOriginal}
                        </span> 
                        
                    </li>
                ) : 
                <li key={item.id} className="bg-zinc-900 p-2 rounded-md">
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

      </div>
    </article>
  );
}

export default CommentsCard;