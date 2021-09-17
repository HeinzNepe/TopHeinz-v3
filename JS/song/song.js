const song = new URLSearchParams(window.location.search)



fetch("/JS/index/songs.json").then(response=>response.json()).then(data=>{

    const songinfo =  song.get("song-id")

    for(const song of data) {
        if(song.id.toString()===songinfo) {
            document.querySelector("#more-songinfo").innerHTML=`
                <div class="info-item-flex">  
                    <img alt="imageload failed" class="info-album-img" src="${song.image}">
                    <i>${song.name}</i>
                    <b>By ${song.artist}</b>
                    <small>${song.type}</small>
                </div>
            `
        }

    }


})