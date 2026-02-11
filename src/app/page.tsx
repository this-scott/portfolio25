import Image from "next/image";
import fire from "@/assets/th2025_crop.jpg"
import aboutme_photo from "@/assets/GradPhotoCrop.jpg"
import ug from "@/assets/UndergraduateResearcher.jpg"
import { InfoCard, LinkText } from "@/components/infoCard";
import { GalleryCard } from "@/components/galleryCard";
import Steelhax_tensors from "@/assets/Tensors.png";
import Lit from "@/assets/SteelhacksXI.jpeg"
import Link from "next/link";
import { fetchLeetcodeValue } from "@/lib/lcqueries";
import Markdown from 'react-markdown'


export default async function Home() {
const problemsCompleted = await fetchLeetcodeValue("this-scott", "submissionCount")

  return (
    <div className="snap-y snap-mandatory scroll-smooth overflow-y-scroll overflow-x-hidden scroll-py-8 h-screen font-sans flex-col justify-between items-center min-h-screen pt-8 px-4 sm:px-8 lg:px-12 pb-20 gap-16 lg:pt-20 ">
      <main className="flex object-fill flex-col gap-10 lg:items-start xl:gap-30">
        <div id="first sight" className="flex flex-col">
          <div className="flex flex-row gap-3 justify-end pr-4 pb-4">
            <a target="_blank" rel="noopener noreffer" href="https://scott-cv-presentation-slide-resources.s3.us-east-1.amazonaws.com/Scott_Styslinger_Resume.pdf"><h1 className="font-medium hover:underline">resume</h1></a>
            <Link target="_blank" rel="noopener noreffer" href={`/construction`}><h1 className="font-medium hover:underline">blog</h1></Link>
            <a target="_blank" rel="noopener noreffer" href="https://github.com/this-scott"><h1 className="font-medium hover:underline">github</h1></a>
            <a target="_blank" rel="noopener noreffer" href="https://linkedin.com/in/this-scott"><h1 className="font-medium hover:underline">linkedIn</h1></a>
          </div>
          <div className="flex flex-row flex-wrap justify-evenly h-full">
            <div id="maintitle" className="pr-2 lg:pr-0 flex-1 flex flex-col items-center justify-center snap-center">
              <div id="not another div">
                <h4 className="text-xl">{"Hi I'm"}</h4>
                <h1 className="font-bold text-6xl sm:text-8xl">Scott Styslinger</h1>
                <h4 className="pt-1 text-xl">Information Science Graduate, Software Engineer, aspiring IT Architect</h4>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <Image className="w-full h-auto object-contain" src={fire} alt="landing_photo"></Image>
            </div>
          </div>
        </div>
        <div id="about me section" className="flex flex-col flex-wrap w-full snap-start xl:px-10">
          <h1 className="md:text-center font-bold text-6xl pb-4">About Me</h1>
          <div className="flex flex-row flex-wrap justify-evenly h-full">
            <div id="aboutmetext" className="flex-1 flex flex-col">
              <InfoCard
                title={"Pitt Bachelor of Science"}
                subtitle={'Information Science Major (Data Engineering Focus) \n Computer Science Minor GPA: 3.2'}
                text={["4 time hackathon competitor (1 award)", "VP of Public Relations for the Kappa Theta Pi Co-Ed Fraternity (2 years)", "VP of Philanthropy Chair for the Alpha Sigma Phi Fraternity (1 year)", "Undergraduate Researcher @ CMU Robotics Institute, Biorobotics Lab (2 years)"]}
                extra={[]}>
              </InfoCard>
              <h2 className="text-2xl pt-6">
                <a className="font-bold hover:underline" target="_blank" rel="noopener noreffer" href="https://scott-cv-presentation-slide-resources.s3.us-east-1.amazonaws.com/AWS+Certified+Cloud+Practitioner+certificate.pdf">
                  AWS Certified Cloud Practitioner
                </a>
                <li className="list-disc ml-6 text-lg">Renewing before September 2026</li>
              </h2>
              <h2 className="font-bold text-2xl pt-6">
                Hobby Programmer + Leetcoder
              </h2>
              <li className="list-disc ml-6 text-lg">{problemsCompleted} total problems completed</li>
              <h2 className="text-xl pt-6">{"Current Position"}</h2>
              <InfoCard
                title={"Technology Associate & Software Engineer 1 @ Capitol CNCT"}
                subtitle=""
                text={["Focusing on internal tools and events software", "Ramping up for web and app changes"]}
                extra={[]}
                className="snap-start">
              </InfoCard>
            </div>
            <Image className="h-auto object-contain w-full md:w-1/4" src={aboutme_photo} alt="aboutme_photo"></Image>
          </div>
        </div>
        <div id="previously section" className="flex flex-col w-full snap-start">
          <h1 className="text-center font-bold text-6xl pb-4">Previous Roles</h1>
          <div className="flex flex-row flex-wrap justify-evenly h-full gap-8">
            <div id="aboutmetext" className="flex-1 flex flex-col">
              <div>
                <InfoCard
                  title={"Systems Intern @ Journey Robotics"}
                  subtitle="April 2025-August 2025"
                  text={[
                    "Assisted a small team developing software for **a 6-DoF arm which unloads aircraft luggage onto a conveyor**",
                    "Adjusted FANUC teach pendant code so it could **receive pre-pick and pick positions (which were determined by different cameras) on the same TCP messaging socket**",
                    "Much of my work revolved around sensors and data collection, I **evaluated three potential depth cameras with their software to see which best fit our use cases**. This involved intrinsic and hand-eye calibration",
                    "Created my own tool to tag rosbags for flat-level storage purposes and **created a script to automatically record and annotate suitcases** on conveyor belts into a coco dataset"
                  ]}
                  extra={[]}
                  className="snap-start">
                </InfoCard>
              </div>
              <div className="pt-4">
                <InfoCard
                  title={"Undergraduate Researcher @ CMU Biorobotics Lab"}
                  subtitle="September 2023-April 2025"
                  text={[
                    "Joined as a junior where **completed gui inputs for a data generation tool** that used Blender to **generate images of phones in different lighting conditions for YOLACT model training**.",
                    "Later implemented auto-segmentation (with human validation) for phone image inputs and the **ability to generate datasets for a classification model with only 3 clicks**.",
                    "Developed software for a CNC Router, equipped with a camera and hole puncher, to **detect, approach, and remove harddrive screws using pneumatic force** with two other undergraduates. I focused on **screw detection, error handling, template comparisons with previously seen harddrives**",
                    "This project was later fitted to work with TVs where I **used object-character recognition tools to read small text TV labels**"
                  ]}
                  extra={[]}
                  className="snap-start">
                </InfoCard>
              </div>
              <h2 className="font-bold text-3xl pt-4 snap-start">Other Jobs:</h2>
              <ul className="list-disc ml-6 text-lg">
                <li>
                  <Markdown>**Front of House** @ Tatte (2025-🤫)</Markdown>
                </li>
                <li>
                  <Markdown>**DC Tour Guide** @ US Ghost Adventures (Summer 2023)</Markdown>
                </li>
                <li>
                  <Markdown>**Busboy** @ Local Country Club (Summer 2022)</Markdown>
                </li>
                <li>
                  <Markdown>**Summer Camp Counselor** (End Summer 2021)</Markdown>
                </li>
                <li>
                  <Markdown>{"**Domino's Delivery Driver** (Spring+Summer 2020)"}</Markdown>
                </li>
              </ul>
            </div>
            <Image className="h-auto object-contain w-full md:w-1/3" src={ug} alt="aboutme_photo"></Image>
          </div>
        </div>
        <div id="gallery section" className="flex flex-col w-full gap-12 snap-start">
          <div className="flex justify-center">
            <div className="flex flex-col">
              <h2 className="text-2xl pt-2">Here are some</h2>
              <h1 className="font-bold text-6xl">{"Projects I've worked on"}</h1>
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
          <div id="steelhax2024_card" className="w-full h-auto flex flex-wrap flex-row snap-start">
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
            <div id="More projects link" className="flex w-full justify-center snap-center pt-6">
              <div className="flex flex-col">
                  <h2 className="text-2xl pt-2">You can find</h2>
                  <Link target="_blank" rel="noopener noreffer" href={`https://github.com/this-scott`}><h1 className="font-bold text-3xl md:text-5xl underline">More Projects on Github</h1></Link>
              </div>
            </div>
          </div>
        </div>
        <div id="wrapup" className="snap-start w-full pt-5 px-4 sm:px-8 lg:px-10">
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col text-xl justify-center">
              <h1 className="font-bold text-5xl md:text-6xl text-center">Contact Me</h1>
              <div className="flex flex-col">
              <h3>I put together and self hosted this website in less than two weeks. Since then it{"'"}s only been occasional maintenance. If you feel I{"'"}d be a good fit for your project or company I{"'"}d love to get in touch: </h3>
              <h3></h3>
              </div>
              <div className="flex flex-row font-medium px-4 sm:px-8 lg:px-12 justify-evenly p-3">
                <a target="_blank" rel="noopener noreffer" href="https://scott-cv-presentation-slide-resources.s3.us-east-1.amazonaws.com/Scott_Styslinger_Resume.pdf"><h1 className="hover:font-bold hover:underline ">resume</h1></a>
                <a target="_blank" rel="noopener noreffer" href="https://github.com/this-scott"><h1 className="hover:font-bold hover:underline">github</h1></a>
                <a target="_blank" rel="noopener noreffer" href="https://linkedin.com/in/this-scott"><h1 className="hover:font-bold hover:underline">linkedIn</h1></a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}