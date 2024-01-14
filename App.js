const heading = React.createElement("h1", { id: "heading" }, "this is react ");

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { id: "heading" }, "this is react 1"),
    React.createElement("h2", { id: "heading" }, "this is react 2"),
  ]),
  React.createElement("div", { id: "parent" }, [
    React.createElement("h1", { id: "heading" }, "this is react 1"),
    React.createElement("h2", { id: "heading" }, "this is react 2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
