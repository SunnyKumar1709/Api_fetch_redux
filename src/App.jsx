import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import DataTable from "./components/DataTable/DataTable";
import store from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <Header />
          <DataTable />
          <Footer />
        </div>
      </Provider>
    </>
  );
}

export default App;
