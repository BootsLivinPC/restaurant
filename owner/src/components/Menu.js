import React from 'react'
import axios from "axios"


class Menu extends React.Component {
state = { menus: [
{id:1, bar_id: 14, title: "Lunch"},
]}

// componentDidMount() {
//   axios.get(`/api/bars/${bar_id}/menus`)
//   .then( res => {
//     this.setState({ menus: res.data, })
//   })
//   .catch( err => {
//     console.log(err)
//   })
// }

// addMenu = (title) => {
//   axios.post(`/api/bars/${bar_id}/menus`, {title})
//   .then( res => {
//     this.setState({ menus: [...this.state.menus, res.data], })
//   })
// }

redner() {
  return(
    <div>Hello</div>
  )
}

}
export default Menu