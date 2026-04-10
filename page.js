"use client";
import { motion } from "framer-motion";

const EN_CARDS = [
  { id: 1, name: "Mega Rayquaza ex", set: "Chaos Rising", price: 450, img: "https://images.pokemontcg.io/sv8/167_hires.png" },
  { id: 2, name: "Mewtwo ex", set: "Perfect Order", price: 320, img: "https://images.pokemontcg.io/sv8/120_hires.png" },
  { id: 3, name: "Charizard ex", set: "Chaos Rising", price: 890, img: "https://images.pokemontcg.io/sv8/180_hires.png" },
];

const JP_CARDS = [
  { id: 4, name: "Pikachu 30th", set: "Anniversary", price: 1200, img: "https://images.pokemontcg.io/sv8/150_hires.png" },
  { id: 5, name: "Lugia VSTAR", set: "Void Pulse", price: 210, img: "https://images.pokemontcg.io/sv8/140_hires.png" },
];

export default function VoidVault() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="py-20 border-b border-zinc-900 bg-black sticky top-0 z-50">
        <h1 className="text-center font-orbitron text-7xl font-black tracking-tighter uppercase void-glow italic">
          Voids Pokevault
        </h1>
        <div className="flex justify-center gap-10 mt-4 font-mono text-[10px] text-zinc-500 tracking-[0.5em]">
          <span>LOC: SINGAPORE</span>
          <span>CURRENCY: SGD</span>
          <span>EST: 2026</span>
        </div>
      </header>

      {/* Hero Panel */}
      <section className="h-[80vh] flex items-center justify-center border-b border-zinc-900 relative">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900 via-transparent to-transparent"></div>
        <div className="max-w-7xl w-full px-10 grid grid-cols-2 items-center">
          <div className="z-10">
            <h2 className="font-orbitron text-5xl mb-6 leading-tight">MEGA EVOLUTION:<br/>PERFECT ORDER</h2>
            <p className="font-space text-zinc-400 mb-8 max-w-md italic">The 2026 chase begins here. Verified high-grade singles pulled directly from the Void.</p>
            <button className="bg-white text-black font-black px-10 py-4 skew-x-[-15deg] hover:bg-purple-500 hover:text-white transition-all">
              BROWSE INVENTORY
            </button>
          </div>
          <div className="flex justify-end">
            <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              src={EN_CARDS[0].img} 
              className="h-[600px] drop-shadow-[0_0_80px_rgba(168,85,247,0.3)]"
            />
          </div>
        </div>
      </section>

      {/* Constant Ticker Row 1 (ENG) */}
      <div className="py-12 bg-black ticker-container overflow-hidden border-b border-zinc-900">
        <motion.div className="flex gap-8 whitespace-nowrap" animate={{ x: [0, -1000] }} transition={{ repeat: Infinity, duration: 25, ease: "linear" }}>
          {[...EN_CARDS, ...EN_CARDS, ...EN_CARDS].map((card, i) => (
            <div key={i} className="group relative flex-shrink-0">
              <img src={card.img} className="h-[450px] transition-all duration-500 border border-transparent group-hover:border-purple-500" />
              <div className="absolute bottom-4 left-4 bg-black/90 p-4 border border-zinc-800 font-mono">
                <p className="text-zinc-500 text-[10px]">PRICE</p>
                <p className="text-xl text-green-400">SGD ${card.price}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Constant Ticker Row 2 (JAP) */}
      <div className="py-12 bg-black ticker-container overflow-hidden">
        <motion.div className="flex gap-8 whitespace-nowrap" animate={{ x: [-1000, 0] }} transition={{ repeat: Infinity, duration: 35, ease: "linear" }}>
          {[...JP_CARDS, ...JP_CARDS, ...JP_CARDS].map((card, i) => (
            <div key={i} className="group relative flex-shrink-0">
              <img src={card.img} className="h-[450px] transition-all duration-500 grayscale group-hover:grayscale-0 border border-transparent group-hover:border-zinc-500" />
              <div className="absolute top-4 right-4 bg-black/90 px-3 py-1 border border-zinc-800 font-mono text-[10px] text-zinc-400">
                JPN_SET_30TH
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}
