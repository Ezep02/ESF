import CommentPhoto from "./CommentPhoto"
import CommentsCard from "./comments/CommentsCard"


function CommentSliderSection({video1ID, video1Title, video2ID, video2Title, video3ID, video3Title}) {

  return (

    <div className="w-full h-screen grid grid-rows-12 pt-10">

        <CommentPhoto/>

        
        <CommentsCard
            video1ID={video1ID}
            video1Title={video1Title}
            video2ID={video2ID}
            video2Title={video2Title}
            video3ID={video3ID}
            video3Title={video3Title}
        />
    </div>

   
  )
}

export default CommentSliderSection