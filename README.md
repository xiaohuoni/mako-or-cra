# Product size difference

## mako build

dist 4.5MB

```
Building with mako for development...
dist/index.js                                  1.93 mB │ map:   2.33 mB
dist/src_pages_about_index_tsx-async.js        1.23 kB │ map:   0.27 kB
dist/src_pages_home_index_tsx-async.js        95.40 kB │ map: 110.44 kB
dist/src_pages_model_index_tsx-async.js        2.78 kB │ map:   0.89 kB
✓ Built in 140ms
Complete!
```

## cra build

build 1.4MB

```
Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  74.41 kB  build/static/js/main.75a24d48.js
  5.59 kB   build/static/js/225.3ab18cca.chunk.js
  433 B     build/static/js/965.a1cdd9b9.chunk.js
  342 B     build/static/js/544.c9254c6f.chunk.js
  227 B     build/static/js/196.85844253.chunk.js

The project was built assuming it is hosted at /.
You can control this with the homepage field in your package.json.
```

https://github.com/xiaohuoni/mako-or-cra

## vite build

vDist 251kb

```
> tsc -b && vite build

vite v5.3.1 building for production...
✓ 273 modules transformed.
vDist/index.html                  0.39 kB │ gzip:  0.27 kB
vDist/assets/index-BKZw79ZQ.js    0.12 kB │ gzip:  0.13 kB
vDist/assets/index-CtIYUYIA.js    0.32 kB │ gzip:  0.24 kB
vDist/assets/index-W5XoTJ19.js   16.58 kB │ gzip:  5.91 kB
vDist/assets/index-B_rWlKzO.js  233.99 kB │ gzip: 75.48 kB
✓ built in 762ms
```

# mako analyze

source-map-explorer 'dist/*.js'

```bash
> source-map-explorer 'dist/*.js'

dist/index.js
  Your source map refers to generated column 29 on line 30409, but the source only contains 28 column(s) on that line.
  Check that you are using the correct source map.
dist/src_pages_home_index_tsx-async.js
  Your source map refers to generated column 28 on line 765, but the source only contains 27 column(s) on that line.
  Check that you are using the correct source map.
dist/src_pages_about_index_tsx-async.js
  Unable to map 1006/1229 bytes (81.86%)
dist/src_pages_model_index_tsx-async.js
  Unable to map 2217/2781 bytes (79.72%)
```