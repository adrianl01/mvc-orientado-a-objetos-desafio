import { ContactsCollection } from "./models";
import * as minimist from "minimist";
import { ContactsController, ContactsControllerOptions } from "./controllers";

function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  const resultado = minimist(argv);
  return {
    action: resultado.action,
    params: JSON.parse(resultado.params),
  };
}

function main() {
  const controller = new ContactsCollection();
  // const params = parseaParams(process.argv.slice(2));
  // const result = controller.processOptions(params);
  // console.log(result);
  console.log(controller.load());
}

main();
