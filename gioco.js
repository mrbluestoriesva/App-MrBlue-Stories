// gioco.js: calcolo dell'orologio di gioco (nessun accesso diretto al database)
const MOLTIPLICATORE = 2;               // il tempo di gioco va al doppio
const MS_GIORNO = 24 * 60 * 60 * 1000;

// stato = { attivo, gioco0, reale0 } letto da Firestore
function tempoGioco(stato) {
  if (!stato) return 0;
  const trascorso = stato.attivo ? (Date.now() - stato.reale0) * MOLTIPLICATORE : 0;
  return (stato.gioco0 + trascorso) % MS_GIORNO;
}

function formatoGioco(ms) {
  const s = Math.floor(ms / 1000);
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return `${h}:${m}:${sec}`;
}
