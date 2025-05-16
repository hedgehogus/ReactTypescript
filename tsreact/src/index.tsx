import { createRoot } from "react-dom/client";
import GuestList from "./state/GuestList";
import UserSearch from "./state/UserSearch";
import EventComponent from "./events/EventComponent";

const App = () => {
  return (
    <div>
      <EventComponent/>
    </div>
  );
};

const rootElement = document.querySelector("#root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
