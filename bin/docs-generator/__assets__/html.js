export const getHtmlByLanguage = ({
    language,
    pageTitle,
    content
}) => `<!DOCTYPE html>
  <html lang="${language}">
  <head>
  <meta charset="UTF-8" />
  <title>${pageTitle}</title>
  <link rel="stylesheet" href="./styles/index.css">
  </head>
  <body>
    <div class="wrapper">
      <div class="content">${content}</div>
    </div>
  </body>
  </html>`