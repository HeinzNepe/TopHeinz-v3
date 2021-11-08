const project = new URLSearchParams(window.location.search)

// Code for the detailed site on each of the projects

fetch("/JS/utvikling/projects.json").then(response=>response.json()).then(data=>{
    
    const projectinfo =  project.get("pid")

    for(const project of data) {
        if(project.id.toString()===projectinfo) {
            document.querySelector("#project-input-js").innerHTML=`
                    </br>
                    <h>${project.name}</h>
                    <div class="infocard-project-flex">
                        <a href="${project.link}">
                        <img alt="imageload failed" class="info-project-img" src="${project.image}">
                        </a>
                        
                        <b>${project.name}</b>
                        <smaller>${project.start} til ${project.end}</smaller>
                        <smaller>${project.status}</smaller>
                    </div>
                    <b>Status:</b>
                    <p>This project is ${project.status}</p>
                    </br>
                    <b>Location:</b>
                    <a href="${project.link}">Link</a>
                    </br>
                    <h>A short description</h>
                    </br>
                    <p class="proj-description">${project.desc}</p>
                    </br>

            `
        }

    }


})