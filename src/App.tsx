import { useState } from "react";
import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string | "";
  searchText: string;
}

function App() {
  // refactoring: adding more state vars and passing them around is ugly
  // Solution: pack related variables inside an object QUERY OBJECT PATTERN
  // we create a query object GameQuery with all the information needed to query the games

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery); //initialize with empty object. properties might be null
  //use templateareas to define the layout of the grid
  // in the multiple dbl quoted strings we define row by row for the grid
  // 1st row: 2 columns
  // 2nd row: 2 OTHER columns
  // we place items in the grid using gridItem and place using area property
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`, //1024px
      }}
      // to define a fixed width to the aside column such that when we have a bigger screen the main gamegrid
      // will take up more space
      templateColumns={{
        base: "1fr", // ==> 1 fraction: main column takes all available space on small devices
        lg: "200px 1fr", // ==> First column 200px and the second takes up available space
      }}
    >
      <GridItem area={"nav"}>
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} paddingX='5px'>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <HStack spacing={5} paddingLeft={10}>
          <PlatformSelector
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery.platform}
          />
          <SortSelector
            onSelectedOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
            sortOrder={gameQuery.sortOrder}
          />
        </HStack>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
