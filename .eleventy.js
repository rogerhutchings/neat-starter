const yaml = require('js-yaml')
const inspect = require('util').inspect

module.exports = function (eleventyConfig) {
  // Add a debug filter - via https://github.com/11ty/eleventy/issues/1526#issuecomment-731855231
  // e.g. in template, use this: `{{ collections.all[0].template.templateData.globalData | consoleLog | safe }}`
  eleventyConfig.addFilter(
    'consoleLog',
    (content) => `<script>console.info(${inspect(content)})</script>`
  )

  // Add YAML support
  eleventyConfig.addDataExtension('yaml', (contents) => yaml.safeLoad(contents))

  // Copy static files to /_site
  eleventyConfig.addPassthroughCopy({
    './src/admin/config.yml': './admin/config.yml',
    './node_modules/alpinejs/dist/alpine.js': './static/js/alpine.js',
  })

  return {
    dir: {
      input: 'src',
      layouts: '_layouts',
    },
  }
}
