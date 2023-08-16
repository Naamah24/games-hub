import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "./../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres();

  //we keep next to lines in case we do decide to call backend for genres instead of static
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {genres.map((genre) => (
          <ListItem key={genre.id} paddingY='10px'>
            <HStack>
              <Image
                boxSize='32px'
                borderRadius={8}
                objectFit='cover' //with this image will be scaled to fill the container while maintaining aspect ratio
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Button
                textAlign='left'
                whiteSpace='normal'
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
                fontSize='lg'
                variant='link'
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
