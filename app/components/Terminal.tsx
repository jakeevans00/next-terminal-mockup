"use client";

import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

const Terminal: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string[]>([]);
  const [height, setHeight] = useState<number>(100);

  //   const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
  //     if (event.key === 'Enter') {
  //       setOutput([...output, `> ${input}`]);
  //       setInput('');
  //     }
  //   };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      setHeight((prevHeight) => prevHeight + 1);
    }
  }

  return (
    <div className="w-full mx-auto bg-black text-white">
      <div className="flex justify-between w-full border-t-[1px] border-indigo-700 p-4">
        <div className='flex flex-row gap-4 '>
          <div className='underline underline-offset-4 decoration-yellow-500'>
            Terminal
          </div>
          <div>
            Output
          </div>
          <div>
            Problems
          </div>
        </div>
        <div>
          <button>Social</button>
        </div>

      </div>

      <div className="overflow-y-auto" style={{ height: `${height}px` }}>
        {output.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>

      <div className="flex mt-2 p-4">
        <span className="mr-2">{'>'}</span>
        <input
          autoFocus
          type="text"
          className="bg-black text-yellow-500 outline-none flex-grow"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyUp}
          placeholder="Try typing 'help'"
        />
      </div>
    </div>
  );
};

export default Terminal;
