import Navbar from "@/components/Navbar";

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="mx-auto max-w-6xl px-4 py-24 text-center">
        <p className="text-sm text-zinc-400">Electrical and Computer Engineering</p>

        <h1 className="mt-3 text-4xl md:text-6xl font-semibold tracking-tight">
          Leo Issa Ghoulian
        </h1>

        <p className="mt-5 max-w-2xl mx-auto text-lg text-zinc-300">
          B.S. in Computer Engineering (CSUN). Pursuing an M.S. in Electrical
          Engineering. I build hardware-software systems across embedded, PCB
          design, signal processing, and computer vision.
        </p>

        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <a
            href="https://www.linkedin.com/in/leo-issaghoulian/"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl border border-zinc-700 px-5 py-2.5 text-sm font-medium hover:border-zinc-500"
          >
            LinkedIn
          </a>

          <a
            href="#projects"
            className="rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-zinc-950 hover:bg-zinc-200"
          >
            View Projects
          </a>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section id="projects" className="border-t border-zinc-900">
        <div className="mx-auto max-w-6xl px-4 py-20">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>

          <p className="mt-3 max-w-2xl text-zinc-400">
            Selected engineering projects demonstrating hardware, embedded
            systems, signal processing, and computer vision experience.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {/* ================= Ultrasonic Transponder ================= */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
              <h3 className="text-xl font-semibold">Ultrasonic Transponder</h3>

              <p className="mt-1 text-sm text-zinc-400">
                Embedded Systems • Analog Front-End • PCB Design
              </p>

              <p className="mt-4 text-zinc-300">
                Short-range ultrasonic communication system using a master–slave
                architecture with a multi-stage analog receiver and
                microcontroller-based control.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>
                  Debugged and restructured Arduino firmware to restore reliable
                  one-way ultrasonic communication.
                </li>
                <li>
                  Assembled and continuity-verified a custom receiver PCB,
                  validating component placement and signal paths.
                </li>
                <li>
                  Verified ultrasonic carrier behavior and signal integrity using
                  lab instrumentation.
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "ATmega2560",
                  "Analog Filtering",
                  "40 kHz Ultrasonic",
                  "PCB Bring-Up",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/docs/Ultrasonic_Transponder_Report.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-xl border border-zinc-700 px-4 py-2 text-sm hover:border-zinc-500"
                >
                  View Report (PDF)
                </a>

                <a
                  href="https://github.com/dbeltran01/csun_ultrasonic_transponder"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-xl border border-zinc-700 px-4 py-2 text-sm hover:border-zinc-500"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* ================= Laser Audio Visualizer ================= */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
              <h3 className="text-xl font-semibold">Laser Audio Visualizer</h3>

              <p className="mt-1 text-sm text-zinc-400">
                Analog Circuit Design • Signal Conditioning • Lab Validation
              </p>

              <p className="mt-4 text-zinc-300">
                Optical audio detection system using a laser and photodiode to
                convert surface vibrations into an electrical audio signal.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>
                  Designed and tested multi-stage op-amp amplification and
                  filtering circuits for low-level photodiode signals.
                </li>
                <li>
                  Reduced noise and instability through component selection and
                  gain tuning.
                </li>
                <li>
                  Validated signal integrity and frequency response using
                  oscilloscope measurements.
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {[
                  "Photodiode",
                  "Op-Amps",
                  "Analog Filtering",
                  "Oscilloscope Testing",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <a
                  href="https://github.com/LeoSamuel7/laser-audio-visualizer-project"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-xl border border-zinc-700 px-4 py-2 text-sm hover:border-zinc-500"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* ================= License Plate Reader ================= */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6">
              <h3 className="text-xl font-semibold">License Plate Reader</h3>

              <p className="mt-1 text-sm text-zinc-400">
                Computer Vision • Image Processing • Python
              </p>

              <p className="mt-4 text-zinc-300">
                Image preprocessing and license plate detection pipeline designed
                to improve character visibility and recognition accuracy under
                low-quality conditions.
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-300">
                <li>
                  Implemented preprocessing stages including brightness
                  normalization, grayscale conversion, and unblurring.
                </li>
                <li>
                  Improved character readability prior to detection using batch
                  image processing workflows.
                </li>
                <li>
                  Integrated Python and OpenCV tools to create a repeatable image
                  enhancement pipeline.
                </li>
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {["Python", "OpenCV", "Image Processing", "Fuzzy Logic"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300"
                    >
                      {tag}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
