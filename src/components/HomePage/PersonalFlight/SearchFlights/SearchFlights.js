import React from 'react';
import PersonalFlight from '../PersonalFlight/PersonalFlight';

const SearchFlights = () => {
    return (
        <div>
            <PersonalFlight/>
        </div>
    );
};

export default SearchFlights;

// https://stackoverflow.com/questions/29108779/how-to-get-selected-value-of-a-dropdown-menu-in-reactjs
// import React, { useState } from "react";

// export default function App() {
//   const getInitialState = () => {
//     const value = "Orange";
//     return value;
//   };

//   const [value, setValue] = useState(getInitialState);

//   const handleChange = (e) => {
//     setValue(e.target.value);
//   };

//   return (
//     <div>
//       <select value={value} onChange={handleChange}>
//         <option value="Orange">Orange</option>
//         <option value="Radish">Radish</option>
//         <option value="Cherry">Cherry</option>