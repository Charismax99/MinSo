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
    footerLove: "Handmade with love",
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
    footerLove: "هاند ميد بحب",
    whatsappToast: "راسلينا في أي وقت 🤍"
  }
};

const languageButton = document.querySelector(".language-toggle");
const languageLabel = document.querySelector("[data-language-label]");
const whatsappLink = document.querySelector("[data-whatsapp-link]");
const toast = document.querySelector("[data-toast]");
let currentLanguage = /^ar\b/i.test(navigator.language) ? "ar" : "en";
let toastTimer;

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
}

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

languageButton.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "ar" : "en"));

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
setLanguage(currentLanguage);
