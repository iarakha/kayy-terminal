"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TerminalLine = () => {
  const [command, setCommand] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      const value = e.currentTarget.value;

      if (value.trim() === "help") {
        setCommand(true);
      } else if (value.trim() === "clear") {
        setCommand(false);
      } else if (value.trim().startsWith("home")) {
        router.push("/");
      } else if (value.trim().startsWith("about")) {
        router.push("/about");
      } else if (value.trim().startsWith("hobby")) {
        router.push("/hobby");
      } else if (value.trim().startsWith("experience")) {
        router.push("/experience");
      } else if (value.trim().startsWith("book")) {
        router.push("/hobby?target=read-a-book");
      } else if (value.trim().startsWith("sport")) {
        router.push("/hobby?target=sport-activity");
      } else if (value.trim().startsWith("photo")) {
        router.push("/hobby?target=photograph");
      } else if (value.trim().startsWith("code")) {
        router.push("/hobby?target=coding-project");
      } else if (value.trim().startsWith("travel")) {
        router.push("/hobby?target=travel-note");
      } else {
        setInputValue("");
        setError("command not found: ss -- type 'help' for commands");
        return;
      }

      setError("");
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
      {error && <div className="terminal-output">{error}</div>}
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
