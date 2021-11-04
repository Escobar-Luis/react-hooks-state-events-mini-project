import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import { useState } from "react";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS)
  
  //my first mistake was setting the default state to the category data. Instead we set it to "All" to construct a ternary statement
  const[category, setCategory] = useState('All')

  function handleDelete (deletedTaskText) {
    setTasks(tasks.filter((task) => task.text !== deletedTaskText))
  }
//here we are filtering the tasks data to show all if the category is "all" or only show those where the tasks category is the same as the selected category which will change everytime the user clicks ont the filterable tabs.
  const visibleTasks = tasks.filter((task) => category === 'All' || task.category === category)

  //we declare the addTask function for our NewTaskForm in our parent because we can access our setTasks function. On this function we put in a parameter of new task which is being populated from the NewTaskForm
  function handleAddTask (newTask) {
    setTasks([...tasks, newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      {/*passing down the categories data to category filter, passing down our selected category to our child but why set the state in App?, passing the setCategory as well to manipulate our state using the users inputs in the CategoryFilter*/}
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectedCategory={setCategory} />
      {/*we call each category cat so we don't interfere with the other variables, we also pass the handleAddTask argument since our newTask will be created their*/}
      <NewTaskForm categories={CATEGORIES.filter((cat)=> cat !== 'All')} onTaskFormSubmit={handleAddTask}/>
      {/*we pass visible tasks down to our TaskList as the actual data being rendered since in our parent component we are changing the tasks state value depending on the current state of the category value matching up with the tasks category*/}
      <TaskList tasks={visibleTasks} onDeleteTask={handleDelete}/>
    </div>
  );
}

export default App;
