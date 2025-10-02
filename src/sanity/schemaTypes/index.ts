import { type SchemaTypeDefinition } from "sanity";
import { vanType } from "./vansType";

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [vanType],
};
