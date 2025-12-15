let balance = Number(process.argv[2]);
let amount = Number(process.argv[3]);

if (Number.isNaN(balance) || Number.isNaN(amount)) {
    console.log('Invalid Input');
} else {
    if(balance < amount) {
        console.log('Insufficient balance');
    } else if(amount > 5000) {
        console.log('Exceeds per-withdrawal limit');
    } else {
        console.log('Withdrawal approved');
    }
}