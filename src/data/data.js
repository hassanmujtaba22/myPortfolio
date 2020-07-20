
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

const certificates = {
  mern: {title: "MERN Stack Development", image: "./images/MERNStack.JPG"},
  excel: {title: "Excel MOS Certification", image: "./images/excelcertificate.JPG"},
  word: {title: "Word MOS Certification", image: "./images/wordcertificate.JPG"},
  graphic: {title: "Graphic Designing Certificate", image: "./images/graphicCertificate.JPG"},
}

const achievementSection = {
  title: "Achievements And Certifications 🏆"
}

const projects = {
  incomeExpense: {title: "Income Expense App", image: "./images/incomeexpence.JPG", live: "http://hassanmujtaba-income-expense.surge.sh", githublink: "https://github.com/hassanmujtaba22/Income-Expense-App"},
  covid19: {title: "Covid 19 Tracker App", image: "./images/covid19.JPG", live: "http://hassanmujtaba-covid19.surge.sh", githublink: "https://github.com/hassanmujtaba22/covid-19-project"},
  ecommerce: {title: "Shoes Store", image: "./images/shoestore.JPG", live: "http://hassanmujtaba-shoesstore.surge.sh", githublink: "https://github.com/hassanmujtaba22/ShoesStore"},
  calculator: {title: "Calculator", image: "./images/calculator.JPG", live: "", githublink: "https://github.com/hassanmujtaba22/SM-WM-Assignments/tree/master/public/calculator-using-JS"},
}
export {greeting, socialMediaLink, skillsSection, certificates, achievementSection, projects}