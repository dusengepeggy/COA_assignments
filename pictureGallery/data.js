const galleryData = [
    {
        id: 1,
        name: "FENNEC FOX",
        location: "india",
        image: "./pictures/fox.jpeg"

    },
    {
        id: 2,
        name: "HUMPBACK WHALE",
        location: "South Africa",
        image: "./pictures/whale.jpeg"

    },
    {
        id: 3,
        name: "COMMON BROWN BABOON",
        location: "South Africa",
        image: "./pictures/baboon.jpeg"

    },
    {
        id: 4,
        name: "SPOTTED DEAR",
        location: "Amazon",
        image: "./pictures/deer.jpeg"

    },

]


document.getElementById('box').innerHTML = galleryData.map(
    (ele) =>
        `
        
            <div class="subBox" style="background-image: url(${ele.image});">
            <div class="hover-overlay">
            </div>
            <div class="info">
            <p class="name">${ele.name}</p>
            <p class="location">${ele.location}</p>
            </div>
            </div>
        `

).join("")



