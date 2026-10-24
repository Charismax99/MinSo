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
    categoryTabList: "Product categories",
    emptyCategory: "No products are displayed here yet.",
    bagTitle: "Handbag",
    bagImageAlt: "Min-So black handbag",
    bagAvailableColor: "Available color",
    productTitle: "XL Pouch",
    productImageAlt: "Min-So XL pouches in black and white",
    productSize: "Size",
    productDimensions: "Dimensions",
    productCentimeters: "cm",
    productPrice: "Price",
    productCurrency: "EGP",
    productChooseColor: "Choose your color",
    productColorGroup: "Available colors",
    productBlack: "Black",
    productWhite: "White",
    productSelectColor: "Choose a color to order",
    productSelectedColor: "Selected color:",
    productOrder: "Order on WhatsApp",
    productViewImage: "View larger image",
    bags: "Bags",
    pouches: "Pouches",
    coasters: "Coasters",
    punchNeedle: "Cushions — Punch Needle",
    ramadanNights: "Ramadan Nights",
    moonStars: "Moon and Stars",
    crescentLantern: "Crescent and Lantern",
    ramadanNightsAlt: "White punch needle cushion with Ramadan Kareem lettering, lantern, crescent and star",
    moonStarsAlt: "White punch needle cushion with a white crescent and golden stars",
    crescentLanternAlt: "White punch needle cushion with a yellow crescent, orange lantern and Ramadan Kareem lettering",
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
    categoryTabList: "فئات المنتجات",
    emptyCategory: "لا توجد منتجات معروضة هنا حاليًا.",
    bagTitle: "شنطة يد",
    bagImageAlt: "شنطة يد سوداء من Min-So",
    bagAvailableColor: "اللون المتاح",
    productTitle: "باوتش XL",
    productImageAlt: "باوتشات Min-So بحجم XL باللونين الأسود والأبيض",
    productSize: "الحجم",
    productDimensions: "الأبعاد",
    productCentimeters: "سم",
    productPrice: "السعر",
    productCurrency: "جنيه مصري",
    productChooseColor: "اختاري اللون",
    productColorGroup: "الألوان المتاحة",
    productBlack: "أسود",
    productWhite: "أبيض",
    productSelectColor: "اختاري لونًا لإتمام الطلب",
    productSelectedColor: "اللون المختار:",
    productOrder: "اطلبي عبر واتساب",
    productViewImage: "افتحي الصورة بحجم أكبر",
    bags: "شنط",
    pouches: "باوتشات",
    coasters: "كوسترات",
    punchNeedle: "كوشنز — بانش نيدل",
    ramadanNights: "ليالي رمضان",
    moonStars: "قمر ونجوم",
    crescentLantern: "هلال وفانوس",
    ramadanNightsAlt: "كوشن بانش نيدل أبيض برسمة رمضان كريم وفانوس وهلال ونجمة",
    moonStarsAlt: "كوشن بانش نيدل أبيض بهلال أبيض ونجوم ذهبية",
    crescentLanternAlt: "كوشن بانش نيدل أبيض برسمة هلال أصفر وفانوس برتقالي وعبارة رمضان كريم",
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
const productTriggers = [...document.querySelectorAll("[data-product-trigger]")];
const productPanels = [...document.querySelectorAll("[data-product-panel]")];
productPanels.forEach((panel) => {
  const productCount = [...panel.children].filter((child) => child.classList.contains("product-feature")).length;
  panel.classList.toggle("has-multiple-products", productCount > 1);
});
const categoryTabList = document.querySelector("[data-category-tablist]");
const bagOrder = document.querySelector("[data-bag-order]");
const cushionOrders = [...document.querySelectorAll("[data-cushion-order]")];
const productColorGroup = document.querySelector("[data-product-color-group]");
const productColorOptions = [...document.querySelectorAll("[data-product-color]")];
const productSelection = document.querySelector("[data-product-selection]");
const productOrder = document.querySelector("[data-product-order]");
let selectedProductColor = null;
let currentLanguage = /^ar\b/i.test(navigator.language) ? "ar" : "en";
let toastTimer;

const galleryViewport = document.querySelector("[data-gallery-viewport]");
const galleryItems = [...document.querySelectorAll(".gallery-item")];
const galleryImages = [...document.querySelectorAll(".gallery-item img")];
const productImageButtons = [...document.querySelectorAll("[data-product-image]")];
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
let lightboxImages = galleryImages;
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
  lightbox.setAttribute("aria-label", lightboxImages === galleryImages ? copy.lightboxLabel : copy.productViewImage);
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
  categoryTabList.setAttribute("aria-label", translations[language].categoryTabList);
  productTriggers.forEach((trigger) => { trigger.disabled = false; });
  selectCategory(0, false);
  updateGalleryLabels();
  updateProductSelection();
  updateBagOrder();
  updateCushionOrders();
}

