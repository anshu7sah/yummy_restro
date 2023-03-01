import React, { useState } from "react";
import "./CheckboxGroup.css";

let newSelectedArray = [];
const CheckboxGroup = ({ categories, handleFilter }) => {
  const [selected, setSelected] = useState([]);
  const handleSelected = (category) => {
    const alreadySelected = selected.indexOf(category);
    newSelectedArray = [...selected];
    if (alreadySelected === -1) {
      newSelectedArray.push(category);
    } else {
      newSelectedArray.splice(alreadySelected, 1);
    }

    setSelected(newSelectedArray);
    handleFilter(newSelectedArray);
  };
  const renderCheckboxGroup = () => {
    return (
      <div className="checkbox-group">
        <ul>
          {categories.map((category) => {
            return (
              <li key={category._id}>
                <div className="form-check label-input">
                  <label className="form-check-label">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      onChange={() => handleSelected(category._id)}
                    />
                    {category.name}
                  </label>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  };
  return <>{renderCheckboxGroup()}</>;
};

export default CheckboxGroup;
