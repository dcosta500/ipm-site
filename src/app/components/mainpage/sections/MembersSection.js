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
      number: 59893,
      img: require("../../../../assets/profilePhotos/costa_profile.jpeg"),
    },
    {
      name: "Diogo Lemos",
      number: 56837,
      img: require("../../../../assets/profilePhotos/diogo_lemos_profile.jpg"),
    },
    {
      name: "José Trigueiro",
      number: 58119,
      img: require("../../../../assets/profilePhotos/jose_profile.jpg"),
    },
    {
      name: "Tomás Gabriel",
      number: 60722,
      img: require("../../../../assets/profilePhotos/pina_profile.jpeg"),
    },
  ];

  let gridItems = members.map((e, i) => (
    <Grid key={i} item xs={3}>
      <Profile name={e.name} number={e.number} img={e.img} />
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
