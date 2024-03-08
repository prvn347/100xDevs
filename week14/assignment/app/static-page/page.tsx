import { Body } from "@/components/body";

export default function(){
 
    return <div className="bg-black text-white h-screen">
      <Body title="Welcome to static page." description= "This paragraph right here is rendered statically using next.js by generating the content on the server at build time,next.js,ensures that search  engines can easily crawl and indexthis page,boosting its SEO plus ,serving static contentleds to faster load times and a smoother user experience . And if i need interactivily .Next.js allows me to user the 'use client' directive for specific components."/>
    </div>
    
}