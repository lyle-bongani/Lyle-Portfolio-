// no state needed here currently
import { Particles } from "../components/Particles";

const Contact = () => {
  // You can show a toast/alert on submit success if needed

  return (
    <section id="contact" className="relative flex items-center c-space section-spacing">
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      {/* Optional alert can be shown here */}
      <div className="flex flex-col items-center justify-center w-[90%] max-w-3xl md:max-w-4xl p-6 md:p-8 mx-auto border border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let&apos;s Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you&apos;re looking to build a new website, improve your existing
            platform, or bring a unique project to life, I&apos;m here to help
          </p>
        </div>
        <form
          className="w-full"
          action="https://formsubmit.co/lylechadya139@gmail.com"
          method="POST"
        >
          {/* Honeypot to prevent spam */}
          <input type="text" name="_honey" style={{ display: 'none' }} />

          {/* Disable Captcha */}
          <input type="hidden" name="_captcha" value="false" />

          {/* Email Template Customization */}
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_subject" value="🚀 EMERGENCY: Someone wants to build something EPIC!" />
          <input type="hidden" name="_autoresponse" value="Hooray! Your message just landed in my digital inbox like a shooting star. 🌠 I'm probably refing some code or dreaming of space-age UIs, but I'll get back to you faster than a warp drive jump. Stay awesome!" />
          
          {/* Fun Meta Data for the Email recipient */}
          <input type="hidden" name="Priority" value="Level: Galactic ⚡" />
          <input type="hidden" name="Vibe_Check" value="Passed (Obviously) ✅" />

          {/* Specify redirect after submission */}
          <input type="hidden" name="_next" value={window.location.href} />

          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              What do your humans call you? (Full Name)
            </label>
            <input
              id="name"
              name="Name"
              type="text"
              className="field-input field-input-focus"
              placeholder="e.g. Star-Lord"
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Where should my space-pigeon drop the reply? (Email)
            </label>
            <input
              id="email"
              name="Email"
              type="email"
              className="field-input field-input-focus"
              placeholder="future_partner@galaxy.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              What&apos;s the big idea? (Tell me everything!)
            </label>
            <textarea
              id="message"
              name="Project_Idea"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="I have a wild vision for a..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg font-bold text-center text-white rounded-md cursor-pointer bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-indigo-500/20"
          >
            LAUNCH MESSAGE 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
