import React from 'react'
import {Button, Card, } from "semantic-ui-react"
import BarForms from "./BarForms"
import Menu from "./Menu"

const Bar = ({id, title, updateBar, deleteBar, editing, description, }) => (
  
// tried to props drill editing or toggleEdit, I have no Idea.
    

  <Card.Group>
    <Card style={{styles}}>
    <>
    {// not sure what i am doing here, trying to toggle edit
      editing ? 
      <BarForms { ...this.props }
      toggleEdit={this.toggleEdit} />
      :
      <Card.Header>{title}</Card.Header>
      
      }
      </>
      <Card.Content>
      {description}
      <br/>
      {/* <Menu /> */}
      </Card.Content>
      <Card.Content extra>
      <div className="ui three tiny buttons">
      <Button
       size="tiny"
       basic color="green"
       onClick="{() => }">Menus
      </Button>

      <Button
      size="tiny"
      basic color="blue"
      onClick={() => updateBar(id)}>Edit
      </Button>

      <Button
      size="tiny"
      basic color="red"
      onClick={() => deleteBar(id)}>Destroy
      </Button>
      
      </div>
      </Card.Content>
    </Card>
  </Card.Group>
)
const styles = {
  flex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "auto",
  },
};

export default Bar