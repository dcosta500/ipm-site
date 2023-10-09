import { Grid } from "@mui/material";
import Profile from "../others/Profile";
import { Box } from "@mui/material";
import "./MembersSection.css";
import FilesSection from "./FilesSection";
import { useState } from "react";
import { proj_profiles } from "src/assets/files/proj_meta";

function MembersSection() {
  const [personID, setPersonId] = useState("prj");

  let gridItems = proj_profiles.map((e, i) => (
    <Grid key={i} item xs={12 / proj_profiles.length}>
      <Box className={"GridItem"}>
        <Profile
          name={e.name}
          id={e.id}
          number={e.number}
          img={e.img}
          setPersonId={setPersonId}
        />
      </Box>
    </Grid>
  ));

  return (
    <>
      <div className="MembersSection">
        <Box className="Title">
          <h1>IPM 23/24</h1>
        </Box>
        <Box className="ProfileBarContainer">
          <Grid container>{gridItems}</Grid>
        </Box>
      </div>
      <FilesSection personID={personID} />
    </>
  );
}

export default MembersSection;
