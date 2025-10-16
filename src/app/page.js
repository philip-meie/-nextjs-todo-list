export default function Page() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        margin: "60px auto",
        width: "600px",
        textAlign: "left",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontWeight: "bold",
          fontSize: "48px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        Todo List App
      </h1>

      {/* Input Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "24px",
        }}
      >
        <input
          type="text"
          placeholder="Enter a new task.."
          style={{
            padding: "10px",
            width: "320px",
            border: "1px solid #999",
            borderRadius: "4px",
            fontSize: "16px",
          }}
        />
        <button
          style={{
            padding: "10px 16px",
            marginLeft: "8px",
            border: "1px solid #999",
            borderRadius: "6px",
            backgroundColor: "#f3f3f3",
            cursor: "pointer",
          }}
        >
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul
        style={{
          listStyleType: "disc",
          paddingLeft: "40px",
          fontSize: "22px",
          lineHeight: "1.8",
        }}
      >
        <li>
          <input type="checkbox" /> <span>Sleep</span>
        </li>
        <li>
          <input type="checkbox" defaultChecked />{" "}
          <span style={{ textDecoration: "line-through", color: "gray" }}>
            Join React class
          </span>
        </li>
        <li>
          <input type="checkbox" /> <span>Do React homework</span>
        </li>
      </ul>
    </main>
  );
}