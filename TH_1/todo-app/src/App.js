import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Học lập trình web với React', dueDate: 'Tomorrow', color: 'orange' },
    { id: 2, text: 'Gửi email nộp bài tập về nhà', dueDate: 'Saturday', color: 'purple' },
    { id: 3, text: 'Học từ vựng tiếng anh mỗi ngày', dueDate: 'Monday', color: 'red' },
    { id: 4, text: 'Viết tiểu luận môn Triết học', dueDate: 'Today', color: 'green' }
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskItem = {
        id: tasks.length + 1,
        text: newTask,
        dueDate: 'No date',
        color: 'gray'
      };
      setTasks([...tasks, newTaskItem]);
      setNewTask('');
    }
  };

  return (
    <div className="app">
      <h1>List <span role="img" aria-label="target">🎯</span></h1>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="task-text">
              <span className={`dot ${task.color}`}></span>
              {task.text}
              <span className="due-date">{task.dueDate}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="new-task">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add task"
        />
        <button onClick={addTask}>Thêm
        </button>
      </div>
    </div>
  );
}

export default App;
