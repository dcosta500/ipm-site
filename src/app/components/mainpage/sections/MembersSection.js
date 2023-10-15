import { Grid } from "@mui/material";
import Profile from "../others/Profile";
import { Box } from "@mui/material";
import "./MembersSection.css";
import FilesSection from "./FilesSection";
import { useState } from "react";
import { proj_profiles } from "src/assets/files/proj_meta";

function MembersSection() {
  const [showFilesId, setShowFilesId] = useState("dc");

  let gridItems = proj_profiles.map((e, i) => {
    return (
      <Grid key={i} item xs={12 / proj_profiles.length}>
        <Box className={"GridItem"}>
          <Profile
            name={e.name}
            id={e.id}
            number={e.number}
            img={e.img}
            showFilesId={showFilesId}
            setShowFilesId={setShowFilesId}
          />
        </Box>
      </Grid>
    );
  });

  return (
    <>
      <Box className="MembersSection">
        <Grid container>{gridItems}</Grid>
      </Box>
      <FilesSection personID={showFilesId} />
    </>
  );
}

export default MembersSection;
