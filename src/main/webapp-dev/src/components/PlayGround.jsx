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
          <div className="block-second" style={{ backgroundColor: '#ff7a00' }}></div>
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

      <div className="h-6 w-6 grid grid-cols-2 mt-24 rotate-45">
        <div className="bg-white rounded-l-full"></div>
        <div className="bg-red-400 rounded-r-full"></div>
      </div>

      <p className={`text-[${accent.text}]`}>Test this </p>
    </>
  )
}