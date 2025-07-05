import { ControlledForm } from "./components/ControlledForm";
import { UncontrolledForm } from "./components/UncontrolledForm";
import { DataFetcher } from "./components/DataFetcher";

export default function App() {
  return (
    <div>
      <ControlledForm />
      <hr />
      <UncontrolledForm />
      <hr />
      <DataFetcher />
    </div>
  );
}
