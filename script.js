// --- DATA ---
const products = [
    // --- ROLLS (Холодные роллы) ---
    { id: 1, type: 'rolls', name: 'Дракон Зейна', price: 490, desc: 'Ледяной лосось, сливочный сыр, огурец и шапка из угря.', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600' },
    { id: 2, type: 'rolls', name: 'Огненный Кай', price: 450, desc: 'Острый тунец, спайси соус, тобико и перец чили.', img: 'https://md.ua/storage/editor/fotos/95ff7d268ebae27d935291be55e9660e.jpg' },
    { id: 3, type: 'rolls', name: 'Зеленый Ниндзя', price: 520, desc: 'Ролл в авокадо с креветкой темпура и манго соусом.', img: 'https://vipfish.ru/upload/webp/resize_cache/2c7/ynfe5559idpm6irm1vo0my2r9n0al7jb/700_538_0/freshrollskrevetkoyiavokado8.webp' },
    { id: 4, type: 'rolls', name: 'Тень Гармадона', price: 480, desc: 'Черный рис, краб, чернила каракатицы и трюфельное масло.', img: 'https://images.prom.ua/1039193873_1039193873.jpg?PIMAGE_ID=1039193873' },
    { id: 5, type: 'rolls', name: 'Золотое Оружие', price: 650, desc: 'Премиум ролл с гребешком, золотым напылением и икрой.', img: 'https://cdn.egersund.ua/e1732d83-88bf-4301-c635-9ada9bd46400/origin/origin' },
    { id: 6, type: 'rolls', name: 'Кружитцу Салмон', price: 470, desc: 'Лосось, авокадо, огурец, обернутый в нежный омлет тамаго.', img: 'https://roll-club.kh.ua/wp-content/uploads/2021/09/omlet-tamago.jpg' },
    { id: 7, type: 'rolls', name: 'Ния Волна', price: 430, desc: 'Креветка, чука, ореховый соус и кунжут.', img: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=600' },
    { id: 8, type: 'rolls', name: 'Мастер Ву Классик', price: 390, desc: 'Классическая Филадельфия с большим количеством сыра.', img: 'https://966.ua/upload/imagickAgent/detail/dc2/dc2d57cccd7939c68eb43928377517fb.jpeg2000' },
    { id: 9, type: 'rolls', name: 'Змеиный Клан', price: 410, desc: 'Угорь, огурец, унаги соус и хрустящий лук.', img: 'https://fishi.shop/__/images/menuProduct/685d5cd5314b0.webp' },
    { id: 10, type: 'rolls', name: 'Ледяной Сюрикен', price: 440, desc: 'Белая рыба, лимон, мята и сливочный сыр.', img: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600' },
    { id: 11, type: 'rolls', name: 'Техно-Клинок', price: 510, desc: 'Опаленный лосось, спайси краб, зеленый лук.', img: 'https://cdn-ru6.foodpicasso.com/assets/2024/09/13/8946a63511323564a8b10cd9b356fb32---jpg_1000x_103c0_convert.jpg' },
    { id: 12, type: 'rolls', name: 'Призрачный Коул', price: 460, desc: 'Прозрачная рисовая бумага, овощи, креветка.', img: 'https://cookhouse.ru/upload/iblock/745/745fb4123b5cc127e0dbc2292e7cceaa.jpg' },
    { id: 13, type: 'rolls', name: 'Самурай X', price: 490, desc: 'Красная икра, тунец, авокадо, рис.', img: 'https://i.evrasia.in.ua/data/1400_0/products/4gzjkmkd8kIM6fHOTy8uQxNOmEuKlMd483nUMu7s.webp' },
    { id: 14, type: 'rolls', name: 'Ллойд Энергия', price: 450, desc: 'Ролл в укропе, лосось терияки, огурец.', img: 'https://img.freepik.com/premium-photo/vegeterian-sushi-roll-with-dill-vegetables-isolated-white_93675-114078.jpg' },
    { id: 15, type: 'rolls', name: 'Пайтор', price: 420, desc: 'Фиолетовый рис (с черникой), сыр, краб.', img: 'https://ic.pics.livejournal.com/mysikmi/62618804/588742/588742_800.jpg' },
    { id: 16, type: 'rolls', name: 'Скайлор', price: 480, desc: 'Оранжевая масаго, креветка темпура, манго.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqRI5cDWR3_SSNX_usl4s5qiKDb3VsdKtZ2Q&s' },
    { id: 17, type: 'rolls', name: 'Ронин', price: 399, desc: 'Бюджетный ролл: крабовая палочка, майонез, огурец.', img: 'https://www.russianfood.com/dycontent/images_upl/605/big_604925.jpg' },
    { id: 18, type: 'rolls', name: 'Морро', price: 530, desc: 'Двойной угорь, трюфельный соус, авокадо.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPlZZGgtZyKeV0JOykAZCOftevHINr7ZLkRQ&s' },
    { id: 19, type: 'rolls', name: 'Дарет', price: 350, desc: 'Курица терияки, салат айсберг, кунжут.', img: 'https://sousvide.com.ua/uploads/images/news/Chroll1.jpg' },
    { id: 20, type: 'rolls', name: 'Храм Света', price: 500, desc: 'Гребешок, спайси соус, микрозелень.', img: 'https://spacesushi.moscow/__/images/menuProduct/68e5397eed944_w900_jpg.webp' },
    { id: 21, type: 'rolls', name: 'Ниндзяго Сити', price: 470, desc: 'Большой ролл с тремя видами рыбы.', img: 'https://roll-club.kh.ua/wp-content/uploads/2023/06/filadelfija-z-krevetkami-xl-900h600-900x600.jpg' },
    { id: 22, type: 'rolls', name: 'Оверлорд', price: 550, desc: 'Черная икра, тунец, острый перец.', img: 'https://roll-club.kh.ua/wp-content/uploads/2025/12/tuna-blek-900h600-900x600.jpg' },
    { id: 23, type: 'rolls', name: 'Дракон Молнии', price: 460, desc: 'Угорь, баклажан темпура, унаги.', img: 'https://mayamy.com.ua/image/cache/catalog/%20%D1%80%D0%BE%D0%BB%D0%BB%D1%8B/unagi-tempura-750x750.jpg' },
    { id: 24, type: 'rolls', name: 'Маки Кай', price: 200, desc: 'Простой ролл с тунцом.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVckU7QYbhdDVaosh6tRYS0EHh0Qhq6X2O-g&s' },
    { id: 25, type: 'rolls', name: 'Маки Зейн', price: 190, desc: 'Простой ролл с огурцом и кунжутом.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGOY2P2WLb3eZeUl9v21bRo5jvWlakGpnZRA&s' },
    { id: 26, type: 'rolls', name: 'Маки Ллойд', price: 220, desc: 'Простой ролл с авокадо.', img: 'https://lh3.googleusercontent.com/proxy/mWZCI8Vq7EvJQ3vkJH1m2cZR8Qa8AtCF3PKRgb7arHNAcGU2Ur70eK7C8bPTYZmFyTwI5CvyiQqJ8ujK0zx8kUayeprma_jADDk98YC-hXiX_Jc2TPnk3Kex9tmfiFtVmPyPrf4HRcIFAu4QbeUlbAAPymI74Cc' },
    { id: 27, type: 'rolls', name: 'Маки Коул', price: 250, desc: 'Простой ролл с угрем.', img: 'https://abokado.kyiv.ua/wp-content/uploads/2023/12/IMAGE-2023-12-18-001301.jpg' },

    // --- BAKED (Запеченные роллы) ---
    { id: 31, type: 'baked', name: 'Лава Коула', price: 390, desc: 'Запеченный ролл с мидиями и сырной шапкой, горячий как лава.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVY6XzAwY47GitSt0euDwY8v6cY13qjMbBIQ&s' },
    { id: 32, type: 'baked', name: 'Молния Джея', price: 410, desc: 'Запеченный с креветкой и острым васаби-соусом.', img: 'https://cdn.dostaevsky.ru/storage/dostaevsky/sushi-i-rolly/zapechennyjj-roll-s-krevetkojj-v-syrnom-souse-large-rectangular-39af7e5ba08c44b0a9fdd54074338bd6.jpeg' },
    { id: 33, type: 'baked', name: 'Мастер Ву', price: 380, desc: 'Классический запеченный с лососем и кунжутом.', img: 'https://vipfish.ru/upload/webp/resize_cache/008/ufmnrf3jtejct3zdd7ydcigg7v58lkm2/700_538_0/1prevyu.webp' },
    { id: 34, type: 'baked', name: 'Вулкан Гармадона', price: 420, desc: 'Острый краб, сыр чеддер, запеченный до корочки.', img: 'https://yapiko.ua/media/catalog/product/cache/90c631851bfc82ed3538a672fa9488bb/b/a/baked_with_crab_spicy_updated_photo.webp' },
    { id: 35, type: 'baked', name: 'Огненное Дыхание', price: 400, desc: 'Курица, бекон, спайси соус, пармезан.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi866dilFhQ4tF35mceyc7f50IeFPg4WME4A&s' },
    { id: 36, type: 'baked', name: 'Золотой Пик', price: 450, desc: 'Гребешок, икра масаго, белый соус.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMrDRL5PmcmUNeXL90ilsC_bYpqHFBujA62g&s' },
    { id: 37, type: 'baked', name: 'Темпура Кай', price: 380, desc: 'Полностью жареный ролл с тунцом.', img: 'https://kilogramm.com.ua/image/cache/catalog/marchenkonewmenu20.11.2024/roll/rolztuncemsmazhenijufritjurikg-800x800.jpg' },
    { id: 38, type: 'baked', name: 'Темпура Зейн', price: 370, desc: 'Полностью жареный ролл с лососем.', img: 'https://allolosos.com.ua/i/products/g4wSk4YUlG.jpg' },
    { id: 39, type: 'baked', name: 'Темпура Джей', price: 390, desc: 'Полностью жареный ролл с креветкой.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMmPOvQo2w6PKTGpA_abhFUgnttE7P6HAaQ&s' },
    { id: 40, type: 'baked', name: 'Сырный Ниндзя', price: 360, desc: 'Четыре вида сыра, запеченные под грилем.', img: 'https://rocosushi.com/uploads/products/805532faa37775733c31-%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D0%B9-%D0%BC%D1%96%D1%8F%D0%B3%D1%96.png' },
    { id: 41, type: 'baked', name: 'Дымный Спектр', price: 410, desc: 'Копченая курица, ананас, сырная шапка.', img: 'https://static.1000.menu/img/content-v2/23/1e/51757/zapechennye-kurinye-rolly-pod-syrnoi-shapochkoi_1607351205_17_max.jpg' },
    { id: 42, type: 'baked', name: 'Они Маска', price: 430, desc: 'Острые мидии, кимчи соус, кунжут.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxif0ffTOUJBLp82mPQUnQremObfOUSKo3Q&s' },
    { id: 43, type: 'baked', name: 'Запеченный Угорь', price: 480, desc: 'Угорь, сливочный сыр, унаги соус.', img: 'https://media-cdn.tripadvisor.com/media/photo-s/19/78/c8/0f/427.jpg' },
    { id: 44, type: 'baked', name: 'Калифорния Хот', price: 390, desc: 'Краб (сурими), авокадо, икра, запеченные.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ074yQK6J-zJXWYUeLi3bXQAzMLDzxhVBPVw&s' },
    { id: 45, type: 'baked', name: 'Филадельфия Гриль', price: 440, desc: 'Лосось гриль, сыр, огурец.', img: 'https://ecosushi.com.ua/wp-content/uploads/2025/03/losos-greel.webp' },
    { id: 46, type: 'baked', name: 'Красный Дракон', price: 460, desc: 'Тунец, перец халапеньо, сырный соус.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIrr5eiZ0Y0VlAG8yv2o68vO5ZGD8KalyIPQ&s' },
    { id: 47, type: 'baked', name: 'Зеленый Шторм', price: 400, desc: 'Окунь, песто соус, пармезан.', img: 'https://instafood.com.ua/images/shop_product_260/dzhersi-68ca8830917e8.png?1758103715' },
    { id: 48, type: 'baked', name: 'Мисако', price: 350, desc: 'Овощной запеченный ролл (грибы, перец).', img: 'https://roll-club.kh.ua/wp-content/uploads/2023/05/ovochevij-900h600.jpg' },
    { id: 49, type: 'baked', name: 'Мастер Чен', price: 415, desc: 'Креветка, бекон, чесночный соус.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgoP7fpvQfuTvtuD40Vfg28NFadFYerGq-vg&s' },
    { id: 50, type: 'baked', name: 'Небесный Пират', price: 425, desc: 'Кальмар, сыр моцарелла, майонез.', img: 'https://2b84737e-ff1f-4b4a-aa4b-896f3e6211c9.selcdn.net/product/62376362-6433-4062-a333-373834353235_696_466' },

    // --- SETS (Наборы) ---
    { id: 61, type: 'sets', name: 'Сет Четырех Стихий', price: 1800, desc: '1 кг удовольствия: Филадельфия, Калифорния, Запеченный краб, Маки.', img: 'https://sushitta.com.ua/image/cache/catalog//nomenclature_images/1731206/10766bf8-3db8-4a37-9414-94adc2dab32e_1-600x450.png' },
    { id: 62, type: 'sets', name: 'Турнир Стихий', price: 2500, desc: 'Гигантский сет для вечеринки. 64 кусочка.', img: 'https://www.zolotaja-rybka.ua/ru/wp-content/uploads/sites/3/2025/10/Set-Ribnij-miks.png' },
    { id: 63, type: 'sets', name: 'Сет Самурая X', price: 1400, desc: 'Только запеченные роллы для любителей горяченького.', img: 'https://i.evrasia.in.ua/data/1400_0/products/UXXJDgXC0vr7emIC1aAt1Xo8XvxlIpP7cGvsvMD0.webp' },
    { id: 64, type: 'sets', name: 'Братство Ниндзя', price: 1200, desc: 'Три топовых ролла: Кай, Джей, Зейн.', img: 'https://assets.dots.live/misteram-public/7eec79cf17d46556cb5011fee0639eb8-826x0.png' },
    { id: 65, type: 'sets', name: 'Великий Пожиратель', price: 3000, desc: '2 кг роллов! Хватит на всех злодеев и героев.', img: 'https://kyiv.sushiboss.od.ua/image/cache/webp/catalog/2025/%20%D1%81%D0%B2%D1%8F%D1%82-1000x1000-product_popup.webp' },
    { id: 66, type: 'sets', name: 'Ужин Гармадона', price: 1600, desc: 'Темные роллы, чернила каракатицы и запеченные мидии.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ84G91MtflqKo5pMDZXMcrxeoycMlxIbNyfg&s' },
    { id: 67, type: 'sets', name: 'Чайная Церемония', price: 900, desc: 'Легкий сет из маки-роллов и овощных роллов.', img: 'https://sushi-kuda-nado.com.ua/wp-content/uploads/2020/07/Set-Maki-dostavka-setov-v-Harkove.webp' },
    { id: 68, type: 'sets', name: 'Золотое Лезвие', price: 2100, desc: 'Премиум сет с угрем и лососем.', img: 'https://www.zolotaja-rybka.ua/ru/wp-content/uploads/sites/3/2025/10/Set-Ribnij-miks.png' },
    { id: 69, type: 'sets', name: 'Соло Ниндзя', price: 600, desc: 'Небольшой сет на одного: пол-ролла Филадельфии, суши.', img: 'https://roll-club.kh.ua/wp-content/uploads/2023/07/filadelfija-unagi-nov-900h600-3.jpg' },
    { id: 70, type: 'sets', name: 'Двойной Удар', price: 950, desc: 'Две Филадельфии по цене 1.5.', img: 'https://966.ua/upload/imagickAgent/detail/4cc/4cc46c45d97505609cfe17a610794b84.jpeg2000' },
    { id: 71, type: 'sets', name: 'Темпура Пати', price: 1500, desc: 'Ассорти из жареных роллов во фритюре.', img: 'https://омск.кушайсуши.рф/image/cache/catalog/gor-548x411.jpg' },
    { id: 72, type: 'sets', name: 'Они vs Драконы', price: 1900, desc: 'Половина острых роллов, половина нежных сливочных.', img: 'https://roll-club.kh.ua/wp-content/uploads/2021/02/novaya-volna-restoran.jpg' },
    { id: 73, type: 'sets', name: 'Лего Сет', price: 1300, desc: 'Квадратные роллы, удобно есть.', img: 'https://томмифиш.рф/__/images/menuProduct/6878f79a95f2c_w900_jpg.webp' },
    { id: 74, type: 'sets', name: 'Сет Скелетов', price: 1100, desc: 'Бюджетный хит: Калифорния, Краб, Овощной.', img: 'https://томмифиш.рф/__/images/menuProduct/687bb590c7a99_w900_jpg.webp' },
    { id: 75, type: 'sets', name: 'Остров Чена', price: 2400, desc: 'Экзотический сет с манго, авокадо и креветками.', img: 'https://i.evrasia.in.ua/data/1400_0/products/nNJGWVXe5IgdO7EWkAWkym9KCD2hgsl5bKsnKA9Z.webp' },
    { id: 76, type: 'sets', name: 'Первый Мастер Кружитцу', price: 3500, desc: 'Самый дорогой сет: гребешок, икра, угорь, краб.', img: 'https://golodnaya-utka.od.ua/image/cache/catalog/PIZZA/new2/MAX_1609%D1%80-1366x768.jpg' },
    { id: 78, type: 'sets', name: 'Сытый Коул', price: 1750, desc: 'Очень сытные роллы с беконом и сыром.', img: 'https://lefood.menu/wp-content/uploads/w_images/2023/06/recept-74076-1240x827.jpg' },
    { id: 82, type: 'sets', name: 'Филадельфия Love', price: 1350, desc: 'Три разных вида Филадельфии.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4jA7yOP0pbDpHQWvXsyTDbhtvSNboA9kIHg&s' },
    { id: 83, type: 'sets', name: 'Калифорния Dream', price: 1250, desc: 'Три разных вида Калифорнии.', img: 'https://online-sushi.com.ua/image/catalog/sushi-set-kaliforniya.jpg' },
    { id: 84, type: 'sets', name: 'Веган Сила', price: 1000, desc: 'Только овощные роллы и чука.', img: 'https://zori.ua/storage/item-files/505cfc33-ed7e-418a-9252-9bde2c60988b.jpg' },

    // --- WOK (Лапша и Рис) ---
    { id: 91, type: 'wok', name: 'Лапша Ниндзяго', price: 350, desc: 'Удон с курицей терияки и овощами.', img: 'https://i.ytimg.com/vi/mY4s4N-la3M/maxresdefault.jpg' },
    { id: 92, type: 'wok', name: 'Рис Скелетов', price: 320, desc: 'Рис с овощами и яйцом по-китайски.', img: 'https://i.ytimg.com/vi/iB2Ct547TtQ/maxresdefault.jpg' },
    { id: 93, type: 'wok', name: 'Пад-Тай Ллойда', price: 420, desc: 'Рисовая лапша с креветками, арахисом и лаймом.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9-vs5fZiNLz1BAjBFhvfmXf9gI2PQkhSlQ&s' },
    { id: 94, type: 'wok', name: 'Удон Гармадона', price: 380, desc: 'Толстая лапша в темном перечном соусе с говядиной.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6KccSDOK19K-oU7Yqeo6H-Lqcm2hpuLnZwA&s' },
    { id: 95, type: 'wok', name: 'Соба Мастера Ву', price: 360, desc: 'Гречневая лапша с грибами и кунжутом.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPdh-XIwaMQWxefI4BcwGpS1p7EVta8IRIQ&s' },
    { id: 96, type: 'wok', name: 'Огненный Рис', price: 340, desc: 'Острый рис с кимчи, курицей и яйцом.', img: 'https://i.redd.it/qbkgsddu0id61.jpg' },
    { id: 97, type: 'wok', name: 'Фунчоза Зейна', price: 390, desc: 'Стеклянная лапша с морепродуктами и овощами.', img: 'https://image.danilovskymarket.ru/w:656/h:440/aHR0cHM6Ly9iYWNrLmRhbmlsb3Zza3ltYXJrZXQucnUvZmlsZXMvZTM1ZWUyMDgtNGFhZi00NWU5LTliNTAtNTVmMGEzODJhMTlhJUQwJUExJUQxJTgyJUQwJUI1JUQwJUJBJUQwJUJCJUQxJThGJUQwJUJEJUQwJUJEJUQwJUIwJUQxJThGJTIwJUQwJUJCJUQwJUIwJUQwJUJGJUQxJTg4JUQwJUIwJTIwJUQxJTgxJTIwJUQwJUJDJUQwJUJFJUQxJTgwJUQwJUI1JUQwJUJGJUQxJTgwJUQwJUJFJUQwJUI0JUQxJTgzJUQwJUJBJUQxJTgyJUQwJUIwJUQwJUJDJUQwJUI4LmpwZw==' },
    { id: 98, type: 'wok', name: 'Лапша Чена', price: 330, desc: 'Яичная лапша с кисло-сладкой свининой.', img: 'https://i.ytimg.com/vi/2XNGKEAlg4s/maxresdefault.jpg' },
    { id: 100, type: 'wok', name: 'Веган Вок', price: 300, desc: 'Рисовая лапша, тофу, баклажан, брокколи.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTznT1XgO2Qq4TLKupeBhVBJu3Q_Poiojr8Q&s' },
    { id: 101, type: 'wok', name: 'Карри Коула', price: 410, desc: 'Рис с курицей в густом соусе карри.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqf_7uxhqPLhvKvOx93WfX61uFBlN10tGqrA&s' },
    { id: 102, type: 'wok', name: 'Рамен Ичираку', price: 450, desc: 'Наваристый суп-лапша со свининой и яйцом.', img: 'https://static.1000.menu/img/content/20453/-yaichnaya-lapsha-sup-s-yaichnoi-lapshoi_1494970801_1_max.jpg' },
    { id: 108, type: 'wok', name: 'Блэк Вок', price: 460, desc: 'Черная лапша с кальмаром и острым перцем.', img: 'https://ic.pics.livejournal.com/ladaland/25483575/239483/239483_original.jpg' },

    // --- DRINKS (Напитки) ---
    { id: 121, type: 'drinks', name: 'Чай Странника', price: 150, desc: 'Травяной чай с секретными ингредиентами.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-xCTNrU-dvvBSvZlzTHeiMN-ycr8wiyDJA&s' },
    { id: 122, type: 'drinks', name: 'Эликсир Скорости', price: 120, desc: 'Домашний лимонад с мятой и имбирем.', img: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=600' },
    { id: 123, type: 'drinks', name: 'Яд Пайтора', price: 180, desc: 'Зеленый смузи из киви и яблока (безопасен).', img: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=600' },
    { id: 124, type: 'drinks', name: 'Сила Земли', price: 160, desc: 'Шоколадный милкшейк с орео.', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600' },
    { id: 125, type: 'drinks', name: 'Огненный Фреш', price: 190, desc: 'Апельсин, грейпфрут и капля чили.', img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=600' },
    { id: 126, type: 'drinks', name: 'Ледяной Латте', price: 170, desc: 'Холодный кофе с кокосовым молоком.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDlDxqEWtmbP74zruFneT7k7gJe8aBx1o9Q&s' },
    { id: 127, type: 'drinks', name: 'Молния Кола', price: 100, desc: 'Классическая кола со льдом и лимоном.', img: 'https://swn.ru/upload/resize_cache/iblock/fe4/550_550_2/jyp52jfpqs7djenw4kh1mac0y7sa2zli.jpg' },
    { id: 128, type: 'drinks', name: 'Вода Нии', price: 80, desc: 'Минеральная вода с газом/без.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMHHob4D8mfvcZ9ggmiwpPBuC3fUT69kzKGg&s' },
    { id: 130, type: 'drinks', name: 'Матча Латте', price: 200, desc: 'Японский зеленый чай с молоком.', img: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600' },
    { id: 131, type: 'drinks', name: 'Ягодный Бум', price: 210, desc: 'Смузи из клубники, малины и черники.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2FLrX-fPm7R8OQsFHBv-wKibe2L0f67bHAQ&s' },
    { id: 132, type: 'drinks', name: 'Золотой Дракон', price: 250, desc: 'Лимонад с маракуйей и блестками.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPwwT0Nfw1mDzse5DEom69boe1WAZkkMkNag&s' },
    { id: 134, type: 'drinks', name: 'Красный Ниндзя', price: 160, desc: 'Клюквенный морс домашний.', img: 'https://images.samsung.com/is/image/samsung/assets/ru/cooking-hub/recipes/microwave-oven-solo/cranberry-juice/main_desktop.jpg' },
    { id: 135, type: 'drinks', name: 'Айс Ти', price: 110, desc: 'Холодный чай с персиком.', img: 'https://menunedeli.ru/wp-content/uploads/2017/07/holodnuy_chay_s_persikami-500x350.jpg' },
    { id: 136, type: 'drinks', name: 'Кокосовая Вода', price: 190, desc: 'Освежающая вода из молодого кокоса.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFV0A1K02Eam5f3kx3l8Sm1QycfG5u-qsAsA&s' },
    { id: 137, type: 'drinks', name: 'Банановый Шейк', price: 170, desc: 'Молочный коктейль с бананом.', img: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600' },
    { id: 142, type: 'drinks', name: 'Фанта', price: 100, desc: 'Апельсиновая газировка.', img: 'https://mrgrill.ua/storage/products/images/medium/bZtoaaFVQQUyFf4K4vYYnlecH3BBTllNI7B4nkih.jpg?v=1722513221' },
    { id: 143, type: 'drinks', name: 'Спрайт', price: 100, desc: 'Лимон-лайм газировка.', img: 'https://mrgrill.ua/storage/products/images/medium/h5a5L3k9Gefjl9hAhSirxIEuEfe86bV04gyteiUF.jpg?v=1722513312' },

    // --- SIDES (Закуски и Снеки) ---
    { id: 151, type: 'sides', name: 'Сюрикены Фри', price: 190, desc: 'Хрустящий картофель фри.', img: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?w=600' },
    { id: 152, type: 'sides', name: 'Кольца Они', price: 240, desc: 'Луковые кольца в кляре.', img: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=600' },
    { id: 153, type: 'sides', name: 'Креветки Темпура', price: 450, desc: 'Тигровые креветки в хрустящей панировке.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToekyXZIHObFLwyKMbj7hcxA8FuloiSDerbA&s' },
    { id: 154, type: 'sides', name: 'Эдамаме', price: 200, desc: 'Отварные бобы с морской солью.', img: 'https://png.pngtree.com/png-vector/20251222/ourmid/pngtree-delicious-steamed-edamame-with-sea-salt-in-a-ceramic-bowl-png-image_18292826.webp' },
    { id: 155, type: 'sides', name: 'Чука Салат', price: 250, desc: 'Водоросли с ореховым соусом.', img: 'https://966.ua/upload/imagickAgent/detail/634/634ec69cd75a02654e2eeca5084977fc.jpeg2000' },
    { id: 156, type: 'sides', name: 'Спринг-роллы Овощные', price: 280, desc: 'Хрустящие блинчики с овощами.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsdNByllf1iIxZneif4N2glaZaO9iwnU3pzA&s' },
    { id: 157, type: 'sides', name: 'Спринг-роллы Креветка', price: 350, desc: 'Хрустящие блинчики с морепродуктами.', img: 'https://cookhouse.ru/upload/iblock/745/745fb4123b5cc127e0dbc2292e7cceaa.jpg' },
    { id: 158, type: 'sides', name: 'Мидии Киви', price: 420, desc: 'Крупные мидии, запеченные под сыром (5 шт).', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_FETN54YeyDtkoUGWkfTjDnQTykbAfDqHPA&s' },
    { id: 159, type: 'sides', name: 'Куриные Крылья Кай', price: 380, desc: 'Острые крылышки в соусе шрирача.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLuD0VDxPX5bx0lA730ZucB0ytWjSceSueCA&s' },
    { id: 160, type: 'sides', name: 'Наггетсы', price: 220, desc: 'Куриное филе в панировке.', img: 'https://st3.depositphotos.com/3210553/15571/i/600/depositphotos_155715380-stock-photo-fried-crispy-chicken-nuggets-with.jpg' },
    { id: 161, type: 'sides', name: 'Кальмар Темпура', price: 290, desc: 'Кольца кальмара в кляре.', img: 'https://i.ytimg.com/vi/dwuLdoZdwos/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAdmiM68dF10Th7gusUd0n5x2tvWQ' },
    { id: 162, type: 'sides', name: 'Рисовые Чипсы', price: 150, desc: 'Воздушные чипсы со вкусом краба.', img: 'https://i.evrasia.in.ua/data/1400_0/products/IRlqOJNktszexFVsG0wyOJH5bZgCkm4XupJXo78F.webp' },
    { id: 163, type: 'sides', name: 'Сырные Палочки', price: 300, desc: 'Жареный сыр моцарелла с ягодным соусом.', img: 'https://papafood.com.ua/uploads/products/qups2jTDjv1J9PmnRVKdXfRIIVtiod2zTFLMESUk.png' },
    { id: 167, type: 'sides', name: 'Огурцы Битые', price: 190, desc: 'Острая закуска из огурцов с чесноком.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyAXOCzAQU6Vu2-mW_vhjXgYVyabi2JwzI4w&s' },
    { id: 168, type: 'sides', name: 'Кимчи', price: 180, desc: 'Ферментированная острая капуста.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CpGCH8pU0DsYLknn43_58sTdmgbavCqUdg&s' },
    { id: 169, type: 'sides', name: 'Кукуруза Гриль', price: 200, desc: 'Початок кукурузы с маслом и солью.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNVpm99gl8jTnq5Vsfcyz7inPsZzxx8hfwQ&s' },
    { id: 171, type: 'sides', name: 'Салат с Фунчозой', price: 320, desc: 'Холодный салат с лапшой и овощами.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeA6We6iuLqJXV2JJQQ0wVPdsN5B2WSBmnQA&s' },
    { id: 172, type: 'sides', name: 'Салат Цезарь (Азия)', price: 380, desc: 'С креветкой и кунжутной заправкой.', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVR9A27NbEwsFSa-wv7EyRPGzIywJMvMqiRQ&s' },
    { id: 174, type: 'sides', name: 'Шашлычок из Курицы', price: 210, desc: 'Якитори на шпажке (1 шт).', img: 'https://www.russianfood.com/dycontent/images_upl/420/big_419540.jpg' },
    { id: 175, type: 'sides', name: 'Шашлычок из Лосося', price: 350, desc: 'Якитори из рыбы (1 шт).', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvGE1q49Hx1gUJ_RDTsanUzOba7vpWE2O6w&s' },
    { id: 176, type: 'sides', name: 'Картофель по-деревенски', price: 200, desc: 'Дольки картофеля со специями.', img: 'https://www.russianfood.com/dycontent/images_upl/593/big_592041.jpg' },
    { id: 179, type: 'sides', name: 'Тофу Жареный', price: 240, desc: 'Тофу в соусе терияки.', img: 'https://i.ytimg.com/vi/szKyeDAIPts/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCLky0T7PTQl5WaMbGiONmcO-xxYQ' },
    { id: 180, type: 'sides', name: 'Чипсы Нори', price: 120, desc: 'Листы водорослей в темпуре.', img: 'https://images.prom.ua/5990902354_w1280_h640_5990902354.jpg' }
];

let cart = [];

// --- INIT ---
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
    renderMenu();
});

// --- RENDER MENU ---
const grid = document.getElementById('menu');

function renderMenu(filter = 'all') {
    grid.innerHTML = '';
    const items = filter === 'all' ? products : products.filter(p => p.type === filter);

    items.forEach((p, index) => {
        const card = document.createElement('div');
        card.className = 'card animate-in';
        card.style.animationDelay = `${index * 0.07}s`;

        card.onclick = (e) => {
            if (!e.target.closest('.add-mini-btn')) openModal(p.id);
        };

        card.innerHTML = `
                    <div class="card-img-wrap">
                        <img src="${p.img}" class="card-img" alt="${p.name}">
                    </div>
                    <div class="card-body">
                        <h3 class="card-title brand-font">${p.name}</h3>
                        <p class="card-desc">${p.desc}</p>
                        <div class="card-footer">
                            <span class="price">${p.price} <span>грн</span></span>
                            <button class="add-mini-btn" onclick="addToCart(${p.id})"><i class="fas fa-plus"></i></button>
                        </div>
                    </div>
                `;
        grid.appendChild(card);
    });
}

function filterProducts(type, btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderMenu(type);

    const menu = document.getElementById('menu');
    const offset = 140;
    const elementPosition = menu.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
    });

}

// --- MODAL ---
const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');

function openModal(id) {
    const p = products.find(i => i.id === id);

    modalContent.innerHTML = `
                <div class="modal-img-container">
                    <img src="${p.img}" alt="${p.name}">
                </div>
                <div class="modal-details">
                    <div class="modal-tags">
                        <span class="tag">${p.type}</span>
                        <span class="tag">Ninjago Special</span>
                    </div>
                    <h2 class="modal-title brand-font">${p.name}</h2>
                    <div class="modal-price">${p.price} грн</div>
                    <p class="modal-desc">${p.desc} <br><br> Блюдо приготовлено по секретным свиткам Первого Мастера Кружитцу. Восстанавливает силы и повышает боевой дух.</p>
                    <button class="modal-btn" onclick="addToCartAndClose(${p.id})">
                        <span>Добавить в свиток</span> <i class="fas fa-scroll"></i>
                    </button>
                </div>
            `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = 'auto';
}

function addToCartAndClose(id) {
    addToCart(id);
    closeModal();
}

// --- CART SYSTEM ---
const cartSidebar = document.getElementById('cartSidebar');
const cartBody = document.getElementById('cartBody');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

function toggleCart() {
    cartSidebar.classList.toggle('open');
}

function addToCart(id) {
    const item = products.find(p => p.id === id);
    const existing = cart.find(c => c.id === id);
    if (existing) existing.qty++;
    else cart.push({ ...item, qty: 1 });

    renderCart();
    animateCartIcon();
}


function removeFromCart(id) {
    cart = cart.filter(c => c.id !== id);
    renderCart();
}

function changeQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) removeFromCart(id);
        else renderCart();
    }
}

function renderCart() {
    cartBody.innerHTML = '';
    let total = 0;
    let count = 0;

    if (cart.length === 0) {
        cartBody.innerHTML = '<div style="text-align:center; color:#555; margin-top:50px;">Свиток пуст...</div>';
    }

    cart.forEach(item => {
        total += item.price * item.qty;
        count += item.qty;
        cartBody.innerHTML += `
                    <div class="cart-item-row">
                        <img src="${item.img}" class="cart-item-img">
                        <div style="flex:1;">
                            <div style="color:var(--ninja-gold); font-weight:bold; font-size:0.9rem;">${item.name}</div>
                            <div style="color:#777; font-size:0.8rem;">${item.price} грн</div>
                        </div>
                        <div style="display:flex; align-items:center; gap:10px;">
                            <button onclick="changeQty(${item.id}, -1)" style="background:#333; color:white; border:none; width:25px; height:25px; border-radius:4px; cursor:pointer;">-</button>
                            <span style="font-weight:bold;">${item.qty}</span>
                            <button onclick="changeQty(${item.id}, 1)" style="background:#333; color:white; border:none; width:25px; height:25px; border-radius:4px; cursor:pointer;">+</button>
                        </div>
                        <button onclick="removeFromCart(${item.id})" class="trash-btn" title="Удалить"><i class="fas fa-trash"></i></button>
                    </div>
                `;
    });

    cartTotal.innerText = total + ' грн';
    cartCount.innerText = count;

    cartCount.style.transform = 'scale(1.5)';
    setTimeout(() => cartCount.style.transform = 'scale(1)', 200);
}

function animateCartIcon() {
    const icon = document.querySelector('.cart-icon-wrap i');
    icon.style.color = '#fff';
    setTimeout(() => icon.style.color = '', 300);
}

function checkout() {
    if (cart.length === 0) return alert('Ваш свиток пуст, ниндзя!');
    alert('Заказ принят! Наши ниндзя уже бегут по крышам вашего города! (Демо-режим)');
    cart = [];
    renderCart();
    toggleCart();
}
