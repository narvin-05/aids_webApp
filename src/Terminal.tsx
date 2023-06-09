import React, { useEffect, useRef } from 'react';
import { Terminal } from 'xterm';
import 'xterm/css/xterm.css';

const TerminalComponent = () => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new Terminal();
    term.open(terminalRef.current);
    term.write('Welcome to the interactive terminal!\n');
    // term.write('.\n');
    term.write('Enter Assignment to upload assignment.!');
    
    // Example command handling
    term.onKey((e) => {
        const printable = !e.domEvent.altKey && !e.domEvent.ctrlKey && !e.domEvent.metaKey;
      if (e.domEvent.keyCode === 13) {
        term.write('\n');
        term.write(`$> ${term._core.buffer.active.cursorRow.text}`);
        term.write('\n');
      } else if (printable) {
        term.write(e.key);
      }
    });
    
    return () => {
<h1>Enter Login to login</h1>
        term.dispose();
    };
}, []);

  return <div 
  
  ref={terminalRef}>

  </div>;
};

export default TerminalComponent;
