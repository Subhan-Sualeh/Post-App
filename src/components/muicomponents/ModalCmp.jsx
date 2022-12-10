import * as React from "react";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../style.css";
import AvatarsCmp from "./Avatar";
import ButtonCmp from "./btnCmp";
import { useDispatch, useSelector } from "react-redux";
import { add, postSlice } from "../../store/Slices/postSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
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
      <Box
        className="createPostbtn"
        sx={{ marginTop: 1.5, border: 1, borderRadius: "20px" }}
      >
        <Typography
          sx={{
            display: "flex",
            m: 0.3,
            mx: 2,
            p: 0.5,
          }}
          onClick={handleOpen}
        >
          What's in your mind?
        </Typography>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box component={"form"} onSubmit={addPostHandle} sx={style}>
          <Box>
            <Typography
              variant="h5"
              sx={{ textAlign: "center", marginBottom: 2 }}
            >
              Create Post
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <AvatarsCmp style={{ mx: 1, my: 0.5 }} />
            <Box>
              <Typography>Talha Asif</Typography>
              <Typography sx={{ fontSize: "10px" }}>
                imtalha995@gmail.com
              </Typography>
            </Box>
          </Box>
          <textarea
            name=""
            id="modal-modal-title"
            cols="50"
            rows="7"
            placeholder="Whats on your Mind"
            onChange={(e) => SetInputValue(e.target.value)}
          />
          <ButtonCmp
            type={"submit"}
            text={"post"}
            variant={"contained"}
            style={{ width: "100%", my: 2 }}
          />
          {/* <button>hello</button> */}
        </Box>
      </Modal>
    </div>
  );
}
