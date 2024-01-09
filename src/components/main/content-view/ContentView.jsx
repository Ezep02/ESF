import Photo from "./photo-chart/Photo"
import Chart from "./photo-chart/Char"
import YoutubeStats from "./medias/YoutubeStats"



function ContentView({chanelSubscriberCount, chanelVideoCount, chanelViewCount}) {
  return (
        <div className="grid grid-rows-3 h-screen gap-2 w-full
            place-content-center grid-cols-12

            xl:grid xl:grid-rows-3 
            lg:grid lg:grid-rows-4
            md:grid md:grid-cols-12 md:grid-rows-4 md:h-screen
            sm:grid sm:grid-cols-12 sm:grid-rows-3">
              
            <Photo />
            <Chart/>
            <YoutubeStats 
              videoCount={chanelVideoCount}
              chanelViews={chanelViewCount}
              subs={chanelSubscriberCount}
            />
        </div>
        

  )
}

export default ContentView