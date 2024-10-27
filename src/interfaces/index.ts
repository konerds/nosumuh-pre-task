export interface IPosts {
  name: string;
  posts: IPost[];
}

export interface IPost {
  id: number;
  title: string;
  author: string;
  nickname_author: string;
  content: string;
  created_at: string;
  views: number;
}

export interface ICtxDrawer {
  isOpened: boolean;
  toggle: () => void;
}

export interface ICtxVendor {
  name: string;
}

export interface ICtxFilter {
  createdAt: string;
  type: string;
  keyword: string;
  setCreatedAt: (createdAt: string) => void;
  setType: (type: string) => void;
  setKeyword: (keyword: string) => void;
}

export interface IResponseBoard {
  rMetadata: {
    columns: string[];
  };
  rBoard: IPosts;
}
