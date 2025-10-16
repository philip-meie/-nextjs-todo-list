export default function Page() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "40px",
      }}
    >
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "48px",
          marginBottom: "12px",
        }}
      >
        Todo List App
      </h1>

      <div style={{ marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Enter a new task.."
          style={{
            padding: "8px",
            width: "320px",
            marginRight: "6px",
            border: "1px solid #999",
            borderRadius: "4px",
          }}
        />
        <button
          style={{
            padding: "8px 12px",
            border: "1px solid #999",
            borderRadius: "6px",
            backgroundColor: "white",
            color: "black",
            fontWeight: "bold",
          }}
        >
          Add
        </button>
      </div>

      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "24px",
          fontSize: "24px",
        }}
      >
        <li style={{ marginBottom: "8px" }}>
          <input type="checkbox" /> <span>Sleep</span>
        </li>
        <li style={{ marginBottom: "8px" }}>
          <input type="checkbox" defaultChecked />{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            Join React class
          </span>
        </li>
        <li style={{ marginBottom: "8px" }}>
          <input type="checkbox" /> <span>Do react homework</span>
        </li>
      </ul>
    </main>
  );
}
