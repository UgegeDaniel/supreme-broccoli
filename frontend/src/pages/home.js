import { useState } from 'react'
import Workouts from '../components/Workouts'
import WorkoutsForm from '../components/WorkoutsForm'
import BookList from '../components/BookList'
import AddBook from '../components/AddBook'
import BookDetails from '../components/BookDetails'

const Home = () => {
    const [selected, setSelected] = useState('')
    return (
        <div>
            <section className='section'>
                <p>This component uses Mongo db database with express, node and mongoose</p>
                <Workouts />
                <WorkoutsForm />
            </section>
            <section className='section'>
                <p>This component uses Mongo db database with express, node, graphql and mongoose</p>
                <BookList setSelected={setSelected} />
                <BookDetails bookId={selected} />
                <AddBook />
            </section>
        </div>
    )
}
export default Home