function openModal(title, text, link = null) {
  document.getElementById('modal-title').innerText = title;
  document.getElementById('modal-text').innerText = text;

  const modalLink = document.getElementById('modal-link');

  if (link) {
    modalLink.href = link;
    modalLink.style.display = 'inline-block';

    if (link.includes('github')) modalLink.innerText = 'View on GitHub →';
    else if (link.includes('figma')) modalLink.innerText = 'View on Figma →';
    else modalLink.innerText = 'Visit Project →';
  } else {
    modalLink.style.display = 'none';
  }

  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function toggleMenu() {
  document.getElementById('navMenu').classList.toggle('show');
}

function closeMenu() {
  document.getElementById('navMenu').classList.remove('show');
}
