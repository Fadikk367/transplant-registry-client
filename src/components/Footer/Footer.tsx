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
        <Typography color='white'>WFiIS - ZTI - 2022</Typography>
        <Typography color='white'>Adrian Furman</Typography>
      </Stack>
    </Box>
  )
}

export default Footer;
