import React, {Fragment} from 'react';
import Comment from '../comment';

export default ( {comments, upvoteHandler, downvoteHandler} )  => {
    let items = comments.map(
        (comment,index) =>  
           <Comment key={index} 
                comment={comment} upvoteHandler={upvoteHandler} downvoteHandler={downvoteHandler}  />
    )
    return (
        <Fragment>
            {items}
        </Fragment>
    )
};