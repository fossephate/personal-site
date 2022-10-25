// const express = require('express')
// const { renderPage } = require('vite-plugin-ssr')
// const vite = require('vite')
// const assert = require('assert')
import express from "express";
import { renderPage } from "vite-plugin-ssr"
import * as vite from 'vite'
import assert from "assert"

import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isProduction = process.env.NODE_ENV === 'production'
const root = `${__dirname}/..`

startServer()

function partRegex(parts, ...variables) {
  assert(parts.length === variables.length + 1)
  let str = ''
  for (let i = 0; i < variables.length; i++) {
    const variable = variables[i]
    assert(variable.constructor === RegExp)
    str += escapeRegex(parts[i]) + slice(variable.toString(), 1, -1)
  }
  str += escapeRegex(parts[parts.length - 1])
  return new RegExp(str)
}

function escapeRegex(str) {
  return str.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
}

function slice(thing, from, to) {
  if (typeof thing === 'string') {
    return sliceArray(thing.split(''), from, to).join('')
  } else {
    return sliceArray(thing, from, to)
  }
}

function sliceArray(list, from, to) {
  const listSlice = []

  let begin = from >= 0 ? from : list.length + from
  assert(begin >= 0 && begin < list.length)
  const end = to >= 0 ? to : list.length + to
  assert(end >= 0 && end < list.length)

  while (begin !== end) {
    listSlice.push(list[begin])
    begin++
    if (begin === list.length) {
      begin = 0
    }
  }

  return listSlice
}

async function startServer() {
  const app = express()

  let viteDevServer
  if (isProduction) {
    app.use(express.static(`${root}/dist/client`))
  } else {
    viteDevServer = await vite.createServer({
      root,
      server: { middlewareMode: true }
    })
    app.use(viteDevServer.middlewares)
  }

  app.get('*', async (req, res, next) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext
    if (!httpResponse) return next()

    // We can use `pageContext._getPageAssets()` to HTTP/2 Server Push or `103` Early Hint
    // our page assets.
    // const pageAssets = await pageContext._getPageAssets()
    // console.log('Page Assets:', pageAssets)
    // assert_pageAssets(pageAssets)

    const { body, statusCode, contentType } = httpResponse
    res.status(statusCode).type(contentType).send(body)
  })

  const port = process.env.PORT || 3000
  app.listen(port)
  console.log(`Server running at http://localhost:${port}`)
}

function assert_pageAssets(pageAssets) {
  assert(pageAssets[0].assetType)
  assert(pageAssets[0].mediaType)

  if (!isProduction) {
    assert(
      pageAssets.find(
        (a) =>
          a.src === '/pages/index.css?direct' &&
          a.assetType === 'style' &&
          a.mediaType === 'text/css' &&
          a.preloadType === 'style'
      )
    )
    assert(
      pageAssets.find(
        (a) =>
          a.src.startsWith('/@fs/') &&
          a.src.endsWith('/vite-plugin-ssr/dist/esm/client/entry.js') &&
          a.assetType === 'script' &&
          a.mediaType === 'text/javascript' &&
          a.preloadType === null
      )
    )
  } else {
    const hashRegex = /[a-z0-9]+/
    assert(
      pageAssets.find(
        (a) =>
          partRegex`/assets/entry-server-routing.${/[a-z0-9]+/}.js`.test(a.src) &&
          a.assetType === 'script' &&
          a.mediaType === 'text/javascript' &&
          a.preloadType === null
      )
    )
    assert(
      pageAssets.find(
        (a) =>
          partRegex`/assets/entry-server-routing.${/[a-z0-9]+/}.js`.test(a.src) &&
          a.assetType === 'preload' &&
          a.mediaType === 'text/javascript' &&
          a.preloadType === 'script'
      )
    )
    assert(
      pageAssets.find(
        (a) =>
          partRegex`/assets/chunk-${/[a-z0-9]+/}.js`.test(a.src) &&
          a.assetType === 'preload' &&
          a.mediaType === 'text/javascript' &&
          a.preloadType === 'script'
      )
    )
    assert(
      pageAssets.find(
        (a) =>
          partRegex`/assets/pages/index.page.${hashRegex}.js`.test(a.src) &&
          a.assetType === 'preload' &&
          a.mediaType === 'text/javascript' &&
          a.preloadType === 'script'
      )
    )
    assert(
      pageAssets.find(
        (a) =>
          // Vite 2
          (partRegex`/assets/pages/index.page.${hashRegex}.css`.test(a.src) ||
            // Vite 3
            partRegex`/assets/index.page.${hashRegex}.css`.test(a.src)) &&
          a.assetType === 'style' &&
          a.mediaType === 'text/css' &&
          a.preloadType === 'style'
      )
    )
    assert(
      pageAssets.find(
        (a) =>
          partRegex`/assets/renderer/_default.page.client.${/[a-z0-9]+/}.js`.test(a.src) &&
          a.assetType === 'preload' &&
          a.mediaType === 'text/javascript' &&
          a.preloadType === 'script'
      )
    )
  }
}