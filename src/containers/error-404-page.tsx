import Link from "next/link";

function Error404Page() {
  return (
    <section className="bg-background h-svh w-full overflow-hidden">
      <div className="layout-standard h-full flex-center">
        <div className="text-center w-full">
          <h1 className="mb-2 text-7xl tracking-tight font-bold lg:text-9xl text-primary-hover font-heading">
            404
          </h1>
          <p className="mb-4 text-3xl tracking-tight font-light md:text-4xl text-heading font-heading">
            Something&apos;s missing.
          </p>
          <p className="mb-12 text-lg font-light">
            Sorry, we can&apos;t find that page. You&apos;ll find lots to
            explore on the home page.{" "}
          </p>
          <Link
            href={"/"}
            className="relative max-md:w-full px-8 py-3 rounded-full text-sm md:text-base font-medium bg-gradient-to-b from-[#2b135f] to-[#4a208a] shadow-[0_0_24px_rgba(140,69,255,0.6)]"
          >
            <span className="relative z-10">Back to Home</span>

            <span className="absolute inset-0 rounded-full border border-white/20" />
            <span className="absolute inset-0 rounded-full shadow-[0_0_14px_rgba(140,69,255,0.7)_inset]" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Error404Page;
