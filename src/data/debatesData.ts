export interface FiqhDebate {
  id: string;
  topic: string;
  arabicTitle: string;
  question: string;
  context: string;
  opinions: {
    scholar: string;
    view: string;
    dalil: string;
    status?: 'asah' | 'mufta_bih' | 'kaviy';
  }[];
  verdict: string;
  usulPrinciple: string;
}

export const FIQH_DEBATES: FiqhDebate[] = [
  {
    id: 'yolcu-baska-farz',
    topic: 'Yolcunun Ramazan\'da Başka Farz Oruç Tutması',
    arabicTitle: 'صوم المسافر فرضاً آخر في رمضان',
    question: 'Ramazan ayında seferde olan bir kimse, Ramazan orucu yerine başka bir farz (mesela kaza veya kefaret) orucuna niyet ederse ne olur?',
    context: 'Ramazan ayı mukim için taayyün etmiş bir miyardır. Lakin sefer hali oruç tutmama ruhsatı doğurur. Bu ruhsat vaktin vasfını nasıl etkiler?',
    opinions: [
      {
        scholar: 'İmam-ı Âzam Ebu Hanife',
        view: 'Başka farz orucu tutabilir ve niyet ettiği o farz geçerli olur.',
        dalil: 'Ramazan ayı misafir (yolcu) için adeta Şaban ayı gibi serbest bir vakit hükmünü alır. Çünkü vakit onun hakkında tayin etmemiştir.',
        status: 'kaviy'
      },
      {
        scholar: 'İmameyn (Ebu Yusuf & İmam Muhammed)',
        view: 'Başka farz tutamaz; tutsa bile niyet Ramazan orucuna intikal eder.',
        dalil: 'Şeriatın yolcuya verdiği ruhsat sadece "iftar" (oruç tutmama) ruhsatıdır; vaktin farziyetini başka bir amele tahsis etme ruhsatı değildir.',
        status: 'mufta_bih'
      }
    ],
    verdict: 'Ebu Hanife vaktin taayyün etmeyişine (Şaban gibi oluşuna), İmameyn ise ruhsatın mahiyetine (yalnızca oruç tutmama ruhsatı oluşuna) dayanmıştır.',
    usulPrinciple: 'Ruhsatın mahiyeti: İftar ruhsatı vaktin tayin vasfını zail kılar mı yoksa sadece terk hakkı mı verir?'
  },
  {
    id: 'yolcu-nafile-oruc',
    topic: 'Yolcunun Ramazan\'da Nafile Oruç Tutması',
    arabicTitle: 'صوم المسافر نفلاً في رمضان',
    question: 'Yolcu Ramazan ayında nafile bir oruca niyet ederse, bu oruç neye sayılır?',
    context: 'Ebu Hanife\'ye göre nafilenin nereye gideceği hususunda iki büyük Hanefî imamı arasında ihtilaf vardır.',
    opinions: [
      {
        scholar: 'Muhammed İbnü’s-Semmâî',
        view: 'Farz Ramazan orucuna gider (Farza sayılır).',
        dalil: 'Mükellefin dini menfaatini gözetmek asıldır. Nafile yerine farzın ifa edilmiş sayılması kul için daha üstün ve sevaplıdır. Musannıf (Ahısarî) bu görüşü "Asah" (en sahih) kabul etmiştir.',
        status: 'asah'
      },
      {
        scholar: 'Hasan bin Ziyad el-Lü\'lüî',
        view: 'Nafile olarak geçerli olur, farza intikal etmez.',
        dalil: 'Yolcu için o vakit Şaban ayı gibi mutlak hale gelmiştir. Şaban ayında tutulan nafile nasıl nafile oluyorsa burada da niyetine göre nafile olarak tahakkuk eder.'
      }
    ],
    verdict: 'İbnü’s-Semmâî mükellefin dini menfaatini (farzın önceliğini) esas alırken; Hasan bin Ziyad vaktin serbestiyetini ve niyetin iradesini esas almıştır. Musannıfa göre en sahih olan Semmâî\'nin görüşüdür.',
    usulPrinciple: 'Dini menfaat (Menfaat-i diniyye) kaidesi gereği niyetin farza ıtlakı.'
  },
  {
    id: 'hasta-orucu',
    topic: 'Hastanın Orucu ve Vaktin Hükmü',
    arabicTitle: 'صوم المريض وحكم الوقت',
    question: 'Hasta kimse Ramazan\'da oruç tutmaya karar verdiğinde durumu ne olur?',
    context: 'Hastaya oruç tutmama ruhsatı verilmiştir. Hasta oruç tutarsa veya başka bir oruca niyet ederse fıkhi tahlili nedir?',
    opinions: [
      {
        scholar: 'Metnin / Musannıfın Görüşü (Hakikaten Acz)',
        view: 'Hasta oruç tutmaya karar verdiği an mukim gibi kabul edilir; zira fiilen acziyet kalmamıştır.',
        dalil: 'Ruhsat bedeni hakiki acziyete bağlıdır. Hasta oruç tutabildiğini gösterdiğinde hakiki acz kalkar ve mukim gibi doğrudan Ramazan farzını tutmuş olur.'
      },
      {
        scholar: 'Hidâye ve Meşayih-i Hanefiyye (Misafir Kıyası)',
        view: 'Hasta tıpkı bir misafir (yolcu) gibi kabul edilir.',
        dalil: 'Ruhsatın illeti hastalığın kendisi veya artma tehlikesidir (Hükmî hastalık). Fiilen tutsa da bu hükmi acziyeti devam ettirir; dolayısıyla misafirin hükümleri geçerlidir.'
      },
      {
        scholar: 'Üçüncü / Mütedil Görüş (Tefrik)',
        view: 'Orucun hastalığa zarar verip vermediğine bakılır.',
        dalil: 'Eğer oruç hastalığı artırıyorsa birinci görüş (mukimleşme) devreye girer; zarar vermiyorsa misafir muamelesi uygulanır.'
      }
    ],
    verdict: 'Hanefî usulünde hakiki acz ile hükmi acz (hastalığın artma endişesi) arasındaki ince tefrik burada billurlaşır.',
    usulPrinciple: 'Hakiki acz (العجز الحقيقي) vs Hükmi acz (العجز الحكمي).'
  },
  {
    id: 'mukayyed-emir-vakit',
    topic: 'Mukayyed Emrin Dört Vakit Hali',
    arabicTitle: 'أقسام الوقت في الأمر المقيد',
    question: 'Mukayyed emirde ibadet ile vakit arasındaki münasebet kaça ayrılır?',
    context: 'Derste Salih, Burak ve Yusuf ile müzakere edilen mukayyed vakit taksimatı.',
    opinions: [
      {
        scholar: '1. Kısım: Zarf',
        view: 'Vakit ibadetten geniştir. Aynı vakitte başka benzer ibadetler de yapılabilir.',
        dalil: 'Beş vakit namaz (Mesela 4 rekatlık öğle namazı için 3-4 saatlik vakit zarftır).'
      },
      {
        scholar: '2. Kısım: Miyar',
        view: 'Vakit ibadete tam denktir; aynı anda ikinci bir benzer ibadeti almaz.',
        dalil: 'Ramazan ayı orucu (Günün tamamı tek bir oruç ameline tahsis edilmiştir).'
      },
      {
        scholar: '3. Kısım: Miyar olup vücub sebebi ve eda şartı olmayan',
        view: 'Ramazan kazası ve mutlak adak. Hükmü: Mutlaka tayin ve geceden niyet gerekir.',
        dalil: 'Normal günlerde meşru olan nafiledir. Niyet mutlak bırakılırsa nafileye kayar. Ayrıca ömür boyu vakti olduğu için kaza orucunun kazası olmaz!'
      },
      {
        scholar: '4. Kısım: Müşkil (Müşekkek)',
        view: 'Bir yönüyle miyar, bir yönüyle zarf olan ibadet: Hac.',
        dalil: 'Miyar olması: Yılın sadece belirli hac aylarında yapılabilmesi. Zarf olması: Haccın rükünlerinin o ayların tamamını doldurmaması. Mutlak niyet farza gider; sözle nafileye niyet edilirse sarih söz galebe çalar.'
      }
    ],
    verdict: 'Vaktin ibadete nispeti, niyetin tayin şartını ve ibadetin sıhhatini doğrudan belirler.',
    usulPrinciple: 'Miyar (المعيار) ameli kuşatır ve teke hasreder; Zarf (الظرف) amele vüsat ve alternatif imkanı tanır.'
  }
];
