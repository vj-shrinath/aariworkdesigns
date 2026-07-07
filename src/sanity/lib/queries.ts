import { groq } from 'next-sanity';

export const POSTS_QUERY = groq`*[_type == "post" && defined(slug.current)] | order(coalesce(publishedAt, _createdAt) desc) {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  excerpt,
  author->{name, image, bio},
  categories[]->{title, slug},
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
}`;


export const POST_QUERY = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  mainImage,
  publishedAt,
  _createdAt,
  _updatedAt,
  body[]{
    ...,
    _type == "image" => {
      ...,
      asset->
    }
  },
  author->{name, image, bio},
  categories[]->{title, slug},
  seo,
  ai,
  geo,
  relatedPosts[]->{_id, title, slug, mainImage, categories[]->{title}, publishedAt},
  "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180)
}`;


export const GALLERY_QUERY = groq`(
  *[_type == "post" && defined(slug.current)] {
    "publishedAt": publishedAt,
    "_createdAt": _createdAt,
    "mainImageAsset": mainImage.asset._ref,
    "postTitle": title,
    "postSlug": slug,
    "postCategories": categories[]->{title, slug},
    "standaloneImages": body[_type == "image" && isDesignTrace == true] {
      "_id": _key,
      "mainImage": {
        "asset": asset,
        "alt": alt
      },
      "alt": alt,
      "caption": caption,
      "assetRef": asset._ref
    },
    "galleryImages": body[_type == "imageGallery"] {
      "images": images[isDesignTrace == true || ^.allImagesAreTrace == true] {
        "_id": _key,
        "mainImage": {
          "asset": asset,
          "alt": alt
        },
        "alt": alt,
        "caption": caption,
        "assetRef": asset._ref
      }
    }.images[]
  } {
    "mainImageAsset": mainImageAsset,
    "images": coalesce(standaloneImages[] {
      "_id": _id,
      "title": ^.postTitle,
      "slug": ^.postSlug,
      "mainImage": mainImage,
      "alt": alt,
      "caption": caption,
      "date": coalesce(^.publishedAt, ^._createdAt),
      "assetRef": assetRef,
      "categories": ^.postCategories
    }, []) + coalesce(galleryImages[] {
      "_id": _id,
      "title": ^.postTitle,
      "slug": ^.postSlug,
      "mainImage": mainImage,
      "alt": alt,
      "caption": caption,
      "date": coalesce(^.publishedAt, ^._createdAt),
      "assetRef": assetRef,
      "categories": ^.postCategories
    }, [])
  }.images[] [assetRef != ^.mainImageAsset] {
    "_id": _id,
    "title": title,
    "slug": slug,
    "mainImage": mainImage,
    "type": "article",
    "date": date,
    "alt": alt,
    "caption": caption,
    "categories": categories
  }
) + (
  *[_type == "galleryDesign"] {
    "_id": _id,
    "title": title,
    "slug": null,
    "mainImage": mainImage,
    "type": "standalone",
    "date": coalesce(publishedAt, _createdAt),
    "alt": title,
    "caption": description,
    "categories": categories[]->{title, slug}
  }
) + (
  *[_type == "galleryUploadGroup"] {
    "groupTitle": titlePrefix,
    "groupCategory": category->{title, slug},
    "groupDescription": description,
    "groupDate": coalesce(publishedAt, _createdAt),
    "groupImages": images[] {
      "_id": _key,
      "mainImage": {
        "asset": asset,
        "alt": alt
      },
      "alt": alt,
      "caption": caption
    }
  } {
    "images": groupImages[] {
      "_id": _id,
      "title": select(
        defined(alt) && alt != "" => ^.groupTitle + " - " + alt,
        defined(caption) && caption != "" => ^.groupTitle + " - " + caption,
        ^.groupTitle
      ),
      "slug": null,
      "mainImage": mainImage,
      "type": "standalone",
      "date": ^.groupDate,
      "alt": coalesce(alt, ^.groupTitle),
      "caption": coalesce(caption, ^.groupDescription),
      "categories": select(
        defined(^.groupCategory) => [^.groupCategory],
        []
      )
    }
  }.images[]
) + (
  *[_type == "userSubmission" && approvedForGallery == true && !defined(*[_type == "galleryDesign" && _id == "galleryDesign-" + ^._id][0])] {
    "_id": _id,
    "title": title,
    "slug": null,
    "mainImage": image,
    "type": "standalone",
    "date": coalesce(uploadDate, _createdAt),
    "alt": title,
    "caption": "User Uploaded Design",
    "categories": []
  }
) | order(title asc)`;



