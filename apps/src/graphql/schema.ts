import { buildSchema } from "graphql";

export const schema = `
type Artist {
    id: Int!
    name: String! 
}

type Query {
    artists: [Artist]
},
`;
