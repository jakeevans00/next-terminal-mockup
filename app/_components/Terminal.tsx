"use client";

import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import Image from "next/image";
import githubImage from "@/public/image.png";
import linkedInImage from "@/public/linkedin.png";
import trashImage from "@/public/trash.png";

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
    <div className="fixed left-0 bottom-0 w-full terminal-color text-white z-50">
      <div className="flex justify-between p-4 terminal">
        <div className='flex gap-4 '>
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
        <div className='flex gap-3'>
          <Image src={githubImage} alt='Github image' width={20} height={20} />
          <Image src={linkedInImage} alt='Github image' width={20} height={20} />
          <Image src={trashImage} alt='Github image' width={20} height={20} />
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
          className="bg-inherit text-yellow-500 outline-none flex-grow"
          value={input}
          onChange={handleChange}
          onKeyDown={handleKeyUp}
          placeholder="Try typing 'hello'"
        />
      </div>
    </div>
  );
};

export default Terminal;
