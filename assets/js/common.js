/**
   * Easy selector helper function
   */
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}

/**
 * Scrolls to an element with header offset
 */
const scrollto = (el) => {
  let header = select('#header')
  let offset = header.offsetHeight

  let elementPos = select(el).offsetTop
  window.scrollTo({
    top: elementPos - offset,
    behavior: 'smooth'
  })
}

/**
 * Scrool with ofset on links with a class name .scrollto
 */
on('click', '.scrollto', function (e) {
  if (select(this.hash)) {
    e.preventDefault()
    scrollto(this.hash)
  }
}, true)

/**
 * Scroll with ofset on page load with hash links in the url
 */
window.addEventListener('load', () => {
  if (window.location.hash) {
    if (select(window.location.hash)) {
      scrollto(window.location.hash)
    }
  }
});

/**
 * Back to top button
 */
let backtotop = select('.back-to-top')
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active')
    } else {
      backtotop.classList.remove('active')
    }
  }
  window.addEventListener('load', toggleBacktotop)
  onscroll(document, toggleBacktotop)
}

/**
 * Preloader
 */
let preloader = select('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove()
  });
}

/**
 * Animation on scroll
 */
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    mirror: false
    // once: true
  });
});