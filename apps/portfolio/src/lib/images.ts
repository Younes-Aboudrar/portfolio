const images = import.meta.glob('/static/images/**/*', { eager: true, query: '?url', import: 'default' });
export function hasImage(path: string): boolean { return `/static/${path.replace(/^\//, '')}` in images; }
