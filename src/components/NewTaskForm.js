import React from "react";
import { useState } from "react/cjs/react.development";

function NewTaskForm({categories, onTaskFormSubmit}) {
  const [text, setText] = useState('')
  const [category, setCategory] = useState('Code')

  //here we are passing whatever our current text and category values are in state to our handleAddTask function from our parent element that was passed down as OnTaskFormSubmit so our parent function can update our shown tasks. As well, at the end of our function we are resetting the state to our original default values set at the beginning of our function
  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({text, category})
    setText('')
    setCategory('Code')
  }

  return (
  // handle the submit button on the form tag
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        {/* on th input we delete the name= and set the value equal to the text state so it can be dynamic. As well we get the text value with an onChange where the function is done inline */}
        <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        {/* REMEMBER to create a value on the tags we have a state on so we can set it equal to its state to keep them dynamic. As well, we took out the All category in the parent function to make the map function here cleaner! */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
          <option key={cat}>{cat}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
