import { Grid } from "@mui/material";
import Profile from "../others/Profile";
import { Box } from "@mui/material";
import "./MembersSection.css";

function MembersSection() {
  // Unfortunatly, most JS bundlers cannot handle dynamic require imports.
  // Thus being impossible to dynamically get the images' paths.
  const members = [
    {
      name: "Diogo Costa",
      img: require("../../../../assets/profilePhotos/costa_profile.jpeg"),
    },
    {
      name: "Diogo Lemos",
      img: require("../../../../assets/profilePhotos/diogo_lemos_profile.jpg"),
    },
    {
      name: "José Trigueiro",
      img: require("../../../../assets/profilePhotos/jose_profile.jpg"),
    },
    {
      name: "Tomás Gabriel",
      img: require("../../../../assets/profilePhotos/pina_profile.jpeg"),
    },
  ];

  let gridItems = members.map((e, i) => (
    <Grid key={i} item xs={3}>
      <Profile name={e.name} img={e.img} />
    </Grid>
  ));

  return (
    <div className="MembersSection">
      <Box className="Title">
        <h1>IPM 23/24</h1>
      </Box>
      <Box className="ProfileBarContainer">
        <Grid container spacing={2}>
          {gridItems}
        </Grid>
      </Box>
    </div>
  );
}

export default MembersSection;
