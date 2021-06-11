import React from 'react'
import Head from 'next/head'
import { Table } from 'evergreen-ui'

export async function getStaticProps() {
  return {
    props: {
      events: [
        {
          id: '1',
          type: 'create',
          user: 'Jared',
          timestamp: new Date().toISOString()
        },
        {
          id: '2',
          type: 'update',
          user: 'Marcelo',
          timestamp: new Date().toISOString()
        }
      ]
    }
  }
}

export default class extends React.Component {
  render() {
    return (
      <div style={{ maxWidth: '1440px', margin: 'auto' }}>
        <Head>
          <title>Hackathon</title>
        </Head>

        <div>
          <Table>
            <Table.Head>
              <Table.TextHeaderCell>ID</Table.TextHeaderCell>
              <Table.TextHeaderCell>Type</Table.TextHeaderCell>
              <Table.TextHeaderCell>User</Table.TextHeaderCell>
              <Table.TextHeaderCell>Created At</Table.TextHeaderCell>
            </Table.Head>
            <Table.VirtualBody height={800}>
              {this.props.events.map(event => {
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