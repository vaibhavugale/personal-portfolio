import { Link } from "react-router-dom"
import p1 from "../src/assets/p1.png"
import p2 from "../src/assets/p2.png"
import p3 from "../src/assets/p3.png"
import agorent from "../src/assets/agorent.png"
import weather from "../src/assets/weather.png"
export const  data = [ 
    {
        name:"project"
    },
    {
        name:"about"
    },
    {
        name:"contact"
    },
   

]

export const projects = [
    {
        name:"StudyNotion",
        TecStack:[
            "Html",
            "Tailwind css",
            "Express",
            "Node",
            "MongoDB",
            "Razorpay",
            "cloudinary",
            "JWT",
            "JavaScript",
        ],
        Image:p3,
        description:"StudyNotion is modern day Ed-tec website.Which is useful for student and Educators for buying affordable course's and study material",
        Link:"https://ed-tec.vercel.app/"
    },
    {
        name:"Real time voice chat web app",
        TecStack:[
            "Html",
            "Module css",
            "javaScript",
            "React",
            "WebRtc",
            "Node",
            "Express",
            "mongoDB"
        ],
        Image:p1,
        Link:"https://realtime-voice-chat-app.vercel.app/"
    },
    {
        name:"Razorpay",
        TecStack:[
            "Html",
            "Tailwind css"
        ],
        Image:p2,
        Link:"https://effulgent-croissant-44ae2b.netlify.app/"
    },
   {
    name:"Agrorent",
    TecStack:[
        "Html",
        "Tailwind css",
        "Socket.io",
        "React",
        "Cloudinary",
        
    ],
    Image:agorent,
    description:"AgroRent helps farmers save money on equipment. With our rental option, farmers can use high-quality machinery without spending a lot upfront. We make farming easier by cutting costs.",
    Link:"https://agrorent.vercel.app/"
   },
   {
    name:"Weather App",
    TecStack:[     
        "React",
        
    ],
    Image:weather,
    description:"This weather app include infinite scroll with dynamic changing back-ground with respect to weather and auto suggestion feature",
    "Link":"https://weather-app-chi-ten-55.vercel.app/"
   }

]