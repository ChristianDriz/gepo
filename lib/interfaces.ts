
export interface PersonalInfoProp {
    id: string;
    personalInfo: {
        background: string;
        profile: string;
        name: string;
        birthDate: string;
        deathDate: string;
        placeOfBirth: string;
        quote: string;
    }
}

export interface NavItemProp {
    link: string;
    icon: string;
}

export interface NavigationProp {
    navlinks: NavItemProp[];
}

export interface ObituaryProp {
    id: string;
    obituary: string[];
}

export interface FavoriteItem {
    type?: string;
    name: string;
    description: string;
    image?: string;
    artist?: string;
    src?: string;
    cover?: string;
}

export interface FavoritesProp {
    id: string;
    favorites:{
        food: FavoriteItem[];
        music: FavoriteItem[];
    };
}

export interface TimelineProp {
    id:string;
    timeline: {
        date: string;
        icon: string;
        title: string;
        description: string;
    }[]
}

export interface GalleryItemProp {
    category: string;
    medias: {
        url: string;
        mimeType: string;
    }[]
}

export interface GalleryProp {    
    id: string;
    galleries: GalleryItemProp[];
}

export interface PersonProp {
    name: string;
    gender: string;
    role: string;
    birthdate: string;
    deathdate?: string;
    isAlive: boolean;
    spouse?: PersonProp;
    children?: PersonProp[];
    profile_photo?: string;
}

export interface FamilyTreeProp {
    id: string;
    familyTree: PersonProp[];
}

// export interface DataProp {
//     navigation: NavItemProp[];
//     personalInfo: PersonalInfoProp['personalInfo'];
//     obituary: ObituaryProp['obituary'];
//     favorites: FavoriteItem[];
//     timeline: TimelineProp['timeline'];
//     galleries: GalleryItemProp[];
//     familyTree: PersonProp[];
// }

