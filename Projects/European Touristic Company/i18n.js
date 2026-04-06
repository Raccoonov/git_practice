/* ============================================================
   European Touristic Company — i18n.js
   Supported languages: en (English), ru (Russian), zh (Chinese)
   Strategy: data-i18n="key" on every text node.
             data-i18n-html="key" for innerHTML (with <br>, <em> etc.)
             data-i18n-placeholder="key" for input placeholders
             data-i18n-aria="key" for aria-label attributes
   ============================================================ */

(function () {
  'use strict';

  /* ─── Translation dictionary ─────────────────────────────────── */
  const T = {

    /* ══════════════════════════════════════════════════════════════
       ENGLISH  (source language)
    ══════════════════════════════════════════════════════════════ */
    en: {
      /* Meta */
      'meta.title': 'European Touristic Company — Curated European Travel',
      'meta.desc': 'European Touristic Company offers bespoke tours across Europe — from Mediterranean coastlines to Alpine peaks and historic city walks. Expert guides. Lifelong memories.',

      /* Header / nav */
      'nav.destinations': 'Destinations',
      'nav.tours': 'Tours',
      'nav.experiences': 'Experiences',
      'nav.about': 'About Us',
      'nav.contact': 'Contact',
      'nav.planTrip': 'Plan Your Trip',
      'nav.openMenu': 'Open menu',

      /* Hero */
      'hero.eyebrow': 'Est. 1994 · Trusted by 120,000+ travellers',
      'hero.title': 'Discover Europe,<br><em>Your Way</em>',
      'hero.subtitle': 'Bespoke journeys across the continent\'s most iconic landscapes, cities, and hidden treasures — crafted by experts who live and breathe European travel.',
      'hero.cta.tours': 'Explore Our Tours',
      'hero.cta.destinations': 'Browse Destinations',
      'hero.stat.countries': 'Countries',
      'hero.stat.tours': 'Unique Tours',
      'hero.stat.experience': 'Of Experience',
      'hero.scroll': 'Scroll',

      /* Destinations section */
      'dest.eyebrow': 'Where We Go',
      'dest.title': 'Iconic Destinations',
      'dest.sub': 'From ancient ruins to Alpine meadows, our network spans the full breadth of the continent.',
      'dest.viewAll': 'View All 47 Destinations',
      'dest.explore': 'Explore',
      'dest.badge.popular': 'Most Popular',
      'dest.badge.hidden': 'Hidden Gem',
      'dest.tours.available': 'tours available',

      /* Destination names + descriptions */
      'dest.italy.name': 'Italy',
      'dest.italy.desc': 'Rome\'s eternal ruins, Tuscany\'s golden light, Venice\'s labyrinthine canals — Italy rewards every sense.',
      'dest.italy.meta': '42 tours available',
      'dest.italy.link': 'Explore Italy →',
      'dest.france.name': 'France',
      'dest.france.desc': 'Paris, Provence, the Loire Valley châteaux — France is a journey through civilisation\'s finest chapters.',
      'dest.france.meta': '36 tours',
      'dest.switzerland.name': 'Switzerland',
      'dest.switzerland.desc': 'Pristine Alpine peaks, mirror lakes and charming chalets in a landscape of breathtaking precision.',
      'dest.switzerland.meta': '28 tours',
      'dest.greece.name': 'Greece',
      'dest.greece.desc': 'Whitewashed Cycladic villages, sapphire Aegean waters and millennia of mythology at your feet.',
      'dest.greece.meta': '31 tours',
      'dest.spain.name': 'Spain',
      'dest.spain.desc': 'Flamenco rhythms, Moorish palaces, sun-drenched sierras and tapas culture at its most vivid.',
      'dest.spain.meta': '38 tours',
      'dest.bulgaria.name': 'Bulgaria',
      'dest.bulgaria.desc': 'From Rila\'s snow-dusted peaks to the Black Sea\'s golden shores — Bulgaria offers ski slopes, rose-scented valleys, ancient fortresses and mystical hot springs in one extraordinary country.',
      'dest.bulgaria.meta': '5 unique experiences',
      'dest.bulgaria.link': 'Explore Bulgaria →',
      'dest.bansko.name': 'Bansko',
      'dest.bansko.desc': 'World-class Pirin slopes in winter; wildflower meadows and alpine trails in summer. Bulgaria\'s ultimate four-season mountain resort.',
      'dest.bansko.meta': 'Ski & Hiking',
      'dest.melnik.name': 'Melnik',
      'dest.melnik.desc': 'Bulgaria\'s smallest town, cradled in dramatic sandstone pyramids and home to centuries-old wine cellars producing legendary Shiroka Melnishka Loza.',
      'dest.melnik.meta': 'Wine & Culture',
      'dest.rupite.name': 'Rupite',
      'dest.rupite.desc': 'A place of quiet mysticism — Baba Vanga\'s beloved chapel, therapeutic mineral hot springs and the volcanic Kozhuh hill in the shadow of Belasitsa Mountain.',
      'dest.rupite.meta': 'Wellness & Mysticism',
      'dest.varna.name': 'Varna',
      'dest.varna.desc': 'The pearl of the Black Sea — golden sandy beaches, Roman thermae, a stunning cathedral and a vibrant seaside promenade alive until dawn.',
      'dest.varna.meta': 'Beach & History',
      'dest.vturnovo.name': 'Veliko Turnovo',
      'dest.vturnovo.desc': 'The medieval capital of the Second Bulgarian Empire — Tsarevets fortress, cobblestone Samovodska Charshiya and dramatic gorges of the Yantra river.',
      'dest.vturnovo.meta': 'Heritage & History',

      /* Tours section */
      'tours.eyebrow': 'Our Journeys',
      'tours.title': 'Featured Tours',
      'tours.sub': 'Meticulously planned itineraries that reveal the authentic soul of each destination.',
      'tours.viewAll': 'View All 320+ Tours',
      'tours.filter.all': 'All Tours',
      'tours.filter.cultural': 'Cultural',
      'tours.filter.adventure': 'Adventure',
      'tours.filter.culinary': 'Culinary',
      'tours.filter.luxury': 'Luxury',
      'tours.filter.bulgaria': 'Bulgaria',
      'tours.book': 'Book Now',
      'tours.from': 'from',
      'tours.pp': 'per person',
      'tours.bulgaria.label': 'Bulgaria Collection',

      /* Tour cards — names & descriptions */
      'tour.greece.title': 'Classical Greece: Athens to Delphi',
      'tour.greece.desc': 'Walk in the footsteps of Socrates and Pericles. The Acropolis, the Oracle at Delphi, the ruins of Mycenae.',
      'tour.greece.duration': '12 days',
      'tour.greece.location': 'Greece',
      'tour.burgundy.title': 'Burgundy Wine & Gastronomy',
      'tour.burgundy.desc': 'Premier cru vineyards, Michelin-starred kitchens, village markets and cellar tastings in the heart of Burgundy.',
      'tour.burgundy.duration': '9 days',
      'tour.burgundy.location': 'France',
      'tour.alps.title': 'Alpine Traverse: Haute Route',
      'tour.alps.desc': 'The legendary high-altitude route from Chamonix to Zermatt — glaciers, wildflower meadows and mountain huts.',
      'tour.alps.duration': '14 days',
      'tour.alps.location': 'Switzerland · Austria',
      'tour.venice.title': 'Venice & the Veneto in Style',
      'tour.venice.desc': 'Private gondola rides, palazzo hotel stays, exclusive glass-blowing on Murano and Prosecco hills at sunset.',
      'tour.venice.duration': '10 days',
      'tour.venice.location': 'Italy',
      'tour.nordic.title': 'Nordic Fjords & Northern Lights',
      'tour.nordic.desc': 'Dramatic fjord landscapes, Viking heritage and the ethereal wonder of the aurora borealis above the Arctic circle.',
      'tour.nordic.duration': '8 days',
      'tour.nordic.location': 'Norway · Iceland',
      'tour.andalucia.title': 'Andalucía: Moorish Heritage & Tapas',
      'tour.andalucia.desc': 'Granada\'s Alhambra, Córdoba\'s Mezquita, Sevilla\'s flamenco nights and the finest jamón ibérico you\'ll ever taste.',
      'tour.andalucia.duration': '11 days',
      'tour.andalucia.location': 'Spain',
      'tour.bansko.title': 'Bansko Ski Week in the Pirin',
      'tour.bansko.desc': 'Full lift-pass access to 75 km of Pirin runs, ski school, après-ski at traditional mehanas and a night in a 300-year-old Bulgarian chalet.',
      'tour.bansko.duration': '7 days',
      'tour.bansko.location': 'Bansko, Bulgaria',
      'tour.hike.title': 'Pirin & Rila Highland Trek',
      'tour.hike.desc': 'Summer alpine hiking through Pirin\'s wildflower meadows, glacial lakes and the UNESCO-listed Rila Monastery hidden in a wooded gorge.',
      'tour.hike.duration': '6 days',
      'tour.hike.location': 'Bansko & Rila, Bulgaria',
      'tour.melnik.title': 'Melnik Wine & Sandstone Trail',
      'tour.melnik.desc': 'Cellar tastings of Shiroka Melnishka Loza directly with the winemakers, a guided walk through the bizarre sandstone pyramids and a feast of Macedonian cuisine.',
      'tour.melnik.duration': '4 days',
      'tour.melnik.location': 'Melnik & Sandanski, Bulgaria',
      'tour.rupite.title': 'Rupite: Vanga\'s Legacy & Hot Springs',
      'tour.rupite.desc': 'Visit the chapel Baba Vanga commissioned herself, soak in the legendary therapeutic mineral springs, and explore the volcanic Kozhuh hill under Belasitsa\'s shadow.',
      'tour.rupite.duration': '3 days',
      'tour.rupite.location': 'Rupite, Bulgaria',
      'tour.varna.title': 'Varna & the Golden Black Sea Coast',
      'tour.varna.desc': 'Beach resort days on the golden sands, evening at the Roman Thermae, the stunning Dormition Cathedral and day trips to Nessebar — UNESCO\'s coastal jewel.',
      'tour.varna.duration': '8 days',
      'tour.varna.location': 'Varna & Black Sea Coast, Bulgaria',
      'tour.vturnovo.title': 'Tsarevets & the Medieval Heartland',
      'tour.vturnovo.desc': 'The old capital of the Second Bulgarian Empire — Tsarevets fortress, the nightly Sound & Light show, Samovodska Charshiya craftsmen and an overnight in a restored Ottoman-era inn.',
      'tour.vturnovo.duration': '5 days',
      'tour.vturnovo.location': 'Veliko Turnovo, Bulgaria',

      /* Why Us */
      'why.eyebrow': 'The ETC Difference',
      'why.title': 'Travel as It Should Be',
      'why.1.title': '30 Years of Expertise',
      'why.1.text': 'Founded in 1994, we\'ve spent three decades forging deep relationships with local guides, boutique hotels, and cultural institutions across Europe.',
      'why.2.title': 'Expert Local Guides',
      'why.2.text': 'Every tour is led by certified, passionate guides who are natives of their region — giving you access to stories no guidebook will ever tell.',
      'why.3.title': 'Handpicked Accommodation',
      'why.3.text': 'From converted Tuscan farmhouses to Belle Époque city hotels — every property is personally inspected for character, comfort and location.',
      'why.4.title': 'Small Groups Only',
      'why.4.text': 'Maximum 16 travellers per tour. No cattle-train tourism — just intimate, unhurried experiences that let you truly connect with each place.',
      'why.5.title': 'Fully Protected Travel',
      'why.5.text': 'All tours include comprehensive travel insurance, ATOL-protected flights and 24/7 concierge support — so you travel with total peace of mind.',
      'why.6.title': 'Sustainable Tourism',
      'why.6.text': 'We offset all tour carbon, partner exclusively with eco-certified suppliers and contribute 2% of every booking to European heritage conservation.',

      /* Testimonials */
      'testi.eyebrow': 'Guest Stories',
      'testi.title': 'Voices From the Road',
      'testi.1.quote': '"The Tuscany tour was simply transformative. Our guide, Marco, didn\'t just show us places — he revealed them. We came back as different people."',
      'testi.1.name': 'Margaret R.',
      'testi.1.detail': 'London, United Kingdom · Italy Tour',
      'testi.2.quote': '"Fourteen days through the Alps felt like a lifetime of memories compressed into the most glorious fortnight of my life. ETC\'s logistics were flawless."',
      'testi.2.name': 'David P.',
      'testi.2.detail': 'Toronto, Canada · Alpine Traverse',
      'testi.3.quote': '"The Burgundy wine tour exceeded every expectation. Winery owners opened their cellars specifically for us. You simply cannot get access like that on your own."',
      'testi.3.name': 'Sophie C.',
      'testi.3.detail': 'Sydney, Australia · Burgundy Wine Tour',
      'testi.4.quote': '"I\'ve used three other tour operators in Europe. None come close to ETC\'s attention to detail, the quality of guides, and the authenticity of each experience."',
      'testi.4.name': 'Henrik K.',
      'testi.4.detail': 'Stockholm, Sweden · Greece Tour',

      /* About */
      'about.eyebrow': 'Our Story',
      'about.title': 'Three Decades of<br>European Passion',
      'about.p1': 'The European Touristic Company was born in 1994 from a simple conviction: that the best way to understand Europe is not to rush through its highlights, but to linger in its details — the light on a Roman piazza at dusk, the smell of a Provençal market at dawn, the silence of an Alpine valley at noon.',
      'about.p2': 'Today we operate over 320 itineraries spanning 47 countries, each designed in partnership with local experts who share our belief that travel should leave a place — and its people — better than it found them.',
      'about.pillar1': 'ATOL & ABTA Protected',
      'about.pillar2': 'B Corp Certified',
      'about.pillar3': 'Winner: Which? Travel Awards 2023',
      'about.pillar4': 'Member: European Tourism Association',
      'about.btn': 'Meet Our Team',

      /* Contact */
      'contact.eyebrow': 'Start Your Journey',
      'contact.title': 'Let\'s Plan Your<br>Perfect Trip',
      'contact.body': 'Speak with a dedicated travel consultant who will design an itinerary around your interests, timeframe and budget. No obligation — just great ideas.',
      'contact.phone': '+44 20 7946 0312',
      'contact.email': 'enquiries@europeantouristic.com',
      'contact.hours': 'Mon–Fri, 9 am – 7 pm GMT',
      'form.firstName': 'First Name',
      'form.lastName': 'Last Name',
      'form.email': 'Email Address',
      'form.destination': 'Destination of Interest',
      'form.destination.default': 'Select a destination…',
      'form.duration': 'Tour Duration',
      'form.duration.default': 'Any…',
      'form.duration.1': 'Up to 7 days',
      'form.duration.2': '8–14 days',
      'form.duration.3': '15–21 days',
      'form.duration.4': '22+ days',
      'form.groupSize': 'Group Size',
      'form.groupSize.default': 'Select…',
      'form.groupSize.1': 'Solo',
      'form.groupSize.2': 'Couple (2)',
      'form.groupSize.3': 'Small group (3–6)',
      'form.groupSize.4': 'Larger group (7+)',
      'form.message': 'Tell Us More (optional)',
      'form.submit': 'Send Enquiry',
      'form.note': 'We reply within one business day. Your data is never shared with third parties.',
      'form.ph.firstName': 'Anna',
      'form.ph.lastName': 'Müller',
      'form.ph.email': 'anna@example.com',
      'form.ph.message': 'Interests, travel dates, special requests…',

      /* Footer */
      'footer.tagline': 'Curating unforgettable European journeys since 1994.',
      'footer.dest.heading': 'Destinations',
      'footer.tours.heading': 'Tour Types',
      'footer.company.heading': 'Company',
      'footer.tours.cultural': 'Cultural Tours',
      'footer.tours.culinary': 'Culinary Journeys',
      'footer.tours.adventure': 'Adventure Tours',
      'footer.tours.luxury': 'Luxury Escapes',
      'footer.tours.solo': 'Solo Travel',
      'footer.tours.private': 'Private Groups',
      'footer.company.about': 'About ETC',
      'footer.company.guides': 'Our Guides',
      'footer.company.sustain': 'Sustainability',
      'footer.company.press': 'Press Room',
      'footer.company.careers': 'Careers',
      'footer.company.contact': 'Contact',
      'footer.legal': '© 2026 European Touristic Company Ltd. Registered in England & Wales. ATOL 12345 · ABTA W9823.',
      'footer.privacy': 'Privacy Policy',
      'footer.terms': 'Terms & Conditions',
      'footer.cookies': 'Cookie Policy',
      'footer.accessibility': 'Accessibility',
      'footer.all.dest': 'All Destinations',
    },

    /* ══════════════════════════════════════════════════════════════
       RUSSIAN
    ══════════════════════════════════════════════════════════════ */
    ru: {
      'meta.title': 'Европейская туристическая компания — Путешествия по Европе',
      'meta.desc': 'Европейская туристическая компания предлагает индивидуальные туры по Европе — от средиземноморских побережий до альпийских вершин и исторических городов. Опытные гиды. Незабываемые впечатления.',

      'nav.destinations': 'Направления',
      'nav.tours': 'Туры',
      'nav.experiences': 'Впечатления',
      'nav.about': 'О нас',
      'nav.contact': 'Контакты',
      'nav.planTrip': 'Планировать поездку',
      'nav.openMenu': 'Открыть меню',

      'hero.eyebrow': 'Осн. 1994 г. · Нам доверяют более 120 000 путешественников',
      'hero.title': 'Откройте Европу<br><em>по-своему</em>',
      'hero.subtitle': 'Эксклюзивные путешествия по самым знаковым ландшафтам, городам и скрытым сокровищам континента — созданные экспертами, для которых европейский туризм — это призвание.',
      'hero.cta.tours': 'Смотреть туры',
      'hero.cta.destinations': 'Все направления',
      'hero.stat.countries': 'Стран',
      'hero.stat.tours': 'Уникальных туров',
      'hero.stat.experience': 'Лет опыта',
      'hero.scroll': 'Прокрутить',

      'dest.eyebrow': 'Куда мы едем',
      'dest.title': 'Знаковые направления',
      'dest.sub': 'От античных руин до альпийских лугов — наша сеть охватывает весь континент.',
      'dest.viewAll': 'Все 47 направлений',
      'dest.explore': 'Подробнее',
      'dest.badge.popular': 'Хит продаж',
      'dest.badge.hidden': 'Скрытая жемчужина',
      'dest.tours.available': 'туров',

      'dest.italy.name': 'Италия',
      'dest.italy.desc': 'Вечные руины Рима, золотой свет Тосканы, лабиринты венецианских каналов — Италия восхищает каждое чувство.',
      'dest.italy.meta': '42 тура',
      'dest.italy.link': 'Италия →',
      'dest.france.name': 'Франция',
      'dest.france.desc': 'Париж, Прованс, замки долины Луары — Франция является путешествием сквозь лучшие страницы цивилизации.',
      'dest.france.meta': '36 туров',
      'dest.switzerland.name': 'Швейцария',
      'dest.switzerland.desc': 'Девственные альпийские вершины, озёра-зеркала и очаровательные шале в ландшафте захватывающей красоты.',
      'dest.switzerland.meta': '28 туров',
      'dest.greece.name': 'Греция',
      'dest.greece.desc': 'Белоснежные деревни Кикладских островов, сапфировые воды Эгейского моря и тысячелетия мифологии у ваших ног.',
      'dest.greece.meta': '31 тур',
      'dest.spain.name': 'Испания',
      'dest.spain.desc': 'Ритмы фламенко, мавританские дворцы, залитые солнцем сьерры и самобытная культура тапас в полном расцвете.',
      'dest.spain.meta': '38 туров',
      'dest.bulgaria.name': 'Болгария',
      'dest.bulgaria.desc': 'От заснеженных вершин Рилы до золотых берегов Чёрного моря — Болгария предлагает горнолыжные курорты, долины роз, древние крепости и мистические горячие источники в одной удивительной стране.',
      'dest.bulgaria.meta': '5 уникальных маршрутов',
      'dest.bulgaria.link': 'Болгария →',
      'dest.bansko.name': 'Банско',
      'dest.bansko.desc': 'Горнолыжные трассы мирового класса зимой и альпийские тропы среди полевых цветов летом. Лучший всесезонный горный курорт Болгарии.',
      'dest.bansko.meta': 'Горные лыжи и треккинг',
      'dest.melnik.name': 'Мелник',
      'dest.melnik.desc': 'Самый маленький город Болгарии, укрытый среди песчаниковых скал, с многовековыми винными погребами, где производят легендарную Широкую Мелнишскую Лозу.',
      'dest.melnik.meta': 'Вино и культура',
      'dest.rupite.name': 'Рупите',
      'dest.rupite.desc': 'Место тихого мистицизма — часовня, построенная по заказу Бабы Ванги, целебные минеральные горячие источники и вулканический холм Кожух у подножия горы Беласица.',
      'dest.rupite.meta': 'Оздоровление и мистика',
      'dest.varna.name': 'Варна',
      'dest.varna.desc': 'Жемчужина Чёрного моря — золотые пляжи, римские термы, великолепный собор и живая набережная, не засыпающая до рассвета.',
      'dest.varna.meta': 'Пляжи и история',
      'dest.vturnovo.name': 'Велико-Тырново',
      'dest.vturnovo.desc': 'Средневековая столица Второго Болгарского царства — крепость Царевец, мощёная мастеровая улица Самоводска Чаршия и живописные ущелья реки Янтра.',
      'dest.vturnovo.meta': 'Наследие и история',

      'tours.eyebrow': 'Наши маршруты',
      'tours.title': 'Избранные туры',
      'tours.sub': 'Тщательно проработанные маршруты, открывающие подлинную душу каждого направления.',
      'tours.viewAll': 'Все 320+ туров',
      'tours.filter.all': 'Все туры',
      'tours.filter.cultural': 'Культурные',
      'tours.filter.adventure': 'Приключения',
      'tours.filter.culinary': 'Гастрономия',
      'tours.filter.luxury': 'Люкс',
      'tours.filter.bulgaria': 'Болгария',
      'tours.book': 'Забронировать',
      'tours.from': 'от',
      'tours.pp': 'с человека',
      'tours.bulgaria.label': 'Болгарская коллекция',

      'tour.greece.title': 'Классическая Греция: из Афин в Дельфы',
      'tour.greece.desc': 'Пройдите по стопам Сократа и Перикла. Акрополь, оракул Дельф, руины Микен.',
      'tour.greece.duration': '12 дней',
      'tour.greece.location': 'Греция',
      'tour.burgundy.title': 'Бургундия: вино и гастрономия',
      'tour.burgundy.desc': 'Виноградники Premier Cru, рестораны со звёздами Мишлен, деревенские рынки и дегустации в погребах в самом сердце Бургундии.',
      'tour.burgundy.duration': '9 дней',
      'tour.burgundy.location': 'Франция',
      'tour.alps.title': 'Альпийский траверс: Маршрут Отра',
      'tour.alps.desc': 'Легендарный высокогорный маршрут от Шамони до Церматта — ледники, альпийские луга в цветах и горные приюты.',
      'tour.alps.duration': '14 дней',
      'tour.alps.location': 'Швейцария · Австрия',
      'tour.venice.title': 'Венеция и Венето с комфортом',
      'tour.venice.desc': 'Частные прогулки на гондоле, проживание во дворцах, эксклюзивное стеклодувное мастерство на Мурано и холмы Просекко на закате.',
      'tour.venice.duration': '10 дней',
      'tour.venice.location': 'Италия',
      'tour.nordic.title': 'Скандинавские фьорды и северное сияние',
      'tour.nordic.desc': 'Величественные пейзажи фьордов, наследие викингов и эфемерное чудо полярного сияния над Северным полярным кругом.',
      'tour.nordic.duration': '8 дней',
      'tour.nordic.location': 'Норвегия · Исландия',
      'tour.andalucia.title': 'Андалусия: мавританское наследие и тапас',
      'tour.andalucia.desc': 'Альгамбра в Гранаде, Мескита в Кордове, ночи фламенко в Севилье и лучший хамон иберико, который вы когда-либо пробовали.',
      'tour.andalucia.duration': '11 дней',
      'tour.andalucia.location': 'Испания',
      'tour.bansko.title': 'Горнолыжная неделя в Банско, Пирин',
      'tour.bansko.desc': 'Полный ски-пасс на 75 км трасс Пирина, горнолыжная школа, après-ski в традиционных механах и ночь в болгарском шале возрастом 300 лет.',
      'tour.bansko.duration': '7 дней',
      'tour.bansko.location': 'Банско, Болгария',
      'tour.hike.title': 'Треккинг по Пирину и Риле',
      'tour.hike.desc': 'Летний альпийский поход по лугам Пирина в цветах, ледниковым озёрам и вписанному в список ЮНЕСКО Рильскому монастырю в лесистом ущелье.',
      'tour.hike.duration': '6 дней',
      'tour.hike.location': 'Банско и Рила, Болгария',
      'tour.melnik.title': 'Мелник: вино и песчаниковые скалы',
      'tour.melnik.desc': 'Дегустации Широкой Мелнишской Лозы прямо у виноделов, экскурсия среди причудливых песчаниковых пирамид и праздник македонской кухни.',
      'tour.melnik.duration': '4 дня',
      'tour.melnik.location': 'Мелник и Сандански, Болгария',
      'tour.rupite.title': 'Рупите: наследие Ванги и горячие источники',
      'tour.rupite.desc': 'Посетите часовню, построенную по заказу самой Бабы Ванги, примите ванны в легендарных целебных минеральных источниках и исследуйте вулканический холм Кожух.',
      'tour.rupite.duration': '3 дня',
      'tour.rupite.location': 'Рупите, Болгария',
      'tour.varna.title': 'Варна и золотое черноморское побережье',
      'tour.varna.desc': 'Отдых на золотых пляжах, вечера у римских терм, великолепный собор Успения Пресвятой Богородицы и однодневные экскурсии в Несебыр — прибрежную жемчужину ЮНЕСКО.',
      'tour.varna.duration': '8 дней',
      'tour.varna.location': 'Варна и черноморское побережье, Болгария',
      'tour.vturnovo.title': 'Царевец и средневековое сердце Болгарии',
      'tour.vturnovo.desc': 'Старая столица Второго Болгарского царства — крепость Царевец, ежевечернее лазерное шоу «Звук и свет», мастера Самоводской Чаршии и ночь в восстановленной османской гостинице.',
      'tour.vturnovo.duration': '5 дней',
      'tour.vturnovo.location': 'Велико-Тырново, Болгария',

      'why.eyebrow': 'Наше преимущество',
      'why.title': 'Путешествие, каким оно должно быть',
      'why.1.title': '30 лет опыта',
      'why.1.text': 'Основанная в 1994 году, компания за три десятилетия выстроила глубокие отношения с местными гидами, бутик-отелями и культурными институтами по всей Европе.',
      'why.2.title': 'Гиды-эксперты на местах',
      'why.2.text': 'Каждый тур ведут сертифицированные, увлечённые гиды — уроженцы своего региона, открывающие вам истории, о которых не расскажет ни один путеводитель.',
      'why.3.title': 'Отборное размещение',
      'why.3.text': 'От тосканских ферм в загородных домах до отелей эпохи Белль Эпок — каждый объект лично проверяется на характер, комфорт и расположение.',
      'why.4.title': 'Только малые группы',
      'why.4.text': 'Не более 16 путешественников в туре. Никакого массового туризма — только камерный, неспешный опыт подлинного погружения в каждое место.',
      'why.5.title': 'Полная финансовая защита',
      'why.5.text': 'Все туры включают комплексную туристическую страховку, рейсы под защитой ATOL и круглосуточную поддержку консьержа — путешествуйте с полным спокойствием.',
      'why.6.title': 'Устойчивый туризм',
      'why.6.text': 'Мы компенсируем весь углеродный след туров, работаем исключительно с экосертифицированными поставщиками и направляем 2% от каждого бронирования на сохранение европейского наследия.',

      'testi.eyebrow': 'Истории гостей',
      'testi.title': 'Голоса с дороги',
      'testi.1.quote': '«Тур в Тоскану был просто преображающим. Наш гид Марко не просто показывал нам места — он открывал их. Мы вернулись другими людьми.»',
      'testi.1.name': 'Маргарет Р.',
      'testi.1.detail': 'Лондон, Великобритания · Тур по Италии',
      'testi.2.quote': '«Четырнадцать дней в Альпах вместили воспоминания на целую жизнь в самые прекрасные две недели в моей жизни. Организация от ETC — безупречная.»',
      'testi.2.name': 'Дэвид П.',
      'testi.2.detail': 'Торонто, Канада · Альпийский траверс',
      'testi.3.quote': '«Бургундский винный тур превзошёл все ожидания. Владельцы виноделен открыли свои погреба специально для нас. В одиночку такой доступ просто невозможен.»',
      'testi.3.name': 'Софи К.',
      'testi.3.detail': 'Сидней, Австралия · Бургундский тур',
      'testi.4.quote': '«Я пользовался услугами трёх других туроператоров по Европе. Ни один не сравнится с ETC по вниманию к деталям, качеству гидов и подлинности каждого опыта.»',
      'testi.4.name': 'Хенрик К.',
      'testi.4.detail': 'Стокгольм, Швеция · Тур по Греции',

      'about.eyebrow': 'Наша история',
      'about.title': 'Три десятилетия<br>европейской страсти',
      'about.p1': 'Европейская туристическая компания была основана в 1994 году на простом убеждении: лучший способ познать Европу — не торопливо пробежаться по достопримечательностям, а задержаться в деталях — в игре света на римской пьяцце на закате, в запахе прованского рынка на рассвете, в тишине альпийской долины в полдень.',
      'about.p2': 'Сегодня мы предлагаем более 320 маршрутов по 47 странам, каждый из которых создан в партнёрстве с местными экспертами, разделяющими наше убеждение: путешествие должно оставлять место и его людей лучше, чем оно их нашло.',
      'about.pillar1': 'Защита ATOL и ABTA',
      'about.pillar2': 'Сертификат B Corp',
      'about.pillar3': 'Победитель: Which? Travel Awards 2023',
      'about.pillar4': 'Член: Европейская туристическая ассоциация',
      'about.btn': 'Познакомьтесь с командой',

      'contact.eyebrow': 'Начните своё путешествие',
      'contact.title': 'Спланируем вашу<br>идеальную поездку',
      'contact.body': 'Поговорите с личным консультантом по туризму, который разработает маршрут с учётом ваших интересов, сроков и бюджета. Никаких обязательств — только отличные идеи.',
      'contact.phone': '+44 20 7946 0312',
      'contact.email': 'enquiries@europeantouristic.com',
      'contact.hours': 'Пн–Пт, 9:00 – 19:00 GMT',
      'form.firstName': 'Имя',
      'form.lastName': 'Фамилия',
      'form.email': 'Адрес электронной почты',
      'form.destination': 'Интересующее направление',
      'form.destination.default': 'Выберите направление…',
      'form.duration': 'Продолжительность тура',
      'form.duration.default': 'Любая…',
      'form.duration.1': 'До 7 дней',
      'form.duration.2': '8–14 дней',
      'form.duration.3': '15–21 день',
      'form.duration.4': '22+ дней',
      'form.groupSize': 'Размер группы',
      'form.groupSize.default': 'Выберите…',
      'form.groupSize.1': 'Соло',
      'form.groupSize.2': 'Пара (2 чел.)',
      'form.groupSize.3': 'Малая группа (3–6 чел.)',
      'form.groupSize.4': 'Большая группа (7+ чел.)',
      'form.message': 'Расскажите подробнее (необязательно)',
      'form.submit': 'Отправить запрос',
      'form.note': 'Мы отвечаем в течение одного рабочего дня. Ваши данные никогда не передаются третьим лицам.',
      'form.ph.firstName': 'Анна',
      'form.ph.lastName': 'Мюллер',
      'form.ph.email': 'anna@example.com',
      'form.ph.message': 'Интересы, даты, особые пожелания…',

      'footer.tagline': 'Создаём незабываемые путешествия по Европе с 1994 года.',
      'footer.dest.heading': 'Направления',
      'footer.tours.heading': 'Типы туров',
      'footer.company.heading': 'Компания',
      'footer.tours.cultural': 'Культурные туры',
      'footer.tours.culinary': 'Гастрономические туры',
      'footer.tours.adventure': 'Приключенческие туры',
      'footer.tours.luxury': 'Туры класса люкс',
      'footer.tours.solo': 'Путешествия соло',
      'footer.tours.private': 'Частные группы',
      'footer.company.about': 'О компании ETC',
      'footer.company.guides': 'Наши гиды',
      'footer.company.sustain': 'Устойчивое развитие',
      'footer.company.press': 'Пресс-центр',
      'footer.company.careers': 'Вакансии',
      'footer.company.contact': 'Контакты',
      'footer.legal': '© 2026 European Touristic Company Ltd. Зарегистрирована в Англии и Уэльсе. ATOL 12345 · ABTA W9823.',
      'footer.privacy': 'Политика конфиденциальности',
      'footer.terms': 'Условия и положения',
      'footer.cookies': 'Политика cookies',
      'footer.accessibility': 'Доступность',
      'footer.all.dest': 'Все направления',
    },

    /* ══════════════════════════════════════════════════════════════
       CHINESE (Simplified)
    ══════════════════════════════════════════════════════════════ */
    zh: {
      'meta.title': '欧洲旅游公司 — 精品欧洲旅行',
      'meta.desc': '欧洲旅游公司为您提供横跨欧洲的定制游览——从地中海海岸到阿尔卑斯山峰，再到历史名城。专业导游，终生难忘的旅行记忆。',

      'nav.destinations': '目的地',
      'nav.tours': '旅游线路',
      'nav.experiences': '旅行体验',
      'nav.about': '关于我们',
      'nav.contact': '联系我们',
      'nav.planTrip': '规划行程',
      'nav.openMenu': '打开菜单',

      'hero.eyebrow': '创立于1994年 · 逾12万名旅行者的信赖之选',
      'hero.title': '发现欧洲，<br><em>随心而行</em>',
      'hero.subtitle': '精心打造的旅行路线，带您探索欧洲大陆最具标志性的自然景观、历史名城与隐秘宝藏——由深耕欧洲旅游的专家倾心设计。',
      'hero.cta.tours': '探索旅游线路',
      'hero.cta.destinations': '浏览目的地',
      'hero.stat.countries': '个国家',
      'hero.stat.tours': '条独特线路',
      'hero.stat.experience': '年行业经验',
      'hero.scroll': '向下滚动',

      'dest.eyebrow': '我们的目的地',
      'dest.title': '经典目的地',
      'dest.sub': '从古老遗迹到阿尔卑斯草甸，我们的网络遍及欧洲大陆的每一个角落。',
      'dest.viewAll': '查看全部47个目的地',
      'dest.explore': '探索',
      'dest.badge.popular': '最受欢迎',
      'dest.badge.hidden': '隐秘瑰宝',
      'dest.tours.available': '条线路',

      'dest.italy.name': '意大利',
      'dest.italy.desc': '罗马永恒的废墟、托斯卡纳的金色光芒、威尼斯的迷宫水道——意大利令每一种感官都得到满足。',
      'dest.italy.meta': '42条线路',
      'dest.italy.link': '探索意大利 →',
      'dest.france.name': '法国',
      'dest.france.desc': '巴黎、普罗旺斯、卢瓦尔河谷的城堡群——法国是一段穿越人类文明最精彩篇章的旅程。',
      'dest.france.meta': '36条线路',
      'dest.switzerland.name': '瑞士',
      'dest.switzerland.desc': '纯净的阿尔卑斯山峰、如镜的湖泊与迷人的小木屋，共同构成令人屏息的自然画卷。',
      'dest.switzerland.meta': '28条线路',
      'dest.greece.name': '希腊',
      'dest.greece.desc': '白墙蓝顶的基克拉迪斯村落、蔚蓝的爱琴海与千年神话传说近在咫尺。',
      'dest.greece.meta': '31条线路',
      'dest.spain.name': '西班牙',
      'dest.spain.desc': '弗拉明戈的激情旋律、摩尔宫殿、阳光明媚的山地风光与最地道的塔帕斯文化。',
      'dest.spain.meta': '38条线路',
      'dest.bulgaria.name': '保加利亚',
      'dest.bulgaria.desc': '从里拉山积雪覆盖的山峰到黑海的金色海岸——保加利亚将滑雪胜地、玫瑰芬芳的山谷、古老堡垒与神秘温泉集于一身，令人叹为观止。',
      'dest.bulgaria.meta': '5条独特体验线路',
      'dest.bulgaria.link': '探索保加利亚 →',
      'dest.bansko.name': '班斯科',
      'dest.bansko.desc': '冬季享受世界级皮林山滑雪道，夏季漫步于野花盛开的高山草甸。保加利亚最佳四季山地度假胜地。',
      'dest.bansko.meta': '滑雪与登山徒步',
      'dest.melnik.name': '梅尔尼克',
      'dest.melnik.desc': '保加利亚最小的城镇，隐匿于壮观的砂岩锥群之间，拥有酿造传奇宽叶梅尔尼克葡萄酒的百年酒窖。',
      'dest.melnik.meta': '葡萄酒与文化',
      'dest.rupite.name': '鲁皮特',
      'dest.rupite.desc': '静谧神秘之地——由巴巴·万加亲自授命建造的小教堂、疗效卓著的矿泉温泉，以及贝拉西查山脚下的火山丘科朱赫。',
      'dest.rupite.meta': '养生与神秘探索',
      'dest.varna.name': '瓦尔纳',
      'dest.varna.desc': '黑海之珠——金色沙滩、罗马浴场、壮丽的大教堂，以及彻夜喧嚣的海滨长廊。',
      'dest.varna.meta': '海滩与历史',
      'dest.vturnovo.name': '大特尔诺沃',
      'dest.vturnovo.desc': '第二保加利亚帝国的中世纪首都——沙皇城堡、鹅卵石铺就的萨莫沃德斯卡集市与扬特拉河的峡谷风光。',
      'dest.vturnovo.meta': '历史遗产',

      'tours.eyebrow': '我们的旅程',
      'tours.title': '精选旅游线路',
      'tours.sub': '精心设计的行程方案，带您领略每个目的地的原汁原味。',
      'tours.viewAll': '查看全部320+条线路',
      'tours.filter.all': '全部线路',
      'tours.filter.cultural': '文化游',
      'tours.filter.adventure': '探险游',
      'tours.filter.culinary': '美食游',
      'tours.filter.luxury': '豪华游',
      'tours.filter.bulgaria': '保加利亚',
      'tours.book': '立即预订',
      'tours.from': '起价',
      'tours.pp': '每人',
      'tours.bulgaria.label': '保加利亚精选',

      'tour.greece.title': '古典希腊：从雅典到德尔菲',
      'tour.greece.desc': '追寻苏格拉底与伯里克利的足迹。雅典卫城、德尔菲神谕、迈锡尼古城遗址。',
      'tour.greece.duration': '12天',
      'tour.greece.location': '希腊',
      'tour.burgundy.title': '勃艮第葡萄酒与美食之旅',
      'tour.burgundy.desc': '特级园葡萄酒庄、米其林星级餐厅、乡村集市与酒窖品鉴，尽在勃艮第腹地。',
      'tour.burgundy.duration': '9天',
      'tour.burgundy.location': '法国',
      'tour.alps.title': '阿尔卑斯穿越：高山路线',
      'tour.alps.desc': '从霞慕尼到采尔马特的传奇高海拔路线——冰川、野花草甸与山间小屋。',
      'tour.alps.duration': '14天',
      'tour.alps.location': '瑞士 · 奥地利',
      'tour.venice.title': '尊享威尼斯与威内托',
      'tour.venice.desc': '私人贡多拉游览、宫殿级酒店住宿、穆拉诺岛独家玻璃吹制体验与日落时分的普罗塞克山丘。',
      'tour.venice.duration': '10天',
      'tour.venice.location': '意大利',
      'tour.nordic.title': '北欧峡湾与北极光',
      'tour.nordic.desc': '壮丽的峡湾风光、维京历史遗迹，以及极光在北极圈上空绽放的如梦如幻。',
      'tour.nordic.duration': '8天',
      'tour.nordic.location': '挪威 · 冰岛',
      'tour.andalucia.title': '安达卢西亚：摩尔遗产与塔帕斯',
      'tour.andalucia.desc': '格拉纳达的阿尔罕布拉宫、科尔多瓦的清真寺大教堂、塞维利亚的弗拉明戈之夜，以及您所能品尝到的最上乘伊比利亚火腿。',
      'tour.andalucia.duration': '11天',
      'tour.andalucia.location': '西班牙',
      'tour.bansko.title': '班斯科皮林山滑雪周',
      'tour.bansko.desc': '享有皮林山75公里滑道的全通行滑雪证、滑雪学校培训、在传统梅哈纳酒馆度过的après-ski，以及在300年历史的保加利亚木屋中入住一晚。',
      'tour.bansko.duration': '7天',
      'tour.bansko.location': '保加利亚班斯科',
      'tour.hike.title': '皮林山与里拉山高原徒步',
      'tour.hike.desc': '夏季高山徒步穿越皮林山野花草甸与冰川湖泊，探访列入联合国教科文组织遗产名录、深藏于山谷中的里拉修道院。',
      'tour.hike.duration': '6天',
      'tour.hike.location': '保加利亚班斯科与里拉',
      'tour.melnik.title': '梅尔尼克葡萄酒与砂岩地貌之旅',
      'tour.melnik.desc': '直接与酿酒师一同品鉴宽叶梅尔尼克葡萄酒、漫步奇异的砂岩锥群，并享用一顿丰盛的马其顿风味大餐。',
      'tour.melnik.duration': '4天',
      'tour.melnik.location': '保加利亚梅尔尼克与桑当斯基',
      'tour.rupite.title': '鲁皮特：万加遗产与温泉疗养',
      'tour.rupite.desc': '参观巴巴·万加亲自委托修建的小教堂，在传奇矿泉中沐浴疗养，探索贝拉西查山脚下的火山丘科朱赫。',
      'tour.rupite.duration': '3天',
      'tour.rupite.location': '保加利亚鲁皮特',
      'tour.varna.title': '瓦尔纳与黄金黑海海岸',
      'tour.varna.desc': '在金色沙滩上休闲度假，傍晚游览罗马浴场，欣赏壮美的圣母安息大教堂，并前往涅塞伯尔——联合国教科文组织认定的海岸瑰宝——进行一日游。',
      'tour.varna.duration': '8天',
      'tour.varna.location': '保加利亚瓦尔纳及黑海沿岸',
      'tour.vturnovo.title': '沙皇城堡与中世纪故都',
      'tour.vturnovo.desc': '第二保加利亚帝国故都——沙皇城堡、每晚上演的声光秀、萨莫沃德斯卡集市的传统工匠，以及在修缮一新的奥斯曼时代旅馆中住宿一晚。',
      'tour.vturnovo.duration': '5天',
      'tour.vturnovo.location': '保加利亚大特尔诺沃',

      'why.eyebrow': '我们的优势',
      'why.title': '旅行本应如此',
      'why.1.title': '30年专业积淀',
      'why.1.text': '公司创立于1994年，三十年来与欧洲各地的本地导游、精品酒店及文化机构建立了深厚的合作关系。',
      'why.2.title': '专业本地导游',
      'why.2.text': '每条线路均由持证上岗、热情专业的当地导游带领，他们是本地人，能为您讲述任何旅游手册都不曾记载的故事。',
      'why.3.title': '精挑细选的住宿',
      'why.3.text': '从托斯卡纳的乡村农庄改建酒店到美好年代风格的城市名宿——每一处住所均经过亲身考察，严格把关其风格特色、舒适度与地理位置。',
      'why.4.title': '严格限制小团出行',
      'why.4.text': '每团最多16名旅行者。拒绝流水线式旅游——只有亲密、从容的体验，让您真正与每个地方建立深刻连接。',
      'why.5.title': '全面的出行保障',
      'why.5.text': '所有线路均含综合旅行保险、ATOL保障机票及全天候礼宾服务——让您出行无后顾之忧。',
      'why.6.title': '可持续旅游实践',
      'why.6.text': '我们为所有线路的碳排放进行抵消，仅与获得生态认证的供应商合作，并将每笔预订收入的2%捐献给欧洲历史遗产保护事业。',

      'testi.eyebrow': '旅行者故事',
      'testi.title': '来自旅途的声音',
      'testi.1.quote': '"托斯卡纳之旅令我彻底改变。我们的导游马尔科不只是带我们看景点——他让我们与每个地方真正相遇。我们回来时，已是不同的人了。"',
      'testi.1.name': '玛格丽特·R.',
      'testi.1.detail': '英国伦敦 · 意大利线路',
      'testi.2.quote': '"在阿尔卑斯山的14天，仿佛将一生的记忆浓缩进了最美好的两周。ETC的行程安排无可挑剔。"',
      'testi.2.name': '大卫·P.',
      'testi.2.detail': '加拿大多伦多 · 阿尔卑斯穿越',
      'testi.3.quote': '"勃艮第葡萄酒之旅超出了我所有的预期。酒庄主人专门为我们开放了私人酒窖——这种体验靠自己游览根本不可能实现。"',
      'testi.3.name': '索菲·C.',
      'testi.3.detail': '澳大利亚悉尼 · 勃艮第葡萄酒之旅',
      'testi.4.quote': '"我曾使用过欧洲另外三家旅行社的服务，没有一家能与ETC相比——无论是对细节的关注、导游的专业素养，还是体验的真实性。"',
      'testi.4.name': '亨里克·K.',
      'testi.4.detail': '瑞典斯德哥尔摩 · 希腊线路',

      'about.eyebrow': '我们的故事',
      'about.title': '三十年的<br>欧洲情怀',
      'about.p1': '欧洲旅游公司于1994年诞生于一个朴素的信念：了解欧洲的最佳方式，不是匆匆掠过名胜，而是驻足于细节之中——黄昏时分罗马广场上的光影、普罗旺斯早市的气息、正午阿尔卑斯山谷的寂静。',
      'about.p2': '如今，我们运营着横跨47个国家的320余条旅游线路，每条线路均与当地专家合作设计。我们共同相信：旅行应该让一个地方——及其人民——因我们的到来而变得更好。',
      'about.pillar1': 'ATOL及ABTA认证保障',
      'about.pillar2': 'B Corp认证企业',
      'about.pillar3': '荣获Which?旅行奖2023',
      'about.pillar4': '欧洲旅游协会成员',
      'about.btn': '认识我们的团队',

      'contact.eyebrow': '开启您的旅程',
      'contact.title': '为您打造<br>完美的旅行',
      'contact.body': '与您的专属旅行顾问深入交流，他将根据您的兴趣、时间安排和预算，为您量身定制行程。无需承担任何义务——只有精彩的旅行灵感。',
      'contact.phone': '+44 20 7946 0312',
      'contact.email': 'enquiries@europeantouristic.com',
      'contact.hours': '周一至周五，9:00 – 19:00 GMT',
      'form.firstName': '名字',
      'form.lastName': '姓氏',
      'form.email': '电子邮件地址',
      'form.destination': '感兴趣的目的地',
      'form.destination.default': '请选择目的地…',
      'form.duration': '行程时长',
      'form.duration.default': '不限…',
      'form.duration.1': '7天及以内',
      'form.duration.2': '8至14天',
      'form.duration.3': '15至21天',
      'form.duration.4': '22天以上',
      'form.groupSize': '出行人数',
      'form.groupSize.default': '请选择…',
      'form.groupSize.1': '独自旅行',
      'form.groupSize.2': '情侣/双人（2人）',
      'form.groupSize.3': '小团（3–6人）',
      'form.groupSize.4': '较大团（7人以上）',
      'form.message': '补充说明（选填）',
      'form.submit': '提交咨询',
      'form.note': '我们将在一个工作日内回复。您的个人信息绝不会与第三方共享。',
      'form.ph.firstName': '安娜',
      'form.ph.lastName': '穆勒',
      'form.ph.email': 'anna@example.com',
      'form.ph.message': '兴趣爱好、出行日期、特殊需求…',

      'footer.tagline': '自1994年起，为您打造难忘的欧洲旅行。',
      'footer.dest.heading': '目的地',
      'footer.tours.heading': '线路类型',
      'footer.company.heading': '关于公司',
      'footer.tours.cultural': '文化游',
      'footer.tours.culinary': '美食之旅',
      'footer.tours.adventure': '探险游',
      'footer.tours.luxury': '豪华游',
      'footer.tours.solo': '独自旅行',
      'footer.tours.private': '私人团定制',
      'footer.company.about': '关于ETC',
      'footer.company.guides': '我们的导游',
      'footer.company.sustain': '可持续发展',
      'footer.company.press': '新闻中心',
      'footer.company.careers': '加入我们',
      'footer.company.contact': '联系我们',
      'footer.legal': '© 2026 European Touristic Company Ltd. 注册于英格兰及威尔士。ATOL 12345 · ABTA W9823。',
      'footer.privacy': '隐私政策',
      'footer.terms': '条款与条件',
      'footer.cookies': 'Cookie政策',
      'footer.accessibility': '无障碍访问',
      'footer.all.dest': '所有目的地',
    }
  };

  /* ─── Language detection & storage ───────────────────────────── */
  const SUPPORTED = ['en', 'ru', 'zh'];
  const DEFAULT_LANG = 'en';

  function detectLang() {
    // 1. URL param: ?lang=ru
    const param = new URLSearchParams(window.location.search).get('lang');
    if (param && SUPPORTED.includes(param)) return param;
    // 2. In-memory stored lang
    if (_storedLang && SUPPORTED.includes(_storedLang)) return _storedLang;
    // 3. Browser language
    const browser = (navigator.language || '').toLowerCase();
    if (browser.startsWith('ru')) return 'ru';
    if (browser.startsWith('zh')) return 'zh';
    return DEFAULT_LANG;
  }

  let _storedLang = null;
  let currentLang = detectLang();

  /* ─── Apply translations to DOM ──────────────────────────────── */
  function t(key, lang) {
    return T[lang][key] || T[DEFAULT_LANG][key] || key;
  }

  function applyLang(lang) {
    currentLang = lang;
    _storedLang = lang;

    // html lang attribute
    document.documentElement.lang = lang === 'zh' ? 'zh-Hans' : lang;

    // meta title & description
    document.title = t('meta.title', lang);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', t('meta.desc', lang));

    // data-i18n: textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = t(key, lang);
    });

    // data-i18n-html: innerHTML (for tags with <br>, <em>, &amp; etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      el.innerHTML = t(key, lang);
    });

    // data-i18n-placeholder: input/textarea placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = t(key, lang);
    });

    // data-i18n-aria: aria-label
    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria');
      el.setAttribute('aria-label', t(key, lang));
    });

    // Update active state on switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
    });

    // Chinese needs a different body font for best rendering
    document.body.classList.toggle('lang-zh', lang === 'zh');
  }

  /* ─── Language switcher UI injection ─────────────────────────── */
  function buildSwitcher() {
    const switcher = document.createElement('div');
    switcher.className = 'lang-switcher';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', 'Language selector');

    const langs = [
      { code: 'en', label: 'EN', title: 'English' },
      { code: 'ru', label: 'RU', title: 'Русский' },
      { code: 'zh', label: '中文', title: '中文（简体）' },
    ];

    langs.forEach(({ code, label, title }) => {
      const btn = document.createElement('button');
      btn.className = 'lang-btn';
      btn.dataset.lang = code;
      btn.textContent = label;
      btn.title = title;
      btn.setAttribute('aria-pressed', String(code === currentLang));
      btn.setAttribute('type', 'button');
      btn.addEventListener('click', () => applyLang(code));
      switcher.appendChild(btn);
    });

    return switcher;
  }

  /* ─── Initialise ─────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', () => {
    // Inject switcher into header actions
    const headerActions = document.querySelector('.header__actions');
    if (headerActions) {
      const switcher = buildSwitcher();
      // Insert before the theme toggle
      const themeToggle = headerActions.querySelector('[data-theme-toggle]');
      headerActions.insertBefore(switcher, themeToggle);
    }

    // Also inject a switcher into mobile nav
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
      const mobileSwitcher = buildSwitcher();
      mobileSwitcher.classList.add('lang-switcher--mobile');
      mobileNav.appendChild(mobileSwitcher);
    }

    // Apply current language (will update all data-i18n nodes)
    applyLang(currentLang);
  });

  // Expose globally for debugging
  window.ETC_i18n = { applyLang, currentLang: () => currentLang, T };

})();
