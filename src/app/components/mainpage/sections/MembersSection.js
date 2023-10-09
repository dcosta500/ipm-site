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
      img: require("../../../../assets/files/members/diogo_costa/costa_profile.jpeg"),
    },
    {
      name: "Diogo Lemos",
      id: "dl",
      number: 56837,
      img: require("../../../../assets/files/members/diogo_lemos/diogo_lemos_profile.jpg"),
    },
    /* {
      id: "projeto",
      img: require("../../../../assets/profilePhotos/logo_temporario.png"),
    }, */
    {
      name: "José Trigueiro",
      id: "jt",
      number: 58119,
      img: require("../../../../assets/files/members/jose_trigueiro/jose_profile.jpg"),
    },
    {
      name: "Tomás Gabriel",
      id: "tg",
      number: 60722,
      img: require("../../../../assets/files/members/tomas_gabriel/pina_profile.jpeg"),
    },
  ];
  const [personID, setPersonId] = useState("n/a");

  let gridItems = members.map((e, i) => (
    <Grid key={i} item xs={2.4}>
      <Profile
        name={e.name}
        id={e.id}
        number={e.number}
        img={e.img}
        setPersonId={undefined}
      />
    </Grid>
  ));

  return (
    <>
      <div className="MembersSection">
        <Box className="Title">
          <h1>IPM 23/24</h1>
        </Box>
        <Box className="ProfileBarContainer">
          <Grid container spacing={15}>
            {gridItems}
          </Grid>
        </Box>
      </div>
      {/* <FilesSection personID={"dc"} /> */}
    </>
  );
}

export default MembersSection;
