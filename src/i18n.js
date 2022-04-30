import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          homepage: {
            title: 'Dreams Will Come True',
            informationText:
              'If you have dreams, Bursapediary is a right place for you. Find the support you need for your dreams with Bursapediary. If you are a supporter, meet with the dreamers and help their dreams to come true.',
            actionButtonText: "Let's Get Started",
          },
          languages: {
            en: 'English',
            tr: 'Turkish',
          },
          navbar: {
            home: 'Home',
            projects: 'Projects',
            faq: 'FAQ',
            about: 'About',
            contact: 'Contact',
          },
          auth: {
            signup: 'Sign Up',
            signin: 'Sign In',
            signout: 'Sign Out',
          },
        },
      },
      tr: {
        translation: {
          homepage: {
            title: 'Hayaller Gerçek Olacak',
            informationText:
              'Hayalleriniz varsa, Bursapediary sizin için doğru yer. Bursapediary ile hayalleriniz için ihtiyacınız olan desteği bulun. Eğer bir destekçiyseniz, hayalperestlerle tanışın ve hayallerinin gerçekleşmesine yardımcı olun.',
            actionButtonText: 'Hadi Başlayalım',
          },
          languages: {
            en: 'İngilizce',
            tr: 'Türkçe',
          },
          navbar: {
            home: 'Anasayfa',
            projects: 'Projeler',
            faq: 'SSS',
            about: 'Hakkımızda',
            contact: 'İletişim',
          },
          auth: {
            signup: 'Kayıt Ol',
            signin: 'Giriş Yap',
            signout: 'Çıkış Yap',
          },
        },
      },
    },
  });

export default i18n;
