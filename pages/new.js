import React from 'react'
import Head from 'next/head'
import { Pane, Label, TextInput, Button, Select, toaster } from 'evergreen-ui'
import Navbar from '../components/Navbar'

export default class extends React.Component {
  async save(e) {
    e.preventDefault()
    toaster.success('Event added!')
  }

  render() {
    return (
      <div>
        <Head>
          <title>New Event</title>
        </Head>

        <Navbar selected="New Event" />

        <div style={{ maxWidth: '400px', margin: 'auto' }}>
          <form onSubmit={this.save.bind(this)}>
            <Pane marginBottom={20}>
              <Label htmlFor="type" marginBottom={5} display="block">
                Type
              </Label>
              <Select id="type" width="100%">
                <option value="create">Create</option>
                <option value="read">Read</option>
                <option value="update">Update</option>
                <option value="delete">Delete</option>
              </Select>
            </Pane>
            
            <Pane marginBottom={20}>
              <Label htmlFor="user" marginBottom={5} display="block">
                User
              </Label>
              <TextInput id="user" width="100%" />
            </Pane>

            <Pane>
              <Button height={40} appearance="primary">
                Add Event
              </Button>
            </Pane>
          </form>
        </div>
      </div>
    )
  }
}