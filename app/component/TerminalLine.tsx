"use client";

import { useState } from "react";

const TerminalLine = () => {
  const [command, setCommand] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // Handle command execution
      console.log("Enter key pressed", e.currentTarget.value);
      const value = e.currentTarget.value;

      if (value.trim() === "help") {
        setCommand(true);
      } else if (value.trim() === "clear") {
        setCommand(false);
      }

      setInputValue("");
    }
  };

  return (
    <div className="terminal-container">
      <div className="cmd-field">
        <div className="terminal-wrapper">
          <span className="terminal-prompt">kayy@terminal-kayOS:~$</span>
          <input
            className="terminal-input"
            type="text"
            autoComplete="off"
            spellCheck="false"
            placeholder="type a command (try: help)"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>
      {command && (
        <div className="terminal-output">
          available commands:
          <br />
          {COMMANDS_LIST.map((cmd, index) => (
            <div key={index} className="command-items">
              {cmd}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TerminalLine;

const COMMANDS_LIST = [
  "home // go to home page",
  "about // go to about page",
  "hoby // go to hoby page",
  "experience // go to experience page",
  "clear // clear terminal",
  "book // show book list my recommendation",
  "sport // show sport activity",
  "photo // show photo gallery",
  "code // show code snippet",
  "travel // show travel experiences",
  "? // unknown command",
];
