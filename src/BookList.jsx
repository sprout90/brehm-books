import React, {useState, useEffect} from "react";

function BookList({books}){

    const [clickedBookId, setClickedBookId] = useState(); 
    const [comments, setComments] = useState([]);


    useEffect(() => {

        async function loadComments(){
            const queryString = `https://jsonplaceholder.typicode.com/posts/${clickedBookId}/comments`;
            const response = await fetch(queryString);
            const comments = await response.json();
            setComments(comments)
        };

        loadComments();

    }, [clickedBookId] );


    const clickHandler = (event) => {

        const bookBodyTag = event.target;
        setClickedBookId(bookBodyTag.id);
    }

    const bookOutput = books.map((book) => {
        return (
        <div>
            <div>
                <p>{book.id} - {book.title}</p>
            </div>
            <div id={book.id} onClick={clickHandler}>
                {book.body}
            </div>
            <div>
                <hr/>
            </div>
            <div id="Comments">  
               { (book.id == clickedBookId) ? (comments.map((comment) => 
                { return (<span><p>Email: {comment.email}</p> <p>Comment: {comment.body}</p></span>  )
                    
                } )) : "" }
            </div>

        </div>
    
        )
    })

    return (
        <div>
        {bookOutput}
        </div>
    );

};

export default BookList;
