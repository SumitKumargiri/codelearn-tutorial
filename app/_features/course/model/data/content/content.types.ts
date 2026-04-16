export interface ContentBlock {
  type:
    | 'paragraph'
    | 'heading'
    | 'subheading'
    | 'code'
    | 'list'
    | 'note'
    | 'example'
    | 'image'
    | 'video'
    | 'table'
    | 'quote'
    | 'divider';
  text?: string;
  code?: string;
  language?: string;
  items?: string[];
  description?: string;

  url?: string;
  alt?: string;

  headers?: string[];
  rows?: string[][];

  author?: string;
}

export interface Section {
  title: string;
  description?: string;
  subsections?: string[];
  content: ContentBlock[];
}

export interface DocumentContent {
  title: string;
  description: string;
  sections: Section[];
}

export type DocumentRecord = Record<string, DocumentContent>;