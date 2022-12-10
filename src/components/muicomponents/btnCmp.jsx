import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function ButtonCmp({text, variant, style, color, type}) {
  return (
    <Stack spacing={2} direction="row">
      <Button type={type} variant={variant} color={color} sx={style}>{text}</Button>
      {/* <Button variant="contained">Contained</Button> */}
      {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>
  );
}