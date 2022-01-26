import {Component} from 'react'
import {HiOfficeBuilding} from 'react-icons/hi'
import {ImLocation} from 'react-icons/im'

import {
  UniList,
  Items,
  FirstDiv,
  SubFirstDiv,
  Para,
  Type,
  SecondDiv,
  ApplyButton,
  Heading,
  MainContainer,
} from './styledComponents'

class JobDetails extends Component {
  state = {data: '', list: []}

  componentDidMount() {
    this.getJobDetails()
  }

  getJobDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(match)
    const url = `https://demo.jobsoid.com/api/v1/jobs/${id}`
    const response = await fetch(url)
    console.log(response)
    const data = await response.json()
    console.log(data)
    const list = {
      id: data.id,
      department: data.department.title,
      title: data.title,
      city: data.location.city,
      state: data.location.state,
      applyUrl: data.applyUrl,
    }
    console.log(list, 'list')

    this.setState({data: data.description, list})
  }

  render() {
    const {list, data} = this.state
    console.log(data)
    return (
      <MainContainer>
        <UniList>
          <Items>
            <FirstDiv>
              <Heading>{list.department} at Teknorix Systems Goa</Heading>
              <SubFirstDiv>
                <HiOfficeBuilding className="view" />
                <Para>{list.title}</Para>
                <ImLocation className="view" />
                <Para>{list.city}</Para>
                <Para>{list.state} </Para>
                <Type>Fulltime</Type>
              </SubFirstDiv>
              <SecondDiv>
                <ApplyButton>
                  <a href={list.applyUrl}>Apply</a>
                </ApplyButton>
              </SecondDiv>
            </FirstDiv>
          </Items>
        </UniList>
        <hr />
        {data}
      </MainContainer>
    )
  }
}

export default JobDetails
