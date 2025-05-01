
export interface PersonalInfoProp {
    id: string;
    personalInfo: {
        background: string;
        profile: string;
        name: string;
        birthDate: string;
        deathDate: string;
        placeOfBirth: string;
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
    title: string;
    content: string;
}

export interface FavoritesProp {
    id: string;
    favorites: FavoriteItem[];
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

export interface GalleryProp {    
    category: string;
    images: {
        url: string;
    }[]
}

export interface FamilyTreeProp {
    name: string;
    spouse: {
        name: string;
    }[];
    children: {
        name: string;
        spouse: {
            name: string;
        }[];
        children: {
            name: string;
        }[];
    }[];
}

export interface DataProp {
    personalInfos: PersonalInfoProp[];
    navigations: NavigationProp[];
    obituaries: ObituaryProp[];
    favorites: FavoritesProp[];
    // timelines: TimelineProp[];
    galleries: GalleryProp[];
    familyTrees: FamilyTreeProp[];
}

export interface CategoryProp {
    categories: string[];
}