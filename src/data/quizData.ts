export interface QuizQuestion {
  id: string;
  question: string;
  caseScenario?: string;
  options: { id: string; text: string }[];
  correctOptionId: string;
  explanation: string;
  speakerReference: string;
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q-1',
    question: 'Ebu Hanife\'ye göre Ramazan ayında seferde olan (yolcu) bir kimse başka bir farz oruca niyet ederse durum nedir ve bunun fıkhi delili nedir?',
    options: [
      { id: 'a', text: 'Tutamaz; çünkü vakit mukim için olduğu gibi yolcu için de kesinkes taayyün etmiştir.' },
      { id: 'b', text: 'Tutabilir; çünkü o gün misafir için adeta Şaban ayı gibi serbest bir gün hükmündedir.' },
      { id: 'c', text: 'Sadece nafile tutabilir, farz oruç asla tutamaz.' },
      { id: 'd', text: 'Oruç tutarsa kefaret ödemesi gerekir.' }
    ],
    correctOptionId: 'b',
    explanation: 'Salih ve Hoca’nın diyaloğunda açıklandığı üzere, Ebu Hanife’ye göre Ramazan ayı yolcu için Şaban ayı gibi olur; dolayısıyla yolcu başka bir farz orucu tutabilir. İmameyn ise ruhsatın sadece "iftar" (oruç tutmama) hakkı verdiğini savunur.',
    speakerReference: 'Salih & Hoca (00:58)'
  },
  {
    id: 'q-2',
    question: 'İkrah (ölüm tehdidi) altında dille inkar etmeye zorlanan bir kimse, inkar etmeyip direnir ve öldürülürse fıkıh usulündeki hangi ilke sebebiyle "şehit" sayılır?',
    options: [
      { id: 'a', text: 'Mâ lâ yaqbelü’s-sukût olduğu için' },
      { id: 'b', text: 'Hasan li-ğayrihî olduğu için' },
      { id: 'c', text: 'Mâ yaqbelü’s-sukût aslen lâ vasfen olduğu için (hasenlik vasfı devam eder)' },
      { id: 'd', text: 'İbadetler mahlûkun bi-halkillâh olduğu için' }
    ],
    correctOptionId: 'c',
    explanation: 'Dille ikrardan mükellefiyet (asıl) düşmüştür; lakin ikrarın "hasenlik" (güzellik) vasfı düşmemiştir. Eğer vasfı da düşseydi direnmek meşru olmazdı. Hasen vasfı devam ettiği için direnip can veren kimse en yüksek mertebeye erişip şehit olur.',
    speakerReference: 'Hoca (35:40 - 38:50)'
  },
  {
    id: 'q-3',
    question: 'Oruç, Zekat ve Hac kendi özleri itibariyle bedene ve mala meşakkat (bir nevi kabih) oldukları halde, neden Hasan li-ğayrihî yerine Hasan li-aynihî’ye "mülhak" kılınmıştır?',
    options: [
      { id: 'a', text: 'Bu ibadetlerin vakitleri zarf olduğu için' },
      { id: 'b', text: 'Vasıtaları (qahru\'n-nefs, def-i hâcet, şerefu\'l-mekân) kulun ihtiyarından bağımsız "mahlûkun bi-halkillâh" olup yok hükmünde sayıldığı ve İslam\'ın 5 şartı bölünmesin istendiği için' },
      { id: 'c', text: 'Sadece niyet ile yerine getirilebildikleri için' },
      { id: 'd', text: 'Cihat amelinden daha üstün oldukları için' }
    ],
    correctOptionId: 'b',
    explanation: 'Hoca dersinde ulemanın bu inceliğini şöyle açıklar: Oruçta nefsin kırılması, zekatta fakirin doyması ve hacda Kâbe\'nin şerefi doğrudan Allah\'ın yaratmasıyladır (mahlûkun bi-halkillâh). Kul vasıtayı kendisi seçmediği için bu vasıtalar yok hükmündedir ve İslam\'ın 5 şartı tecezzi etmesin diye Hasan li-aynihî\'ye mülhak sayılmıştır.',
    speakerReference: 'Hoca (48:30)'
  },
  {
    id: 'q-4',
    question: 'Hasan li-ğayrihî bahsinde "Abdest" ile "Cihat" arasındaki temel fıkhi fark nedir?',
    options: [
      { id: 'a', text: 'Abdestte gaye (namaz) me\'murun bih ile yerine gelmez, namaz ayrıca kılınmalıdır (mâ lâ yeteaddâ); Cihatta ise amel yapılınca İ\'lâ-i Kelimetullāh gayesi hükmen yerine gelmiş sayılır (mâ yeteaddâ).' },
      { id: 'b', text: 'Abdest Hasan li-aynihî iken, Cihat Hasan li-ğayrihîdir.' },
      { id: 'c', text: 'Cihatta mükellefiyet düşmezken, abdestte düşer.' },
      { id: 'd', text: 'Abdest su israfı iken, cihat sadece savunma savaşıdır.' }
    ],
    correctOptionId: 'a',
    explanation: 'Hoca iki ok çekerek şunu vurgulamıştır: Abdest aldığında namaz yerine gelmez; namazı ayrıca kılman gerekir (mâ lâ yeteaddâ). Cihatta ise (tahrîbu\'l-bünyân olsa bile) cehd ortaya konduğu an, savaşta zahiren başarı olmasa bile İ\'lâ-i Kelimetullāh gayesi hükmen yerine gelmiş sayılır (mâ yeteaddâ).',
    speakerReference: 'Hoca (50:41 - 55:30)'
  },
  {
    id: 'q-5',
    question: 'Burak\'ın sorusu üzerine: "Kaza orucunun kazası olur mu?" sorusunun fıkıh usulündeki cevabı ve illeti nedir?',
    options: [
      { id: 'a', text: 'Olur; çünkü kaçırılan her ibadetin mutlaka kazası gerekir.' },
      { id: 'b', text: 'Olmaz; çünkü ömür sonuna kadar geniş vakti vardır, ölüm belirtileri başlamadıkça fevt olma (kaçma) ihtimali yoktur.' },
      { id: 'c', text: 'Sadece Ramazan ayından sonraki ilk ayda olursa kaza edilir.' },
      { id: 'd', text: 'Kefaret ödenirse kaza düşer.' }
    ],
    correctOptionId: 'b',
    explanation: 'Mukayyed emrin 3. kısmında Ramazan kazası ve mutlak adakta vaktin miyar olduğu fakat vücub sebebi olmadığı belirtilir. Vakit ömür boyunca geniş olduğu için, kişi hayatta kaldıkça kaçırma ihtimali yoktur; dolayısıyla kazanın kazası olmaz.',
    speakerReference: 'Burak & Hoca (09:40)'
  },
  {
    id: 'q-6',
    question: 'Yolcu Ramazan ayında nafile oruca niyet ederse, musannıf Ahısarî’ye göre en sahih ("asah") olan görüş kime aittir ve hükmü nedir?',
    options: [
      { id: 'a', text: 'Hasan bin Ziyad - Nafile olarak kalır.' },
      { id: 'b', text: 'İmameyn - Oruç geçersizdir.' },
      { id: 'c', text: 'Muhammed İbnü’s-Semmâî - Mükellefin dini menfaati daha üstün olduğu için Farz Ramazan orucuna intikal eder.' },
      { id: 'd', text: 'Züfer - Kaza orucuna dönüşür.' }
    ],
    correctOptionId: 'c',
    explanation: 'Musannıf (Ahısarî), İbnü’s-Semmâî’nin görüşünü "asah" kabul eder. Zira nafile yerine farzın düşürülmesi kulu borçtan kurtarır ve menfaat-i diniyyesine en muvafıktır.',
    speakerReference: 'Akif & Taha & Hoca (02:30 - 05:15)'
  }
];
