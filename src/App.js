import { Box, Button,createTheme,Stack, ThemeProvider } from "@mui/material";
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Navbar from './components/Navbar';
import Add from './components/Add';
import { ThemeContext } from "@emotion/react";
import { useState } from "react";
function App() {
  const [mode,setMode] = useState("dark");
  const darkTheme = createTheme({
    palette:{
      mode:mode,
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>      
        <Box bgcolor={"background.default"} color={"text.primary"} >
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar setMode={setMode} mode={mode}/>
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
