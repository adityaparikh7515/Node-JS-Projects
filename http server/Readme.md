
# Simple Node.js HTTP Server

A basic HTTP server built with Node.js that demonstrates routing for different URLs and returning HTML responses.

## Features

* Home route (`/`)
* About route (`/about`)
* Contact route (`/contact`)
* Custom 404 Page Not Found response

## Prerequisites

Make sure Node.js is installed on your system.

Check installation:

```bash
node -v
npm -v
```

## Project Structure

```text
project-folder/
│
├── server.js
└── README.md
```

## Code Overview

The server listens on port **5000** and handles the following routes:

| Route           | Description        |
| --------------- | ------------------ |
| `/`             | Welcome page       |
| `/about`        | About Us page      |
| `/contact`      | Contact page       |
| Any other route | 404 Page Not Found |

## Running the Server

1. Save the code in a file named `server.js`.

2. Start the server:

```bash
node server.js
```

3. Open your browser and visit:

```text
http://localhost:5000/
```

## Available Endpoints

### Home

```text
GET /
```

Response:

```html
<h1>Welcome to http server.!!</h1>
```

### About

```text
GET /about
```

Response:

```html
<h1>About us</h1>
```

### Contact

```text
GET /contact
```

Response:

```html
<h1>We are with you anytime 24/7 always..</h1>
```

### Invalid Route

Example:

```text
GET /unknown
```

Response:

```html
<h1>Page not found/.!</h1>
```

## Note

There is a small issue in the current code:

```javascript
else if(req.url=="contact")
```

It should be:

```javascript
else if(req.url=="/contact")
```

Without the leading `/`, the `/contact` route will return the 404 page.

## Output

When the server starts:

```bash
server is running on http://localhost:5000
```

## License

This project is free to use for learning and educational purposes.
