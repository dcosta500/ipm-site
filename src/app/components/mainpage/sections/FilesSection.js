import "./FilesSection.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Files from "../others/Files";
import PDFIcon from '@mui/icons-material/PictureAsPdf';


export default function FilesSection() {

    const files = [
        {
            text: "Stage 1",
            icon: <PDFIcon/>,
            filePath: "../../../../assets/files/G_10_stage1.pdf",
        },
        {
            text: "Stage 2",
            icon: <PDFIcon/>,
            filePath: "../../../../assets/files/G_10_stage2.pdf",
        },
     
      ];

    let gridItems = files.map((e, i) => (
          <Files key={i} text={e.text} icon={e.icon} filePath={e.filePath} />
      ));

    return(
        <div className="FilesSection">
        <Box sx={{ width: '100%', maxWidth: 200, bgcolor: 'background.paper'}}>
            <nav aria-label="main folders">
                <List>
                    {gridItems}
                </List>
             </nav>
        </Box>
        </div>
    );
}