"use strict";

document.documentElement.classList.add("js");

const WHATSAPP_URL = "https://wa.me/201032252236";

const translations = {
  en: {
    eyebrow: "MADE WITH HEART. MADE BY HAND.",
    heroTitle: "Handmade with love",
    heroCopy: "Handmade bags, pouches, punch needle pieces & more.",
    instagram: "Instagram",
    facebook: "Facebook",
    whatsapp: "Chat with us",
    whatsappNote: "Message us anytime",
    ourStory: "Our little story",
    aboutTitle: "Made by hand, kept close.",
    aboutBody: "Handmade pieces created with care, from the first stitch to the final touch.",
    madeForYou: "Made for you",
    categoriesTitle: "Find your favourite piece",
    bags: "Bags",
    pouches: "Pouches",
    coasters: "Coasters",
    punchNeedle: "Punch Needle",
    fromOurHands: "From our hands",
    galleryTitle: "A peek at what we make",
    galleryAltOne: "Min-So handmade canvas tote with a warm orange sun design",
    galleryAltTwo: "Min-So handmade canvas tote with a minimal relax design",
    galleryAltThree: "Min-So handmade canvas tote with a playful You decide design",
    galleryAltFour: "Min-So floral handmade tote bag styled outdoors",
    galleryAltFive: "Min-So black handmade tote with a colourful Good Things Take Time design",
    galleryAltSix: "Min-So black handmade tote with a playful bubble tea design",
    galleryPrevious: "Previous gallery image",
    galleryNext: "Next gallery image",
    galleryViewport: "Min-So gallery",
    galleryPagination: "Choose a gallery image",
    galleryOpen: "Open image",
    lightboxLabel: "Gallery image viewer",
    lightboxClose: "Close image viewer",
    lightboxPrevious: "Previous image",
    lightboxNext: "Next image",
    footerLove: "Handmade with love",
    footerPoweredBy: "Powered by:",
    whatsappToast: "Message us anytime 🤍"
  },
  ar: {
    eyebrow: "معمولة بحب.. وبإيدينا. 🤍",
    heroTitle: "هاند ميد بحب",
    heroCopy: "شنط، باوتشات، بانش نيدل وحاجات هاند ميد أكتر.",
    instagram: "إنستجرام",
    facebook: "فيسبوك",
    whatsapp: "كلمينا على واتساب",
    whatsappNote: "راسلينا في أي وقت",
    ourStory: "حكايتنا الصغيرة",
    aboutTitle: "معمولة بإيدينا... عشان تفضل قريبة",
    aboutBody: "قطع هاند ميد معمولة بحب واهتمام بكل تفصيلة، من أول غرزة لآخر لمسة.",
    madeForYou: "معمولالك",
    categoriesTitle: "اختاري القطعة اللي شبهك",
    bags: "شنط",
    pouches: "باوتشات",
    coasters: "كوسترات",
    punchNeedle: "بانش نيدل",
    fromOurHands: "من إيدينا",
    galleryTitle: "لمحة من شغلنا",
    galleryAltOne: "شنطة كانفاس هاند ميد من مين سو برسمة شمس برتقالية دافية",
    galleryAltTwo: "شنطة كانفاس هاند ميد من مين سو بتصميم ريلاكس بسيط",
    galleryAltThree: "شنطة كانفاس هاند ميد من مين سو بتصميم يو ديسايد لطيف",
    galleryAltFour: "شنطة مين سو هاند ميد بنقشة ورد ملونة في إطلالة خارجية",
    galleryAltFive: "شنطة مين سو هاند ميد سوداء بتصميم جود ثينجز تيك تايم الملون",
    galleryAltSix: "شنطة مين سو هاند ميد سوداء بتصميم بابل تي لطيف",
    galleryPrevious: "الصورة السابقة في المعرض",
    galleryNext: "الصورة التالية في المعرض",
    galleryViewport: "معرض صور مين سو",
    galleryPagination: "اختاري صورة من المعرض",
    galleryOpen: "افتحي الصورة",
    lightboxLabel: "عارض صور المعرض",
    lightboxClose: "إغلاق عارض الصور",
    lightboxPrevious: "الصورة السابقة",
    lightboxNext: "الصورة التالية",
    footerLove: "هاند ميد بحب",
    footerPoweredBy: "بدعم من:",
    whatsappToast: "راسلينا في أي وقت 🤍"
  }
};

