function printOwing(invoice) {
  printBanner();
  let outstanding = calculateOutstanding();
  printDetail(outstanding);

  function printDetail(outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
  }
}
