import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
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
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above='lg'>
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
