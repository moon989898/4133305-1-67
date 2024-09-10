'use client'; // Add this line at the top

import { FC } from "react";

const staticNum: number = 5;

type Gender = "male" | "female" | "LGBQ";

interface Props {
  initVal: number;
  gender: Gender;
}

interface Person {
  Firstname: string;
  LastName: string;
  Age: number;
  Single: boolean;
}

const person: Person = {
  Firstname: "หล่อเท่",
  LastName: "แอมน่ารักที่สุดในห้อง",
  Age: 20,
  Single: false
};

const Basic: FC<Props> = ({ initVal, gender }) => {
  const verifyGender = (gender: Gender) => {
    if (gender === "female") {
      console.log(gender);
    } else {
      console.log("Not Female");
    }
  };

  const handleAddClick = () => {
    // Add logic if needed, for now, this button does nothing.
    console.log('Add button clicked');
  };

  return (
    <>
      <p>Basic</p>
      <div>Static Number: {staticNum}</div>
      <div>First Name: {person.Firstname}</div>
      <div>Last Name: {person.LastName}</div>
      <div>Age: {person.Age}</div>
      <div>{person.Single ? "Single" : "Not Single"}</div>
      <div>Initial Value: {initVal}</div>
      <div>Gender: {gender}</div>
      <button onClick={handleAddClick}>Add</button>
      <button onClick={() => verifyGender(gender)}>Verify Gender</button>
    </>
  );
};

// Move defaultProps outside of the component
Basic.defaultProps = {
  initVal: 0,
  gender: "female"
};

export default Basic;
