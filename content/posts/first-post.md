---
title: "First Post"
excerpt: "A filesystem source will also require a transformer.."
slug: "first-post"
tags: ["wow", "romance"]
coverImages: "./images/1.jpg"
---

## First Post

A filesystem source will also require a transformer in order to parse the files. The example above is looking for a set of Markdown files.

so in order to let Gridsome understand the content of the files, you must install @gridsome/transformer-remark as a dev dependency in your 

project. Gridsome will automatically transform the files for you as long as a transformer that supports your files is found in your package.json.