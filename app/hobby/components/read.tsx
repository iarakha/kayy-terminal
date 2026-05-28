/* eslint-disable react/jsx-no-comment-textnodes */
import Image from "next/image";
import HeadersHobby from "./HeadersHobby";

export default function Read({ onBack }: { onBack: () => void }) {
  return (
    <div>
      <HeadersHobby name="READ_A_BOOK.pdf" onBack={onBack} />
      <div className="content-items py-2">
        <div className="text-dim border-b"> // content</div>
        <div className="my-2 w-70">
          Tidakkah Anda ingin menemukan makna{" "}
          <span className="text-accent">HIDUP</span> selagi Anda hidup? Itulah
          kebahagiaan yang sesungguhnya.
          <br />
          (Supernova: Kesatria, Puteri, dan Bintang Jatuh)
          <br />
          <br />
          Dari hal yang mempertanyakan makna hidup inilah yang membedakan kita
          dengan hewan yang lainnya. Kita pertanyakaan tujuan hidup kita, alasan
          kita hidup.
          <br />
          Apakah alasan kita hidup hanya cuma untuk beribadah? Harusnya sih
          lebih dari itu &gt;&gt;
          <br />
          Ada banyak hal yang bisa kita pelajari dari buku.
          <br />
          <br />
          Berikut beberapa buku yang direkomendasikan:
          <br />
          <ul className="list-disc list-inside">
            <li>- The Alchemist</li>
            <li>- Supernova 1: Kesatria, Puteri, & Bintang Jatuh</li>
            <li>- How to Keep Your Cool</li>
            <li>- The Midnight Library</li>
          </ul>
        </div>
        <div className="text-dim border-b"> // interface</div>
      </div>
      <div>
        <div className="content-interface">
          <Image
            className="image-slot"
            src="/assets/book-cover/supernova.jpg"
            alt="read"
            width={300}
            height={400}
          />
          <Image
            className="image-slot"
            src="/assets/book-cover/the-alchemist.jpg"
            alt="read"
            width={300}
            height={400}
          />{" "}
          <Image
            className="image-slot"
            src="/assets/book-cover/midnight-library.jpg"
            alt="read"
            width={300}
            height={400}
          />{" "}
          <Image
            className="image-slot"
            src="/assets/book-cover/how-to-keep-your-cool.jpg"
            alt="read"
            width={300}
            height={400}
          />
          <Image
            className="image-slot"
            src="/assets/book-cover/exsistentialsme.jpeg"
            alt="read"
            width={300}
            height={400}
          />
          <Image
            className="image-slot"
            src="/assets/book-cover/funiculi-funiculla.jpg"
            alt="read"
            width={300}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
