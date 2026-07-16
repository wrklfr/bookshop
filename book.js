const booksData = {
    'veliki': {
        id: 'veliki',
        title: 'Великий крестовый поход',
        author: 'Пол Уильям Андерсон',
        price: 349,
        oldPrice: 419,
        discount: '-17%',
        image: 'public/images/veliki.png',
        images: ['public/images/veliki.png', 'public/images/veliki2.png', 'public/images/veliki3.png']
    },
    '451': {
        id: '451',
        title: '451\' по Фаренгейту',
        author: 'Рэй Брэдбери',
        price: 649,
        oldPrice: 779,
        discount: '-17%',
        image: 'public/images/451.png',
        images: ['public/images/451.png', 'public/images/451.png', 'public/images/451.png']
    },
    'poklon': {
        id: 'poklon',
        title: 'Его прощальный поклон',
        author: 'Артур Конан Дойл',
        price: 349,
        oldPrice: 419,
        discount: '-17%',
        image: 'public/images/poklon.png',
        images: ['public/images/poklon.png', 'public/images/poklon.png', 'public/images/poklon.png']
    },
    'hizina': {
        id: 'hizina',
        title: 'Хижина дяди Тома',
        author: 'Гарриет Бичер-Стоу',
        price: 1249,
        oldPrice: 1499,
        discount: '-17%',
        image: 'public/images/hizina.png',
        images: ['public/images/hizina.png', 'public/images/hizina.png', 'public/images/hizina.png']
    },
    'tanc': {
        id: 'tanc',
        title: 'Танцовщица из Атлантиды',
        author: 'Пол Уильям Андерсон',
        price: 1249,
        oldPrice: 1499,
        discount: '-17%',
        image: 'public/images/tanc.png',
        images: ['public/images/tanc.png', 'public/images/tanc.png', 'public/images/tanc.png']
    },
    'velikigat': {
        id: 'velikigat',
        title: 'Великий Гэтсби',
        author: 'Френсис Скотт Фицджеральд',
        price: 309,
        oldPrice: 377,
        discount: '-17%',
        image: 'public/images/velikigat.png',
        images: ['public/images/velikigat.png', 'public/images/velikigat.png', 'public/images/velikigat.png']
    },
    'book-2': {
        id: 'book-2',
        title: 'Послемрак',
        author: 'Харуки Мураками',
        price: 679,
        oldPrice: 828,
        discount: '-18%',
        image: 'public/images/book-2.png',
        images: ['public/images/book-2.png', 'public/images/book-2.png', 'public/images/book-2.png', 'public/images/book-2.png']
    },
    '1984': {
        id: '1984',
        title: '1984',
        author: 'Джордж Оруэлл',
        price: 1199,
        oldPrice: 1439,
        discount: '-17%',
        image: 'public/images/1984.png',
        images: ['public/images/1984.png', 'public/images/1984.png']
    },
    'mim': {
        id: 'mim',
        title: 'Мастер и Маргарита',
        author: 'Михаил Булгаков',
        price: 1149,
        oldPrice: 1379,
        discount: '-16%',
        image: 'public/images/mim.png',
        images: ['public/images/mim.png', 'public/images/mim.png']
    },
    'pin': {
        id: 'pin',
        title: 'Преступление и наказание',
        author: 'Фёдор Достоевский',
        price: 339,
        oldPrice: 414,
        discount: '-18%',
        image: 'public/images/pin.png',
        images: ['public/images/pin.png', 'public/images/pin.png']
    },
    'duna': {
        id: 'duna',
        title: 'Дюна',
        author: 'Фрэнк Герберт',
        price: 1699,
        oldPrice: 2073,
        discount: '-18%',
        image: 'public/images/book-6.png',
        images: ['public/images/book-6.png', 'public/images/book-6.png']
    },
    'cveti': {
        id: 'cveti',
        title: 'Цветы для Элджернона',
        author: 'Дэниел Киз',
        price: 649,
        oldPrice: 792,
        discount: '-18%',
        image: 'public/images/cveti.png',
        images: ['public/images/cveti.png', 'public/images/cveti.png']
    },
    'shant': {
        id: 'shant',
        title: 'Шантарам',
        author: 'Грегори Дэвид Робертс',
        price: 1399,
        oldPrice: 1707,
        discount: '-18%',
        image: 'public/images/shant.png',
        images: ['public/images/shant.png', 'public/images/shant.png']
    },
    'igra': {
        id: 'igra',
        title: 'Игра престолов',
        author: 'Джордж Р.Р. Мартин',
        price: 949,
        oldPrice: 1158,
        discount: '-18%',
        image: 'public/images/igra.png',
        images: ['public/images/igra.png', 'public/images/igra.png']
    },
    'vostok': {
        id: 'vostok',
        title: 'К востоку от Эдема',
        author: 'Джон Стейнбек',
        price: 599,
        oldPrice: 731,
        discount: '-18%',
        image: 'public/images/vostok.png',
        images: ['public/images/vostok.png', 'public/images/vostok.png']
    },
    'mertvie': {
        id: 'mertvie',
        title: 'Мертвые души',
        author: 'Николай Гоголь',
        price: 960,
        oldPrice: 1200,
        discount: '-20%',
        image: 'public/images/book-4.png',
        images: ['public/images/book-4.png', 'public/images/book-4.png']
    },
    'roza': {
        id: 'roza',
        title: 'Роза Марена',
        author: 'Стивен Кинг',
        price: 850,
        oldPrice: 1000,
        discount: '-15%',
        image: 'public/images/book-1.png',
        images: ['public/images/book-1.png', 'public/images/book-1.png']
    },
    'front': {
        id: 'front',
        title: 'На западном фронте без перемен',
        author: 'Эрих Мария Ремарк',
        price: 738,
        oldPrice: 900,
        discount: '-18%',
        image: 'public/images/book-7.png',
        images: ['public/images/book-7.png', 'public/images/book-7.png']
    },
    'idiot': {
        id: 'idiot',
        title: 'Идиот',
        author: 'Фёдор Достоевский',
        price: 990,
        oldPrice: 1100,
        discount: '-10%',
        image: 'public/images/idiot.png',
        images: ['public/images/idiot.png', 'public/images/idiot.png']
    },
    'tri': {
        id: 'tri',
        title: 'Три товарища',
        author: 'Эрих Мария Ремарк',
        price: 849,
        oldPrice: 1036,
        discount: '-18%',
        image: 'public/images/tri.png',
        images: ['public/images/tri.png', 'public/images/tri.png']
    },
    'starik': {
        id: 'starik',
        title: 'Старик и море',
        author: 'Эрнест Хемингуэй',
        price: 279,
        oldPrice: 340,
        discount: '-18%',
        image: 'public/images/starik.png',
        images: ['public/images/starik.png', 'public/images/starik.png']
    },
    'portret': {
        id: 'portret',
        title: 'Портрет Дориана Грея',
        author: 'Оскар Уайльд',
        price: 649,
        oldPrice: 792,
        discount: '-18%',
        image: 'public/images/portret.png',
        images: ['public/images/portret.png', 'public/images/portret.png']
    },
    'bratya': {
        id: 'bratya',
        title: 'Братья Карамазовы',
        author: 'Фёдор Достоевский',
        price: 1249,
        oldPrice: 1524,
        discount: '-18%',
        image: 'public/images/bratya.png',
        images: ['public/images/bratya.png', 'public/images/bratya.png']
    },
    'vorzi': {
        id: 'vorzi',
        title: 'Над пропастью во ржи',
        author: 'Джером Сэлинджер',
        price: 499,
        oldPrice: 609,
        discount: '-18%',
        image: 'public/images/vorzi.png',
        images: ['public/images/vorzi.png', 'public/images/vorzi.png']
    },
    'klub': {
        id: 'klub',
        title: 'Клуб самоубийц',
        author: 'Роберт Льюис Стивенсон',
        price: 319,
        oldPrice: 383,
        discount: '-17%',
        image: 'public/images/klub.png',
        images: ['public/images/klub.png', 'public/images/klub.png']
    },
    'vor': {
        id: 'vor',
        title: 'Книжный вор',
        author: 'Маркус Зусак',
        price: 429,
        oldPrice: 523,
        discount: '-18%',
        image: 'public/images/vor.png',
        images: ['public/images/vor.png', 'public/images/vor.png']
    },
    'veter': {
        id: 'veter',
        title: 'Имя ветра',
        author: 'Патрик Ротфусс',
        price: 1259,
        oldPrice: 1559,
        discount: '-19%',
        image: 'public/images/veter.png',
        images: ['public/images/veter.png', 'public/images/veter.png']
    },
    'piknik': {
        id: 'piknik',
        title: 'Пикник на обочине',
        author: 'Аркадий и Борис Стругацкие',
        price: 389,
        oldPrice: 475,
        discount: '-18%',
        image: 'public/images/piknik.png',
        images: ['public/images/piknik.png', 'public/images/piknik.png']
    },
    'taina': {
        id: 'taina',
        title: 'Тайная история',
        author: 'Донна Тартт',
        price: 1499,
        oldPrice: 1829,
        discount: '-18%',
        image: 'public/images/taina.png',
        images: ['public/images/taina.png', 'public/images/taina.png']
    },
    'divni': {
        id: 'divni',
        title: 'О дивный новый мир',
        author: 'Олдос Хаксли',
        price: 429,
        oldPrice: 523,
        discount: '-18%',
        image: 'public/images/divni.png',
        images: ['public/images/divni.png', 'public/images/divni.png']
    }
};