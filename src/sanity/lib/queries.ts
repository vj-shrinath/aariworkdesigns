import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  author->{name, image},
  categories[]->{title}
}`;


export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  },
  author->{name, image, bio},
  categories[]->{title}
}`;


export const GALLERY_QUERY = groq`*[_type == "post" && defined(slug.current)] {
  "images": body[_type == "image" && asset._ref != ^.mainImage.asset._ref] {
    "_id": _key,
    "title": ^.title,
    "slug": ^.slug,
    "mainImage": {
      "asset": asset,
      "alt": alt
    }
  }
}.images[] [defined(mainImage)]`;



