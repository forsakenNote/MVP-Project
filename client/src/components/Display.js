import React from "react";

export default function Display({ displayName}) {
  return (
    <div className="Display">
      <h3>LIST OF LOCATIONS</h3>
      <ul>
        <h5>{displayName}</h5>
      </ul>
    </div>
  );
}


