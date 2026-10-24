'use strict';

(() => {
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const gsap = window.gsap;
  // A single text entrance; the photograph and page scroll remain still.
  const banner = document.querySelector('.banner');
  if (gsap && banner) {
    const opening = gsap.matchMedia();
    opening.add('(prefers-reduced-motion: no-preference)', () => {
      // Restored positions farther down the page should not replay an unseen opening.
      if (banner.getBoundingClientRect().bottom <= 0) return;
      const lines = banner.querySelectorAll('h1 > span > span');
      const timeline = gsap.timeline({ defaults: { ease: 'power3.out' } });
      timeline
        .fromTo(lines,
          { yPercent: 110 },
          { yPercent: 0, duration: .85, stagger: .12, clearProps: 'transform' }, .08)
        .fromTo(banner.querySelector('.tw'),
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: .65, clearProps: 'transform,opacity' }, .48);
      return () => timeline.kill();
    });
  }

  const artistDeck = document.querySelector('.ind_A .deck');
  artistDeck?.addEventListener('focusin', event => {
    if (artistDeck.closest('.play')) return;
    event.target.closest('.item')?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'instant' });
  });
  const routes = document.querySelector('.ind_B .reel');
  const brand = document.querySelector('.ind_D .mark');
  let routeSlider;
  let brandSlider;
  let brandLocked = false;
  let updateBrandPlayback = () => {};

  function lockBrand(locked) {
    if (brandLocked === locked) return;
    brandLocked = locked;
    // Settle an in-flight fade before the user scrubs back into the letter mask.
    if (locked && brandSlider?.animating) brandSlider.slideTo(brandSlider.activeIndex, 0, false);
    updateBrandPlayback();
  }

  let itinerarySlider;
  let itineraryEntrancePlayed = false;
  let updateItineraryEntrance = () => {};
  const itineraries = document.querySelector('.ind_C .rail');
  if (window.Swiper && itineraries) {
    const section = itineraries.closest('section');
    const controls = section.querySelector('.arrows');
    const prev = controls.querySelector('.prev');
    const next = controls.querySelector('.next');
    const count = itineraries.querySelectorAll('.swiper-slide').length;
    const loop = count >= 5;

    function sync(slider) {
      controls.hidden = count < 2 || slider.isLocked;
      prev.disabled = !loop && slider.isBeginning;
      next.disabled = !loop && slider.isEnd;
      slider.slides.forEach((slide, index) => {
        const active = index === slider.activeIndex;
        const nearby = Math.abs(index - slider.activeIndex) <= 1;
        if (!active && slide.contains(document.activeElement)) {
          itineraries.focus({ preventScroll: true });
        }
        slide.inert = !nearby;
        slide.setAttribute('aria-hidden', String(!active));
        slide.querySelector('.link').tabIndex = active ? 0 : -1;
      });
      updateItineraryEntrance(slider);
    }

    const slider = new Swiper(itineraries, {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 8,
      speed: motion.matches ? 0 : 700,
      loop,
      loopAddBlankSlides: false,
      watchOverflow: true,
      watchSlidesProgress: true,
      lazyPreloadPrevNext: 2,
      a11y: false,
      navigation: { prevEl: prev, nextEl: next },
      breakpoints: {
        577: { spaceBetween: 24 },
        993: { spaceBetween: 32 }
      },
      on: {
        init: sync,
        slideChange: sync,
        loopFix: sync,
        resize: sync
      }
    });

    itinerarySlider = slider;

    // Side previews select a slide; only the centered card follows its link.
    itineraries.addEventListener('click', event => {
      const link = event.target.closest('.link');
      if (!link) return;
      const slide = link.closest('.swiper-slide');
      if (!slider.allowClick || slider.animating) {
        event.preventDefault();
        return;
      }
      if (slide === slider.slides[slider.activeIndex]) return;
      event.preventDefault();
      if (loop) slider.slideToLoop(Number(slide.dataset.swiperSlideIndex));
      else slider.slideTo(slider.slides.indexOf(slide));
    });
    section.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); slider.slidePrev(); }
      if (event.key === 'ArrowRight') { event.preventDefault(); slider.slideNext(); }
    });
    motion.addEventListener('change', () => {
      slider.params.speed = motion.matches ? 0 : 700;
    });
  }

  if (window.Swiper && routes) {
    const section = routes.closest('section');
    const slides = [...routes.querySelectorAll('.swiper-slide')];
    const progress = section.querySelector('.progress');
    const current = section.querySelector('.count b');
    function sync(slider) {
      const index = slider.activeIndex;
      progress.setAttribute('aria-valuenow', String(index + 1));
      progress.querySelector('span').style.transform = `scaleX(${(index + 1) / slides.length})`;
      current.textContent = String(index + 1).padStart(2, '0');
      slides.forEach((slide, position) => {
        slide.inert = position !== index;
        slide.setAttribute('aria-hidden', String(position !== index));
      });
    }
    routeSlider = new Swiper(routes, {
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: motion.matches ? 0 : 800,
      rewind: true,
      loop: false,
      a11y: false,
      navigation: {
        prevEl: section.querySelector('.prev'),
        nextEl: section.querySelector('.next')
      },
      on: { init: sync, slideChange: sync }
    });
    section.addEventListener('keydown', event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      if (event.key === 'ArrowLeft') { event.preventDefault(); routeSlider.slidePrev(); }
      if (event.key === 'ArrowRight') { event.preventDefault(); routeSlider.slideNext(); }
    });
  }

  // Hold one photo during expansion, then crossfade while the completed scene is visible.
  if (window.Swiper && brand) {
    brandSlider = new Swiper(brand, {
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: { crossFade: true },
      speed: motion.matches ? 0 : 1400,
      loop: brand.querySelectorAll('.swiper-slide').length > 1,
      loopAddBlankSlides: false,
      allowTouchMove: false,
      a11y: false,
      // Fade uses virtual translation; its timer must not depend on wrapper transition events.
      autoplay: { delay: 4200, waitForTransition: false, disableOnInteraction: false, stopOnLastSlide: false }
    });
    let visible = false;
    function updatePlayback() {
      if (visible && !document.hidden && !motion.matches && !brandLocked) {
        if (!brandSlider.autoplay.running) brandSlider.autoplay.start();
      } else brandSlider.autoplay.stop();
    }
    updateBrandPlayback = updatePlayback;
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting;
      updatePlayback();
    }, { threshold: .15 }).observe(brand);
    document.addEventListener('visibilitychange', updatePlayback);
    motion.addEventListener('change', () => {
      brandSlider.params.speed = motion.matches ? 0 : 1400;
      if (routeSlider) routeSlider.params.speed = motion.matches ? 0 : 800;
      updatePlayback();
    });
    updatePlayback();
  }

  const scenes = document.querySelector('.ind_E');
  if (scenes) {
    const images = [...scenes.querySelectorAll('[data-bg]')];
    let selection = 'places';
    async function show(name) {
      selection = name;
      const image = images.find(item => item.dataset.bg === name);
      if (!image) return;
      try { await image.decode(); } catch { return; }
      if (selection !== name) return;
      images.forEach(item => item.classList.toggle('active', item === image));
    }
    scenes.querySelectorAll('[data-scene]').forEach(item => {
      item.addEventListener('mouseenter', () => show(item.dataset.scene));
      item.addEventListener('focusin', () => show(item.dataset.scene));
    });
  }

  // Scroll-driven scenes retain native, readable layouts without motion support.
  if (gsap && window.ScrollTrigger) {
    let media;
    try {
      gsap.registerPlugin(window.ScrollTrigger);
      media = gsap.matchMedia();
      media.add({
        roomy: '(min-height: 600px)',
        compact: '(max-width: 992px)',
        small: '(max-width: 350px)',
        reduce: '(prefers-reduced-motion: reduce)'
      }, context => {
        if (!context.conditions.roomy || context.conditions.reduce) return;
        const artists = document.querySelector('.ind_A');
        if (!artists) return;
        const stage = artists.querySelector('.stage');
        const cards = [...artists.querySelectorAll('.item')];
        const choices = [...artists.querySelectorAll('.pick button')];
        const foot = artists.querySelector('.foot');
        const colors = cards.map(card => card.querySelector('.color'));
        const compact = context.conditions.compact;
        const first = -2.2;
        const last = cards.length - 1 - first;
        const position = { value: first };
        const colored = cards.map(() => false);
        const fades = [];
        // Samples along one entrance / lift / exit path, with alternating turns.
        // The cards share the route, starting one card interval apart.
        const heights = [
          [0, .20, .30, .27, .11, -.08, -.06, .03, .12],
          [0, .19, .35, .33, .14, -.08, -.05, .08, .17],
          [0, .16, .32, .29, .10, -.11, .02, .18, .34],
          [0, .15, .29, .30, .10, -.08, .02, .15, .26],
          [0, .18, .33, .35, .12, -.08, .01, .18, .30]
        ];
        const turns = [
          [12, 9, -3, -3, 18, 39, 24, -8, -40],
          [-24, -7, 8, 4, -17, -37, -19, 6, 25],
          [14, 5, -3, 7, 24, 38, 0, -38, -60],
          [-16, -2, 9, -8, -26, -34, -12, 10, 30],
          [15, -2, -12, 8, 29, 38, 0, -25, -45]
        ];
        let current = -1;
        let jump;
        artists.classList.add('play');

        function sample(points, value) {
          const at = gsap.utils.clamp(0, points.length - 1, value);
          const index = Math.min(Math.floor(at), points.length - 2);
          const t = at - index;
          const a = points[Math.max(0, index - 1)];
          const b = points[index];
          const c = points[index + 1];
          const d = points[Math.min(points.length - 1, index + 2)];
          return .5 * ((2 * b) + (-a + c) * t + (2 * a - 5 * b + 4 * c - d) * t * t + (-a + 3 * b - 3 * c + d) * t * t * t);
        }
        function color(index, show) {
          if (colored[index] === show) return;
          colored[index] = show;
          fades[index]?.kill();
          // This plays on its own clock after arrival; stopping the wheel cannot stop it.
          fades[index] = gsap.to(colors[index], {
            clipPath: show ? 'inset(0% 0% 0% 0%)' : 'inset(100% 0% 0% 0%)',
            duration: show ? .85 : .35,
            ease: 'power1.inOut',
            overwrite: true
          });
        }
        const setters = cards.map(card => ({
          x: gsap.quickSetter(card, 'x', 'px'),
          y: gsap.quickSetter(card, 'y', 'px'),
          rotation: gsap.quickSetter(card, 'rotation', 'deg')
        }));
        // The reference keeps a generous travel interval as the cards get smaller.
        // Compressing this distance on phones exposes multiple cards at once.
        const spacing = () => compact ? 608 : cards[0].offsetWidth * 1.85;
        gsap.set(cards, { xPercent: -50, yPercent: -50 });
        gsap.set(colors, { clipPath: 'inset(100% 0% 0% 0%)' });
        function render() {
          const gap = spacing();
          const height = cards[0].offsetHeight;
          const room = foot.offsetTop - cards[0].offsetTop - height * .52 - 12;
          const scale = Math.min(height, Math.max(0, room / .4));
          cards.forEach((card, index) => {
            const distance = index - position.value;
            const at = (2.2 - distance) / .55;
            setters[index].x(gsap.utils.clamp(-2.2, 2.2, distance) * gap);
            setters[index].y(sample(heights[index % heights.length], at) * scale);
            const rotation = sample(turns[index % turns.length], at);
            setters[index].rotation(context.conditions.small ? rotation * .85 : rotation);
            if (distance <= .28) color(index, true);
            else if (distance > .65) color(index, false);
          });
          const active = gsap.utils.clamp(0, cards.length - 1, Math.floor(position.value + .28));
          if (active !== current) {
            current = active;
            choices.forEach((button, index) => button.setAttribute('aria-pressed', String(index === current)));
          }
        }
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: stage,
            start: 'top top',
            end: () => `+=${Math.round(spacing() * (last - first) / (compact ? 2.1 : 1.45))}`,
            pin: true,
            scrub: .45,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onRefresh: render
          }
        });
        timeline.to(position, { value: last, duration: last - first, ease: 'none', onUpdate: render });
        render();

        function select(index) {
          jump?.kill();
          const trigger = timeline.scrollTrigger;
          const progress = (index + (compact ? 0 : .12) - first) / (last - first);
          const scroll = { y: window.scrollY };
          jump = gsap.to(scroll, {
            y: trigger.start + (trigger.end - trigger.start) * progress,
            duration: .7,
            ease: 'power2.inOut',
            onUpdate: () => window.scrollTo({ top: scroll.y, behavior: 'instant' })
          });
        }
        const handlers = choices.map((button, index) => {
          const handler = () => select(index);
          button.addEventListener('click', handler);
          return handler;
        });
        const focus = event => {
          const index = cards.findIndex(card => card.contains(event.target));
          if (index >= 0 && index !== current) select(index);
        };
        const cancel = () => jump?.kill();
        stage.addEventListener('focusin', focus);
        window.addEventListener('wheel', cancel, { passive: true });
        window.addEventListener('touchstart', cancel, { passive: true });
        return () => {
          jump?.kill();
          fades.forEach(fade => fade?.kill());
          stage.removeEventListener('focusin', focus);
          window.removeEventListener('wheel', cancel);
          window.removeEventListener('touchstart', cancel);
          choices.forEach((button, index) => button.removeEventListener('click', handlers[index]));
          artists.classList.remove('play');
          colors.forEach(image => image.style.removeProperty('clip-path'));
          choices.forEach((button, index) => button.setAttribute('aria-pressed', String(index === 0)));
        };
      });
      media.add({
        all: '(min-width: 0px)',
        compact: '(max-width: 992px)',
        reduce: '(prefers-reduced-motion: reduce)'
      }, context => {
        if (context.conditions.reduce) return;
        const stage = document.querySelector('.ind_B .stage');
        if (!stage) return;
        // Crop only the photo and its gradient; captions, links and controls stay put.
        gsap.fromTo(stage.querySelectorAll('.pic'),
          { clipPath: context.conditions.compact ? 'inset(3% 6% 3% 6%)' : 'inset(6% 12% 6% 12%)' },
          { clipPath: 'inset(0% 0% 0% 0%)', ease: 'none',
            scrollTrigger: {
              trigger: stage,
              start: 'top 90%',
              end: 'top 45%',
              scrub: .55,
              invalidateOnRefresh: true
            }
          });
      });
      media.add({
        all: '(min-width: 0px)',
        compact: '(max-width: 992px)',
        reduce: '(prefers-reduced-motion: reduce)'
      }, context => {
        if (context.conditions.reduce || !itinerarySlider || !itineraries || itineraryEntrancePlayed) return;
        const timeline = gsap.timeline({
          onStart: () => { itineraryEntrancePlayed = true; },
          scrollTrigger: { trigger: itineraries, start: 'top 85%', once: true }
        });
        timeline.fromTo(itineraries,
          { opacity: 0 },
          { opacity: 1, duration: .7, ease: 'power1.out', clearProps: 'opacity' });
        // Navigation immediately settles the entrance so the carousel stays responsive.
        const settle = () => {
          itineraryEntrancePlayed = true;
          timeline.scrollTrigger?.kill();
          timeline.progress(1).kill();
          gsap.set(itineraries, { clearProps: 'opacity' });
        };
        updateItineraryEntrance = () => { if (timeline.isActive()) settle(); };
        const controls = itineraries.closest('.ind_C').querySelector('.arrows');
        itineraries.addEventListener('pointerdown', settle);
        itineraries.addEventListener('focusin', settle);
        controls.addEventListener('pointerdown', settle);
        controls.addEventListener('focusin', settle);
        return () => {
          updateItineraryEntrance = () => {};
          itineraries.removeEventListener('pointerdown', settle);
          itineraries.removeEventListener('focusin', settle);
          controls.removeEventListener('pointerdown', settle);
          controls.removeEventListener('focusin', settle);
          gsap.set(itineraries, { clearProps: 'opacity' });
        };
      });
      media.add({
        desktop: '(min-width: 993px)',
        compact: '(max-width: 992px)',
        tall: '(min-height: 600px)',
        reduce: '(prefers-reduced-motion: reduce)'
      }, context => {
        if (context.conditions.reduce) return;
        const story = document.querySelector('.ind_D');
        if (!story) return;
        const stage = story.querySelector('.stage');
        const text = story.querySelector('.txt');
        const heading = text.querySelector('h2');
        const lines = [...heading.children];
        const desktop = context.conditions.desktop;
        const pinned = context.conditions.tall;
        story.classList.add('play');
        lockBrand(true);
        const maskWidth = () => Math.min(stage.clientWidth * (desktop ? .53 : .66), stage.clientHeight * .62 / .66);
        const maskHeight = () => maskWidth() * .66;
        // Zoom into the solid T stem in the SVG's 1000 x 660 viewBox.
        // Its x=662..838, y=168..660 area fills the frame without adding another shape.
        const scale = () => Math.max(stage.clientWidth / 176, stage.clientHeight / 464) * 1.08;
        const startSize = () => `${maskWidth()}px ${maskHeight()}px`;
        const startPosition = () => `${stage.clientWidth - maskWidth()}px ${desktop ? (stage.clientHeight - maskHeight()) / 2 : 28}px`;
        const endSize = () => `${1000 * scale()}px ${660 * scale()}px`;
        const endPosition = () => `${stage.clientWidth / 2 - 750 * scale()}px ${stage.clientHeight / 2 - 400 * scale()}px`;
        const timeline = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: stage,
            start: pinned ? () => `top ${Math.max(20, Math.round((innerHeight - stage.offsetHeight) / 2))}` : 'top 75%',
            end: pinned ? () => `+=${Math.round(innerHeight * (desktop ? 1.65 : 1.35))}` : 'bottom 25%',
            pin: pinned,
            scrub: .35,
            anticipatePin: pinned ? 1 : 0,
            invalidateOnRefresh: true
          }
        });
        timeline
          .fromTo(brand,
            { maskSize: startSize, webkitMaskSize: startSize,
              maskPosition: startPosition, webkitMaskPosition: startPosition, filter: 'brightness(1)' },
            { maskSize: endSize, webkitMaskSize: endSize,
              maskPosition: endPosition, webkitMaskPosition: endPosition, duration: .78, ease: 'power2.in' }, 0)
          .to(brand, { filter: 'brightness(.52)', duration: .3 }, .48)
          .fromTo(heading, { autoAlpha: 1 }, { autoAlpha: 0, duration: .16 }, .22)
          .to(heading, { autoAlpha: 1, duration: .18 }, .78)
          .fromTo(text, { color: '#111111' }, { color: '#ffffff', duration: .16 }, .72);
        if (desktop) {
          timeline.fromTo(heading,
            { height: () => lines[0].offsetHeight * 3 },
            { height: () => lines[0].offsetHeight, duration: .35 }, .4);
          lines.forEach((line, index) => {
            timeline.fromTo(line, { x: 0, y: 0 }, {
              x: () => lines.slice(0, index).reduce((sum, item) => sum + item.offsetWidth + 18, 0),
              y: () => -index * lines[0].offsetHeight,
              duration: .35
            }, .4);
          });
        }
        timeline.fromTo(text.querySelectorAll('.tw, .more'),
          { autoAlpha: 0, y: 18 },
          { autoAlpha: 1, y: 0, duration: .2, stagger: .06 }, .88);
        const revealEnd = timeline.duration();
        // Keep the existing expansion distance, followed by half a viewport of stillness.
        if (pinned) timeline.to({}, { duration: revealEnd * .5 / (desktop ? 1.15 : .85) });
        timeline.eventCallback('onUpdate', () => lockBrand(timeline.time() < revealEnd - .001));
        return () => {
          story.classList.remove('play');
          lockBrand(false);
        };
      });
      const refresh = () => window.ScrollTrigger.refresh();
      document.fonts?.ready.then(refresh);
      if (document.readyState === 'complete') refresh();
      else window.addEventListener('load', refresh, { once: true });
      window.addEventListener('pageshow', event => {
        if (event.persisted) refresh();
      });
    } catch (error) {
      media?.revert();
      console.warn('STarTown home animation unavailable:', error);
    }
  }
})();
