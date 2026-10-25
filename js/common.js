'use strict';

// Shared header, search and back-to-top interactions.
(() => {
  const header = document.querySelector('.top-bar');
  const menuBtn = header.querySelector('.sp_nav');
  const menu = header.querySelector('.menu');
  const searchBtn = header.querySelector('.search-toggle');
  const search = header.querySelector('.search');
  const query = search.querySelector('input');
  const backdrop = header.querySelector('.search-backdrop');
  const searchDismiss = search.querySelector('.search-dismiss');
  const searchBackground = [...document.querySelectorAll('main, footer, .goTop')];
  function setSearchBackground(opening) {
    searchBackground.forEach(element => { element.inert = opening; });
    header.querySelector('.logo').inert = opening;
    header.querySelector('.sp_header').inert = opening;
  }
  const goTop = document.querySelector('.goTop');

  // Account for the responsive sticky filters when scrolling to list results.
  const tools = document.querySelector('.tools');
  let measureTools = () => {};
  header.classList.toggle('flat', Boolean(tools));
  if (tools) {
    const cards = document.querySelectorAll('.catalog .cards');
    measureTools = () => {
      // Result jumps can scroll upward and reveal the header; reserve both bars.
      const offset = header.offsetHeight + 24 + tools.getBoundingClientRect().height;
      cards.forEach(card => { card.style.scrollMarginTop = `${offset}px`; });
    };
    measureTools();
    new ResizeObserver(measureTools).observe(tools);
  }

  // Accumulate intentional movement so small scroll reversals do not flicker the menu.
  let previousScroll = Math.max(0, window.scrollY);
  let direction = 0;
  let distance = 0;
  let queued = false;
  function setAway(away) {
    if (header.classList.contains('away') === away) return;
    header.classList.toggle('away', away);
  }
  function resetDirection() {
    previousScroll = Math.max(0, window.scrollY);
    direction = 0;
    distance = 0;
  }
  function updateHeader() {
    const y = Math.max(0, Math.min(window.scrollY, document.documentElement.scrollHeight - innerHeight));
    const delta = y - previousScroll;
    header.classList.toggle('scrolled', y > 24);
    goTop.hidden = y < 300;
    if (y <= header.offsetHeight + 24 || header.matches('.open, .search-open') || header.querySelector(':focus-visible')) {
      setAway(false);
      direction = 0;
      distance = 0;
    } else if (Math.abs(delta) > .5) {
      const nextDirection = Math.sign(delta);
      if (nextDirection !== direction) {
        direction = nextDirection;
        distance = 0;
      }
      distance += Math.abs(delta);
      if (distance >= (direction > 0 ? 48 : 16)) {
        setAway(direction > 0);
        distance = 0;
      }
    }
    previousScroll = y;
  }
  function queueHeader() {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      updateHeader();
    });
  }
  updateHeader();
  window.addEventListener('scroll', queueHeader, { passive: true });
  header.addEventListener('focusin', () => { setAway(false); resetDirection(); });
  header.addEventListener('focusout', queueHeader);
  new ResizeObserver(() => { resetDirection(); measureTools(); }).observe(header);
  goTop.addEventListener('click', event => {
    event.preventDefault();
    header.querySelector('.logo a').focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  });

  const mobileMenu = window.matchMedia('(max-width: 992px)');
  let menuCloseTimer;
  function finishMenuClose() {
    if (header.classList.contains('open')) return;
    clearTimeout(menuCloseTimer);
    header.classList.remove('menu-closing');
    if (search.hidden) {
      searchBackground.forEach(element => { element.inert = false; });
      header.querySelector('.logo').inert = false;
    }
  }
  function closeMenu(immediate = false) {
    const wasOpen = header.classList.contains('open');
    clearTimeout(menuCloseTimer);
    menu.inert = mobileMenu.matches;
    if (wasOpen && !immediate && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      header.classList.add('menu-closing');
      menuCloseTimer = setTimeout(finishMenuClose, 750);
    } else if (!header.classList.contains('menu-closing') || immediate) finishMenuClose();
    header.classList.remove('open');
    header.querySelector('.links').inert = false;
    if (menu.contains(document.activeElement)) menuBtn.focus({ preventScroll: true });
    if (immediate) finishMenuClose();
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', '開啟選單');
  }

  menu.addEventListener('transitionend', event => {
    if (event.target === menu && event.propertyName === 'transform' && header.classList.contains('menu-closing')) finishMenuClose();
  });

  let closeTimer;
  let restoreSearchFocus = true;
  function finishSearchClose() {
    if (!header.classList.contains('search-closing')) return;
    clearTimeout(closeTimer);
    setSearchBackground(false);
    search.hidden = true;
    menu.inert = mobileMenu.matches && !header.classList.contains('open');
    header.classList.remove('search-open', 'search-closing');
    searchBtn.setAttribute('aria-expanded', 'false');
    searchBtn.setAttribute('aria-label', '開啟搜尋');
    if (restoreSearchFocus) searchBtn.focus({ preventScroll: true });
    else if (search.contains(document.activeElement) || document.activeElement === searchBtn) document.activeElement.blur();
  }

  function closeSearch(immediate = false, restoreFocus = true) {
    if (search.hidden) return;
    if (header.classList.contains('search-closing') && !immediate) return;
    restoreSearchFocus = restoreFocus;
    query.blur();
    header.classList.add('search-closing');
    searchBtn.setAttribute('aria-expanded', 'false');
    searchBtn.setAttribute('aria-label', '開啟搜尋');
    clearTimeout(closeTimer);
    if (immediate || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finishSearchClose();
      return;
    }
    // Reopening cancels this fallback and reverses the current CSS transition.
    closeTimer = setTimeout(finishSearchClose, 850);
  }

  search.addEventListener('transitionend', event => {
    if (event.target === search && event.propertyName === 'transform') finishSearchClose();
  });

  menuBtn.addEventListener('click', () => {
    const opening = !header.classList.contains('open');
    closeSearch(true, false);
    if (!opening) return closeMenu();
    clearTimeout(menuCloseTimer);
    header.classList.remove('menu-closing');
    menu.inert = false;
    header.querySelector('.links').inert = true;
    searchBackground.forEach(element => { element.inert = true; });
    header.querySelector('.logo').inert = true;
    header.classList.toggle('open', opening);
    setAway(false);
    resetDirection();
    menuBtn.setAttribute('aria-expanded', String(opening));
    menuBtn.setAttribute('aria-label', opening ? '關閉選單' : '開啟選單');
  });

  searchBtn.addEventListener('click', () => {
    const opening = search.hidden || header.classList.contains('search-closing');
    if (!opening) return closeSearch();
    closeMenu(true);
    clearTimeout(closeTimer);
    const firstOpen = search.hidden;
    search.hidden = false;
    // Establish the offscreen start only once; interrupted closes keep their position.
    if (firstOpen) void search.offsetHeight;
    header.classList.remove('search-closing');
    menu.inert = opening;
    setSearchBackground(opening);
    header.classList.toggle('search-open', opening);
    setAway(false);
    resetDirection();
    searchBtn.setAttribute('aria-expanded', String(opening));
    searchBtn.setAttribute('aria-label', opening ? '關閉搜尋' : '開啟搜尋');
    if (opening) query.focus({ preventScroll: true });
  });

  [backdrop, searchDismiss].forEach(control => control.addEventListener('click', event => {
    closeSearch(false, event.detail === 0);
  }));

  search.addEventListener('submit', event => {
    event.preventDefault();
    if (!query.value.trim()) return query.focus();
    // Search results will be connected when the shared content search is available.
  });

  header.querySelectorAll('.menu a').forEach(link => link.addEventListener('click', () => closeMenu()));
  header.querySelector('.menu-backdrop').addEventListener('click', () => closeMenu());
  menu.inert = mobileMenu.matches;
  document.addEventListener('click', event => {
    if (!search.hidden && !header.contains(event.target)) {
      const restoreFocus = search.contains(document.activeElement);
      closeSearch(false, restoreFocus && event.detail === 0);
    }
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Tab' && header.classList.contains('open')) {
      const links = [...menu.querySelectorAll('a')];
      if (event.shiftKey && document.activeElement === links[0]) { event.preventDefault(); menuBtn.focus(); }
      else if (!event.shiftKey && document.activeElement === menuBtn) { event.preventDefault(); links[0].focus(); }
      return;
    }
    if (event.key === 'Tab' && header.classList.contains('search-closing')) {
      event.preventDefault();
      return;
    }
    if (event.key === 'Tab' && !search.hidden) {
      if (event.shiftKey && document.activeElement === query) {
        event.preventDefault();
        searchDismiss.focus();
      } else if (!event.shiftKey && document.activeElement === searchDismiss) {
        event.preventDefault();
        query.focus();
      }
    }
    if (event.key !== 'Escape') return;
    if (!search.hidden) closeSearch();
    if (header.classList.contains('open')) { closeMenu(); menuBtn.focus(); }
  });
  window.matchMedia('(max-width: 992px)').addEventListener('change', event => {
    closeMenu(true);
    if (!search.hidden) closeSearch(true);
  });

  // Links remain placeholders until the inner pages are built.
  document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', event => event.preventDefault());
  });

})();
