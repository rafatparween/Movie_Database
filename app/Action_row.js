import React, { useState } from 'react';
import Delete_button from './Delete_button.js';

const Action_row = (props) => {

  return (
    <div className="rating">
      <img src="Like.png"className="like"onClick={props.handleLike}/>
      <p className="Count">{props.count}</p>
      <img src="Dislike.png" className="dislike"onClick={props.handleDislike}/>
      <Delete_button
      onDeleteButton={props.onDelete}
      />
      
    </div>
    
  );
};

export default Action_row;


