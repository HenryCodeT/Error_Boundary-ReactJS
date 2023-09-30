import { useEffect, useState } from 'react';
import { ErrorBoundary } from '../utilities';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function ComponentTestAsync() {
  const [result, setResult] = useState();
  const [error, setError] = useState<boolean>(false);

  let url = "https://rickandmortyapi.com/api/characters/1";
  const fetchRickAndMorty = async () => {
    const response = await fetch(url)
      .then((r) => {
        if (r.status !== 200) throw new Error("Error");
        setError(false);
        return r;
      })
      .catch((error) => {
        setError(true);
        url = "https://rickandmortyapi.com/api/character/1";
        throw new Error(error);
      });
    const data = await response.json();
    setResult(data);
  };

  useEffect(() => {
    fetchRickAndMorty();
    setTimeout(() => {
      fetchRickAndMorty();
    }, 4000);
  }, []);

  return (
    <ErrorBoundary fallBackComponent={<>Fatal Error</>} resetCondition={result} error={error}>
      <Box m="auto">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 200, width: 345 }} image={result?.image} title={result?.name} style={{ objectFit: "contain" }} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {result?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {result?.species}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </ErrorBoundary>
  );
}
export default ComponentTestAsync;