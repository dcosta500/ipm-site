import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Box, Button } from "@mui/material";
import { pdfFilesImage } from "src/assets/files/proj_meta";
import "./Files.css";

export default function File(props) {
  const imgSrc = require("src/assets/files/project_files/pdfFiles.png");

  const buttonStyle = {
    fontWeight: "bold",
    backgroundColor: "cadetblue",
    position: "relative",
    top: "1.6rem",
    borderRadius: "1.31rem",
  };

  return (
    <Box className="FileContainer">
      <img className="FileImage" src={imgSrc} />
      <Box className="FileName">{props.text}</Box>
      <Button
        sx={buttonStyle}
        variant="contained"
        onClick={() => window.open(props.file, "_blank")}
      >
        Abrir
      </Button>
    </Box>
  );
}
