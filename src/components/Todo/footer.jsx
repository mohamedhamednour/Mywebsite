import React from 'react'
import { AiFillFacebook,AiFillTwitterSquare,AiFillApple } from "react-icons/ai";
import { FcStart,FcSms } from "react-icons/fc";
import { GoMarkGithub } from "react-icons/go";
import { ImLinkedin } from "react-icons/im";




const Footer = () => {
  return (
    <footer>
      <div className="col-12">
      <h6 className='foot'> eng.mohamed hamed </h6>
      <a href='https://www.facebook.com/profile.php?id=100001430710378' style={{color:'blue'}}  className='iconface'><AiFillFacebook/>  </a>

      <a className='iconface' href="https://api.whatsapp.com/send?phone=01005814378"><FcSms/></a>
      <a className='iconface' href="#"><FcStart/></a>
      <a className='git' href="https://github.com/mohamedhamednour"><GoMarkGithub/></a>
      <a className='git' href="https://www.linkedin.com/in/mohamed-hamed-nour-71b081213/"><ImLinkedin/></a>



      </div>
   

    </footer>
  )
}

export default Footer
