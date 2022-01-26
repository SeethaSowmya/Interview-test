import './App.css'
import {Route, Switch} from 'react-router-dom'
import List from './components/List/List'
import JobDetails from './components/JobDetails/JobDetails'

const App = () => (
  <Switch>
    <Route exact path="/" component={List} />
    <Route exact path="/api/v1/jobs/:id" component={JobDetails} />
  </Switch>
)

export default App
