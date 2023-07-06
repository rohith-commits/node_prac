const path = require("node:path");

console.log(__filename);
console.log(__dirname);
console.log(path.basename(__filename));
console.log(path.extname(__filename));

const p_obj = path.parse(__filename);
console.log(p_obj);

const p_obj1 = path.format(p_obj);
console.log(p_obj1);

const p_obj2 = path.join("folder1","folder2","folder3");
console.log(p_obj2);

const p_obj3 = path.resolve("folder1","file.txt");
console.log(p_obj3);

console.log(process.env.PATH);





