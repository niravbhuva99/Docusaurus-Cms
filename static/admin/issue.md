## Description

When attempting to write MDX syntax in MD files using the Netlify editor, an additional `&#xFEFF;` character is added. This causes the MDX syntax not to render properly in the preview panel of the CMS.

## Steps to Reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the development server using `npm start`.
5. In a different terminal, run `npx netlify-cms-proxy-server`.
6. Open your browser and go to [http://localhost:3000/admin](http://localhost:3000/admin).
7. Go to any MD file in the CMS editor.
8. Write MDX syntax in the MDX file.
9. Save the changes and observe the addition of `&#xFEFF;` in the browser's developer tools elements.

## Expected Behavior

MDX syntax written in MD files should render properly in the preview panel.

## Observation

-   If you write any MDX syntax in the Netlify editor, it adds a `&#xFEFF;` character. Checking in the browser's developer tools elements reveals this addition.
-   However, if you copy and paste MDX syntax from an MDX file, it renders perfectly in the preview panel without any issues.
