
//This is the JavaScript for inputting the music cards in index
fetch("/JS/brukerstotte/projects.json").then(response=>response.json()).then(data=>
    {
        //console.log(data)
        for(const project of data) {
            //console.log(project.name)
            document.querySelector("#project-input-js").innerHTML+=`
                    <div class="item-flex">
                        <a href="/subpages/project.html?pid=${project.id}">
                            <img alt="imageload failed" class="music" src="${project.image}">
                        </a>
                        <b>${project.name}</b>
                        <smaller>${project.start} til ${project.end}</smaller>
                        <smaller>${project.status}</smaller>
                    </div>
                `
            // console.log(`${project.type}, ${project.name}, ${project.artist}`)
        }
    }
)
//To here