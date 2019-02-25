console.log("Even nummers tot 100 gedeeld door 2");
let i = 1;
while (i<=100) {
	i++;
    if (i % 2 == 0) {
        console.log(i/2);
    }
}

console.log("Oneven nummers tot 100 vermeningvuldig met 3");
for (i=1; i<=100; i++) {
    if(i%2 === 0)continue;
        console.log(i*3);
}
