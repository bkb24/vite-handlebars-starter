# A simple vite handlebars set up for static sites

## Installation

```bash
npm install
```

## Usage

Start the vite dev server

```bash
npm run dev
```

Build the project

```bash
npm run build
```

## Structure and files
    .
    ├── assets
    |   ├── fonts
    |   ├── images
    |   ├── js
    |   ├── scss
    |   └── ...
    ├── data
    |   ├── context.json
    |   └── ...
    ├── handlebars
    |   ├── helpers.js
    |   └── ...
    ├── partials
    |   ├── header.hbs
    |   └── ...
    ├── index.html
    ├── package.json
    ├── vite.config.js

### **assets**
The assets directory has the js, scss, images, fonts etc.

### **data**
Here there is a json which data is passed as *context* for handlebars in vite.config.js. This is the global data available for html files and hbs partials

*in vite.config.js*

```javascript
plugins: [
    handlebars({
        context: {
            ...data
        },

        helpers,

        partialDirectory: resolve(__dirname, 'partials')
    }),
    liveReload(resolve(__dirname, 'partials/**/*'), { alwaysReload: true })
]
```

### ### **data**
Handlebars custom helpers, add your own in *helpers.js* as a property of the helpers object

### **partials**
Handlebars partials. To include write the name of the partial. Example for including partials/header.nbs (in index.html)

```handlebars
{{> header }}
```

Example with partials/test-test.nbs (in 404.html)

```handlebars
{{> test-test }}
```

### **index.html**
This is the main entry file. Add js like:

```html
<script type="module" src="./assets/js/index.js"></script>
```

To compile multiple pages, add them to vite config under build.input

*in vite.config.js*

```javascript
build: {
    cssCodeSplit: false,
    rollupOptions: {
        input: {
            root: '',
            main: resolve(__dirname, 'index.html'),
            notFound: resolve(__dirname, '404.html')
        },
        output: {
            manualChunks: undefined
        }
    }
},
```

### **package.json**
Make sure vite and the other dependencies are uo to date

### **vite.config.json**
Bundle configuration. More information: [here](https://vitejs.dev/config/)
