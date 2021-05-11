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
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  gatherCustomerData(lines, aCustomer);
  return lines;
}
