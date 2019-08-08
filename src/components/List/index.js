import React from "react";
import "./style.css";

// This component exports both the List and ListItem components

export const List = ({ children }) => (
  <ul className="list-group">
    {children}
  </ul>
);

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
};

//TODO: Research FlatList and determine if we can populate List Items into it
export const FlatList = ({ children }) => (
  <FlatList

  >{children}
    </FlatList>
);
