import { Provider } from "react-redux";
import Form from "./componenets/Form/Form";
import ResponseSection from "./componenets/ResponseSection/ResponseSection";
import store from "./redux/store";

function App() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center m-9 gap-x-2 ">
      <Provider store={store}>
        <Form />
        <ResponseSection />
      </Provider>
    </div>
  );
}

export default App;
