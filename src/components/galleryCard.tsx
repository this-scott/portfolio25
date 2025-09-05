import { InfoCard } from "./infoCard"

export function GalleryCard({title, subtitle, text, link, extras} : {title:string, subtitle:string, text:string[], link:string, extras:React.ReactNode[]}) {
    return(
        <div className="lg:pl-20 flex flex-row gap-5 w-full h-auto snap-start">
            <div className="w-full">
              <iframe className="w-full aspect-video" src={link} title="Embedded Post" allowFullScreen={true}></iframe>
            </div>
            <div className="w-3/5 pt-6">
              <InfoCard
              title={title}
              subtitle={subtitle}
              text={text}
              extra={extras}
              />
            </div>
        </div>
    )
}