import "./Profile.css";
import { Avatar, Button } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/material";
import { CardActionArea } from "@mui/material";

export default function Profile(props) {
  const avatarScale = 150;

  const avatarStyle = { width: avatarScale, height: avatarScale };

  const onClickProfileCard = () => {
    console.log(`Setting person Id to ${props.id}`);
    props.setPersonId(props.id);
  };

  return (
    <Card className="ProfileCard" onClick={onClickProfileCard}>
      <CardActionArea
        sx={{
          ":hover": {
            backgroundColor: "background.primary",
            opacity: [0.8, 0.7, 0.6],
          },
        }}
      >
        <Box className="AvatarContainer">
          <Avatar
            sx={avatarStyle}
            src={props.img}
            alt={`${props.name}_profile_pic`}
          />
        </Box>
        <Box>{props.name}</Box>
        <Box>{props.number}</Box>
      </CardActionArea>
    </Card>
  );
}
