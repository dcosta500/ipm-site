import "./Profile.css";
import { Avatar, Button } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import { CardActionArea } from "@mui/material";
import { useState } from "react";

// Props: id, name, number, img
export default function Profile(props) {
  const avatarScale = "10.44rem";

  const avatarStyle = {
    width: avatarScale,
    height: avatarScale,
    position: "relative",
    bottom: "5.2rem",
    boxShadow: "0px 5px 5px 0px rgba(0,0,0,0.5)",
  };

  const buttonStyle = {
    fontWeight: "bold",
    backgroundColor: "cadetblue",
    position: "relative",
    top: "2.8rem",
    borderRadius: "1.31rem",
  };

  const onClickProfileCard = () => {
    props.setShowFilesId(props.id);
  };

  let amISelected = props.id === props.showFilesId ? true : false;

  return (
    <Box sx={{ opacity: amISelected ? 0.3 : 1 }} className="ProfileCard">
      <Avatar
        sx={avatarStyle}
        src={props.img}
        alt={`${props.name}_profile_pic`}
      />
      <Box className="ProfileInfo">
        <Box className="ProfileName">{props.name}</Box>
        <Box className="ProfileNumber">{props.number}</Box>
        <Button
          sx={buttonStyle}
          variant="contained"
          onClick={onClickProfileCard}
          disabled={amISelected}
        >
          Ver Ficheiros
        </Button>
      </Box>
    </Box>
  );
}
