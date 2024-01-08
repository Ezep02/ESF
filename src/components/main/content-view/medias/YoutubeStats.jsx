function YoutubeStats({videoCount, chanelViews, subs}) {
  return (
    <div className="bg-zinc-950 rounded-2xl w-full flex flex-col p-10
    h-full
    col-start-1 row-start-3 row-span-1
    xl:col-start-1 xl:lg:col-end-13 xl:row-start-3 xl:row-end-4 
    xl:flex-row xl:justify-evenly xl:items-center

    lg:col-start-1 lg:col-end-13 lg:row-start-4 lg:row-end-5
    lg:flex-row lg:justify-evenly lg:items-center

    md:col-start-1 md:col-end-13 md:row-start-4 md:row-end-5
    md:flex-row md:justify-evenly md:items-center

    sm:col-start-1 sm:col-end-13 sm:row-start-4 sm:row-end-5
    sm:flex-row 

    ">
      <div className="flex items-center w-full justify-center p-4">
        <a href="https://www.youtube.com/@eros.s.f/videos" target="_blank" className="text-5xl font-bold text-red-600
         hover:text-white">
          Youtube
         </a>
      </div>

      
      <div className="
          flex flex-row justify-evenly items-center w-full flex-grow
          
        ">

        <div className="flex flex-col items-center p-4  ">
          <span className="text-red-600 lg:text-5xl md:text-4xl sm:text-4xl text-4xl font-bold ">{subs}</span>
          <h4 className="text-xs font-bold text-zinc-100">SUSCRIPTORES</h4>
        </div>
      
        <div className="flex flex-col items-center p-4  ">
          <span className="text-red-600 lg:text-5xl md:text-4xl sm:text-4xl text-4xl font-bold ">{videoCount}</span>
          <h4 className="text-xs font-bold text-zinc-100">VIDEOS</h4>
        
        </div>
        
        <div className="flex flex-col items-center p-4 ">
          <span className="text-red-600 lg:text-5xl md:text-4xl sm:text-4xl text-4xl font-bold ">{chanelViews}</span>
          <h4 className="text-xs font-bold text-zinc-100">VISTAS</h4>
        </div>
      
      </div>

        

    </div>
  )
}

export default YoutubeStats