import React, { useState } from 'react';


function form() {
    const [assetInfo, setAssetInfo] = useState({
        name: "",
        category: "",
        type: "",
        description: "",
    });

const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
};

const handleSubmit = (event) => {
    event.preventDefault();
    
}

  return (
    <div>
        <h3> Add new asset</h3>
        <form class="assetForm" onSubmit={handleSubmit}>
           <label class="displayName">
            <h3>Display name</h3>
            <input
                type="text"
                name="displayName"
                value={assetInfo.name}
                onChange={handleChange}
            />
           </label>

        </form>
    </div>
  )
}

export default form