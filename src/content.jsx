import { FaLongArrowAltRight } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaMeta } from "react-icons/fa6";
import Sosial from "./components/Tab";

function content() {

    return (
        <div className="relative h-screen w-full flex-col bg-background pt-5">
            <div className="h-4/6 w-full flex-col lg:flex-row items-center justify-center ">
                <div className="static  flex h-3/4 w-full  justify-center items-center">
                    <div className=" h-72 w-72 lg:h-[550px] lg:w-[550px] bg-accent-yellow rounded-full overflow-hidden mt-12 lg:mt-44">
                        <img src="/20240414_073113.jpg" alt="profile" className=" h-full w-full object-cover" />
                    </div>
                    <div className="flex absolute lg:mt-40 h-96 lg:h-max w-full lg:w-max flex-col lg:flex-row justify-between px-5">
                        <div className="pt-5 lg:mt-9  lg:w-2/5 ">
                            <p className="text-white font-light text-[24px] lg:text-[50px]">I'm</p>
                            <p className=" text-white font-semibold leading-none text-[28px] lg:text-[54px] pr-24 mt-0">Fathurrahman D. Koryanto</p>
                            <div className="mt-4 w-28 h-[3px] lg:w-40 lg:h-[8px] bg-accent-yellow"></div>

                            <p className="text-white font-sans text-start text-[10px] lg:text-[14px] pt-3 lg:pt-14 w-64 hidden lg:block">Undergraduate student majoring in Informatic Engineering with an interest in design and marketing. Experienced in designing web and mobile-based systems</p>
                        </div>
                        <div className=" lg:mt-5">
                            <p className="text-white leading-tight font-semibold text-[12px] pb-4 pl-40 lg:pl-0 lg:text-[19px] lg:w-80">Let's follow my journey and busyness during my learning period at the university level.</p>
                            <div className="text-white font-sans hidden lg:flex items-center gap-2 cursor-pointer group">
                                <p className="text-xs">Show more</p>
                                <FaLongArrowAltRight
                                    color="orange"
                                    size={20}
                                    className="transform group-hover:translate-x-1 transition-transform"
                                />
                            </div>
                            <div className="lg:flex h-1/6 lg:h-1/4 w-full  items-center justify-start gap-2 hidden ">
                                <div className="container w-7 h-7 rounded-3xl bg-secondary-text flex items-center justify-center"> <FaFacebookF color="white" size="17" /></div>
                                <div className="container w-7 h-7 rounded-3xl bg-secondary-text flex items-center justify-center"> <FaGithub color="white" size="17" /></div>
                                <div className="container w-7 h-7 rounded-3xl bg-secondary-text flex items-center justify-center"> <RiInstagramFill color="white" size="17" /></div>
                                <div className="container w-7 h-7 rounded-3xl bg-secondary-text flex items-center justify-center"> <FaPinterestP color="white" size="17" /></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex h-1/6 w-full  items-center justify-center gap-2 lg:hidden">
                    <div className="container w-7 h-7 rounded-3xl bg-secondary-text flex items-center justify-center"> <FaFacebookF color="white" size="17" /></div>
                    <div className="container w-7 h-7 rounded-3xl bg-secondary-text flex items-center justify-center"> <FaGithub color="white" size="17" /></div>
                    <div className="container w-7 h-7 rounded-3xl bg-secondary-text flex items-center justify-center"> <RiInstagramFill color="white" size="17" /></div>
                    <div className="container w-7 h-7 rounded-3xl bg-secondary-text flex items-center justify-center"> <FaPinterestP color="white" size="17" /></div>
                </div>
                <div className="flex-col h-full w-full lg:hidden">
                    <p className="text-white font-sans text-center text-[10px] px-11 pt-3">Undergraduate student majoring in Informatic Engineering with an interest in design and marketing. Experienced in designing web and mobile-based systems ...</p>
                    <p className="text-white font-sans text-center text-[10px] px-11 pt-3 flex items-center justify-center gap-3">show more <FaLongArrowAltRight color="orange" size="20" /></p>
                </div>
            </div>
            < Sosial />
        </div>
    )
}

export default content