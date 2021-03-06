import { parseClause } from "../parseClause/parseClause";
import removeNoise from "../removeNoise/removeNoise";

// a statement looks like "SELECT * from db;"
export default function parseStatement(statement: string) {
    // clean up
    statement = removeNoise(statement);

    // @ts-ignore
    const getKeywordAndItems = ({keyword, items})=>({keyword, items});

    let clauses: {keyword: string, items:any[]}[] = [];
    let rest = statement;
    while(rest !== "") {
        const parsedClause = parseClause(rest);
        rest = parsedClause.rest;
        
        // @ts-ignore
        clauses.push( getKeywordAndItems(parsedClause) );
    }
    return clauses;
}