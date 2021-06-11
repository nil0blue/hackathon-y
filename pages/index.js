import React from 'react'
import Fuse from 'fuse.js'
import Head from 'next/head'
import { Table } from 'evergreen-ui'
import Navbar from '../components/Navbar'

export async function getStaticProps() {
  const req = await fetch('http://localhost:3000/api/list')
  const rawEvents = await req.json()

  return { props: { rawEvents } }
}

export default class extends React.Component {
  state = {
    filteredEvents: [],
    searchQuery: ''
  }

  async componentDidMount() {
    this.setState({
      filteredEvents: this.props.rawEvents
    })

    this.fuse = new Fuse(this.props.rawEvents, {
      threshold: 0.3,
      keys: ['id', 'type', 'user']
    })
  }

  handleFilterChange(value) {
    const searchQuery = value

    this.setState({ searchQuery })

    if (searchQuery.length === 0) {
      this.setState({ filteredEvents: this.props.rawEvents })
      return
    }

    const filteredEvents = this.fuse.search(searchQuery)
    this.setState({ filteredEvents })
  }

  render() {
    const events = this.state.filteredEvents.length
      ? this.state.filteredEvents
      : this.props.rawEvents

    return (
      <div style={{ maxWidth: '800px', margin: 'auto' }}>
        <Head>
          <title>Hackathon</title>
        </Head>

        <Navbar selected="List Events" />

        <div>
          <Table>
            <Table.Head>
              <Table.SearchHeaderCell
                onChange={this.handleFilterChange.bind(this)}
                value={this.state.searchQuery}
              />
              <Table.TextHeaderCell>Type</Table.TextHeaderCell>
              <Table.TextHeaderCell>User</Table.TextHeaderCell>
              <Table.TextHeaderCell>Created At</Table.TextHeaderCell>
            </Table.Head>
            <Table.VirtualBody height={800}>
              {events.map(event => {
                return <Table.Row key={event.id}>
                  <Table.TextCell>
                    {event.id}
                  </Table.TextCell>
                  <Table.TextCell>
                    {event.type}
                  </Table.TextCell>
                  <Table.TextCell>
                    {event.user}
                  </Table.TextCell>
                  <Table.TextCell>
                    {event.timestamp}
                  </Table.TextCell>
                </Table.Row>
              })}
            </Table.VirtualBody>
          </Table>
        </div>
      </div>
    )
  }
}