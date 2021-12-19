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

// Inputs the structure for the page
    for(let project of everything) {
        if (project.id.toString() === projectl.get("pid")) {
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
                    <h>Status:</h>
                    <p>This project is ${project.status}</p>
                    </br>
                    <h>Project info:</h>
                    <div id="external-links"></div>
                    </br>
                </div>
                <div style="margin: 1em">
                    <h>A short description</h>
                    </br>
                    <p class="proj-description">${project.desc}</p>
                    </br>
                </div>
        `
        //Ads the form into the external links section
        if("form" in project) {
        document.querySelector("#external-links").innerHTML += `
          <a href="${project.form}">Feedback form</a>
        `}
        //Ads link to the project into the external links section
        if("link" in project) {
            document.querySelector("#external-links").innerHTML += `
            <a href="${project.link}">Link</a>
        `}
            
        }
    }},100)



