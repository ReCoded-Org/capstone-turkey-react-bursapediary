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
            copyRight: '?? 2021-2022 Copyright Bursapediary Inc.',
          },
          contactUs: {
            title: 'Get in Touch',
            subText: 'We???d love to hear from you. Let us know how we can help.',
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
              a2: 'On a charity or fundraise project donation page, donors can now opt to give anonymously without their details being visible to the charity or fundraiser (they???ll still be required to provide their details to Bursapediary), or they may choose to provide the charity with their details as before. If the donor has selected the anonymous option, the donation notifications and donor reports will display the donation as ???Anonymous???.',
              q3: 'Does Bursapediary provide any funds to charities or individuals?',
              a3: 'No. The Bursapediary Foundation does not offer any form of financial support, loans or grants to charities or individuals. Bursapediary provides a secure, online donation processing and fundraising service globally to charities and fundraisers who wish to fundraise for these charities.',
            },
            register: {
              title: 'Register',
              q1: 'How do I change my password if I forget it?',
              a1: 'When logging in, enter your email address and click on ???Forgot your password????, we???ll send you an email with a prompt to reset it. Not getting our emails? Check your junk or spam folders, as well as adding hello@bursapediary.com to your safe sender list, this should take care of the problem.',
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
            title: 'Hayaller Ger??ek Olacak',
            informationText:
              'Hayalleriniz varsa, Bursapediary sizin i??in do??ru yer. Bursapediary ile hayalleriniz i??in ihtiyac??n??z olan deste??i bulun. E??er bir destek??iyseniz, hayalperestlerle tan??????n ve hayallerinin ger??ekle??mesine yard??mc?? olun.',
            actionButtonText: 'Hadi Ba??layal??m',
            featuredProjects: '??ne ????kan Projeler',
            transationMainText:
              'Do??ru organizasyonla, ger??ek bir ihtiya?? sahibine yard??m edebilirsin',
            transationSubText:
              'Bursapediary, kar amac?? g??tmeyen kurulu??lara ve bireylere geli??mek i??in ihtiya?? duyduklar?? ara??lar??, e??itimi ve deste??i sa??larken, d??nyan??n herhangi bir yerindeki yerel projelere destek vermenizi kolay ve g??venli hale getirir.',
            sliderTitle: 'Kullan??c??lar??m??z Ne Diyor',
            donateNow: '??imdi Ba?????? Yap',
            reviews: {
              0: '"Fonlar 10 gen?? k??z i??in e??itim masraflar??n?? destekledi. Bursapediary sayesinde k??zlar hayallerinin pe??inden gittiler."',
              1: '"Dijital giri??imcili??im i??in yap??lan ba??????lar bir i??e ba??lamama yard??mc?? oldu. Te??ekk??rler Bursapediary!"',
              2: '"Orman yang??n?? i??in yap??lan ba??????lar orman?? daha az hasarla kurtarmam??za yard??mc?? oldu."',
            },
          },
          languages: {
            en: '??ngilizce',
            tr: 'T??rk??e',
          },
          navbar: {
            home: 'Anasayfa',
            projects: 'Projeler',
            faq: 'SSS',
            about: 'Hakk??m??zda',
            contact: '??leti??im',
            add: 'Proje Ekle',
          },
          auth: {
            signup: 'Kay??t Ol',
            signin: 'Giri?? Yap',
            signout: '????k???? Yap',
            createAccount: 'Hesap Olu??tur',
          },
          footer: {
            contactUs: {
              title: 'B??Z??MLE ??LET??????ME GE??',
              info: 'Bir proje y??r??t??yor ve finansman ar??yorsan??z, projenizi destekleyebiliriz. Yorumlar??n??z, sorular??n??z ve ??nerileriniz i??in te??ekk??r ederiz. L??tfen ileti??im sayfas??n?? kullan??n veya bize bir e-posta g??nderin.',
            },
            career: {
              title: 'KAR??YER',
              info: 'K??resel ??l??ekte ger??ek bir fark yaratmam??za yard??mc?? olun. Kendimizi herkesin ya??am kalitesini art??rmak i??in ba??????lar??n g??c??n?? a??????a ????karma amac??na adad??k. ??ster kariyerinize ba??l??yor ister devam ediyor olun, bizimle nas??l ??al????abilece??inizi ke??fedin.',
            },
            location: {
              title: 'KONUMLAR',
            },
            copyRight: '?? 2021-2022 Telif Hakk?? Bursapediary Inc. Aittir.',
          },
          contactUs: {
            title: 'Ba??lant??da Kalal??m',
            subText:
              'Sizden haber almaktan mutluluk duyar??z. Nas??l yard??m edebilece??imizi bizimle payla????n.',
            form: {
              name: '??sim',
              email: 'Mail',
              message: 'Mesaj',
              placeholderName: '??sminizi giriniz.',
              placeholderEmail: 'Mail adresinizi giriniz',
              placeholderMessage: 'Mesaj??n??z?? giriniz',
              successToastMsg: 'Mesaj??n??z ba??ar??l?? bir ??ekilde g??nderildi!',
              send: 'G??NDER',
              errorMessages: {
                required: '*Gerekli!',
                invalid:
                  '*Ge??ersiz mail adresi! L??tfen mail adresini ??u formatta gir: ismin@example.com',
              },
            },
            address: 'ADRES',
            call: 'B??Z?? ARA',
            openHours: 'A??IK SAATLER',
            period: 'Pazartesi - Cuma 10.00-20.00',
          },
          authPageSpan: {
            title1: 'Hayaller',
            title2: 'Ger??ek Olacak',
          },
          authForms: {
            usernameRequired: '*Kullan??c?? ismi gerekli',
            passwordRequired: '*??ifre gerekli',
            emailRequired: '*Mail gerekli',
            confirmPasswordReq: '*Do??rulama ??ifresi gerekli',
            emailInvalid: '*Mail ge??ersiz formatta',
            passwordMatch: '*??ifreler e??le??meli',
            username: 'Kullan??c?? ismi',
            password: '??ifre',
            email: 'Mail Adresi',
            confirmPassword: 'Onay ??ifresi',
            alreadyHave: 'Zaten bir hesab??n var m???',
          },
          faq: {
            title: 'S??k Sorulan Sorular',
            subText1:
              'Bursapediary ve platformun nas??l kullan??ld?????? hakk??ndaki',
            subText2: 's??k sorulan sorular?? bir araya getirdik',
          },
          accordions: {
            general: {
              title: 'Genel',
              q1: 'Bursapediary g??venilir mi?',
              a1: "Evet. Bursapediary, 2021'den beri hay??r kurumlar?? ve bireyler i??in ba?????? toplama deste??i sa??lam????t??r. Hizmetimizle ilgili deneyimleri i??in l??tfen ortak hay??r kurumlar?? veya bireylerden herhangi biriyle ileti??ime ge??mekten ??ekinmeyin. Bursapediary, t??m ba??????lar?? Bursapediary platformunda y??neterek ekstra bir g??venlik ve g??ven katman?? sa??lar.",
              q2: 'Anonim olarak ba?????? yapabilir miyim?',
              a2: "Bir hay??r kurumu veya ba?????? toplama projesi ba?????? sayfas??nda, ba??????????lar art??k ayr??nt??lar?? hay??r kurumu veya ba?????? toplay??c?? taraf??ndan g??r??lmeden anonim olarak ba??????ta bulunmay?? se??ebilir (ayr??nt??lar??n?? yine de Bursapediary'ye vermeleri gerekecektir) veya hay??r kurumuna ??u bilgileri sunmay?? se??ebilirler: onlar??n detaylar?? daha ??nce oldu??u gibi. Ba?????????? anonim se??ene??ini se??tiyse, ba?????? bildirimleri ve ba?????? raporlar??, ba???????? ???Anonim??? olarak g??sterecektir.",
              q3: 'Bursapediary hay??r kurumlar??na veya bireylere herhangi bir fon sa??l??yor mu?',
              a3: 'Hay??r. Bursapediary Vakf??, hay??r kurumlar??na veya bireylere hi??bir ??ekilde mali destek, kredi veya hibe sunmamaktad??r. Bursapediary, bu hay??r kurumlar?? i??in ba?????? toplamak isteyen hay??r kurumlar??na ve ba?????? toplay??c??lara d??nya ??ap??nda g??venli, ??evrimi??i ba?????? i??leme ve ba?????? toplama hizmeti sunmaktad??r.',
            },
            register: {
              title: 'Kay??t',
              q1: '??ifremi unuttum, nas??l yenileyebilirim?',
              a1: "Giri?? yaparken, e-posta adresinizi girin ve '??ifrenizi mi unuttunuz?' se??ene??ini t??klay??n, size s??f??rlaman??z i??in bir e-posta g??nderece??iz. E-postalar??m??z?? alm??yor musunuz? ??nemsiz veya spam klas??rlerinizi kontrol edin ve hello@bursapediary.com'u g??venli g??nderenler listenize ekleyin, bu sorunu ????zecektir.",
            },
            technical: {
              title: 'Teknik',
              q1: 'Ba??????lar, hay??r kurumlar??na veya bireylere nas??l aktar??l??r?              ',
              a1: 'Hay??r kurumunuz T??rkiye merkezliyse, para g??ndermek i??in yapman??z gereken bir ??ey yok, ba??????lar?? otomatik olarak haftal??k olarak se??ilen hay??r kurumuna aktar??yoruz. T??rkiye d??????ndaki bir hay??r kurumuna ba??????ta bulunduysan??z, ba??????lar bulunduklar?? yere g??re iki haftada bir, ayda bir veya ???? ayda bir g??nderilir.',
            },
          },
          aboutUs: {
            title1: 'Hakk??m??zda',
            info1:
              'Ba??kalar?? onlar?? desteklerken, insanlar??n hayallerine ula??malar??na yard??mc?? olmay?? ama?? edinen bir ekibiz.',
            title2: 'Hikayemiz',
            info2:
              'Re:Coded taraf??ndan organize edilen React Web Geli??tirme E??itim Kamp??nda, insanlar??n ya??amlar??nda etki yaratacak ??ekilde anlaml?? bir ??ey in??a etmeye karar verdik.',
            title3: 'Tak??m??m??z',
            info3: 'Fikrin arkas??ndaki tak??m ile tan????.',
          },
          projects: {
            title: 'Destekleyece??in bir hay??r kurumu veya bir proje bul',
          },
        },
      },
    },
  });

export default i18n;
