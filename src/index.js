console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";


document.addEventListener('DOMContentLoaded', () => {
    // Fetch random dog images
    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(response => response.json())
        .then(data => {
            const imageContainer = document.getElementById('dog-image-container');
            data.message.forEach(url => {
                const img = document.createElement('img');
                img.src = url;
                img.style.width = '200px';
                img.style.margin = '10px';
                imageContainer.appendChild(img);
            });
        });

    // Fetch dog breeds
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(response => response.json())
        .then(data => {
            const breeds = Object.keys(data.message);
            const breedList = document.getElementById('dog-breeds');
            breeds.forEach(breed => {
                const li = document.createElement('li');
                li.textContent = breed;
                breedList.appendChild(li);
            });
        });

    // Add click event listener to breed list
    document.getElementById('dog-breeds').addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            e.target.style.color = 'firebrick';
        }
    });

    // Add change event listener to breed dropdown
    document.getElementById('breed-dropdown').addEventListener('change', function(e) {
        const letter = e.target.value;
        const breeds = Object.keys(data.message).filter(breed => breed.startsWith(letter));
        const breedList = document.getElementById('dog-breeds');
        breedList.innerHTML = '';
        breeds.forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            breedList.appendChild(li);
        });
    });
});