export const Navigation = [
    { 
        link: 'personal info', 
        icon: 'fluent:home-20-regular' 
    },
    { 
        link: 'obituary', 
        icon: 'fluent:book-open-20-regular' 
    },
    {     
        link: 'favorites', 
        icon: 'fluent:heart-20-regular'
    },
    {      
        link: 'timeline', 
        icon: 'fluent:timeline-20-regular'
    },
    {     
        link: 'gallery', 
        icon: 'fluent:image-20-regular'
    },
    { 
        link: 'family tree', 
        icon: 'fluent:list-bar-tree-offset-20-regular'
    },
]

export const PersonalInfo = {
    background: '/images/background_cropped.jpg',
    profile: '/images/profile.png',
    name: 'Michael Angelo Driz Dimla',
    birthDate: 'October 23, 1989',
    deathDate: 'April 2, 2025',
    placeOfBirth: 'Balanga City, Bataan',
}  

export const Obituary = [
    `Michael Angelo left us too soon on April 2, 2025, at the age of 35. Born on October 23, 1989, he was a cherished brother, a loyal friend, and a kind soul whose warmth and laughter brought light to those around him.
    <br /> <br />
    With a gentle heart and unwavering strength in difficult times, Michael shared deep love with his family and friends — a love that will forever be remembered. Though his journey ended early, the impact of his life continues to echo in the hearts of everyone he touched.
    Michael is survived by his loving family and dear friends who will continue to honor his memory.
    <br /> <br />
    He was the beloved fourth son of Agnes and Rolando Dimla, and a dear brother, friend, and companion.
    A talented basketball player, Michael’s passion for the game was matched only by his love for reggae music — a true reflection of his free spirit and love for life. His warmth, kindness, and joy will live on in every shared story and memory.`
]

