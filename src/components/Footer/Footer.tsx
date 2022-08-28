import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';


const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{backgroundColor: theme.palette.primary.main}}>
      <Stack
        padding={2} 
        flexDirection="row" 
        justifyContent="space-between"
        width={1200}
        margin="auto"
        >
        <Typography color='white'>Footer</Typography>
        <Typography color='white'>2022</Typography>
      </Stack>
    </Box>
  )
}

export default Footer;
