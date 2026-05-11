# TimeTrackAQ

⏱ Web app per tracciare il tempo di pratica quotidiana.

## Funzionalità

- **Cronometro** con pausa e stop automatico
- **Inserimento manuale** minuti (+/- 15 min o valore custom)
- **Storico editabile**: tap su una sessione per modificare i minuti
- **Bilancio giornaliero** e cumulativo (debito/credito)
- **Obiettivo giornaliero** personalizzabile
- **Statistiche**: sessioni, totali, media, obiettivi raggiunti
- **PWA**: installabile offline

## Come usarla

Apri `https://alessandroq70.github.io/TimeTrackAQ/` oppure servi la cartella con qualsiasi web server:

```bash
cd TimeTrackAQ
python3 -m http.server 8080
# poi apri http://localhost:8080
```

## Pubblicazione su GitHub Pages

1. Vai su **Settings → Pages** del repo su GitHub
2. Source: **Deploy from a branch** → Branch: `main`, cartella `/`
3. Salva → il sito sarà live su `https://alessandroq70.github.io/TimeTrackAQ/`

## Tecnologie

HTML5 + CSS3 + Vanilla JavaScript (nessun framework)

## Dati

I dati sono salvati in `localStorage` del browser. Per un backup o sync, esporta manualmente il contenuto dalla console (`localStorage.getItem('timetrack_records')`).