// Theme Your Dream — concept
// Minimale JavaScript, uitsluitend voor het mobiele menu.

(function () {
  var toggle = document.querySelector('.site-header__toggle');
  var nav = document.getElementById('mobile-nav');

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Menu sluiten' : 'Menu openen');
  });

  // Menu sluiten zodra een link wordt gekozen.
  var links = nav.querySelectorAll('.mobile-nav__link');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Menu openen');
    });
  });
})();
