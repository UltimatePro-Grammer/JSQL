import { clauses } from "./parseClause/parseClause";

clauses.register("SELECT", ["multi_identifier"]);
clauses.register("FROM", ["multi_identifier"]);
clauses.register("WHERE", ["predicate"]);

clauses.register("CREATE", [["TABLE", "DATABASE"], "identifier", "expression"]);

clauses.register("INSERT", ["INTO", "identifier", "expression"]);
clauses.register("VALUES", ["rest"]); // TODO: probably shouldn't use rest here
clauses.register("DROP", ["TABLE", "identifier"]);