import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import {compose} from "redux"; 


import { connect } from 'react-redux';
import { fetchUserLibrary } from '../userLibrary/userLibraryActions';


function FirstContainer({userData,fetchUserLibrary}) {
   
    useEffect(() => {
        console.log("in useEffect");
        fetchUserLibrary();
  
    },[])
    return(
        <>
       
        <h2>Book Name:{userData.map(userBook => userBook.book.name)}</h2>
      
        </>

    )
   
}
const mapStateToProps = state =>{
    return{
        userData:state.userLibrary
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchUserLibrary:() => dispatch(fetchUserLibrary())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FirstContainer);