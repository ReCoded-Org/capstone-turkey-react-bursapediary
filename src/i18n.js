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
            reviews: {
              0: '"The funds supported education costs for 10 young girl. Thanks to Bursapediary, girls followed their dreams"',
              1: '"The donations for my digital entrepreneurship helped me start a business. Thanks Bursapediary!"',
              2: '"The donations for the forest fire helped us to recover the forest with less damage."',
            },
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
            createAccount: 'Create Account',
          },
          footer: {
            contactUs: {
              title: 'CONTACT US',
              info: 'If you run a project and seek funding, we can currently support projects. We appreciate your comments, questions and  suggestions. Please use the contact page or send us an email.',
            },
            career: {
              title: 'CAREERS',
              info: 'Help us make a real difference on a global scale. We are dedicated to our purpose of unlocking the power of funds to enhance quality of life for everyone. Whether you are starting or continuing your career, explore how you can work with us.',
            },
            location: {
              title: 'LOCATIONS',
            },
            copyRight: '© 2021-2022 Copyright Bursapediary Inc.',
          },
          contactUs: {
            title: 'Get in Touch',
            subText: 'We’d love to hear from you. Let us know how we can help.',
            form: {
              name: 'Name',
              email: 'Email',
              message: 'Message',
              placeholderName: 'Enter your name',
              placeholderEmail: 'Enter your e-mail address',
              placeholderMessage: 'Enter your message',
              successToastMsg: 'Your messsage has been sent successfully!',
              send: 'SEND',
              errorMessages: {
                required: '*Required!',
                invalid:
                  '*Invalid email address! Please enter your email adress in format: yourname@example.com',
              },
            },
            address: 'ADDRESS',
            call: 'CALL US',
            openHours: 'OPEN HOURS',
            period: 'Monday - Friday 10am-8pm',
          },
          authPageSpan: {
            title1: 'Dreams Will',
            title2: 'Come True',
          },
          authForms: {
            usernameRequired: '*Username is required',
            passwordRequired: '*Password is required',
            emailRequired: '*Email is required',
            confirmPasswordReq: '*Confirm password is required',
            emailInvalid: '*Email is invalid',
            passwordMatch: '*Passwords must be same',
            username: 'Username',
            password: 'Password',
            email: 'Email',
            confirmPassword: 'Confirm Password',
            alreadyHave: ' Already have an account?',
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
            donateNow: 'Şimdi Bağış Yap',
            reviews: {
              0: '"Fonlar 10 genç kız için eğitim masraflarını destekledi. Bursapediary sayesinde kızlar hayallerinin peşinden gittiler."',
              1: '"Dijital girişimciliğim için yapolan bağışlar bir işe başlamama yardımcı oldu. Teşekkürler Bursapediary!"',
              2: '"Orman yangını için yapılan bağışlar ormanı daha az hasarla kurtarmamıza yardımcı oldu."',
            },
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
            createAccount: 'Hesap Oluştur',
          },
          footer: {
            contactUs: {
              title: 'BİZİMLE İLETİŞİME GEÇ',
              info: 'Bir proje yürütüyor ve finansman arıyorsanız, projenizi destekleyebiliriz. Yorumlarınız, sorularınız ve önerileriniz için teşekkür ederiz. Lütfen iletişim sayfasını kullanın veya bize bir e-posta gönderin.',
            },
            career: {
              title: 'KARİYER',
              info: 'Küresel ölçekte gerçek bir fark yaratmamıza yardımcı olun. Kendimizi herkesin yaşam kalitesini artırmak için bağışların gücünü açığa çıkarma amacına adadık. İster kariyerinize başlıyor ister devam ediyor olun, bizimle nasıl çalışabileceğinizi keşfedin.',
            },
            location: {
              title: 'KONUMLAR',
            },
            copyRight: '© 2021-2022 Telif Hakkı Bursapediary Inc. Aittir.',
          },
          contactUs: {
            title: 'Bağlantıda Kalalım',
            subText:
              'Sizden haber almaktan mutluluk duyarız. Nasıl yardım edebileceğimizi bizimle paylaşın.',
            form: {
              name: 'İsim',
              email: 'Mail',
              message: 'Mesaj',
              placeholderName: 'İsminizi giriniz.',
              placeholderEmail: 'Mail adresinizi giriniz',
              placeholderMessage: 'Mesajınızı giriniz',
              successToastMsg: 'Mesajınız başarılı bir şekilde gönderildi!',
              send: 'GÖNDER',
              errorMessages: {
                required: '*Gerekli!',
                invalid:
                  '*Geçersiz mail adresi! Lütfen mail adresini şu formatta gir: ismin@example.com',
              },
            },
            address: 'ADRES',
            call: 'BİZİ ARA',
            openHours: 'AÇIK SAATLER',
            period: 'Pazartesi - Cuma 10.00-20.00',
          },
          authPageSpan: {
            title1: 'Hayaller',
            title2: 'Gerçek Olacak',
          },
          authForms: {
            usernameRequired: '*Kullanıcı ismi gerekli',
            passwordRequired: '*Şifre gerekli',
            emailRequired: '*Mail gerekli',
            confirmPasswordReq: '*Doğrulama şifresi gerekli',
            emailInvalid: '*Mail geçersiz formatta',
            passwordMatch: '*Şifreler eşleşmeli',
            userName: 'Kullanıcı ismi',
            password: 'Şifre',
            email: 'Mail Adresi',
            confirmPassword: 'Onay Şifresi',
            alreadyHave: 'Zaten bir hesabın var mı?',
          },
        },
      },
    },
  });

export default i18n;
