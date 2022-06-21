# Microfrontend studies

This repo was made to concentrate my MF studies.
There are two main projects, js-only and the main project.

## :sauropod: JS Only

It's microfrontend application with only Javascript.
Webpack was crucial to develop this.
It was the first step to understand the whole architecture.

### Installation

You need to install the dependencies in each package (container, cart and products)

```bash
  npm install
```

### How to run

You can run each separately or run products, cart and then container.

```bash
  npm run start
```

## :sparkles: Main Project

This is a more complex application.
It's a product with a Marketing page, Auth section and Dashboard.
The idea is to scale the development.
Marketing and Auth packages are developed with React and the Dashboard with Vue.
