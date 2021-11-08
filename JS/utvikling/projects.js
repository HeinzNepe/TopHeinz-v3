const project = new URLSearchParams(window.location.search)



fetch("/JS/utvikling/projects.json").then(response=>response.json()).then(data=>{

    console.log("help" + project.id)
    const projectinfo =  project.get("pid")

    for(const project of data) {
        if(project.id.toString()===projectinfo) {
            document.querySelector("#project-input-js").innerHTML=`
                    <div class="info-item-flex">
                        <img alt="imageload failed" class="info-album-img" src="${project.image}">
                        <b>${project.name}</b>
                        <smaller>${project.start} til ${project.end}</smaller>
                        <smaller>${project.status}</smaller>
                    </div>
            `
        }

    }


})