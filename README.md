# cicd-playground-lab

## Ziel
Praktisches Lernprojekt, um moderne CI/CD-Workflows mit GitHub Actions zu verstehen: Testen, Build-Artefakte, Releases über Tags.

## Tech-Stack
- Node.js 20+
- GitHub Actions (CI + CD Simulation)

## Setup
```bash
cd /home/ubuntu/projects/cicd-playground-lab
npm install
npm run lint
npm test
npm run build
npm start
```

## Aktueller Status
- Basis-App mit Tests vorhanden
- CI-Workflow aktiv (Node 20/22 Matrix, lint/test/build + versionspezifischer Artifact Upload)
- CD-Simulation über Git Tags (`vX.Y.Z`) erstellt GitHub Release + Tarball

## Nächste Schritte
1. Branch Protection + Required Checks aktivieren
2. Matrix-Build (Node 20/22) ergänzen
3. Optional: Docker Build + GHCR Publish (nur nach Freigabe)
4. Optional: Environments + manual approval gates für "production"

## Lernpfad (hands-on)
1. Erstelle Feature-Branch, breche bewusst einen Test, öffne PR -> CI rot/grün beobachten.
2. Merge nach `main` -> CI läuft erneut.
3. Tagge lokal `v0.1.0` und pushe den Tag -> Release-Workflow erzeugt Release-Artefakt.

## Sicherheits-/Kostenhinweis
- Kein externes Deployment konfiguriert (nur GitHub-internes Release-Artefakt).
- Geringe Laufzeitkosten durch schlanke Jobs.
