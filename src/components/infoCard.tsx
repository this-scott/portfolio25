import React from "react";

export function InfoCard({title, subtitle, text, extra} : {title:string, subtitle:string, text:string[], extra: React.ReactNode[]}) {
    return (
        <div>
            <h1 className="font-black font-bold text-4xl">{title}</h1>
            <h2 className="font-black font-bold text-2xl whitespace-pre-line">{subtitle}</h2>
            <ul className="list-disc ml-6 text-lg">
                {text.map((item,i) => (
                    <li key={i} className='pt-1'>{item}</li>
                ))}
                {extra.map((item,i) => (
                    <li key={i} className='pt-1'>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export function LinkText({text, src} : {text:string, src:string}) {
    return(
        <a className="underline text-yellow-600 font-bold" target="_blank" rel="noopener noreffer" href={src}>{text}</a>
    )
}