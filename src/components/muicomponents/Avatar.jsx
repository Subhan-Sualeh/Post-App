import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function AvatarsCmp({style}) {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="" sx={style} />
      {/* <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" /> */}
      {/* <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" /> */}
    </Stack>
  );
}