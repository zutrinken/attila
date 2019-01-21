module.exports = function(api) {
  api.cache(false);

  return {
    presets: [
      ['@babel/preset-env', { useBuiltIns: 'usage' }]
    ],
    plugins: [
      [
        'prismjs',
        {
          languages: [
            'apacheconf',
            'bash',
            'c',
            'clike',
            'cpp',
            'csharp',
            'css',
            'diff',
            'handlebars',
            'http',
            'ini',
            'java',
            'javascript',
            'json',
            'jsx',
            'less',
            'makefile',
            'markdown',
            'markup',
            'nginx',
            'objectivec',
            'php',
            'perl',
            'properties',
            'python',
            'ruby',
            'sass',
            'scss',
            'sql'
          ],
          plugins: ['line-numbers']
        }
      ]
    ]
  }
};
