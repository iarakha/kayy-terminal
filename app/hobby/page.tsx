/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";

import Read from "./components/read";
import { HOBBY } from "./constants";
import Coding from "./components/coding";
import Photograph from "./components/photograph";
import Sport from "./components/sport";
import Travel from "./components/travel";

function HobyContent() {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [selectedHobby, setSelectedHobby] = useState<string | null>(null);
  const router = useRouter();

  const searchParams = useSearchParams();
  const hobby = searchParams.get("target");

  const onHandleHobby = (url: string) => {
    setSelectedHobby(url);
  };

  useEffect(() => {
    if (hobby === "read-a-book") {
      setSelectedHobby("/read-a-book");
    } else if (hobby === "photograph") {
      setSelectedHobby("/photograph");
    } else if (hobby === "sport-activity") {
      setSelectedHobby("/sport-activity");
    } else if (hobby === "coding-project") {
      setSelectedHobby("/coding-project");
    } else if (hobby === "travel-note") {
      setSelectedHobby("/travel-note");
    }
  }, [hobby]);

  const onHandleBack = () => {
    setSelectedHobby(null);
    router.push("/hobby");
  };

  return (
    <main className="content-wrapper">
      <div className={selectedHobby ? "hidden" : ""}>
        <div className="text-cmd">
          <span>$</span>
          <span>ls -la /hobby/</span>
        </div>
        <div className="text-dim py-1">
          5 entries -- click filename to expand -- click [OPEN] to read activity
          and story.
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
                  <span
                    className="file-name"
                    onClick={() => {
                      setExpanded(expanded === file.name ? null : file.name);
                    }}
                  >
                    {file.name}
                  </span>
                  <span className="file-size">{file.size}</span>
                  <span className="file-date">{file.modified}</span>
                  <span className="dimtext">{file.description}</span>
                </div>
                <div
                  className={
                    expanded === file.name ? "file-meta open" : "file-meta"
                  }
                >
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
                  <span
                    className="open-btn"
                    onClick={() => onHandleHobby(file.detail?.url || "")}
                  >
                    $ cat {file.name} [OPEN]
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {selectedHobby === "/read-a-book" && <Read onBack={onHandleBack} />}
      {selectedHobby === "/photograph" && <Photograph onBack={onHandleBack} />}
      {selectedHobby === "/sport-activity" && <Sport onBack={onHandleBack} />}
      {selectedHobby === "/coding-project" && <Coding onBack={onHandleBack} />}
      {selectedHobby === "/travel-note" && <Travel onBack={onHandleBack} />}
    </main>
  );
}

export default function Hoby() {
  return (
    <Suspense fallback={<div className="content-wrapper">Loading...</div>}>
      <HobyContent />
    </Suspense>
  );
}
