// no state needed here currently
import { Particles } from "../components/Particles";

const Contact = () => {
  // You can show a toast/alert on submit success if needed

  return (
    <section className="relative flex items-center c-space section-spacing">
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

          {/* Specify redirect after submission */}
          <input type="hidden" name="_next" value={window.location.href} />

          <div className="mb-5">
            <label htmlFor="name" className="feild-label">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="John Doe"
              autoComplete="name"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="feild-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="field-input field-input-focus"
              placeholder="JohnDoe@email.com"
              autoComplete="email"
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="feild-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              type="text"
              rows="4"
              className="field-input field-input-focus"
              placeholder="Share your thoughts..."
              required
            />
          </div>
          <button
            type="submit"
            className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
