import './App.css';

const App = () => {
  console.log(new Date().getFullYear());

  return (
    <div>
      <div>{new Date().getFullYear()}</div>

      <br />

      <div>
        Copyright © {new Date().getFullYear()} Bobby Hadz
      </div>
    </div>
  );
};

export default App;
