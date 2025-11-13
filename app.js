const totalImages = 19;
const gallery = document.getElementById('gallery');

function loadImages() {
  for (let i = 1; i <= totalImages; i++) {
    const fileName = `${i}.jpg`;   
    const img = document.createElement('img');
    img.src = `Portfolio/${fileName}`;
    img.alt = `Visual Arts ${i}`;
    img.loading = 'lazy';

    img.addEventListener('click', () => openLightbox(img.src, img.alt));
    gallery.appendChild(img);
  }
}

function openLightbox(src, caption) {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCap = document.getElementById('lightbox-caption');

  lbImg.src = src;
  lbCap.textContent = caption;
  lb.style.display = 'flex';
}

document.getElementById('closeBtn').addEventListener('click', () => {
  document.getElementById('lightbox').style.display = 'none';
});

loadImages();


