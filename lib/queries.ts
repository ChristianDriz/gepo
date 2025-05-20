import { gql, GraphQLClient } from 'graphql-request'
import { GalleryProp } from './interfaces';

const client = new GraphQLClient(process.env.NEXT_HYGRAPH_API!, {
    headers: {
        Authorization: `Bearer ${process.env.NEXT_HYGRAPH_TOKEN}`,
    },
});

export async function getData(): Promise<GalleryProp> {
    const query = gql`
        query MyQuery {
            galleries {
                category
                medias(first: 1000) {
                    url
                    mimeType
                }
            }
        }`;
    return await client.request<GalleryProp>(query);
}


    