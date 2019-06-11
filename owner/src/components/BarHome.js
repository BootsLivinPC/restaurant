import React, { Component, } from 'react';
import BarForm from './BarForms';
import BarList from './BarList';
import { Container, Header} from "semantic-ui-react";
import axios from 'axios'


class BarHome extends Component {
  state = { bars: [], editing: false, 
};

  componentDidMount() {
   axios.get("/api/bars")
   .then( res => {
     this.setState({ bars: res.data, })
   })
   .catch( err => {
     console.log(err)
   })
  }

  addBar = (title, description) => {
   axios.post('/api/bars', { title, description })
   .then( res => {
     const {bars, } = this.state
     this.setState({ bars: [...bars, res.data], })
   })
  }

  updateBar = (id) => {
   axios.put(`/api/bars/${id}`)
   .then(res => {
     const bars = this.state.bars.map( t => {
       if (t.id === id)
       return res.data
       return t
     })
     this.setState({ bars })
   })
  }

  deleteBar = (id) => {
  axios.delete(`/api/bars/${id}`)
  .then( res => {
    const { bars, } = this.state
    this.setState({ bars: bars.filter(t => t.id !== id ), })
  })
  }

  toggleEdit = () => this.setState({ editing: !this.state.editing, })

  render() {
    return (
      <Container style={{ padding: "30px 0", }}>
      <Header>New Bar Guide</Header>
      <hr/>
        <BarForm addBar={this.addBar} />
        <br />
        <br />
        <BarList
          bars={this.state.bars}
          updateBar={this.updateBar}
          deleteBar={this.deleteBar}
          editing={this.state.editing}
        />
      </Container>
    );
  }
}
export default BarHome
