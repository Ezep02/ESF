import Slider from "./slider/Slider";

function LastReleases({ lastReleases }) {
  return (
    <article className="w-full h-full gap-2 grid grid-cols-12 grid-rows-12 mt-5">
      <div
        className="
                
                flex flex-col gap-2 col-start-1 col-end-13 row-start-1 row-end-13 
                xl:col-start-1 xl:col-end-7 xl:row-start-1 xl:row-end-13
                md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-13
                sm:col-start-1 sm:col-end-13 sm:row-start-1 sm:row-end-13
            "
      >
        <div className="py-5 w-full flex justify-center items-center bg-zinc-950 rounded-xl">
          <h2 className="uppercase font-bold 
          
            xl:text-2xl lg:text-2xl  md:text-xl  ms:text-xl 

          ">Ultimos Lanzamientos</h2>
        </div>

        {lastReleases.items.map((element, index) => (
          <div key={index} className="
            bg-zinc-950 flex p-2 rounded-xl
          ">
            <img
              src={element.snippet.thumbnails.high.url}
              alt="avatar"
              className="bg-cover w-1/3"
            />
            <div className="flex p-3 flex-col gap-[4px]">
              <h3 className="font-bold
                  text-xs
                  xl:text-2xl lg:text-xs md:text-xs  ms:text-xs
              ">{element.snippet.title}</h3>
              <p className="text-xs 
                xl:text-xl lg:text-xl  md:text-xs  ms:text-xs
              ">{element.snippet.description}</p>
            </div>
          </div>
        ))}

        <div className="bg-zinc-950 flex justify-center items-center rounded-xl h-full w-full p-3">
          <span className="items-center text-2xl font-bold">
            Escuchar en
            <a
              href="https://www.youtube.com/@eros.s.f/videos"
              target="_blank"
              className="text-4xl font-bold text-red-600
             hover:text-white ml-1"
            >
              Youtube
            </a>
          </span>
        </div>
      </div>

      <div
        className="
                hidden 
                w-full h-full  
                xl:col-start-7 xl:col-end-13 xl:row-start-1 xl:row-end-13 xl:block
                lg:col-start-7 lg:col-end-13 lg:row-start-1 lg:row-end-13 lg:block
                md:col-start-7 md:col-end-13 md:row-start-1 md:row-end-13 md:block
                
            "
      >
        <Slider />
      </div>
    </article>
  );
}

export default LastReleases;
