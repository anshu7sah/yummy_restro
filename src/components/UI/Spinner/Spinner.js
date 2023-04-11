import React from "react";
import { ScaleLoader, ClockLoader } from "react-spinners";
import "./Spinner.css";

const Spinner = ({ type = "scale" }) => {
  const renderSpinner = () => {
    return (
      <div className={type === "scale" ? "spinner" : "spinner-with-backdrop"}>
        {type === "scale" ? (
          <ScaleLoader
            loading={true}
            size={200}
            color={"var(--primary-scale-spinner)"}
          />
        ) : (
          <ClockLoader
            loading={true}
            size={200}
            color={"var(--primary-scale-spinner)"}
          />
        )}
      </div>
    );
  };
  return <>{renderSpinner()}</>;
};

export default Spinner;
