/**
 * @returns {number}
 */
function rating(aDriver) {
  // return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
  return aDriver.numberOfLateDeliveries > 5 ? 2 : 1;
}

/**
 * @returns {boolean}
 */
function moreThanFiveLateDeliveries(dvr) {
  return dvr.numberOfLateDeliveries > 5
}

function reportLines(aCustomer) {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
}

function gatherCustomerDate(out, aCustomer) {
  out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
}
