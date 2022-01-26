import {withRouter, Link} from 'react-router-dom'
import {HiOfficeBuilding} from 'react-icons/hi'
import {ImLocation} from 'react-icons/im'
import './DisplayList.css'
import {
  UniList,
  Items,
  FirstDiv,
  SubFirstDiv,
  Para,
  Type,
  SecondDiv,
  ApplyButton,
  ViewButton,
  Heading,
} from './styledComponents'

const DisplayList = props => {
  const {details, titleName} = props
  console.log(details, 'list2')
  console.log(titleName, 'titleName')
  // const {department, title, city, state, applyUrl} = detailsList
  const tap = details.filter(each => each.department.title === titleName)
  console.log(tap, 'tap')
  return (
    <div>
      <UniList>
        {tap.map(each => (
          <Items>
            <FirstDiv>
              <Heading>{each.title}</Heading>
              <SubFirstDiv>
                <HiOfficeBuilding className="view" />
                <Para>{titleName}</Para>
                <ImLocation className="view" />
                <Para>{each.city}</Para>
                <Para>, {each.state} </Para>
                <Type>Fulltime</Type>
              </SubFirstDiv>
            </FirstDiv>
            <SecondDiv>
              <ApplyButton>
                <a href={each.applyUrl}>Apply</a>
              </ApplyButton>
              <Link to={`/api/v1/jobs/${each.id}`}>
                <ViewButton>View</ViewButton>
              </Link>
            </SecondDiv>
          </Items>
        ))}
      </UniList>
    </div>
  )
}

export default withRouter(DisplayList)
