import React from 'react'
import Router from 'next/router'
import { Tab, TabNavigation } from 'evergreen-ui'

export default class Navbar extends React.Component {
  render() {
    let tabs = [
      {
        label: 'List Events',
        href: '/'
      },
      {
        label: 'New Event',
        href: '/new'
      },
    ]

    return (
      <div style={{ maxWidth: '200px', margin: '20px auto' }}>
        <TabNavigation>
          {tabs.map((tab, index) => (
            <Tab
              is="a"
              key={index}
              href={tab.href}
              isSelected={tab.label === this.props.selected}
              onSelect={() => Router.push(tab.href)}>
                {tab.label}
            </Tab>
          ))}
        </TabNavigation>
      </div>
    )
  }
}