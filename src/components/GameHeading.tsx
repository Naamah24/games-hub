import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "./../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  // Games
  // Action Games,
  // xbox Games
  // Xbox Action Games
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;

  return (
    <Heading as='h1' paddingY={5} fontSize='5xl'>
      {heading}
    </Heading>
  );
};

export default GameHeading;
