import { useState, useEffect } from 'react'
import { graphql } from 'react-apollo'
import {getBooksQuery} from '../queries/queries'

const BookList = ({ data, setSelected }) => {
    const [books, setBooks] = useState([])
    useEffect(() => {
        if (!data?.loading) {
            setBooks(data?.books)
         }
         console.log(books)
    }, [data?.books, data.loading, books])

    return (
        <div className="container">
            <p>Hello from Apollo GraphQl which is the alternative to axios for graphql</p>
            {
                books?.map((book) => (
                    <span className="chip" onClick={()=>setSelected(book.id)}key={book.id}>{book.name}</span>
                ))
            }
        </div>
    )
}
export default graphql(getBooksQuery)(BookList)