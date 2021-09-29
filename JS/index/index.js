
//This is the JavaScript for inputting the music cards in index
    fetch("/JS/index/songs.json").then(response=>response.json()).then(data=>
        {
            //console.log(data)
            for(const song of data) {
                //console.log(song.name)
                document.querySelector("#artist-input-js").innerHTML+=`
                    <div class="item-flex">
                        <a href="/subpages/song.html?song-id=${song.id}">
                            <img alt="imageload failed" class="album-img" src="${song.image}">
                        </a>
                        <i>${song.name}</i>
                        <b>By ${song.artist}</b>
                        <small>${song.type}</small>
                    </div>
                `
               // console.log(`${song.type}, ${song.name}, ${song.artist}`)
            }
        }
    )
//To here