import {withRouter} from 'react-router-dom'
import DisplayList from '../DisplayList/DisplayList'

const Display = props => {
  const {deOne, deTwo} = props
  console.log(deTwo, '2')
  console.log(deOne, '1')
  // const {department, title, city, state, applyUrl} = detailsList
  // detailsList.map(each => console.log(each))
  return (
    <div>
      {deTwo.map(each => (
        <div>
          <h1>{each.department.title}</h1>
          <DisplayList details={deTwo} titleName={each.department.title} />
        </div>
      ))}
    </div>
  )
}

export default withRouter(Display)
