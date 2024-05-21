'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'



const HeroSection = () => {
  return (
    <section>
        <div className=" grid grid-cols-1 col-span-2 sm:grid-cols-12">
            <div className="cols-span-8 place-self-center text-center sm:text-left ">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 "> 
                    Hello, I'm {" "}
                    </span>
                    <br></br>
                    <TypeAnimation
                    sequence={[
                        "Oliver",
                        1000,
                        "Kali",
                        1000,
                        "Web Developer",
                        1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}/> 
                    </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg;text-xl w-full">
                Your typical Developer Exploring where I want to go.
            </p>
            <div>
                <button className="px-7 py-4 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 to-pink-500 bg-white hover:bg-slate-20 text-white">
                    Hire Me
                    </button>
                    <button className=" px-1 py-1 w-full sm:w-fit mr-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white rounded-full mt-3">
                    <span className="flex w-full bg-gray-900 hover:bg-slate-800 rounded-full px-6 py-3 justify-center">
                    Download CV
                    </span>
</button>
            </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] relative">
                <Image
                src="/images/dev.jpg"
                alt="hero image"
                className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={300}
                height={300}
                />
                </div>
                </div>

        </div>
    </section>
  )
}

export default HeroSection