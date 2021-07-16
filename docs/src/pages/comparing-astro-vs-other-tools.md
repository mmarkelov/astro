---
layout: ~/layouts/Main.astro
title: Comparing Astro
---

We often get asked the question, "How does Astro compare to my favorite site builder, ________?" This guide was written to help answer that question for several popular Astro alternatives.

If you don't see your favorite site builder listed here, [ask us in Discord.](https://astro.build/chat)

## Docusaurus vs. Astro

**[Docusaurus](https://docusaurus.io/)** is a popular open source framework for building documentation websites. Docusaurus uses React for HTML generation while Astro supports HTML, Astro components and most popular web frameworks including React. 

Docusaurus was designed specifically for documentation websites, and may have features for documentation websites that Astro does not. Astro was designed for any static website, which includes most documentation websites. Astro has all that you need to build fast documentation websites, including Markdown support and file-based routing.

To build a documentation website with Astro, check out our official [docs](https://github.com/snowpackjs/astro/tree/main/examples/docs) starter template. This website was built using this same template!

#### Comparing Docusaurus vs. Astro Performance

In almost all cases, a website built with Astro will load significantly faster than a website built with Docusaurus. This is because Astro uses Partial Hydration and Island Architecture to only load the bare minimum amount of JavaScript in the browser. Docusaurus websites don't support this, and instead load your entire JavaScript application in the browser. The result is a slower page load and worse Lighthouse scores than a similar website built with Astro. 

Case Study: [docusaurus.io/docs](https://docusaurus.io/docs) (built with Docusaurus) loads **238kb** of JavaScript on first load, and scores a Lighthouse performance score of [26 out of 100](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fdocusaurus.io%2Fdocs). This website, (built with Astro) loads only **9.3kb** of JavaScript (96% less) and scores a Lighthouse performance score of [94 out of 100](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fdocs.astro.build%2Fgetting-started). 


## Eleventy vs. Astro

[Eleventy](https://www.11ty.dev/) is a popular static site builder, powered by Node.js. It is very similar to Astro, and conceptually aligned with Astro's "minimize client-side JavaScript" approach to web development.

Eleventy supports several older [templating languages](https://www.11ty.dev/docs/languages/) for HTML: Nunjucks, Liquid, Pug, EJS, and others. Astro lets you write HTML using modern UI component libraries (React, Preact, Vue, Svelte) or a custom component syntax that is similar to HTML + JSX. Eleventy does not currently support using modern UI component libraries for HTML templating.

Eleventy offers "zero client-side JavaScript" by not including any JavaScript on your site by default. By making JavaScript opt-in, Eleventy sites can be written with little to no JavaScript. However, when you do need client-side JavaScript, it's up to you to set up your own build pipeline. This can be time consuming, and is only as optimized as what you can build yourself with Webpack, Snowpack, or Vite.

By contrast, Astro has built-in support for Partial Hydration and Island Architecture to only load the bare minimum amount of JavaScript in the browser. In production, Astro automatically optimizes your included component JavaSript bundles for you. This gives you built-in support to include individual JavaScript components on the page, without any effort on your part.

#### Comparing Eleventy vs. Astro Performance

Eleventy has few opinions about what you build, so it's difficult to compare generally. Because Eleventy includes zero JavaScript by default, it is possible for an Eleventy website to be as fast as an Astro website. However, because you are responsible for building your own build pipeline for any JavaScript that you include on the page, most Eleventy websites will not be as well-optimized as Astro websites.


<!-- 
## Gatsby vs. Astro

**Next.js** is a popular website & application framework for React.


## Hexo vs. Astro

**Hexo** is a popular static site generator, powered by Node.js.

-->

## Hugo vs. Astro

[Hugo](https://gohugo.io/) is a popular static site generator, powered by Go. 

Hugo supports an custom [templating languages](https://gohugo.io/templates/introduction/) for HTML. Astro lets you write HTML using modern UI component libraries (React, Preact, Vue, Svelte) or a custom component syntax that is similar to HTML + JSX. Hugo does not support using modern UI component libraries for HTML templating.

Hugo offers "zero client-side JavaScript" by not including any JavaScript on your site by default. By making JavaScript opt-in, Hugo sites can be written with little to no JavaScript. However, when you do need client-side JavaScript, it's up to you to set up your own build pipeline. This can be time consuming, and is only as optimized as what you can build yourself with Webpack, Snowpack, or Vite.

By contrast, Astro has built-in support for Partial Hydration and Island Architecture to only load the bare minimum amount of JavaScript in the browser. In production, Astro automatically optimizes your included component JavaSript bundles for you. This gives you built-in support to include individual JavaScript components on the page, without any effort on your part.

#### Comparing Hugo vs. Astro Performance

Hugo has few opinions about what you build, so it's difficult to compare generally. Because Hugo includes zero JavaScript by default, it is possible for an Hugo website to be as fast as an Astro website. However, because you are responsible for building your own build pipeline for any JavaScript that you include on the page, most Hugo websites will not be as well-optimized as Astro websites.


## Jekyll vs. Astro

[Jekyll](https://jekyllrb.com/) is a popular static site generator, powered by Ruby.

Jekyll supports an older [templating languages](https://jekyllrb.com/docs/liquid/) for HTML called Liquid. Astro lets you write HTML using modern UI component libraries (React, Preact, Vue, Svelte) or a custom component syntax that is similar to HTML + JSX. Jekyll does not support using modern UI component libraries for HTML templating.

Jekyll offers "zero client-side JavaScript" by not including any JavaScript on your site by default. By making JavaScript opt-in, Jekyll sites can be written with little to no JavaScript. However, when you do need client-side JavaScript, it's up to you to set up your own build pipeline. This can be time consuming, and is only as optimized as what you can build yourself with Webpack, Snowpack, or Vite.

By contrast, Astro has built-in support for Partial Hydration and Island Architecture to only load the bare minimum amount of JavaScript in the browser. In production, Astro automatically optimizes your included component JavaSript bundles for you. This gives you built-in support to include individual JavaScript components on the page, without any effort on your part.

#### Comparing Jekyll vs. Astro Performance

Jekyll has few opinions about what you build, so it's difficult to compare generally. Because Jekyll includes zero JavaScript by default, it is possible for an Jekyll website to be as fast as an Astro website. However, because you are responsible for building your own build pipeline for any JavaScript that you include on the page, most Jekyll websites will not be as well-optimized as Astro websites.




## Next.js vs. Astro

[Next.js](https://nextjs.org/) is a popular website & application framework for React. Next.js uses React for HTML generation while Astro supports HTML, Astro components and most popular web frameworks (including React). 

Next.js was designed to build any kind of website, but does best with highly dynamic websites (like Gmail or Facebook). Astro was also designed to build any kind of website, but does best with highly static websites (like content and eCommerce websites).

Next.js supports both Static Site Generation (SSG) and Server-Side Rendering (SSR). Today, Astro only supports Static Site Generation (SSG).


#### Comparing Next.js vs. Astro Performance

In almost all cases, a website built with Astro will load significantly faster than a website built with Next.js. This is because Astro uses Partial Hydration and Island Architecture to only load the bare minimum amount of JavaScript in the browser. Next.js websites don't support this, and instead load your entire JavaScript application in the browser. The result is a slower page load and worse Lighthouse scores than a similar website built with Astro. 

Next.js has [experimental support](https://piccalil.li/blog/new-year-new-website/#heading-no-client-side-react-code) for fully-static, zero-JavaScript pages. However, there is no planned support for hydrating individual components on the page. This leaves you with an all-or-nothing limitation.

Next.js has great built-in image optimizations, which could make Next.js a better choice for some image-heavy websites.

Case Study: [nextjs.org/docs](https://nextjs.org/docs/getting-started) (built with Next.js) loads **463kb** of JavaScript on first load, and scores a Lighthouse performance score of [59 out of 100](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fnextjs.org%2Fdocs%2Fgetting-started). This website, (built with Astro) loads only **9.3kb** of JavaScript (98% less) and scores a Lighthouse performance score of [94 out of 100](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fdocs.astro.build%2Fgetting-started). 


## Nuxt vs. Astro

[Nuxt](https://nuxtjs.org/) is a popular website & application framework for Vue. Nuxt uses Vue for HTML generation while Astro supports HTML, Astro components and most popular web frameworks (including Vue). 

Nuxt was designed to build any kind of website, but does best with highly dynamic websites (like Gmail or Facebook). Astro was also designed to build any kind of website, but does best with highly static websites (like content and eCommerce websites).

Nuxt supports both Static Site Generation (SSG) and Server-Side Rendering (SSR). Today, Astro only supports Static Site Generation (SSG).


#### Comparing Nuxt vs. Astro Performance

In almost all cases, a website built with Astro will load significantly faster than a website built with Nuxt. This is because Astro uses Partial Hydration and Island Architecture to only load the bare minimum amount of JavaScript in the browser. Nuxt websites don't support this, and instead load your entire JavaScript application in the browser. The result is a slower page load and worse Lighthouse scores than a similar website built with Astro. 

Next.js has great built-in image optimizations, which could make Next.js a better choice for some image-heavy websites.

Case Study: [nuxtjs.org/docs](https://nuxtjs.org/docs/2.x/get-started/installation) (built with Nuxt) loads **469kb** of JavaScript on first load, and scores a Lighthouse performance score of [48 out of 100](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fnuxtjs.org%2Fdocs%2F2.x%2Fget-started%2Finstallation). This website, (built with Astro) loads only **9.3kb** of JavaScript (98% less) and scores a Lighthouse performance score of [94 out of 100](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fdocs.astro.build%2Fgetting-started). 



## VuePress vs. Astro

**VuePress** is a popular documentation platform, powered by Vue.js. VuePress uses Vue for HTML generation while Astro supports HTML, Astro components and most popular web frameworks (including Vue). 

VuePress was designed specifically for documentation websites, and may have features for documentation websites that Astro does not. Astro was designed for any static website, which includes most documentation websites. Astro has all that you need to build fast documentation websites, including Markdown support and file-based routing.

To build a documentation website with Astro, check out our official [docs](https://github.com/snowpackjs/astro/tree/main/examples/docs) starter template. This website was built using this same template!

#### VuePress vs. Astro Performance

In almost all cases, a website built with Astro will load significantly faster than a website built with VuePress. This is because Astro uses Partial Hydration and Island Architecture to only load the bare minimum amount of JavaScript in the browser. VuePress websites don't support this, and instead load your entire JavaScript application in the browser. The result is a slower page load and worse Lighthouse scores than a similar website built with Astro. 

Case Study: [vuepress.vuejs.org/guide/](https://vuepress.vuejs.org/guide/) (built with VuePress) loads **166kb** of JavaScript on first load, and scores a Lighthouse performance score of [63 out of 100](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fvuepress.vuejs.org%2Fguide%2F). This website, (built with Astro) loads only **9.3kb** of JavaScript (94% less) and scores a Lighthouse performance score of [94 out of 100](https://lighthouse-dot-webdotdevsite.appspot.com//lh/html?url=https%3A%2F%2Fdocs.astro.build%2Fgetting-started). 

