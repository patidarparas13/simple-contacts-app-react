import React, { Component } from "react";
import ListContacts from "./ListContacts";
import PropTypes from "prop-types";

class App extends Component {
  state = {
    contacts: [
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "karen_isgrigg",
        avatarURL: "https://picsum.photos/200",
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "richardkalehoff",
        avatarURL: "https://picsum.photos/id/237/200/300",
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "tylermcginnis",
        avatarURL: "https://picsum.photos/seed/picsum/200/300",
      },
    ],
  };
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id;
      }),
    }));
  };
  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default App;
