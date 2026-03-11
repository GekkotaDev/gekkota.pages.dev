---
title: Hello, World!
description: My first blog post
tags: [web]
dates:
  published: 2026-03-11
---

# Hello, World!

This is indeed yet another post about how I wrote this personal site. If you're not interested in something so clichéd then now's your chance to click off.

Still with me? Alright.

## Contents

## Scope creep

They say you only learn with the benefit of hindsight and I suppose I've learnt that the hard way as I've contemplated for a while on what sort of technologies I'd like to use for my website, from having experimented with SvelteKit as a beginner all the way to creating an overengineered Nuxt monolith with Server-Side Rendering (SSR)

I've thought to myself that I wanted everything within my site to be tailor made from scratch and that it should be done to my exacting specifications and particular vision. I thought that this was gonna give me something that not only I'd be happy to show off and would show my expertise.

Oh boy, how I was **_so_** naive back then.

Such insurmountable task would inevitably mean that I wouldn't get anything done as not only would I have to learn how to implement the work that had already been done but I would've likely have created a flawed implementation of what already exists out there that had been proven to work. Repeated failures would bring to mind **done is better than perfect** as at least I got something to show.

To reiterate, **done is better than perfect**. If it meant ceding the fruitless pursuit of perfection then so be it, **less is more**.

## Less is more

After dozens of failed experiments, I've eventually decided to just make a simple website in Astro.

It isn't worth having the additional overhead of a more complex JavaScript framework nor the bare-bones nature of simpler static site generators (or forbid doing it manually); likewise, CSS can get rather fickle, rather than designing from scratch I've opted for using [WebTUI](https://webtui.ironclad.sh) and [Tailwind CSS](https://tailwindcss.com/)

To have some peace of mind about bot scrapers, I've simply decide to depend upon Cloudflare's services. In case that fails however some dummy pages were outfitted based on [Tim McCormack's work](https://www.brainonfire.net/blog/2024/09/19/poisoning-ai-scrapers/).

## Nice to haves

Despite what I've said about scope creep, there's still some nice to have features I'd like to get to working on someday.

As nice as this website may look like, it does seem to be rather barren without any feedback. There's already been several sites that implement Bluesky as a comment system and the ideal way to have them implemented client side would've been to use the `@atcute/client` package in conjuction with a database to minimize spamming Bluesky's search API.

Another point of contention is the lack of a search feature... though that isn't exactly high up on the list of things I'd like to implement given `Ctrl` + `F` (Find in Page) already works sufficiently for querying blog posts.

Though not as low on my priorities are embedding [OpenGraph](https://ogp.me/) metadata. This is what's used for those embeds on sites like Bluesky and Discord.

Aside from those are some minor updates such as embedding the latest timestamp since a post has been edited, and the estimated reading time.

## Closing Remarks

Despite how this didn't live up to my original ambitions, honestly the fact that I've stopped obsessing over getting everything exactly the way I want it for making something that is close enough had done wonders in getting things done.

I'm pretty content with what I have to show for on here where I've gotten something that's pretty decent to use.