function updateProductSelection() {
  const copy = translations[currentLanguage];
  productColorGroup.setAttribute("aria-label", copy.productColorGroup);
  productColorOptions.forEach((option) => {
    option.setAttribute("aria-pressed", String(option.dataset.productColor === selectedProductColor));
  });

  if (!selectedProductColor) {
    productSelection.textContent = copy.productSelectColor;
    productOrder.removeAttribute("href");
    productOrder.setAttribute("aria-disabled", "true");
    productOrder.tabIndex = -1;
    return;
  }

  const colorName = copy[selectedProductColor === "black" ? "productBlack" : "productWhite"];
  productSelection.textContent = `${copy.productSelectedColor} ${colorName}`;
  const size = document.querySelector("[data-product-size-value]").textContent.trim();
  const dimensions = document.querySelector("[data-product-dimensions-value]").textContent.trim();
  const price = document.querySelector("[data-product-price-value]").textContent.trim();
  const message = currentLanguage === "ar"
    ? `مرحبًا Min-So، أريد طلب ${copy.productTitle} باللون ${colorName}. الحجم: ${size}، الأبعاد: ${dimensions} ${copy.productCentimeters}، السعر: ${price} ${copy.productCurrency}.`
    : `Hello Min-So, I'd like to order the ${copy.productTitle} in ${colorName}. Size: ${size}, dimensions: ${dimensions} ${copy.productCentimeters}, price: ${price} ${copy.productCurrency}.`;
  const orderUrl = new URL(WHATSAPP_URL);
  orderUrl.searchParams.set("text", message);
  productOrder.href = orderUrl.toString();
  productOrder.setAttribute("aria-disabled", "false");
  productOrder.tabIndex = 0;
}

function updateBagOrder() {
  const copy = translations[currentLanguage];
  const dimensions = document.querySelector("[data-bag-dimensions-value]").textContent.trim();
  const price = document.querySelector("[data-bag-price-value]").textContent.trim();
  const message = currentLanguage === "ar"
    ? `مرحبًا Min-So، أريد طلب ${copy.bagTitle} باللون ${copy.productBlack}. الأبعاد: ${dimensions} ${copy.productCentimeters}، السعر: ${price} ${copy.productCurrency}.`
    : `Hello Min-So, I'd like to order the ${copy.bagTitle} in ${copy.productBlack}. Dimensions: ${dimensions} ${copy.productCentimeters}, price: ${price} ${copy.productCurrency}.`;
  const orderUrl = new URL(WHATSAPP_URL);
  orderUrl.searchParams.set("text", message);
  bagOrder.href = orderUrl.toString();
}

function updateCushionOrders() {
  const copy = translations[currentLanguage];
  cushionOrders.forEach((order) => {
    const name = copy[order.dataset.cushionOrder];
    const message = currentLanguage === "ar"
      ? `مرحبًا Min-So، أريد طلب كوشن «${name}». السعر: 350 ${copy.productCurrency}.`
      : `Hello Min-So, I'd like to order the "${name}" cushion. Price: 350 ${copy.productCurrency}.`;
    const orderUrl = new URL(WHATSAPP_URL);
    orderUrl.searchParams.set("text", message);
    order.href = orderUrl.toString();
  });
}

function selectCategory(index, scrollToPanel) {
  let activePanel;
  productTriggers.forEach((trigger, triggerIndex) => {
    const selected = triggerIndex === index;
    trigger.setAttribute("aria-selected", String(selected));
    trigger.tabIndex = selected ? 0 : -1;
    const panel = document.getElementById(trigger.getAttribute("aria-controls"));
    panel.hidden = !selected;
    if (selected) activePanel = panel;
  });
  if (scrollToPanel && matchMedia("(max-width: 51.99rem)").matches) {
    activePanel.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start"
    });
  }
}

productTriggers.forEach((trigger, index) => {
  trigger.addEventListener("click", () => {
    if (!trigger.disabled) selectCategory(index, true);
  });
  trigger.addEventListener("keydown", (event) => {
    if (trigger.disabled) return;
    let nextIndex;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = productTriggers.length - 1;
    if (event.key === "ArrowLeft") nextIndex = (index + 1) % productTriggers.length;
    if (event.key === "ArrowRight") nextIndex = (index - 1 + productTriggers.length) % productTriggers.length;
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectCategory(nextIndex, false);
    productTriggers[nextIndex].focus();
  });
});

productColorOptions.forEach((option) => {
  option.addEventListener("click", () => {
    selectedProductColor = option.dataset.productColor;
    updateProductSelection();
  });
});

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
  lightboxIndex = (index + lightboxImages.length) % lightboxImages.length;
  if (animate) lightboxImage.classList.add("is-changing");
  lightboxImage.src = lightboxImages[lightboxIndex].currentSrc || lightboxImages[lightboxIndex].src;
  lightboxImage.alt = lightboxImages[lightboxIndex].alt;
  lightboxCounter.textContent = `${localizedNumber(lightboxIndex + 1)} / ${localizedNumber(lightboxImages.length)}`;
  requestAnimationFrame(() => lightboxImage.classList.remove("is-changing"));
}

function openLightbox(index, opener, images = galleryImages) {
  clearTimeout(lightboxCloseTimer);
  lightboxImages = images;
  lightbox.setAttribute("aria-label", images === galleryImages ? translations[currentLanguage].lightboxLabel : translations[currentLanguage].productViewImage);
  lightboxPrevious.hidden = images.length < 2;
  lightboxNext.hidden = images.length < 2;
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
productImageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttons = [...button.closest("[data-product-panel]").querySelectorAll("[data-product-image]")];
    openLightbox(buttons.indexOf(button), button, buttons.map((item) => item.querySelector("img")));
  });
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
    const focusable = [lightboxClose, lightboxPrevious, lightboxNext].filter((control) => !control.hidden);
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
