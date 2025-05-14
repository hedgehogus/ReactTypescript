import { createRoot } from "react-dom/client";

const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
    </div>
  );
};

const rootElement = document.querySelector("#root");
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<App />);
}
