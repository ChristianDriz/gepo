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
        title: 'The Beginning',
        description: `On this day, Michael Angelo 'Gepo' was born and brought joy to our family. A new journey began.`,
    },
    {
        date: 'October 23, 1989',
        icon: 'healthicons:death-alt2-outline' ,
        title: 'Birth in Balanga',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        date: 'April 08, 2002',
        icon: 'healthicons:death-alt2-outline' ,
        title: 'Elementary Graduation',
        description: 'Michael Angelo graduated from Balanga Elementary School. It was a proud moment for him and the whole family as he stepped into a new chapter of learning and growth.',
    },
    {
        date: 'April 08, 2002',
        icon: 'healthicons:death-alt2-outline' ,
        title: 'High School Graduation',
        description: 'Michael Angelo graduated from Balanga Elementary School. It was a proud moment for him and the whole family as he stepped into a new chapter of learning and growth.',
    },
    {
        date: 'January 27, 2023',
        icon: 'healthicons:death-alt2-outline' ,
        title: 'Health Turning Point',
        description: `On this day, Michael Angelo was diagnosed with Chronic Kidney Disease. It marked the beginning of a challenging journey that he faced with courage and resilience.`,
    },
    {
        date: 'April 02, 2025',
        icon: 'healthicons:death-alt2-outline',
        title: 'A Peaceful Farewell',
        description: 'On this day, Michael Angelo peacefully passed away. He left behind a legacy of love, resilience, and unforgettable memories. He may be gone, but he lives forever in our hearts.',
    }
]

export const FamilyTree = [
    {
        name: 'Rolando Dimla',
        gender: 'male',
        role: 'parents',
        birthdate: '1956-10-09',
        deathdate: '',
        isAlive: true,
        spouse:     
        {
            name: 'Agnes D. Dimla',
            gender: 'female',
            role: 'parents',
            birthdate: '1962-11-21',
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
                birthdate: '1984-06-29',
                deathdate: '',
                isAlive: true,
                spouse:                    {
                    name: 'Liziel M. Dimla',
                    gender: 'female',
                    role: 'spouse',
                    birthdate: '1987-12-15',
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
                        birthdate: '2010-01-17',
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
                        birthdate: '2011-10-28',
                        deathdate: '',
                        isAlive: true,
                        spouse: undefined,
                        children: [],
                        profile_photo: '/images/ging.jpg',
                    },
                    {
                        name: 'Allen Jaziel M. Dimla',
                        gender: 'female',
                        role: 'grandchild',
                        birthdate: '2022-05-17',
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
                birthdate: '1985-09-11',
                deathdate: '',
                isAlive: true,
                spouse:             
                {
                    name: 'Virgilio C. Paterno',
                    gender: 'male',
                    role: 'spouse',
                    birthdate: '1967-02-03',
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
                birthdate: '1987-07-23',
                deathdate: '',
                isAlive: true,
                spouse: 
                {
                    name: 'Aristedes C. Dumenden',
                    gender: 'male',
                    role: 'spouse',
                    birthdate: '1962-01-06',
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
                        birthdate: '2009-07-21',
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
                        birthdate: '2015-06-27',
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
                deathdate: '2025-04-02',
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
                    birthdate: '1997-05-31',
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
                        birthdate: '2014-10-10',
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
                        birthdate: '2022-11-18',
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
                birthdate: '1999-09-11',
                deathdate: '',
                isAlive: true,
                spouse: 
                {
                    name: 'John Mark R. Ruiz',
                    gender: 'male',
                    role: 'spouse',
                    birthdate: '1999-12-07',
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
                birthdate: '2000-12-27',
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