export function getStrapiMedia(url?: string) {
	if (!url) return null;
	const base = import.meta.env.VITE_STRAPI_BASE_URL ?? "http://127.0.0.1:1337";
	return url.startsWith("http") ? url : `${base}${url}`;
}
