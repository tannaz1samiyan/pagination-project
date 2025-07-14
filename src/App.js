import './App.css'
import ReactPaginate from 'react-paginate';
import 'bootstrap/dist/css/bootstrap.min.css'
import Comment from './components/comment/Comment';
import { useEffect, useState } from 'react';
function App() {
  const [comments ,setComments]=useState([])
  const [pageCount ,setPageCount]=useState(0)
   useEffect(()=>{
  fetchComment(1)
  },[])

  const handlePageClick=(data)=>{
    const pageNumber =(data.selected+1)
     fetchComment(pageNumber)
  }
 
  const fetchComment=(pageNumber)=>{
    fetch(`https://jsonplaceholder.typicode.com/comments/?_page=${pageNumber}`)
    .then(response=>{
      setPageCount(Math.ceil(response.headers.get('x-total-count')/10))
       return response.json()
    })
    .then(comment=>setComments(comment))
  }

  return (
 <div className="App">
  {
    comments.map(item=>
      <Comment {...item}/>
    )
  }

      <ReactPaginate
      pageCount={pageCount}

       onPageChange={handlePageClick}
       nextLabel="next >"
        previousLabel="< previous"
        breakLabel="..."
       containerClassName='pagination justify-content-center'
       pageClassName='page-item'
       previousClassName='page-item'
       nextClassName='page-item'
       breakClassName='page-item'
       pageLinkClassName='page-link'
       previousLinkClassName='page-link' 
       nextLinkClassName='page-link'
       breakLinkClassName='page-link' 
       activeLinkClassName='active'
        
       
      />
 </div>
   
  );
}

export default App;
