import * as jsonfile from "jsonfile";

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[] = [];
  load() {
    const json = jsonfile.readFileSync(__dirname + "/contacts.json");
    this.data = json;
    console.log(this.data);
  }

  // getAll() {
  //   return this.data;
  // }

  // addOne(contact: Contact) {
  //   this.data.push(contact);
  // }

  // save() {
  //   jsonfile.writeFileSync("./contacts.json", this.data);
  // }

  getOneById(id) {
    const encontrado = this.data.find((item) => {
      if (item.id == id) {
        return true;
      }
    });
    return encontrado;
  }
}
export { ContactsCollection };
