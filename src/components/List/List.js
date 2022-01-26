import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'
import {ImCross} from 'react-icons/im'

import './list.css'
import {
  PadContainer,
  SearchBar,
  Filters,
  SearchContainer,
  ViewDepartment,
  OptionsContainer,
  UnOrderedList,
  ListItems,
  SecondContainer,
  RemoveListItem,
} from './styledComponent'
import Display from '../Display/Display'

class List extends Component {
  state = {
    searchInput: '',
    department: [],
    optionId: '',
    locationId: '',
    location: [],
    functionList: [],
    functionId: '',
    showList: [],
    mainList: [],
    optionIdList: [],
    locationIdList: [],
    functionIdList: [],
  }

  componentDidMount() {
    this.getList()
  }

  OptionIdUpdate = event => {
    const {showList, optionIdList} = this.state
    const elements = [...optionIdList, event.target.value]
    const id = elements.join()
    const show = [...showList, event.target.value]
    console.log(show, 'added')
    this.setState({optionId: id, showList: show})
  }

  LocationIdUpdate = event => {
    const {showList, locationIdList} = this.state
    const elements = [...locationIdList, event.target.value]
    const id = elements.join()
    const show = [...showList, event.target.value]
    this.setState({locationId: id, showList: show})
  }

  SearchInputUpdate = event => {
    this.setState({searchInput: event.target.value})
  }

  Clear = () => {
    this.setState({
      showList: [],
      optionIdList: [],
      locationIdList: [],
      functionIdList: [],
      optionId: '',
      locationId: '',
      functionId: '',
    })
  }

  functionListUpdate = event => {
    const {showList, functionIdList} = this.state
    const elements = [...functionIdList, event.target.value]
    const id = elements.join()
    const show = [...showList, event.target.value]
    this.setState({functionId: id, showList: show})
  }

  getList = async () => {
    // const {optionId, locationId, functionId, searchInput} = this.state
    // const urlList = `https://demo.jobsoid.com/api/v1/jobs? q=${searchInput}&loc=${locationId}&dept=${optionId}&fun=${functionId}`
    // thought use above urlList but this query url is not working
    const urlList = `https://demo.jobsoid.com/api/v1/jobs?`
    const responselist = await fetch(urlList)
    const datalist = await responselist.json()
    console.log(datalist, 'datalist')
    const list = datalist.map(obj => ({
      id: obj.id,
      department: obj.department,
      title: obj.title,
      city: obj.location.city,
      state: obj.location.state,
      applyUrl: obj.applyUrl,
    }))
    const handylist = list.filter(each => each.department !== null)
    const singleList = handylist.map(box => box.department)

    const url = 'https://demo.jobsoid.com/api/v1/departments'
    const response = await fetch(url)
    const departmentList = await response.json()
    const updateDepartmentList = departmentList.map(each => ({
      id: each.id,
      title: each.title,
    }))

    const url2 = 'https://demo.jobsoid.com/api/v1/locations'
    const response2 = await fetch(url2)
    const locationList = await response2.json()
    const updateLocationList = locationList.map(item => ({
      id: item.id,
      title: item.title,
      city: item.city,
      state: item.state,
      country: item.country,
      zip: item.zip,
    }))

    const url3 = 'https://demo.jobsoid.com/api/v1/functions'
    const response3 = await fetch(url3)
    const funList = await response3.json()
    const functionList = funList.map(each => ({
      id: each.id,
      title: each.title,
    }))

    this.setState({
      department: updateDepartmentList,
      location: updateLocationList,
      functionList,
      mainList: handylist,
      singleList,
    })
  }

  RemoveItems = event => {
    const {showList} = this.state
    const temporary = showList.filter(each => each !== event.target.id)
    this.setState({showList: temporary}, this.getList)
    console.log(temporary)
  }

  render() {
    const {
      searchInput,
      department,
      location,
      locationId,
      optionId,
      functionList,
      functionId,
      showList,
      mainList,
      singleList,
    } = this.state
    console.log(mainList, 'mainlist')
    console.log(singleList, 'SingleList')

    let status = false
    if (showList.length !== 0) {
      status = true
    }
    return (
      <PadContainer>
        <Filters>
          <SearchContainer>
            <SearchBar
              placeholder="Search For Job"
              type="text"
              onChange={this.SearchInputUpdate}
              value={searchInput}
            />
            <BiSearch />
          </SearchContainer>
          <OptionsContainer>
            <ViewDepartment value={optionId} onChange={this.OptionIdUpdate}>
              {department.map(each => (
                <option value={each.title}>{each.title}</option>
              ))}
            </ViewDepartment>
            <ViewDepartment value={locationId} onChange={this.LocationIdUpdate}>
              {location.map(each => (
                <option value={each.title}>{each.title}</option>
              ))}
            </ViewDepartment>
            <ViewDepartment
              value={functionId}
              onChange={this.functionListUpdate}
            >
              {functionList.map(each => (
                <option value={each.title}>{each.title}</option>
              ))}
            </ViewDepartment>
          </OptionsContainer>
        </Filters>
        {status && (
          <SecondContainer>
            <UnOrderedList>
              {showList.map(each => (
                <ListItems key={each}>
                  <RemoveListItem id={each} onClick={this.RemoveItems}>
                    {each}
                    <ImCross className="cross" />
                  </RemoveListItem>
                </ListItems>
              ))}
            </UnOrderedList>
            <RemoveListItem onClick={this.Clear}>Clear All</RemoveListItem>
          </SecondContainer>
        )}
        <Display deOne={singleList} deTwo={mainList} />
      </PadContainer>
    )
  }
}

export default List
