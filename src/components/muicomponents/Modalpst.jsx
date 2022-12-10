import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../app.css";

import { useDispatch, useSelector } from "react-redux";
import { add, postSlice } from "../../store/Slices/postSlice";
import { Container, TextField } from "@mui/material";
import {TiTick} from "react-icons/ti"
import {AiOutlinePlus} from "react-icons/ai"
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  borderRadius:"20px" ,
  p: 2,
};

export default function ModalCmp() {
  const [open, setOpen] = React.useState(false);
  const [inputValue, SetInputValue] = React.useState("");
  // const [postItem, setPostItem] = React.useState("");

  // console.log(inputValue, "state");
  
  // const state = useSelector((state) = state)

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  
  const addPostHandle = (e) => {
    e.preventDefault()
    handleClose()
    dispatch(add(inputValue))
    
  };
  
  return (
    <div>
      <Container sx={{ display: "flex",
            alignItems:"center" , 
            justifyContent:"center",
            m: "20px auto",}}> <Button
          sx={{
            mx: 2,
            p: 0.5,
            fontSize:"2rem",
            background:"white",
            color:"purple"


          }}
          style={{background:"White"}}
          onClick={handleOpen}
        >
          <AiOutlinePlus/>
        </Button></Container>
     
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={"form"} onSubmit={addPostHandle} sx={style}>
          <Box>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", marginBottom: 2 , color:"purple"}}
            >
              Create Post
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box>
              <Typography variant="h5" sx={{ color:"purple"}}>User</Typography>
              <Typography sx={{ fontSize: "13px" }}>
                Abc123@gmail.com
              </Typography>
            </Box>
          </Box>
          <TextField
            name=""
            multiline
            sx={{width : "100%"}}
            rows={4}
            placeholder="Post Something"
            onChange={(e) => SetInputValue(e.target.value)}
          />
          <Button
            type={"submit"}
            style={{ width: "100%", my: 2 , color: "white" , background:"purple" ,margin:"5px 0px" , padding:"10px" , fontSize:"1.5rem" }}
          ><TiTick/></Button>
          {/* <button>hello</button> */}
        </Box>
      </Modal>
    </div>
  );
}
