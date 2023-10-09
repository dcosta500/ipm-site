import "./FilesSection.css";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Files from "../others/Files";
import PDFIcon from '@mui/icons-material/PictureAsPdf';
import { useState } from "react";
import Profile from "../others/Profile";


export default function FilesSection(props) {

    //const [personNumber, setPersonNumber] = useState(()=>0);
    
    
    const projeto = [
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

      const jt = [
        {
            text: "Assignment 1",
            icon: <PDFIcon/>,
            filePath: "../../../../assets/files/G_10_stage1.pdf",
        },
     
      ];

    let id_do_array_a_usar__da_outro_nome = props.personID;//este id é para ser usado onde diz projeto na linha abaixo (a 39), como? não sei..
    let gridItems = projeto.map((e, i) => (
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