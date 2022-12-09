import { BorderAllRounded } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AvatarsCmp from "./muicomponents/Avatar";
import ModalCmp from "./muicomponents/ModalCmp";

const CreatePostCard = () => {
  return (
    <>
      <Box sx={{ border: 1, borderRadius: 1, width: "50%", m: 2, p: 2 }}>
        <Box sx={{ display: "flex", alignContent: "center" }}>
          <AvatarsCmp />
          <Box sx={{ mx: 1 }}>
            <Typography>Talha Asif</Typography>
            <Typography sx={{ fontSize: "10px" }}>
              imtalha995@gmail.com
            </Typography>
          </Box>
        </Box>
        <ModalCmp />
      </Box>
    </>
  );
};

export default CreatePostCard;
