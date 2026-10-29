// gioco.js
const MOLTIPLICATORE = 2;
const MS_GIORNO = 24 * 60 * 60 * 1000;
const MS_19_00 = 19 * 60 * 60 * 1000;

function tempoGioco(stato) {
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
