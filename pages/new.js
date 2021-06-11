import React from 'react'
import Head from 'next/head'
import { Pane, Label, TextInput, Button, Select, toaster } from 'evergreen-ui'
import Navbar from '../components/Navbar'

export default class extends React.Component {
  async save(e) {
    e.preventDefault()

    const data = {
      type: e.target.type.value,
      user: e.target.user.value,
    }

    try {
      await fetch('http://localhost:3000/api/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      toaster.success('Event added!')
    }
    catch(e) {
      toaster.danger(e.message)
    }
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
                User ID
              </Label>
              <TextInput id="user" defaultValue="Arthur" width="100%" />
            </Pane>

            <Pane marginBottom={20}>
              <Label htmlFor="transactionId" marginBottom={5} display="block">
                Transaction ID
              </Label>
              <TextInput id="transactionId" defaultValue="123" width="100%" />
            </Pane>

            <Pane marginBottom={20}>
              <Label htmlFor="timestamp" marginBottom={5} display="block">
                Timestamp
              </Label>
              <TextInput id="timestamp" defaultValue={new Date().toISOString()} width="100%" />
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