import Form from "./componenets/Form/Form";
import ResponseSection from "./componenets/ResponseSection/ResponseSection";

function App() {
  return (
    <div className="flex flex-col md:flex-row justify-around items-center m-9 gap-x-2 ">
      <Form />
      <ResponseSection />
    </div>
  );
}

export default App;
