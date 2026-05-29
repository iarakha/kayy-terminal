/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import HeadersHobby from "./HeadersHobby";

export default function Sport({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <HeadersHobby name="SPORT_ACTIVITY.log" onBack={onBack} />
      <div className="content-items py-2">
        <div className="text-dim border-b"> // content</div>
        <div className="content-description">
          Dalam tubuh yang sehat, terdapat jiwa yang kuat.
          <br />
          I don&apos;t want to be a fat uncle.
          <br /> I don&apos;t know why, but I always running to reduce stres.
          <br />
          <br />
          Berikut beberapa aktivitas olahraga yang pernah dilakukan:
          <br />
          <ul className="list-disc list-inside">
            <li>- 10K Run Event Jco, Bogor Run, Teman SOS</li>
            <li>- Tracking: Bukit Panisaan, Gunung Gede</li>
            <li>- Masih Gym</li>
            <li>- Renang Min 2x Sebulan</li>
          </ul>
        </div>
        <div className="text-dim border-b"> // interface</div>
      </div>
      <div>
        <div className="content-interface">
          <Image
            className="image-slot"
            src="/assets/sport/sport-1.png"
            alt="sport-1"
            width={300}
            height={400}
          />
          <Image
            className="image-slot"
            src="/assets/sport/sport-2.png"
            alt="sport-2"
            width={300}
            height={400}
          />
          <Image
            className="image-slot"
            src="/assets/sport/sport-3.png"
            alt="sport-3"
            width={300}
            height={400}
          />
          <Image
            className="image-slot"
            src="/assets/sport/sport-4.png"
            alt="sport-4"
            width={300}
            height={400}
          />
          <Image
            className="image-slot"
            src="/assets/sport/sport-5.png"
            alt="sport-5"
            width={300}
            height={400}
          />
          <Image
            className="image-slot"
            src="/assets/sport/sport-6.png"
            alt="sport-6"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
