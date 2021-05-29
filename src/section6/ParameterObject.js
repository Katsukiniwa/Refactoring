const station = {
  name: "ZB1",
  readings: [
    { tmp: 47, time: "2016-11-10 09:10" },
    { tmp: 53, time: "2016-11-10 09:20" },
    { tmp: 58, time: "2016-11-10 09:30" },
  ]
}

function readingOutsideRange(station, min, max) {
  return station.readings.filter(r => t.temp < min || t.temp > max)
}

alerts = readingOutsideRange(
  station,
  operatingPlan.temperatureFloor,
  operatingPlan.tempratureCeiling
);
