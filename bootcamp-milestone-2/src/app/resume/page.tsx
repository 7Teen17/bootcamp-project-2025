import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex flex-col items-center w-full justify-center text-center">
      <a
        href="/resume.pdf"
        download
        className="flex justify-center items-center bg-green-300 rounded-sm mb-5 h-7 p-5"
      >
        <strong>Download Resume</strong>
      </a>
      <Image
        src="/resume-1.png"
        alt="Resume"
        width={1080}
        height={1920}
        className="rounded-xl"
      />
    </div>
  );
}
