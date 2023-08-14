import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
function App() {
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
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"} paddingX='5px'>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
