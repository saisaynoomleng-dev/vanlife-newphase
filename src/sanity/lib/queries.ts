import { defineQuery } from "next-sanity";

export const ALL_VANS_QUERY = defineQuery(`*[_type == 'van'
 && defined(slug.current)]
| order(name desc){
  name,
  mainImage{
    asset->{url},
    alt
  },
  slug,
  price,
  desc,
  type
}`);

export const VAN_QUERY = defineQuery(`*[_type == 'van'
 && slug.current == $slug][0]{
  name,
  mainImage{
    asset->{url},
    alt
  },
  slug,
  price,
  desc,
  type
}`);
