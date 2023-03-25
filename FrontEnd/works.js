fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(worksElements => {
        console.log(worksElements)


        function generateWork(worksElements) {
            for (let i = 0; i < worksElements.length; i++) {
                const work = worksElements[i];

                // Link with the gallery section 
                const sectionGallery = document.querySelector(".gallery");

                // Creation of the figure inside the gallery sect°
                const figureDiv = document.createElement("figure")


                const workTitle = document.createElement("h3");
                workTitle.innerText = work.title;
                const workImage = document.createElement("img");
                workImage.src = work.imageUrl;

                sectionGallery.appendChild(figureDiv)
                figureDiv.appendChild(workImage);
                figureDiv.appendChild(workTitle);


            }
        }

        generateWork(worksElements)

        // links for the filters 
        const btnAll = document.querySelector(".btn-all");
        const btnObjects = document.querySelector(".btn-objects");
        const btnFlats = document.querySelector(".btn-flats");
        const btnHotels = document.querySelector(".btn-hotels");

        // All works are displayed
        btnAll.addEventListener("click", function () {
            const cat = worksElements;
            console.log(cat);
            document.querySelector('.gallery').innerHTML = "";
            generateWork(cat)
        });

        // Works from category "objects"
        btnObjects.addEventListener("click", function () {
            const cat = worksElements.filter(function (work) {
                if (work.category.name === "Objets") {
                    return work;
                }
            });
            document.querySelector('.gallery').innerHTML = "";
            generateWork(cat)
        });

        // Works from category "flats"
        btnFlats.addEventListener("click", function () {
            const cat = worksElements.filter(function (work) {
                if (work.category.name === "Appartements") {
                    return work;
                }
            });
            console.log(cat)
            document.querySelector('.gallery').innerHTML = "";
            generateWork(cat)
        });

        // Works from category "hotels and restaurants"
        btnHotels.addEventListener("click", function () {
            const cat = worksElements.filter(function (work) {
                if (work.category.name === "Hotels & restaurants") {
                    return work;
                }
            });
            console.log(cat)
            document.querySelector('.gallery').innerHTML = "";
            generateWork(cat)
        });

    });

