/* eslint-disable react/jsx-no-comment-textnodes */
"use client";
import Image from "next/image";
import HeadersHobby from "./HeadersHobby";

import BackgroundMusic from "./music";

export default function Photograph({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <BackgroundMusic />
      <HeadersHobby name="PHOTOGRAPHY.pic" onBack={onBack} />
      <div className="content-items py-2">
        <div className="text-dim border-b"> // content</div>

        <div className="content-description">
          Cause a picture is all that I have <br />
          To remind me that you&apos;re never comin&apos; back
          <br />
          If I picture it now it just makes me sad
          <br />
          And right now I just wish you were here
          <br />
          Don&apos;t say everything&apos;s meant to be
          <br />
          &apos;Cause you know it&apos;s not what I believe
          <br />
          Can&apos;t help but think that it should&apos;ve been me
          <br />
          In the end, I just wish you were here
          <br />
        </div>
        <div className="text-dim border-b"> // interface</div>
      </div>
      <div>
        <div className="content-interface">
          <Image
            className="image-slot"
            src="/assets/photography/photo-1.png"
            alt="photo-1"
            width={300}
            height={300}
          />
          <Image
            className="image-slot"
            src="/assets/photography/photo-2.png"
            alt="photo-2"
            width={300}
            height={300}
          />{" "}
          <Image
            className="image-slot"
            src="/assets/photography/photo-3.png"
            alt="photo-3"
            width={300}
            height={300}
          />{" "}
          <Image
            className="image-slot"
            src="/assets/photography/photo-4.png"
            alt="photo-4"
            width={300}
            height={300}
          />
          <Image
            className="image-slot"
            src="/assets/photography/photo-5.png"
            alt="photo-5"
            width={300}
            height={300}
          />
          <Image
            className="image-slot"
            src="/assets/photography/photo-6.png"
            alt="photo-6"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