const languageButton = document.querySelector(".language-toggle");
const languageLabel = document.querySelector("[data-language-label]");
const whatsappLink = document.querySelector("[data-whatsapp-link]");
const toast = document.querySelector("[data-toast]");
let currentLanguage = /^ar\b/i.test(navigator.language) ? "ar" : "en";
let toastTimer;

const galleryViewport = document.querySelector("[data-gallery-viewport]");
const galleryItems = [...document.querySelectorAll(".gallery-item")];
const galleryImages = [...document.querySelectorAll(".gallery-item img")];
const galleryOpenButtons = [...document.querySelectorAll("[data-gallery-index]")];
const galleryPrevious = document.querySelector("[data-gallery-previous]");
const galleryNext = document.querySelector("[data-gallery-next]");
const galleryPagination = document.querySelector("[data-gallery-pagination]");
const galleryDots = galleryItems.map((_, index) => {
  const dot = document.createElement("button");
  dot.className = "gallery-dot";
  dot.type = "button";
  dot.dataset.galleryDot = String(index);
  galleryPagination.append(dot);
  return dot;
});

const lightbox = document.querySelector("[data-lightbox]");
const lightboxStage = document.querySelector("[data-lightbox-stage]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCounter = document.querySelector("[data-lightbox-counter]");
const lightboxClose = document.querySelector("[data-lightbox-close]");
const lightboxPrevious = document.querySelector("[data-lightbox-previous]");
const lightboxNext = document.querySelector("[data-lightbox-next]");
let activeGalleryIndex = 0;
let lightboxIndex = 0;
let galleryScrollFrame;
let lightboxCloseTimer;
let lastFocusedElement;
let swipeStartX = 0;
let swipeStartY = 0;

function localizedNumber(value) {
  return currentLanguage === "ar"
    ? new Intl.NumberFormat("ar-EG", { useGrouping: false }).format(value)
    : String(value);
}

function updateGalleryLabels() {
  const copy = translations[currentLanguage];
  const total = localizedNumber(galleryItems.length);
  galleryPrevious.setAttribute("aria-label", copy.galleryPrevious);
  galleryNext.setAttribute("aria-label", copy.galleryNext);
  galleryViewport.setAttribute("aria-label", copy.galleryViewport);
  galleryPagination.setAttribute("aria-label", copy.galleryPagination);
  lightbox.setAttribute("aria-label", copy.lightboxLabel);
  lightboxClose.setAttribute("aria-label", copy.lightboxClose);
  lightboxPrevious.setAttribute("aria-label", copy.lightboxPrevious);
  lightboxNext.setAttribute("aria-label", copy.lightboxNext);
  galleryOpenButtons.forEach((button, index) => {
    button.setAttribute("aria-label", `${copy.galleryOpen} ${localizedNumber(index + 1)} / ${total}`);
  });
  galleryDots.forEach((dot, index) => {
    dot.setAttribute("aria-label", `${copy.galleryOpen} ${localizedNumber(index + 1)} / ${total}`);
  });
  updateLightbox(lightboxIndex, false);
}

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = translations[language][element.dataset.i18n];
  });
  document.querySelectorAll("[data-alt-i18n]").forEach((image) => {
    image.alt = translations[language][image.dataset.altI18n];
  });
  languageLabel.textContent = language === "ar" ? "الإنجليزية" : "Arabic";
  languageButton.setAttribute("aria-label", language === "ar" ? "Switch to English" : "Switch to Arabic");
  document.title = language === "ar" ? "Min-So | هاند ميد بحب" : "Min-So | Handmade with Love";
  updateGalleryLabels();
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

languageButton.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "ar" : "en"));

function setActiveGalleryItem(index) {
  activeGalleryIndex = (index + galleryItems.length) % galleryItems.length;
  galleryItems.forEach((item, itemIndex) => item.classList.toggle("is-active", itemIndex === activeGalleryIndex));
  galleryDots.forEach((dot, dotIndex) => {
    const isActive = dotIndex === activeGalleryIndex;
    dot.classList.toggle("is-active", isActive);
    dot.setAttribute("aria-current", isActive ? "true" : "false");
  });
}

function goToGalleryItem(index, behavior = "smooth") {
  const targetIndex = (index + galleryItems.length) % galleryItems.length;
  galleryViewport.scrollTo({ left: galleryItems[targetIndex].offsetLeft, behavior });
  setActiveGalleryItem(targetIndex);
}

