// input: courses - array of course-names "name-yymm"
// output: sorted by "yymm", then "name"
function sortme(courses) {
  return courses.sort((a, b) => {
    const [nameA, yymmA] = a.split('-');
    const [nameB, yymmB] = b.split('-');

    if (yymmA.localeCompare(yymmB) == 0) {
      return nameA.localeCompare(nameB);
    } else {
      return yymmA.localeCompare(yymmB);
    }
  });
}

// yikes!
function sortme(courses) {
  return courses.sort((a, b) => {
    const [nameA, yymmA] = a.split('-');
    const [nameB, yymmB] = b.split('-');

    return result = yymmA.localeCompare(yymmB) ? result : nameA.localeCompare(nameB);
  });
}


console.log(sortme(['web-1305', 'site-1305', 'web-1304', 'site-1304']));
