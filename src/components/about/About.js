import React from 'react';
import Terminal from "./Terminal";
import {info} from "../../info/Info";

export default function About() {
    const firstName = info.firstName.toLowerCase()

    function aboutMeText() {
        return <>
            <p><span className="text-[#ff6b6b]">{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span className="text-[#ff6b6b]">about{firstName} <span
                className="text-green-500">(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span className="text-[#ff6b6b]">{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span className="text-[#ff6b6b]">skills/tools <span
                className="text-green-500">(main)</span> $</span> ls</p>
            <p className="text-[#ff6b6b]"> Proficient With</p>
            <ul className="list-disc list-inside ml-4">
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p className="text-[#ff6b6b]"> Exposed To</p>
            <ul className="list-disc list-inside ml-4">
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span className="text-[#ff6b6b]">{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span className="text-[#ff6b6b]">hobbies/interests <span
                className="text-green-500">(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index} className="flex items-center"><span className="mr-4">{hobby.emoji}</span>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <div className="flex flex-col items-center mt-12">
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
        </div>
    )
}