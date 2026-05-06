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
    | 'divider'
    | 'grid'
    | 'section'
    | 'codeBlock'
    | 'preformatted';

  // Common properties
  text?: string;
  description?: string;

  // Code-related
  code?: string;
  language?: string;

  // List-related
  items?: string[];

  // Image/Video
  url?: string;
  alt?: string;

  // Table-related
  headers?: string[];
  rows?: string[][];

  // Quote-related
  author?: string;

  // ========== NEW: codeBlock ==========
  codeText?: string;
  codeLanguage?: string;
  highlightLines?: number[]; 

  // ========== NEW: preformatted ==========
  rawText?: string;
  fontFamily?: 'monospace' | 'serif' | 'sans-serif';
  backgroundColor?: string;
  fontSize?: 'small' | 'medium' | 'large';

  // ========== NEW: grid ==========
  columns?: number; 
  gridItems?: GridItem[];

  // ========== NEW: section ==========
  sectionTitle?: string;
  subsections?: ContentBlock[];
  collapsible?: boolean;
  isExpanded?: boolean;
}

// ========== Grid Item Interface ==========
export interface GridItem {
  id?: string;
  title: string;
  icon?: string; 
  description: string;
  detail?: string;
  color?: string; 
  metadata?: Record<string, string>;
  link?: string;
  imageUrl?: string;
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