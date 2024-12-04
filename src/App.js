import React from "react";
import "./style.css";
import Entry from "./Entry";
import Historical from "./Historical";
export default function App() {

  const modifiedData=Entry.map((child) => {
  return (<Historical key={child.id}
         {...child}
  
  />)
  }
  )
  return (
    <main>
   {modifiedData}
   </main>
  );
}
