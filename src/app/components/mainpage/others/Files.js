
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';


export default function Files(props) {

  return (
        <ListItem button key={props.text} onClick={window.open(props.filePath, '_blank')}>
            <ListItemIcon>{props.icon}</ListItemIcon>  
            <ListItemText primary={props.text} />
        </ListItem>
  );
}
