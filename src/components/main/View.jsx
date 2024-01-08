import ContentView from "./content-view/ContentView"
import LastReleases from "./last-releases/LastReleases"
import Profile from "./profile/Profile"
import CommentSliderSection from "./coments-slider/CommentSliderSection.jsx";
import { API_KEY, CHANEL_ID } from "../../Utils.js";


//it get datas profile stats as avatar, chanelName and personalized url
const getProfileDataRequest = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=statistics&part=snippet&id=${CHANEL_ID}&maxResults=1&key=${API_KEY}`);
const profileData = await getProfileDataRequest.json()

//request to get the last chanels releases and their videos IDS
const lastReleasesRequest = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=${CHANEL_ID}&maxResults=3&order=date&type=video&key=${API_KEY}`)
const getLastReleases = await lastReleasesRequest.json();


function View() {
  return (
    <div className="w-full h-full min-w-[450px] bg-[url('/giphy.gif')] bg-no-repeat bg-cover  rounded-xl p-4">
        {/*Profile */}
        
          
        <Profile 
            chanelAvatar={profileData.items[0].snippet.thumbnails.medium.url}
            chanelName={profileData.items[0].snippet.title}
            chanelPersonalizedUrl={profileData.items[0].snippet.customUrl}
        />

        
        
        
        {/*Phrase and youtube stats */}
        <ContentView 
          chanelSubscriberCount={profileData.items[0].statistics.subscriberCount}
          chanelVideoCount={profileData.items[0].statistics.videoCount}
          chanelViewCount={profileData.items[0].statistics.viewCount}
        />
        
        {/*Last releases */}
        <LastReleases 
          lastReleases={getLastReleases}
        />


        {/* slider and youtube comments */}
        <CommentSliderSection 
          video1ID={getLastReleases.items[0].id.videoId}
          video1Title={getLastReleases.items[0].snippet.title}

          video2ID={getLastReleases.items[1].id.videoId}
          video2Title={getLastReleases.items[1].snippet.title}

          video3ID={getLastReleases.items[2].id.videoId}
          video3Title={getLastReleases.items[2].snippet.title}

        />

    </div>
  )
}

export default View