import AnotherContainer from "./AnotherContainer";
import FirstContainer from "./FirstContainer";
import { Route} from "react-router-dom";
import { Link } from "@material-ui/core";


function HomeContainer(){
    return(
        
    
          <>
          <Link
            to=""
            href='bookName' style={{ marginRight: 16 }}>
           BookName
          </Link>
          
          <Link
            to=""
            href='bookId' style={{ marginRight: 16 }}>
           BookId
          </Link>
            <Route path="/bookName" component={FirstContainer}>   
             
             </Route>  
             <Route path="/bookId" component={AnotherContainer}>   
             
             </Route>   
       </>
    )
}
export default HomeContainer;
