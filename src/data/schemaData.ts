export interface SchemaNode {
  id: string;
  parentId?: string;
  title: string;
  arabicTitle: string;
  category: 'root' | 'li_aynihi' | 'li_gayrihi' | 'sub_branch' | 'example';
  summary: string;
  detailedText: string;
  examples: string[];
  keyQuote: string;
  nature: 'hasan' | 'kabih_özde' | 'vasıta' | 'kaide';
  audioSec?: number;
  highlightPoints: string[];
}

export const FIQH_SCHEMA_TREE: SchemaNode[] = [
  {
    id: 'root-husn-kubuh',
    title: 'Hüsn ve Kubuh (Güzellik ve Çirkinlik)',
    arabicTitle: 'الحسن والقبيح',
    category: 'root',
    nature: 'kaide',
    summary: 'Hakîm olan Allah kabîh olanı emretmez, hasen olanı yasaklamaz. Emredilen her şey iyidir.',
    detailedText: 'Fıkıh usulü ve Kelam ilmi, dinin rasyonel/akli temellendirilmesidir. Hakîm (hikmet sahibi) olan Cenâb-ı Hakk, çirkin ve zararlı (kabih) olan bir şeyi emretmez; güzel ve menfaatli (hasan) olan bir şeyi de yasaklamaz. Dolayısıyla şeriatın emrettiği her amelde muhakkak bir "hüsn" (iyilik/fayda) mevcuttur.',
    examples: ['İman', 'Namaz', 'Oruç', 'Zekat', 'Hac', 'Abdest', 'Cihad'],
    keyQuote: 'Allah Azze ve Celle Hakîm’dir. Hakîm olan bir zat Kabîh olan bir şeyi emretmez... Emredilen her şeye iyi dememizi sağlar bu tablo.',
    audioSec: 923,
    highlightPoints: [
      'İyi = İnsana bedeni/ruhi fayda ve menfaat sağlayan',
      'Kötü = İnsana zarar veren her şey',
      'İslam inancı (tartışılmaz) vs İslam düşüncesi (akli münazaraya açık)'
    ]
  },
  // KANAT 1: Hasan li-aynihî
  {
    id: 'hasan-li-aynihi',
    parentId: 'root-husn-kubuh',
    title: 'Hasan li-Aynihî (Bizzat Özü İyi)',
    arabicTitle: 'حسن لعينه / حسن لذاته',
    category: 'li_aynihi',
    nature: 'hasan',
    summary: 'Kendi özü ve zatı itibariyle iyi ve menfaatli olan ameller.',
    detailedText: 'Bir şeyin güzelliği başka bir amele veya neticeye bağlanmaksızın kendi zâtında mevcuttur. İslam\'ın beş temel şartı bu dairede tahlil edilir.',
    examples: ['Kelime-i Şehadet / Kalp ile Tasdik', 'İkrar', 'Namaz', 'Oruç', 'Zekat', 'Hac'],
    keyQuote: 'Aynî ne demek? Kendi özü iyi. Buna Hasan li-zâtihî de deniliyor.',
    audioSec: 1515,
    highlightPoints: [
      'Zatında hayır ve kemal vardır',
      'Başka bir dış sebebe muhtaç olmaksızın emredilmiştir'
    ]
  },
  {
    id: 'li-manen-fi-aynihi',
    parentId: 'hasan-li-aynihi',
    title: 'Li-Ma\'nen fî Aynihî (Özündeki Manadan Ötürü)',
    arabicTitle: 'لمعنى في عينه',
    category: 'sub_branch',
    nature: 'hasan',
    summary: 'Kendi özünde mündemiç bir hususiyet dolayısıyla güzel olan ameller.',
    detailedText: 'Buradaki "mana", amelin kendi zatında var olan hakiki bir vasıf ve menfaattir. İkiye ayrılır: Sukutu kabul etmeyenler ve kabul edenler.',
    examples: ['Tasdik bi\'l-kalb', 'İkrar bi\'l-lisân'],
    keyQuote: 'Şu "mana" kelimeleri sizi aldatmasın; "aynında var olan mana", burada bir özellik var demek. Özünde bir şey var ondan dolayı iyi.',
    audioSec: 1920,
    highlightPoints: [
      'Özündeki mana doğrudan mükellefe ve imana taalluk eder',
      'Mükellefiyetin düşüp düşmemesine göre ikiye ayrılır'
    ]
  },
  {
    id: 'sukut-etmeyen',
    parentId: 'li-manen-fi-aynihi',
    title: '1. Mâ Lâ Yaqbelü\'s-Sukût (Düşmeyi Asla Kabul Etmeyen)',
    arabicTitle: 'ما لا يقبل السقوط',
    category: 'sub_branch',
    nature: 'hasan',
    summary: 'Hiçbir mazeret, ikrah, hastalık veya zaruret halinde kulun üzerinden düşmeyen amel.',
    detailedText: 'Şeriat bunu hiçbir koşulda kimseden düşürmez. Kalp ile Allah Teâlâ\'yı tasdik etmek (et-Tasdîku bi\'l-kalb) böyledir. Kişi ne kadar ağır ölüm tehdidi (ikrah-ı mülcî) altında kalırsa kalsın kalben inkar etmesi caiz değildir; ruhsat sadece dille ikrara verilmiştir.',
    examples: ['et-Tasdîku bi\'l-kalb (التصديق بالقلب)'],
    keyQuote: 'Düşmeyi hiç kabul etmeyen. Hiçbir koşulda düşmeyen... Bunun düştüğü bir özür, ruhsat durumu var mı? Yok.',
    audioSec: 1920,
    highlightPoints: [
      'Hiçbir ruhsat ve zaruretle sakıt olmaz',
      'İmanın aslı ve kalbi rüknüdür'
    ]
  },
  {
    id: 'sukut-eden',
    parentId: 'li-manen-fi-aynihi',
    title: '2. Mâ Yaqbelü\'s-Sukût (Düşmeyi Kabul Eden)',
    arabicTitle: 'ما يقبل السقوط',
    category: 'sub_branch',
    nature: 'hasan',
    summary: 'Zaruret ve meşakkat hallerinde mükellefin üzerinden düşebilen ameller.',
    detailedText: 'Zaruret veya meşakkat tahakkuk ettiğinde amel ya sadece mükellefiyet (asıl) bakımından düşer ya da hem asıl hem de vasıf (hasenlik) bakımından düşer.',
    examples: ['Dille İkrar', 'Namaz'],
    keyQuote: 'Düşebilenler de ikiye ayrılıyor: Aslen düşüp vasfen düşmeyen ve hem aslen hem vasfen düşen.',
    audioSec: 2140,
    highlightPoints: [
      'Aslen lâ vasfen',
      'Aslen ve vasfen'
    ]
  },
  {
    id: 'sukut-aslen-la-vasfen',
    parentId: 'sukut-eden',
    title: 'a) Aslen Düşen, Vasfen Düşmeyen',
    arabicTitle: 'ما يقبل السقوط أصلاً لا وصفاً',
    category: 'sub_branch',
    nature: 'hasan',
    summary: 'Mükellefiyet (asıl) düşer; fakat amelin hasen/güzel olma vasfı devam eder.',
    detailedText: 'Örnek: el-İkrâr bi\'l-lisân (dille iman ikrarı). Ölüm tehdidi altındaki bir mümin dille inkar etse küfre girmez (ruhsat). Lakin inkar etmeyip direnirse ve öldürülürse günahkar/intihar etmiş sayılmaz, bilakis ŞEHİT olur. Çünkü dille ikrarın hasenlik vasfı düşmemiştir!',
    examples: ['el-İkrâr (الإقرار باللسان) - İkrah halinde ikrar'],
    keyQuote: 'Furkan kafasına silah dayandığında inkar etmedi... Şehit oldu. Niye? Çünkü ikrarda hasen özelliği devam ediyor. Düşseydi "caiz olmayan bir şey yapıyorsun" derdik.',
    audioSec: 2140,
    highlightPoints: [
      'Mükellefiyet zorlamayla kalkar (azimetten ruhsata geçiş caizdir)',
      'Güzellik vasfı kalıcı olduğu için direnip ölmek en büyük fazilet (şehadet) sayılır'
    ]
  },
  {
    id: 'sukut-aslen-ve-vasfen',
    parentId: 'sukut-eden',
    title: 'b) Hem Aslen Hem Vasfen Düşen',
    arabicTitle: 'ما يقبل السقوط أصلاً ووصفاً',
    category: 'sub_branch',
    nature: 'hasan',
    summary: 'Özür halinde hem mükellefiyet kalkar hem de amelin güzel olma vasfı yok olur.',
    detailedText: 'Bu durumda kişi ameli yapmaya kalkarsa sevap değil günah/kabih işlemiş olur. Namaz ve ona mülhak kılınan diğer rükünler bu başlık altındadır.',
    examples: ['Namaz (Salat)', 'Oruç', 'Zekat', 'Hac'],
    keyQuote: 'Hem aslen düşüyor hem vasfen düşüyor. Yani yapamazsın artık, vasfen düşüyor ne demek? Artık o iyi değil.',
    audioSec: 2485,
    highlightPoints: [
      'Yasaklandığı durumda işlenmesi meşru değildir',
      'Hasanun li-ma\'nen fî vasfihî ve Mülhak olanlar diye ayrılır'
    ]
  },
  {
    id: 'hasan-fi-vasfihi-namaz',
    parentId: 'sukut-aslen-ve-vasfen',
    title: 'Hasanun Li-Ma\'nen fî Vasfihî (Namaz)',
    arabicTitle: 'حسن لمعنى في وصفه (الصلاة)',
    category: 'sub_branch',
    nature: 'hasan',
    summary: 'Özündeki Ta\'zîmullāh (Allah\'ı yüceltme) manasıyla doğrudan hasen olan namaz.',
    detailedText: 'Namaz, her bir rüknüyle doğrudan doğruya Cenâb-ı Hakk\'ı tazimdir. Hayızlı kadından hem aslen hem vasfen düşer; bu haldeyken kılarsa kabih işlemiş olur.',
    examples: ['Namaz (Salat - Beş Vakit Namaz)'],
    keyQuote: 'Nedir bu özellik? Ta’zîmullāh (تعظيم الله). Allah ile ilişkili olan her şey Hasan li-aynihî kabul ediliyor. Namaz Ta’zîmullah olduğu için iyidir.',
    audioSec: 2640,
    highlightPoints: [
      'Ta\'zîmullāh: Allah\'ı tekbir, rüku ve secdeyle doğrudan yüceltme',
      'Özrü olan kimseden hem aslı hem güzelliği kalkar'
    ]
  },
  {
    id: 'mulhak-hasen-fi-vasfihi',
    parentId: 'sukut-aslen-ve-vasfen',
    title: 'Namaza Mülhak Kılınanlar (Oruç, Zekat, Hac)',
    arabicTitle: 'ملحق لحسن لمعنى في وصفه',
    category: 'sub_branch',
    nature: 'kabih_özde',
    summary: 'Aslında nefse/mala meşakkat açısından Kabîh li-aynihî gibidir; lakin mahlûkun bi-halkillâh vasıtalarıyla namaza mülhak sayılmıştır.',
    detailedText: 'Ulemanın dahiyane tahlili: Normalde aç kalmak bedene eziyet, zekat malı eksiltme, hac yol meşakkatidir (özünde kabih). Lakin:\n• Oruç -> Qahru\'n-nefs (nefsi kırma)\n• Zekat -> Def-i hâceti\'l-fakîr (fakirin ihtiyacını giderme)\n• Hac -> Şerefu\'l-mekân (Kâbe\'nin şerefi)\nBu vasıtalar kulun ihtiyarından bağımsız, Allah\'ın yaratmasıyla (mahlûkun bi-halkillâh) var olduğu için vasıtalar yok gibidir ve İslam\'ın 5 şartı bozulmasın diye Hasan li-aynihî\'ye mülhak edilmiştir.',
    examples: [
      'Oruç (Savm) - Qahru\'n-Nefs',
      'Zekat - Def-i Hâceti\'l-Fakîr',
      'Hac - Şerefu\'l-Mekân'
    ],
    keyQuote: 'Normalde şu üçü burada olmamalı. Oruç, zekat ve hac normalde Kabîh li-aynihîdir... Ulema mahlûkun bi-halkillâh olduğu için yok sayıp namaza mülhak kılmıştır.',
    audioSec: 2800,
    highlightPoints: [
      'Kendi özünde bedene/maddiyata külfettir',
      'Vasıtalar ilahî yaratma ưngesiyle fıtraten tahakkuk ettiği için vasıta yok sayılır',
      'İslam\'ın 5 şartının birliğini muhafaza gayreti'
    ]
  },

  // KANAT 2: Hasan li-ğayrihî
  {
    id: 'hasan-li-gayrihi',
    parentId: 'root-husn-kubuh',
    title: 'Hasan li-Ğayrihî (Başkasından Dolayı İyi)',
    arabicTitle: 'حسن لغيره',
    category: 'li_gayrihi',
    nature: 'kabih_özde',
    summary: 'Özünde Kabîh (zahmet/zarar/ziyan) olup, ulaştırdığı yüce gaye sebebiyle emredilen ameller.',
    detailedText: 'Kendisinden dolayı değil başkası iyi olduğu için ve ona vesile kılındığı için şeriatça iyi kabul edilir. İki ana kısma ayrılır: Gayrın me\'murun bih ile eda edilip edilmemesine göre.',
    examples: ['Abdest (Namaz için vesile)', 'Cihat (İ\'lâ-i Kelimetullāh için vesile)'],
    keyQuote: 'Hasan li-ğayrihî şu demek; kendisi kötü (Kabîh li-aynihî). Fakat iyiye götürdüğü için, iyinin hatırına iyi kabul edilir.',
    audioSec: 3041,
    highlightPoints: [
      'Amelin kendi yapısında zorluk/külfet/zarar vardır',
      'Şeriat bunu özündeki meşakkat için değil, ulaştırdığı ulvi netice için emretmiştir'
    ]
  },
  {
    id: 'gayrihi-la-yeteadda',
    parentId: 'hasan-li-gayrihi',
    title: '1. Mâ Lâ Yeteaddâ bi\'l-Me\'mūri Bih (Gayrı Eda Etmeyen)',
    arabicTitle: 'ما لا يتأدى بالمأمور به',
    category: 'sub_branch',
    nature: 'vasıta',
    summary: 'Me\'murun bih yapıldığında gaye (gayr) doğrudan eda edilmiş sayılmaz; gaye ayrıca yapılmalıdır.',
    detailedText: 'Örnek: Abdest (Vudû\'). Su sarfiyatı ve kışın dondurucu soğukta nefse eziyet bakımından özünde kabihtir. Gaye namazdır. Abdest aldığınızda namaz kılınmış olmaz; namazı ayrıca eda etmeniz farzdır.',
    examples: ['Abdest (Vudû\') -> Namaz'],
    keyQuote: 'Öyle bir "gayr" var ki burada, me\'mūrun bihi yaptığında o gayrı yapmış olmuyorsun. Abdest aldığınızda namaz yerine gelmiş sayılıyor mu? Hayır. Namazı ayrıca kılmanız lazım.',
    audioSec: 3041,
    highlightPoints: [
      'Vasıta yapıldıktan sonra maksadın bizzat ayrıca ifası gerekir',
      'Abdest namaza hazırlıktır, namazın kendisi değildir'
    ]
  },
  {
    id: 'gayrihi-yeteadda',
    parentId: 'hasan-li-gayrihi',
    title: '2. Mâ Yeteaddâ bi\'l-Me\'mūri Bih (Gayrı Hükmen Eda Eden)',
    arabicTitle: 'ما يتأدى بالمأمور به',
    category: 'sub_branch',
    nature: 'vasıta',
    summary: 'Me\'murun bih eda edildiğinde, asıl gaye de hükmen yerine gelmiş sayılır.',
    detailedText: 'Örnek: Cihat. Cihat, özü itibariyle binaları yıkmak, can kayıpları oluşturmak (tahrîbu\'l-bünyân) bakımından kabihtir. Fakat gayesi İ\'lâ-i Kelimetullāh\'tır (Allah\'ın adını yüceltmek). Kişi cihat amelini ortaya koyduğu an, savaşta netice alınmasa veya mağlup olunsa dahi İ\'lâ-i Kelimetullāh gayesi hükmen yerine gelmiş sayılır.',
    examples: ['Cihat (Jihad) -> İ\'lâ-i Kelimetullāh'],
    keyQuote: 'Cihat tahrîbu’l-bünyândır... Niye iyi? Li-ğayrihî: İ’lā-i Kelimetullāh. Cihat yaptığımızda İ’lā-i Kelimetullāh yerine gelmiş sayılıyor mu? Evet hükmen sayılıyor. Başarı olmasa bile.',
    audioSec: 3330,
    highlightPoints: [
      'Amel yapıldığı anda gaye hükmen gerçekleşmiş kabul edilir',
      'Gayret ortaya konmuştur; zafer olmasa bile hüküm tamamdır'
    ]
  }
];
