fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(worksElements => {
        console.log(worksElements)

        for (let i = 0; i < worksElements.length; i++) {
            let work = worksElements[i];

            // Link with the DOM
            let sectionGallery = document.querySelector(".gallery");
            let figureDiv = document.createElement("figure")
            let workTitle = document.createElement("h3");
            workTitle.innerText = work.title;
            let workImage = document.createElement("img");
            workImage.src = work.imageUrl;

            sectionGallery.appendChild(figureDiv)
            figureDiv.appendChild(workImage);
            figureDiv.appendChild(workTitle);


        }
    })

    