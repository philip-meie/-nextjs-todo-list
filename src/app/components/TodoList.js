export default function TodoList() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Todo List App</h1>
      <div>
        <input type="text" placeholder="Enter a new task.." />
        <button>Add</button>
      </div>
      <ul
        style={{
          listStyleType: "disc",
          textAlign: "left",
          display: "inline-block",
          marginTop: "20px",
        }}
      >
        <li><input type="checkbox" /> Sleep</li>
        <li>
          <input type="checkbox" defaultChecked />{" "}
          <span style={{ textDecoration: "line-through" }}>Join React class</span>
        </li>
        <li><input type="checkbox" /> Do react homework</li>
      </ul>
    </div>
  );
}
