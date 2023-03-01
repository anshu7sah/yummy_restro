import React from "react";
import { ScaleLoader } from "react-spinners";
import "./Spinner.css";

const Spinner = () => {
  const renderSpinner = () => {
    return (
      <div className="spinner">
        <ScaleLoader
          loading={true}
          size={200}
          color={"var(--primary-scale-spinner)"}
        />
      </div>
    );
  };
  return <>{renderSpinner()}</>;
};

export default Spinner;
