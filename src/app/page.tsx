import Image from "next/image";
import fire from "@/assets/th2025_crop.jpg"
import aboutme_photo from "@/assets/GradPhotoCrop.jpg"
import ug from "@/assets/UndergraduateResearcher.jpg"
import { InfoCard, LinkText } from "@/components/infoCard";
import { GalleryCard } from "@/components/galleryCard";
import Steelhax_tensors from "@/assets/Tensors.png";
import Lit from "@/assets/SteelhacksXI.jpeg"
import hamster from "@/app/favicon.ico"

export default function Home() {
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
            <div id="maintitle" className="flex-1 flex flex-col items-center justify-center snap-center">
              <div id="not another div">
                <h4 className="text-xl">{"Hi I'm"}</h4>
                <h1 className="font-bold font-black text-6xl sm:text-8xl">Scott Styslinger</h1>
                <h4 className="pt-1 text-xl">This is a small about-me website. Sit back, relax, and start scrolling</h4>
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
              <h2 className="font-black font-bold text-2xl pt-6 hover:underline">
                <a target="_blank" rel="noopener noreffer" href="https://scott-cv-presentation-slide-resources.s3.us-east-1.amazonaws.com/AWS+Certified+Cloud+Practitioner+certificate.pdf">
                  AWS Certified Cloud Practitioner
                </a>
              </h2>
              <h2 className="font-black font-bold text-2xl pt-6">
                Hobby Programmer + Leetcoder
              </h2>
              <h2 className="text-xl pt-6">{"I'm also a"}</h2>
              <InfoCard
                title={"Service Technician @ Serve Robotics"}
                subtitle=""
                text={["Starting this position September 22"]}
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
              "Tool supports data generation for area based classification and YOLACT OD Model",
              "Implemented existing model versions for one click crop"
            ]}
            link={"https://drive.google.com/file/d/1ELr0guDzNnKHQqBIyhHyNJyc21934TNr/preview"}
            extras={[]}
          />
          <div id="steelhax2024_card" className="w-full h-auto flex flex-wrap flex-row w-full">
            <div id="steelhax_media" className="flex flex-row w-full md:w-3/5 object-contain h-auto">
              <div className="w-3/4 h-auto flex">
                <Image className="w-full h-full object-fill" src={Steelhax_tensors} alt="Steelhax_tensors"></Image>
              </div>
              <div className="w-1/4 h-auto flex">
                <Image src={Lit} alt="Steelhacks_award"></Image>
              </div>
            </div>
            <div className="w-full pt-6 md:w-2/5">
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
          </div>
        </div>
        <div id="construction-section" className="snap-end w-full px-10">
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col">
              <h2 className="text-2xl pt-2">And the rest is...</h2>
              <h1 className="font-bold font-black text-6xl">Under Construction</h1>
              <h3>I wanted to put this online before I built it out more so this is all you get</h3>
              <a className="hover:font-bold underline" href="#maintitle">Scroll to top</a>
            </div>
                <Image className="w-1/12" src={hamster} alt="construction hamster"></Image>
          </div>
        </div>
      </main>
    </div>
  );
}