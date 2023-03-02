import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery')

const items = []

galleryItems.forEach(element => {
	const galleryItem = document.createElement('li')
    galleryItem.classList.add('gallery__item')
	const galleryLink = document.createElement('a')
    galleryLink.classList.add('gallery__link')
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
    galleryImage.classList.add('gallery__image')
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original)
    galleryImage.alt = element.description;

	galleryItem.append(galleryLink)
	galleryLink.append(galleryImage)
	items.push(galleryItem)
})
    const galleryList = document.createElement('ul');
    galleryList.classList.add('gallery')
    console.log(galleryList)
    galleryList.append(...items);
    gallery.append(galleryList);

    gallery.addEventListener('click', event => {
    event.preventDefault();
    if (event.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = event.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)

    instance.show()
    
    gallery.addEventListener('keydown', event => {
		if (event.key === 'Escape') {
			instance.close()
		}
	})
})


