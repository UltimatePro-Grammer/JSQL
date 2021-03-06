import { Table } from "dexie";
import { IDatabase } from "../databases";
import where, { WherePredicate } from "../where/where";

export default async function runSelect(clauses: {keyword: string, items:any[]}[], database: IDatabase) {
    const columns: string[] = clauses[0].items[0];
    let storeNames: string[] = !!database.storesColumns ? [...Object.keys(database.storesColumns)] : []; // be * by default
    let wherePredicate: (undefined|{left: string, operator: string, right: string});

    for(const obj of clauses) {
        switch(obj.keyword) {
            case "SELECT":
                continue;
            case "FROM":
                const names = obj.items[0];
                storeNames = []; // since it is * by default we need to make sure it is a clean slate
                for(const name of names) {
                    if(name === "*") {
                        storeNames.push(...Object.keys(database.storesColumns));
                    } else {
                        storeNames.push(name);
                    }
                }
                break;
            case "WHERE":
                wherePredicate = obj.items[0]; // left, right, operator
                break;
        }
    }

    if(storeNames.length === 0) {
        // if it is empty (no from clause) then set it as if it were *
        storeNames.push(...Object.keys(database.stores));
    }

    let resultsByStore: {[key:string]:any} = {};
    for(const name of storeNames) {
        const store = database.stores[name];
        if(store === undefined) {
            throw `Table ${name} does not exist.`;
        }
        let result: ({[key:string]:any}|any)[] = [];
        let storeContents = await getContents(store, wherePredicate);
        for(const item of storeContents) {
            let returnedItem: ({[key:string]:any}|any) = {};
            for(const column of columns) {
                if(column === "*") {
                    returnedItem[column] = item;
                } else {
                    returnedItem[column] = item[column];
                }
            }

            // remove wrapper object
            if(columns.length === 1) {
                returnedItem = returnedItem[columns[0]];
            }

            result.push(returnedItem);
        }
        
        resultsByStore[name] = result;
    }

    if(storeNames.length === 1) {
        // don't need an extra wrapper object, remove it
        // @ts-ignore - since this changes `resultsByStore` typescript gets angry
        resultsByStore = resultsByStore[Object.keys(resultsByStore)[0]];
    }

    return resultsByStore;
}

const getContents = (store: Table, wherePredicate: WherePredicate)=>{
    let collection = store.toCollection();
    if(wherePredicate) {
        collection = where(store, wherePredicate);
    }
    return collection.toArray();
}