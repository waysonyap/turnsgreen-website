// lang.js — bilingual swap between Bahasa Malaysia and English.
// Reads/writes localStorage key "tga-lang". Default: "bm".
// Every text element should carry data-en and data-bm attributes.
// <html> can carry data-title-en/bm and data-desc-en/bm for <title> and meta description.
//
// Security: this script ONLY uses textContent and attribute setters — no innerHTML.
// Multi-line content must be modelled as separate elements in markup, not via <br>.
(function () {
  'use strict';
  const KEY = 'tga-lang';
  const get = () => localStorage.getItem(KEY) || 'bm';
  const set = (v) => localStorage.setItem(KEY, v);

  function apply(lang) {
    document.documentElement.lang = lang === 'bm' ? 'ms' : 'en';
    const attr = 'data-' + lang;

    document.querySelectorAll('[data-en][data-bm]').forEach(el => {
      const next = el.getAttribute(attr);
      if (next != null) el.textContent = next;
    });

    document.querySelectorAll('[data-en-placeholder][data-bm-placeholder]').forEach(el => {
      const next = el.getAttribute('data-' + lang + '-placeholder');
      if (next != null) el.placeholder = next;
    });

    document.querySelectorAll('[data-en-aria][data-bm-aria]').forEach(el => {
      const next = el.getAttribute('data-' + lang + '-aria');
      if (next != null) el.setAttribute('aria-label', next);
    });

    const html = document.documentElement;
    const t = html.getAttribute('data-title-' + lang);
    if (t) document.title = t;
    const d = html.getAttribute('data-desc-' + lang);
    if (d) {
      let m = document.querySelector('meta[name="description"]');
      if (!m) {
        m = document.createElement('meta');
        m.name = 'description';
        document.head.appendChild(m);
      }
      m.content = d;
    }

    document.querySelectorAll('[data-lang-toggle]').forEach(btn => {
      btn.textContent = lang === 'bm' ? 'BM | EN' : 'EN | BM';
      btn.setAttribute('aria-label', lang === 'bm' ? 'Switch to English' : 'Tukar ke Bahasa Malaysia');
    });
  }

  function toggle() {
    const next = get() === 'bm' ? 'en' : 'bm';
    set(next);
    apply(next);
  }

  document.addEventListener('DOMContentLoaded', () => {
    apply(get());
    document.querySelectorAll('[data-lang-toggle]').forEach(btn => btn.addEventListener('click', toggle));
  });
})();
