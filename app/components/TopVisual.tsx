import Link from "next/link";

export default function TopVisual() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/ADIF_website.mp4"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden
      />

      <div className="relative z-10 flex h-full w-full items-center justify-center px-6 text-white">
        <div className="w-full max-w-5xl">
          <p className="font-montserrat text-xs font-bold uppercase tracking-[0.3em] text-zinc-300 sm:text-sm">
            Asia Defense Innovation Fund
          </p>
          <h1 className="mt-4 font-anton text-4xl leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            The Indo-Pacific balance has collapsed,
            <br />
            let&apos;s build a new order.
          </h1>
          <p className="mt-6 max-w-2xl font-montserrat text-sm font-bold sm:text-base md:text-lg">
            ADIF is Japan&apos;s first defense-focused fund. We invest in
            Japanese defense-tech startups addressing operational needs.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-5">
            <Link
              href="#our-story"
              className="flex h-12 w-44 items-center justify-center border-2 border-white font-montserrat text-sm font-bold tracking-wider transition-colors hover:bg-white hover:text-black"
            >
              Our&nbsp; Story
            </Link>
            <Link
              href="#contact-us"
              className="flex h-12 w-44 items-center justify-center border-2 border-white font-montserrat text-sm font-bold tracking-wider transition-colors hover:bg-white hover:text-black"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
