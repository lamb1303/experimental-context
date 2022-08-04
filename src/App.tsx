import { AuthContext, AuthProvider } from "./context/auth";
import Typography from "@mui/material/Typography";
import { Avatar, Box, Button, Grid, Paper, styled } from "@mui/material";
import { useContext, useEffect } from "react";
import Cookies from "js-cookie";

const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: 400,
  color: theme.palette.text.primary,
}));

const AutoGridNoWrap = () => {
  const { user, logOut } = useContext(AuthContext);
  const token = Cookies.get("token");
  useEffect(() => {
    if(!token){
      window.location.replace("http://localhost:3000/");
    }
  }, [logOut, token]);

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3, mt: 18, p: 9 }}>
      <StyledPaper
        sx={{
          my: 1,
          mx: "auto",
          p: 2,
        }}
      >
        <Grid container wrap="nowrap" spacing={2} alignItems="center">
          <Grid item>
            <Avatar>
              {user?.first_name.charAt(0)}
              {user?.last_name.charAt(0)}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Typography>{user?.first_name}</Typography>
            <Typography>{user?.last_name}</Typography>
            <Typography>{user?.email}</Typography>
          </Grid>
          <Button onClick={logOut}>LogOut</Button>
        </Grid>
      </StyledPaper>
    </Box>
  );
};

function App() {

  return (
    <AuthProvider>
      <AutoGridNoWrap />
    </AuthProvider>
  );
}

export default App;
