import cvDocument from "../Nimesh-Mehta-Bubble-Developer-CV.pdf";

const Cv = () => {
  return (
    <section
      id="cv"
      className="min-h-screen bg-slate-950 text-white flex flex-col"
    >
      <header className="pt-24 px-6 md:px-10 pb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm uppercase tracking-widest text-emerald-400">
            Resume
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
            Curriculum Vitae
          </h1>
          <p className="mt-2 max-w-2xl text-slate-300">
            Explore my experience, technical expertise, and professional
            journey. Download the PDF to keep a copy handy.
          </p>
        </div>
        <a
          href={cvDocument}
          download
          className="inline-flex items-center gap-2 self-start rounded-md bg-emerald-500 px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-emerald-400 focus:outline-none focus-visible:ring focus-visible:ring-emerald-300"
        >
          Download PDF
        </a>
      </header>
      <main className="flex-1 px-4 pb-10 md:px-10">
        <div className="h-full w-full rounded-2xl border border-slate-800 bg-white/95 shadow-2xl backdrop-blur">
          <iframe
            src={cvDocument}
            title="Nimesh Mehta CV"
            className="h-[80vh] w-full rounded-2xl"
          />
        </div>
      </main>
    </section>
  );
};

export default Cv;

