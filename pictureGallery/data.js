const galleryData = [
    {
        id: 1,
        name: "FENNEC FOX",
        location: "india",
        image: "./pictures/fox.jpeg",
        description: "Fenec Fox is a large carnivorous mammal. It is the largest of the African wild dog breeds and is the most popular dog breed in Africa. The Fenec Fox is a member of the genus Vulpes and is classified as a carnivorous mammal.",

    },
    {
        id: 2,
        name: "HUMPBACK WHALE",
        location: "South Africa",
        image: "./pictures/whale.jpeg",
        description: "The Humpback Whale is the largest of the whales. It is the largest of the whales. It is the largest of the whales. It is the largest of the whales. It is the largest of the whales."

    },
    {
        id: 3,
        name: "COMMON BROWN BABOON",
        location: "South Africa",
        image: "./pictures/baboon.jpeg",
        description: "The Common Brown Baboon is a large carnivorous mammal The Common Brown Baboon is a member of the genus Vulpes and is classified as a carnivorous mammal.",

    },
    {
        id: 4,
        name: "SPOTTED DEAR",
        location: "Amazon",
        image: "./pictures/deer.jpeg",
        description: "The Spotted Deer is a large carnivorous mammal. It is the largest of the African wild dog breeds and is the most popular dog breed in Africa. The Spotted Deer is a member of the genus Vulpes and is classified as a carnivorous mammal.",

    },

]

// For duplicating the same card for all 4 elements 
document.getElementById('box').innerHTML = galleryData.map(
    (ele) =>
        `
        
            <div class="subBox" style="background-image: url(${ele.image});">
                <div class="hover-overlay">
                    <div class="smallInfo">
                        <p class="name">${ele.name}</p>
                        <p class="location">${ele.location}</p>
                        <p class="desc">${ele.description}</p>
                    </div>
                </div>
                <div class="info">
                    <p class="name">${ele.name}</p>
                    <p class="location">${ele.location}</p>
                </div>
            </div>
        `

).join("")



