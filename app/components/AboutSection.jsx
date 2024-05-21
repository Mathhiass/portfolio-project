"use client"
import React, {useTransition, useState} from "react"
import Image from 'next/image'
import TabButton from "./TabButton";

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        })
    }
  return (
    <section className="text-white"> 
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:py-16">
        <Image src="/images/comp.png" width={500} height={500} />
        <div>
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-base md:text-lg">
            Hi, I'm Oliver Bartolata, a Full Stack Developer skilled in JavaScript, React, Node.js, Next.js, HTML, CSS, Python, C#, and Git. I build dynamic and scalable web applications with a focus on clean code and user-friendly design. Let's connect and create something amazing together!
            </p>
            <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            </div>
        </div>
        </div> 
        </section>
  )
};

export default AboutSection;