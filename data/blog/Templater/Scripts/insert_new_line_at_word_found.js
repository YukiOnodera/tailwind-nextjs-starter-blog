/**
 * 指定された文字列と一致する行の次の行にテキストを追加する
 * @param {string} query
 * @param {string} text
 *
 * @returns {Promise<number | undefined>} 挿入した行index (未挿入ならundefined)
 */
async function insertNewLineAtWordFound(query, text) {
  const editor = app.workspace.activeLeaf.view.editor;

  let rowIndexFound = -1;
  for (let row = 0; row <= editor.lastLine(); row++) {
    if (editor.getLine(row) === query) {
      rowIndexFound = row;
      break;
    }
  }

  if (rowIndexFound !== -1) {
    editor.replaceRange("\n" + text, CodeMirror.Pos(rowIndexFound));
  }

  return rowIndexFound === -1 ? undefined : rowIndexFound + 1;
}

module.exports = insertNewLineAtWordFound;