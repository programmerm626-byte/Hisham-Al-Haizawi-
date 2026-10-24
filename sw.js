// Service worker بسيط بدون تخزين مؤقت، حتى لا تظهر نسخة قديمة من المنصة بعد التحديث
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
