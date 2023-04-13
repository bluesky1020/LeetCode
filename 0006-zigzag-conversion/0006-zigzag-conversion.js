/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (numRows === 1) {
    return s;
  }

  const rows = new Array(numRows).fill('');
  let currRow = 0;
  let goingDown = false;

  for (let i = 0; i < s.length; i++) {
    rows[currRow] += s[i];

    if (currRow === 0 || currRow === numRows - 1) {
      goingDown = !goingDown;
    }

    currRow += goingDown ? 1 : -1;
  }

  return rows.join('');
};