// ==================== BACKUP & RESTORE ====================
function exportData() {
  const data = {
    records: records,
    dailyGoal: dailyGoal,
    exportedAt: new Date().toISOString()
  };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `timetrack-backup-${new Date().toISOString().slice(0,10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

function importData(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.records || !Array.isArray(data.records)) throw 'Formato non valido';
      if (confirm(`Importare ${data.records.length} sessioni? I dati attuali verranno sovrascritti.`)) {
        records = data.records;
        saveRecords(records);
        if (data.dailyGoal) {
          dailyGoal = data.dailyGoal;
          saveGoalVal(dailyGoal);
          document.getElementById('goalInput').value = dailyGoal;
        }
        updateBalance();
        updateStats();
        renderHistory();
        alert('Dati importati con successo!');
      }
    } catch (err) {
      alert('Errore nell\'importazione: ' + err);
    }
  };
  reader.readAsText(file);
}

function resetAll() {
  if (!confirm('Sei sicuro di voler cancellare tutti i dati?')) return;
  records = [];
  saveRecords(records);
  dailyGoal = 60;
  saveGoalVal(60);
  document.getElementById('goalInput').value = '60';
  resetUI();
  updateBalance();
  updateStats();
  renderHistory();
}