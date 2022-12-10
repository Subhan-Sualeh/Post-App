import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import AvatarsCmp from "./muicomponents/Avatar";
import ButtonCmp from "./muicomponents/btnCmp";
import ClearIcon from "@mui/icons-material/Clear";
import CreateIcon from "@mui/icons-material/Create";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import { useDispatch, useSelector } from "react-redux";
import { indexNum } from "../store/Slices/indexNumSlice";
// import { toggle } from "../store/Slices/updateSlice";

const PostBox = ({ postText, index }) => {
  // const [updateStatus, setUpdateStatus] = useState()
  const dispatch = useDispatch();
  const state = useSelector((state) => state.indexnumSlice );
  console.log(state, "post");

  const matchingInd = () => {
       dispatch(indexNum(index))
  }

  // console.log(indexNum(index));


  return (
    <>
      <Box
        sx={{
          border: 1,
          borderRadius: "10px",
          width: "90%",
          // height: "300px",
          // maxHeight,
          m: 2,
          p: 2,
          pb: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignContent: "center" }}>
            <AvatarsCmp />
            <Box sx={{ mx: 1 }}>
              <Typography>Talha Asif</Typography>
              <Typography sx={{ fontSize: "10px" }}>
                imtalha995@gmail.com
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <CreateIcon
              onClick={matchingInd}
              sx={{ mx: 1, cursor: "pointer" }}
            />
            <ClearIcon
              onClick={console.log("hello")}
              sx={{ mx: 1, cursor: "pointer" }}
            />
          </Box>
        </Box>
        <Box sx={{ mt: 2, p: 0.5 }}>
          {}
          <Typography sx={{ fontSize: "25px" }}>{postText}</Typography>
        </Box>
        <Box
          sx={{
            borderTop: 1,
            borderBottom: 1,
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            my: 2,
            p: 1,
          }}
        >
          <Box
            sx={{
              // border: 1,
              borderRadius: "20px",
              width: "20%",
              p: 1,
              display: "flex",
              flexDirection: "column",
              justifyItems: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <FavoriteBorderIcon />
            <Typography sx={{ fontSize: "12px" }}>Like</Typography>
          </Box>
          <Box
            sx={{
              // border: 1,
              borderRadius: "20px",
              width: "20%",
              p: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <ChatBubbleOutlineIcon />
            <Typography sx={{ fontSize: "12px" }}>comment</Typography>
          </Box>
          <Box
            sx={{
              // border: 1,
              borderRadius: "20px",
              width: "20%",
              p: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
          >
            <ReplyIcon />
            <Typography sx={{ fontSize: "12px" }}>Share</Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PostBox;
