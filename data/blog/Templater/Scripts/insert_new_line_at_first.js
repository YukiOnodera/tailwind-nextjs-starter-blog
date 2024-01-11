/**
 * 一番上の行にテキストを追加する
 * @param {*} text
 */
async function insertNewLineAtFirst(text) {
  const editor = app.workspace.activeLeaf.view.editor;
  editor.replaceRange(text, CodeMirror.Pos(-1));
}

module.exports = insertNewLineAtFirst;