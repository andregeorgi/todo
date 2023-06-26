import ListComponent from "./components/ListComponent";

function App() {
  return (
    <div>
      <h1 className="title">Todo today</h1>
      <div className="content">
        <ListComponent />
      </div>
    </div>
  );
}

export default App;
