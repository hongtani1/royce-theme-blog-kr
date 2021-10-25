---
layout: page
title: Blog Guide
featured_image: /assets/images/pages/style_guides.jpg
---

Hongtani의 디지털마케팅 블로그는 jekyll로 만들었습니다. jekyll은 템플릿, 부분, 유동 코드, 마크다운 등과 같은 동적 구성 요소에서 정적 웹 사이트를 구축하는 데 사용되는 루비(Ruby) 언어로 제공되는 구문 분석 엔진입니다. 일반적으로 사용되는 브런치(brunch)나 티스토리(tistory)나 네이버(Naver)로 만들지 않은 것은, 이 블로그를 통해 직접 [**SEO**](http://hongtani.com/tags/index.html#SEO)나 **GA, GTM**등 디지털마케팅의 기술적 요소들을 직접 활용하고 모든 부분에 직접 개입하고 싶었기 때문입니다.

본 페이지는 이 블로그의 마케팅 퍼널(Funnel)을 고려한 설계의도와 디지털마케팅에 필요한 분석을 어떤 식으로 설치했는지 정리했습니다.

<br>
<br>


## 1. HTML과 CSS 그리고 Javascript
일반적으로 웹에 거의 필수적으로 쓰이는 HTML과 CSS,Javascript로 블로그가 구성되어 있습니다.
블로그를 이루는 **모든 요소**는 직접 코드 수정하여 원하는 대로 바꿀 수 있습니다.

##### 블로그에 사용된 SEO 코드 일부
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


<br>
## 2. [SEO](http://hongtani.com/tags/index.html#SEO)

SEO의 기본으로 널리 알려진 meta태그부터 오픈그래프태그, 캐노니컬태그 등 웹사이트의 <head> 부분에 삽입되는 SEO 태그를 삽입했습니다.
블로그에 적용된 모든 SEO 태그는 **치환자** (ex_ { 사이트.타이틀 } 등)로 작성되어 페이지와 콘텐츠에 따라 동적으로 변환됩니다.

또한, 외부적 SEO 요소로 검색엔진 웹크롤링 봇이 웹사이트 전체에 접근하도록 하는 robot.txt를 작성하였고, 웹사이트 내 정보가 포함된 데이터 파일인 feed.xml, 검색엔진이 웹 사이트 구조를 이해하는데 도움을 주는 sitemap.xml 파일을 포함하여, 구글 서치 콘솔, 네이버/다음 웹마스터 도구에 등록하여 검색 엔진의 접근을 용이하게 설정했습니다.

위에 언급된 파일을 제출한다면, 구글이나 네이버같은 **[검색엔진](http://hongtani.com/tags/index.html#검색엔진)** 이 내 웹사이트의 구조를 빠르게 파악하여, 사용자들에게 유익한 정보를 제공한다는 것을 보다 빠르게 인식할 수 있도록 합니다. 위 파일들을 제출했다고 무조건 검색결과 상위에 노출되는 것은 아닙니다. 기술적인 부분이 완벽히 세팅되어도 웹사이트 내 제공되는 콘텐츠와 서비스를 이용하는 사용자의 행태(체류시간, 재방문율, 자주 여는 항목, 즐겨찾기 등등)를 전체적으로 종합하여 검색결과 순위가 반영됩니다.

##### 블로그에 사용된 SEO 코드 일부
<pre><code class="language-markup">&lt;title&gt;Blog Guide | HONGTANI&lt;/title&gt;
&lt;meta property="og:title" content="Blog Guide" /&gt;
&lt;meta property="og:locale" content="ko_KR" /&gt;
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

  디지털마케팅 분석의 꽃, GA는 UA와 GA4 모두 사용합니다. (2021년 10월 21일 현재 기준 UA만 사용 중)
  UA와 GA4 트래킹 코드 스니펫은 홈페이지 내 직접 삽입하지 않고, 구글 태그매니저를 통해 설치합니다.

  구독이나 공유, 태그를 클릭하는 등 기능에는 이벤트를 수집하여 각각 어떤 곳에서 반응이 있는지 측정하여 추후 개선 작업에 반영합니다.

  유입된 사용자 정보에 따라 포스팅 방향이나 사이트 구조를 개선하면서 UA리포트도 종종 공유하겠습니다.
  특히 UA에는 Google데이터스튜디오로 잘 짜여진 맞춤 보고서를 작성하는 것이 목표입니다.

##### 블로그에 설정된 GA 목표 이벤트

![Hongtani 블로그의 GA 목표 이벤트](https://hongtani.com/assets/images/posts/2021/myga_1.jpg)


## 4. GTM

  구글 태그매니저는 UA와 GA4의 집계수단으로 매우 유용합니다.
  모든 기능과 모든 요소를 맞춤 형식으로 원하는대로 받아올 수 있으며, 현재 블로그에는 페이지 조회를 제외한 모든 기능에 GTM을 통한 이벤트 수집 기능을 설치했습니다. (GA4 작업 전)

  GTM 관련 궁금하신 점은 [문의하기](http://hongtani.com/contact)를 통해 문의해주세요.

## 5. 콘텐츠

  작성 중
