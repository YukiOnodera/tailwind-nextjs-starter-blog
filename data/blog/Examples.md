---
title: Examples
date: 2024-11-28
tags:
  - 2024-01
  - Y2024-W03
  - 日曜日
  - english
draft: true
summary: TestPostTestPostTestPostTestPost
yaml_title: Examples
authors:
  - default
canonicalUrl: 
images: 
lastmod: 2024-01-18
layout: 
type: Blog
---

# 表現方法

wwww

# How-to-put-images

You can put images using mdx.

<div className="-mx-2 flex flex-wrap overflow-hidden xl:-mx-2">
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Maple](/static/images/canada/maple.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Lake](/static/images/canada/lake.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Mountains](/static/images/canada/mountains.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Toronto](/static/images/canada/toronto.jpg)
  </div>
</div>

This is sample code.

```js
<div className="-mx-2 flex flex-wrap overflow-hidden xl:-mx-2">
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Maple](/static/images/canada/maple.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Lake](/static/images/canada/lake.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Mountains](/static/images/canada/mountains.jpg)
  </div>
  <div className="my-1 w-full overflow-hidden px-2 xl:my-1 xl:w-1/2 xl:px-2">
    ![Toronto](/static/images/canada/toronto.jpg)
  </div>
</div>
```

## Images

![Toronto](/static/images/canada/toronto.jpg)

![[/static/images/obsidian/c1905fd46606db48e3f0f06dca96a6e9_MD5.png]]

## Syntax Highlighting

```js:javascript.js
function fancyAlert(arg) {
  if (arg) {
    $.facebox({ div: '#foo' })
  }
}
```

```hcl:main.tf
resource "aws_iam_role" "test_role" {
  name = "test_role"
  tags = {
    tag-key = "tag-value"
  }
}
```

## Footnotes

Here is an Example[^1]. With some additional text.

Ex.) `[^2]`[^2]

[^1]: http://localhost:3000/blog/usage/github-markdown-guide
[^2]: http://localhost:3000/blog/usage/github-markdown-guide

# Use Next/Image
<Image alt="maple" src="/static/images/canada/maple.jpg" width={2560} height={128} />
<Image alt="maple" src="/static/images/canada/maple.jpg" width={256} height={128} />

# How to Express Math
- **inline**: enclose math expressions with `$`
- **block**: enclose math expressions with `$$`
## Ex.

The vector of outcome variables $\mathbf{Y}$ is a $n \times 1$ matrix,

```tex
\mathbf{Y} = \left[\begin{array}
  {c}
  y_1 \\
  . \\
  . \\
  . \\
  y_n
\end{array}\right]
```

$$
\mathbf{Y} = \left[\begin{array}
  {c}
  y_1 \\
  . \\
  . \\
  . \\
  y_n
\end{array}\right]
$$

# このテンプレートの説明

http://localhost:3000/blog/usage/introducing-tailwind-nextjs-starter-blog

- v1 で追加された機能一覧
	- http://localhost:3000/blog/usage/new-features-in-v1
# Customization

http://localhost:3000/blog/usage/new-features-in-v1

## Theme Colors
- theme の font などを変更する場合は、`tailwind.config.js` から Update
- code block 内の Style 変更は、`prism.css` から Update

## Xdm MDX Compiler

mdx 内では、下記のような Component も直接利用が可能

```jsx:example.mdx
// Or import PageTitle from './components/PageTitle.js' if you are using js
import PageTitle from './components/PageTitle.tsx'
;<PageTitle> Using JSX components in MDX </PageTitle>
```
