function removeKeywordModal() {
    const modal = document.getElementById("keywords-modal");
    if(localStorage.getItem("WRD-KAKU-SHOW-ALERT") === null) {
        localStorage.setItem("WRD-KAKU-SHOW-ALERT", "false");
    }

    if(localStorage.getItem("WRD-KAKU-AUTO-DELETER") === null) {
        localStorage.setItem("WRD-KAKU-AUTO-DELETER", "true");
    }

    if (modal) {
        if(localStorage.getItem("WRD-KAKU-AUTO-DELETER") === "true") {
            modal.remove();
            console.log("removed keywords modal | https://discord.gg/tqHPXPGW | discord: wxjtxqk || https://kaku.lol/warm-reminder");
            if(localStorage.getItem("WRD-KAKU-SHOW-ALERT") === "true") {
                window.alert("Warm Reminder usunięty!")
            }
        }
    }
}

// Wywołanie removeKeywordModal co sekundę (1000 milisekund)
setInterval(removeKeywordModal, 1500);