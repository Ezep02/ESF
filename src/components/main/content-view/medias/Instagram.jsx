import {FaInstagram} from "react-icons/fa"

function Instagram() {
  return (
    <div className='bg-black rounded-xl flex items-center justify-center p-5  hover:scale-105 shadow-2xl'>
        <a 
            href="https://www.instagram.com/eros.s.f/" 
            target='_blank' 
            className='font-bold text-rose-300 hover:text-white text-2xl'>
                <FaInstagram/>
            </a>
        
    </div>
  )
}

export default Instagram