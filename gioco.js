// gioco.js: calcolo dell'orologio di gioco accelerato (x2)
const MOLTIPLICATORE = 2; 
const MS_GIORNO = 24 * 60 * 60 * 1000;

// Calcola i millisecondi corrispondenti alle 19:00:00 (19 ore * 3600 sec * 1000 ms)
const MS_19_00 = 19 * 60 * 60 * 1000;

function tempoGioco(stato) {
  // Se non c'è ancora uno stato salvato, parte dalle 19:00:00
  if (!stato) return MS_19_00;
  
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
