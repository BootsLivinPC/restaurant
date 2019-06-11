import React from 'react'
import Bar from './Bar'
import {Grid, } from 'semantic-ui-react'


const BarList = ({bars, updateBar, deleteBar, editing }) => (
  <Grid columns={3} doubling>
  
    { bars.map( bar => 
     <Grid.Column key={bar.id}>
      <Bar 
      key={bar.id}
      {...bar}
      updateBar={updateBar}
      deleteBar={deleteBar}
      editing={editing}
      />
      </Grid.Column>
      )
    }
  </Grid>
)

export default BarList