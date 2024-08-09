import React, { useContext, useEffect } from "react";
import BmiCalculator from "../components/bmiCalculater";
import Graph from "../components/Graph";
import SpeedDialMenu from "../components/speedDial";
import PostContext from "../context/post/postContext";
import { Paper, Typography } from "@mui/material";
import Daily from "../components/daily";
import Gym from "../data/Gym.svg";
import NavBar from "../components/navbar";
import { useNavigate } from "react-router-dom";
import ThreeDotLoading from "../components/Loading";

function Home() {
  const postContext = useContext(PostContext);
  const { getPosts, postLoading } = postContext;

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    token && username ? <></> : navigate("/login");
    getPosts(username, token);
  }, []);

  return (
    <>
      <div className="container-fluid  py-md-3" id="home">
        <div className="row  text-white fs-4">
          <div className="col-12 px-0 mx-0 px-md-3 px-lg-4 ">
            <NavBar panel={"HOME"} />
          </div>
        </div>
        <div className="row mb-4 mt-4 mt-sm-5" id="graph">
          <div className="col-12 px-0 mx-0 px-md-3 px-lg-4 position-relative">
            <Graph />
            <div className="position-absolute bottom-0 end-0 translate-middle-x me-auto me-md-1 pe-md-1 me-xxl-5 pe-xxl-2">
              <SpeedDialMenu />
            </div>
          </div>
        </div>
        <div className="row gy-4">
          <div
            className="col-12 col-sm-6 col-md-3 mx-auto px-0 pe-sm-1 px-md-1 px-lg-2 px-xl-1  col-lg-3 order-2 order-md-1"
            id="bmi"
          >
            <BmiCalculator />
          </div>
          <div
            className="col-12  col-md-4 mx-auto px-0 px-md-1  px-lg-2 px-xl-1 order-1 order-md-2"
            id="daily_event"
          >
            <Paper>
              <Daily />
            </Paper>
          </div>
          <div
            className="col-12 col-sm-6  col-md-4 mx-auto px-0 ps-sm-1 px-md-1 px-xl-1 px-lg-2 order-2 order-md-3"
            id="hit_gym"
          >
            <Paper>
              <img src={Gym} alt="" className="py-sm-5 py-lg-0" />
              <Typography variant="h5"> Hit the Gym! </Typography>
            </Paper>
          </div>
        </div>
      </div>
      <div className={postLoading ? "d-block" : "d-none"}>
        <ThreeDotLoading />
      </div>
    </>
  );
}

export default Home;
