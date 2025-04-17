import { gql, GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.NEXT_HYGRAPH_API!, {
    headers: {
        Authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`,
    },
});

interface PersonProp {
    fullName: string;
    birthDate: Date;
    deathDate: Date;
    placeOfBirth: string;
    profilePhoto: {
        url: string;
    }
    backgroundPhoto: {
        url: string;
    }
}

export interface PersonalInfo {
    personalInfos: PersonProp[]
}

export async function getPersonalInfo(): Promise<PersonalInfo> {
    const query = gql`
        query MyQuery {
            personalInfos {
                fullName
                birthDate
                deathDate
                placeOfBirth
                profilePhoto {
                    url
                }
                backgroundPhoto {
                    url
                }
            }
        }`;
    return await client.request<PersonalInfo>(query);
}

export interface ObituaryProp {
    slug: string;
    obituaryDetails: {
        html: string;
    }
}

export interface FavoritesProp {
    slug: string;
}

export interface TimelineProp {
    slug: string;
}

export interface GalleryProp {
    slug: string;
}

export interface FamilyTreeProp {
    slug: string;
}

export interface DataProp {
    obituaries: ObituaryProp[];
    favorites: FavoritesProp[];
    timelines: TimelineProp[];
    galleries: GalleryProp[];
    familyTrees: FamilyTreeProp[];
}

export async function getData(): Promise<DataProp> {
    const query = gql`
        query MyQuery {
            obituaries {
                slug
                obituaryDetails {
                    html
                }
            }
            favorites {
                slug
            }
            timelines {
                slug
            }
            galleries {
                slug
            }
            familyTrees {
                slug
            }
        }`;
    return await client.request<DataProp>(query);
}
    