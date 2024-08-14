import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiVite } from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri"
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { motion } from 'framer-motion'

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y:[10,-10],
        transition:{
            duration: duration,
            ease:'linear',
            repeat:Infinity,
            repeatType:"reverse",
        },
    },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h1  whileInView={{opacity:1, y:0}} initial={{opacity:0, y:-100}} transition={{duration:1.5}}
        className="my-20 text-center text-5xl font-thin">Technologies</motion.h1>
        <motion.div  whileInView={{opacity:1, x:0}} initial={{opacity:0, x:-100}} transition={{duration:1.5}}
         className="flex flex-wrap items-center justify-center gap-4 ">
            {/* add skills here */}
            <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaHtml5 className="text-7xl text-orange-600"/>
            </motion.div>

            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaCss3Alt className="text-7xl text-blue-600"/>
            </motion.div>

            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaBootstrap className="text-7xl text-purple-600"/>
            </motion.div>

            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-teal-500"/>
            </motion.div>

            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className="text-7xl text-yellow-500"/>
            </motion.div>

            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>

            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiVite className="text-7xl text-purple-500"/>
            </motion.div>

            <motion.div variants={iconVariants(3)} initial="initial" animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNode className="text-7xl text-green-600"/>
            </motion.div>

            <motion.div variants={iconVariants(5)} initial="initial" animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMysql className="text-7xl text-blue-500"/>
            </motion.div>

            <motion.div variants={iconVariants(2)} initial="initial" animate="animate" 
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>

          
        </motion.div>
    </div>
  )
}

export default Technologies