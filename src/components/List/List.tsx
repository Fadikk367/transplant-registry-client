import { useQuery } from '@tanstack/react-query';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import MuiList from '@mui/material/List';
import Typography from '@mui/material/Typography';

import type { ListProps } from './types';

const List = <T,>({
  itemsKey, 
  emptyListMessage = 'No items in this list.', 
  fetchItems, 
  renderItem
}: ListProps<T>) => {
  const {data, isLoading, isError, error} = useQuery<T[], Error>([itemsKey], fetchItems);

  if (isError) {
    return (
      <Box padding={4}>
        <Typography color="burlywood" textAlign="center">{error.message}</Typography>
      </Box>
    );
  }

  if (isLoading || !data) {
    return (
      <Box padding={4}>
        <LinearProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ width: '100%', flex: 1, backgroundColor: 'red' }}>
      {data.length ? (
        <MuiList>
          {data.map(renderItem)}
        </MuiList>
      ) : (
        <Typography>{emptyListMessage}</Typography>
      )}
    </Box>
  );
};

export default List;