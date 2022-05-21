import { getArtists } from "./artist";

export const query = {
  Query: {
    artists: getArtists,
  },
};
