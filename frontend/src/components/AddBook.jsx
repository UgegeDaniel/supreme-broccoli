import { useState, useEffect } from 'react'
import { graphql, } from 'react-apollo'
// import * as compose from 'lodash.flowright'
import { getAuthorsQuery, addNewBookMutation, getBooksQuery } from '../queries/queries'

const AddBook = (props) => {
    const [newBook, setNewBook] = useState({ title: '', genre: '', authorId: '' })
    const [authors, setAuthors] = useState([])
    const [error, setError] = useState(false)
    const [data, setData] = useState({})
    const addNewBookMutation = props.addNewBookMutation
    useEffect(() => {
        if (!data?.loading) {
            setAuthors(data?.authors)
            setData(props.getAuthorsQuery)
        }
    }, [data.loading, data?.authors, props.getAuthorsQuery])
    useEffect(()=>{
        const cleanUp = setTimeout(()=>{
            setError(false)
        }, 5000)
        return () => clearTimeout(cleanUp)
    })
    const handleSubmit = (e) => {
        const { title, genre, authorId } = newBook
        e.preventDefault()
        if (!title || !genre || !authorId) {
            setError(true)
        }
        addNewBookMutation({
            variables: {
                name: title,
                genre,
                authorId
            },
            refetchQueries: [
                { query: getBooksQuery }
            ]
        })
        setNewBook({ title: '', genre: '', authorId: '' })
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Add a new Book</h3>
            <div className="form-control">
                <label>Book Title : </label>
                <input className="input-field" type="text" onChange={(e) => { setNewBook({ ...newBook, title: e.target.value }) }} value={newBook.title} placeholder='eg. Game of Thrones'/>
            </div>
            <div className="form-control">
                <label>genre :</label>
                <input className="input-field"type="text" onChange={(e) => { setNewBook({ ...newBook, genre: e.target.value }) }} value={newBook.genre} placeholder="eg. Fantasy"/>
            </div>
            <div className="form-control">
                <label>Author : </label>
                <select className="input-field" onChange={(e) => { setNewBook({ ...newBook, authorId: e.target.value }) }}>
                    <option>Select an Author</option>
                    {authors?.map((author) => (<option key={author.id} value={author.id}>{author.name}</option>))}
                </select>
            </div>
            {error && <p>please fill in all fields</p>}
            <button type='submit'>Add Book</button>
        </form>
    )
}
// export default compose(
//     graphql(getAuthorsQuery,{name: 'getAuthorsQuery'}),
//     graphql(addNewBookMutation.at, {name: 'addNewBookMutation'})
// )(AddBook)

export default
    graphql(addNewBookMutation, { name: "addNewBookMutation" })
        (graphql(getAuthorsQuery, { name: 'getAuthorsQuery' })(AddBook))
