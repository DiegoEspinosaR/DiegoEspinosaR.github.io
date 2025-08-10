import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FakeCookiesModal() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem("fakeCookiesDismissed");
    if (!hasSeenModal) {
      const timer = setTimeout(() => setVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    sessionStorage.setItem("fakeCookiesDismissed", "true");
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-4 left-4 bg-gray-800 text-white p-4 rounded-lg shadow-lg max-w-sm z-50"
        >
          <button
            onClick={handleDismiss}
            className="absolute top-1 right-2 text-gray-400 hover:text-white"
          >
            ×
          </button>
          <p className="text-sm mb-2">
            Esta página no puede recolectar cookies, aun si las aceptara con un botón como este:
          </p>
          <button className="bg-blue-500 text-white px-3 py-1 rounded transition active:scale-95 hover:bg-blue-600 cursor-pointer">
            Aceptar cookies
          </button>
          <p className="text-xs mt-3">
            Así que, por favor, sírvase de el siguiente formulario para enviarme su información personal:
            <br />
            <a
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-300 underline hover:text-indigo-400"
            >
              Formulario
            </a>
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
