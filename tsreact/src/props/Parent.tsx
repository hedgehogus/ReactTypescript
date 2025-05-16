import { ChildAsFC } from "./Child";

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log("clicked")} >
    someText
    </ChildAsFC>;
};

export default Parent;
