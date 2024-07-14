// add function of searchBook
document.getElementById('btnSearch').addEventListener("click", searchBook);

// URL of books
const URL_DATA = 'https://gutendex.com/books';

// container of loading
let container = `<div class="container">
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
<div class="dot"></div>
</div>
`;

// element for show results
let containerFirst = document.querySelector('#containerFirst');

function searchBook() {

    containerFirst.innerHTML = container;

    let inputSearch = document.querySelector('.inputSearch').value;

    if (inputSearch === '') {
        containerFirst.innerHTML = `<div class="centered-content">
        <p><b> UPS! Parece que debe agregar el titulo del libro<b/> </p>
        </div>`;
        return
    }

    fetch(`${URL_DATA}?search=${inputSearch}`)
        .then(response => response.json())
        .then(response => contentBook(response.results))

}

function contentBook(books) {
    containerFirst.innerHTML = '';
    if (books.length === 0) {
        containerFirst.innerHTML = '<p class="centered-content"><b>UPS! Libro no encontrado!<b/></p>';
        return;
    }

    // creation of cards
    books.map(element => {

        let containerData = document.createElement('p');

        containerData.classList.add('tilt-in-top-1');

        containerData.innerHTML += `
        <img src="${element.formats['image/jpeg'] ? element.formats['image/jpeg'] : '/images/llbook.svg'}" alt="${element.title}" title="${element.title}"> <br/>
        <a href="${element.formats['text/html']}"  class="${element.formats['text/html'] ? '' : 'notPreview'}"
        target="_blank">${element.formats['text/html'] ? 'Vista previa' : 'Sin vista previa'}</a>
        <br/> `;

        containerFirst.appendChild(containerData);

    })



}
