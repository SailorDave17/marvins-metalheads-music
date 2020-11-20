import {
    albumDetails
} from "./albumDetails.js"
import {
    songList
} from "./songListDisplay.js"
import {
    songDetails
} from "./songDetails.js"

fetch("http://localhost:8080/api/albums")
    .then(response => response.json())
    .then(allAlbums => {
        document.querySelector('.container').appendChild(songList(allAlbums));
        document.querySelector('.container').appendChild(albumDetails(allAlbums[0]));
        document.querySelector(".container").appendChild(songDetails(allAlbums[0]));
    })

const submitButton = document.querySelector(".form-submit");
submitButton.addEventListener("click", (clickEvent) => {
    clickEvent.preventDefault();
    document.querySelector('.container').innerHTML = `<div class="song-list">
    </div>

    <div class="details">
    </div>`;
    const albumNew = {
        "albumName": document.querySelector(".album-name").value,
        "artist": document.querySelector(".artist-name").value,
        "recordLabel": document.querySelector(".label").value,
        "image": "./src/img/hitchhiker-symbol-icon.png"
    }
    fetch("http://localhost:8080/api/albums", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(albumNew)
        })
        .then(response => response.json())
        .then(allAlbums => {
            document.querySelector('.container').appendChild(songList(allAlbums));
            document.querySelector('.container').appendChild(albumDetails(allAlbums[0]));
            document.querySelector(".container").appendChild(songDetails(allAlbums[0]));
        })
        .catch(err => console.error(err));
})




const developerButton = document.querySelector(".add-song-button");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");

function closeModal() {
    modal.style.display = "none";
    backdrop.style.display = "none";
}
developerButton.addEventListener("click", function() {
    modal.style.display = "block";
    backdrop.style.display = "block";
});

const exitButton = document.querySelector(".exit");
exitButton.addEventListener("click", closeModal);
backdrop.addEventListener("click", closeModal);

//About the Developers Modal
// const developerButton = document.querySelector(".about-button");
// const modal = document.querySelector(".modal");
// const backdrop = document.querySelector(".backdrop");

// function closeModal() {
//     modal.style.display = "none";
//     backdrop.style.display = "none";
// }
// developerButton.addEventListener("click", function() {
//     modal.style.display = "block";
//     backdrop.style.display = "block";
// });

// const exitButton = document.querySelector(".exit");
// exitButton.addEventListener("click", closeModal);
// backdrop.addEventListener("click", closeModal);