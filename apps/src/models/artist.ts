import { GraphQLContext } from "../graphql/context";

export const getArtists = async (
  _parent: unknown,
  _args: unknown,
  context: GraphQLContext
) => {
  return context.prisma.artist.findMany();
};
