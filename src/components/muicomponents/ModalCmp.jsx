import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "../../style.css";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../store/Slices/modalSlice";

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
  // const [open, setOpen] = React.useState(false);
  const state = useSelector(state => state.ModalSlice)
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch(open())
  };

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      <Box
        className="createPostbtn"
        sx={{ marginTop: 1.5, border: 1, borderRadius: "10px" }}
      >
        <Typography
          sx={{
            display: "flex",
            // justifyContent: "center",
            m: 0.3,
            mx: 2,
            p: 0.5,
          }}
          // onClick={handleOpen}
          onClick={openModal}
        >
          What's in your mind?
          {/* <Typography onClick={handleOpen}>What's in your mind</Typography> */}
        </Typography>
      </Box>

      <Modal
        // open={open}
        // onClose={handleClose}
        onClose={openModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
