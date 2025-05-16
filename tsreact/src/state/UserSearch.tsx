import { useEffect, useRef, useState } from "react";

const users = [
  {
    name: "John Doe",
    age: 30,
  },
  {
    name: "Alex Smith",
    age: 20,
  },
  {
    name: "Michael Johnson",
    age: 33,
  },
];

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [name, setName] = useState("");
  const [user, setUser] = useState<{ name: string; age: number } | undefined>(
    undefined
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, [])

  const onClick = () => {
    const foundUser = users.find((user) => user.name === name);
    if (foundUser) {
      setUser(foundUser);
    } else {
      setUser(undefined);
    }
  };

  return (
    <div>
      User search
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Find user</button>
      <div>
        {user && user.name}
        {user && user.age}
      </div>
    </div>
  );
};

export default UserSearch;
