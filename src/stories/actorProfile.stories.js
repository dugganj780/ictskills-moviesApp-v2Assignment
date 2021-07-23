import React from "react";
//import CastItem from "../components/castItem";
import SampleDataActor from "./sampleDataActor";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";
import ActorProfile from "../components/actorProfile";
//import { action } from "@storybook/addon-actions";
//import AddToFavoritesIcon from "../components/cardIcons/addToFavorites";

export default {
  title: "Movie Details Page/Actor Profile",
  component: ActorProfile,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => {
  return (
    <ActorProfile
      actor={SampleDataActor}
    />
  );
};
Basic.storyName = "Default";