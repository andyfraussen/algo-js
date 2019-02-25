console.log("Even nummers tot 100");
let i = 1;
while (i<=100) {
	i++;
    if (i % 2 == 0) {
        console.log(i);
    }
}

console.log("Oneven nummers tot 100");
for (i=1; i<=100; i++) {
    if(i%2 === 0)continue;
        console.log(i);
}


console.log("Bonus Oneven nummers tot 100 (loop 50)");
for (i=1; i<=50; i++) {
    if(i%2 === 0)continue;
        console.log(i);
}

