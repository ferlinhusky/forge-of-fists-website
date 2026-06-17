(function () {
  const nav = document.getElementById('site-nav');
  const onGallery = nav ? nav.dataset.page === 'gallery' : /gallery\.html/.test(window.location.pathname);
  const r = onGallery ? 'index.html' : ''; // root prefix for cross-page links

  // ── NAV ──────────────────────────────────────────────────────────────
  if (nav) {
    nav.outerHTML = `
<nav class="site-nav">
  <a href="${onGallery ? 'index.html' : '#hero'}" class="nav-brand"><img src="images/FoF-Icon-192.png" alt="" aria-hidden="true" style="height:34px;width:34px;margin-right:.55rem;vertical-align:middle;border-radius:4px">Forge of Fists</a>
  <button class="nav-toggle" aria-label="Menu">☰</button>
  <ul class="nav-links">
    <li><a href="${r}#what">The Game</a></li>
    <li><a href="${r}#features">Features</a></li>
    <li><a href="${r}#factions">Factions</a></li>
    <li><a href="${r}#email">Signup</a></li>
    <li><a href="${r}#faq">FAQ</a></li>
    <li><a href="${r}#author">About</a></li>
    <li><a href="gallery.html"${onGallery ? ' class="nav-active"' : ''}>Card Gallery</a></li>
    <li><a href="https://play.forgeoffists.com" class="nav-play" target="_blank" rel="noopener">Play Free ↗</a></li>
  </ul>
</nav>`;

    // Re-attach mobile toggle (inline onclick is gone after outerHTML swap)
    document.querySelector('.nav-toggle').addEventListener('click', function () {
      document.querySelector('.nav-links').classList.toggle('open');
    });
  }

  // ── FOOTER ───────────────────────────────────────────────────────────
  const footerPlaceholder = document.getElementById('site-footer');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = `
<footer id="footer">
  <span class="footer-brand">Forge of Fists</span>
  <p class="footer-tag">A living card game set in the world of Almokon</p>
  <ul class="footer-nav">
    <li><a href="${r}#what">The Game</a></li>
    <li><a href="${r}#features">Features</a></li>
    <li><a href="${r}#factions">Factions</a></li>
    <li><a href="${r}#email">Signup</a></li>
    <li><a href="${r}#faq">FAQ</a></li>
    <li><a href="${r}#author">About</a></li>
    <li><a href="${r}#play">Play Free</a></li>
    <li><a href="https://play.forgeoffists.com" target="_blank" rel="noopener">play.forgeoffists.com ↗</a></li>
  </ul>
  <div class="footer-orn">✦ &nbsp; ✦ &nbsp; ✦</div>
  <p class="footer-copy">
    &copy; 2026 Forge of Fists. All rights reserved.<br>
    Almokon, its factions, and all associated content are original works of fiction.<br>
    <a href="mailto:gcranfield@gmail.com">gcranfield@gmail.com</a>
  </p>
</footer>`;
  }
})();
