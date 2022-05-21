import { getArtists } from "../models/artist";

export const query = {
  Query: {
    artists: getArtists,
  },
};
