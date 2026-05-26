const TerminalLine = () => {
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
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalLine;
