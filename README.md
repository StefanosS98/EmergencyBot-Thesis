# EmergencyBot-Thesis

Ένα απλό Bot για καταστάσεις έκτακτης ανάγκης, όπως **πυρκαγιά** ή **σεισμός**, που τρέχει σε Azure και μπορεί να συνδεθεί με εφαρμογή Android μέσω Direct Line.

---

## Περιγραφή

Αυτό το bot απαντάει σε βασικές εντολές:
- `"πυρκαγιά"` → οδηγίες ασφαλούς απομάκρυνσης και κλήσης πυροσβεστικής.
- `"σεισμός"` → οδηγίες προστασίας και ασφάλειας.

Χρησιμοποιεί Node.js και το Bot Framework SDK και τρέχει σε Azure App Service.

---

## Αρχεία

- `index.js` → Κύριο αρχείο με λογική bot
- `package.json` → Εξαρτήσεις Node.js

---

## Απαιτήσεις

- Node.js 18 LTS ή νεότερο
- Microsoft Azure Bot Service
- Azure App Service για deploy
- GitHub (για CI/CD deploy, optional)

---

## Οδηγίες εγκατάστασης / ανάπτυξης

1. Κλωνοποιήστε το repository:
```bash
git clone https://github.com/<username>/EmergencyBot.git
cd EmergencyBot
