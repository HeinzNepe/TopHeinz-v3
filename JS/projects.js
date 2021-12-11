const project = new URLSearchParams(window.location.search)

let a
let b
let c

// Code for the detailed site on each of the projects
fetch("/JS/brukerstotte/projects.json").then(response=>response.json()).then(data=>{a = JSON.stringify(data);})
fetch("/JS/driftstotte/projects.json").then(response=>response.json()).then(data=>{b = JSON.stringify(data);})
fetch("/JS/utvikling/projects.json").then(response=>response.json()).then(data=>{c = JSON.stringify(data);})
    
const projectinfo =  project.get("pid")
let everything = [];
var project;
setTimeout(()=>{



console.log(a)
console.log(b)
console.log(c)

everything = everything.concat.apply([],[a,b,c]);
console.log(everything)


    for(project of everything) {
    if (project.id.toString() === projectinfo) {
        document.querySelector("#project-input-js").innerHTML = `
                </br>
                <h style="margin: 1em">${project.name}</h>
                <div class="infocard-project-flex">
                    <a href="${project.link}">
                    <img alt="imageload failed" class="info-project-img" src="${project.image}">
                    </a>
                    
                    <b>${project.name}</b>
                    <smaller>${project.start} til ${project.end}</smaller>
                    <smaller>${project.status}</smaller>
                </div>
                <div>
                    <b>Status:</b>
                    <p>This project is ${project.status}</p>
                    </br>
                    <b>Project info:</b>
                    </br>
                    <a href="${project.form}">Feedback form</a>
                    </br>
                    <a href="${project.link}">Link</a>
                </div>
                <div style="margin: 1em">
                    <h>A short description</h>
                    </br>
                    <p class="proj-description">${project.desc}</p>
                    </br>
                </div>
        `
    }
}},100)



