import runSelect from "../runner/select/runSelect";
import runCreate from "../runner/create/runCreate";
import parseStatement from "./parseStatement/parseStatement";
import "./registerClauses";
import runInsert from "../runner/insert/runInsert";
import runDrop from "../runner/drop/runDrop";
import { IDatabase } from "../runner/databases";

export default async function parseAndRun(statements: string, database: IDatabase) {
    let results = await Promise.all(statements.split(";").map((statement) => {
        const clauses = parseStatement(statement);
        const statementType = clauses[0].keyword;

        switch (statementType) {
            case "SELECT":
                return runSelect(clauses, database);
            case "CREATE":
                return runCreate(clauses, database);
            case "INSERT":
                return runInsert(clauses, database);
            case "DROP":
                return runDrop(clauses, database);
        }
    }));
    if(results.length === 1) {
        return results[0];
    }
    return results;
}