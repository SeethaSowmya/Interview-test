import styled from 'styled-components'

export const PadContainer = styled.div`
  padding: 30px;
`
export const Filters = styled.div`
  background-color: #a5ada7;
  width: 100%;
  height: 30%;
  padding: 20px;
  display: flex;
  flex-direction: column;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
`
export const OptionsContainer = styled(Row)`
  justify-content: space-between;
`

export const UnOrderedList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style-type: none;
  padding-left: 0px;
  flex-wrap: wrap;
  flex-grow: 1;
`
export const RemoveListItem = styled.button`
  background-color: transparent;
  color: #000000;
  border-width: 0px;
  padding: 3px;
`
export const ListItems = styled.li`
  margin-left: 3px;
  margin-right: 3px;
  background-color: #ffffff;
`
export const SearchContainer = styled(Row)`
  flex-grow: 1;
  background-color: #ffffff;
  width: 100%;
  padding: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
`
export const SecondContainer = styled(Filters)`
  flex-direction: row;
  margin-top: 10px;
  height: 12%;
  padding: 2px;
`
export const SearchBar = styled.input`
  background-color: #ffffff;
  width: 100%;
  height: 30px;
  border-width: 0px;
`
export const ViewDepartment = styled.select`
  background-color: #ffffff;
  width: 28%;
`
