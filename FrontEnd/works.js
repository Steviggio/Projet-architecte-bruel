fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(worksElements => {
        console.log(worksElements)

        for (let i = 0; i < worksElements.length; i++) {
            const work = worksElements[i];
            const categories = work.category.id;
            console.log(categories)

            // Link with the gallery section 
            let sectionGallery = document.querySelector(".gallery");

            // Creation of the figure inside the gallery sect°
            let figureDiv = document.createElement("figure")

            // links for the filters 
            const btnAll = document.querySelector(".btn-all");
            const btnObjects = document.querySelector(".btn-objects");
            const btnFlats = document.querySelector(".btn-flats");
            const btnHotels = document.querySelector(".btn-hotels");

            function filterByCategory(works, categoryId) {
                return works.filter(work => work.category.id == categoryId);
              }
              

            let workTitle = document.createElement("h3");
            workTitle.innerText = work.title;
            let workImage = document.createElement("img");
            workImage.src = work.imageUrl;

            sectionGallery.appendChild(figureDiv)
            figureDiv.appendChild(workImage);
            figureDiv.appendChild(workTitle);


        }
    })

