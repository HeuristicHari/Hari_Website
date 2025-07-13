import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '../components/navbar';
import 'tailwindcss/tailwind.css';
import MiniTile from '../components/MiniTile';

const strategy = [
  { title: 'Mastermind', bg: 0, link: '' },
  { title: 'Hanabi', bg: 1, link: 'https://hanab.live/' },
  { title: 'Perudo', bg: 2, link: 'https://perudoonline.com/' },
  { title: 'Ticket to Ride', bg: 1, link: '' },
  { title: 'Monopoly', bg: 4, link: '' },
  { title: 'Risk', bg: 1, link: '' },
  { title: 'Chess', bg: 4, link: 'https://lichess.org/' },
  { title: 'Ultimate Tic Tac Toe', bg: 3, link: 'https://bejofo.com/ttt' },
  { title: 'Poker', bg: 2, link: 'https://www.pokernow.club/' },
  { title: 'Tichu', bg: 1, link: 'https://en.wikipedia.org/wiki/Tichu' },
  { title: 'Figgie', bg: 0, link: 'https://www.figgie.com/' },
  { title: 'Catan', bg: 1, link: 'https://colonist.io/' },
];

const physical = [
  { title: 'Volleyball', bg: 4, link: '' },
  { title: 'Ping Pong', bg: 2, link: '' },
  { title: 'Kickball', bg: 1, link: '' },
  { title: 'Musical Chairs', bg: 4, link: '' },
  { title: 'Basketball', bg: 3, link: '' },
  { title: 'Zombie Tag', bg: 1, link: '' },
  { title: 'Badminton', bg: 0, link: '' },
  { title: 'Hide and Seek', bg: 1, link: '' },
  { title: 'Bowling', bg: 1, link: '' },
  { title: 'Pickleball', bg: 3, link: '' },
  { title: 'Disc Golf', bg: 0, link: '' },
  { title: 'Dodgeball', bg: 0, link: '' },
  { title: 'Soccer', bg: 3, link: '' },
  { title: 'Plank Countdown', bg: 1, link: '' },
  { title: 'Spikeball', bg: 4, link: '' },
  { title: '4-Square', bg: 3, link: '' },
];

const video = [
  { title: 'Chrono Trigger', bg: 0, link: '' },
  { title: 'Gamestar Mechanic', bg: 0, link: 'https://gamestarmechanic.com/' },
  { title: 'Wii Sports', bg: 4, link: '' },
  { title: 'Head Tennis', bg: 2, link: 'https://www.miniplay.com/game/sports-heads-tennis' },
  { title: 'Pokémon', bg: 3, link: 'https://www.rebornevo.com/pr/index.html/' },
  { title: 'Advance Wars: Dual Strike', bg: 1, link: '' },
  { title: 'TagPro Minigames', bg: 2, link: 'https://tagpro.koalabeast.com/' },
  { title: 'Duck Life', bg: 0, link: 'https://www.coolmathgames.com/0-duck-life' },
  { title: 'Final Fantasy VI', bg: 0, link: '' },
  { title: 'NSMBW', bg: 2, link: '' },
  { title: 'Head Soccer', bg: 3, link: '' },
  { title: 'Survev.io', bg: 3, link: 'https://survev.io/' },
  { title: 'Suikoden 2', bg: 0, link: '' },
  { title: 'Smash Bros', bg: 4, link: '' },
  { title: 'Wii Play', bg: 0, link: '' },
  { title: 'Smashy Road', bg: 3, link: '' },
  { title: 'Dragon Quest V', bg: 0, link: '' },
  { title: 'Terraria', bg: 1, link: '' },
  { title: 'Astro Party', bg: 2, link: '' },
  { title: 'Pico Park', bg: 0, link: 'https://picoparkgame.com/en/pp2/' },
  { title: 'Fire Emblem', bg: 0, link: '' },
  { title: 'Haxball', bg: 1, link: 'https://www.haxball.com/play' },
  { title: 'Fortnite', bg: 4, link: 'https://www.fortnite.com/?lang=en-US' },
  { title: 'Bobble League', bg: 1, link: '' },
];

