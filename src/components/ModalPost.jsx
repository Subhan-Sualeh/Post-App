import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { indexNum } from "../store/Slices/indexNumSlice";
import {MdDelete} from "react-icons/md"
import {AiFillEdit} from "react-icons/ai"

export const ModalPost = ({ postText, index }) => {
  // const [updateStatus, setUpdateStatus] = useState()
  const dispatch = useDispatch();
  const state = useSelector((state) => state.indexnumSlice );
  console.log(state, "post");

  const matchingInd = () => {
       dispatch(indexNum(index))
  }
   var btnStyle={
    mx: 1, cursor: "pointer" , padding:"10px 25px" , background:"purple" ,fontSize:"1.5rem" , color :"white"
   }
   var fixed ={
    background:"purple" ,
    color : "white"
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
          background:"white"
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

            <Box sx={{ mx: 1 }}>
              <Typography variant="h5">User</Typography>
              <Typography sx={{ fontSize: "15px" }}>
                Abc123@gmail.com
              </Typography>
            </Box>
          </Box>
          
        </Box>
        <Box sx={{ mt: 2, p: 0.5 }}>
          {}
          <Typography sx={{ fontSize: "25px" }}>{postText}</Typography>
        </Box>
        <Box sx={{ display: "flex" , margin:"20px" }}>
          <Button onClick={matchingInd}
              sx={btnStyle} style={fixed}><MdDelete/></Button>
          <Button onClick={console.log("Hello")}
              sx={btnStyle} style={fixed}><AiFillEdit/></Button>
          </Box>
      </Box>
    </>
  );
};
