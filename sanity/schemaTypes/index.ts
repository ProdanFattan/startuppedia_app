import { type SchemaTypeDefinition } from 'sanity'


import {authorType} from './authorType'
import { startup } from "@/sanity/schemaTypes/startup";
import { playlist } from "@/sanity/schemaTypes/playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [authorType, startup, playlist],
};
