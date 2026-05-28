import { HOBBY } from "../constants";

export default function HeadersHobby({
  name,
  onBack,
}: {
  name: string;
  onBack: () => void;
}) {
  const index = HOBBY.findIndex((h) => h.name === name);

  const formatTitle = (filename: string): string => {
    return filename
      .replace(/\.(pdf|log|pic|my|txt|loc)$/i, "") // Strips the file extensions case-insensitively
      .replace(/_/g, " ") // Replaces all underscores with empty spaces
      .toUpperCase(); // Forces lowercase to match the quiet UI tone
  };

  let color = "";

  if (HOBBY[index]?.detail?.status === "DONE") {
    color = "var(--accent)";
  } else if (HOBBY[index]?.detail?.status === "ON-GOING") {
    color = "var(--err)";
  }

  return (
    <div className="headers-container">
      <div className="headers-wrapper">
        <span className="headers-back" onClick={onBack}>
          back /hobby/
        </span>
        <span className="text-dim">{name}</span>
      </div>
      <div className="text-cmd py-2">
        <span>$</span>
        <span>cat {name}</span>
      </div>
      <div className="text-dim">
        <span>
          {String(index + 1).padStart(2, "0")} /{" "}
          {String(HOBBY.length).padStart(2, "0")}
        </span>
      </div>
      <h1 className="border-b">{formatTitle(HOBBY[index]?.name)}</h1>
      <div className="headers-detail-wrapper">
        <div className="text-cmd">
          <span>Description: </span>
          <span>
            <b>{HOBBY[index]?.description}</b>
          </span>
        </div>
        <div className="headers-details">
          <div>
            <span>Modified: </span>
            <span className="text-dim">{HOBBY[index]?.modified}</span>
          </div>
          <div>
            <span>Size: </span>
            <span className="text-dim">{HOBBY[index]?.size}</span>
          </div>
          <div>
            <span>Platform: </span>
            <span className="text-dim">{HOBBY[index]?.platform}</span>
          </div>
          <div>
            <span>Status: </span>
            <span style={{ color }}>{HOBBY[index]?.detail?.status}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
