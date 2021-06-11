# Hackathon Y

## Idea

Create an events microservice, separate from API, to manage DXP Cloud events (such as activities or alerts).

## Team

- Arthur Burle
- Jared Gorski
- Marcelo Pinheiro
- Nilourfer Bustani
- Zeno Rocha

## High-Level View

- Create events:
  - events should be represented by an object that describes the event (type of event, when it happened, details and metadata, etc.)
  - events may have common or specific actions associated with them, whether they're methods on the events themselves or common operations
- View events:
  - events should be sortable and filterable
  - events should be able to communicate the current state of a set of properties
- Manage events:
  - events should be editable (they should have unique ids)
  - potentially, we should come up with a way to handle conflicts between edits

## Low-Level View

Manage MySQL Database

- Store all events

API endpoints

- `POST` - create an event
- `PATCH` - edit an event
- `GET` - fetch all events

User Interface

- Table to list all events
- Form to add a new event