/** * 指定された文字列と前方一致する行を置換する * @param {string} query * @param {string} text * * @returns {Promise<number | undefined>} ちかんした行index (未挿入ならundefined) */ async function replaceLineAtWordStarts(query, text) { const editor = app.workspace.activeLeaf.view.editor; let rowIndexFound = -1; for (let row = 0; row <= editor.lastLine(); row++) { if (editor.getLine(row).startsWith(query)) { rowIndexFound = row; break; } } if (rowIndexFound !== -1) { editor.replaceRange( text, { line: rowIndexFound, ch: 0 }, { line: rowIndexFound } ); } return rowIndexFound === -1 ? undefined : rowIndexFound; } module.exports = replaceLineAtWordStarts;