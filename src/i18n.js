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
