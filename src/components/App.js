import React, { useState, useMemo } from "react";
import "./../styles/App.css";

const generateTasks = () => {
  const tasks = [];
  for (let i = 1; i <= 50; i++) {
    tasks.push({ id: i, title: `Todo ${i}`, completed: i <= 25 });
  }
  return tasks;
};

const App = () => {
  const [currentTab, setCurrentTab] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const [tasks] = useState(generateTasks);

  const filteredTasks = useMemo(() => {
    if (currentTab === "all") return tasks;
    if (currentTab === "active") return tasks.filter((task) => !task.completed);
    if (currentTab === "completed")
      return tasks.filter((task) => task.completed);
    return tasks;
  }, [currentTab, tasks]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

const simulateSlowRendering = () => {
  setTimeout(() => {
    console.log("Note:List is artificially slowed down")
  }, 1000);
};

  const renderTaskList = () => {
    simulateSlowRendering();
    return (
      <ul>
        {filteredTasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    );
  };

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setCurrentTab("all")}>All</button>
      <button onClick={() => setCurrentTab("active")}>Active</button>
      <button onClick={() => setCurrentTab("completed")}>Completed</button>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {renderTaskList()}
    </div>
  );
};

export default App;
