import Image from "next/image";
import fire from "@/assets/th2025_crop.jpg"
import aboutme_photo from "@/assets/GradPhotoCrop.jpg"

export default function Home() {
  return (
    <div className="font-sans flex-col justify-between items-center min-h-screen pt-8 px-12 pb-20 gap-16 sm:pt-25 ">
      <main className="flex object-fill flex-col gap-20 sm:items-start sm:gap-32">
        <div id="first sight" className="flex flex-col">
          <div className="flex flex-row gap-3 justify-end pr-4 pb-4">
            <h1>blog</h1>
            <h1>github</h1>
            <h1>linked</h1>
          </div>
          <div className="flex flex-row flex-wrap justify-evenly h-full">
            <div className="flex-1 flex flex-col items-center justify-center">
              <div id="not another div">
                <h4 className="text-xl">Hi I'm</h4>
                <h1 className="font-bold font-black text-8xl">Scott Styslinger</h1>
                <h4 className="pt-1 text-xl">This is a small about-me website. Sit back, relax, and start scrolling</h4>
              </div>
            </div>
            <Image className="w-auto flex-1 h-auto min-w-100" src={fire} alt="landing_photo"></Image>
          </div>
        </div>
        <div id="about me section" className="flex flex-col w-full">
          <h1 className="text-center font-bold font-black text-6xl">About Me</h1>
          <div className="flex flex-row flex-wrap justify-evenly h-full">
            <div id="aboutmetext" className="flex-1 flex flex-col items-center justify-center">
              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam atque error nemo, tenetur minima sapiente accusantium tempora aliquid numquam nobis aut. Repellat labore repudiandae et nemo soluta! Repudiandae, corporis consectetur.</h1>
            </div>
            <Image className="w-1/4 h-auto object-contain" src={aboutme_photo} alt="aboutme_photo"></Image>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
