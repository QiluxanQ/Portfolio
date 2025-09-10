import aboutMePhoto from './../assets/about.jpg'

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
            info: 'Information',
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
        aboutMePhoto:{
            img:aboutMePhoto,
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
            topic:{
                topic: 'Progects'
            },
            blockProgects:[
                {
                    name: 'Клиника',
                    images:'https://cdn-edge.kwork.ru/files/portfolio/t0_r/96/5ff509a75e3bfd0be9a01c863ba31d26ed4834fa-1689276527.webp',
                },
                {
                    name: 'Клиника',
                    images:'https://cdn-edge.kwork.ru/files/portfolio/t0_r/96/5ff509a75e3bfd0be9a01c863ba31d26ed4834fa-1689276527.webp',
                },
                {
                    name: 'Клиника',
                    images:'https://cdn-edge.kwork.ru/files/portfolio/t0_r/96/5ff509a75e3bfd0be9a01c863ba31d26ed4834fa-1689276527.webp',
                }

            ],
            width:570
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
            info: 'Информация',
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
        aboutMePhoto:{
            img:aboutMePhoto,
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
            topic:{
                topic: 'Education'
            },
            blockProgects:[
                {
                    name: 'Клиника',
                    images:'https://cdn-edge.kwork.ru/files/portfolio/t1/19/cover-10644665-1693424061.jpg',
                }
            ],
            width:40
        },
    }
}

export default store;