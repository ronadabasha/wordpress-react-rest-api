# WordPress, React, REST API Fullstack App

## Project Overview

A **full-stack project** with **React** frontend and **WordPress** backend. The frontend uses **WordPress REST API** endpoints, including **ACF** fields, with **JWT Authentication** for secure requests.

---

## Features

- React frontend with responsive UI
- WordPress backend with custom themes and plugins
- **ACF integration** for custom fields (text, images, repeaters)
- **JWT Authentication** for secure REST API access

---

## Folder Structure

```
wordpress-react-rest-api/
├─ frontend/              # React frontend (Netlify deployable)
│  ├─ src/
│  ├─ public/
│  ├─ package.json
│  └─ ...
└─ wp-content/            # WordPress custom code
   ├─ themes/
   │  └─ your-theme/
   └─ plugins/
      └─ your-plugins/
```

---

## Setup Instructions

### 1. Backend (WordPress)

1. Install WordPress locally or on your server.
2. Copy `wp-content/themes/your-theme` and `wp-content/plugins/your-plugins` to your WordPress installation.
3. Install required plugins:
   - **Advanced Custom Fields (ACF)**
   - **ACF to REST API**
   - **JWT Authentication for WP REST API**
4. Configure JWT in `wp-config.php` and `.htaccess`, this part is docoumented om the **JWT plugin** if you click on **View Details**

```php
define('JWT_AUTH_SECRET_KEY', 'your-strong-secret-key');
define('JWT_AUTH_CORS_ENABLE', true);
```

...

5. Create pages/posts with ACF fields (text, images, etc.).

---

### 2. Frontend (React)

1. Navigate to the `frontend` folder:

2. Install dependencies:

```bash
npm install
```

3. Set API URL in `package.json`:
   Example: `"proxy": "http://your-wordpress-site.com/"`, or
   `"proxy": "http://localhost:port/"`

4. Start development server:

```bash
npm start
```

5. Build for production:

```bash
npm run build
```
