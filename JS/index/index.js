fetch("/JS/index/songs.json").then(response=>response.json()).then(data=>
    {
        //console.log(data)
        for(const song of data) {
            //console.log(song.name)
            document.querySelector("#artist-input-js").innerHTML+=`
                <div class="item-flex">
					<a href="${song.link}" target="_blank">
						<img alt="imageload failed" class="album-img" src="${song.image}">
					</a>
					<i>${song.name}</i>
					<b>By ${song.artist}</b>
					<small>${song.type}</small>
				</div>
            `
            console.log(`${song.name}, ${song.artist}`)
        }
    }
)