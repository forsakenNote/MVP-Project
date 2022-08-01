import React from 'react';

export default function Display(dataPhotosName) {

  let name = "";
    for(let i = 0; i < dataPhotosName.length; i++) {
        console.log("check i", dataPhotosName[i]);
        for(let j = 0; j < dataPhotosName[i].length; j++) {
            console.log("check j", dataPhotosName[i][j]);
            name = dataPhotosName[i][j].name;
            return name;
        }
    }

    let photo = [];
    for(let i = 0; i < dataPhotosName.length; i++) {
      console.log("check i", dataPhotosName[i]);
      for(let j = 0; j < dataPhotosName[i].length; j++) {
        for(let k = 0; k < dataPhotosName[i][j].length; k++ ) {
          console.log("check k", dataPhotosName[i][j][k]);
          photo = dataPhotosName[i][j][k].urls.regular;
          return photo;
        }
      }
  }


    // let photo = [];
    // let name = "";

    // photo = dataPhotosName.spots[0].name;
    // name = dataPhotosName.spots[0].photos[0].urls.regular;


  return (
    <div className="Display">
      <h3>Photos and Name</h3>
      {console.log(photo, name)}
    </div>
  )
}

