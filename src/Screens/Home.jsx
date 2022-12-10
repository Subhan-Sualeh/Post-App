import { Grid } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import CreatePostCard from "../components/CreatePostCard";
import AppBarCmp from "../components/muicomponents/AppbarCmp";
import PostBox from "../components/PostBox";

const Home = () => {
  const state = useSelector((state) => state.postSlice);
  console.log(state, "home");

  return (
    <div>
      <AppBarCmp />
      <CreatePostCard />
      <Grid container >
        {state?.map((post, index) => {
          console.log(index, "index");
          return (
            <Grid item xl={4} md={6} xs={12}  key={index}>
              <PostBox postText={post} index={index} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Home;
