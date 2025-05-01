import { gql, GraphQLClient } from 'graphql-request'
import { DataProp } from './interfaces';

const client = new GraphQLClient(process.env.NEXT_HYGRAPH_API!, {
    headers: {
        Authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`,
    },
});


export async function getData(): Promise<DataProp> {
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
            obituaries {
                obituaryDetails {
                    html
                }
            }
            galleries {
                category
                images {
                    url
                }
            }
            familyTrees(where: {id: "cm9pmhdxb2tii07obrc8ek0sn"}) {
                name
                spouse {
                    name
                }
                children {
                    name
                    spouse {
                        name
                    }
                    children {
                        name
                    }
                }
            }
        }`;
    return await client.request<DataProp>(query);
}


    