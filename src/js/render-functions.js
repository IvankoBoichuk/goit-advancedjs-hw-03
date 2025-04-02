export const compileHtml = (prev, { webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
    return prev + `
        <li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img
                    class="gallery-image"
                    src="${webformatURL}"
                    data-source="${largeImageURL}"
                    alt="${tags}"
                />
            </a>
            <ul class="gallery-item--list">
                <li class="gallery-item--info">
                    <b>Likes</b>
                    <span>${likes}</span>
                </li>
                <li class="gallery-item--info">
                    <b>Views</b>
                    <span>${views}</span>
                </li>
                <li class="gallery-item--info">
                    <b>Comments</b>
                    <span>${comments}</span>
                </li>
                <li class="gallery-item--info">
                    <b>Downloads</b>
                    <span>${downloads}</span>
                </li>
            </ul>
        </li>
    `;
}

export const render = (gallery, images) => {
    const html = images.reduce(compileHtml, "");
    gallery.innerHTML = html;
};

export const showLoader = (parent) => {
    const loader = document.createElement("li");
    loader.id = "loader";
    loader.innerHTML = `<div class="loader">Loading...</div>`;
    parent.innerHTML = "";
    parent.appendChild(loader);
};

export const hideLoader = () => {
    const loader = document.getElementById("loader");
    loader.remove();
};