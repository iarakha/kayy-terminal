export default function Hoby() {
  return (
    <main className="content-wrapper">
      <div className="text-cmd">
        <span>$</span>
        <span>ls -la /hobby/</span>
      </div>
      <div className="text-dim py-1">
        4 entries -- click filename to expand -- click [OPEN] to read case study
      </div>
      <div className="file-table">
        <div className="file-row hdr">
          <span>NAME</span>
          <span>SIZE</span>
          <span>MODIFIED</span>
          <span>DESCRIPTION</span>
        </div>

        {HOBBY.map((file) => {
          let color = "";

          if (file.detail?.status === "DONE") {
            color = "var(--dim)";
          } else if (file.detail?.status === "ON-GOING") {
            color = "var(--err)";
          }

          return (
            <div key={file.name}>
              <div className="file-row">
                <span className="file-name">{file.name}</span>
                <span className="file-size">{file.size}</span>
                <span className="file-date">{file.modified}</span>
                <span className="dimtext">{file.description}</span>
              </div>
              <div className="file-meta">
                <div className="fm-row">
                  <span className="fm-key">DESC</span>
                  <span>{file.detail?.desc}</span>
                </div>
                {file.detail?.listactivity && (
                  <div className="fm-row">
                    <span className="fm-key">LIST</span>
                    <span>{file.detail?.listactivity}</span>
                  </div>
                )}
                {file.detail?.role && (
                  <div className="fm-row">
                    <span className="fm-key">ROLE</span>
                    <span>{file.detail?.role}</span>
                  </div>
                )}
                {file.detail?.status && (
                  <div className="fm-row">
                    <span className="fm-key">STATUS</span>
                    <span
                      style={{
                        color,
                      }}
                    >
                      {file.detail?.status}
                    </span>
                  </div>
                )}
                <span className="open-btn">$ cat {file.name} [OPEN]</span>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

const HOBBY = [
  {
    name: "README.md",
    size: "116.9kb",
    modified: "2026-05",
    description: "Rajin membaca jadi pintar, malas membaca jadi polisi",
    detail: {
      desc: "Rajin membaca jadi pintar, malas membaca jadi polisi",
      listactivity:
        "the alchemist, Supernova 1: Kesatria, Putri, & Bintang Jatuh, how to keep your cool, The Midnight Library",
      status: "DONE",
      url: "https://github.com/khay0318/reading-note",
    },
  },
  {
    name: "SPORT_ACTIVITY.track",
    size: "--",
    modified: "2025-05",
    description: "Case study on AI agent UX patterns and affordances",
    detail: {
      desc: "Case study on AI agent UX patterns and affordances",
      listactivity: "gym, running, swimming, tracking",
      status: "ACTIVE",
    },
  },
  {
    name: "PHOTOGRAPHY.pic",
    size: "27.5Gb",
    modified: "2026-05",
    description: "No Picture, No Story",
    detail: {
      desc: "I can picture the times that we won't get back - NeckDeep",
      listactivity: "minimalism, aesthetic, amatuer photography",
      status: "ON-GOING",
    },
  },
  {
    name: "CODING_PROJECT.my",
    size: "--",
    modified: "-",
    description: "Token cost companion creature -- early prototype",
    detail: {
      desc: "Token cost companion creature -- early prototype",
      role: "Team -- G1-for Merchant, Digipos by Telkom",
      status: "ON-GOING",
    },
  },
  {
    name: "TRAVEL_NOTE.send",
    size: "28Gb",
    modified: "2025-11",
    description: "Write down your travel experiences and memories",
    detail: {
      desc: "Dialah yang menjadikan bumi itu mudah untuk kamu jelajahi, maka berjalanlah ke segala penjurunya (Al-Mulk:15).",
      listactivity: "Yogyakarta, Surabaya, Malang, Thailand",
      status: "DONE",
      url: "https://github.com/khay0318/travel-note",
    },
  },
];
