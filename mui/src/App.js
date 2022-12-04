import './App.css';
import {Button, Checkbox, TextField, Card, Box, Stack, Typography, Avatar, Divider} from '@mui/material'
import SaveIcon from '@mui/icons-material/Save';
import NavBar from './Components/NavBar'
import { flexbox } from '@mui/system';


function App() {
  return (
    <div className="App">
      <div>
        <Card>
          <Box
          mt={2}
          ml={2}
          sx={{
            display: 'flex',
            borderRadius: '16px',
            width: 400,
            height: 100,
            backgroundColor: 'primary.dark'
          }}>
          <Avatar variant="rounded"/>
          <Stack spacing={0.5}>
            <Typography>Title</Typography>
            <Typography>Subtitle</Typography>
          </Stack>
          <Divider />
          </Box>
        </Card>
      </div>

      
      <div>
        <Checkbox></Checkbox>
      </div>
      <Button
      startIcon={<SaveIcon />}
      variant='contained'
      color='success'
      size='large'>
        Hello
      </Button>
      <div>
        <TextField
        varient='outlined'
        label='Outlined'></TextField>
      </div>
      
    </div>
  );
}

export default App;
