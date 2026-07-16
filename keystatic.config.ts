import { config, singleton, fields } from '@keystatic/core';

// GitHub mode: edits from the live /keystatic panel commit to this repo,
// which triggers a Cloudflare Pages rebuild. Update `repo` if the owner/name
// differs. (Swap back to { kind: 'local' } to edit offline on disk.)
export default config({
  storage: {
    kind: 'github',
    repo: 'rt100m/sparky-au',
  },
  ui: {
    brand: { name: 'Voltcraft — Site Editor' },
  },
  singletons: {
    business: singleton({
      label: 'Business details & homepage SEO',
      path: 'src/data/business',
      format: { data: 'json' },
      schema: {
        name: fields.text({ label: 'Business name' }),
        legalName: fields.text({ label: 'Legal name' }),
        tagline: fields.text({ label: 'Tagline' }),
        phone: fields.text({ label: 'Phone (display)' }),
        phoneHref: fields.text({
          label: 'Phone link',
          description: 'e.g. tel:+61400000000',
        }),
        email: fields.text({ label: 'Email' }),
        licence: fields.text({ label: 'Licence number' }),
        abn: fields.text({ label: 'ABN' }),
        base: fields.text({ label: 'Base suburb' }),
        lat: fields.number({ label: 'Latitude' }),
        lng: fields.number({ label: 'Longitude' }),
        rating: fields.number({ label: 'Google rating', validation: { min: 0, max: 5 } }),
        reviewCount: fields.integer({ label: 'Review count' }),
        yearsTrading: fields.integer({ label: 'Years trading' }),
        url: fields.url({ label: 'Live site URL' }),
        seoTitle: fields.text({
          label: 'Homepage title tag (SEO)',
          multiline: true,
        }),
        seoDescription: fields.text({
          label: 'Homepage meta description (SEO)',
          multiline: true,
        }),
      },
    }),
  },
});
