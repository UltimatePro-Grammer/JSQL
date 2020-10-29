import * as monaco from 'monaco-editor';
import "./monaco.css";
import zoom from "./zoom";
const editor = monaco.editor.create(document.getElementById('monaco-container'), {
    value: `// JSQL has been auto-imported and top level await is enabled
const db = new Database(\`CREATE DATABASE db\`);
await db.create();
const tbl = new Table(\`CREATE TABLE tbl (
  id AUTO_INCREMENT,
  firstName,
  lastName,
  email
)\`, db);
await tbl.create();
if(await tbl.isEmpty()) {
  await tbl.query(\`INSERT INTO \${tbl.name} VALUES
  ('John', 'Doe', 'johndoe@example.com'),
  ('Jane', 'Doe', 'janedoe@example.com')\`);
}
const result = await tbl.query(\`SELECT * FROM \${tbl.name}\`);
console.log(result);`,
    language: 'javascript',
    theme: "vs-dark",
    automaticLayout: true,
    fontSize: 16
});
document.onkeydown = (event)=>{
  const isCtrlDown = navigator.platform.toUpperCase().includes("MAC") ? event.metaKey : event.ctrlKey;
  if(isCtrlDown) {
    if(event.key == "=" || event.key == "+") {
      event.preventDefault();
      zoom(5);
    } else if(event.key == "-") {
      event.preventDefault();
      zoom(-5);
    }
  }
}
export default editor;