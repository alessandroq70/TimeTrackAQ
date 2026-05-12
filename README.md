# TimeTrackAQ

⏱ Web app per tracciare il tempo di pratica quotidiana (pianoforte).

## Funzionalità

- **Cronometro** con pausa e stop automatico
- **Inserimento manuale** con step +1, +10, -1, -10 e limite per giorno (max 1440 min = mezzanotte)
- **Storico raggruppato per giorno** con filtri (tutto / ultima settimana / ultimo mese)
- **Storico editabile**: modifica data, ora e minuti di ogni sessione dalla modale
- **Eliminazione giornata intera** (con conferma)
- **Aggiunta sessione manuale** con data, ora e minuti nell'apposito form del tab Storico
- **Bilancio giornaliero** e cumulativo (debito/credito)
- **Obiettivo giornaliero** personalizzabile
- **Statistiche**: sessioni, totali, media, obiettivi raggiunti
- **💾 Backup & Ripristino** (dentro il tab Storico): esporta/importa JSON, auto-backup attivabile con un click
- **PWA**: installabile offline

## Come usarla

```bash
cd TimeTrackAQ
python3 -m http.server 8080
# poi apri http://localhost:8080
```

Oppure servi la cartella con qualsiasi web server.

## Backup & Auto-Backup

- **Esporta**: scarica un file JSON con tutti i dati
- **Importa**: carica un file JSON (sovrascrive i dati attuali)
- **Auto-Backup**: salva automaticamente una copia in localStorage ogni volta che i dati cambiano. Attivabile/disattivabile dal tab Storico.
- **Ripristina**: ripristina i dati dall'ultimo auto-backup

## Limiti mezzanotte

Il sistema impedisce di superare 1440 minuti (24h) per singola giornata:
- Timer: si ferma automaticamente al raggiungimento del limite
- Inserimento manuale: il campo si auto-limità ai minuti disponibili
- Modifica sessione: controlla il totale giornaliero prima di salvare

## Tecnologie

HTML5 + CSS3 + Vanilla JavaScript (nessun framework)

## Dati

I dati sono salvati in `localStorage` del browser:
- `timetrack_records` — sessioni
- `timetrack_dailyGoal` — obiettivo giornaliero
- `timetrack_autobackup` — ultimo backup automatico
- `timetrack_autobackup_enabled` — flag auto-backup

## Pubblicazione

1. Vai su **Settings → Pages** del repo su GitHub
2. Source: **Deploy from a branch** → Branch: `main`, cartella `/`
3. Salva → il sito sarà live su `https://alessandroq70.github.io/TimeTrackAQ/`