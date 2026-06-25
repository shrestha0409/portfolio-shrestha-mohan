import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ done }) {
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0a0a]"
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8"
          >
            <span className="font-display text-5xl font-bold text-gradient-cyan">SM</span>
          </motion.div>

          <div className="w-48 h-[1px] bg-[#1f1f1f] rounded overflow-hidden">
            <motion.div
              className="h-full"
              style={{ background: "linear-gradient(90deg,#22d3ee,#8b5cf6)" }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.8, ease: "easeInOut" }}
            />
          </div>

          <motion.p
            className="mt-4 text-xs text-gray-600 font-mono tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Initializing portfolio...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
