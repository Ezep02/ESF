import Slider from "./slider/Slider";

function LastReleases({ lastReleases }) {
  return (
    <article className="w-full h-screen gap-2 grid grid-cols-12 grid-rows-12 py-5">
      <div
        className="             
              flex flex-col gap-2 col-start-1 col-end-13 row-start-1 row-end-13 
              xl:col-start-1 xl:col-end-8 xl:row-start-1 xl:row-end-13
              lg:col-start-1 lg:col-end-8 lg:row-start-1 lg:row-end-13
              md:col-start-1 md:col-end-13 md:row-start-1 md:row-end-13
              sm:col-start-1 sm:col-end-13 sm:row-start-1 sm:row-end-13
            "
      >
        <div className="
              py-5 w-full flex justify-center items-center bg-zinc-950 rounded-xl
              "
            >
              <h2
                className="
                  uppercase font-bold 
                  xl:text-2xl lg:text-2xl md:text-xl  ms:text-xl 
                 text-white
                "
              >
                Ultimos Lanzamientos
              </h2>
        </div>

        {/*ultimos videos */}
        <div className="flex flex-col gap-2">
          {lastReleases.items.map((element, index) => (
            <div
              key={index}
              className="
                bg-zinc-950 flex p-2 rounded-xl h-[150px]
                  justify-stretch 
              "
            >
              <img
                src={element.snippet.thumbnails.high.url}
                alt="avatar"
                className="bg-cover w-auto h-full"
              />
              <div className="flex p-3 flex-col gap-[4px] justify-center">
                <h3
                  className="font-bold
                    text-xs
                    xl:text-2xl lg:text-xl md:text-2xl  sm:text-xl
                "
                >
                  {element.snippet.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/*tarjeta de youtube BOTON */}
        <div
          className="bg-zinc-950 flex justify-center items-center rounded-xl w-full h-full
              row-start-9 row-end-13 col-start-1 col-end-13
              xl:col-start-1 xl:col-end-8 xl:row-start-8 xl:row-end-13
              lg:col-start-1 lg:col-end-8 lg:row-start-9 lg:row-end-13
              md:col-start-1 md:col-end-8 md:row-start-9 md:row-end-13
              sm:col-start-1 sm:col-end-13 sm:row-start-9 sm:row-end-13
          "
        >
          <span className="items-center text-2xl font-bold ">
            Escuchar en
            <a
              href="https://www.youtube.com/@eros.s.f/videos"
              target="_blank"
              className="text-4xl font-bold text-red-600
              hover:text-white ml-1 "
            >
              Youtube
            </a>
          </span>
        </div>
        

      </div>




      {/*Slider */}
      <div
        className="
                hidden 
                w-full h-full   
                xl:col-start-8 xl:col-end-13 xl:row-start-1 xl:row-end-13 xl:block
                lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:row-end-13 lg:block
                
                "
      >
        <Slider />
      </div>
    </article>
  );
}

export default LastReleases;
