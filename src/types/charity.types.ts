export type NonprofitTagType = {
  causeCategory: string;
  id: string;
  tagImageCloudinaryId: string;
  tagImageUrl: string;
  tagName: string;
  tagUrl: string;
  title: string;
};

export type CharityType = {
  description: string;
  ein: string;
  name: string;
  profileUrl: string;
  logoUrl: string;
  coverImageUrl: string;
  logoCloudinaryId: string;
  slug: string;
  location: string;
  websiteUrl: string;
  tags: [];
};
