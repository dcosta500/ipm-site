import "./FilesSection.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import File from "../others/Files";
import PDFIcon from "@mui/icons-material/PictureAsPdf";
import { proj_files } from "src/assets/files/proj_meta";
import { Grid } from "@mui/material";

const FilesSection = (props) => {
  // Find files of person
  let fileArray = proj_files.find((item) => props.personID === item.id).files;

  // Map found files
  let gridItems = fileArray.map((e, i) => (
    <Grid item key={i} xs={2}>
      <Box className={"GridItem"}>
        <File text={e.name} icon={<PDFIcon />} file={e.file} />
      </Box>
    </Grid>
  ));

  return (
    <Box className="FilesSection">
      <Grid container>{gridItems}</Grid>
    </Box>
  );
};

export default FilesSection;
