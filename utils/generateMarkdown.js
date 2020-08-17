// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

![screenshot](${data.screenshot})

### Project Description
\`\`\`md
${data.description}
\`\`\`

### Install
\`\`\`md
${data.install}
\`\`\`

### Usage
\`\`\`md
${data.usage}
\`\`\`

### Language
\`\`\`md
${data.language}
\`\`\`

### Test
\`\`\`md
${data.test}
\`\`\`

## License
\`\`\`md
* ${data.license}
\`\`\`

## About
* Project Home Page: ${data.homePage}
* Project Github: ${data.github}
* Author: [\`${data.author}\`](https://github.com/${data.author})

## Questions
*  For more question please contact me: ${data.email}


`;
}

module.exports = generateMarkdown;
