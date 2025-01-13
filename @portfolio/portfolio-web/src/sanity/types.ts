/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Experience = {
  _id: string;
  _type: "experience";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  company?: string;
  highlight?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
};

export type Permalink = {
  _id: string;
  _type: "permalink";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  url?: string;
  icon?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  order?: number;
};

export type Technology = {
  _id: string;
  _type: "technology";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  icon?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  background?: string;
};

export type Biography = {
  _id: string;
  _type: "biography";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  about?: string;
};

export type Project = {
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  background?: string;
  logo?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  order?: number;
  links?: Array<{
    title?: string;
    url?: string;
    _key: string;
  }>;
  technologies?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "technology";
  }>;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | Slug
  | Experience
  | Permalink
  | Technology
  | Biography
  | Project
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/components/permalinks.tsx
// Variable: permalinksQuery
// Query: *[_type == "permalink"] | order(order asc){  ...,  'icon': icon.asset->url}
export type PermalinksQueryResult = Array<{
  _id: string;
  _type: "permalink";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  url?: string;
  icon: string | null;
  order?: number;
}>;

// Source: ./src/app/about/page.tsx
// Variable: bioQuery
// Query: *[_type == "biography"] | order(_updatedAt desc)[0]
export type BioQueryResult = {
  _id: string;
  _type: "biography";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  about?: string;
} | null;

// Source: ./src/app/experience/page.tsx
// Variable: experienceQuery
// Query: *[_type == "experience"] | order(startDate desc)
export type ExperienceQueryResult = Array<{
  _id: string;
  _type: "experience";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  company?: string;
  highlight?: string;
  location?: string;
  startDate?: string;
  endDate?: string;
  current?: boolean;
}>;

// Source: ./src/app/projects/page.tsx
// Variable: projectQuery
// Query: *[_type == "project"] | order(order asc){  ...,  'logo': logo.asset->url,  technologies[]->{    ...,    'icon': {      'url': icon.asset->url    }  }}
export type ProjectQueryResult = Array<{
  _id: string;
  _type: "project";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  description?: string;
  background?: string;
  logo: string | null;
  order?: number;
  links?: Array<{
    title?: string;
    url?: string;
    _key: string;
  }>;
  technologies: Array<{
    _id: string;
    _type: "technology";
    _createdAt: string;
    _updatedAt: string;
    _rev: string;
    name?: string;
    icon: {
      url: string | null;
    };
    background?: string;
  }> | null;
}>;

// Source: ./src/app/tech/page.tsx
// Variable: techQuery
// Query: *[_type == "technology"] {  ...,  'icon': {    'url': icon.asset->url  }}
export type TechQueryResult = Array<{
  _id: string;
  _type: "technology";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  icon: {
    url: string | null;
  };
  background?: string;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"permalink\"] | order(order asc){\n  ...,\n  'icon': icon.asset->url\n}": PermalinksQueryResult;
    '*[_type == "biography"] | order(_updatedAt desc)[0]': BioQueryResult;
    '*[_type == "experience"] | order(startDate desc)': ExperienceQueryResult;
    "*[_type == \"project\"] | order(order asc){\n  ...,\n  'logo': logo.asset->url,\n  technologies[]->{\n    ...,\n    'icon': {\n      'url': icon.asset->url\n    }\n  }\n}": ProjectQueryResult;
    "*[_type == \"technology\"] {\n  ...,\n  'icon': {\n    'url': icon.asset->url\n  }\n}": TechQueryResult;
  }
}
