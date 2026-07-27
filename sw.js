// Service worker minimal — juste pour rendre BOLARI "installable" sur mobile.
// Il ne fait pas de cache hors-ligne pour l'instant, il permet juste au
// navigateur de proposer "Installer l'application".

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // On laisse simplement passer les requêtes normalement.
});
