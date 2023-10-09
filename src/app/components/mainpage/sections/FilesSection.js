import "./FilesSection.css";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Files from "../others/Files";
import PDFIcon from "@mui/icons-material/PictureAsPdf";
import { proj_files } from "src/assets/files/proj_meta";

const FilesSection = (props) => {
  // Find files of person
  let fileArray = proj_files.find((item) => props.personID === item.id).files;

  // Map found files
  let gridItems = fileArray.map((e, i) => (
    <Files key={i} text={e.name} icon={<PDFIcon />} file={e.file} />
  ));

  return (
    <div className="FilesSection">
      <Box sx={{ width: "100%", maxWidth: 200, bgcolor: "background.paper" }}>
        <nav aria-label="main folders">
          <List>{gridItems}</List>
        </nav>
      </Box>
    </div>
  );
};

export default FilesSection;
