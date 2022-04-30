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
            featuredProjects: 'Featured Projects',
            transationMainText:
              'With the right organization, you can give a hand true needer',
            transationSubText:
              'Bursapediary makes it easy and safe for you to give support to local projects anywhere in the world, while providing nonprofits and individuals with the tools, training, and support they need to thrive.',
            sliderTitle: 'What Our Users Says',
            donateNow: 'Donate Now',
          },
          reviews: [
            {
              id: 0,
              review:
                '"The funds supported education costs for 10 young girl. Thanks to Bursapediary, girls followed their dreams"',
              clientName: 'Cristina Watts',
            },
            {
              id: 1,
              review:
                '"The donations for my digital entrepreneurship helped me start a business. Thanks Bursapediary!"',
              clientName: 'Ahmet Demir',
            },
            {
              id: 2,
              review:
                '"The donations for the forest fire helped us to recover the forest with less damage."',
              clientName: 'Josh Turner',
            },
          ],
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
            featuredProjects: 'Öne Çıkan Projeler',
            transationMainText:
              'Doğru organizasyonla, gerçek bir ihtiyaç sahibine yardım edebilirsin',
            transationSubText:
              'Bursapediary, kar amacı gütmeyen kuruluşlara ve bireylere gelişmek için ihtiyaç duydukları araçları, eğitimi ve desteği sağlarken, dünyanın herhangi bir yerindeki yerel projelere destek vermenizi kolay ve güvenli hale getirir.',
            sliderTitle: 'Kullanıcılarımız Ne Diyor',
            reviews: [
              {
                id: 0,
                review:
                  '"Fonlar 10 genç kız için eğitim masraflarını destekledi. Bursapediary sayesinde kızlar hayallerinin peşinden gittiler."',
                clientName: 'Cristina Watts',
              },
              {
                id: 1,
                review:
                  '"Dijital girişimciliğim için yapolan bağışlar bir işe başlamama yardımcı oldu. Teşekkürler Bursapediary!"',
                clientName: 'Ahmet Demir',
              },
              {
                id: 2,
                review:
                  '"Orman yangını için yapılan bağışlar ormanı daha az hasarla kurtarmamıza yardımcı oldu."',
                clientName: 'Josh Turner',
              },
            ],
            donateNow: 'Şimdi Bağış Yap',
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
