const song = new URLSearchParams(window.location.search)



fetch("/JS/index/songs.json").then(response=>response.json()).then(data=>{

    const songinfo =  song.get("song-id")

    for(const song of data) {
        if(song.id.toString()===songinfo) {
            document.querySelector("#more-songinfo").innerHTML=`
                <div class="info-music-flex">  
                    <img alt="imageload failed" class="info-music" src="${song.image}">
                    <i>${song.name}</i>
                    <b>By ${song.artist}</b>
                    <small>${song.type}</small>
                    <div id="info-music-platform">
                        <div id="info-music-platform-youtube"></div>
                        <div id="info-music-platform-spotify"></div>
                    </div>
                    
            `

            if ("youtube" in song) {
                document.querySelector("#info-music-platform-youtube").innerHTML=`                    
                <a class="music-link" id="youtube-link" href="${song.youtube}">
                    <img id="youtube-link" src="/mainbilder/sites/Index/Music/youtube_social_icon_white.png" alt="imgload failed">
                    Youtube
                </a>`
            }
            if ("spotify" in song) {
                document.querySelector("#info-music-platform-spotify").innerHTML=`                    
                <a class="music-link" id="spotify-link" href="${song.spotify}">
                    <img id="spotify-link" src="/mainbilder/sites/Index/Music/Spotify_Icon_RGB_Green.png" alt="imgload failed">
                    Spotify
                </a>`
            }

        }

    }


})