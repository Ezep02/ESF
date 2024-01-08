import {FaInstagram, FaSpotify} from "react-icons/fa"

function Spotify() {
  return (
    <div className='bg-black  rounded-xl flex items-center justify-center p-5 hover:scale-105'>
        <a 
            href="https://open.spotify.com/intl-es/artist/298VDTAoYDKCx28QsVWgi1" 
            target='_blank' 
            className='font-bold text-green-400 hover:text-green-600 text-2xl'>
                <FaSpotify/>
            </a>
    </div>
  )
}

export default Spotify