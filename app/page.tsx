import Image from "next/image";
import { Facebook, Linkedin, Twitter, Instagram, Dribbble } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center bg-yellow-100 min-h-[100vh]">
      <div className="w-full max-w-[600px] rounded-3xl bg-white overflow-hidden pb-4 my-6 shadow-2xl">
        <div className="relative w-full max-w-[600px] h-[450px] sm:h-[450px] lg:h-[450px]">
          <div className="absolute inset-0 w-full h-full">
            <div
              className="w-full h-full bg-no-repeat bg-cover"
              style={{ backgroundImage: "url('/logo_bg.svg')" }}
            />
          </div>
          <div className="absolute top-1/3 left-1/2 z-10 -translate-x-1/2 -translate-y-1/3">
            <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/avatar.jpeg"
                fill
                alt="avatar"
                className="object-cover"
                priority
              ></Image>
            </div>
          </div>
        </div>
        <div className="p-8 py-4">
          <div className="font-bold text-2xl text-center p-4">
            Thai Bui Hoang
          </div>
          <div className="italic text-slate-400 text-center p-4">
            @bui.h.thai
          </div>

          <div className="flex gap-4 mt-4 justify-center">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-400 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-pink-500 transition-colors"
            >
              <Dribbble className="w-5 h-5" />
            </a>
          </div>

          <div className="font-bold text-center p-4">
            Tailwind lets you conditionally apply utility classes in different
            states using variant modifiers. For example, use hover:not-italic to
            only apply the not-italic utility on hover.
          </div>
        </div>
        <div className="flex gap-8 justify-center pb-4">
          <button className="rounded-[70px] min-w-32 bg-[#D4517A] text-white p-2 font-bold border-2  border-[#D4517A]">
            Follow
          </button>

          <button className="rounded-[70px] min-w-32 bg-white text-slate-400 border-2  border-slate-400 p-2 font-bold">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}
