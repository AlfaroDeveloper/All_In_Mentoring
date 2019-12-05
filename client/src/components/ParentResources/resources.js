import React from 'react'
import { Item } from 'semantic-ui-react'

const ResourceProps = () => (
  <Item.Group>
    <Item>
      <Item.Content>
        <Item.Header><a className="file pdf icon" data-content="Code of Conduct" href="/assets/pdf/codeOfConduct.pdf" target = "blank">Code of Conduct</a></Item.Header>
        <i className="massive file pdf icon"></i>
        </Item.Content>

      <Item.Content>
      <Item.Header><a className="file pdf icon" data-content="Activity Waiver" href="/assets/pdf/liability.pdf" target = "blank">Activity Waiver</a></Item.Header>
        <i className="massive file pdf icon"></i>      </Item.Content>
    </Item>
  </Item.Group>
)

export default ResourceProps