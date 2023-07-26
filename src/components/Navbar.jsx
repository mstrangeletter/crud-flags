import { ThemeProvider, createTheme, AppBar, Button, Toolbar, Typography, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import GetAppIcon from '@mui/icons-material/GetApp';
import "../components/navbar.css";



export default function Navbar() {
  


  const theme = createTheme({
    status: {
      danger: '#e53e3e',
    },
    palette: {
      primary: {
        main: '#0971f1',
        darker: '#053e85',
      },
      neutral: {
        main: '#0C134F',
        contrastText: '#fff',
      },
    }
  });
  

  return (
    <div className="navbar">
      <ThemeProvider theme={theme}>
        <AppBar
          sx={{ width: "100%"}}
          position="static"
          color="neutral">
          <Toolbar>
            <Typography className="title" variant="h5" component="div" sx={{ flexGrow: 1 }}>
              Flag <span className="mark_prop">ReSize</span>
            </Typography>
            <NavLink exact to="/" style={{ color: "white" }}>
              <IconButton color="inherit">
                <Typography>Inicio</Typography>
              </IconButton>
            </NavLink>
              <>
                <NavLink to="/download" style={{ color: "white" }}>
                  <Button color="inherit">
                    <GetAppIcon />
                  </Button>
                </NavLink>
          
            
              </>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};
