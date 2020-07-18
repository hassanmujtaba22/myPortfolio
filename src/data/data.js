
import emoji from "react-easy-emoji";

// Summary and Greeting Section 


const greeting = {
    username: "Hassan Mujtaba",
    title: emoji(`My name is Hassan Mujtaba.`),
    profession: "I am a Web and Mobile Application Developer by Profession and hobby.",
    subTitle: emoji("🚀 having an experience of building applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
}

const socialMediaLink = {
    facebook: "https://web.facebook.com/profile.php?id=100010486655448",
    github: "https://github.com/hassanmujtaba22/",
    linkedin: "https://www.linkedin.com/in/hassan-mujtaba-123a8a181/",
    gmail: "hassan03203406130@gmail.com",
}

const skillsSection = {
    title: "What i do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
      emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
      emoji("⚡ Deploy your application in cloud platform such as Amazon and Google Cloud."),
      emoji("⚡ Design User Interfaces.")
    ],
    softwareSkills: [
      "HTML / CSS / Bootstrap / Javascript",
      "ReactJS / Redux / Gatsby GraphQL",
      "TypeScript",
      "Wordpress",
      "Node JS",
      "MongoDB",
      "JSON",
      "Python / Numpy / Pandas",
      "Docker",
      "Kubernetes",
      "Git VCS"  
    ]
}

export {greeting, socialMediaLink, skillsSection}