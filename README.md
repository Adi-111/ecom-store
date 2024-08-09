Here's a sample `README.md` file for your e-commerce store connected with a CMS:

---

# E-commerce Store

This project is an e-commerce store built with Next.js, TypeScript, and Tailwind CSS. The store is integrated with a Content Management System (CMS) to manage products, categories, and other related data.

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Features](#features)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Ensure you have the following tools installed on your machine:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [Yarn](https://yarnpkg.com/) (v1.22 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/ecommerce-store.git
   cd ecommerce-store
   ```

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Configure environment variables:**

   Create a `.env` file in the root directory and configure your CMS and any other necessary environment variables.
4. **Run the development server:**

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```plaintext
.
├── README.md
├── actions
│   ├── get-billboard.tsx
│   ├── get-categories.tsx
│   ├── get-category.tsx
│   ├── get-colors.tsx
│   ├── get-product.tsx
│   ├── get-products.tsx
│   └── get-sizes.tsx
├── app
│   ├── (routes)
│   │   ├── cart
│   │   │   ├── components
│   │   │   │   ├── cart-item-info.tsx
│   │   │   │   ├── cart-item.tsx
│   │   │   │   └── summary.tsx
│   │   │   └── page.tsx
│   │   ├── category
│   │   │   └── [categoryId]
│   │   │       ├── components
│   │   │       │   ├── filter.tsx
│   │   │       │   └── mobile-filters.tsx
│   │   │       ├── loading.tsx
│   │   │       └── page.tsx
│   │   ├── loading.tsx
│   │   ├── page.tsx
│   │   └── product
│   │       └── [productId]
│   │           ├── loading.tsx
│   │           └── page.tsx
│   ├── favicon.ico
│   ├── globals.css
│   └── layout.tsx
├── components
│   ├── footer.tsx
│   ├── gallery
│   │   ├── gallery-tab.tsx
│   │   └── index.tsx
│   ├── info.tsx
│   ├── main-nav.tsx
│   ├── navbar-actions.tsx
│   ├── navbar.tsx
│   ├── preview-modal.tsx
│   ├── product-list.tsx
│   ├── theme-switch.tsx
│   └── ui
│       ├── billboard.tsx
│       ├── button.tsx
│       ├── container.tsx
│       ├── currency.tsx
│       ├── icon-button.tsx
│       ├── modal.tsx
│       ├── no-results.tsx
│       ├── product-card.tsx
│       └── skeleton.tsx
├── components.json
├── hooks
│   ├── use-cart.tsx
│   └── use-preview-modal.ts
├── lib
│   └── utils.ts
├── next-env.d.ts
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── providers
│   ├── modal-provider.tsx
│   ├── theme-provider.tsx
│   └── toast-provider.tsx
├── public
│   ├── next.svg
│   └── vercel.svg
├── tailwind.config.ts
├── tsconfig.json
├── types.ts
└── yarn.lock
```

### Key Folders and Files

- **`app/`**: Contains the main application logic, including routes and components for various pages like product, category, and cart.
- **`components/`**: Reusable UI components like buttons, modals, and navigation.
- **`actions/`**: Server-side actions for fetching data such as products, categories, and more from the CMS.
- **`hooks/`**: Custom React hooks for managing state and behavior, like the cart and preview modal.
- **`providers/`**: Context providers for managing global state like themes and modals.
- **`lib/`**: Utility functions.
- **`public/`**: Static assets such as images and icons.
- **`styles/`**: Global CSS and Tailwind configuration.

## Available Scripts

- `yarn dev`: Runs the app in development mode.
- `yarn build`: Builds the app for production.
- `yarn start`: Runs the built app in production mode.
- `yarn lint`: Lints the codebase using ESLint.
- `yarn format`: Formats the codebase using Prettier.

## Features

- **Dynamic Routing**: Supports dynamic routes for products and categories.
- **CMS Integration**: Fetches data from a CMS for product management.
- **Responsive Design**: Fully responsive, providing a seamless experience across devices.
- **Theme Switching**: Users can toggle between light and dark themes.
- **Cart Functionality**: Add, remove, and update products in the cart.
- **Product Filtering**: Filter products by categories, sizes, colors, etc.

## Technologies

- **Next.js**: React framework for server-rendered applications.
- **TypeScript**: Strongly typed programming language that builds on JavaScript.
- **Tailwind CSS**: Utility-first CSS framework for custom designs.
- **CMS**: A Content Management System for managing products and categories.
- **React Context API**: For state management.
- **Yarn**: Package manager.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes.
4. Open a pull request, and describe the changes you made.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

This should provide a clear and concise overview of your project.