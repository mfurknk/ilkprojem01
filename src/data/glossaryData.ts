export interface GlossaryTerm {
  slug: string;
  term: string;
  arabic: string;
  definition: string;
  lectureContext: string;
  category: 'husn_kubuh' | 'vakit' | 'kaide' | 'sahis';
}

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  {
    slug: 'husn',
    term: 'Hüsn / Hasan',
    arabic: 'حُسْن / حَسَن',
    definition: 'Güzellik, iyilik; fıtrata, akla ve dine uygun yarar ve menfaat. Dinde emredilen her amelin özünde veya neticesinde bulunan hayır vasfı.',
    lectureContext: 'Hakîm olan Allah kabih olanı emretmez; bu sebeple emredilen her şey hasendir.',
    category: 'husn_kubuh'
  },
  {
    slug: 'kubuh',
    term: 'Kubuh / Kabîh',
    arabic: 'قُبْح / قَبِيح',
    definition: 'Çirkinlik, kötülük; insana bedeni, ruhi veya dünyevi/uhrevi zarar veren, dinin nehyettiği şey.',
    lectureContext: 'Kötü demek, insana zararlı olan şey demektir. Hakîm olan zat hasan olanı yasaklamaz, kabih olanı yasaklar.',
    category: 'husn_kubuh'
  },
  {
    slug: 'hasan-li-aynihi',
    term: 'Hasan li-Aynihî',
    arabic: 'حَسَن لِعَيْنِهِ / لِذَاتِهِ',
    definition: 'Bizzat kendi zatında ve yapısında bulunan güzellik, kemal ve menfaat sebebiyle emredilen amel. Başka bir sebebe bağlı olmaksızın iyidir.',
    lectureContext: 'Aynî ne demek? Kendi özü iyi. İmanın tasdiki ve namaz gibi ibadetler bu kabildendir.',
    category: 'husn_kubuh'
  },
  {
    slug: 'hasan-li-gayrihi',
    term: 'Hasan li-Ğayrihî',
    arabic: 'حَسَن لِغَيْرِهِ',
    definition: 'Özü itibariyle bir külfet, meşakkat veya zahmet (hatta kabih) barındırdığı halde, ulaştırdığı yüce gaye sebebiyle şeriatça iyi kabul edilen amel.',
    lectureContext: 'Abdest (su sarfiyatı/soğukta meşakkat) namaz için iyi; Cihat (yapıların yıkımı/ölüm) İ\'lâ-i Kelimetullāh için iyidir.',
    category: 'husn_kubuh'
  },
  {
    slug: 'ma-la-yaqbelus-sukut',
    term: 'Mâ Lâ Yaqbelü’s-Sukût',
    arabic: 'ما لا يقبل السقوط',
    definition: 'Hiçbir mazeret, özür, hastalık veya ölüm tehdidi altında mükellefin üzerinden düşmeyen, her halükarda farz olan amel.',
    lectureContext: 'Kalp ile tasdikin düştüğü hiçbir ruhsat durumu yoktur.',
    category: 'husn_kubuh'
  },
  {
    slug: 'aslen-la-vasfen',
    term: 'Aslen lâ Vasfen',
    arabic: 'أصلاً لا وصفاً',
    definition: 'Zorlama (ikrah) halinde mükellefiyetin (aslın) düşmesi; ancak amelin güzellik ve hayır olma vasfının baki kalması.',
    lectureContext: 'Furkan kafasına silah dayandığında ikrarda ısrar edip ölürse şehit olur; çünkü ikrarın hasenlik vasfı düşmemiştir.',
    category: 'husn_kubuh'
  },
  {
    slug: 'aslen-ve-vasfen',
    term: 'Aslen ve Vasfen',
    arabic: 'أصلاً ووصفاً',
    definition: 'Özür halinde hem mükellefiyetin kalkması hem de amelin iyi olma vasfının tamamen düşmesi (yapılması haram ve kabih hale gelir).',
    lectureContext: 'Hayızlı kadından namaz hem aslen hem vasfen düşer; kılarsa sevap değil kabih yapmış olur.',
    category: 'husn_kubuh'
  },
  {
    slug: 'tazimullah',
    term: 'Ta\'zîmullāh',
    arabic: 'تَعْظِيمُ الله',
    definition: 'Cenâb-ı Hakk\'ı büyüklük, celal ve kemal ile yüceltmek, O\'na boyun eğmek ve taatte bulunmak.',
    lectureContext: 'Namazın hasen li-aynihî olmasının temel illeti doğrudan doğruya Ta\'zîmullah olmasıdır.',
    category: 'husn_kubuh'
  },
  {
    slug: 'qahrun-nefs',
    term: 'Qahru\'n-Nefs',
    arabic: 'قَهْرُ النَّفْس',
    definition: 'Nefsin emredici süfli arzularını, şehvetlerini açlık ve perhiz yoluyla kırmak, dizginlemek.',
    lectureContext: 'Oruç özünde bedene açlık eziyetidir; fakat qahru\'n-nefs vasıtasıyla namaza mülhak bir güzellik kazanır.',
    category: 'husn_kubuh'
  },
  {
    slug: 'def-i-hacetil-fakir',
    term: 'Def-i Hâceti\'l-Fakîr',
    arabic: 'دَفْعُ حَاجَةِ الفَقِير',
    definition: 'Yoksulun ihtiyacını bertaraf etmek, muhtaca can suyu olmak.',
    lectureContext: 'Zekat malı eksiltmek gibi görünse de, fakirin ihtiyacını gidermek sebebiyle hayırdır.',
    category: 'husn_kubuh'
  },
  {
    slug: 'sereful-mekan',
    term: 'Şerefu\'l-Mekân',
    arabic: 'شَرَفُ المَكَان',
    definition: 'Mekanın mukaddesliği ve üstünlüğü; Beytullah ve Harem-i Şerif.',
    lectureContext: 'Hac yolculuk meşakkatidir; lakin Kâbe\'nin şerefinden dolayı namaza mülhak kılınmıştır.',
    category: 'husn_kubuh'
  },
  {
    slug: 'mahlukun-bi-halkillah',
    term: 'Mahlûkun bi-Halkillâh',
    arabic: 'مَخْلُوقٌ بِخَلْقِ الله',
    definition: 'Kulun irade ve kesbiyle değil, Cenâb-ı Hakk\'ın fıtri ve kevni yaratmasıyla doğrudan hasıl olan netice.',
    lectureContext: 'Oruçtaki nefsin kırılması ve haccın mekanı Allah\'ın yaratmasıyladır; bu sebeple vesileler yok sayılmıştır.',
    category: 'husn_kubuh'
  },
  {
    slug: 'tahribul-bunyan',
    term: 'Tahrîbu\'l-Bünyân',
    arabic: 'تَخْرِيبُ البُنْيَان',
    definition: 'İnsan yapılarının, şehirlerin tahrip edilmesi ve can kayıpları. Özü itibariyle kabihtir.',
    lectureContext: 'Cihat tahrîbu\'l-bünyân olduğu için özünde kabihtir; lakin İ\'lâ-i Kelimetullāh için hasendir.',
    category: 'husn_kubuh'
  },
  {
    slug: 'ilai-kelimetullah',
    term: 'İ\'lâ-i Kelimetullāh',
    arabic: 'إِعْلَاءُ كَلِمَةِ الله',
    definition: 'Allah Teâlâ\'nın dinini, tevhid inancını ve adaletini yeryüzünde en yüce kılmak maksadı.',
    lectureContext: 'Cihat yapıldığında kişi muvaffak olamasa dahi İ\'lâ-i Kelimetullāh gayesi hükmen gerçekleşmiş sayılır.',
    category: 'husn_kubuh'
  },
  {
    slug: 'miyar',
    term: 'Miyâr',
    arabic: 'مِعْيَار',
    definition: 'Vaktin, emredilen ibadete tam denk gelmesi durumu. O vakit içerisinde başka bir benzer ibadet sığmaz.',
    lectureContext: 'Ramazan orucunun vakti miyardır; aynı günde ikinci bir oruca imkan tanımaz.',
    category: 'vakit'
  },
  {
    slug: 'zarf',
    term: 'Zarf',
    arabic: 'ظَرْف',
    definition: 'Vaktin, emredilen ibadetin süresinden daha geniş olması durumu. Aynı vakit içinde başka ibadetler de ifa edilebilir.',
    lectureContext: 'Namaz vakitleri zarftır; öğle namazından önce veya sonra nafile de kılınabilir.',
    category: 'vakit'
  },
  {
    slug: 'muskil-musekkek',
    term: 'Müşkil / Müşekkek',
    arabic: 'مُشْكِل / مُشَكَّك',
    definition: 'İki zıt vasfı bünyesinde barındıran; hem miyar hem zarf özelliği gösteren vakit.',
    lectureContext: 'Hac vakti bir yönüyle miyar (aylar belirlidir), bir yönüyle zarftır (rükünler ayların tamamını doldurmaz).',
    category: 'vakit'
  },
  {
    slug: 'beraet-i-zimmet',
    term: 'Berâet-i Zimmet Asıldır',
    arabic: 'الأَصْلُ بَرَاءَةُ الذِّمَّة',
    definition: 'Mecelle kaidesi: Bir delil olmadıkça kişinin borçsuz, suçsuz ve mükellefiyetsiz sayılması esastır.',
    lectureContext: 'Hoca dersi bitirirken latifeyle bu kaideyi zikretmiştir: "Haydi beraet-i zimmet asıldır."',
    category: 'kaide'
  }
];
