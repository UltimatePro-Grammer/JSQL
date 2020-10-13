// IMPORTS
import Dexie, { Table } from "dexie";

// EXPORTS
export const db = new Dexie("JSQL");
export let version = 0;
export const increaseVersion = ()=>{ version++; };
const stores: {[key: string]: Table} = {};
export const storesColumns: {[key: string]:string[]} = {};
export default stores;


// CODE
Dexie.exists("JSQL").then((exists)=>{
    if(exists) {
        version = db.verno;
        db.open()
        .then(()=>{
            db.tables.forEach((table)=>{
                stores[table.name] = table;
                storesColumns[table.name] = stores[table.name].schema.indexes.map(obj=>obj.name);
            });
        })
        .catch((reason)=>{
            console.error("Opening Dexie failed. Reason: "+reason);
        });
    }
});