document.addEventListener('DOMContentLoaded', function(){
    const imageColumns = document.querySelectorAll('.column');
    const pixabayAPI = 'https://pixabay.com/api/?key=42201719-5551c050d3a79c1ac77093e16&per_page=10';
    fetch(pixabayAPI)
        .then(response => response.json())
        .then(data => {
            const images = data.hits;
            images.forEach((image, index) => {
                const column = imageColumns[index % 2];
                const imageItem = document.createElement('div');
                imageItem.classList.add('image-item');

                const img = document.createElement('img');
                img.src = image.webformatURL;
                img.alt = image.tags;

                imageItem.appendChild(img);
                column.appendChild(imageItem);
                
                imageItem.classList.add('fade-in');
            });
        })
        .catch(error => console.error('Error fetching images:', error));
});
