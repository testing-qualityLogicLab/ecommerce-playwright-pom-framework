# ecommerce-playwright-pom-framework

A scalable **end-to-end automated test framework** for e-commerce applications built with **Playwright** (JavaScript) using the **Page Object Model (POM)** design pattern.

This framework provides a clean structure to write reusable, maintainable UI tests for an e-commerce application, helping teams validate key functionality like user authentication, product search, shopping cart workflows, and more.

---

## 🧠 Key Features

✔️ Page Object Model (POM) design for maintainability and reusability  
✔️ End-to-end tests for core e-commerce flows  
✔️ Playwright test runner for cross-browser testing (Chromium, Firefox, WebKit)  
✔️ Utils for shared functions and helpers  
✔️ Configurable with environment variables  
✔️ Ready for CI/CD integration (e.g., GitHub Actions)

---

## 📁 Project Structure

```

.github/
├── workflows/
pages/
├── HomePage.js
├── ProductPage.js
├── CartPage.js
tests/
├── ui/
│   ├── auth.spec.js
│   ├── shopping.spec.js
utils/
├── helpers.js
playwright.config.js
package.json

````

> Pages contain reusable classes representing UI screens.  
> Tests import and use those classes to express test flows clearly.

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v18+ recommended)
- npm (or yarn)
- Supported browsers via Playwright

### Installation

```bash
git clone https://github.com/testing-qualityLogicLab/ecommerce-playwright-pom-framework.git
cd ecommerce-playwright-pom-framework
npm install
npx playwright install --with-deps
````

---

## 🧪 Running Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode (see browser UI)

```bash
npx playwright test --headed
```

### Run tests in a specific browser

```bash
npx playwright test --project=firefox
```

### Run a specific test file

```bash
npx playwright test tests/ui/auth.spec.js
```

---

## 🧩 Page Object Model (POM)

This framework uses the POM structure to keep selectors and actions out of test files.
Each **page class** encapsulates the UI interactions for a page (locators + actions), while test files focus on scenarios and assertions. This separation improves readability and maintainability.([Playwright][1])

---

## 📌 Best Practices

We recommend:

* Using **Playwright locators** like `getByRole()` and `getByText()` for stable selectors.([Playwright][2])
* Keeping UI interaction logic inside page objects and assertions in tests.([NashTech Blog][3])
* Isolating tests so each can run independently.([BrowserStack][4])

---

## 📦 Dependencies

* Playwright test runner
* JavaScript/Node ecosystem

Install dependencies via:

```bash
npm install
```

---

## 🧠 Contributing

We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/xyz`)
3. Commit your changes (`git commit -m "Description"`)
4. Push to your branch (`git push origin feature/xyz`)
5. Open a Pull Request

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## 👤 Author

**qualityLogicLab — Test Automation Team**
