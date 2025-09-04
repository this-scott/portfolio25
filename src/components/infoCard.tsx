import { Component } from 'react';

export function InfoCard({title, subtitle, text} : {title:string, subtitle:string, text:string[]}) {
    return (
        <div>
            <h1 className="font-black font-bold text-4xl">{title}</h1>
            <h2 className="font-black font-bold text-2xl whitespace-pre-line">{subtitle}</h2>
            <ul className="list-disc ml-6 text-lg">
                {text.map((item,i) => (
                    <li key={i} className='pt-1'>{item}</li>
                ))}
            </ul>
        </div>
    )
}