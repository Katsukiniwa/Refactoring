function printOwing(invoice) {
  let outstanding = 0;

  printBanner();

  // 未払い金の計算(calculate outstanding)
  for (const o of invoice.oreders) {
    outstanding += o.amount;
  }

  // 締め日の記録(record due date)
  const today = Clock.today;
  invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);

  printDetail();

  function printDetail() {
    // 明細の印字(print degail)
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocalDateString()}`);
  }
}

function printBanner() {
  console.log("=======================");
  console.log("==== Customer Owes ====");
  console.log("=======================");
}
