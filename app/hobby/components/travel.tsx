/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import HeadersHobby from "./HeadersHobby";

export default function Travel({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <HeadersHobby name="TRAVEL_NOTE.loc" onBack={onBack} />
      <div className="content-items py-2">
        <div className="text-dim border-b"> // content</div>
        <div className="my-2 w-70">
          Pergi yang jauh, jangan lupa pulang.
          <br />
          Tuhan menciptakan dunia ini dengan indah.
          <br />
          Dialah yang menjadikan bumi itu mudah untuk kamu jelajahi, maka
          berjalanlah ke segala penjurunya (Al-Mulk:15).
          <br />
          <br />
          Setiap perjalanan adalah peluang untuk belajar dan tumbuh.
          <br />
          Ada cerita yang dilalui, ada kenangan yang dibawa pulang.
        </div>
        <div className="text-dim border-b"> // interface</div>
      </div>
      <div>
        <div className="content-interface">
          <Image
            className="image-slot"
            src="/assets/travel/travel-1.png"
            alt="travel-1"
            width={300}
            height={400}
          />{" "}
          <Image
            className="image-slot"
            src="/assets/travel/travel-2.png"
            alt="travel-2"
            width={300}
            height={400}
          />
          <Image
            className="image-slot"
            src="/assets/travel/travel-3.png"
            alt="travel-3"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
