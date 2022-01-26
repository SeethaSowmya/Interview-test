import styled from 'styled-components'

export const UniList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  list-style-type: none;
`
export const Items = styled.li`
  display: flex;
  flex-direction: row;
`
export const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`
export const SubFirstDiv = styled.div`
  display: flex;
  flex-direction: row;
`

export const SecondDiv = styled.div`
  display: flex;
  flex-direction: row;
  height: 30px;
  margin-top: 50px;
`
export const Para = styled.p`
  margin: 0px;
  margin-left: 2px;
`
export const Type = styled(Para)`
  background-color: #909bad;
  color: #000000;
`

export const ApplyButton = styled.button`
  border-color: blue;
  color: blue;
  background-color: #ffffff;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px;
  margin-right: 10px;
  text-decoration: none;
`
export const ViewButton = styled.button`
  border-width: 0px;
  color: #000000;
  background-color: #ffffff;
`
export const Heading = styled.h1`
  font-size: 15px;
`
