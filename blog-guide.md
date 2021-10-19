---
layout: page
title: Blog Guide
featured_image: /assets/images/pages/style_guides.jpg
---

Hongtani의 디지털마케팅 블로그는 jekyll로 만들었습니다. jekyll은 템플릿, 부분, 유동 코드, 마크다운 등과 같은 동적 구성 요소에서 정적 웹 사이트를 구축하는 데 사용되는 루비(Ruby) 언어로 제공되는 구문 분석 엔진입니다. 일반적으로 사용되는 브런치(brunch)나 티스토리(tistory)나 네이버(Naver)로 만들지 않은 것은, 이 블로그를 통해 직접 **SEO**나 **GA, GTM**등 디지털마케팅의 기술적 요소들을 직접 활용하고 모든 부분에 직접 개입하고 싶었기 때문입니다.

본 페이지에는 어디에 어떤 디지털마케팅 스킬이 적용되었는지 편하게 보실 수 있도록 정리했습니다.

<br>
<br>


## 1. HTML과 CSS 그리고 Javascript
통상적인 웹에 쓰이는 HTML과 CSS,Javascript로 블로그가 구성되어 있습니다.

블로그를 이루는 **모든 요소**는 직접 코드 수정하여 원하는 대로 바꿀 수 있습니다.

블로그에 사용된 코드 일부
<pre><code class="language-markup">&lt;!DOCTYPE html&gt;
&lt;html lang="ko"&gt;
&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;meta http-equiv="X-UA-Compatible" content="IE=edge"&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
    &lt;!-- Site Favicon --&gt;
    &lt;link rel="shortcut icon" href="http://hongtani.com/assets/images/favicon.ico" type="image/png" /&gt;
    &lt;!-- Font Embed Code --&gt;
    &lt;link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600,600i|Karla:400,400i,700,700i" rel="stylesheet"&gt;
    &lt;!-- CSS Styles --&gt;
    &lt;link href="{{ site.baseurl }}/assets/css/style.css" rel="stylesheet"&gt;
&lt;/head&gt;
</code></pre>
여기에 jekyll의 동적 코드를 더해 포스팅을 보다 편하고 깔끔하게 관리합니다.


## 2. SEO

SEO의 기본으로 널리 알려진 meta태그부터 오픈그래프태그, 캐노니컬태그 등 웹사이트의 <head> 부분에 삽입되는 SEO 태그를 삽입했습니다.
블로그에 적용된 모든 SEO 태그는 **치환자** (ex_ { 사이트.타이틀 } 등)로 작성되어 페이지와 콘텐츠에 따라 동적으로 변환됩니다.

또한, 외부적 SEO 요소로 검색엔진 웹크롤링 봇이 웹사이트 전체에 접근하도록 하는 robot.txt를 작성하였고, 웹사이트 내 정보가 포함된 데이터 파일인 feed.xml, 검색엔진이 웹 사이트 구조를 이해하는데 도움을 주는 sitemap.xml 파일을 포함하여, 구글 서치 콘솔, 네이버/다음 웹마스터 도구에 등록하여 검색 엔진의 접근을 용이하게 설정했습니다.

### 블로그에 사용된 SEO 코드 일부
<pre><code class="language-markup">&lt;title&gt;Blog Guide | HONGTANI&lt;/title&gt;
&lt;meta name="generator" content="Jekyll v4.2.1" /&gt;
&lt;meta property="og:title" content="Blog Guide" /&gt;
&lt;meta property="og:locale" content="en_US" /&gt;
&lt;meta name="description" content="Digital Marketer" /&gt;
&lt;meta property="og:description" content="Digital Marketer" /&gt;
&lt;link rel="canonical" href="http://hongtani.com/blog-guide" /&gt;
&lt;meta property="og:url" content="http://hongtani.com/blog-guide" /&gt;
&lt;meta property="og:site_name" content="HONGTANI" /&gt;
&lt;meta name="twitter:card" content="summary" /&gt;
&lt;meta property="twitter:title" content="Blog Guide" /&gt;
&lt;script type="application/ld+json"&gt;
{"url":"http://hongtani.com/blog-guide","headline":"Blog Guide","description":"Digital Marketer","@type":"WebPage","@context":"https://schema.org"}&lt;/script&gt;
</code></pre>


## 3. GA

  작성 중

## 4. GTM

  작성 중
