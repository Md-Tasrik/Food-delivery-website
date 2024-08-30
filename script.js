
const imageArray = [
    {
        url: "./image/sandwich.png",
    },
    {
        url: "/image/Enchilade.png",
    },
    {
        url: "./image/green beans.png",
    },
    {
        url: "./image/sandwich.png",
    },
    {
        url: "./image/pizza.png",
    },
    {
        url: "./image/green salad.png",
    }
];

function handleShowMoreProject() {
    const projectContainer = document.getElementById("single-collection");


    for (const item of imageArray) {
        // console.log(item);
        const projectDivImage = document.createElement("div");

        projectDivImage.classList.add("collection-img");
        projectDivImage.innerHTML = `<img src="${item.url}" alt="">`;

        projectContainer.appendChild(projectDivImage);

    }

}