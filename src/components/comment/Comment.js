 import './Comment.css'
function Comment({name,email,body,id}){
    return(
        <div className="parent">
            <p><b>comment</b>:{id}</p>
            
            <p>{body}</p>
           <div className="comment-footer">
             <p>{name}</p>
            <p><b>email:</b>{email}</p>
           </div>
        </div>
    )
}
export default Comment