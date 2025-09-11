import Image from "next/image"
import hamster from "@/app/favicon.ico"
import Link from "next/link"

export default function ConstructionCard() {
    return (
        <div id="construction-section" className="snap-end w-full px-10">
          <div className="flex flex-wrap justify-center">
            <div className="flex flex-col">
              <h2 className="text-2xl pt-2">This section is</h2>
              <h1 className="font-bold font-black text-6xl">Under Construction</h1>
              <h3>This website is self assembled and hosted using four AWS services and Github Actions for continuous deployment. Some features may take a little long to implement</h3>
              <h3></h3>
              <Link className="hover:font-bold underline" href="/">Return Home</Link>
            </div>
                <Image className="w-1/12 pl-4" src={hamster} alt="construction hamster"></Image>
          </div>
        </div>
    )
}