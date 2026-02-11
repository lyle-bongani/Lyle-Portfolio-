import { useEffect } from "react";
import PropTypes from "prop-types";

const Modal = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    if (isOpen) {
      document.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative z-[101] max-h-[85vh] w-[92vw] max-w-2xl overflow-y-auto rounded-xl border border-neutral-700 bg-neutral-900 p-5 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <h3 id="modal-title" className="text-lg font-semibold text-white">
            {title}
          </h3>
          <button
            onClick={onClose}
            aria-label="Close"
            className="rounded-md border border-neutral-700 px-2 py-1 text-sm text-neutral-300 hover:bg-neutral-800"
          >
            Close
          </button>
        </div>
        <div className="mt-4 prose prose-invert prose-sm max-w-none">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};
