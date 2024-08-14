import { FaLinkedin}  from "react-icons/fa";
import { FaGithub}  from "react-icons/fa";
import logo from '../assets/RT.png';
import { motion } from 'framer-motion'

const Navbar = () => {
  return( 
  <nav className=" mb-3 flex items-center justify-between py-4">
    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1}}
     className="flex flex-shrink-0 items-center">
       <img className="h-[130px] w-[150px]" src={logo} alt="" />
    </motion.div>
    <motion.div whileInView={{opacity:1, x:0}} initial={{opacity:0, x:100}} transition={{duration:1}} className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a href="https://www.linkedin.com/in/rudraksh-tumane/"> <FaLinkedin/></a>
       <a href="https://github.com/rudrakshtumane"><FaGithub/></a>
    </motion.div>
  </nav>
  )
}
export default Navbar