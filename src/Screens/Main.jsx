import { Container, Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ModalPost } from "../components/ModalPost";
import ModalCmp from "../components/muicomponents/Modalpst";


const Home = () => {
  const state = useSelector((state) => state.postSlice);
  console.log(state, "home");

  return (
    <div>
      <ModalCmp />
      <Grid container >
        {state?.map((post, index) => {
          console.log(index, "index");
          return (
            <Container item key={index}>
              <ModalPost postText={post} index={index} />
            </Container>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
