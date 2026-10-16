// gioco.js: calcolo dell'orologio di gioco accelerato (x2)
const MOLTIPLICATORE = 2; 
const MS_GIORNO = 24 * 60 * 60 * 1000;

// Calcola i millisecondi corrispondenti alle 17:45:00 del giorno corrente
function getTimestamp1745() {
  const ora = new Date();
  ora.setHours(17, 45, 0, 0);
  return ora.getTime();
}

function tempoGioco(stato) {
  if (!stato) return 0;
  
  // Se il gioco è attivo, calcoliamo quanto tempo reale è passato da quando l'admin lo ha avviato
  // moltiplicandolo per 2, partendo dalla base di gioco0 (che alle 17:45 sarà 0).
  if (stato.attivo) {
    const trascorsoReale = Date.now() - stato.reale0;
    return (stato.gioco0 + (trascorsoReale * MOLTIPLICATORE)) % MS_GIORNO;
  }
  
  return stato.gioco0 % MS_GIORNO;
}

function formatoGioco(ms) {
  const s = Math.floor(ms / 1000);
  const h = String(Math.floor(s / 3600)).padStart(2, '0');
  const m = String(Math.floor((s % 3600) / 60)).padStart(2, '0');
  const sec = String(s % 60).padStart(2, '0');
  return `${h}:${m}:${sec}`;
}
