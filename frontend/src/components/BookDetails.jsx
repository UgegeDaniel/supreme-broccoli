// import { useState, useEffect } from 'react'
import { graphql } from 'react-apollo'
import { getBookQuery } from '../queries/queries'

const BookDetails = (props) => {
    // const [bookDetails, setBookDetails] = useState({})
    const { book } = props.data

    return (
        <div>
            {book ?
                (
                    <>
                        <h5>{book?.name}</h5>
                        <p>{book?.genre}</p>
                        <p>{book?.author.name}</p>
                        <p>Other Books by this author</p>
                        {
                            book?.author.books.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))
                        }
                    </>
                ) : 
                <h5> No Book Selected</h5>
            }

        </div>
    )
}

export default graphql(getBookQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.bookId
            }
        }
    }
})(BookDetails)