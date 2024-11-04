import Image from "next/image";

export default function Enoleap() {
  return (
    <div>
      <div>欢迎使用马良神笔</div>
      <Image
        src="/images/01.jpg"
        alt="Next.js logo"
        fill
      />
    </div>
  )
}
