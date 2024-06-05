const galleryData = [
    {
        id: 1,
        name: "FENNEC FOX",
        location: "india",
        image: "./pictures/fox.jpeg",
       

    },
    {
        id: 2,
        name: "HUMPBACK WHALE",
        location: "South Africa",
        image: "./pictures/whale.jpeg",
        

    },
    {
        id: 3,
        name: "COMMON BROWN BABOON",
        location: "South Africa",
        image: "./pictures/baboon.jpeg",
        

    },
    {
        id: 4,
        name: "SPOTTED DEAR",
        location: "Amazon",
        image: "./pictures/deer.jpeg",
        

    },

]

// For duplicating the same card for all 4 elements 
document.getElementById('box').innerHTML = galleryData.map(
    (ele) =>
        `
        
            <div class="subBox" style="background-image: url(${ele.image});">
                <div class="hover-overlay">
                </div>
                <div class="smallInfo">
                    <p class="name">${ele.name}</p>
                    <p class="location">${ele.location}</p>
                    <a href="">Know more <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
                <div class="info">
                    <div class="slideout">
                    <p class="name">${ele.name}</p>
                    <p class="location">${ele.location}</p>
                    </div>
                    <a href="">Know more <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        `

).join("")