const misc = [
  { title: 'Codenames', bg: 1, link: 'https://codenames.game/' },
  { title: 'Pokémon TCG', bg: 1, link: '' },
  { title: 'Secret Hitler', bg: 1, link: '' },
  { title: 'Avalon', bg: 3, link: 'https://www.proavalon.com/' },
  { title: 'Numbers Game', bg: 0, link: 'https://www.youtube.com/watch?v=NZ20N6syuwc' },
  { title: 'Uno', bg: 4, link: 'https://en.wikipedia.org/wiki/Uno_(card_game)' },
  { title: 'Scum', bg: 4, link: 'https://en.wikipedia.org/wiki/President_(card_game)' },
  { title: 'Taps', bg: 1, link: 'https://www.wikihow.com/Play-the-Shotgun-Game' },
  { title: 'Mafia', bg: 3, link: 'https://www.townofsalem.io/' },
  { title: 'One Night Ultimate Werewolf', bg: 1, link: '' },
  { title: 'War', bg: 4, link: 'https://en.wikipedia.org/wiki/War_(card_game)' },
  { title: 'Sticks', bg: 4, link: 'https://frugalfun4boys.com/play-sticks-finger-game-kids/' },
];

/* ---------- RENDER HELPERS ---------- */
const renderGrid = (tiles) => (
  <div className="grid grid-cols-5">
    {tiles.map((g, i) => (
      <MiniTile key={i} title={g.title} link={g.link} bg={g.bg} />
    ))}
  </div>
);
const renderGrid5 = (tiles) => (
  <div className="grid grid-cols-4">
    {tiles.map((g, i) => (
      <MiniTile key={i} title={g.title} link={g.link} bg={g.bg} />
    ))}
  </div>
);

const legend = (
  <div className=" text-sm">
        <h3 className="text-center font-semibold">Approximate Legend</h3>
  <table className="text-md border-collapse">
    <thead>
      <tr>
        <th className="px-2 py-1"></th>
        <th className="px-2 py-1">Time</th>
        <th className="px-2 py-1">My Skill</th>
        <th className="px-2 py-1">How Fun</th>
        <th className="px-2 py-1">Popular</th>
      </tr>
    </thead>
    <tbody>
      {[
        { c: 'bg-[#8B0000]', t: '✔✔', s: '✔✔', a: '✔✔', p: '?' },     // red
        { c: 'bg-[#00A4D6]', t: '✔✔', s: '✔?',  a: '✔✔', p: '?' },     // blue
        { c: 'bg-[#D4A537]', t: '✔',  s: '?',  a: '✔✔', p: '?' },     // gold
        { c: 'bg-[#C0C0C0]', t: '?',  s: '?✘',  a:'✔',  p: '?' },     // silver
        { c: 'bg-[#ECB98A]', t: '✘',  s: '',   a: '',   p: '✔' },    // brown
      ].map(({ c, t, s, a, p }, i) => (
        <tr key={i} className="border-t border-gray-600">
          <td className="px-2 py-1">
            <div className={`w-4 h-4 rounded ${c}`}></div>
          </td>
          <td className="px-2 py-1 text-center">{t}</td>
          <td className="px-2 py-1 text-center">{s}</td>
          <td className="px-2 py-1 text-center">{a}</td>
          <td className="px-2 py-1 text-center">{p}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
);

/* ---------- PAGE ---------- */
export default function GamesPage() {
  return (
    <div className="bg-green-300 overflow-x-hidden">
      <div className={styles.container} style = {{justifyContent: 'flex-start'}}>
        <Navbar />
      <p className='space-y-2'>&ensp;</p>
        <h1 className="text-center text-primary-900 font-semibold text-2xl md:text-4xl tracking-tight">
          Library 
        </h1>

        <div className="relative w-full mb-16">
          <div className="md:flex md:justify-center md:gap-24">
            <section className="mb-10 md:mb-0">
              <h2 className=" text-center font-semibold mb-2">Strategy Games</h2>
              {renderGrid(strategy)}
            </section>
            <section>
              <h2 className=" text-center font-semibold mb-2">Physical Games</h2>
              {renderGrid(physical)}
            </section>
          </div>

          <div className="hidden min-[1850px]:block absolute top-0 right-4">
            {legend}
          </div>
        </div>

        <div className="md:flex md:justify-center md:gap-24">
          <section className="mb-10 md:mb-0">
            <h2 className=" text-center font-semibold mb-2">Video Games</h2>
            {renderGrid(video)}
          </section>
          <section>
            <h2 className=" text-center font-semibold mb-2">Misc</h2>
            {renderGrid(misc)}
          </section>
        </div>

        <Head>
          <title>Games • Hari Desikan</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>

        <style jsx>{`
          section :global(.grid) {
            justify-content: center;
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
            background-color: #27272a;
            overscroll-behavior: none;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </div>
  );
}
