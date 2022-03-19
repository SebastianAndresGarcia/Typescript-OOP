
import { testA } from "./modeloA/testA";
import { TestB } from "./modeloB/TestB";
//console.log("antes de instanciar objeto");
let a = new testA();
a.main();
//console.log("después de instanciar objeto");
let testB = new TestB();
testB.testB();