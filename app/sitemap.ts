import { MetadataRoute } from 'next'
import { metadata } from './layout'
import concerts from './galerie/Gallery.json'

export default function sitemap() : MetadataRoute.Sitemap {
    const baseURL = metadata.metadataBase?.toString() || 'https://www.sevenheaven.band/'

    return [
        {
            url: baseURL,
            priority: 1
        },
        {
            url: baseURL + 'aktuelles',
            changeFrequency: 'weekly',
            priority: 1
        },
        {
            url: baseURL + 'wir',
            priority: 0.8
        },
        {
            url: baseURL + 'angebot/event',
            priority: 0.9
        },
        {
            url: baseURL + 'angebot/hochzeit',
            priority: 0.9
        },
        {
            url: baseURL + 'angebot/party',
            priority: 0.9
        },
        {
            url: baseURL + 'repertoire',
            changeFrequency: 'monthly',
            priority: 0.5
        },
        {
            url: baseURL + 'galerie',
            changeFrequency: 'monthly'
        },
        ...Object.entries(concerts).map((tag) => {
            return {
                url: baseURL + 'galerie/' + tag[0]
            }
        }),
        {
            url: baseURL + 'kontakt',
            priority: 0.8
        },
        {
            url: baseURL + 'impressum',
            priority: 0.1
        },
        {
            url: baseURL + 'datenschutz',
            priority: 0.1
        }
    ]
}