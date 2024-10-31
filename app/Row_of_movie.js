import Action_row from './Action_row.js';

function Row_of_movie({movie,onDelete,handleDislike,handleLike,count}) {
  return (
  	<div className="row-of-movie">
      <div className="container">
        <img src={movie.img} className="image" />
      </div>
      <div className="movie-detailed">
      	<h1>{movie.name}</h1>
       	<p>
          {movie.year} | {movie.duration} | {movie.genre}
          
        </p>
        <h2 className="text">Description</h2>
        <p>{movie.description}</p>
        
        <Action_row 
		    onDelete={onDelete}
		    handleLike={handleLike}
		    handleDislike={handleDislike}
		    count={count}
         />
         
      </div>
     
      
 
    </div>
    	
   
    
  );
}

export default Row_of_movie;
