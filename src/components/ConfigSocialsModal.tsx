import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, Linkedin, Mail, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';

interface ConfigSocialsModalProps {
  isOpen: boolean;
  onClose: () => void;
  targetItem?: string;
}

export const ConfigSocialsModal: React.FC<ConfigSocialsModalProps> = ({
  isOpen,
  onClose,
  targetItem
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#080B14]/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-md glass-card rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl z-10 space-y-5"
        >
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-xl bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Repository Access</span>
            </div>
            <h3 className="text-xl font-display font-bold text-white pt-1">
              {targetItem ? `Repository: ${targetItem}` : "Direct Project Code Access"}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
            To protect academic integrity and production credentials, repository access and source walkthroughs are provided upon request.
          </p>

          <div className="p-4 rounded-2xl bg-zinc-900/90 border border-white/10 space-y-2 text-xs font-mono">
            <div className="flex items-center justify-between text-zinc-400">
              <span>Developer Contact:</span>
              <span className="text-cyan-400 font-semibold">{PERSONAL_INFO.email}</span>
            </div>
            <div className="flex items-center justify-between text-zinc-400">
              <span>Phone / WhatsApp:</span>
              <span className="text-white font-semibold">{PERSONAL_INFO.phoneDisplay}</span>
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`mailto:${PERSONAL_INFO.email}?subject=Source Code Access Request for ${encodeURIComponent(targetItem || 'Portfolio Project')}`}
              className="w-full py-3 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500 to-purple-600 text-white flex items-center justify-center gap-2 shadow-cyan-glow"
            >
              <Mail className="w-4 h-4" />
              <span>Email Request for Access</span>
            </a>
            <button
              onClick={onClose}
              className="w-full py-2.5 rounded-xl text-xs font-semibold text-zinc-400 hover:text-white glass-card"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
