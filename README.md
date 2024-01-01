# BLOGEZZY - Full Stack Dynamic Blogging Platform

## Description

BLOGEZZY is a comprehensive blogging platform designed for writers and readers alike. It provides a seamless experience for creating, editing, and publishing blogs, while also offering a dynamic platform for readers to explore and engage with diverse content. Built with a modern tech stack, BLOGEZZY emphasizes performance, user experience, and a clean, intuitive design.

## Screenshots

## Home

### Introduction

![Intro](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/5658480b-e265-427c-9988-a0cb2f5ccbd4)

### Why BLOGEZZY

![Why components](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/f6fc268b-1e6c-4516-93b1-ad77c149e3c3)

### Community

![Community](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/a778205b-0def-4d7f-b5ca-51ef4f4451dc)

**BLOGEZZY is responsive**

## About

![About](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/b1725417-26cf-4a0f-83a4-54fe09e8e1e5)

## Login and Signin

![Login](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/e05888d9-fe10-4af1-9bb2-6409d357ff8f)

![Signin](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/fe2017c6-74c3-4075-909d-65a6042e570e)

## Dashboard

![Dashboard](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/eb5a93ef-31b7-4db8-aea2-5bc339525d78)

![Screenshot from 2024-01-01 12-12-14](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/52d30f3d-f384-4d65-ade9-e2d7b1bd3a17)

### Read some popular blogs

![Screenshot from 2024-01-01 12-12-55](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/35a783be-b4e3-4779-9077-181d2b6e4f74)

### Follow your favourite blogger

![Screenshot from 2024-01-01 12-32-08](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/4f16f4cd-a95c-429a-a610-31c6e9eb10c6)

### My Blogs

**My Collection**

![Screenshot from 2024-01-01 12-14-51](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/4e2c7293-87ab-4a56-a096-c5f8a2c86965)

**Edit, Review, Post Online/Remove, Delete Blog**

![Screenshot from 2024-01-01 13-00-54](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/8032305b-f9d7-453b-aad8-6fc1d3aaa73d)

**Review how they appear**

![Screenshot from 2024-01-01 12-31-03](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/ef72c17b-a86d-43e2-b616-3201d531d431)

## Edit Profile

### Upload your profile image and update your profile

![Screenshot from 2024-01-01 12-15-08](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/c9db8f72-8c07-46a9-b8d6-5411baf1d943)

**Get pop ups on success**

![Screenshot from 2024-01-01 12-11-04](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/10cbe807-620d-4a23-baac-a37e8cc31859)

### Change password

![Screenshot from 2024-01-01 12-15-14](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/b60246d6-7859-4782-877d-da214819ae6c)

## Write amazing blogs with integrated text editor from Tinymce

![Screenshot from 2024-01-01 12-28-47](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/5c54a716-70fd-4c06-946c-01d978bcac76)

## Report an issue

![Screenshot from 2024-01-01 12-30-14](https://github.com/shrey7ansh07/project-blog-frontend/assets/120119737/7c08d5ea-105d-405c-a4b4-161f5f353e61)

## Tech Stacks and Libraries

- **React**: A JavaScript library renowned for building interactive user interfaces. It supports the creation of reusable UI components, enhancing the efficiency of development. This project extensively utilizes various React hooks such as useState, useEffect, useCallback, and useRef. Additionally, it integrates Redux Toolkit with React through React Redux for efficient state management.

- **Vite**: A modern build tool that offers a faster and more streamlined development experience for contemporary web projects. It facilitates efficient package bundling and initiates projects with minimal initial files, thereby accelerating project setup and management. Vite also aids in proxying URLs to circumvent CORS issues.

- **Tailwind CSS**: A utility-first CSS framework that enables rapid construction of custom designs. Tailwind CSS is extensively used in this project, forming the backbone of nearly **95%** of the website's design. It provides a suite of utility classes that facilitate the creation of responsive designs.

- **Redux Toolkit**: The official, opinionated, batteries-included toolset for efficient Redux development. It plays a crucial role in preventing prop drilling, and aids in state management by providing separate slices for users, blogs, and follow functionalities.

- **Redux Persist**: This library is used to persist the Redux store in the local storage of the browser. It is particularly useful for storing and updating crucial data, such as blog posts, which remain persistent even if the user closes the browser or refreshes the page. Not all data is stored, but data that takes time to retrieve from the backend, as well as unsaved or ongoing blogs, are preserved.

- **TinyMCE React**: The official TinyMCE React integration project, which facilitates the creation, editing, and viewing of rich text content. It offers a comprehensive suite of rich text editor functionalities, and its ease of integration and configurability make it a versatile tool for user requirements. It also enables users to preview their posts effectively.

- **Axios**: A promise-based HTTP client for both the browser and Node.js. It is utilized for making HTTP requests to the backend server, supporting all CRUD operations. Axios was useful for installing an interceptor that meticulously tracks the requests being made. It also checks responses for expired user access tokens and, if necessary, forwards the request back to refresh the token and reinitiate the request.

- **React Router Dom**: The standard routing library for React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

- **React Hook Form**: A performant, flexible, and extensible form solution with easy-to-use validation. It provides a 'register' function that integrates data from fields and passes them as an object when the submit event is triggered. It effectively manages empty fields by customizing them to be required, and keeps track of field values using the 'watch' attribute, thereby eliminating the need for manual field value updates.

- **React Icons**: This library leverages ES6 imports, allowing you to include only the icons that your project requires. It integrates seamlessly within pages and components, and its classes function just like standard React components.s

- **React Dropdown Select**: This is a highly customizable dropdown library for React. It's used in this project to create dropdown menus for various features, such as selecting categories or tags. It allows for single or multiple selections, includes a search function, and is easy to integrate and use, providing a seamless user experience.

- **SweetAlert2**: A beautiful, responsive, customizable, and accessible (WAI-ARIA) replacement for JavaScript's popup boxes. In this project, it's used to display alerts and confirmations to the user, enhancing the overall user interaction with the application.

**Please note: This project is not currently open for contributions.**

## License

This project is licensed under the MIT License.

## Contact

For any questions or discussions about the project, please contact me at <shreyguptaji007@gmail.com>.
