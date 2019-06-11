import React from 'react'
import { Form, } from 'semantic-ui-react'

class BarForms extends React.Component {
  state = { title: "", description: "",  }

  componentDidMount() {
    // checking to see if id exists, if it does setting state
   const {title, description, id } = this.props;
   if (id)
    this.setState({ title, description, });
   //  id && this.setState({ title, description, }); 
   //or this ternary instead of the if statement
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value, })
  }

handleSubmit = (e) => {
  e.preventDefault()
  // if (this.props.id) {
  //   this.props.edit({id: this.props.id, ...this.state, });
  //   this.props.toggleEdit()
  // } else {
  this.props.addBar(this.state);
  // };
  this.setState({ title: "", description: "", })
}

render() {
  return (
    <Form onSubmit={this.handleSubmit}>
    <Form.Group widths="equal">
     <Form.Input
     label="Bar"
     name="title"
     placeholder="Add A New Bar"
     required
     value={this.state.title}
     onChange={this.handleChange}
     />
     <Form.Input
     label="Description"
     name="description"
     placeholder="What kind of bar?"
     required
     value={this.state.description}
     onChange={this.handleChange}
     />
    <Form.Button color="green">Submit</Form.Button>
    </Form.Group>
    </Form>
  )
}

}

export default BarForms