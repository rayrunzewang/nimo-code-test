const transaction = [
    {
        "transactionNo": 502,
        "transactionAmount": "2500.00",
        "transactionTime": "2025-04-22 14:04:48",
        "balance": "-42500.00",
        "transactionCategory": "credit"
    },
    {
        "transactionNo": 501,
        "transactionAmount": "8",
        "transactionTime": "2025-04-20 14:04:50",
        "balance": "-45000.00",
        "transactionCategory": "credit"
    },
    {
        "transactionNo": 500,
        "transactionAmount": "1000.00",
        "transactionTime": "2025-04-19 14:04:36",
        "balance": "-45000.00",
        "transactionCategory": "credit"
    },
    {
        "transactionNo": 499,
        "transactionAmount": "2500.00",
        "transactionTime": "2025-04-19 14:04:22",
        "balance": "-46000.00",
        "transactionCategory": "credit"
    },
    {
        "transactionNo": 498,
        "transactionAmount": "2500.00",
        "transactionTime": "2025-04-12 14:03:03",
        "balance": "-48500.00",
        "transactionCategory": "credit"
    },
    {
        "transactionNo": 497,
        "transactionAmount": "1000.00",
        "transactionTime": "2025-04-05 14:03:39",
        "balance": "-51000.00",
        "transactionCategory": "debit"
    },
    {
        "transactionNo": 496,
        "transactionAmount": "5.00",
        "transactionTime": "2025-04-05 14:03:23",
        "balance": "-50000.00",
        "transactionCategory": "narrative"
    },
    {
        "transactionNo": 494,
        "transactionAmount": "50000.00",
        "transactionTime": "2025-04-05 14:02:52",
        "balance": "-50000.00",
        "transactionCategory": "debit"
    }
]


const ordered_transaction = transaction.sort(function (a, b) { return new Date(a["transactionTime"]) - new Date(b["transactionTime"]) })

let filtered_transaction = [];
for (let i = 0; i < ordered_transaction.length; i++) {
    // console.log()
    // console.log(new Date(ordered_transaction[i].transactionTime).getDate());
    if (i < ordered_transaction.length - 1 && new Date(ordered_transaction[i].transactionTime).getDate() !== new Date(ordered_transaction[i + 1].transactionTime).getDate()) {
        console.log(ordered_transaction[i])
    }

    if (i === ordered_transaction.length - 1) {
        filtered_transaction.push(ordered_transaction[i])
    }
}


// ordered_transaction.forEach(function (transaction) {
//     console.log(new Date(transaction.transactionTime).getDate());
// })