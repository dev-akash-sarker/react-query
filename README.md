# React Product Dashboard

A React-based product dashboard application demonstrating **React Router v6**, **React Query**, and basic **CRUD operations** with a dummy API. This project fetches product data from [DummyJSON](https://dummyjson.com/products), displays it, and allows updating individual product titles using **mutations**.

---

## Table of Contents

- [Features](#features)  
- [Technologies](#technologies)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [API Endpoints](#api-endpoints)  
- [React Query Notes](#react-query-notes)  
- [Future Improvements](#future-improvements)  

---

## Features

- Fetch all products and display them in a responsive grid.  
- View detailed product information on a separate page.  
- Update a product's title via a PUT request using **React Query mutations**.  
- Loading, success, and error states handled for all API interactions.  
- Navigation between pages using **React Router v6**.  
- Developer-friendly tooling with **React Query Devtools**.  

---

## Technologies

- **React 18** – UI library  
- **React Router v6** – Client-side routing  
- **React Query (@tanstack/react-query)** – Data fetching, caching, and mutations  
- **Tailwind CSS** – Styling  
- **DummyJSON API** – Mock product data for testing  

---

## Project Structure

src/
│
├── App.jsx # Root component with navigation
├── Products.jsx # Fetches & lists all products
├── Product.jsx # Fetches single product & allows updating title
├── main.jsx # Entry point, sets up Router & QueryClientProvider
└── index.css # Tailwind CSS styles


---

## Getting Started

### Prerequisites

- Node.js v18+  
- npm or yarn  

### Installation

```bash
# Clone the repo
git clone https://github.com/dev-akash-sarker/react-query.git
cd react-product-dashboard

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
