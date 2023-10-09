import { Grid } from "@mui/material";
import Profile from "../others/Profile";
import { Box } from "@mui/material";
import "./MembersSection.css";
import FilesSection from "./FilesSection";
import { useState } from "react";

function MembersSection() {
  // Unfortunatly, most JS bundlers cannot handle dynamic require imports.
  // Thus being impossible to dynamically get the images' paths.
  const members = [
    {
      name: "Diogo Costa",
      id: "dc",
      number: 59893,
      img: require("../../../../assets/profilePhotos/costa_profile.jpeg"),
    },
    {
      name: "Diogo Lemos",
      id: "dl",
      number: 56837,
      img: require("../../../../assets/profilePhotos/diogo_lemos_profile.jpg"),
    },
    {
      id: "projeto",
      img: require("../../../../assets/profilePhotos/logo_temporario.png"),
    },
    {
      name: "José Trigueiro",
      id: "jt",
      number: 58119,
      img: require("../../../../assets/profilePhotos/jose_profile.jpg"),
    },
    {
      name: "Tomás Gabriel",
      id: "tg",
      number: 60722,
      img: require("../../../../assets/profilePhotos/pina_profile.jpeg"),
    },
  ];
  const [personID, setPersonId] = useState(()=>0);

  let gridItems = members.map((e, i) => (
    <Grid key={i} item xs={2.4}>
      <Profile name={e.name} id={e.id} number={e.number} img={e.img} setPersonId={setPersonId}/>
    </Grid>
  ));

  return (
    <><div className="MembersSection">
      <Box className="Title">
        <h1>IPM 23/24</h1>
      </Box>
      <Box className="ProfileBarContainer">
        <Grid container spacing={15}>
          {gridItems}
        </Grid>
      </Box>
    </div>
    <FilesSection personID={personID}/></>
  );
}

export default MembersSection;
