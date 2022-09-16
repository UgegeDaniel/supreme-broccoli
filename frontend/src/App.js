import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //fe-step-3-i 
import ApolloClient from 'apollo-boost'
import {ApolloProvider} from 'react-apollo'
//pages and components 
import Home from './pages/home' // fe-step-3a-i 
import Navbar from './components/Navbar' //fe-step-4-i

//apollo client setup  //fe-step-5-gqlApollo-ii
const client = new ApolloClient({
 uri: 'http://localhost:4000/graphql'
})
//go to booklist component to see usage

function App() {
  return (
   <ApolloProvider client={client}>
    <div className="container">
      <Router>{/** fe-step-3-ii */}
        <Navbar /> {/** fe-step-4-ii */}
        <div className="pages">
          <Routes> {/** fe-step-3-iii */}
            <Route path="/" element={<Home />} /> {/** fe-step-3a-ii */}
          </Routes>
        </div>
      </Router>
    </div>
   </ApolloProvider>
  );
}

export default App;
