const projectl = new URLSearchParams(window.location.search);

let a;
let b;
let c;

// Code for the detailed site on each of the projects
fetch("/JS/brukerstotte/projects.json").then(response=>response.json()).then(data=>{a = data});
fetch("/JS/driftstotte/projects.json").then(response=>response.json()).then(data=>{b = data});
fetch("/JS/utvikling/projects.json").then(response=>response.json()).then(data=>{c = data});

let everything = [];

setTimeout(()=>{



    everything =  a.concat(b.concat(c))



    console.log(everything)


    for(let project of everything) {
        console.log(project.id + "  " + projectl.get("pid"))
        if (project.id.toString() === projectl.get("pid")) {
            console.log("It works")
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
                    <div id="feedback"></div>
                    <a href="${project.link}">Link</a>
                </div>
                <div style="margin: 1em">
                    <h>A short description</h>
                    </br>
                    <p class="proj-description">${project.desc}</p>
                    </br>
                </div>
        `
        if("form" in everything) {document.querySelector("#feedback").innerHTML = `
          <a href="${project.form}">Feedback form</a>
          </br>
        `}
        }
    }},100)



