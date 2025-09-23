import { useState } from "react";
import { mySocials } from "../constants";
import Modal from "../components/Modal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);

  return (
    <section className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      <div className="flex gap-2">
        <button
          type="button"
          onClick={() => setShowTerms(true)}
          className="text-neutral-400 hover:text-white underline-offset-4 hover:underline transition-colors"
        >
          Terms & Conditions
        </button>
        <p>|</p>
        <button
          type="button"
          onClick={() => setShowPrivacy(true)}
          className="text-neutral-400 hover:text-white underline-offset-4 hover:underline transition-colors"
        >
          Privacy Policy
        </button>
      </div>
      <div className="flex gap-3">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-300"
          >
            <img
              src={social.icon}
              className={`w-5 h-5 ${social.name === "GitHub" ? "invert" : ""}`}
              alt={social.name}
            />
          </a>
        ))}
      </div>
      <p>© {currentYear} Lyle. All rights reserved.</p>

      {/* Terms & Conditions Modal */}
      <Modal
        isOpen={showTerms}
        onClose={() => setShowTerms(false)}
        title="Terms & Conditions"
      >
        <p>
          Welcome to my portfolio website. By accessing or using this site, you agree to the
          following terms and conditions. If you do not agree, please discontinue use.
        </p>
        <h4 className="mt-4">Use of Content</h4>
        <ul>
          <li>All content is provided for informational and showcase purposes only.</li>
          <li>You may not copy, distribute, or use materials without prior permission.</li>
          <li>Logos and trademarks are the property of their respective owners.</li>
        </ul>
        <h4 className="mt-4">No Warranties</h4>
        <p>
          This site is provided &quot;as is&quot; without warranties of any kind. I do not guarantee
          the accuracy or completeness of any information presented.
        </p>
        <h4 className="mt-4">Contact</h4>
        <p>
          For inquiries about permitted use of content, please reach out via the contact section.
        </p>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={showPrivacy}
        onClose={() => setShowPrivacy(false)}
        title="Privacy Policy"
      >
        <p>
          Your privacy is important. This portfolio website does not intentionally collect
          personally identifiable information unless you submit it through forms or links.
        </p>
        <h4 className="mt-4">Information Collection</h4>
        <ul>
          <li>Basic analytics or server logs may record anonymized usage data.</li>
          <li>
            If you contact me, the information you provide (e.g., name, email) will be used solely
            to respond to your inquiry.
          </li>
        </ul>
        <h4 className="mt-4">Third-Party Services</h4>
        <p>
          External links (e.g., GitHub, LinkedIn) are governed by their own privacy policies. Please
          review those policies when visiting external sites.
        </p>
        <h4 className="mt-4">Data Retention</h4>
        <p>
          Any information you share directly will be retained only as long as needed to fulfill the
          purpose for which it was provided.
        </p>
        <h4 className="mt-4">Contact</h4>
        <p>
          If you have privacy questions or requests, reach out through the contact section.
        </p>
      </Modal>
    </section>
  );
};

export default Footer;
