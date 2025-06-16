import { aviseInput, aviseNotFound, container, renderBooks } from "./template.js";

document.addEventListener('DOMContentLoaded', function () {

    // add function of searchBook
    document.getElementById('btnSearch').addEventListener("click", searchBook);

    // URL of books
    const URL_DATA = 'https://gutendex.com/books';



    // element for show results
    let containerFirst = document.querySelector('#containerFirst');

    function searchBook() {

        containerFirst.innerHTML = container;

        let inputSearch = document.querySelector('.inputSearch').value;

        if (inputSearch === '' || inputSearch.trim() === '') {
            containerFirst.innerHTML = aviseInput;
            return
        }

        fetch(`${URL_DATA}?search=${inputSearch}`)
            .then(response => response.json())
            .then(response => contentBook(response.results))

    }

    function contentBook(books) {
        containerFirst.innerHTML = '';
        if (books.length === 0) {
            containerFirst.innerHTML = aviseNotFound;
            return;
        }

        // creation of cards
        books.map(element => {

            let containerData = document.createElement('p');

            containerData.classList.add('tilt-in-top-1');

            containerData.innerHTML += renderBooks(element);

            containerFirst.appendChild(containerData);

        })



    }

})