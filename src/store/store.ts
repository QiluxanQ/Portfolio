import aboutMePhoto from './../assets/about.jpg'
import Wrihle from './../assets/Whirl.png'
import logoCross from './../assets/logoCrosFit.png'
import crossFit from './../assets/market.png'
import authorization from './../assets/authorization.png'

const store = {
    en: {
        header: {
            title: 'About Me',
            topic: [
                {
                    info: 'Hi i`m Frontend developer with a passion for creating intuitive and performant web applications.\n' +
                        'I specialize in React and the modern JavaScript ecosystem. I love turning complex problems into elegant solutions.',
                },
                {
                    info: 'Frontend developer (React / TypeScript). I create interfaces that solve business problems: fast, ' +
                        'functional and scalable. Attention to detail and love for code are my key principles.',
                },
                {
                    info: 'Frontend developer and part-time React fan. My credo: clean code, thoughtful UI and' +
                        ' no unnecessary reloads. I take complex tasks and turn them into intuitive and fast interfaces that are pleasant to use.',
                },
            ],
            smile: '👋'
        },
        skills: {
            blockSkils: {
                title: 'My technology stack',
                technologies: [
                    {
                        name: 'HTML',
                        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
                    },
                    {
                        name: 'CSS',
                        image: 'https://images.seeklogo.com/logo-png/18/2/css3-logo-png_seeklogo-186678.png'
                    },
                    {
                        name: 'Less',
                        image: 'https://www.superbefilms.com/wp-content/uploads/2016/03/less-logo.png'
                    },
                    {
                        name: 'JavaScript',
                        image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png'
                    },
                    {
                        name: 'Typescript',
                        image: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png'
                    },
                    {
                        name: 'React',
                        image: 'https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png'
                    },
                    {
                        name: 'Redux',
                        image: 'https://img.icons8.com/ios_filled/512/7950F2/redux.png'
                    },
                    {
                        name: 'Git',
                        image: 'https://cdn.iconscout.com/icon/free/png-256/free-git-icon-svg-png-download-1175219.png?f=webp'
                    },
                    {
                        name: 'Materia UI',
                        image: 'https://svgmix.com/uploads/5b99f5-material-ui.svg'
                    },
                ],
                width: 150,
            },
        },
        menu: {
            title: 'Main',
            about: 'About',
            info: 'Project',
            social:'Social',
        },
        blocks: {
            technologiesBlock: [{
                name: 'JavaScript',
                description: 'JavaScript is a high-level, multi-paradigm programming language that conforms to the ECMAScript standard. It is primarily known as the programming language of the web, enabling dynamic and interactive content on websites. ',
                image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
            },
                {
                    name: 'Typescript',
                    description: 'TypeScript is a strongly typed superset of JavaScript that adds optional static typing, classes, and interfaces. Developed by Microsoft, it is open-source and transpiles to plain JavaScript, meaning it can run anywhere JavaScript runs',
                    image: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png',

                },
                {
                    name: 'React',
                    description: 'TypeScript is a strongly typed superset of JavaScript that adds optional static typing, classes, and interfaces. Developed by Microsoft, it is open-source and transpiles to plain JavaScript, meaning it can run anywhere JavaScript runs',
                    image: 'https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png',

                },
                {
                    name: 'Redux',
                    description: 'TypeScript is a strongly typed superset of JavaScript that adds optional static typing, classes, and interfaces. Developed by Microsoft, it is open-source and transpiles to plain JavaScript, meaning it can run anywhere JavaScript runs',
                    image: 'https://img.icons8.com/ios_filled/512/7950F2/redux.png',

                },
                {
                    name: 'Git',
                    description: 'TypeScript is a strongly typed superset of JavaScript that adds optional static typing, classes, and interfaces. Developed by Microsoft, it is open-source and transpiles to plain JavaScript, meaning it can run anywhere JavaScript runs',
                    image: 'https://cdn.iconscout.com/icon/free/png-256/free-git-icon-svg-png-download-1175219.png?f=webp',

                },

            ],
            width: 200,
            height: 200,
        },
        aboutMePhoto: {
            img: aboutMePhoto,
        },
        aboutMe: [

            {
                topic: 'Education',
                description: 'I have a diploma as a programmer technician from the Molodechno Trade and Economic College. I form my ' +
                    'main expertise in web development through self-education: ' +
                    'I study modern technologies (React, JavaScript/TypeScript), practice creating real projects and constantly improve my skills.',
                date: '2021-2023',
            },
            {
                topic: 'Army',
                description: 'Completed compulsory military service. This experience taught me discipline, responsibility and the ability ' +
                    'to work in a team to achieve common goals under tight deadlines and high workload.' +
                    ' I successfully apply the stress-resistance and problem-solving skills I learned there in development.',
                date: '2023-2025'
            },
            {
                topic: 'Path in development',
                description: 'Frontend development is a mix of constant practice ' +
                    ' (Codewars, personal projects) and studying materials: I watch conferences, read blogs of leading developers, look at the current technology stack.',
                date: '2021 - To date',
            },
            {
                topic: 'My goals',
                description: 'I am aiming for the position of Junior Frontend Developer, where I can apply my skills on real projects, work in a team of experienced' +
                    ' colleagues and actively grow as a specialist.' +
                    ' In the long term, I want to become a full-fledged React developer, delve into the architecture and development of complex high-load applications',
                date: ''
            },
            {
                topic: 'Technologies',
                description: 'In my work I use: React, JavaScript, TypeScript, HTML5, CSS3, Git. I am familiar with the concepts of REST API,' +
                    ' state management (Zustand), builders (Vite) and principles of adaptive and cross-browser layout. I plan to study Next.js and Node.js.',
                date: ''
            },
        ],
        progects: {
            topic: {
                topic: 'Progects'
            },
            blockProgects: [
                {
                    id: 1,
                    name: 'CrossFit',
                    images: logoCross,
                    screenshots:[crossFit]
                },
                {
                    id: 2,
                    name: 'Таро',
                    images: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/38/0e9d9464821e00d1bd5276e3900060f7423df3c1-1689276862.webp',
                    screenshots:['https://cdn-edge.kwork.ru/files/portfolio/t0_r/08/b1f42abe5c420308cc31b012a37d549cc1d4511b-1689276862.webp',
                        'https://cdn-edge.kwork.ru/files/portfolio/t0_r/50/00bd90dd5704e6e282a45e0d8b84fe4613955b32-1689276864.webp',
                        'https://cdn-edge.kwork.ru/files/portfolio/t0_r/19/ddbd152f2223d39b628c6dc3f400797b4f05fcec-1689276864.webp',
                    'https://cdn-edge.kwork.ru/files/portfolio/t0_r/87/295a7a5b087fbb36347bf0ec0abd8addd2336546-1689276865.webp'
                    ]
                },
                {
                    id: 3,
                    name: 'Wrihle',
                    images: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/85/f4973606738ff66494295185903cae7f04b511d6-1754386885.webp',
                    screenshots:[Wrihle]
                },
                {
                    id: 4,
                    name: 'Autorization',
                    images: authorization,
                    screenshots:[authorization]
                },
            ],
            width: 570,

        },
        socialc: {
            media: [
                {
                logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png',
                links: 'https://t.me/QilasQ',

            },
                {
                    logo:'https://static.vecteezy.com/system/resources/previews/023/986/568/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png',
                    links:'https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B2-368263226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                },
                {
                    logo:'https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png',
                    links:'https://github.com/QiluxanQ',
                },
            ],
            width: 50
        },
    },
    ru: {
        header: {
            title: 'О себе',
            topic: [
                {
                    info: 'Привет, я фронтенд-разработчик, увлеченный созданием интуитивно понятных и производительных веб-приложений.\n' +
                        'Я специализируюсь на React и современной экосистеме JavaScript. Мне нравится превращать сложные проблемы в элегантные решения.',
                },
                {
                    info: 'Frontend-разработчик (React / TypeScript). Создаю интерфейсы, которые решают бизнес-задачи: ' +
                        'быстрые, функциональные и масштабируемые. Внимание к деталям и любовь к коду — мои ключевые принципы.',
                },
                {
                    info: 'Фронтенд-разработчик и по совместительству фанат React. Мое кредо: чистый код, продуманный UI и' +
                        ' никаких лишних перезагрузок. Беру сложные задачи и превращаю их в интуитивные и быстрые интерфейсы, которые приятно использовать.',
                },
            ],
            smile: '👋'
        },
        skills: {
            blockSkils: {
                title: 'Мой стек технологий',
                technologies: [
                    {
                        name: 'HTML',
                        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png'
                    },
                    {
                        name: 'CSS',
                        image: 'https://images.seeklogo.com/logo-png/18/2/css3-logo-png_seeklogo-186678.png'
                    },
                    {
                        name: 'Less',
                        image: 'https://www.superbefilms.com/wp-content/uploads/2016/03/less-logo.png'
                    },
                    {
                        name: 'JavaScript',
                        image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png'
                    },
                    {
                        name: 'Typescript',
                        image: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png'
                    },
                    {
                        name: 'React',
                        image: 'https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png'
                    },
                    {
                        name: 'Redux',
                        image: 'https://img.icons8.com/ios_filled/512/7950F2/redux.png'
                    },
                    {
                        name: 'Git',
                        image: 'https://cdn.iconscout.com/icon/free/png-256/free-git-icon-svg-png-download-1175219.png?f=webp'
                    },
                    {
                        name: 'Materia UI',
                        image: 'https://svgmix.com/uploads/5b99f5-material-ui.svg'
                    },

                ],
                width: 150,

            },
        },
        menu: {
            title: 'Основная',
            about: 'Обо мне',
            info: 'Проекты',
            social:'Соц сети',
        },
        blocks: {
            technologiesBlock: [{
                name: 'JavaScript',
                description: 'JavaScript — это высокоуровневый многопарадигменный язык программирования, соответствующий стандарту ECMAScript. Он известен прежде всего как язык веб-программирования, позволяющий создавать динамический и интерактивный контент на веб-сайтах. ',
                image: 'https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png',
            },
                {
                    name: 'Typescript',
                    description: 'TypeScript — это строго типизированное надмножество JavaScript, которое добавляет опциональную статическую типизацию, классы и интерфейсы. Разработанный Microsoft, он имеет открытый исходный код и транспилируется в обычный JavaScript, то есть может работать везде, где работает JavaScript.',
                    image: 'https://icons.veryicon.com/png/o/business/vscode-program-item-icon/typescript-def.png',

                },
                {
                    name: 'React',
                    description: 'React — это библиотека JavaScript с открытым исходным кодом, разработанная Facebook, для создания пользовательских интерфейсов (UI) веб-приложений. Она позволяет разработчикам создавать интерактивные и динамичные интерфейсы с помощью переиспользуемых компонентов, повышая скорость разработки и поддерживая масштабируемость приложений',
                    image: 'https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png',

                },
                {
                    name: 'Redux',
                    description: 'Redux — это JavaScript-библиотека с открытым исходным кодом для управления состоянием приложений. Она предоставляет централизованное хранилище (store) для всех данных, а изменение состояния происходит предсказуемо с помощью actions (действий) и reducers (чистых функций).',
                    image: 'https://img.icons8.com/ios_filled/512/7950F2/redux.png',

                },
                {
                    name: 'Git',
                    description: 'Git — это распределённая система управления версиями, созданная Линусом Торвальдсом для отслеживания изменений в файлах проекта, позволяющая команде разработчиков работать совместно и возвращаться к предыдущим состояниям кода при необходимости',
                    image: 'https://cdn.iconscout.com/icon/free/png-256/free-git-icon-svg-png-download-1175219.png?f=webp',

                },
            ],
            width: 200,
            height: 200,
        },
        aboutMePhoto: {
            img: aboutMePhoto,
        },
        aboutMe: [
            {
                topic: 'Оброзования',
                description: 'Имею диплом техника-программиста Молодечненского торгово-экономического колледжа. Основную экспертизу в веб-разработке формирую через' +
                    ' самообразование: изучаю современные технологии ' +
                    '(React, JavaScript/TypeScript), практикуюсь в создаении реальных проектов и постоянно совершенствую свои навыки.',
                date: '2021-2023',
            },
            {
                topic: 'Армия',
                description: 'Прошел срочную военную службу. Этот опыт научил меня дисциплине, ответственности и умению работать в команде для достижения общих целей в ' +
                    'условиях сжатых сроков и высокой нагрузки. Навыки стрессоустойчивости и решения нестандартных задач, полученные там, я успешно применяю и в разработке.',
                date: '2023-2025'
            },
            {
                topic: 'Путь в разработке',
                description: 'Развитие во фронтенде — это микс из постоянной практики ' +
                    '(Codewars, личные проекты) и изучения материалов: смотрю конференции, читаю блоги ведущих разработчиков, смотрю об актуальном стеке технологий.',
                date: '2021 - По настоящее время',
            },
            {
                topic: 'Мои цели',
                description: 'Стремлюсь к позиции Junior Frontend-разработчика, где смогу применять свои навыки на реальных проектах, работать в' +
                    ' команде опытных коллег и активно расти как специалист. В долгосрочной перспективе хочу стать полноценным React-разработчиком,' +
                    ' углубиться в архитектуру и разработку сложных высоконагруженных приложений.',
                date: ''
            },
            {
                topic: 'Технологии',
                description: 'В своей работе использую: React, JavaScript, TypeScript, HTML5, CSS3, Git. Ознакомлен с концепциями REST API, state-менеджмента (Zustand), сборщиками (Vite) и принципами адаптивной и кроссбраузерной верстки. В планах изучение Next.js и Node.js.',
                date: ''
            }
        ],
        progects: {
            topic: {
                topic: 'Progects'
            },
            blockProgects: [
                {
                    id: 1,
                    name: 'CrossFit',
                    images: logoCross,
                    screenshots:[crossFit]
                },
                {
                    id: 2,
                    name: 'Таро',
                    images: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/38/0e9d9464821e00d1bd5276e3900060f7423df3c1-1689276862.webp',
                    screenshots:['https://cdn-edge.kwork.ru/files/portfolio/t0_r/08/b1f42abe5c420308cc31b012a37d549cc1d4511b-1689276862.webp',
                        'https://cdn-edge.kwork.ru/files/portfolio/t0_r/50/00bd90dd5704e6e282a45e0d8b84fe4613955b32-1689276864.webp',
                        'https://cdn-edge.kwork.ru/files/portfolio/t0_r/19/ddbd152f2223d39b628c6dc3f400797b4f05fcec-1689276864.webp',
                        'https://cdn-edge.kwork.ru/files/portfolio/t0_r/87/295a7a5b087fbb36347bf0ec0abd8addd2336546-1689276865.webp'
                    ]
                },
                {
                    id: 3,
                    name: 'Wrihle',
                    images: 'https://cdn-edge.kwork.ru/files/portfolio/t0_r/85/f4973606738ff66494295185903cae7f04b511d6-1754386885.webp',
                    screenshots:[Wrihle]
                },
                {
                    id: 4,
                    name: 'Autorization',
                    images: authorization,
                    screenshots:[authorization]
                },
            ],
            width: 570
        },
        socialc: {
            media: [
                {
                    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/2048px-Telegram_2019_Logo.svg.png',
                    links: 'https://t.me/QilasQ',

                },
                {
                    logo:'https://static.vecteezy.com/system/resources/previews/023/986/568/non_2x/linkedin-logo-linkedin-logo-transparent-linkedin-icon-transparent-free-free-png.png',
                    links:'https://www.linkedin.com/in/%D0%B8%D0%BB%D1%8C%D1%8F-%D0%B1%D0%B5%D0%BB%D0%BE%D0%B2-368263226?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
                },
                {
                    logo:'https://images.icon-icons.com/3685/PNG/512/github_logo_icon_229278.png',
                    links:'https://github.com/QiluxanQ',
                },
            ],
            width: 50
        },
    }
}

export default store;