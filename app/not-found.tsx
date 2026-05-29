export default function NotFound() {
  return (
    <main className="content-wrapper">
      <div className="text-cmd">
        <span>$</span>
        <span>cd /unknown-path</span>
      </div>
      <div className="text-dim py-1">
        cd: no such file or directory: /unknown-path
      </div>

      <div className="my-2">
        <pre className="ascii-name">{asciiArt}</pre>
      </div>

      <div className="text-cmd mt-4">
        <span>$</span>
        <span>Permission denied: /unknown-path</span>
      </div>

      <div className="text-cmd mt-4">
        <span>$</span>
        <span>
          echo &quot;Available routes: /, /home, /about, /experience,
          /hobby&quot;
        </span>
      </div>

      <div className="system-tip mt-6">
        <span className="text-accent">TIP:</span> Navigate to available routes
        using the terminal above
      </div>
    </main>
  );
}

const asciiArt = `
██╗  ██╗ ██████╗ ██╗  ██╗                                                  
██║  ██║██╔═████╗██║  ██║                                                  
███████║██║██╔██║███████║                                                  
╚════██║████╔╝██║╚════██║                                                  
     ██║╚██████╔╝     ██║                                                  
     ╚═╝ ╚═════╝      ╚═╝                                                  
                                                                           
███╗   ██╗ ██████╗ ████████╗   ███████╗ ██████╗ ██╗   ██╗███╗   ██╗██████╗ 
████╗  ██║██╔═══██╗╚══██╔══╝   ██╔════╝██╔═══██╗██║   ██║████╗  ██║██╔══██╗
██╔██╗ ██║██║   ██║   ██║█████╗█████╗  ██║   ██║██║   ██║██╔██╗ ██║██║  ██║
██║╚██╗██║██║   ██║   ██║╚════╝██╔══╝  ██║   ██║██║   ██║██║╚██╗██║██║  ██║
██║ ╚████║╚██████╔╝   ██║      ██║     ╚██████╔╝╚██████╔╝██║ ╚████║██████╔╝
╚═╝  ╚═══╝ ╚═════╝    ╚═╝      ╚═╝      ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ 
                                                                            `;
