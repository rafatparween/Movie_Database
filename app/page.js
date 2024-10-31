 "use client";
import Header from './Header.js';
import Row_of_movie from './Row_of_movie.js';
import {Data} from './data.js';
import Button from './Add_movie.js';
import { useState } from "react";
export default function My_func(){
	const [movies, setMovies] = useState(Data);
	const [count, setCount] = useState({});
	
	const handleDelete = (id) => {
		const updatedMovies = movies.filter((movie) => movie.id !== id);
		setMovies(updatedMovies);
	  };
	  	

	const handleLike = (id) => {
		const updatecount={...count}
		if (updatecount[id] == undefined) {
			updatecount[id]=1;
		  
	  } else{
		  updatecount[id]+=1;
		}
		
		setCount(updatecount)
	  };
	  
	  const handleDislike = (id) => {
		const updatecount={...count}
		if (updatecount[id] == undefined) {
			updatecount[id]=1;
		  
	  } else{
		  updatecount[id]-=1;
		}
		setCount(updatecount)
	  };
	  
	  
	  const sort = movies.sort((a,b)=>{
	  	const Vote1= count[a.id] || 0;
	  	const Vote2= count[b.id] || 0;
	  	return Vote2 - Vote1 ;
	  })
	  


  return (
    <>
    	<Header />
        {movies.map((item)=>
            <div key={item.id}>
            	<Row_of_movie
		         movie={item}
		         onDelete={() => handleDelete(item.id)}
		         handleDislike={()=>handleDislike(item.id)}
		         handleLike={()=>handleLike(item.id)}
		         count={count[item.id]}
		             	
               />
  
               <div className="empty">
               <hr className="line" />
               </div>
            </div>
            	
        )
        }
     	<Button/>
      	
    </>
  );
}
