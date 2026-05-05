// nav.js — mobile hamburger toggle.
(function () {
  'use strict';
  document.addEventListener('DOMContentLoaded', () => {
    const btn = document.querySelector('.site-header__hamburger');
    const nav = document.querySelector('.site-header__nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
    });

    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }));
  });
})();
