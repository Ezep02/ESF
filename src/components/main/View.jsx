import React, { useEffect, useState } from "react";
import ContentView from "./content-view/ContentView";
import LastReleases from "./last-releases/LastReleases";
import Profile from "./profile/Profile";
import CommentSliderSection from "./coments-slider/CommentSliderSection.jsx";

function View() {

  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      // Obtiene datos de estadísticas del perfil, como avatar y nombre del canal.
      const getProfileDataRequest = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=${import.meta.env.VITE_CHANEL_ID}&maxResults=1&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
      
      const profileData = await getProfileDataRequest.json();
      
      // Realiza una solicitud para obtener los últimos lanzamientos del canal y IDs de video.
      const lastReleasesRequest = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${import.meta.env.VITE_CHANEL_ID}&maxResults=3&order=date&type=video&key=${import.meta.env.VITE_YOUTUBE_API_KEY}`);
      const getLastReleases = await lastReleasesRequest.json();
      
      setData({ profileData, getLastReleases });

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [data]); 

  if (!data) {
    // Mientras se cargan los datos,se renderiza un o un mensaje.
    return <div>Cargando pagina...</div>;
  }

  const { profileData, getLastReleases } = data;
 
  return (
    <div className="w-full h-full min-w-[350px] bg-[url('/giphy.gif')] bg-no-repeat bg-cover  rounded-xl p-4">
      {/* Perfil */}
      <Profile
        chanelAvatar={profileData.items[0].snippet.thumbnails.medium.url}
        chanelName={profileData.items[0].snippet.title}
        chanelPersonalizedUrl={profileData.items[0].snippet.customUrl}
      />

      {/* Frase y estadísticas de YouTube */}
      <ContentView
        chanelSubscriberCount={profileData.items[0].statistics.subscriberCount}
        chanelVideoCount={profileData.items[0].statistics.videoCount}
        chanelViewCount={profileData.items[0].statistics.viewCount}
      />

      {/* Últimos lanzamientos */}
      <LastReleases lastReleases={getLastReleases} />

      {/* Spotify card */}
      
      <section className="pb-5 ">
        <iframe  src="https://open.spotify.com/embed/artist/298VDTAoYDKCx28QsVWgi1?utm_source=generator" width="100%" height="482" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" className=" rounded-2xl "></iframe>
      </section>

      {/* Slider y comentarios de YouTube */}
      <CommentSliderSection
        video1ID={getLastReleases.items[0].id.videoId}
        video1Title={getLastReleases.items[0].snippet.title}
        video2ID={getLastReleases.items[1].id.videoId}
        video2Title={getLastReleases.items[1].snippet.title}
        video3ID={getLastReleases.items[2].id.videoId}
        video3Title={getLastReleases.items[2].snippet.title}
      />
    </div>
  );
}

export default View;