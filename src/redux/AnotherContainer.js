import React from 'react';

import { connect } from 'react-redux';
import { fetchUserLibrary } from '../userLibrary/userLibraryActions';
import { withRouter } from 'react-router-dom';


function AnotherContainer({userData,fetchUserLibrary}) {
   
   
    return(
        <>
        <h2>Book Id:{userData.map(userBook => userBook.book.category)}</h2>
        </>

    )
   
}
const mapStateToProps = state =>{
     console.log("another container",state);
    return{
       
        userData:state.userLibrary
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        fetchUserLibrary:() => dispatch(fetchUserLibrary())
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps) (AnotherContainer));