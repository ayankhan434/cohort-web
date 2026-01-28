console.log("hello world")
const users = [
  {
    fullName: "Aarav Sharma",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Frontend Developer",
    description: "Passionate frontend developer who loves building clean and interactive user interfaces.",
    tags: ["HTML", "CSS", "JavaScript", "React"]
  },
  {
    fullName: "Riya Verma",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    profession: "UI/UX Designer",
    description: "Creative UI/UX designer focused on user-centered design and smooth experiences.",
    tags: ["Figma", "Adobe XD", "UI Design", "UX Research"]
  },
  {
    fullName: "Kabir Singh",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Backend Developer",
    description: "Backend engineer specializing in scalable APIs and database optimization.",
    tags: ["Node.js", "Express", "MongoDB", "REST API"]
  },
  {
    fullName: "Neha Gupta",
    img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Data Analyst",
    description: "Data analyst who turns raw data into meaningful business insights.",
    tags: ["Python", "SQL", "Power BI", "Data Visualization"]
  },
  {
    fullName: "Arjun Mehta",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    profession: "Full Stack Developer",
    description: "Full stack developer with experience in building complete web applications.",
    tags: ["MERN", "Next.js", "TypeScript", "AWS"]
  }
];

var sum=''

 

users.forEach(function(elem){
    sum = sum + `<div class="card">
            <img src="${elem.img}" alt="" >
            <h3>${elem.fullName}</h3>
            <h4>${elem.profession}</h4>
            <p>${elem.tags}</p>
            <p>${elem.description}</p>
        </div>`
            
    

})
var main=document.querySelector('main')
main.innerHTML = sum