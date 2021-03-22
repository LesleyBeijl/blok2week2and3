var weekdagen = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
for(i = 0; i < 7; i++) {
    alledagen.innerHTML = alledagen.innerHTML + " - " + weekdagen[i];
}

for(i = 0; i < 5; i++) {
    allewerkdagen.innerHTML = allewerkdagen.innerHTML + " - " + weekdagen[i];
}


for(i = 5; i < 7; i++) {
    alleweekenddagen.innerHTML = alleweekenddagen.innerHTML + " - " + weekdagen[i];
}

for(i = 6; i > -1; i--) {
    alledagenomgekeerd.innerHTML = alledagenomgekeerd.innerHTML + " - " + weekdagen[i];
}


for(i = 4; i > -1; i--) {
    allewerkdagenomgekeerd.innerHTML = allewerkdagenomgekeerd.innerHTML + " - " + weekdagen[i];
}

for(i = 6; i > 4; i--) {
    alleweekenddagenomgekeerd.innerHTML = alleweekenddagenomgekeerd.innerHTML + " - " + weekdagen[i];
}

