import Spotify from "../content-view/medias/Spotify"
import Instagram from "../content-view/medias/Instagram"

function Profile({chanelAvatar, chanelName}) {

  return (
    <article className="flex flex-col items-center justify-center p-4 bg-zinc-950 mb-8 rounded-2xl">
        
        <img src={chanelAvatar} alt="avatar" className="rounded-full" />
        
        <div className="items-center flex flex-col justify-center gap-2">

            <h1 className="text-6xl  xl:text-8xl lg:text-7xl  md:text-6xl  ms:text-6xl font-bold">
                {chanelName}
            </h1>
            <div className="flex gap-2">
              <Spotify/>
              <Instagram/>
            </div>
            
        </div>


    </article>
  );
}

export default Profile;
