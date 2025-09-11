import Image from "next/image";
import fire from "@/assets/th2025_crop.jpg"
import aboutme_photo from "@/assets/GradPhotoCrop.jpg"
import ug from "@/assets/UndergraduateResearcher.jpg"
import { InfoCard, LinkText } from "@/components/infoCard";
import { GalleryCard } from "@/components/galleryCard";
import Steelhax_tensors from "@/assets/Tensors.png";
import Lit from "@/assets/SteelhacksXI.jpeg"
import hamster from "@/app/favicon.ico"
import Link from "next/link";
import OG from "@/assets/ObsidianGraph.png"
import { fetchProblemsCompleted } from "@/lib/lcqueries";

export default async function Home() {
const problemsCompleted = await fetchProblemsCompleted("this-scott")

  return (
    <div className="snap-y snap-mandatory scroll-smooth overflow-y-scroll scroll-py-8 h-screen font-sans flex-col justify-between items-center min-h-screen pt-8 px-12 pb-20 gap-16 lg:pt-20 ">
      <main className="flex object-fill flex-col gap-20 lg:items-start lg:gap-30">
        <div id="first sight" className="flex flex-col">
          <div className="flex flex-row gap-3 justify-end pr-4 pb-4">
            <a target="_blank" rel="noopener noreffer" href="https://scott-cv-presentation-slide-resources.s3.us-east-1.amazonaws.com/Scott_Styslinger_Resume.pdf"><h1 className="font-medium font-black hover:underline">resume</h1></a>
            <a target="_blank" rel="noopener noreffer" href="#construction-section"><h1 className="font-medium font-black hover:underline">blog</h1></a>
            <a target="_blank" rel="noopener noreffer" href="https://github.com/this-scott"><h1 className="font-medium font-black hover:underline">github</h1></a>
            <a target="_blank" rel="noopener noreffer" href="https://linkedin.com/in/this-scott"><h1 className="font-medium font-black hover:underline">linkedIn</h1></a>
          </div>
          <div className="flex flex-row flex-wrap justify-evenly h-full">
            <div id="maintitle" className="pr-2 lg:pr-0 flex-1 flex flex-col items-center justify-center snap-center">
              <div id="not another div">
                <h4 className="text-xl">{"Hi I'm"}</h4>
                <h1 className="font-bold font-black text-6xl sm:text-8xl">Scott Styslinger</h1>
                <h4 className="pt-1 text-xl">Information Science Graduate, Robot Mechanic, aspiring IT Architect</h4>
              </div>
            </div>
            <Image className="w-auto flex-1 h-auto min-w-100" src={fire} alt="landing_photo"></Image>
          </div>
        </div>
        <div id="about me section" className="flex flex-col flex-wrap w-full snap-start">
          <h1 className="text-center font-bold font-black text-6xl lg:pb-12">About Me</h1>
          <div className="flex flex-row flex-wrap justify-evenly h-full">
            <div id="aboutmetext" className="flex-1 flex flex-col lg:pl-20">
              <h2 className="text-xl">{"I'm a"}</h2>
              <InfoCard
                title={"Pitt Bachelor of Science"}
                subtitle={'Information Science Major (Data Engineering Focus) \n Computer Science Minor GPA: 3.2'}
                text={["4 time hackathon competitor (1 award)", "VP of Public Relations for the Kappa Theta Pi Co-Ed Fraternity", "Undergraduate Researcher @ CMU Robotics Institute, Biorobotics Lab"]}
                extra={[]}>
              </InfoCard>
              <h2 className="text-2xl pt-6">
                <a className="font-black font-bold hover:underline" target="_blank" rel="noopener noreffer" href="https://scott-cv-presentation-slide-resources.s3.us-east-1.amazonaws.com/AWS+Certified+Cloud+Practitioner+certificate.pdf">
                  AWS Certified Cloud Practitioner
                </a>
                <li className="list-disc ml-6 text-lg">Renewing before September 2026</li>
              </h2>
              <h2 className="font-black font-bold text-2xl pt-6">
                Hobby Programmer + Leetcoder
              </h2>
              <li className="list-disc ml-6 text-lg">{problemsCompleted} total problems completed</li>
              <h2 className="text-xl pt-6">{"I'm also a"}</h2>
              <InfoCard
                title={"Service Technician @ Serve Robotics"}
                subtitle=""
                text={["Starting on September 22"]}
                extra={[]}>
              </InfoCard>
            </div>
            <Image className="h-auto object-contain lg:pr-10 w-full md:w-1/4" src={aboutme_photo} alt="aboutme_photo"></Image>
          </div>
        </div>
        <div id="previously section" className="flex flex-col w-full snap-start">
          <h1 className="text-center font-bold font-black text-6xl pb-4 md:pb-6">My Previous Roles</h1>
          <div className="flex flex-row flex-wrap justify-evenly h-full gap-8">
            <div id="aboutmetext" className="flex-1 flex flex-col">
              <div className="pt-4">
                <InfoCard
                  title={"Systems Intern @ Journey Robotics"}
                  subtitle="April 2025-August 2025"
                  text={[
                    "At Journey I assisted a small team developing software for a 6-DoF arm which unloads aircraft luggage onto a conveyor",
                    "I adjusted FANUC teach pendant code so it could receive pre-pick and pick positions (which were determined by different cameras) on the same TCP messaging socket",
                    "A lot of my work revolved around sensors and data collection, I evaluated three potential depth cameras with their software to see which best fit our use cases. This involved intrinsic and hand-eye calibration",
                    "I also created my own tool to tag rosbags for flat-level storage purposes and created a script to automatically record and label suitcases on conveyor belts into a coco dataset"
                  ]}
                  extra={[]}>
                </InfoCard>
              </div>
              <div className="pt-4">
                <InfoCard
                  title={"Undergraduate Researcher @ CMU Biorobotics Lab"}
                  subtitle="September 2023-April 2025"
                  text={[
                    "First joined as a junior where completed gui inputs for a data generation tool that used Blender to generate images of phones in different lighting conditions for YOLACT model training.",
                    "I later implemented auto-segmentation (with human validation) for phone image inputs and the ability to generate datasets for a phone classification model.",
                    "With a coworker, I developed software for a CNC Router, equipped with a camera and hole puncher, to detect and remove harddrive screws with the support of two other undergraduates. I focused on screw + punch-error detection, comparisons with previously seen harddrives, and IP camera communication",
                    "This project was later fitted to work with TVs where I used object-character-recognition tools to develop TV model identification systems"
                  ]}
                  extra={[]}>
                </InfoCard>
              </div>
              <h2 className="font-black font-bold text-2xl pt-4">{"I've also been a tour guide, busboy, summer camp counselor, and Domino's delivery driver"}</h2>
            </div>
            <Image className="h-auto object-containw-full md:w-1/3" src={ug} alt="aboutme_photo"></Image>
          </div>
        </div>
        <div id="gallery section" className="flex flex-col w-full gap-12 snap-start">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <h2 className="text-2xl pt-2">Here are some</h2>
              <h1 className="font-bold font-black text-6xl">{"Projects I've worked on"}</h1>
              <h3>(The Gallery Section)</h3>
            </div>
          </div>
          <GalleryCard
            title={"Baggage Handling Robot"}
            subtitle={"Journey Robotics"}
            text={[
              "Still the coolest thing I've worked on",
              "The majority of my work is listed above"
            ]}
            link={"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7330985779684384769?compact=1"}
            extras={[<LinkText key={1} text="More Information" src="https://www.journeyrobotics.com/" />]}
          />
          <GalleryCard
            title={"Harddrive Screw Remover"}
            subtitle={"CMU Biorobotics Lab"}
            text={[
              "Implemented YOLO detection and point-cloud template system",
              "Created an error correction system using homography between two cameras",
              "Mapping and streamlining ros node traffic",
              "Supported other undergraduate coworkers delegating tasks which fit their interests"
            ]}
            link={"https://drive.google.com/file/d/14ujnJgRBxbtB4BcVi4S2QRCynOP8oaFS/preview"}
            extras={[<p key={7}>Prequel project to <LinkText key={2} text="Roboloop" src="https://www.cmu.edu/news/stories/archives/2025/february/cmu-robot-works-inside-e-waste-recycling-facility" /></p>]}
          />
          <GalleryCard
            title={"Visiboard"}
            subtitle={"Tartanhacks 2025"}
            text={[
              "Visiboard makes people translucent against whiteboards",
              "Allows students to read writing on board without obstruction",
              "Uses color threshold to segment foreground against whiteboard",
              "Writes background to a buffer which replaces foreground"
            ]}
            link={"https://drive.google.com/file/d/1hHkp_fXpS9Jlttb8I74P20vvrbuXB-Ho/preview"}
            extras={[
              <LinkText key={3} src="https://scott-cv-presentation-slide-resources.s3.us-east-1.amazonaws.com/Tartanhacks+2025.pdf" text="Slides" />,
              <LinkText key={4} src="https://github.com/Gabifern/TartanHacks2025" text="Github" />
            ]}
          />
          <GalleryCard
            title={"Data Generation Tool"}
            subtitle={"CMU Biorobotics Lab"}
            text={[
              "Completed gui tool for ease of use",
              "Tool supports data generation for area based classification and YOLACT Object Detection Model",
              "Implemented existing model versions for one click crop"
            ]}
            link={"https://drive.google.com/file/d/1ELr0guDzNnKHQqBIyhHyNJyc21934TNr/preview"}
            extras={[]}
          />
          <div id="steelhax2024_card" className="w-full h-auto flex flex-wrap flex-row w-full">
            <div id="steelhax_media" className="flex flex-row w-full lg:w-3/5 object-contain h-auto">
              <div className="w-3/4 h-auto flex">
                <Image className="w-full h-full object-fill" src={Steelhax_tensors} alt="Steelhax_tensors"></Image>
              </div>
              <div className="w-1/4 h-auto flex">
                <Image src={Lit} alt="Steelhacks_award"></Image>
              </div>
            </div>
            <div className="w-full pt-6 md:pl-5 lg:w-2/5">
              <InfoCard
                title="Rewilding Project"
                subtitle="Steelhacks XI"
                text={[
                  "Runner Up: Best Sustainability with AI",
                  "Visual planner which used area maps(rasters) to determine if tree removal would make a more biodiverse environment",
                  "Scored biodiversity according to ratio between open space, water, and shaded space for habitats"
                ]}
                extra={[
                  <LinkText key={5} src="https://scott-cv-presentation-slide-resources.s3.us-east-1.amazonaws.com/Rewilding+Project.pdf" text="Slides"/>,
                  <LinkText key={6} src="https://github.com/liambsulliva/rewilding-planner" text="Github"/>
                ]}
              />
            </div>
            <div id="More projects link" className="flex w-full justify-center snap-center pt-4">
              <div className="flex flex-col">
                  <h2 className="text-2xl pt-2">You can find</h2>
                  <Link href="#construction-section"><h1 className="font-bold font-black text-5xl underline">More Projects Here</h1></Link>
              </div>
            </div>
          </div>
        </div>
        <div id="methodology-section" className="flex flex-col w-full snap-center pl-5">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <h1 className="font-bold font-black text-6xl">Goals, Interests, Methods</h1>
              <h3>Log everything, stay consistent, be curious</h3>
            </div>
          </div>
          <div id="methodology-images" className="flex flex-row justify-center w-3/5 lg:">
            <Image className="w-7/10" src={OG} alt="obisidian graph"></Image>
            <div id="leetcode card" className="bg-linear-to-b from-gray-700 to-gray-900 w-3/10 flex flex-col h-full" >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <g filter="url(#hot-filled_svg__filter0_i_289_12318)">
                  <path fill-rule="evenodd" d="M9.588 2.085a1 1 0 01.97.092c2.85 1.966 4.498 4.744 5.31 6.67l.854-.885a1 1 0 011.56.154c2.177 3.38 2.211 7.383.521 10.3C17.039 21.459 13.583 22 11.977 22c-1.569 0-4.905-.27-6.825-3.584-.832-1.435-1.27-3.053-1.125-4.704.146-1.66.876-3.284 2.264-4.721.86-.891 1.505-2.122 1.957-3.322.449-1.193.68-2.278.752-2.806a1 1 0 01.588-.778z" clip-rule="evenodd" fill="url(#hot-filled_svg__paint0_linear_289_12318)"/>
                </g>
                <defs>
                  <linearGradient id="hot-filled_svg__paint0_linear_289_12318" x1="12" x2="12" y1="2" y2="22" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFA116"></stop><stop offset="1" stop-color="#F9772E"/>
                  </linearGradient>
                  <filter id="hot-filled_svg__filter0_i_289_12318" width="17.2" height="21.2" x="4" y="2" color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"></feColorMatrix>
                    <feOffset dx="1.2" dy="1.2"></feOffset><feGaussianBlur stdDeviation="0.6"></feGaussianBlur>
                    <feComposite in2="hardAlpha" k2="-1" k3="1" operator="arithmetic"></feComposite>
                    <feColorMatrix values="0 0 0 0 0.970833 0 0 0 0 0.05825 0 0 0 0 0 0 0 0 0.16 0"></feColorMatrix>
                    <feBlend in2="shape" result="effect1_innerShadow_289_12318"></feBlend>
                  </filter>
                </defs>
              </svg>
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-bold text-orange-500">Leetcode Streak</h1>
                <h1 className="text-3xl font-bold text-orange-500">16 Days</h1>
              </div>
            </div>
          </div>
        </div>
        <div id="construction-section" className="snap-end w-full px-10">
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col">
              <h2 className="text-2xl pt-2">This section is</h2>
              <h1 className="font-bold font-black text-6xl">Under Construction</h1>
              <h3>This website is hosted using four AWS services and Github actions for continuous deployment</h3>
              <h3>Some features may take a little long to implement</h3>
              <a className="hover:font-bold underline" href="#maintitle">Scroll to top</a>
            </div>
                <Image className="w-1/12" src={hamster} alt="construction hamster"></Image>
          </div>
        </div>
      </main>
    </div>
  );
}