import { ExtInfoWrapper } from "./styled";

export default function ExtInfo({text}) {
    const titles= text.match(/\S+[\w\u0430-\u044f|0-9]\u003A/ig)
    let entries = text.replace(/\S+[\w\u0430-\u044f|0-9]\u003A/ig, "!=+")
    entries = entries.split("!=+")
    console.log(text)
    console.log(titles)
    if(entries.length !==1 && entries[0] === "")
        entries.shift()
    console.log(entries)
  

    return(
        <ExtInfoWrapper>{entries?.map((t, i)=><>{titles && titles.length > i?<h1>{titles[i]}</h1>: null} <p>{t}</p></>)}</ExtInfoWrapper>
    )   
}