export default function Home() {
  return (
    <main className="content-wrapper">
      <pre className="ascii-name">{asciiArt}</pre>
      <div className="text-cmd">
        <span>$</span>
        <span>whoami</span>
      </div>
      <div className="profile-desc">
        Problem gathering, solution building without problem, fake photographer.
        <br />
        Programmer, Ai enthusiast, UI/Ux Designer. Born and raised in the
        fast-paced energy of Jakarta, my journey in technology began with a deep
        curiosity about how the digital world works.
      </div>
      <div>
        <div className="text-cmd">
          <span>$</span>
          <span>cat status.txt</span>
        </div>
        <div className="metadata-container">
          <div className="metadata-row">
            <span className="metadata-label">LOCATION</span>
            <span className="metadata-value">ID -- JKT</span>
          </div>
          <div className="metadata-row">
            <span className="metadata-label">FOCUS</span>
            <span className="metadata-value">
              Programming -- Consumer AI -- Personal Branding
            </span>
          </div>
          <div className="metadata-row">
            <span className="metadata-label">CONTACT</span>
            <span className="metadata-value">indra.rakha16@gmail.com</span>
          </div>
        </div>

        <div className="live-callout-box">
          <span className="live-indicator-dot"></span>
          <span>KAYY IS LIVE -- TUW 2026 + First Impression</span>
        </div>

        <footer className="system-tip">
          TIP: &#8593;&#8595; arrows to navigate-- type{" "}
          <span className="system-tip-highlight">help</span> for commands
        </footer>
      </div>
    </main>
  );
}

const asciiArt = `
██╗  ██╗ █████╗ ██╗   ██╗██╗   ██╗
██║ ██╔╝██╔══██╗╚██╗ ██╔╝╚██╗ ██╔╝
█████╔╝ ███████║ ╚████╔╝  ╚████╔╝ 
██╔═██╗ ██╔══██║  ╚██╔╝    ╚██╔╝  
██║  ██╗██║  ██║   ██║      ██║   
╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝      ╚═╝   
                                  `;
