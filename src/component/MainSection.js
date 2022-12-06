import { Grid, Paper } from "@mui/material";
import SearchFlightForm from "./SearchFlightForm";
import { Container } from "@mui/material";
import PIA_IMG from "../assets/img/ungu.jpg";




const MainSection = () => {
  
  return (
    <Container className="homepage mt-5" >
    <Paper sx={{ overflow: "hidden"}} elevation={10} >
      <Grid container spacing={1} direction="row">
        <Grid xs={10} item>
          <SearchFlightForm />
        </Grid>
        <Grid xs={2} item>
          <img src={PIA_IMG} className="pia-image " alt={PIA_IMG}  style={{ width: 190 }}/>
        </Grid>
      </Grid>
    </Paper>
    </Container>
  );
};

export default MainSection;
