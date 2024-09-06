
// const hello = require("./module1");//common js
// // console.log(hello());
// hello.hello();
// hello.ahello("Garima")
// hello.ahello("Nitika")

// Destructuring in js
// const {hello,ahello} = require("./module1")//common js
// hello();
// ahello("Garima");
// ahello("Nitika");

import harry,{hello,ahello} from "./module2.js";//error was  happen: Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
hello();
ahello("Garima");
ahello("Nitika");
harry();