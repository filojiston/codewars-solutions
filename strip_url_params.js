// Removes any duplicate query string parameters from the url(the first occurence should be kept)
// Removes any query string parameters specified within the 2nd argument(optional array)


function stripUrlParams(url, paramsToStrip = []) {
  const indexOfQuestionMark = url.indexOf('?');
  if (indexOfQuestionMark == -1) return url;

  const seen = [];
  let result = url.substring(0, indexOfQuestionMark + 1);
  for (let i = indexOfQuestionMark + 1; i < url.length; i += 4) {
    const current = url[i];
    if (!seen.includes(current) && !paramsToStrip.includes(current)) {
      seen.push(current);
      result += url.substring(i, i + 3);
      result += '&'
    }
  }

  result = result.slice(0, -1);
  return result;
}

let url1 = 'www.codewars.com?a=1&b=2';
let url2 = 'www.codewars.com?a=1&b=2&a=1&b=3';
let url3 = 'www.codewars.com?a=1';
let url4 = 'www.codewars.com';

console.log(stripUrlParams(url1) == url1, "Didn't return correct value when given a url that had nothing to be stripped");
console.log(stripUrlParams(url2) == url1, "Didn't strip duplicates from url");
console.log(stripUrlParams(url2, ['b']) == url3, "Didn't strip param that was specified in paramsToStrip array");
console.log(stripUrlParams(url4, ['b']) == url4, "Didn't return an un-modifed url when there was nothing to strip");
console.log(stripUrlParams(url1, ['a', 'b']) == url4, "Didn't strip all parameters");
