function printOwing(invoice) {
  printBanner();

  // 未払い金の計算(calculate outstanding)
  let outstanding = 0;
  for (const o of invoice.oreders) {
    outstanding += o.amount;
  }

  recordDueDate(invoice);
  printDetail(invoice, outstanding);
}

function printBanner() {
  console.log("=======================");
  console.log("==== Customer Owes ====");
  console.log("=======================");
}

function printDetail(invoice, outstanding) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${invoice.dueDate.toLocalDateString()}`);
}

function recordDueDate(invioce) {
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}
