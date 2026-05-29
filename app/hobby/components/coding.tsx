/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import HeadersHobby from "./HeadersHobby";

export default function Coding({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <HeadersHobby name="CODING_PROJECT.my" onBack={onBack} />
      <div className="content-items py-2">
        <div className="text-dim border-b"> // content</div>
        <div className="content-description">
          Everyone can make apps, but not everyone can code.
          <br />
          Ai can help us make apps, but it can&apos;t replace the creativity and
          problem-solving skills of a human.
          <br />
          And Ai can&apos;t replace the human touch.
          <br />
          <br />
          Being a programmer is not my dream
        </div>
        <div className="text-dim border-b"> // interface</div>
      </div>
      <div>
        <div className="content-interface">
          <Image
            className="image-slot"
            src="/assets/coding/coding-1.png"
            alt="read"
            width={230}
            height={400}
          />
          <Image
            className="image-slot"
            src="/assets/coding/coding-2.png"
            alt="read"
            width={580}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
