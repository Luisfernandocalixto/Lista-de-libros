// container of loading
export const container = `<div class="container">
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


export const aviseInput = `<div class="centered-content">
        <p><b> UPS! Parece que debe agregar el titulo del libro<b/> </p>
        </div>`;

export const aviseNotFound = '<p class="centered-content"><b>UPS! Libro no encontrado!<b/></p>';

export const renderBooks = (element) => `
        <img src="${element.formats['image/jpeg'] ? element.formats['image/jpeg'] : '/images/llbook.svg'}" alt="${element.title}" title="${element.title}"> <br/>
        <a href="${element.formats['text/html']}"  class="${element.formats['text/html'] ? '' : 'notPreview'}"
        target="_blank">${element.formats['text/html'] ? 'Vista previa' : 'Sin vista previa'}</a>
        <br/> `;