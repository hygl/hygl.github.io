import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			title: post.id.substring(11,post.id.lastIndexOf('.')).replaceAll("-"," "),
			pubDate: new Date(post.id.substring(0,10)).toString(),
			link: `/${post.id}/`,
		})),
	});
}
