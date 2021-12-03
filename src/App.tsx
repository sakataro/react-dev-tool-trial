import React, { useState } from 'react';
import './App.css';

const createId = (): string => Math.random().toString(32).substring(2);
const createDefaultSomethings = () => {
  return [...Array(5000)].map((value, index) => {
    return {
      id: createId(),
      name: `なんかの名前${index}`,
    };
  });
};

function App(): JSX.Element {
  const [name, setName] = useState('');
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSomethings([
      ...somethings,
      {
        id: createId(),
        name,
      },
    ]);
    setName('');
  };
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log(e);
  };
  const [somethings, setSomethings] = useState(createDefaultSomethings());
  return (
    <div className="App">
      <h1>なんかのアプリ</h1>
      <h2>作成</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="taskName"
          type="text"
          value={name}
          onChange={handleChange}
        />
        <button type="submit">作成</button>
      </form>
      <h2>一覧</h2>
      <div>
        {somethings.map((something) => (
          <Something key={something.id} name={something.name} />
        ))}
      </div>
    </div>
  );
}

const Something = ({ name }: { name: string }): JSX.Element => {
  return (
    <div>
      <p>{name}</p>
    </div>
  );
};

export default App;