galleryPrevious.addEventListener("click", () => goToGalleryItem(activeGalleryIndex - 1));
galleryNext.addEventListener("click", () => goToGalleryItem(activeGalleryIndex + 1));
galleryDots.forEach((dot, index) => dot.addEventListener("click", () => goToGalleryItem(index)));

galleryViewport.addEventListener("scroll", () => {
  cancelAnimationFrame(galleryScrollFrame);
  galleryScrollFrame = requestAnimationFrame(() => {
    const closestIndex = galleryItems.reduce((closest, item, index) => (
      Math.abs(item.offsetLeft - galleryViewport.scrollLeft) < Math.abs(galleryItems[closest].offsetLeft - galleryViewport.scrollLeft)
        ? index
        : closest
    ), 0);
    setActiveGalleryItem(closestIndex);
  });
}, { passive: true });

galleryViewport.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    goToGalleryItem(activeGalleryIndex - 1);
  }
  if (event.key === "ArrowRight") {
    event.preventDefault();
    goToGalleryItem(activeGalleryIndex + 1);
  }
});

function updateLightbox(index, animate = true) {
  lightboxIndex = (index + galleryImages.length) % galleryImages.length;
  if (animate) lightboxImage.classList.add("is-changing");
  lightboxImage.src = galleryImages[lightboxIndex].currentSrc || galleryImages[lightboxIndex].src;
  lightboxImage.alt = galleryImages[lightboxIndex].alt;
  lightboxCounter.textContent = `${localizedNumber(lightboxIndex + 1)} / ${localizedNumber(galleryImages.length)}`;
  requestAnimationFrame(() => lightboxImage.classList.remove("is-changing"));
}

function openLightbox(index, opener) {
  clearTimeout(lightboxCloseTimer);
  lastFocusedElement = opener;
  updateLightbox(index, false);
  lightbox.hidden = false;
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
  requestAnimationFrame(() => {
    lightbox.classList.add("is-open");
    lightboxClose.focus();
  });
}

function closeLightbox() {
  if (lightbox.hidden) return;
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
  lightboxCloseTimer = setTimeout(() => {
    lightbox.hidden = true;
    lastFocusedElement?.focus();
  }, 180);
}

galleryOpenButtons.forEach((button, index) => {
  button.addEventListener("click", () => openLightbox(index, button));
});

lightboxClose.addEventListener("click", closeLightbox);
lightboxPrevious.addEventListener("click", () => updateLightbox(lightboxIndex - 1));
lightboxNext.addEventListener("click", () => updateLightbox(lightboxIndex + 1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox || event.target === lightboxStage) closeLightbox();
});

lightbox.addEventListener("touchstart", (event) => {
  const touch = event.changedTouches[0];
  swipeStartX = touch.clientX;
  swipeStartY = touch.clientY;
}, { passive: true });

lightbox.addEventListener("touchend", (event) => {
  const touch = event.changedTouches[0];
  const distanceX = touch.clientX - swipeStartX;
  const distanceY = touch.clientY - swipeStartY;
  if (Math.abs(distanceX) > 48 && Math.abs(distanceX) > Math.abs(distanceY)) {
    updateLightbox(distanceX < 0 ? lightboxIndex + 1 : lightboxIndex - 1);
  }
}, { passive: true });

document.addEventListener("keydown", (event) => {
  if (lightbox.hidden) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") updateLightbox(lightboxIndex - 1);
  if (event.key === "ArrowRight") updateLightbox(lightboxIndex + 1);
  if (event.key === "Tab") {
    const focusable = [lightboxClose, lightboxPrevious, lightboxNext];
    const currentIndex = focusable.indexOf(document.activeElement);
    const nextIndex = event.shiftKey
      ? (currentIndex - 1 + focusable.length) % focusable.length
      : (currentIndex + 1) % focusable.length;
    event.preventDefault();
    focusable[nextIndex].focus();
  }
});

if (WHATSAPP_URL.startsWith("https://")) {
  whatsappLink.href = WHATSAPP_URL;
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener noreferrer";
} else {
  whatsappLink.addEventListener("click", (event) => {
    event.preventDefault();
    showToast(translations[currentLanguage].whatsappToast);
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
setActiveGalleryItem(0);
setLanguage(currentLanguage);
