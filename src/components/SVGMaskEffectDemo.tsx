"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function SVGMaskEffectDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center bg-blue-100 overflow-hidden">
      <MaskContainer 
        revealText={
            <div>
                <h1 className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">About Us</h1>
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            The first rule of MRR Club is you do not talk about MRR Club. The
            second rule of MRR Club is you DO NOT talk about MRR Club.
            The first rule of MRR Club is you do not talk about MRR Club. The
            second rule of MRR Club is you DO NOT talk about MRR Club.
          </p>
          </div>
        }
        className="h-[40rem] border rounded-md"
      >
        The first rule of <span className="text-red-500">MRR Club</span> is you
        do not talk about MRR Club. The second rule of MRR Club is you DO NOT
        talk about.is you
        do not talk about MRR Club. The second rule of MRR Club is you DO NOT
        <span className="text-red-500">MRR Club</span>.
      </MaskContainer>
    </div>
  );
}
