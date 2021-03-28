import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Home from './components/pages/Home'
import InfiniteScroll from './components/pages/InfiniteScroll'
import Pagination from './components/pages/Pagination'

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/infinite' component={InfiniteScroll} />
          <Route exact path='/pagination' component={Pagination} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
