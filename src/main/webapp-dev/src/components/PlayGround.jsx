import { useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { themeSelector } from "../themes/themeSelector";
import { useAccentColor } from "../context/AccentColorContext";
import accentColors from "../themes/accentColors";

export default function PlayGround() {
  const { theme } = useTheme();
  const styles = themeSelector(theme);

  const { accentColor } = useAccentColor();
  const accent = accentColors[accentColor][theme];


  useEffect(() => {
    const blocks = document.querySelectorAll(".block");

    blocks.forEach(block => {
      const hue = Math.floor(Math.random() * 360);
      block.style.backgroundColor = `hsl(${hue}, 80%, 50%)`;
    });
  }, []);

  return (
    <>
      <div className="text-white border-amber-400/70 border-2 rounded-xl p-5">
        <h1 className="text-4xl mb-5">This is the Playground</h1>
        <div className="box mb-5"></div>
        <div className="loading-state mb-5"></div>
        <div className="scroll-element flex flex-col gap-5">
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
        </div>
      </div>

      <div className="mt-24">
        <main className={`${styles.background} ${styles.text} min-h-screen p-6`}>
          <section className={`${styles.card} ${styles.border} border rounded-xl p-5`}>
            <h1 className="text-2xl font-bold">
              Dashboard
            </h1>

            <p className={styles.secondaryText}>
              Your statistics and reports
            </p>

            <p className={accent.primary}>
              seconds
            </p>
          </section>
        </main>
      </div>

      <div className="grid grid-cols-8">
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">teal</p>
          <div className="block-second" style={{ backgroundColor: '#191d23' }}></div>
          <div className="block-second" style={{ backgroundColor: '#57707a' }}></div>
          <div className="block-second" style={{ backgroundColor: '#7b919c' }}></div>
          <div className="block-second" style={{ backgroundColor: '#989daa' }}></div>
          <div className="block-second" style={{ backgroundColor: '#c5bac4' }}></div>
          <div className="block-second" style={{ backgroundColor: '#dedcdc' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">blue</p>
          <div className="block-second" style={{ backgroundColor: '#0b1f3b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#2563eb' }}></div>
          <div className="block-second" style={{ backgroundColor: '#60a5fa' }}></div>
          <div className="block-second" style={{ backgroundColor: '#dbeafe' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f0f7ff' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">lavender</p>
          <div className="block-second" style={{ backgroundColor: '#0d0b2d' }}></div>
          <div className="block-second" style={{ backgroundColor: '#5b4bff' }}></div>
          <div className="block-second" style={{ backgroundColor: '#a78bfa' }}></div>
          <div className="block-second" style={{ backgroundColor: '#e6e0ff' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f7f8ff' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">purple</p>
          <div className="block-second" style={{ backgroundColor: '#52b1b6' }}></div>
          <div className="block-second" style={{ backgroundColor: '#8b5cf6' }}></div>
          <div className="block-second" style={{ backgroundColor: '#c7b3ff' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ede9fe' }}></div>
          <div className="block-second" style={{ backgroundColor: '#faf9ff' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">orange</p>
          <div className="block-second" style={{ backgroundColor: '#1f1d2b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ff7a00' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ffa94d' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ffe4c7' }}></div>
          <div className="block-second" style={{ backgroundColor: '#fff8ef' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">pink</p>
          <div className="block-second" style={{ backgroundColor: '#6d0d3f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ec4899' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f9a8d4' }}></div>
          <div className="block-second" style={{ backgroundColor: '#fce7f3' }}></div>
          <div className="block-second" style={{ backgroundColor: '#fff9fb' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Mint green</p>
          <div className="block-second" style={{ backgroundColor: '#0b3d3b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#14b8a6' }}></div>
          <div className="block-second" style={{ backgroundColor: '#99f6e4' }}></div>
          <div className="block-second" style={{ backgroundColor: '#e6fffb' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f8fffe' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">grn / alt</p>
          <div className="block-second" style={{ backgroundColor: '#0f1f17' }}></div>
          <div className="block-second" style={{ backgroundColor: '#1e3a2e' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3e5a3f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#6b7f67' }}></div>
          <div className="block-second" style={{ backgroundColor: '#c7cbb8' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3d4337' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">org / dark</p>
          <div className="block-second" style={{ backgroundColor: '#1a120e' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3a2418' }}></div>
          <div className="block-second" style={{ backgroundColor: '#6b4a2e' }}></div>
          <div className="block-second" style={{ backgroundColor: '#a88462' }}></div>
          <div className="block-second" style={{ backgroundColor: '#d5c4ae' }}></div>
          <div className="block-second" style={{ backgroundColor: '#4a4a46' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">ppl / drk</p>
          <div className="block-second" style={{ backgroundColor: '#0e0b1d' }}></div>
          <div className="block-second" style={{ backgroundColor: '#2a1e4d' }}></div>
          <div className="block-second" style={{ backgroundColor: '#5a3b8c' }}></div>
          <div className="block-second" style={{ backgroundColor: '#8b7cc7' }}></div>
          <div className="block-second" style={{ backgroundColor: '#c9c2e3' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3a3a52' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">teal / org</p>
          <div className="block-second" style={{ backgroundColor: '#0a0f14' }}></div>
          <div className="block-second" style={{ backgroundColor: '#0f3d3e' }}></div>
          <div className="block-second" style={{ backgroundColor: '#26ef73' }}></div>
          <div className="block-second" style={{ backgroundColor: '#7fb3b8' }}></div>
          <div className="block-second" style={{ backgroundColor: '#eadcc8' }}></div>
          <div className="block-second" style={{ backgroundColor: '#c6601f' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">grn / bwn</p>
          <div className="block-second" style={{ backgroundColor: '#0b0f0d' }}></div>
          <div className="block-second" style={{ backgroundColor: '#1f2a1f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3e5a3f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#8ca98c' }}></div>
          <div className="block-second" style={{ backgroundColor: '#d9c7a3' }}></div>
          <div className="block-second" style={{ backgroundColor: '#b08d57' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">org / blu</p>
          <div className="block-second" style={{ backgroundColor: '#0b132b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#1c2541' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3a506b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#5bc0de' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f4d6b0' }}></div>
          <div className="block-second" style={{ backgroundColor: '#d97706' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">ppl / ylw</p>
          <div className="block-second" style={{ backgroundColor: '#1a1a1f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#2d2b55' }}></div>
          <div className="block-second" style={{ backgroundColor: '#6a5acd' }}></div>
          <div className="block-second" style={{ backgroundColor: '#a678b9' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f0d9b5' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f4a62a' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">pnk / alt</p>
          <div className="block-second" style={{ backgroundColor: '#1a0f2e' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3b1b4f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#7a26ef' }}></div>
          <div className="block-second" style={{ backgroundColor: '#d6598f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f4d7d4' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ff6b6b' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">gry / pnk</p>
          <div className="block-second" style={{ backgroundColor: '#121212' }}></div>
          <div className="block-second" style={{ backgroundColor: '#1f2937' }}></div>
          <div className="block-second" style={{ backgroundColor: '#334155' }}></div>
          <div className="block-second" style={{ backgroundColor: '#74748b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f1f5f9' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ec4899' }}></div>
        </div>
      </div>

      {/* --------------------------------------------------------------------------------------------------------- */}

      <p className="text-white bg-black mt-24 py-2 pl-2">Sorted</p>
      <div className="grid grid-cols-8 mt-2">
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">lavender</p>
          <div className="block-second" style={{ backgroundColor: '#0d0b2d' }}></div>
          <div className="block-second" style={{ backgroundColor: '#5b4bff' }}></div>
          <div className="block-second" style={{ backgroundColor: '#a78bfa' }}></div>
          <div className="block-second" style={{ backgroundColor: '#e6e0ff' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f7f8ff' }}></div>
        </div>
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">ppl / drk</p>
          <div className="block-second" style={{ backgroundColor: '#0e0b1d' }}></div>
          <div className="block-second" style={{ backgroundColor: '#2a1e4d' }}></div>
          <div className="block-second" style={{ backgroundColor: '#5a3b8c' }}></div>
          <div className="block-second" style={{ backgroundColor: '#8b7cc7' }}></div>
          <div className="block-second" style={{ backgroundColor: '#c9c2e3' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3a3a52' }}></div>
        </div>






        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Mint green</p>
          <div className="block-second" style={{ backgroundColor: '#0b3d3b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#14b8a6' }}></div>
          <div className="block-second" style={{ backgroundColor: '#99f6e4' }}></div>
          <div className="block-second" style={{ backgroundColor: '#e6fffb' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f8fffe' }}></div>
        </div>
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">grn / alt</p>
          <div className="block-second" style={{ backgroundColor: '#0f1f17' }}></div>
          <div className="block-second" style={{ backgroundColor: '#1e3a2e' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3e5a3f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#6b7f67' }}></div>
          <div className="block-second" style={{ backgroundColor: '#c7cbb8' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3d4337' }}></div>
        </div>









        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">pink</p>
          <div className="block-second" style={{ backgroundColor: '#6d0d3f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ec4899' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f9a8d4' }}></div>
          <div className="block-second" style={{ backgroundColor: '#fce7f3' }}></div>
          <div className="block-second" style={{ backgroundColor: '#fff9fb' }}></div>
        </div>
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">gry / pnk</p>
          <div className="block-second" style={{ backgroundColor: '#121212' }}></div>
          <div className="block-second" style={{ backgroundColor: '#1f2937' }}></div>
          <div className="block-second" style={{ backgroundColor: '#334155' }}></div>
          <div className="block-second" style={{ backgroundColor: '#74748b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f1f5f9' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ec4899' }}></div>
        </div>












        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">blue</p>
          <div className="block-second" style={{ backgroundColor: '#0b1f3b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#2563eb' }}></div>
          <div className="block-second" style={{ backgroundColor: '#60a5fa' }}></div>
          <div className="block-second" style={{ backgroundColor: '#dbeafe' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f0f7ff' }}></div>
        </div>
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">org / blu</p>
          <div className="block-second" style={{ backgroundColor: '#0b132b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#1c2541' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3a506b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#5bc0de' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f4d6b0' }}></div>
          <div className="block-second" style={{ backgroundColor: '#d97706' }}></div>
        </div>






        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">orange</p>
          <div className="block-second" style={{ backgroundColor: '#1f1d2b' }}></div>
          <div className="block-second" style={{ backgroundColor: '#fff8ef' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ffa94d' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ffe4c7' }}></div>
          <div className="block-second" style={{ backgroundColor: '#fff8ef' }}></div>
        </div>
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">org / dark</p>
          <div className="block-second" style={{ backgroundColor: '#1a120e' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3a2418' }}></div>
          <div className="block-second" style={{ backgroundColor: '#6b4a2e' }}></div>
          <div className="block-second" style={{ backgroundColor: '#a88462' }}></div>
          <div className="block-second" style={{ backgroundColor: '#d5c4ae' }}></div>
          <div className="block-second" style={{ backgroundColor: '#4a4a46' }}></div>
        </div>




        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">ppl / ylw</p>
          <div className="block-second" style={{ backgroundColor: '#1a1a1f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#2d2b55' }}></div>
          <div className="block-second" style={{ backgroundColor: '#6a5acd' }}></div>
          <div className="block-second" style={{ backgroundColor: '#a678b9' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f0d9b5' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f4a62a' }}></div>
        </div>
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">pnk / alt</p>
          <div className="block-second" style={{ backgroundColor: '#1a0f2e' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3b1b4f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#7a26ef' }}></div>
          <div className="block-second" style={{ backgroundColor: '#d6598f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#f4d7d4' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ff6b6b' }}></div>
        </div>




        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">teal / org</p>
          <div className="block-second" style={{ backgroundColor: '#0a0f14' }}></div>
          <div className="block-second" style={{ backgroundColor: '#0f3d3e' }}></div>
          <div className="block-second" style={{ backgroundColor: '#26ef73' }}></div>
          <div className="block-second" style={{ backgroundColor: '#7fb3b8' }}></div>
          <div className="block-second" style={{ backgroundColor: '#eadcc8' }}></div>
          <div className="block-second" style={{ backgroundColor: '#c6601f' }}></div>
        </div>
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">grn / bwn</p>
          <div className="block-second" style={{ backgroundColor: '#0b0f0d' }}></div>
          <div className="block-second" style={{ backgroundColor: '#1f2a1f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3e5a3f' }}></div>
          <div className="block-second" style={{ backgroundColor: '#8ca98c' }}></div>
          <div className="block-second" style={{ backgroundColor: '#d9c7a3' }}></div>
          <div className="block-second" style={{ backgroundColor: '#b08d57' }}></div>
        </div>





        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">teal</p>
          <div className="block-second" style={{ backgroundColor: '#191d23' }}></div>
          <div className="block-second" style={{ backgroundColor: '#57707a' }}></div>
          <div className="block-second" style={{ backgroundColor: '#7b919c' }}></div>
          <div className="block-second" style={{ backgroundColor: '#989daa' }}></div>
          <div className="block-second" style={{ backgroundColor: '#c5bac4' }}></div>
          <div className="block-second" style={{ backgroundColor: '#dedcdc' }}></div>
        </div>
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">purple</p>
          <div className="block-second" style={{ backgroundColor: '#52b1b6' }}></div>
          <div className="block-second" style={{ backgroundColor: '#8b5cf6' }}></div>
          <div className="block-second" style={{ backgroundColor: '#c7b3ff' }}></div>
          <div className="block-second" style={{ backgroundColor: '#ede9fe' }}></div>
          <div className="block-second" style={{ backgroundColor: '#faf9ff' }}></div>
        </div>
      </div>

{/* ---------------------------------------------------------------------------------------------- */}

      <p className="text-white bg-black mt-24 py-2 pl-2">Reassigned</p>
      <div className="grid grid-cols-7 mt-2">
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Greyscale</p>
          <div className="block-second" style={{ backgroundColor: '#0B0B0B' }}></div>
          <div className="block-second" style={{ backgroundColor: '#1A1A1A' }}></div>
          <div className="block-second" style={{ backgroundColor: '#333333' }}></div>
          <div className="block-second" style={{ backgroundColor: '#6B6B6B' }}></div>
          <div className="block-second" style={{ backgroundColor: '#D9D9D9' }}></div>
          <div className="block-second" style={{ backgroundColor: '#FFFFFF' }}></div>
        </div>

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Night</p>
          <div className="block-second" style={{ backgroundColor: '#06141B' }}></div>
          <div className="block-second" style={{ backgroundColor: '#11212D' }}></div>
          <div className="block-second" style={{ backgroundColor: '#253745' }}></div>
          <div className="block-second" style={{ backgroundColor: '#4A5C6A' }}></div>
          <div className="block-second" style={{ backgroundColor: '#9BA9AB' }}></div>
          <div className="block-second" style={{ backgroundColor: '#CCD0CF' }}></div>
        </div>


        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Purple</p>
          <div className="block-second" style={{ backgroundColor: '#17121F' }}></div>
          <div className="block-second" style={{ backgroundColor: '#302538' }}></div>
          <div className="block-second" style={{ backgroundColor: '#51405F' }}></div>
          <div className="block-second" style={{ backgroundColor: '#796487' }}></div>
          <div className="block-second" style={{ backgroundColor: '#B09BB8' }}></div>
          <div className="block-second" style={{ backgroundColor: '#E8DDEB' }}></div>
        </div>



        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Purple 2</p>
          <div className="block-second" style={{ backgroundColor: '#0E0B1D' }}></div>
          <div className="block-second" style={{ backgroundColor: '#2A1E4D' }}></div>
          <div className="block-second" style={{ backgroundColor: '#5A3B8C' }}></div>
          <div className="block-second" style={{ backgroundColor: '#8B7CC7' }}></div>
          <div className="block-second" style={{ backgroundColor: '#C9C2E3' }}></div>
          <div className="block-second" style={{ backgroundColor: '#3A3A52' }}></div>
        </div>



        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Indigo</p>
          <div className="block-second" style={{ backgroundColor: '#0B0720' }}></div>
          <div className="block-second" style={{ backgroundColor: '#25134D' }}></div>
          <div className="block-second" style={{ backgroundColor: '#6A2FC8' }}></div>
          <div className="block-second" style={{ backgroundColor: '#9D71E8' }}></div>
          <div className="block-second" style={{ backgroundColor: '#D1B8FF' }}></div>
          <div className="block-second" style={{ backgroundColor: '#F2E9FF' }}></div>
        </div>



        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Blue</p>
          <div className="block-second" style={{ backgroundColor: '#021024' }}></div>
          <div className="block-second" style={{ backgroundColor: '#052659' }}></div>
          <div className="block-second" style={{ backgroundColor: '#0C4DB0' }}></div>
          <div className="block-second" style={{ backgroundColor: '#5483B3' }}></div>
          <div className="block-second" style={{ backgroundColor: '#7DA0CA' }}></div>
          <div className="block-second" style={{ backgroundColor: '#C1E8FF' }}></div>
        </div>
        

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Blue 2</p>
          <div className="block-second" style={{ backgroundColor: '#081C2B' }}></div>
          <div className="block-second" style={{ backgroundColor: '#0F3C5F' }}></div>
          <div className="block-second" style={{ backgroundColor: '#2469AE' }}></div>
          <div className="block-second" style={{ backgroundColor: '#589DCF' }}></div>
          <div className="block-second" style={{ backgroundColor: '#A1CEEB' }}></div>
          <div className="block-second" style={{ backgroundColor: '#E3F2FD' }}></div>
        </div>


        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Teal</p>
          <div className="block-second" style={{ backgroundColor: '#071C27' }}></div>
          <div className="block-second" style={{ backgroundColor: '#123747' }}></div>
          <div className="block-second" style={{ backgroundColor: '#245568' }}></div>
          <div className="block-second" style={{ backgroundColor: '#477CB8' }}></div>
          <div className="block-second" style={{ backgroundColor: '#91B3B9' }}></div>
          <div className="block-second" style={{ backgroundColor: '#DCD9E8' }}></div>
        </div>

      

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Teal 2</p>
          <div className="block-second" style={{ backgroundColor: '#05161A' }}></div>
          <div className="block-second" style={{ backgroundColor: '#072E33' }}></div>
          <div className="block-second" style={{ backgroundColor: '#0C7075' }}></div>
          <div className="block-second" style={{ backgroundColor: '#0F969C' }}></div>
          <div className="block-second" style={{ backgroundColor: '#6DA5C0' }}></div>
          <div className="block-second" style={{ backgroundColor: '#294D61' }}></div>
        </div>



        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Green</p>
          <div className="block-second" style={{ backgroundColor: '#051F20' }}></div>
          <div className="block-second" style={{ backgroundColor: '#0B2B26' }}></div>
          <div className="block-second" style={{ backgroundColor: '#163832' }}></div>
          <div className="block-second" style={{ backgroundColor: '#235347' }}></div>
          <div className="block-second" style={{ backgroundColor: '#8EB69B' }}></div>
          <div className="block-second" style={{ backgroundColor: '#DAF1DE' }}></div>
        </div>



    
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Lime</p>
          <div className="block-second" style={{ backgroundColor: '#0E1F08' }}></div>
          <div className="block-second" style={{ backgroundColor: '#264311' }}></div>
          <div className="block-second" style={{ backgroundColor: '#487E1D' }}></div>
          <div className="block-second" style={{ backgroundColor: '#76C52C' }}></div>
          <div className="block-second" style={{ backgroundColor: '#A4E75A' }}></div>
          <div className="block-second" style={{ backgroundColor: '#E2F7C2' }}></div>
        </div>
      

        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Crimson 2</p>
          <div className="block-second" style={{ backgroundColor: '#1F080F' }}></div>
          <div className="block-second" style={{ backgroundColor: '#430C1D' }}></div>
          <div className="block-second" style={{ backgroundColor: '#6E122C' }}></div>
          <div className="block-second" style={{ backgroundColor: '#991D3C' }}></div>
          <div className="block-second" style={{ backgroundColor: '#C4385A' }}></div>
          <div className="block-second" style={{ backgroundColor: '#F7E4E9' }}></div>
        </div>


  
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Brown</p>
          <div className="block-second" style={{ backgroundColor: '#211713' }}></div>
          <div className="block-second" style={{ backgroundColor: '#493027' }}></div>
          <div className="block-second" style={{ backgroundColor: '#76503B' }}></div>
          <div className="block-second" style={{ backgroundColor: '#A87557' }}></div>
          <div className="block-second" style={{ backgroundColor: '#D0A98B' }}></div>
          <div className="block-second" style={{ backgroundColor: '#F0DFCE' }}></div>
        </div>
            



        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Yellow</p>
          <div className="block-second" style={{ backgroundColor: '#2F2000' }}></div>
          <div className="block-second" style={{ backgroundColor: '#5E4300' }}></div>
          <div className="block-second" style={{ backgroundColor: '#9B7300' }}></div>
          <div className="block-second" style={{ backgroundColor: '#D4A200' }}></div>
          <div className="block-second" style={{ backgroundColor: '#FFD700' }}></div>
          <div className="block-second" style={{ backgroundColor: '#FFF9E0' }}></div>
        </div>



{/* ----------------------------- */}
        <div className="grid grid-cols-1">
          <p className="text-white bg-black py-2 pl-2">Red</p>
          <div className="block-second" style={{ backgroundColor: '#2B0505' }}></div>
          <div className="block-second" style={{ backgroundColor: '#540A0A' }}></div>
          <div className="block-second" style={{ backgroundColor: '#8A0F11' }}></div>
          <div className="block-second" style={{ backgroundColor: '#C71F24' }}></div>
          <div className="block-second" style={{ backgroundColor: '#F26A6D' }}></div>
          <div className="block-second" style={{ backgroundColor: '#FDECEE' }}></div>
        </div>
{/* ----------------------------- */}

        
      </div>

      <div className="h-6 w-6 grid grid-cols-2 mt-24 rotate-45">
        <div className="bg-white rounded-l-full"></div>
        <div className="bg-red-400 rounded-r-full"></div>
      </div>

      <p className={`text-[${accent.text}]`}>Test this </p>

      <div className="border-2 p-6 grid grid-cols-4 gap-1">

        {/* Palate - Greyscale */}
        <div className="grid grid-cols-2 border p-2 gap-2">
          <div className="col-span-2 text-center text-white font-semibold">
            <p>Greyscale</p>
          </div>
          <div className="light border">
            <p className="text-white text-center">Light</p>
            <div className="bg-box p-6 bg-[#FFFFFF]"> {/* light background */}
              <div className="fg-box bg-[#D9D9D9] p-5 text-center"> {/* light foreground */}
                <p className="text text-[#1A1A1A]">Text goes here</p> {/* light text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* light box */}
                  <p className="text-box text-[#1A1A1A]">Text inside a box</p> {/*light  box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#333333] text-[#FFFFFF]">
                  Click Me {/* light button */}
                </button>
              </div>
            </div>
          </div>
          <div className="dark border">
            <p className="text-white text-center">Dark</p>
            <div className="bg-box p-6 bg-[#1A1A1A]"> {/* dark background */}
              <div className="fg-box bg-[#0B0B0B] p-5 text-center"> {/* dark foreground */}
                <p className="text text-[#D9D9D9]">Text goes here</p> {/* dark text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* dark box */}
                  <p className="text-box text-[#D9D9D9]">Text inside a box</p> {/*dark box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#D9D9D9] text-[#0B0B0B]">
                  Click Me {/* dark button */}
                </button>
              </div>
            </div>
          </div>
        </div>



        {/* Palate - Night */}
        <div className="grid grid-cols-2 border p-2 gap-2">
          <div className="col-span-2 text-center text-white font-semibold">
            <p>Night</p>
          </div>
          <div className="light border">
            <p className="text-white text-center">Light</p>
            <div className="bg-box p-6 bg-[#CCD0CF]"> {/* light background */}
              <div className="fg-box bg-[#9BA9AB] p-5 text-center"> {/* light foreground */}
                <p className="text text-[#1A1A1A]">Text goes here</p> {/* light text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* light box */}
                  <p className="text-box text-[#1A1A1A]">Text inside a box</p> {/*light  box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#11212D] text-[#CCD0CF]">
                  Click Me {/* light button */}
                </button>
              </div>
            </div>
          </div>
          <div className="dark border">
            <p className="text-white text-center">Dark</p>
            <div className="bg-box p-6 bg-[#11212D]"> {/* dark background */}
              <div className="fg-box bg-[#06141B] p-5 text-center"> {/* dark foreground */}
                <p className="text text-[#9BA9AB]">Text goes here</p> {/* dark text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* dark box */}
                  <p className="text-box text-[#9BA9AB]">Text inside a box</p> {/*dark box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#9BA9AB] text-[#06141B]">
                  Click Me {/* dark button */}
                </button>
              </div>
            </div>
          </div>
        </div>

        

        {/* Palate - Purple */}
        <div className="grid grid-cols-2 border p-2 gap-2">
          <div className="col-span-2 text-center text-white font-semibold">
            <p>Purple</p>
          </div>
          <div className="light border">
            <p className="text-white text-center">Light</p>
            <div className="bg-box p-6 bg-[#E8DDEB]"> {/* light background */}
              <div className="fg-box bg-[#B09BB8] p-5 text-center"> {/* light foreground */}
                <p className="text text-[#17121F]">Text goes here</p> {/* light text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* light box */}
                  <p className="text-box text-[#17121F]">Text inside a box</p> {/*light  box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#17121F] text-[#B09BB8]">
                  Click Me {/* light button */}
                </button>
              </div>
            </div>
          </div>
          <div className="dark border">
            <p className="text-white text-center">Dark</p>
            <div className="bg-box p-6 bg-[#302538]"> {/* dark background */}
              <div className="fg-box bg-[#17121F] p-5 text-center"> {/* dark foreground */}
                <p className="text text-[#B09BB8]">Text goes here</p> {/* dark text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* dark box */}
                  <p className="text-box text-[#B09BB8]">Text inside a box</p> {/*dark box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#B09BB8] text-[#17121F]">
                  Click Me {/* dark button */}
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Palate - Indigo */}
        <div className="grid grid-cols-2 border p-2 gap-2">
          <div className="col-span-2 text-center text-white font-semibold">
            <p>Indigo</p>
          </div>
          <div className="light border">
            <p className="text-white text-center">Light</p>
            <div className="bg-box p-6 bg-[#F2E9FF]"> {/* light background */}
              <div className="fg-box bg-[#D1B8FF] p-5 text-center"> {/* light foreground */}
                <p className="text text-[#0B0720]">Text goes here</p> {/* light text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* light box */}
                  <p className="text-box text-[#0B0720]">Text inside a box</p> {/*light  box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#0B0720] text-[#D1B8FF]">
                  Click Me {/* light button */}
                </button>
              </div>
            </div>
          </div>
          <div className="dark border">
            <p className="text-white text-center">Dark</p>
            <div className="bg-box p-6 bg-[#25134D]"> {/* dark background */}
              <div className="fg-box bg-[#0B0720] p-5 text-center"> {/* dark foreground */}
                <p className="text text-[#D1B8FF]">Text goes here</p> {/* dark text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* dark box */}
                  <p className="text-box text-[#D1B8FF]">Text inside a box</p> {/*dark box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#D1B8FF] text-[#0B0720]">
                  Click Me {/* dark button */}
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Palate - Blue */}
        <div className="grid grid-cols-2 border p-2 gap-2">
          <div className="col-span-2 text-center text-white font-semibold">
            <p>Blue</p>
          </div>
          <div className="light border">
            <p className="text-white text-center">Light</p>
            <div className="bg-box p-6 bg-[#C1E8FF]"> {/* light background */}
              <div className="fg-box bg-[#7DA0CA] p-5 text-center"> {/* light foreground */}
                <p className="text text-[#021024]">Text goes here</p> {/* light text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* light box */}
                  <p className="text-box text-[#021024]">Text inside a box</p> {/*light  box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#021024] text-[#7DA0CA]">
                  Click Me {/* light button */}
                </button>
              </div>
            </div>
          </div>
          <div className="dark border">
            <p className="text-white text-center">Dark</p>
            <div className="bg-box p-6 bg-[#052659]"> {/* dark background */}
              <div className="fg-box bg-[#021024] p-5 text-center"> {/* dark foreground */}
                <p className="text text-[#7DA0CA]">Text goes here</p> {/* dark text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* dark box */}
                  <p className="text-box text-[#7DA0CA]">Text inside a box</p> {/*dark box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#7DA0CA] text-[#021024]">
                  Click Me {/* dark button */}
                </button>
              </div>
            </div>
          </div>
        </div>



        {/* Palate - Teal */}
        <div className="grid grid-cols-2 border p-2 gap-2">
          <div className="col-span-2 text-center text-white font-semibold">
            <p>Teal</p>
          </div>
          <div className="light border">
            <p className="text-white text-center">Light</p>
            <div className="bg-box p-6 bg-[#DCD9E8]"> {/* light background */}
              <div className="fg-box bg-[#91B3B9] p-5 text-center"> {/* light foreground */}
                <p className="text text-[#071C27]">Text goes here</p> {/* light text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* light box */}
                  <p className="text-box text-[#071C27]">Text inside a box</p> {/*light  box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#071C27] text-[#91B3B9]">
                  Click Me {/* light button */}
                </button>
              </div>
            </div>
          </div>
          <div className="dark border">
            <p className="text-white text-center">Dark</p>
            <div className="bg-box p-6 bg-[#123747]"> {/* dark background */}
              <div className="fg-box bg-[#071C27] p-5 text-center"> {/* dark foreground */}
                <p className="text text-[#91B3B9]">Text goes here</p> {/* dark text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* dark box */}
                  <p className="text-box text-[#91B3B9]">Text inside a box</p> {/*dark box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#91B3B9] text-[#071C27]">
                  Click Me {/* dark button */}
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Palate - Green*/} 
        <div className="grid grid-cols-2 border p-2 gap-2">
          <div className="col-span-2 text-center text-white font-semibold">
            <p>Green</p>
          </div>
          <div className="light border">
            <p className="text-white text-center">Light</p>
            <div className="bg-box p-6 bg-[#DAF1DE]"> {/* light background */}
              <div className="fg-box bg-[#8EB69B] p-5 text-center"> {/* light foreground */}
                <p className="text text-[#051F20]">Text goes here</p> {/* light text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* light box */}
                  <p className="text-box text-[#051F20]">Text inside a box</p> {/*light  box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#051F20] text-[#8EB69B]">
                  Click Me {/* light button */}
                </button>
              </div>
            </div>
          </div>
          <div className="dark border">
            <p className="text-white text-center">Dark</p>
            <div className="bg-box p-6 bg-[#0B2B26]"> {/* dark background */}
              <div className="fg-box bg-[#051F20] p-5 text-center"> {/* dark foreground */}
                <p className="text text-[#8EB69B]">Text goes here</p> {/* dark text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* dark box */}
                  <p className="text-box text-[#8EB69B]">Text inside a box</p> {/*dark box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#8EB69B] text-[#051F20]">
                  Click Me {/* dark button */}
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Palate - Lime */} 
        <div className="grid grid-cols-2 border p-2 gap-2">
          <div className="col-span-2 text-center text-white font-semibold">
            <p>Lime</p>
          </div>
          <div className="light border">
            <p className="text-white text-center">Light</p>
            <div className="bg-box p-6 bg-[#E2F7C2]"> {/* light background */}
              <div className="fg-box bg-[#A4E75A] p-5 text-center"> {/* light foreground */}
                <p className="text text-[#0E1F08]">Text goes here</p> {/* light text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* light box */}
                  <p className="text-box text-[#0E1F08]">Text inside a box</p> {/*light  box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#0E1F08] text-[#A4E75A]">
                  Click Me {/* light button */}
                </button>
              </div>
            </div>
          </div>
          <div className="dark border">
            <p className="text-white text-center">Dark</p>
            <div className="bg-box p-6 bg-[#264311]"> {/* dark background */}
              <div className="fg-box bg-[#0E1F08] p-5 text-center"> {/* dark foreground */}
                <p className="text text-[#A4E75A]">Text goes here</p> {/* dark text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* dark box */}
                  <p className="text-box text-[#A4E75A]">Text inside a box</p> {/*dark box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#A4E75A] text-[#0E1F08]">
                  Click Me {/* dark button */}
                </button>
              </div>
            </div>
          </div>
        </div>



        {/* Palate - Brown */} 
        <div className="grid grid-cols-2 border p-2 gap-2">
          <div className="col-span-2 text-center text-white font-semibold">
            <p>Brown</p>
          </div>
          <div className="light border">
            <p className="text-white text-center">Light</p>
            <div className="bg-box p-6 bg-[#F0DFCE]"> {/* light background */}
              <div className="fg-box bg-[#D0A98B] p-5 text-center"> {/* light foreground */}
                <p className="text text-[#211713]">Text goes here</p> {/* light text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* light box */}
                  <p className="text-box text-[#211713]">Text inside a box</p> {/*light  box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#211713] text-[#D0A98B]">
                  Click Me {/* light button */}
                </button>
              </div>
            </div>
          </div>
          <div className="dark border">
            <p className="text-white text-center">Dark</p>
            <div className="bg-box p-6 bg-[#493027]"> {/* dark background */}
              <div className="fg-box bg-[#211713] p-5 text-center"> {/* dark foreground */}
                <p className="text text-[#D0A98B]">Text goes here</p> {/* dark text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* dark box */}
                  <p className="text-box text-[#D0A98B]">Text inside a box</p> {/*dark box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#D0A98B] text-[#211713]">
                  Click Me {/* dark button */}
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Palate - Yellow */} 
        <div className="grid grid-cols-2 border p-2 gap-2">
          <div className="col-span-2 text-center text-white font-semibold">
            <p>Yellow</p>
          </div>
          <div className="light border">
            <p className="text-white text-center">Light</p>
            <div className="bg-box p-6 bg-[#FFF9E0]"> {/* light background */}
              <div className="fg-box bg-[#FFD700] p-5 text-center"> {/* light foreground */}
                <p className="text text-[#2F2000]">Text goes here</p> {/* light text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* light box */}
                  <p className="text-box text-[#2F2000]">Text inside a box</p> {/*light  box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#2F2000] text-[#FFD700]">
                  Click Me {/* light button */}
                </button>
              </div>
            </div>
          </div>
          <div className="dark border">
            <p className="text-white text-center">Dark</p>
            <div className="bg-box p-6 bg-[#5E4300]"> {/* dark background */}
              <div className="fg-box bg-[#2F2000] p-5 text-center"> {/* dark foreground */}
                <p className="text text-[#FFD700]">Text goes here</p> {/* dark text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* dark box */}
                  <p className="text-box text-[#FFD700]">Text inside a box</p> {/*dark box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#FFD700] text-[#2F2000]">
                  Click Me {/* dark button */}
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Palate - Crimson */} 
        <div className="grid grid-cols-2 border p-2 gap-2">
          <div className="col-span-2 text-center text-white font-semibold">
            <p>Crimson</p>
          </div>
          <div className="light border">
            <p className="text-white text-center">Light</p>
            <div className="bg-box p-6 bg-[#FDECEE]"> {/* light background */}
              <div className="fg-box bg-[#F26A6D] p-5 text-center"> {/* light foreground */}
                <p className="text text-[#2B0505]">Text goes here</p> {/* light text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* light box */}
                  <p className="text-box text-[#2B0505]">Text inside a box</p> {/*light  box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#2B0505] text-[#F26A6D]">
                  Click Me {/* light button */}
                </button>
              </div>
            </div>
          </div>
          <div className="dark border">
            <p className="text-white text-center">Dark</p>
            <div className="bg-box p-6 bg-[#540A0A]"> {/* dark background */}
              <div className="fg-box bg-[#2B0505] p-5 text-center"> {/* dark foreground */}
                <p className="text text-[#F26A6D]">Text goes here</p> {/* dark text */}
                <div className="info-box bg-zinc-400/40 p-2 rounded-lg"> {/* dark box */}
                  <p className="text-box text-[#F26A6D]">Text inside a box</p> {/*dark box text */}
                </div>
                <button className="button my-2 rounded-xl px-2 bg-[#F26A6D] text-[#2B0505]">
                  Click Me {/* dark button */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <p className={`text-[${styles.success}]`}>gdgd</p>
        <p className={`text-[${styles.danger}]`}>gdgd</p>
      </div>
    </>
  )
}