import "./Profile.css";
import { Avatar } from "@mui/material";
import { Card } from "@mui/material";
import { Box } from "@mui/material";

export default function Profile(props) {
  const avatarScale = 150;

  const avatarStyle = { width: avatarScale, height: avatarScale };

  return (
    <Card className="ProfileCard">
      <Box className="AvatarContainer">
        <Avatar
          sx={avatarStyle}
          src={props.img}
          alt={`${props.name}_profile_pic`}
        />
      </Box>
      <Box>{props.name}</Box>
      <Box>{props.number}</Box>
    </Card>
  );
}

