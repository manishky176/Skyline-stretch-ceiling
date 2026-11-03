import React from "react";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const phoneNumber = "917248923560";

  const message =
    "Hello, I am interested in your stretch ceiling services. Please share more details.";

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappURL}
  className="whatsapp-button"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat with us on WhatsApp"
  style={{
    position: "fixed",
    bottom: "25px",
    right: "25px",
    width: "60px",
    height: "60px",
    backgroundColor: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    zIndex: 999999,
    visibility: "visible",
    opacity: 1,
  }}
    >
      <svg
        viewBox="0 0 32 32"
        width="35"
        height="35"
        fill="white"
        aria-hidden="true"
      >
        <path d="M16.02 3C8.85 3 3.02 8.83 3.02 16c0 2.29.6 4.44 1.65 6.3L3 29l6.87-1.62A12.93 12.93 0 0 0 16.02 29C23.19 29 29 23.17 29 16S23.19 3 16.02 3zm0 23.65c-2.02 0-3.99-.54-5.7-1.57l-.41-.24-4.08.96.99-3.97-.27-.42A10.59 10.59 0 0 1 5.4 16c0-5.85 4.76-10.6 10.62-10.6S26.64 10.15 26.64 16s-4.76 10.65-10.62 10.65zm5.82-7.96c-.32-.16-1.9-.94-2.2-1.04-.3-.11-.51-.16-.72.16-.21.31-.83 1.04-1.02 1.25-.19.21-.38.23-.7.08-.32-.16-1.35-.5-2.57-1.6-.95-.84-1.6-1.88-1.79-2.2-.19-.31-.02-.48.14-.64.14-.14.32-.37.48-.55.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.53-.72-.54h-.62c-.21 0-.56.08-.86.4-.3.31-1.12 1.09-1.12 2.67s1.15 3.1 1.31 3.31c.16.21 2.26 3.45 5.47 4.84.76.33 1.36.53 1.82.68.77.25 1.47.22 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.76.27-1.41.19-1.55-.08-.14-.29-.22-.61-.38z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
