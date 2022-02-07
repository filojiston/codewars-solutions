function isValidCoordinates(coordinates) {
  const [latitude, longtitude] = coordinates.split(', ');

  for (let i = 0; i < latitude.length; i++) {
    const currentLetter = latitude[i];
    if (!'0123456789.-'.includes(currentLetter)) {
      return false;
    }
  }
  const latitudeResult = Number(latitude) >= -90 && Number(latitude <= 90);

  for (let i = 0; i < longtitude.length; i++) {
    const currentLetter = longtitude[i];
    if (!'0123456789.-'.includes(currentLetter)) {
      return false;
    }
  }
  const longtitudeResult =
    Number(longtitude) >= -180 && Number(longtitude <= 180);

  return Boolean(latitudeResult && longtitudeResult);
}

// nice, one liner with regex
function isValidCoordinates(coordinates) {
  return /^-?((\d)|([0-8]\d)|(90))(\.\d+)?, ?-?((\d\d?)|(1[0-7]\d)|(180))(\.\d+)?$/.test(
    coordinates
  );
}

const ValidCoordinates = [
  '-23, 25',
  '4, -3',
  '24.53525235, 23.45235',
  '04, -23.234235',
  '43.91343345, 143',
];
for (i in ValidCoordinates) {
  console.log(
    isValidCoordinates(ValidCoordinates[i]),
    ValidCoordinates[i] + ' validation failed.'
  );
}

const InvalidCoordinates = [
  '23.234, - 23.4234',
  '2342.43536, 34.324236',
  'N23.43345, E32.6457',
  '99.234, 12.324',
  '6.325624, 43.34345.345',
  '0, 1,2',
  '0.342q0832, 1.2324',
  '23.245, 1e1',
];
for (i in InvalidCoordinates) {
  console.log(
    isValidCoordinates(InvalidCoordinates[i]),
    InvalidCoordinates[i] + ' validation failed.'
  );
}
