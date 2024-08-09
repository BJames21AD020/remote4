import React, { useEffect } from "react";
import PlanList from "../components/planList";
import DonutChart from "../components/apexcharts/DonutChart";
import { Paper } from "@mui/material";
import DayTable from "../components/dayTable";
import NavBar from "../components/navbar";
import ScheduleDate from "../components/schedule";
import { useNavigate } from "react-router-dom";

const Planner = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    token && username ? <></> : navigate("/login");
  }, []);

  return (
    <div className="container-fluid py-md-3">
      <div className="row text-white fs-4">
        <div className="col-12 px-0 mx-0 px-md-3 px-lg-4 ">
          <NavBar panel={"SCHEDULE"} />
        </div>
      </div>

      <div className="row mb-4 mt-4 mt-sm-5">
        <div className="col-11  px-md-3 px-lg-0  col-sm-10 col-md-8 col-lg-5 col-xl-4 position-relative pb-5  mx-auto ">
          <Paper elevation={3}>
            <ScheduleDate />
          </Paper>
        </div>
        <div className="col-12 px-0 mx-0 px-md-3 px-lg-0 col-lg-6 col-xl-7   ">
          <Paper>
            <PlanList />
          </Paper>
        </div>
      </div>

      <div className="row gy-5 pb-5  mt-md-auto mt-4">
        <div className="col-12  px-0 mx-0 px-md-3  px-lg-0 col-md-8 col-lg-6 col-xl-4   mx-auto">
          <Paper elevation={4}>
            <DonutChart />
          </Paper>
        </div>
        <div className="col-12 px-0 mx-0  ps-lg-3  ps-xl-0   col-xl-7  ">
          <Paper>
            <DayTable />
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default Planner;
