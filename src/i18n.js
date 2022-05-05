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
            add: 'Add Project',
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
          faq: {
            title: 'Frequently Asked Questions',
            subText1:
              'We have gathered the most common question we get regarding',
            subText2: "Bursapediary FAQ and it' s features.",
          },
          accordions: {
            general: {
              title: 'General',
              q1: 'Can I trust Bursapediary?',
              a1: 'Yes. Bursapediary has enabled fundraising support for charities and individuals since 2021. Please feel free to contact any of our partner charities or individuals for their experience of our service. Bursapediary provides an extra layer of security and trust by managing all donations on the Bursapediary platform.',
              q2: 'Can I make anonymous donations?',
              a2: 'On a charity or fundraise project donation page, donors can now opt to give anonymously without their details being visible to the charity or fundraiser (they’ll still be required to provide their details to Bursapediary), or they may choose to provide the charity with their details as before. If the donor has selected the anonymous option, the donation notifications and donor reports will display the donation as “Anonymous”.',
              q3: 'Does Bursapediary provide any funds to charities or individuals?',
              a3: 'No. The Bursapediary Foundation does not offer any form of financial support, loans or grants to charities or individuals. Bursapediary provides a secure, online donation processing and fundraising service globally to charities and fundraisers who wish to fundraise for these charities.',
            },
            register: {
              title: 'Register',
              q1: 'How do I change my password if I forget it?',
              a1: 'When logging in, enter your email address and click on ‘Forgot your password?’, we’ll send you an email with a prompt to reset it. Not getting our emails? Check your junk or spam folders, as well as adding hello@bursapediary.com to your safe sender list, this should take care of the problem.',
            },
            technical: {
              title: 'Technical',
              q1: 'How are donations transferred to the charity or individuals?',
              a1: 'If your charity is based in the Turkey, there is nothing you need to do to send funds over, we automatically transfer donations to the chosen charity on a weekly basis. If you donated money to a charity outside the Turkey, donations are sent bi-weekly, monthly or quarterly depending on where they are based on.',
            },
          },
          aboutUs: {
            title1: 'About Us',
            info1:
              ' We are a team of builders helping people reach their dreams while others support them.',
            title2: 'Our Story',
            info2:
              ' In the React Web Development Bootcamp offered by Re:Coded, we decided to build something meaninful in a way that it makes impact in lives of people.',
            title3: 'Our Team',
            info3: 'Meet the people behind the idea.',
          },
          projects: {
            title: ' Find a charity or project to support',
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
              1: '"Dijital girişimciliğim için yapılan bağışlar bir işe başlamama yardımcı oldu. Teşekkürler Bursapediary!"',
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
            add: 'Proje Ekle',
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
            username: 'Kullanıcı ismi',
            password: 'Şifre',
            email: 'Mail Adresi',
            confirmPassword: 'Onay Şifresi',
            alreadyHave: 'Zaten bir hesabın var mı?',
          },
          faq: {
            title: 'Sık Sorulan Sorular',
            subText1:
              'Bursapediary ve platformun nasıl kullanıldığı hakkındaki',
            subText2: 'sık sorulan soruları bir araya getirdik',
          },
          accordions: {
            general: {
              title: 'Genel',
              q1: 'Bursapediary güvenilir mi?',
              a1: "Evet. Bursapediary, 2021'den beri hayır kurumları ve bireyler için bağış toplama desteği sağlamıştır. Hizmetimizle ilgili deneyimleri için lütfen ortak hayır kurumları veya bireylerden herhangi biriyle iletişime geçmekten çekinmeyin. Bursapediary, tüm bağışları Bursapediary platformunda yöneterek ekstra bir güvenlik ve güven katmanı sağlar.",
              q2: 'Anonim olarak bağış yapabilir miyim?',
              a2: "Bir hayır kurumu veya bağış toplama projesi bağış sayfasında, bağışçılar artık ayrıntıları hayır kurumu veya bağış toplayıcı tarafından görülmeden anonim olarak bağışta bulunmayı seçebilir (ayrıntılarını yine de Bursapediary'ye vermeleri gerekecektir) veya hayır kurumuna şu bilgileri sunmayı seçebilirler: onların detayları daha önce olduğu gibi. Bağışçı anonim seçeneğini seçtiyse, bağış bildirimleri ve bağış raporları, bağışı “Anonim” olarak gösterecektir.",
              q3: 'Bursapediary hayır kurumlarına veya bireylere herhangi bir fon sağlıyor mu?',
              a3: 'Hayır. Bursapediary Vakfı, hayır kurumlarına veya bireylere hiçbir şekilde mali destek, kredi veya hibe sunmamaktadır. Bursapediary, bu hayır kurumları için bağış toplamak isteyen hayır kurumlarına ve bağış toplayıcılara dünya çapında güvenli, çevrimiçi bağış işleme ve bağış toplama hizmeti sunmaktadır.',
            },
            register: {
              title: 'Kayıt',
              q1: 'Şifremi unuttum, nasıl yenileyebilirim?',
              a1: "Giriş yaparken, e-posta adresinizi girin ve 'Şifrenizi mi unuttunuz?' seçeneğini tıklayın, size sıfırlamanız için bir e-posta göndereceğiz. E-postalarımızı almıyor musunuz? Önemsiz veya spam klasörlerinizi kontrol edin ve hello@bursapediary.com'u güvenli gönderenler listenize ekleyin, bu sorunu çözecektir.",
            },
            technical: {
              title: 'Teknik',
              q1: 'Bağışlar, hayır kurumlarına veya bireylere nasıl aktarılır?              ',
              a1: 'Hayır kurumunuz Türkiye merkezliyse, para göndermek için yapmanız gereken bir şey yok, bağışları otomatik olarak haftalık olarak seçilen hayır kurumuna aktarıyoruz. Türkiye dışındaki bir hayır kurumuna bağışta bulunduysanız, bağışlar bulundukları yere göre iki haftada bir, ayda bir veya üç ayda bir gönderilir.',
            },
          },
          aboutUs: {
            title1: 'Hakkımızda',
            info1:
              'Başkaları onları desteklerken, insanların hayallerine ulaşmalarına yardımcı olmayı amaç edinen bir ekibiz.',
            title2: 'Hikayemiz',
            info2:
              'Re:Coded tarafından organize edilen React Web Geliştirme Eğitim Kampında, insanların yaşamlarında etki yaratacak şekilde anlamlı bir şey inşa etmeye karar verdik.',
            title3: 'Takımımız',
            info3: 'Fikrin arkasındaki takım ile tanış.',
          },
          projects: {
            title: 'Destekleyeceğin bir hayır kurumu veya bir proje bul',
          },
        },
      },
    },
  });

export default i18n;
