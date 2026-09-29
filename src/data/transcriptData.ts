export interface Utterance {
  id: string;
  speaker: 'Hoca' | 'Salih' | 'Akif' | 'Yunus' | 'Muhammed' | 'Taha' | 'Furkan' | 'Sabri' | 'Burak' | 'Yusuf';
  timeStr: string;
  timeSec: number;
  section: 'giris' | 'ana_ders';
  text: string;
  arabicTerms?: { term: string; arabic: string; explanation: string }[];
  keyTopics?: string[];
}

export const TRANSCRIPT_SECTIONS = [
  { id: 'all', title: 'Tüm Ders', timeRange: '00:00 - 01:11:30' },
  { id: 'giris', title: '1. Giriş ve Önceki Dersin Tekrarı', timeRange: '00:00 - 15:20' },
  { id: 'ana_ders', title: '2. Ana Ders: Hüsn ve Kubuh Şeması', timeRange: '15:23 - 01:11:30' },
];

export const TRANSCRIPT_DATA: Utterance[] = [
  {
    id: 'u-1',
    speaker: 'Hoca',
    timeStr: '00:00',
    timeSec: 0,
    section: 'giris',
    text: "Evet, şöyle başlayalım. Salih, seninle başlayalım. Salih, bu vakit konusunu ömür, muayyen ve mutlak olmak üzere ikiye ayırdık. Mukayyedi de dört kısma ayırmıştık. Sen ilk iki kısımda yoktun, yazın işlediğimiz kısımlarda. Bunların devamı niteliğinde bir şey vardı. İkinci kısımda özellikle Ramazan orucu var. Ramazan orucu kısmında 'yolcu'yu konuştuk burada. Yolcu, Ramazan ayı içerisinde birinci sorumuz; yolcu başka bir farza niyet ederse, başka bir farz orucu yolcu tutabilir mi? Bu konuda Ebu Hanife'nin görüşü ne, İmameyn'in görüşü ne? Ebu Hanife ne diyor?",
    keyTopics: ['Vakit Taksimatı', 'Ramazan Orucu', 'Yolcunun Niyeti', 'Ebu Hanife vs İmameyn']
  },
  {
    id: 'u-2',
    speaker: 'Salih',
    timeStr: '00:58',
    timeSec: 58,
    section: 'giris',
    text: "Ebu Hanife başka bir oruç tutabilir diyor hocam. Çünkü o gün misafir için Şaban ayı gibi bir ay olur diyor. Vacip için Ebu Yusuf ve İmam Muhammed tutamaz diyor. Çünkü oradaki ruhsat sadece iftar ruhsatıdır. Yani oruç tutmama ruhsatıdır, başka bir oruç tutma ruhsatı değil.",
    arabicTerms: [
      { term: 'İftar', arabic: 'إفطار', explanation: 'Fıkıhta oruç açmak veya oruç tutmama ruhsatını kullanmak.' },
      { term: 'İmameyn', arabic: 'الإمامان', explanation: 'Hanefî mezhebinde Ebu Hanife\'nin iki seçkin talebesi: Ebu Yusuf ve İmam Muhammed.' }
    ],
    keyTopics: ['Misafir için Şaban hükmü', 'İftar ruhsatı']
  },
  {
    id: 'u-3',
    speaker: 'Hoca',
    timeStr: '01:45',
    timeSec: 105,
    section: 'giris',
    text: "Güzel. Yani 'iftar' kelimesi Türkçede çok gitmiyor da 'oruç tutmama' anlamına geliyor o. Oruç tutmama ruhsatı. Adam bu ruhsatla sadece oruç tutmayabilir. Dolayısıyla bu ruhsatı almadıysa geriye asıl kural/konu devreye giriyor. Evet, Akif sana da soralım. Nafileyi de sana soralım. Ebu Hanife, nafileyi yolcu tutabilir mi? Bu konuda iki görüş var. Sen bize birinci görüşü söyle, yani İbnü’s-Semmâî’nin görüşü.",
    keyTopics: ['İftar mefhumu', 'Yolcunun nafile orucu', 'İbnü’s-Semmâî']
  },
  {
    id: 'u-4',
    speaker: 'Akif',
    timeStr: '02:30',
    timeSec: 150,
    section: 'giris',
    text: "Hocam görüşlerin kime ait olduğunu tam bilmiyorum da... Şöyle diyordu; eğer kaza tuttuğunda dini menfaatini önde tutuyoruz, kaza tutması öncelikli olduğu için kazaya sayıyoruz. Ancak nafile olduğunda, bu adamın nafile tutması menfaat açısından daha iyi mi yoksa farz tutması mı daha iyi? Farz tutmasıdır diyoruz çünkü sevabı ve artısı var. Buna göre bir adam nafile tutarsa nereye gider bu görüşe göre? Farz Ramazan orucuna gider. Bu Muhammed İbnü’s-Semmâî’nin görüşü.",
    arabicTerms: [
      { term: 'İbnü’s-Semmâî', arabic: 'محمد بن السماعيل التميمي', explanation: 'İmam Muhammed’in seçkin Hanefî fakih talebelerinden biridir.' }
    ],
    keyTopics: ['Dini menfaat tercihi', 'Nafile niyetinin farza intikali']
  },
  {
    id: 'u-5',
    speaker: 'Hoca',
    timeStr: '03:40',
    timeSec: 220,
    section: 'giris',
    text: "Tamam güzel. Yunus, ikinci görüşü bize söyle. Hasan bin Ziyad’ın görüşü nedir?",
    keyTopics: ['Hasan bin Ziyad rivayeti']
  },
  {
    id: 'u-6',
    speaker: 'Yunus',
    timeStr: '03:52',
    timeSec: 232,
    section: 'giris',
    text: "Hasan bin Ziyad’a göre hocam, Ramazan orucunu... Onda da şey oluyor hocam, Şaban ayı hükmünde oluyor misafir için. Yani nafile vesaire tutabilir, tutarsa geçerli oluyor.",
    keyTopics: ['Nafile geçerlidir', 'Şaban ayı kıyası']
  },
  {
    id: 'u-7',
    speaker: 'Hoca',
    timeStr: '04:18',
    timeSec: 258,
    section: 'giris',
    text: "'Şaban ayı gibi oluyor' kısmı bunun delili. En kısa versiyonu o. Şaban ayında bir insan nafile de tutabilir, kaza da tutabilir, adak da tutabilir. Güzel. Muhammed, tekrar çalışabildin mi?",
    keyTopics: ['Şaban ayı delili']
  },
  {
    id: 'u-8',
    speaker: 'Muhammed',
    timeStr: '04:45',
    timeSec: 285,
    section: 'giris',
    text: "Hocam tekrarları yaptım ama bir dahaki sefere kura çeksek?",
    keyTopics: ['Ders içi diyalog']
  },
  {
    id: 'u-9',
    speaker: 'Hoca',
    timeStr: '04:55',
    timeSec: 295,
    section: 'giris',
    text: "Tamam olur, öyle yaparız. Taha, hangisi 'asah' (en sahih) görüş musannıfa (Ahısarî) göre?",
    arabicTerms: [
      { term: 'Asah', arabic: 'الأصح', explanation: 'Görüşler arasında delil veya mezhep usulü bakımından en sahih ve tercih edilen hüküm.' },
      { term: 'Musannıf', arabic: 'المصنف', explanation: 'Eseri telif eden yazar (Burada Menar şarihi/müellifi Ahısarî kastedilmektedir).' }
    ],
    keyTopics: ['Asah görüş', 'Musannıf tercihi']
  },
  {
    id: 'u-10',
    speaker: 'Taha',
    timeStr: '05:15',
    timeSec: 315,
    section: 'giris',
    text: "İbnü’s-Semmâî’nin görüşü asah diyor musannıf.",
    keyTopics: ['Musannıfın tercihi: İbnü’s-Semmâî']
  },
  {
    id: 'u-11',
    speaker: 'Hoca',
    timeStr: '05:25',
    timeSec: 325,
    section: 'giris',
    text: "Furkan, hastanın orucuyla ilgili kitabın metninde ne geçiyor?",
    keyTopics: ['Hastanın orucu', 'Hakikaten acz']
  },
  {
    id: 'u-12',
    speaker: 'Furkan',
    timeStr: '05:35',
    timeSec: 335,
    section: 'giris',
    text: "Kitabın metninde 'hakikaten acz' ile bağlantı kuruluyordu. Yani hasta zaten bedeni bir şeyden dolayı oruç tutamıyordu ancak hasta oruç tutmaya karar verdiği zaman o vakit 'mukim' oluyordu.",
    arabicTerms: [
      { term: 'Hakikaten Acz', arabic: 'العجز الحقيقي', explanation: 'Fiziki ve fiili olarak oruç tutmaya güç yetirememek.' },
      { term: 'Mukim', arabic: 'مقيم', explanation: 'Yolcu olmayan, kendi ikametgahında bulunan kişi.' }
    ],
    keyTopics: ['Hasta oruç tutmaya niyet ederse mukim sayılması']
  },
  {
    id: 'u-13',
    speaker: 'Hoca',
    timeStr: '06:10',
    timeSec: 370,
    section: 'giris',
    text: "Güzel, kitabın metninde geçen bu. Sabri, Hidâye’de ve meşayih-i Hanefiyye’nin çoğuna göre nasıl? Diğer kaynaklarda farklı bir kaza tutarsa olur diyenler var, nafile bile olur diyenler var. Bunun delili ne?",
    arabicTerms: [
      { term: 'Hidâye', arabic: 'الهداية في شرح بداية المبتدي', explanation: 'Burhaneddin el-Merğınânî\'nin meşhur Hanefî fıkıh klasiği.' },
      { term: 'Meşâyih-i Hanefiyye', arabic: 'مشايخ الحنفية', explanation: 'Hanefî mezhebi müteahhirîn ve muhakkik alimleri.' }
    ],
    keyTopics: ['Hidâye görüşü', 'Meşayih görüşleri']
  },
  {
    id: 'u-14',
    speaker: 'Sabri',
    timeStr: '06:45',
    timeSec: 405,
    section: 'giris',
    text: "Burada üç farklı görüş vardı. Birincisini Furkan söyledi. İkinci görüşe göre bu kişiyi misafir gibi kabul ediyoruz. Misafirin hükümleri neyse hastaya da onlar uygulanıyor. Ruhsatın verilme nedeni hastalığın artabileceği düşüncesi. Buna 'hükmi hastalık' diyebiliriz. Bir de üçüncüsü var, ikisinin ortasını buluyor. Oruç hastalığa zarar veriyor mu vermiyor mu ona bakıyoruz. Veriyorsa birinci görüşün hükmünü alıyor, vermiyorsa Sabri'nin (ikinci görüşün) hükmünü alıyor.",
    arabicTerms: [
      { term: 'Hükmî Hastalık', arabic: 'المرض الحكمي', explanation: 'Mevcut hastalığın artması veya iyileşmenin gecikmesi ihtimaline dayanan fıkhi kabul.' }
    ],
    keyTopics: ['Hastanın 3 farklı fıkhî durumu', 'Hükmi acz']
  },
  {
    id: 'u-15',
    speaker: 'Hoca',
    timeStr: '08:20',
    timeSec: 500,
    section: 'giris',
    text: "Burak, üçüncü kısım neydi? Mukayyed emrin üçüncü kısmı?",
    keyTopics: ['Mukayyed Emir 3. Kısım']
  },
  {
    id: 'u-16',
    speaker: 'Burak',
    timeStr: '08:30',
    timeSec: 510,
    section: 'giris',
    text: "Hocam vaktin 'miyâr' olması ama eda için şart olmaması, vücub için sebep olmaması. Örneği de Ramazan kazası ve mutlak adak. Hükmü ise tayin gerekir. Çünkü normal günlerde meşru olan oruç nafile oruçtur. Eğer mutlak bırakılırsa niyet nafileye gider. Kaza tutmak istiyorsa geceden niyet edilmesi gerekir.",
    arabicTerms: [
      { term: 'Miyâr', arabic: 'معيار', explanation: 'Vaktin, eda edilecek ibadetin miktarına tam denk gelmesi (örn. 1 günlük oruç için 1 gün).' },
      { term: 'Vücûb', arabic: 'وجوب', explanation: 'Bir amelin mükellef üzerine farz/vacip olması.' },
      { term: 'Tayin', arabic: 'تعيين', explanation: 'Niyette hangi ibadetin yapılacağını açıkça belirleme.' }
    ],
    keyTopics: ['Miyar kavramı', 'Ramazan kazası ve mutlak adak', 'Tayin şartı']
  },
  {
    id: 'u-17',
    speaker: 'Hoca',
    timeStr: '09:40',
    timeSec: 580,
    section: 'giris',
    text: "Peki kaza orucunun kazası olur mu?",
    keyTopics: ['Kaza orucunun kazası']
  },
  {
    id: 'u-18',
    speaker: 'Burak',
    timeStr: '09:45',
    timeSec: 585,
    section: 'giris',
    text: "Olmaz hocam. Ömür sonuna kadar vakti olduğu için ölüm hissi başlamadığı sürece vacip olmaz. Kaçma ihtimali de yoktur.",
    keyTopics: ['Geniş vakit (Ömür boyu)', 'Fevt olma ihtimali olmaması']
  },
  {
    id: 'u-19',
    speaker: 'Hoca',
    timeStr: '10:15',
    timeSec: 615,
    section: 'giris',
    text: "Devam edelim. Müşkil (Müşekkek) kısmı... Yusuf, bunun örneği ne?",
    arabicTerms: [
      { term: 'Müşkil / Müşekkek', arabic: 'المشكل / المشكك', explanation: 'Bir yönüyle miyara, diğer yönüyle zarfa benzeyen, hükmünde tezat unsurları barındıran vakit türü.' }
    ],
    keyTopics: ['Müşkil vakit', 'Hac örneği']
  },
  {
    id: 'u-20',
    speaker: 'Yusuf',
    timeStr: '10:30',
    timeSec: 630,
    section: 'giris',
    text: "Hac hocam. Çünkü hac bir yönüyle miyâr, bir yönüyle zarf. Miyâr olması sadece yılın belirli aylarında yapılabildiği için. Zarf olması ise haccın rükünlerinin o ayların tamamında yapılmadığı için. Hükmü ise; eğer kişi mutlak bir niyet ederse farz hacca gider. Ama sözle nafileye niyet ederse o zaman sözü, adamın çabası ve davranışlarına galip görüyoruz ve sözü kabul ediyoruz.",
    arabicTerms: [
      { term: 'Zarf', arabic: 'ظرف', explanation: 'Vaktin, eda edilecek ibadetten daha geniş olması (örn. 4 rekatlık namaz için 3 saatlik vakit).' }
    ],
    keyTopics: ['Hac vakti: Hem miyâr hem zarf', 'Mutlak niyet vs Sarih söz']
  },
  {
    id: 'u-21',
    speaker: 'Hoca',
    timeStr: '12:00',
    timeSec: 720,
    section: 'giris',
    text: "Güzel. Furkan, Hürmüz'de durumlar nasıl? Fas-İsrail yakınlaşması falan biliyorsun... (Siyasi şakalaşmalar). Neyse, tamam arkadaşlar toparlamışsınız. Biraz daha pişirmeniz lazım.",
    keyTopics: ['Ders arası geçiş']
  },
  {
    id: 'u-22',
    speaker: 'Hoca',
    timeStr: '15:23',
    timeSec: 923,
    section: 'ana_ders',
    text: "Değerli arkadaşlar başlıyorum. Yaslanın beni dinleyin. Bu konu zor bir konu, teker teker gideceğim. Anlamadığınız noktada beni durdurun. (Tahtaya şemayı çizmeye başlar).\n\nAllah Azze ve Celle bir şeyi emretti. Emir konumuz değil mi? Hüsn (حسن). Allah bir şeyi emrettiyse arkadaşlar, emrettiği şey güzel olmak zorunda. Yani Hasan (حسن) olmalı diyoruz. Niye? Allah Azze ve Celle Hakîm’dir. Hakîm olan bir zat Kabîh (قبيح) olan bir şeyi emretmez. O zaman bu bizi nereye çıkarıyor? Tam tersini de söylüyorum; Allah Azze ve Celle bir şeyi yasaklamışsa, yasakladığı şey Kabîh olmalı, kötü olmalı. Zira Hakîm olan bir zat Hasan olan bir şeyi yasaklamaz.",
    arabicTerms: [
      { term: 'Hüsn', arabic: 'حُسْن', explanation: 'Güzellik, iyilik, fıtrata ve akla uygun fayda.' },
      { term: 'Kabîh', arabic: 'قَبِيح', explanation: 'Çirkinlik, kötülük, fıtrata ve dine aykırı zarar.' },
      { term: 'Hakîm', arabic: 'حَكِيم', explanation: 'Hikmet sahibi; abes, çirkin ve gayesiz iş yapmayan zat (Cenâb-ı Hak).' }
    ],
    keyTopics: ['Hikmet-i İlâhiyye', 'Hasan ve Kabih Kaidesi', 'Emir-Hüsn münasebeti']
  },
  {
    id: 'u-23',
    speaker: 'Hoca',
    timeStr: '18:10',
    timeSec: 1090,
    section: 'ana_ders',
    text: "Şimdi arkadaşlar, bu şu anlama geliyor; şeriatta var olan hükümleri şu an düşünme sahasına çekip, münazara meclisine çekip, orada biz karşımızda bir grup var onlarla tartışıyoruz bu konuyu. Tartışmayabiliriz, şunu diyebiliriz: 'Ya biz Kur'an'a ve Sünnet'e iman ediyoruz, onlar bize ne derse onu yaparız.' Ama bakın bu bir bakış açısı fakat olayı düşünme sahasından çekmektir. Zira değerli arkadaşlar, ben inanç ve düşünceyi birbirinden ayırıyorum. Bir inanç var, bir de düşünce var. Bir İslam inancı var, bir de İslam düşüncesi var. İnanç dediğimiz şey tartışılamaz. Bir adam bir şeye inanıyorsa bitti, ben seninle tartışamam.\n\nAma bir de düşünce var. İslam düşüncesi dediğimiz zaman konuyu tartışmaya açıyorsunuz. Hatırlıyor musunuz size söylemiştim; esasen fıkıh usulü ve kelam ilmi dinin rasyonalize edilmesidir. Dinin akli olarak açıklanma girişimidir. Bu da onun bir parçası. Allah bir şeyi emrediyorsa o iyidir. Kötü olamaz asla.",
    keyTopics: ['İslam İnancı vs İslam Düşüncesi', 'Dinin Rasyonalizasyonu', 'Kelam ve Fıkıh Usulü Metodu']
  },
  {
    id: 'u-24',
    speaker: 'Hoca',
    timeStr: '22:00',
    timeSec: 1320,
    section: 'ana_ders',
    text: "Şimdi bu tablo ne yapıyor biliyor musunuz? Emredilen her şeye 'iyi' dememizi sağlıyor. Bir şey emredilmişse ya burada bir iyi var ya şurada bir iyi var ama iyi! Ben 'Hasan' kelimesini 'iyi', 'Kabih' kelimesini 'kötü' diye tercüme etme taraftarıyım. Güzel-çirkin yerine iyi-kötü daha iyi gidiyor anlam olarak.\n\nDeğerli arkadaşlar, burada başlıyoruz. Eğer bir şey Hasan ise... Dolayısıyla burada tamamız değil mi? Emredilen her şey iyidir! Şimdi ilk İslam’a girdiğimizde çocukken size neyi öğretirler? İslam’ın şartları. Kaç tane? Beş tane. Kelime-i şehadet getirmek, namaz kılmak, oruç tutmak, hacca gitmek, zekat vermek. Hemen onlar şurada... İyi dediğimiz kısım hemen şu tablonun burası İslam’ın şartlarını tekrar size döndürüyor. Niye oradan başlıyoruz? Çünkü bunlar İslam’ın en temel rükünleri. Bir şeye iyi diyeceksek günlük beş vakit kıldığımız namazı merkeze almamız lazım.",
    keyTopics: ['Hasan = İyi, Kabih = Kötü', 'İslam\'ın 5 Şartının Şemadaki Yeri']
  },
  {
    id: 'u-25',
    speaker: 'Hoca',
    timeStr: '25:15',
    timeSec: 1515,
    section: 'ana_ders',
    text: "İyi ve kötüyü kabaca tanımlayayım size: İyi şu demek; yararlı demek. İnsana bedeni olarak yarar sağlayan şey iyi. Kötü ne demek? Kötü, insana zararlı olan şey. İnsanın zararına, menfaatine olmayan her şeye kötü diyoruz. Çok kaba tanımı bu arkadaşlar.\n\nŞimdi burada anlatmaya başlıyorum. Hasan ikiye ayrılıyor. Hasan li-aynihî (حسن لعينه). 'Aynî' ne demek? Kendi özü iyi. Özü iyi. Buna Hasan li-zâtihî (حسن لذاته) de deniliyor. İkincisi Hasan li-ğayrihî (حسن لغيره). Hasan li-ğayrihî şu demek; kendisi kötü (Kabîh li-aynihî). Fakat iyiyye götürdüğü için, iyinin hatırına iyi kabul edilebilir mi? Edilebilir. Buna Hasan... bak Hasan, bu iyi, niye iyi? Li-ğayrihî. Kendisinden dolayı değil başkasından dolayı iyi. Başkası iyi olduğu için iyi. Başkasına aracılık yaptığı için iyi diyorum buna.",
    arabicTerms: [
      { term: 'Hasan li-aynihî', arabic: 'حسن لعينه', explanation: 'Bizzat kendi zatında ve özünde var olan iyilik ve faydadan dolayı meşru kılınan şey.' },
      { term: 'Hasan li-ğayrihî', arabic: 'حسن لغيره', explanation: 'Kendi özünde bir menfaat bulunmasa (hatta meşakkat/zarar olsa) dahi, ulaştırdığı gaye iyi olduğu için güzelleşen amel.' }
    ],
    keyTopics: ['İyi = Fayda, Kötü = Zarar', 'Hasan li-aynihî vs Hasan li-ğayrihî']
  },
  {
    id: 'u-26',
    speaker: 'Salih',
    timeStr: '28:40',
    timeSec: 1720,
    section: 'ana_ders',
    text: "Hocam ona Kabîh li-aynihî derseniz o zaman şöyle bir sonuç çıkmıyor mu? Yani bu iyinin içerisinde Kabîh olanlar da vardır?",
    keyTopics: ['İyinin içinde çirkin olma sorusu']
  },
  {
    id: 'u-27',
    speaker: 'Hoca',
    timeStr: '29:05',
    timeSec: 1745,
    section: 'ana_ders',
    text: "Evet vardır. Ama iyiyye götürdüğü için bunlar iyi kabul ediliyor şeriat tarafından. Şeriat, Kabîh li-aynihî kısmından dolayı emretmedi onu, iyiyye götürdüğü için emretti. O açı farklı yani.",
    keyTopics: ['Gaye-Vasıta münasebeti', 'Şeriatın emretme illeti']
  },
  {
    id: 'u-28',
    speaker: 'Akif',
    timeStr: '30:10',
    timeSec: 1810,
    section: 'ana_ders',
    text: "Hocam iyi ve kötü nakıs kavramlar mı? Yani iyi olmayan her şey kesinlikle kötü müdür yoksa bir nötr var mı?",
    keyTopics: ['Nötr alan (Mübah)', 'Aristo mantığı vs İslam düşüncesi']
  },
  {
    id: 'u-29',
    speaker: 'Hoca',
    timeStr: '30:35',
    timeSec: 1835,
    section: 'ana_ders',
    text: "Esasen her konuyu bağlamında özel konuşmamız lazım. Bağlamında konuştuğumuzda nakıs olur. Şeriatta nötr alan zaten var; 'mübah' diyoruz. Câhiz ve Nazzâm’ın görüşlerini hatırlayın, doğru ve yanlış olmayan bilgi vardır bizde. Aristo’da ise ya doğrudur ya yanlıştır, ortası yoktur.",
    arabicTerms: [
      { term: 'Mübah', arabic: 'مباح', explanation: 'Mükellefin yapıp yapmamakta serbest bırakıldığı, sevap veya günah terettüp etmeyen nötr alan.' }
    ],
    keyTopics: ['Mübah alanı', 'Câhiz ve Nazzâm atfı']
  },
  {
    id: 'u-30',
    speaker: 'Hoca',
    timeStr: '32:00',
    timeSec: 1920,
    section: 'ana_ders',
    text: "Devam ediyorum dikkat. Bir şey Hasen ise ya Li-ma'nen fî aynihî (لمعنى في عينه) olur. Şu 'mana' kelimeleri sizi aldatmasın; 'aynında var olan mana', burada bir özellik var demek. Özünde bir şey var ondan dolayı iyi. Bu ikiye ayrılıyor:\n\n1. Mâ lâ yaqbelü’s-sukût (ما لا يقبل السقوط): Düşmeyi hiç kabul etmeyen. Hiçbir koşulda düşmeyen. Şeriat bunu hiçbir koşulda düşürmüyor. Mesela at-tasdîqu bi’l-kalb (التصديق بالقلب). Kalp ile Allah Teâlâ’yı tasdik etmek. Bunun düştüğü bir özür, ruhsat durumu var mı? Yok.\n\n2. Mâ yaqbelü’s-sukût (ما يقبل السقوط): Düşebilen.",
    arabicTerms: [
      { term: 'Li-ma\'nen fî aynihî', arabic: 'لمعنى في عينه', explanation: 'Kendi zatında mündemiç bir vasıf ve mana sebebiyle.' },
      { term: 'Mâ lâ yaqbelü’s-sukût', arabic: 'ما لا يقبل السقوط', explanation: 'Mükellefiyetin hiçbir özür veya zaruret haliyle düşmediği amel.' },
      { term: 'At-Tasdîku bi’l-kalb', arabic: 'التصديق بالقلب', explanation: 'Kalbin imanı onaylaması; hiçbir ikrah veya hastalıkla asla sakıt olmaz.' }
    ],
    keyTopics: ['Li-ma\'nen fî aynihî', 'Kalp ile tasdik', 'Sukutu kabul etmeyenler']
  },
  {
    id: 'u-31',
    speaker: 'Hoca',
    timeStr: '35:40',
    timeSec: 2140,
    section: 'ana_ders',
    text: "Düşebilenler de ikiye ayrılıyor:\n\na) Mâ yaqbelü’s-sukût aslen lâ vasfen (ما يقبل السقوط أصلاً لا وصفاً): Aslen düşebiliyor fakat vasfen düşmüyor. Şu 'vasfen' kelimesiyle şeyi kastediyoruz; bunun vasfı ne? Şu an neyi konuşuyoruz? Hasan’ı konuşuyoruz. Vasfen dediğimiz 'hasenlik vasfı' düşmüyor demek. Bunun örneği de el-ikrâr (الإقرار). İkrar ne demek? Dille bir insanın iman ettiğini söylemesi. Kafasına silahı dayadılar Furkan’ın, dediler ki 'Allah’ı inkar et.' İnkar etmezsen seni öldürürüz dediler. Furkan burada diliyle Allah Teâlâ’yı inkar ederse bundan sorumlu değil. İman dairesinin dışına çıkmaz. Ama 'lâ vasfen' kısmı çok önemli. İkrar, Hasan olmaya devam ediyor ikrah (zorlama) halinde bile.",
    arabicTerms: [
      { term: 'Aslen lâ vasfen', arabic: 'أصلاً لا وصفاً', explanation: 'Zimmetten yükümlülük düşer ancak amelin özündeki güzellik/fazilet vasfı baki kalır.' },
      { term: 'El-İkrâr', arabic: 'الإقرار باللسان', explanation: 'İmanın dille ikrar edilmesi.' },
      { term: 'İkrah', arabic: 'إكراه', explanation: 'Ölüm veya ağır sakatlanma tehdidiyle zorlanma hali.' }
    ],
    keyTopics: ['Aslen lâ vasfen', 'İkrar örneği', 'İkrah altında imanın durumu']
  },
  {
    id: 'u-32',
    speaker: 'Hoca',
    timeStr: '38:50',
    timeSec: 2330,
    section: 'ana_ders',
    text: "Furkan kafasına silah dayandığında Allah’ı inkar etmedi. 'Etmiyorum' dedi, 'ne yaparsanız yapın sıkın kurşunu.' Sık dedi. Şimdi ya Furkan, ikrar düşmüş, ikrar diye bir hüküm senin için yok, sen niye ikrarda ısrar ediyorsun? İşte şu 'lâ vasfen' kısmı önemli. Eğer ikrardan hasenlik özelliği de düşseydi, Furkan’ın ısrar etme hakkı yoktu. İkrar hasenlik vasfını koruduğu için, Furkan ısrar edip ölürse ne oldu? Şehit oldu. Niye şehit oldu diyoruz ve övüyoruz? Çünkü ikrarda hasen özelliği devam ediyor. Düşseydi Furkan’a şunu diyecektik: 'Ya Furkan sen caiz olmayan bir şey yapıyorsun.'",
    keyTopics: ['Şehitlik mertebesinin fıkhî gerekçesi', 'Hasenlik vasfının bekası']
  },
  {
    id: 'u-33',
    speaker: 'Yunus',
    timeStr: '41:10',
    timeSec: 2470,
    section: 'ana_ders',
    text: "Hocam burada 'aslı' tam anlayamadım.",
    keyTopics: ['Asıl mefhumu sorusu']
  },
  {
    id: 'u-34',
    speaker: 'Hoca',
    timeStr: '41:25',
    timeSec: 2485,
    section: 'ana_ders',
    text: "Asıl kelimesi şu; ikrar konusu emri ile mükellef değil artık. Mükellefiyet düşüyor ama o mükellef olduğumuz şeyin güzel olma vasfı devam ediyor.\n\nGelelim diğer kısımlara. Sukutu kabul edenlerin ikincisi:\nb) Mâ yaqbelü’s-sukût aslen ve vasfen (ما يقبل السقوط أصلاً ووصفاً): Hem aslen düşüyor hem vasfen düşüyor. Yani yapamazsın artık, vasfen düşüyor ne demek? Artık o iyi değil. Burada da Hasanun li-ma’nen fî vasfihî (حسن لمعنى في وصفه) var. Örneği: Namāz (Salat). Namaz belirli özürlerden dolayı düşüyor. Mesela hayızlı kadın. Hayızlı kadın namaz kılabilir mi? Kılamaz. Kılarsa ne yapar? Kabîh yapar. Çünkü vasfı da düştü onun, artık namaz güzel değil senin için.",
    arabicTerms: [
      { term: 'Aslen ve vasfen', arabic: 'أصلاً ووصفاً', explanation: 'Hem mükellefiyet kalkar hem de amelin iyi olma vasfı düşer (yapılması günah/kabih olur).' },
      { term: 'Salat / Namaz', arabic: 'الصلاة', explanation: 'Tazimullah manasını barındıran temel ibadet.' }
    ],
    keyTopics: ['Aslen ve vasfen sukut', 'Namaz ve hayızlı kadın örneği']
  },
  {
    id: 'u-35',
    speaker: 'Hoca',
    timeStr: '44:00',
    timeSec: 2640,
    section: 'ana_ders',
    text: "Hala Hasan li-aynihî’yi konuşuyoruz dikkat edin. İbadetleri buna göre temellendiriyorlar. Namaz aslen ve vasfen düşebiliyor ama hala özü itibariyle güzeldir. Kitabın ifadesi namaz için diyor ki: 'Hasanun li-ma’nen fî vasfihî'. Bu ne kadar karmaşık bir ifade. Sanki namazın özü kötü de vasfı iyi gibi. Buradaki 'fî vasfihî', 'fî aynihî' demek. Yani kendi içinde var olan bir özellikten dolayı iyi. Nedir bu özellik? Ta’zîmullāh (تعظيم الله). Allah ile ilişkili olan her şey Hasan li-aynihî kabul ediliyor. Namaz Ta’zîmullah olduğu için iyidir.",
    arabicTerms: [
      { term: 'Ta’zîmullāh', arabic: 'تعظيم الله', explanation: 'Allah Teâlâ’yı yüceltme, O’na tazim ve hürmet gösterme.' }
    ],
    keyTopics: ['Ta’zîmullāh illeti', 'Hasanun li-ma’nen fî vasfihî ibaresinin tahlili']
  },
  {
    id: 'u-36',
    speaker: 'Hoca',
    timeStr: '46:40',
    timeSec: 2800,
    section: 'ana_ders',
    text: "Bu kısma geçtim: Mülhakun li-hasenin li-ma'nen fî vasfihî (ملحق لحسن لمعنى في وصفه). Yani namaza mülhak olanlar. Bak mülhak diyorum! Bu ne demek? Normalde şu üçü (Oruç, Zekat, Hac) burada olmamalı. Oruç, zekat ve hac normalde Kabîh li-aynihîdir. Önce burayı bir anlaşalım. Oruç niye Kabîh li-aynihî? Kendini aç bırakıyorsun ya, eziyet ediyorsun kendine. Ne dedik? İnsana zarar veren her şey Kabîh’tir. Zekat? Mal israfı. Malını bedavaya başkasına veriyorsun. Hac? Meşakkatlere katlanmak, kilometrelerce yol katetmek. Zararıma yani.",
    arabicTerms: [
      { term: 'Mülhak', arabic: 'مُلْحَق', explanation: 'Asıl yapısı itibariyle başka bir kategoriye benzese de hükmen bu kategoriye eklenen.' }
    ],
    keyTopics: ['Oruç, Zekat ve Hac neden özünde Kabîh li-aynihî sayılır?']
  },
  {
    id: 'u-37',
    speaker: 'Hoca',
    timeStr: '48:30',
    timeSec: 2910,
    section: 'ana_ders',
    text: "Peki hocam bunlar Kabîh li-aynihî ise burada ne işi var? Ulema diyor ki; oruç, hac ve zekatın iyi olmasının sebebi şunlar:\n• Oruç: Qahru’n-nefs (قهر النفس). Kötü emreden nefsi dizginlemek için iyidir.\n• Zekat: Def-i hāceti’l-fakīr (دفع حاجة الفقير). Fakirin ihtiyacını gidermekten dolayı iyidir.\n• Hac: Şerefu’l-mekân (شرف المكان). Kâbe’den dolayı iyidir.\n\nUlema bize diyor ki; bu üç vasıta sebebiyle iyi oldukları için, bu üçüne baktığımızda bunlar kulun ihtiyarının olmadığı şeyler. Yani mahlûqun bi-halkillāh (مخلوق بخلق الله). Bunlar Allah Teâlâ’nın yaratmasıyla var olan şeyler. Biz yaratmadık, biz seçmedik. Dolayısıyla bu vasıtalar yok gibidir. Bu yüzden bunları Hasan li-ğayrihî’ye katmak yerine, Hasan li-aynihî’ye mülhak kabul edelim diyorlar. İslam’ın şartı beştir, bu beşini birbirinden ayırmayalım gayreti var burada.",
    arabicTerms: [
      { term: 'Qahru’n-nefs', arabic: 'قهر النفس', explanation: 'Nefsin şehvetlerini kırmak, kontrol altına almak.' },
      { term: 'Def-i hāceti’l-fakīr', arabic: 'دفع حاجة الفقير', explanation: 'Yoksulun ihtiyacını bertaraf etmek.' },
      { term: 'Şerefu’l-mekân', arabic: 'شرف المكان', explanation: 'Mekanın şerefi (Beytullah / Kâbe-i Muazzama).' },
      { term: 'Mahlûkun bi-halkillâh', arabic: 'مخلوق بخلق الله', explanation: 'Kulun kudretiyle değil, Cenab-ı Hakk\'ın doğrudan yaratmasıyla var olan fıtri netice.' }
    ],
    keyTopics: ['Qahru\'n-nefs', 'Def-i hâceti\'l-fakîr', 'Şerefu\'l-mekân', 'Mahlûkun bi-halkillâh kuralı']
  },
  {
    id: 'u-38',
    speaker: 'Salih',
    timeStr: '50:00',
    timeSec: 3000,
    section: 'ana_ders',
    text: "Hocam namazı niye öyle yapmadık? Namazda da bir takım hareketler var özünde kendimize eziyet ettiğimiz.",
    keyTopics: ['Namazdaki bedeni hareketlerin tahlili']
  },
  {
    id: 'u-39',
    speaker: 'Hoca',
    timeStr: '50:15',
    timeSec: 3015,
    section: 'ana_ders',
    text: "Namazda doğrudan Allah’ı yüceltme (tazim) hali var. Oruçta her hareketimiz tazim hareketi değil, aç kalıyoruz sadece. Ama namazda 'Allahu Ekber' dediğim an bütün halim tazimle ilişkili.",
    keyTopics: ['Namazdaki doğrudan tazim hali']
  },
  {
    id: 'u-40',
    speaker: 'Hoca',
    timeStr: '50:41',
    timeSec: 3041,
    section: 'ana_ders',
    text: "Değerli arkadaşlar, geldik bu tarafa. Hasan li-ğayrihî (حسن لغيره). Özünde Kabîh olabilir fakat başkasından dolayı Hasan diyoruz buna. Hasan li-ğayrihî olan kısımda iki ok çektim:\n\n1. Mâ lâ yetead dâ bi’l-me'mūri bih (ما لا يتأدى بالمأمور به): Öyle bir 'gayr' var ki burada, me'mūrun bih’i yaptığında o gayrı yapmış olmuyorsun. Me'mūrun bihi yapman lazım, ondan sonra o gayrı ayrıca yapman lazım. Örneği: Vudū' (Abdest). Abdest kötüdür niye? Su israfı. Suya ulaşım imkanının kısıtlı olduğu eski zamanları düşünün. Kış günleri soğuk suyla abdest almak nefse eziyet, işkence. Kitabımız böyle diyor. Abdest Kabîh li-aynihî'dir. Niye iyi? Li-ğayrihî; namazdan dolayı. Abdestin gayrı ne? Namaz. Peki abdest aldığınızda namaz yerine gelmiş sayılıyor mu? Hayır. Namazı ayrıca kılmanız lazım.",
    arabicTerms: [
      { term: 'Mâ lâ yeteaddâ bi’l-me\'mūri bih', arabic: 'ما لا يتأدى بالمأمور به', explanation: 'Emredilen vesile yerine getirildiğinde asıl amaçlanan gayrın hasıl olmadığı, onun ayrıca eda edilmesinin zorunlu olduğu durum.' },
      { term: 'Vudū\' / Abdest', arabic: 'الوضوء', explanation: 'Namazın sıhhat şartı olan abdest ameli.' }
    ],
    keyTopics: ['Hasan li-ğayrihî 1. kısım', 'Abdest örneği', 'Su meşakkati ve namaza vesile']
  },
  {
    id: 'u-41',
    speaker: 'Hoca',
    timeStr: '55:30',
    timeSec: 3330,
    section: 'ana_ders',
    text: "2. Mâ yetead dâ bi’l-me'mūri bih (ما يتأدى بالمأمور به): Bir me'mūrun bih var, bir de gayr var. Burada me'mūrun bih’i yaptığınız zaman gayrı hükmen yapmış sayılıyorsunuz. Örneği: Jihād (Cihat). Cihat; tahrîbu’l-bünyân (تخريب البنيان). Binaları tahrip etmek, yıkmak, yakmak, insanları öldürmek. Normalde kötü bir şey değil mi? Cihat Kabîh li-aynihî'dir. Niye iyi? Li-ğayrihî. Gayrı ne bunun? İ’lā-i Kelimetullāh (إعلاء كلمة الله). Cihat yaptığımızda İ’lā-i Kelimetullāh yerine gelmiş sayılıyor mu? Evet hükmen sayılıyor. Gayretimizi ortaya koymuş oluyoruz. Başarı olmasa bile hükmen olmuş oluyor.",
    arabicTerms: [
      { term: 'Mâ yeteaddâ bi’l-me\'mūri bih', arabic: 'ما يتأدى بالمأمور به', explanation: 'Emredilen amel yapılınca, asıl maksat olan gaye hükmen gerçekleşmiş sayılır.' },
      { term: 'Tahrîbu’l-bünyân', arabic: 'تخريب البنيان', explanation: 'İmar edilmiş yapıları ve canları tahrip etmek.' },
      { term: 'İ’lâ-i Kelimetullāh', arabic: 'إعلاء كلمة الله', explanation: 'Allah\'ın dinini ve tevhid kelimesini yüceltmek gayesi.' }
    ],
    keyTopics: ['Hasan li-ğayrihî 2. kısım', 'Cihad örneği', 'Hükmen yerine gelme (Tahrîb vs İ\'lâ-i Kelimetullāh)']
  },
  {
    id: 'u-42',
    speaker: 'Sabri',
    timeStr: '59:20',
    timeSec: 3560,
    section: 'ana_ders',
    text: "Cihat başarısız olsa İ’lā-i Kelimetullāh nasıl gerçekleşmiş olur?",
    keyTopics: ['Başarısızlık halinde hükmün durumu']
  },
  {
    id: 'u-43',
    speaker: 'Hoca',
    timeStr: '59:40',
    timeSec: 3580,
    section: 'ana_ders',
    text: "Cihat varsa İ’lā-i Kelimetullāh kesin vardır. Görevini yerine getirdin. Cihat yapmak sanki İ’lā-i Kelimetullāh yapmak gibidir.",
    keyTopics: ['Vesilenin gayeye müncer olması', 'Mükellefiyetin gayret ile tahakkuku']
  },
  {
    id: 'u-44',
    speaker: 'Burak',
    timeStr: '01:01:20',
    timeSec: 3680,
    section: 'ana_ders',
    text: "Namazı oruç gibi bedene zarar veren bir şey olarak göremez miyiz?",
    keyTopics: ['Namazın bedensel yorgunluğu']
  },
  {
    id: 'u-45',
    speaker: 'Hoca',
    timeStr: '01:01:45',
    timeSec: 3705,
    section: 'ana_ders',
    text: "Klasik tıpta bir insanın kendini aç bırakması zarardır. Ama hareket etmek, spor yapmak iyidir. Fakat o dönemde valiler 'ayakta durma cezası' veriyorlardı. Mesela Said bin Müseyyeb güneşte bekleme cezası almıştır. Vücudunu açıyorlar, güneşte 45 derecede yakıyorlar. Öyle bekliyor adam. Ayakta durmak, yorulmak Kabîh sayılıyordu o dönem anlayışına göre. Ama modern tıpta spor iyidir diyoruz. Dolayısıyla bu tabloyu modern tıp bilgisiyle yeniden okuyabiliriz. Ama ulemanın zihnindeki şablon buydu; yorulmak Kabîh’tir.",
    keyTopics: ['Klasik tıp vs Modern tıp', 'Said bin Müseyyeb örneği', 'Tarihsel zihniyet şablonu']
  },
  {
    id: 'u-46',
    speaker: 'Akif',
    timeStr: '01:06:50',
    timeSec: 4010,
    section: 'ana_ders',
    text: "Hocam hırsızlığı buraya alamaz mıyız? Benim malımı artırıyor sonuçta.",
    keyTopics: ['Hırsızlık sorusu', 'Faydanın kime ait olduğu']
  },
  {
    id: 'u-47',
    speaker: 'Hoca',
    timeStr: '01:07:10',
    timeSec: 4030,
    section: 'ana_ders',
    text: "Şeriat hırsızlığı emretmediği için biz buraya oturtmuyoruz. Biz şeriatın emrettiği şeyleri Hasan şablonuna oturtmaya çalışıyoruz. 'Ya sizin dininizde oruç var, aç kalıyorsunuz bu nasıl iyi?' diyene ulema bu tabloyla cevap veriyor.",
    keyTopics: ['Şeriatın emir dairesi', 'İslam\'ı rasyonel müdafaa ve tefsir']
  },
  {
    id: 'u-48',
    speaker: 'Hoca',
    timeStr: '01:09:40',
    timeSec: 4180,
    section: 'ana_ders',
    text: "Vakit nasıl? 19:20. Tamam arkadaşlar, şu tarafı bitirmiş olduk. Bir sonraki ders tamamen metni okuyalım inşallah. Akif okuyacak. Bu şemanın sunumunu bir daha yapmayacağım. Mutlaka fotoğrafını çekin, bir sonraki derste metinle karşılaştırarak gideceğiz. Anlamadığınız yerler olursa bir sonraki derste sorarsınız. Haydi beraet-i zimmet asıldır.",
    arabicTerms: [
      { term: 'Berâet-i zimmet asıldır', arabic: 'الأصل براءة الذمة', explanation: 'Kişinin borçsuz, suçsuz ve mükellefiyetsiz olması asıldır; aksini iddia eden delil getirmelidir.' }
    ],
    keyTopics: ['Ders sonu', 'Metin okuma ödevi', 'Berâet-i zimmet kaidesi']
  }
];
