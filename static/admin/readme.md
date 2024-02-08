# Issue: Error when importing Docusaurus Swizzle component into Netlify CMS

## Description

I am encountering an error when attempting to import a Docusaurus Swizzle component into Netlify CMS. For each Docusaurus client API component used within the Swizzle component, Webpack throws an error.

### Swizzle Component

![Screenshot of Swizzle component](<Screenshot 2024-02-08 at 11.01.57-1.png>)

### Error Example

When including a Docusaurus component such as `Link` within the Swizzle component, Webpack throws the following error:

![Webpack error](<Screenshot 2024-02-08 at 11.00.00-1.png>)

### Dependencies Structure

Here is the structure of the `node_modules` directory for Docusaurus and its dependencies:

![Node modules structure](<Screenshot 2024-02-08 at 11.06.26-1.png>)
