const apiUrl = 'http://localhost:8080/producto/getAll';


fetch(apiUrl)
    .then(response => response.json())
    .then(data => {

        const {
            name,
            description,
            price,
            image
        } = data;


        const container = document.getElementById('container');


        const nameElement = document.createElement('h1');
        nameElement.textContent = name;
        container.appendChild(nameElement);


        const descriptionElement = document.createElement('p');
        descriptionElement.textContent = description;
        container.appendChild(descriptionElement);


        const priceElement = document.createElement('h1');
        priceElement.textContent = `$${price}`;
        container.appendChild(priceElement);


        const imageElement = document.createElement('img');
        imageElement.src = image;
        container.appendChild(imageElement);
    })
    .catch(error => {
        console.error('Error:', error);
    });



    //local.storage