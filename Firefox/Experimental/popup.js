function getCookie(name, callback) {
    // Pobieranie aktywnej zakładki
    browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const tab = tabs[0];
        const url = new URL(tab.url);

        // Pobieranie ciasteczka o podanej nazwie
        browser.cookies.get({ name: name, url: url.href }, function(cookie) {
            callback(cookie ? cookie.value : null);
        });
    });
}

function setCookie(name, value) {
    browser.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        const tab = tabs[0];
        const url = new URL(tab.url);

        // Ustawianie ciasteczka
        browser.cookies.set({
            url: url.href,
            name: name,
            value: value,
            domain: url.hostname,
            path: '/',
            expirationDate: (new Date().getTime() / 1000) + 60 * 60 * 24 * 30  // Cookie valid for 30 days
        }, function(cookie) {
            if (chrome.runtime.lastError) {
                console.error("Error setting cookie:", chrome.runtime.lastError);
            }
        });
    });
}


// Funkcja do ładowania ustawień z ciasteczek
function loadSettings() {
    getCookie('WRD-KAKU-AUTO-DELETER', function(value) {
        document.getElementById('autoDelete').checked = (value === 'true');
    });
    getCookie('WRD-KAKU-SHOW-ALERT', function(value) {
        document.getElementById('autoReminder').checked = (value === 'true');
    });
}

// Funkcja do zapisywania ustawień do ciasteczek
function saveSettings() {
    const autoDelete = document.getElementById('autoDelete').checked;
    const autoReminder = document.getElementById('autoReminder').checked;
    if(autoReminder) {
        alert("hwdp")
    }
    setCookie('WRD-KAKU-AUTO-DELETER', autoDelete);
    setCookie('WRD-KAKU-SHOW-ALERThwdp', autoReminder);
}

// Inicjalizacja stanu checkboxów przy załadowaniu popupu
document.addEventListener('DOMContentLoaded', loadSettings);

// Dodanie nasłuchiwaczy na zmiany checkboxów
document.getElementById('autoDelete').addEventListener('change', function() {
    saveSettings()
    alert("cici")
});

document.getElementById('autoReminder').addEventListener('change', function() {
    saveSettings();
    alert("cici")
});
