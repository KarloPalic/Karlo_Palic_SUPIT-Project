document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.news3 p');
    links.forEach(function (link) {
        link.style.opacity = 1;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.news2 p');
    links.forEach(function (link) {
        link.style.opacity = 1;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.news1 p');
    links.forEach(function (link) {
        link.style.opacity = 1;
    });
});

const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const galleryOverlay = document.getElementById('galleryOverlay');
const galleryContent = document.getElementById('galleryContent');
const closeButton = document.querySelector('.closeButton');

function openGallery(imageSrc) {
  const imgElement = document.createElement('img');
  imgElement.src = imageSrc;
  galleryContent.innerHTML = '';
  galleryContent.appendChild(imgElement);
  galleryOverlay.style.display = 'flex';
}

img1.addEventListener('click', function () {
  const imageSrc = this.querySelector('img').src;
  openGallery(imageSrc);
});

img2.addEventListener('click', function () {
  const imageSrc = this.querySelector('img').src;
  openGallery(imageSrc);
});

closeButton.addEventListener('click', function () {
  galleryOverlay.style.display = 'none';
});