export const Favorites = [
    {
        title: "What was Angelo's favorite Saying?",
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
    {
        title: "What was Angelo's favorite Saying?",
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
    {
        title: "What was Angelo's favorite Saying?",
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
    {
        title: "What was Angelo's favorite Saying?",
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
    {
        title: "What was Angelo's favorite Saying?",
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
    {
        title: "What was Angelo's favorite Saying?",
        content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
    },
]

export const Timeline = [
    {
        date: 'October 23, 1989',
        icon: 'healthicons:baby-0306m-outline' ,
        title: 'Birth in Balanga',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        date: 'October 23, 1989',
        icon: 'healthicons:death-alt2-outline' ,
        title: 'Birth in Balanga',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        date: 'October 23, 1989',
        icon: 'healthicons:death-alt2-outline' ,
        title: 'Birth in Balanga',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.n',
    },
    {
        date: 'October 23, 1989',
        icon: 'healthicons:death-alt2-outline' ,
        title: 'Birth in Balanga',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        date: 'April 02, 2025',
        icon: 'healthicons:death-alt2-outline',
        title: 'Passed away',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    }
]

export const FamilyTree = [
    {
        name: 'Rolando Dimla',
        gender: 'male',
        role: 'parents',
        birthdate: '10-9-1956',
        deathdate: '',
        isAlive: true,
        spouse:     
        {
            name: 'Agnes D. Dimla',
            gender: 'female',
            role: 'parents',
            birthdate: '11-21-1962',
            deathdate: '',
            isAlive: true,
            spouse: undefined,
            children: [
                
            ],
            profile_photo: '/images/agnes.jpg',
        },
        children: [
            {
                name: 'Allan D. Dimla',
                gender: 'male',
                role: 'child',
                birthdate: '6-29-1984',
                deathdate: '',
                isAlive: true,
                spouse:                    {
                    name: 'Liziel M. Dimla',
                    gender: 'female',
                    role: 'spouse',
                    birthdate: '12-15-1987',
                    deathdate: '',
                    isAlive: true,
                    spouse: undefined,
                    children: [],
                    profile_photo: '/images/liziel.jpg',
                },
                children: [
                    {
                        name: 'Carla Alieza M. Dimla',
                        gender: 'female',
                        role: 'grandchild',
                        birthdate: '1-17-2010',
                        deathdate: '',
                        isAlive: true,
                        spouse: undefined,
                        children: [],
                        profile_photo: '/images/carla.jpg',
                    },
                    {
                        name: 'Alliana Samantha M. Dimla',
                        gender: 'female',
                        role: 'grandchild',
                        birthdate: '10-28-2012',
                        deathdate: '',
                        isAlive: true,
                        spouse: undefined,
                        children: [],
                        profile_photo: '',
                    },
                    {
                        name: 'Allen Jaziel M. Dimla',
                        gender: 'female',
                        role: 'grandchild',
                        birthdate: '5-17-2022',
                        deathdate: '',
                        isAlive: true,
                        spouse: undefined,
                        children: [],
                        profile_photo: '/images/aj.jpg',
                    }
                ],
                profile_photo: '/images/allan.jpg',
            },
            {
                name: 'Anna Kristina D. Dimla',
                gender: 'female',
                role: 'child',
                birthdate: '9-11-1985',
                deathdate: '',
                isAlive: true,
                spouse:             
                {
                    name: 'Virgilio C. Paterno',
                    gender: 'male',
                    role: 'spouse',
                    birthdate: '2-3-1967',
                    deathdate: '',
                    isAlive: true,
                    spouse: undefined,
                    children: [],
                    profile_photo: '/images/gil2.jpg',
                },
                children: [],
                profile_photo: '/images/kristina.jpg',
            },
            {
                name: 'Anna Lea D. Dumenden',
                gender: 'female',
                role: 'child',
                birthdate: '7-23-1987',
                deathdate: '',
                isAlive: true,
                spouse: 
                {
                    name: 'Aristedes C. Dumenden',
                    gender: 'male',
                    role: 'spouse',
                    birthdate: '1-6-1962',
                    deathdate: '',
                    isAlive: true,
                    spouse: undefined,
                    children: [],
                    profile_photo: '',
                },
                children: [
                    {
                        name: 'Aerish Nicole D. Dumenden',
                        gender: 'female',
                        role: 'grandchild',
                        birthdate: '7-21-2009',
                        deathdate: '',
                        isAlive: true,
                        spouse: undefined,
                        children: [],
                        profile_photo: '/images/aerish.jpg',
                    },
                    {
                        name: 'Aerosh Prince D. Dumenden',
                        gender: 'male',
                        role: 'grandchild',
                        birthdate: '6-27-2015',
                        deathdate: '',
                        isAlive: true,
                        spouse: undefined,
                        children: [],
                        profile_photo: '/images/aerosh.jpg',
                    },
                ],
                profile_photo: '',
            },
            {
                name: 'Michael Angelo D. Dimla',
                gender: 'male',
                role: 'child',
                birthdate: '10-23-1989',
                deathdate: '4-2-2025',
                isAlive: false,
                spouse: undefined,
                children: [],
                profile_photo: '/images/profile.png',
            },
            {
                name: 'Rolando D. Dimla Jr.',
                gender: 'male',
                role: 'child',
                birthdate: '12-17-1993',
                deathdate: '',
                isAlive: true,
                spouse: 
                {
                    name: 'Kherlinn B. Almirañez',
                    gender: 'female',
                    role: 'spouse',
                    birthdate: '5-31-1997',
                    deathdate: '',
                    isAlive: true,
                    spouse: undefined,
                    children: [],
                    profile_photo: '/images/tin.jpg',
                },
                children: [
                    {
                        name: 'Reign Kherstof A. Dimla',
                        gender: 'male',
                        role: 'grandchild',
                        birthdate: '10-10-2014',
                        deathdate: '',
                        isAlive: true,
                        spouse: undefined,
                        children: [],
                        profile_photo: '/images/tonton.jpg',
                    },
                    {
                        name: 'Reign Kherstin A. Dimla',
                        gender: 'female',
                        role: 'grandchild',
                        birthdate: '11-18-2022',
                        deathdate: '',
                        isAlive: true,
                        spouse: undefined,
                        children: [],
                        profile_photo: '/images/tamtam.jpg',
                    },
                ],
                profile_photo: '/images/jr.jpg',
            },
            {
                name: 'Anna Patricia Angela D. Dimla',
                gender: 'female',
                role: 'child',
                birthdate: '9-11-1999',
                deathdate: '',
                isAlive: true,
                spouse: 
                {
                    name: 'John Mark R. Ruiz',
                    gender: 'male',
                    role: 'spouse',
                    birthdate: '12-7-1999',
                    deathdate: '',
                    isAlive: true,
                    spouse: undefined,
                    children: [],
                    profile_photo: '/images/jm.jpg',
                },
                children: [],
                profile_photo: '/images/angela.jpg',
            },
            {
                name: 'Christian Joseph D. Dimla',
                gender: 'male',
                role: 'child',
                birthdate: '12-27-2000',
                deathdate: '',
                isAlive: true,
                spouse: undefined,
                children: [],
                profile_photo: '/images/cj.png',
            },
        ],
        profile_photo: '',
    }
]