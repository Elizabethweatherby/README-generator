// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'NONE') {
    return '';
  }
  const licenseBadges = {
    'MIT': '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)',
  };
  if (licenseBadges[license]) {
    return licenseBadges[license];
  }

  return '';
}


// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// if (!license) {
//   return '';
// }
// const licenseLinks = {
//   'MIT': 'https://opensource.org/licenses/MIT',
// };
// if (licenseLinks[license]) {
//   return `For more details, view the [${license} License](${licenseLinks[license]}).`;
// }
// return '';

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {
//   if (!license) {
//     return '';
//   }

//   const licenseBadge = renderLicenseBadge(license);
//   const licenseLink = renderLicenseLink(license);
//   return `
// ## License
// ${licenseBadge}

// ${licenseLink}
// `;
// }

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   const licenseSection = renderLicenseSection(data.license);

//   return `# ${data.title}

// ${licenseSection}
// `;
// }

module.exports = { renderLicenseBadge };
