import React from "react";

function CategoryFilter({categories, selectedCategory, onSelectedCategory}) {
  //we construct our btns by creating a new array using the map method on our categories data passed down from the parent, where within the map function we const a class name for each button by creating  a truthy or falsey statement on weather every category in our data is equal to our current state category. We then want to give each button a unique key using the name itself, the className given by our ternary statement, and an onClick function that does not take in any parameters and uses our setCategory function from our category state with a default value of all, and sets it to the category name we selected on which is why we create it in our map function because this would be for every button. Also, we display the category name between the buttton tags so our user can see their names. By changing the class name we can highlight the category dynamically so the user can see which one he is currently on.
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null
    return (
      <button
      key={category}
      className = {className}
      onClick ={() => onSelectedCategory(category)}
      >
        {category}
      </button>
    )})

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
