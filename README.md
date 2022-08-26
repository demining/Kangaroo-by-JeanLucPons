<!DOCTYPE html>
<!-- saved from url=(0035)https://cryptodeeptech.ru/kangaroo/ -->
<html lang="ru-RU"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

	<!-- This site is optimized with the Yoast SEO plugin v19.2 - https://yoast.com/wordpress/plugins/seo/ -->
	<style type="text/css"></style><title>Pollard's Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»</title>
	<meta name="description" content="Кенгуру Полларда достаточно знать публичный ключ рассмотрим самый быстрый алгоритм для ECDLP из области вычислительной теории чисел, кенгуру Полларда также называют алгоритм лямбды Полларда.">
	<link rel="canonical" href="https://cryptodeeptech.ru/kangaroo/">
	<meta property="og:locale" content="ru_RU">
	<meta property="og:type" content="article">
	<meta property="og:title" content="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»">
	<meta property="og:description" content="Кенгуру Полларда достаточно знать публичный ключ рассмотрим самый быстрый алгоритм для ECDLP из области вычислительной теории чисел, кенгуру Полларда также называют алгоритм лямбды Полларда.">
	<meta property="og:url" content="https://cryptodeeptech.ru/kangaroo/">
	<meta property="og:site_name" content="«CRYPTO DEEP TECH»">
	<meta property="article:published_time" content="2022-07-28T13:00:16+00:00">
	<meta property="article:modified_time" content="2022-08-25T19:06:57+00:00">
	<meta property="og:image" content="https://habrastorage.org/r/w1560/getpro/habr/upload_files/3d9/756/d50/3d9756d50d09b0584c5967175184dd42.png">
	<meta name="author" content="Crypto Deep Tech">
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:label1" content="Написано автором">
	<meta name="twitter:data1" content="Crypto Deep Tech">
	<meta name="twitter:label2" content="Примерное время для чтения">
	<meta name="twitter:data2" content="13 минут">
	<script async="" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/tag.js"></script><script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://cryptodeeptech.ru/#website","url":"https://cryptodeeptech.ru/","name":"«CRYPTO DEEP TECH»","description":"Cryptanalysis and data financial security services","potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"https://cryptodeeptech.ru/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"ru-RU"},{"@type":"ImageObject","inLanguage":"ru-RU","@id":"https://cryptodeeptech.ru/kangaroo/#primaryimage","url":"https://habrastorage.org/r/w1560/getpro/habr/upload_files/3d9/756/d50/3d9756d50d09b0584c5967175184dd42.png","contentUrl":"https://habrastorage.org/r/w1560/getpro/habr/upload_files/3d9/756/d50/3d9756d50d09b0584c5967175184dd42.png"},{"@type":"WebPage","@id":"https://cryptodeeptech.ru/kangaroo/#webpage","url":"https://cryptodeeptech.ru/kangaroo/","name":"Pollard's Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»","isPartOf":{"@id":"https://cryptodeeptech.ru/#website"},"primaryImageOfPage":{"@id":"https://cryptodeeptech.ru/kangaroo/#primaryimage"},"datePublished":"2022-07-28T13:00:16+00:00","dateModified":"2022-08-25T19:06:57+00:00","author":{"@id":"https://cryptodeeptech.ru/#/schema/person/0ef8ac0f63991970628a3a6587f9e6c0"},"description":"Кенгуру Полларда достаточно знать публичный ключ рассмотрим самый быстрый алгоритм для ECDLP из области вычислительной теории чисел, кенгуру Полларда также называют алгоритм лямбды Полларда.","breadcrumb":{"@id":"https://cryptodeeptech.ru/kangaroo/#breadcrumb"},"inLanguage":"ru-RU","potentialAction":[{"@type":"ReadAction","target":["https://cryptodeeptech.ru/kangaroo/"]}]},{"@type":"BreadcrumbList","@id":"https://cryptodeeptech.ru/kangaroo/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Главная страница","item":"https://cryptodeeptech.ru/"},{"@type":"ListItem","position":2,"name":"Pollard&#8217;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"}]},{"@type":"Person","@id":"https://cryptodeeptech.ru/#/schema/person/0ef8ac0f63991970628a3a6587f9e6c0","name":"Crypto Deep Tech","sameAs":["https://cryptodeeptech.ru","https://www.youtube.com/channel/UCd8W6qtRSiBn0Q0wy6HuNkQ/"],"url":"https://cryptodeeptech.ru/author/cryptodeeptech/"}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel="dns-prefetch" href="https://fonts.googleapis.com/">
<link rel="alternate" type="application/rss+xml" title="«CRYPTO DEEP TECH» » Лента" href="https://cryptodeeptech.ru/feed/">
<link rel="alternate" type="application/rss+xml" title="«CRYPTO DEEP TECH» » Лента комментариев" href="https://cryptodeeptech.ru/comments/feed/">
<link rel="stylesheet" id="itng-block-style-css" href="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_8f426a1779caff96bb3f2afbcff86bc9.css" media="all">
<link rel="stylesheet" id="wp-block-library-css" href="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/style.min.css" media="all">
<style id="global-styles-inline-css">
body{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}
</style>
<link rel="stylesheet" id="wp-date-remover-css" href="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_e6094661d8923e95b233019ebff7c8f0.css" media="all">
<link rel="stylesheet" id="itng-fonts-css" href="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/css" media="all">
<link rel="stylesheet" id="itng-style-css" href="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_8de4505c66a21eefd3c1c98b6400e4e1.css" media="all">
<link rel="stylesheet" id="itng-main-style-css" href="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_d1cf6f49400112d539e59eee9b75e10d.css" media="all">
<style id="itng-main-style-inline-css">
.custom-logo-link img {width: 400px;}@media screen and (min-width: 992px) {#header-image .header-overlay {
            opacity: 0.01;
        }}
ins,
	.nav-wrapper,
	#menu,
	.main-navigation ul#menu-desktop ul,
	#itng-featured-news .slider-post-wrapper .posted-on a,
	#itng-featured-news #itng-featured-news-list-container .posted-on a,
	#itng-featured-posts .itng-featured-post-date,
	#itng-featured-news #itng-featured-news-carousel-container .posted-on a,
	#colophon,
	[class^=itng-search] form,
	#itng-featured-cat .featured-cat-thumb h2,
	#itng-featured-cat .featured-cat-thumb h3
	{background-color: #008bca}article .entry-meta a,
	article .blog-footer,
	article .blog-footer a,
	.widget a,
	.nav-links a,
	.itng-pagination .nav-links > a,
	.itng-pagination .dots
	{color: #008bca !important}blockquote,
	#itng-content-title span
	{border-color: #008bca}button.top-menu-mobile
	{background-color: #43bdf2 !important}#footer-sidebar .widget-title
	{color: #43bdf2 !important}
</style>
<link rel="stylesheet" id="bootstrap-css" href="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_d26191bd0380b0cf97525a613b8b566c.css" media="all">
<link rel="stylesheet" id="owl-css" href="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_c8322bd5bffc8e2856f2cbcd03c61d18.css" media="all">
<link rel="stylesheet" id="mag-popup-css" href="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_30b593b71d7672658f89bfea0ab360c9.css" media="all">
<link rel="stylesheet" id="font-awesome-css" href="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_c495654869785bc3df60216616814ad1.css" media="all">
<script src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/jquery.min.js" id="jquery-core-js"></script>
<script src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/jquery-migrate.min.js" id="jquery-migrate-js"></script>
<script src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_49cea0a781874a962879c2caca9bc322.js" id="wp-date-remover-js"></script>
<link rel="https://api.w.org/" href="https://cryptodeeptech.ru/wp-json/"><link rel="alternate" type="application/json" href="https://cryptodeeptech.ru/wp-json/wp/v2/posts/322"><meta name="generator" content="WordPress 6.0.1">
<link rel="alternate" type="application/json+oembed" href="https://cryptodeeptech.ru/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcryptodeeptech.ru%2Fkangaroo%2F">
<link rel="alternate" type="text/xml+oembed" href="https://cryptodeeptech.ru/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fcryptodeeptech.ru%2Fkangaroo%2F&amp;format=xml">
		<style type="text/css">
						#header-image {
						background-image: url(https://cryptodeeptech.ru/wp-content/uploads/2022/07/header3.jpg);
						background-size: cover;
						background-repeat: repeat;
						background-position: center center;
				}
							.site-title, .site-description {
				display: none;
				position: absolute;
				clip: rect(1px, 1px, 1px, 1px);
				}
					</style>
		<style id="custom-background-css">
body.custom-background { background-color: #eff3fd; }
</style>
	<link rel="icon" href="https://cryptodeeptech.ru/wp-content/uploads/2022/07/cropped-favicon7-32x32.png" sizes="32x32">
<link rel="icon" href="https://cryptodeeptech.ru/wp-content/uploads/2022/07/cropped-favicon7-192x192.png" sizes="192x192">
<link rel="apple-touch-icon" href="https://cryptodeeptech.ru/wp-content/uploads/2022/07/cropped-favicon7-180x180.png">
<meta name="msapplication-TileImage" content="https://cryptodeeptech.ru/wp-content/uploads/2022/07/cropped-favicon7-270x270.png">
</head>

<body data-rsssl="1" class="post-template-default single single-post postid-322 single-format-standard custom-background wp-custom-logo no-sidebar">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-dark-grayscale"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0 0.49803921568627"></fefuncr><fefuncg type="table" tableValues="0 0.49803921568627"></fefuncg><fefuncb type="table" tableValues="0 0.49803921568627"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-grayscale"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0 1"></fefuncr><fefuncg type="table" tableValues="0 1"></fefuncg><fefuncb type="table" tableValues="0 1"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-yellow"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0.54901960784314 0.98823529411765"></fefuncr><fefuncg type="table" tableValues="0 1"></fefuncg><fefuncb type="table" tableValues="0.71764705882353 0.25490196078431"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-red"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0 1"></fefuncr><fefuncg type="table" tableValues="0 0.27843137254902"></fefuncg><fefuncb type="table" tableValues="0.5921568627451 0.27843137254902"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-midnight"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0 0"></fefuncr><fefuncg type="table" tableValues="0 0.64705882352941"></fefuncg><fefuncb type="table" tableValues="0 1"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-magenta-yellow"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0.78039215686275 1"></fefuncr><fefuncg type="table" tableValues="0 0.94901960784314"></fefuncg><fefuncb type="table" tableValues="0.35294117647059 0.47058823529412"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-purple-green"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0.65098039215686 0.40392156862745"></fefuncr><fefuncg type="table" tableValues="0 1"></fefuncg><fefuncb type="table" tableValues="0.44705882352941 0.4"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none" style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;"><defs><filter id="wp-duotone-blue-orange"><fecolormatrix color-interpolation-filters="sRGB" type="matrix" values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 "></fecolormatrix><fecomponenttransfer color-interpolation-filters="sRGB"><fefuncr type="table" tableValues="0.098039215686275 1"></fefuncr><fefuncg type="table" tableValues="0 0.66274509803922"></fefuncg><fefuncb type="table" tableValues="0.84705882352941 0.41960784313725"></fefuncb><fefunca type="table" tableValues="1 1"></fefunca></fecomponenttransfer><fecomposite in2="SourceGraphic" operator="in"></fecomposite></filter></defs></svg><div id="page" class="site">
	<a class="skip-link screen-reader-text" href="https://cryptodeeptech.ru/kangaroo/#primary">Skip to content</a>

	
	    <header id="masthead" class="site-header style-1">

		    
	        <div id="header-image">
		        <div class="site-branding">
					<a href="https://cryptodeeptech.ru/" class="custom-logo-link" rel="home"><img width="1279" height="319" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/cropped-header4.png" class="custom-logo" alt="«CRYPTO DEEP TECH»" srcset="https://cryptodeeptech.ru/wp-content/uploads/2022/07/cropped-header4.png 1279w, https://cryptodeeptech.ru/wp-content/uploads/2022/07/cropped-header4-300x75.png 300w, https://cryptodeeptech.ru/wp-content/uploads/2022/07/cropped-header4-1024x255.png 1024w, https://cryptodeeptech.ru/wp-content/uploads/2022/07/cropped-header4-768x192.png 768w" sizes="(max-width: 1279px) 100vw, 1279px" title="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></a>	<h2 class="site-title"><a href="https://cryptodeeptech.ru/" rel="home">«CRYPTO DEEP TECH»</a></h2>
		<p class="site-description">Cryptanalysis and data financial security services</p>
	        	</div>
				<div class="header-overlay"></div>
	        </div>

			<div class="nav-wrapper">
				 <div class="container">
					 <div class="d-flex">

						<div id="site-navigation" class="main-navigation col-lg-11" role="navigation">
							<ul id="menu-desktop" class="menu"><li id="menu-item-229" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-229"><a href="https://cryptodeeptech.ru/">HOME</a></li>
<li id="menu-item-225" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-225"><a href="https://cryptodeeptech.ru/publication/">PUBLICATIONS</a></li>
<li id="menu-item-226" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-226"><a href="https://cryptodeeptech.ru/study/">STUDY</a></li>
<li id="menu-item-227" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-227"><a href="https://cryptodeeptech.ru/resources/">RESOURCES</a></li>
<li id="menu-item-228" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-228"><a href="https://cryptodeeptech.ru/contacts/">CONTACTS</a></li>
<li id="menu-item-240" class="menu-item menu-item-type-post_type menu-item-object-post menu-item-240"><a href="https://cryptodeeptech.ru/lattice-attack/">BLOG</a></li>
</ul>						</div>

						<button href="#menu" class="menu-link mobile-nav-btn col-auto"><i class="fa fa-bars" aria-hidden="true"></i></button>

						<div id="search-wrapper" class="ml-auto col-auto d-flex">
							<button type="button" id="go-to-field" tabindex="-1"></button>
					    	<button class="search-btn-main"><i class="fa fa-search"></i></button>
					    	
<div class="itng-search-main">
	<form role="search" method="get" class="search-form" action="https://cryptodeeptech.ru/">
				<label>
					<span class="screen-reader-text">Найти:</span>
					<input type="search" class="search-field" placeholder="Поиск…" value="" name="s">
				</label>
				<input type="submit" class="search-submit" value="Поиск">
			</form>	<button type="button" id="go-to-btn" tabindex="-1"></button>
</div>
						</div>
					</div>
				</div>
			</div>

		</header><!-- #masthead -->
			<div id="content-wrapper" class="container row">
		
	<main id="primary" class="site-main container order-1">

		
<article id="post-322" class="post-322 post type-post status-publish format-standard hentry category-1">
	
	<header class="entry-header">
		<h1 class="entry-title">Pollard’s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range</h1>	</header><!-- .entry-header -->
	
	
	
			<div class="entry-meta">
			<span class="posted-on" style="display: none;"><a href="https://cryptodeeptech.ru/kangaroo/" rel="bookmark"><time class="entry-date published" datetime="" style="display: none;"></time><time class="updated" datetime=""></time></a></span><span class="byline"> <span class="author vcard"><a class="url fn n" href="https://cryptodeeptech.ru/author/cryptodeeptech/">Crypto Deep Tech</a></span></span>		</div><!-- .entry-meta -->
		
	
	<div class="entry-content">
		<div class="entry-meta"></div>
<div class="entry-content">
<p class="has-text-align-center"><iframe title="Youtube video player" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/UGUJyxOhBBQ.html" width="560" height="315" frameborder="0" allowfullscreen="allowfullscreen" data-mce-fragment="1"></iframe></p>
<p>In this article, we will look at the fastest algorithm for ECDLP from the field of computational number theory, Pollard’s kangaroo is also called Pollard’s lambda algorithm.</p>
<p>Pollard’s kangaroo method computes&nbsp;&nbsp;<a href="https://cryptodeep.ru/doc/discretelog.pdf" target="_blank" rel="noreferrer noopener"><strong>discrete logarithms</strong></a>&nbsp;&nbsp;in arbitrary cyclic groups.&nbsp;It is applied if the discrete logarithm is known to lie in a certain range, say&nbsp;&nbsp;<code>[ a , b ]</code>, and then has an expected time to execute the bulk operation.</p>
<h2>Pollard’s Kangaroo Advantage:</h2>
<ul>
<li>uses very little memory</li>
<li>can be parallelized with linear acceleration</li>
<li>memory requirements can be effectively tracked</li>
</ul>
<blockquote class="wp-block-quote"><p><em>All this makes the kangaroo method the most powerful method for solving the discrete logarithm problem.</em></p></blockquote>
<h2>One way to break ECDSA signature schemes is to solve the discrete logarithm problem.</h2>
<p>In settings&nbsp;&nbsp;<code>ECDSA</code>&nbsp;, sub-exponential time algorithms, such as the index calculus method, are not used, and the best known solution method underlying them today&nbsp;&nbsp;<code>DLP</code>&nbsp;is the Pollard kangaroo method.&nbsp;We will try not to burden you with various theoretical aspects.&nbsp;Let’s move on to the experimental part.</p>
<p>As we know in the Bitcoin blockchain, the sender of BTC coins always reveals his&nbsp;&nbsp;<em>public key</em>&nbsp;.</p>
<p>For the Pollard kangaroo method, it is enough to know&nbsp;&nbsp;<em>the public key</em>&nbsp;&nbsp;or&nbsp;&nbsp;<em>signature</em>&nbsp;<code>R</code>&nbsp;&nbsp;value (the value&nbsp;&nbsp;<code>R</code>&nbsp;is also a kind of&nbsp;&nbsp;<em>public key</em>&nbsp;&nbsp;from&nbsp;&nbsp;<code>Nonces</code>&nbsp;because it is a coordinate point&nbsp;&nbsp;<code>x</code>&nbsp;on the elliptic curve plane&nbsp;&nbsp;<code>secp256k1</code>)</p>
<blockquote class="wp-block-quote"><p><em>It remains only to define the range&nbsp;</em>&nbsp;<code>PRIVATE KEY</code>&nbsp;<em>or range</em>&nbsp;<code>NONCES</code>&nbsp;.</p></blockquote>
<p>It happens that some devices that create signatures&nbsp;<code>ECDSA</code>in the Bitcoin blockchain can partially disclose bytes of information about the value&nbsp;<code>"K" (NONCES)</code></p>
<p>We believe that this is a potential threat of losing BTC coins and strongly recommend that everyone always update the software and use only verified devices.</p>
<p>In the recent past, we did cryptanalysis on the Bitcoin blockchain and found several such transactions.</p>
<h2>So take a look at this Bitcoin Address with a withdrawal amount of 501.06516041 BTC</h2>
<figure class="wp-block-image"><img title="" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/3d9756d50d09b0584c5967175184dd42.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p>In the transactions of this Bitcoin Address&nbsp;&nbsp;<a href="https://btc.exan.tech/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE" target="_blank" rel="noreferrer noopener"><strong>14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE</strong></a>&nbsp;, there was a partial disclosure of bytes of information about the value&nbsp;<code>"K" (NONCES)</code></p>
<p>As we know from our last&nbsp;&nbsp;<a href="https://cryptodeep.ru/lattice-attack/" target="_blank" rel="noreferrer noopener"><strong><u>article</u></strong></a></p>
<figure class="wp-block-image"><img title="habr.com/en/post/671932/" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/2f678fd0faefca8c25518666490d795f.png" alt="habr.com/en/post/671932/"><figcaption>habr.com/en/post/671932/</figcaption></figure>
<h2>Finding a Secret Key Range</h2>
<p>Let’s find this transaction and use Pollard’s kangaroo method to&nbsp;&nbsp;<em><u>recover the private key</u></em></p>
<p>Earlier we recorded&nbsp; a&nbsp;<em>video instruction</em>&nbsp;:&nbsp;&nbsp;<a href="https://cryptodeep.ru/terminal-google-colab/" target="_blank" rel="noreferrer noopener">«TERMINAL in Google Colab create all the conveniences for working in GITHUB»</a></p>
<p>Open Google Colab in&nbsp;&nbsp;<a href="https://github.com/demining/TerminalGoogleColab"><strong>Terminal [TerminalGoogleColab]</strong></a></p>
<p>To search for RawTX, we will use the repository&nbsp;&nbsp;<a href="https://github.com/demining/CryptoDeepTools/tree/main/01BlockchainGoogleDrive" target="_blank" rel="noreferrer noopener">«01BlockchainGoogleDrive»</a></p>
<pre class="wp-block-code"><code>git clone https://github.com/demining/CryptoDeepTools.git

cd CryptoDeepTools/01BlockchainGoogleDrive/

chmod +x getrawtx.sh

./getrawtx.sh 14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE</code></pre>
<figure class="wp-block-image"><img title="Run Bash script: getrawtx.sh" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/49630fb12d6c1cf64f99f24f530add95.png" alt="Run Bash script: getrawtx.sh"><figcaption>Run Bash script: getrawtx.sh</figcaption></figure>
<p>All contents of the Bitcoin Address&nbsp;&nbsp;<a href="https://btc.exan.tech/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE" target="_blank" rel="noreferrer noopener">14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE</a>&nbsp;transaction &nbsp;were saved to the file:&nbsp;<code>RawTX.json</code></p>
<p>Open the file:&nbsp;&nbsp;<code>RawTX.json</code>&nbsp;and find this transaction&nbsp;<code>[строка №10]</code></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/2c1dca20782c1e09325836c491aeaaf0.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p>Let’s use the command&nbsp;&nbsp;<code>export</code>&nbsp;and save this line&nbsp;&nbsp;<code>№10</code>&nbsp;from&nbsp;&nbsp;<code>RawTX.json</code>separately to&nbsp;<code>RawTX.txt</code></p>
<pre class="wp-block-code"><code>export LINE=10 ; sed -n "${LINE}p" RawTX.json &gt; RawTX.txt</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/b8b0c25080dfe2ad36c112e2f0015e72.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<pre class="wp-block-code"><code>cat RawTX.txt</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/b1aa44976ad24df74e02246a8747db31.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p>Let&nbsp; ‘s find out, open the&nbsp;<a href="https://live.blockcypher.com/btc/decodetx/" target="_blank" rel="noreferrer noopener"><strong>Decode Raw Bitcoin Hexadecimal Transaction</strong></a><code>TxID</code>&nbsp;&nbsp;website&nbsp;&nbsp;&nbsp;and insert our&nbsp;&nbsp;As a result, we get TxID<code>RawTX</code></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/1662922df068e4d009f0efcbecc2089d.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h4>As a result, we get TxID</h4>
<figure class="wp-block-image"><img title="TxID: b5add54960756c58ebabb332c5ef89098d2c3b8f2107b939ec542178e846108b" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/cc2bf5146ef7a2e6004d79986535255d.png" alt="TxID: b5add54960756c58ebabb332c5ef89098d2c3b8f2107b939ec542178e846108b"><figcaption>TxID: b5add54960756c58ebabb332c5ef89098d2c3b8f2107b939ec542178e846108b</figcaption></figure>
<p>Open the link TxID:<br>
<a href="https://btc.exan.tech/tx/b5add54960756c58ebabb332c5ef89098d2c3b8f2107b939ec542178e846108b" target="_blank" rel="noreferrer noopener">https://btc.exan.tech/tx/b5add54960756c58ebabb332c5ef89098d2c3b8f2107b939ec542178e846108b</a></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/c325a8e40de9ca6f15431dac1dcfe274.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<figure class="wp-block-image"><img title="Checking RawTX" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/3b28d1648bf0cf157833dbc3b0821fd8.png" alt="Checking RawTX"><figcaption>Checking RawTX</figcaption></figure>
<p>Now we find out the partial disclosure of bytes of information about the value&nbsp;<code>"K" (NONCES)</code></p>
<p>To do this, we will use the script&nbsp;<code>«RangeNonce»</code></p>
<blockquote class="wp-block-quote"><p><code>«RangeNonce»</code>&nbsp;is a script to find the range of the secret key</p></blockquote>
<p>Let’s choose the version for the distribution kit&nbsp;&nbsp;<code>GNU/Linux</code>&nbsp;.&nbsp;<code>Google Colab</code>&nbsp;provides&nbsp;<code>UBUNTU 18.04</code></p>
<figure class="wp-block-image"><img title="RangeNonce" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/94dd82af4d7155e548aa7241df9b3206.png" alt="RangeNonce"><figcaption>RangeNonce</figcaption></figure>
<p>Upload all files to&nbsp;<code>Google Colab</code></p>
<figure class="wp-block-image"><img title="RangeNonce + Google Colab" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/75191d9a233987a74ed0fa016aa5e2a1.png" alt="RangeNonce + Google Colab"><figcaption>RangeNonce + Google Colab</figcaption></figure>
<p>Let’s allow permissions for the script and run the script&nbsp;<code>«RangeNonce»</code></p>
<p><strong>Teams:</strong></p>
<pre class="wp-block-code"><code>chmod +x RangeNonce
./RangeNonce
cat Result.txt</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/8ff5460c3570ebbbb3c7fb0f6a394fd9.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h4>Everything will be saved to a file: Result.txt</h4>
<figure class="wp-block-image"><img title="result.txt" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/2af471f7eb46f84157b402ed67ea9139.png" alt="result.txt"><figcaption>result.txt</figcaption></figure>
<h2>This is the partial disclosure of bytes of information the value of «K» (NONCES)</h2>
<p><em>So our&nbsp;&nbsp;<u>secret key</u>&nbsp;&nbsp;is in&nbsp;&nbsp;<u>the range</u>&nbsp;:</em></p>
<pre class="wp-block-code"><code>K = 070239c013e8f40c8c2a0e608ae15a6b00000000000000000000000000000000
K = 070239c013e8f40c8c2a0e608ae15a6bffffffffffffffffffffffffffffffff</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/204ef79845ae3d93a9c93d43f81e484b.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<blockquote class="wp-block-quote"><p><strong>Pay attention</strong>&nbsp;to the initial&nbsp;&nbsp;<code>32</code>&nbsp;digits and letters&nbsp;&nbsp;<code>HEX</code>&nbsp;of the format, the value of the signature&nbsp;&nbsp;<code>Z</code>&nbsp;matches&nbsp;&nbsp;<em><u>the range of the secret key</u></em>&nbsp;&nbsp;, that is, the value&nbsp;<code>"K" (NONCES)</code></p></blockquote>
<h2>This is a very serious ECDSA signature error</h2>
<p>As we said above, for the Pollard kangaroo method, it is enough to know&nbsp;&nbsp;<em>the public key</em>&nbsp;&nbsp;or&nbsp;<em>&nbsp;signature</em>&nbsp;<code>R</code>&nbsp;&nbsp;value (the value&nbsp;&nbsp;<code>R</code>&nbsp;is also a kind of&nbsp;&nbsp;<em>public key</em>&nbsp;&nbsp;from&nbsp;&nbsp;<code>Nonces</code>&nbsp;because it is a coordinate point&nbsp;&nbsp;<code>x</code>&nbsp;on the elliptic curve plane&nbsp;&nbsp;<code>secp256k1</code>)</p>
<p><em>Signature</em>&nbsp;&nbsp;value&nbsp;&nbsp;<code>R</code>&nbsp;in our case:</p>
<pre class="wp-block-code"><code>R = 83fe1c06236449b69a7bee5be422c067d02c4ce3f4fa3756bd92c632f971de06</code></pre>
<p>The script&nbsp;&nbsp;<code>RangeNonce</code>&nbsp;added the&nbsp;&nbsp;<em>prefix</em>&nbsp;<code>02</code>&nbsp;we needed by &nbsp;creating a&nbsp;&nbsp;<em>compressed public key</em></p>
<pre class="wp-block-code"><code>K_PUBKEY = 0283fe1c06236449b69a7bee5be422c067d02c4ce3f4fa3756bd92c632f971de06</code></pre>
<h3>Now we have information:</h3>
<ul>
<li><em>secret key range</em></li>
<li><em>compressed public key</em></li>
</ul>
<p>Let’s use the source code to build the&nbsp;&nbsp;<a href="https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons" target="_blank" rel="noreferrer noopener"><strong>Pollard’s Kangaroo</strong></a>&nbsp;program &nbsp;from the French developer Jean-Luc PONS</p>
<blockquote class="wp-block-quote"><p>Please note that you can assemble on your own&nbsp;&nbsp;<code>CUDA</code>&nbsp;to&nbsp;&nbsp;<code>GPU</code>&nbsp;increase&nbsp;&nbsp;<strong><em><u>the speed of calculations.</u></em></strong></p></blockquote>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/afc280ae86d3febb27f1008e8927ae89.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p>We will do a normal assembly for the CPU</p>
<p><strong>Teams:</strong></p>
<pre class="wp-block-code"><code>cd /

cd content/CryptoDeepTools/06KangarooJeanLucPons/

ls</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/394eceecf11f26952a6fc87a10be2dbc.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<pre class="wp-block-code"><code>sudo apt-get update</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/2bce90cd55b48787511363f9976adbd6.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<pre class="wp-block-code"><code>sudo apt-get install g++ -y
sudo apt-get install libgmp3-dev libmpfr-dev -y</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/707e190da23fd6b83eead65bce771b5b.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p><em>After all the package installations, we will build by running a simple command:</em></p>
<pre class="wp-block-code"><code>make</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/663476ae36f13e98d23f8ee3e879b545.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/1ea932dd2bd751c24fa95821c6833523.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h2>Assembly was successful!</h2>
<pre class="wp-block-code"><code>Проверим версию:

./kangaroo -v</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/76df5253202c44d068af867a812d11db.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h4>So, we have created a version of «Kangaroo v2.2»</h4>
<p>To demonstrate the performance&nbsp;&nbsp;<code>«Kangaroo v2.2»</code>&nbsp;for&nbsp; let’s&nbsp;<code>CPU</code>raise the range and save everything to a file:&nbsp;<code>rangepubkey.txt</code></p>
<h4>Open a text file: rangepubkey.txt</h4>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/8ac477f4c2423dc5ff4cce2407481540.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<pre class="wp-block-code"><code>070239c013e8f40c8c2a0e608ae15a6b23d4a09295be678b2100000000000000
070239c013e8f40c8c2a0e608ae15a6b23d4a09295be678b21ffffffffffffff
0283fe1c06236449b69a7bee5be422c067d02c4ce3f4fa3756bd92c632f971de06</code></pre>
<pre class="wp-block-code"><code>Очистим терминал командой:

clear</code></pre>
<p>Run&nbsp;&nbsp;<code>«Kangaroo v2.2»</code>&nbsp;the result will be&nbsp;&nbsp;<em>automatically saved</em>&nbsp;&nbsp;to a file:&nbsp;<code>savenonce.txt</code></p>
<pre class="wp-block-code"><code>./kangaroo -ws -w save.work -wi 30 -o savenonce.txt rangepubkey.txt</code></pre>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/ae877a6f49f7781d70cf6a986deea751.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/5eb0b22e395bd62b5a577a37ba2bebef.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/e2d6a1e3ab4cd4bb5be0c58eed1ca6f7.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h2>The search time took 1 min.&nbsp;18 sec.</h2>
<p><em>Result in file:</em>&nbsp;<code>savenonce.txt</code></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/76bfb1f4e28f14cebba9b68c31e510ec.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<p><em>Let</em>&nbsp;‘s open the &nbsp;file:&nbsp;<code>savenonce.txt</code></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/50d1fd7aecc8ea69cdb12d8f73830d8b.png" alt="Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range"></figure>
<h3>We got the secret key, this is the value of «K» (NONCES)</h3>
<pre class="wp-block-code"><code>Key# 0 [1S]Pub:  0x0283FE1C06236449B69A7BEE5BE422C067D02C4CE3F4FA3756BD92C632F971DE06 
       Priv: 0x70239C013E8F40C8C2A0E608AE15A6B23D4A09295BE678B21A5F1DCEAE1F634 


070239C013E8F40C8C2A0E608AE15A6B23D4A09295BE678B21A5F1DCEAE1F634

K = 070239c013e8f40c8c2a0e608ae15a6b00000000000000000000000000000000 # RangeNonce
K = 070239C013E8F40C8C2A0E608AE15A6B23D4A09295BE678B21A5F1DCEAE1F634 # NONCES
K = 070239c013e8f40c8c2a0e608ae15a6bffffffffffffffffffffffffffffffff # RangeNonce</code></pre>
<h2>private key</h2>
<p>Now knowing the value,&nbsp;&nbsp;<code>"K" (NONCES)</code>&nbsp;we will&nbsp;&nbsp;<em><u>restore the private key</u></em>&nbsp;&nbsp;to the Bitcoin Address:&nbsp;&nbsp;<a href="https://btc.exan.tech/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE" target="_blank" rel="noreferrer noopener"><strong>14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE</strong></a></p>
<p>Let’s go back to the beginning, as we remember, the script&nbsp;&nbsp;<code>«RangeNonce»</code>&nbsp;revealed to us&nbsp;&nbsp;<em>information</em>&nbsp;about the range value&nbsp;&nbsp;<code>"K" (NONCES)</code>, as well as&nbsp;&nbsp;<em>information</em>&nbsp;<code>SIGNATURES</code></p>
<figure class="wp-block-image"><img title="SIGNATURES" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/d710d3fa1cf97ab16e33f7f824c2fb87.png" alt="SIGNATURES"><figcaption>SIGNATURES</figcaption></figure>
<pre class="wp-block-code"><code>R = 83fe1c06236449b69a7bee5be422c067d02c4ce3f4fa3756bd92c632f971de06
S = 7405249d2aa9184b688f5307006fddc3bd4a7eb89294e3be3438636384d64ce7
Z = 070239c013e8f40c8c2a0e608ae15a6b1bb4b8fbcab3cff151a6e4e8e05e10b7</code></pre>
<p>Get the private key using the formula in Python&nbsp;<em>script</em>&nbsp;:&nbsp;&nbsp;<a href="https://github.com/demining/CryptoDeepTools/blob/main/02BreakECDSAcryptography/calculate.py" target="_blank" rel="noreferrer noopener">calculate.py</a></p>
<figure class="wp-block-image"><img src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/b407d280edbe126f6ec21ac1c1ffa539.svg" alt="PRIVKEY = ((((S * K) - Z) * ​​modinv(R,N)) % N)"></figure>
<pre class="wp-block-code"><code><strong>def</strong> <strong>h</strong>(n):
    <strong>return</strong> hex(n).replace("0x","")

<strong>def</strong> <strong>extended_gcd</strong>(aa, bb):
    lastremainder, remainder = abs(aa), abs(bb)
    x, lastx, y, lasty = 0, 1, 1, 0
    <strong>while</strong> remainder:
        lastremainder, (quotient, remainder) = remainder, divmod(lastremainder, remainder)
        x, lastx = lastx - quotient*x, x
        y, lasty = lasty - quotient*y, y
    <strong>return</strong> lastremainder, lastx * (-1 <strong>if</strong> aa &lt; 0 <strong>else</strong> 1), lasty * (-1 <strong>if</strong> bb &lt; 0 <strong>else</strong> 1)

<strong>def</strong> <strong>modinv</strong>(a, m):
    g, x, y = extended_gcd(a, m)
    <strong>if</strong> g != 1:
        <strong>raise</strong> ValueError
    <strong>return</strong> x % m
    
N = 0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141
R = 0x83fe1c06236449b69a7bee5be422c067d02c4ce3f4fa3756bd92c632f971de06
S = 0x7405249d2aa9184b688f5307006fddc3bd4a7eb89294e3be3438636384d64ce7
Z = 0x070239c013e8f40c8c2a0e608ae15a6b1bb4b8fbcab3cff151a6e4e8e05e10b7
K = 0x070239C013E8F40C8C2A0E608AE15A6B23D4A09295BE678B21A5F1DCEAE1F634

<strong>print</strong> (h((((S * K) - Z) * modinv(R,N)) % N))</code></pre>
<p>Teams:</p>
<pre class="wp-block-code"><code>wget https://raw.githubusercontent.com/demining/CryptoDeepTools/main/02BreakECDSAcryptography/calculate.py

python3 calculate.py
</code></pre>
<figure class="wp-block-image"><img title="PRIVKEY=23d4a09295be678b21a5f1dceae1f634a69c1b41775f680ebf8165266471401b" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/8031f11893dbb7de1d90858ae8ba634a.png" alt="PRIVKEY=23d4a09295be678b21a5f1dceae1f634a69c1b41775f680ebf8165266471401b"><figcaption>PRIVKEY=23d4a09295be678b21a5f1dceae1f634a69c1b41775f680ebf8165266471401b</figcaption></figure>
<pre class="wp-block-code"><code>ADDR: 14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE
WIF:  5J64pq77XjeacCezwmAr2V1s7snvvJkuAz8sENxw7xCkikceV6e
HEX:  23d4a09295be678b21a5f1dceae1f634a69c1b41775f680ebf8165266471401b</code></pre>
<figure class="wp-block-image"><img title="Checking the private key on the bitaddress website" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/d8c78d8eb14e5246b495e09f59631e44.png" alt="Checking the private key on the bitaddress website"><figcaption>Checking the private key on the bitaddress website</figcaption></figure>
<h2>Private key found!</h2>
<figure class="wp-block-image"><img title="www.blockchain.com/btc/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE" src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/ed97dac1dc07e2bce09fe0951d9f64de.png" alt="www.blockchain.com/btc/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE"><figcaption>www.blockchain.com/btc/address/14NWDXkQwcGN1Pd9fboL8npVynD5SfyJAE</figcaption></figure>
<p>This video was created for the&nbsp;&nbsp;<a href="https://cryptodeep.ru/" target="_blank" rel="noreferrer noopener"><strong>CRYPTO DEEP TECH</strong></a>&nbsp;portal &nbsp;to ensure the financial security of data and cryptography on elliptic curves&nbsp;&nbsp;<code>secp256k1</code>&nbsp;against weak signatures&nbsp;&nbsp;<code>ECDSA</code>&nbsp;in cryptocurrency&nbsp;<code>BITCOIN</code></p>
<p><a href="https://github.com/demining/CryptoDeepTools/tree/main/06KangarooJeanLucPons" target="_blank" rel="noreferrer noopener"><strong><u>Source</u></strong></a></p>
<p><strong>Telegram:&nbsp;&nbsp;</strong><a href="https://t.me/cryptodeeptech" target="_blank" rel="noreferrer noopener"><strong>https://t.me/cryptodeeptech</strong></a></p>
<p><strong>Video:&nbsp;&nbsp;<a href="https://youtu.be/UGUJyxOhBBQ" target="_blank" rel="noreferrer noopener">https://youtu.be/UGUJyxOhBBQ</a></strong></p>
<p><strong>Source: <a href="https://cryptodeeptech.ru/kangaroo">https://cryptodeeptech.ru/kangaroo</a></strong></p>
</div>
<footer class="entry-footer">
<div class="cat-links"></div>
</footer>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<div class="cat-links"><i class="fa fa-folder-open" aria-hidden="true"></i> <a href="https://cryptodeeptech.ru/category/%d0%b1%d0%b5%d0%b7-%d1%80%d1%83%d0%b1%d1%80%d0%b8%d0%ba%d0%b8/" rel="category tag">Без рубрики</a></div>	</footer><!-- .entry-footer -->
</article><!-- #post-322 -->

	<nav class="navigation post-navigation" aria-label="Записи">
		<h2 class="screen-reader-text">Навигация по записям</h2>
		<div class="nav-links"><div class="nav-previous"><a href="https://cryptodeeptech.ru/vulnerable-openssl/" rel="prev">Search for BTC coins on earlier versions of Bitcoin Core with critical vulnerability OpenSSL 0.9.8 CVE-2008-0166</a></div><div class="nav-next"><a href="https://cryptodeeptech.ru/endomorphism/" rel="next">Speed ​​up secp256k1 with endomorphism</a></div></div>
	</nav>		<div id="itng_related_posts_wrapper">
			<h3 id="itng_related_posts_title">Related Posts</h3>
			<div class="itng-related-posts row">
				<article id="post-463" class="itng-blog col-md-6 col-lg-4 post-463 post type-post status-publish format-standard hentry category-1">
		<div class="itng-card-wrapper">
			<div class="itng-thumb">
							</div>
			
			<div class="itng-card-content">
				<div class="entry-meta">
					<a href="https://cryptodeeptech.ru/mr-robot-qr/"></a>
					<span class="byline"> <span class="author vcard"><a class="url fn n" href="https://cryptodeeptech.ru/author/cryptodeeptech/">Crypto Deep Tech</a></span></span>				</div><!-- .entry-meta -->
				
				<header class="entry-header">
					<h2 class="entry-title"><a href="https://cryptodeeptech.ru/mr-robot-qr/">MrRobotQR scan QR codes from search engines in search of private keys of Bitcoin Wallets</a></h2>				</header><!-- .entry-header -->
				
				<div class="itng_excerpt">
					We all know the phrase:&nbsp;&nbsp;"Everything that gets on the Internet, remains in it forever and becomes publicly available." Down to hidden content. The&nbsp;&nbsp;2021 году&nbsp;pandemic brought back popularity&nbsp;&nbsp;QR-кодов.&nbsp;For&nbsp; the first time&nbsp;QR-коды&nbsp;they were used in production in&nbsp;&nbsp;1994 году&nbsp;a subsidiary&nbsp;&nbsp;Toyota&nbsp;in Japan and introduced them at an assembly plant to control produced cars and parts for them.&nbsp;Unlike a barcode,&nbsp;&nbsp;QR-код&nbsp;it contains more…				</div>
				
				<div class="blog-footer">
					<div class="itng_cats">
						<a href="https://cryptodeeptech.ru/category/%d0%b1%d0%b5%d0%b7-%d1%80%d1%83%d0%b1%d1%80%d0%b8%d0%ba%d0%b8/" rel="category tag">Без рубрики</a>					</div>
					<div class="blog-comments">
						0					</div>
				</div>
			</div>
		</div>
</article><!-- #post-463 --><article id="post-82" class="itng-blog col-md-6 col-lg-4 post-82 post type-post status-publish format-standard hentry category-1">
		<div class="itng-card-wrapper">
			<div class="itng-thumb">
							</div>
			
			<div class="itng-card-content">
				<div class="entry-meta">
					<a href="https://cryptodeeptech.ru/bitcoin-wallet-silk-road/"></a>
					<span class="byline"> <span class="author vcard"><a class="url fn n" href="https://cryptodeeptech.ru/author/cryptodeeptech/">Crypto Deep Tech</a></span></span>				</div><!-- .entry-meta -->
				
				<header class="entry-header">
					<h2 class="entry-title"><a href="https://cryptodeeptech.ru/bitcoin-wallet-silk-road/">The biggest hack in the history of Bitcoin</a></h2>				</header><!-- .entry-header -->
				
				<div class="itng_excerpt">
					Bitcoin Wallet Silk Road this is probably the largest hack in the history of Bitcoin, since the balance of coins was 69,369&nbsp;&nbsp;BTC&nbsp;&nbsp;in terms of dollars, the amount exceeded more than&nbsp;&nbsp;$1 billion&nbsp;. This notorious bitcoin wallet&nbsp;&nbsp;1HQ3Go3ggs8pFnXuHVHRytPCq5fGG8Hbhx &nbsp;was tied to a darknet marketplace that was closed in 2013 and its creator, Ross Ulbricht. In 2019, an encrypted wallet.dat&nbsp;file was…				</div>
				
				<div class="blog-footer">
					<div class="itng_cats">
						<a href="https://cryptodeeptech.ru/category/%d0%b1%d0%b5%d0%b7-%d1%80%d1%83%d0%b1%d1%80%d0%b8%d0%ba%d0%b8/" rel="category tag">Без рубрики</a>					</div>
					<div class="blog-comments">
						0					</div>
				</div>
			</div>
		</div>
</article><!-- #post-82 --><article id="post-71" class="itng-blog col-md-6 col-lg-4 post-71 post type-post status-publish format-standard hentry category-1">
		<div class="itng-card-wrapper">
			<div class="itng-thumb">
							</div>
			
			<div class="itng-card-content">
				<div class="entry-meta">
					<a href="https://cryptodeeptech.ru/lattice-attack/"></a>
					<span class="byline"> <span class="author vcard"><a class="url fn n" href="https://cryptodeeptech.ru/author/cryptodeeptech/">Crypto Deep Tech</a></span></span>				</div><!-- .entry-meta -->
				
				<header class="entry-header">
					<h2 class="entry-title"><a href="https://cryptodeeptech.ru/lattice-attack/">With the help of Lattice Attack, we received a Private Key to BITCOIN</a></h2>				</header><!-- .entry-header -->
				
				<div class="itng_excerpt">
					What do we know about the lattice attack? To begin with, the&nbsp;&nbsp;elliptic curve digital signature algorithm&nbsp;(ECDSA)&nbsp;&nbsp;is a common digital signature scheme that we see in many of our code reviews.&nbsp;It has some desirable properties, but can also be very fragile to recover the private key with a side-channel attack that reveals less than one bit of the…				</div>
				
				<div class="blog-footer">
					<div class="itng_cats">
						<a href="https://cryptodeeptech.ru/category/%d0%b1%d0%b5%d0%b7-%d1%80%d1%83%d0%b1%d1%80%d0%b8%d0%ba%d0%b8/" rel="category tag">Без рубрики</a>					</div>
					<div class="blog-comments">
						0					</div>
				</div>
			</div>
		</div>
</article><!-- #post-71 -->			</div>
		</div>
			<div id="author_box" class="row no-gutters">
			<div class="author_avatar col-2">
							</div>
			<div class="author_info col-10">
				<h4 class="author_name title-font">
					Crypto Deep Tech				</h4>
				<div class="author_bio">
									</div>
			</div>
		</div>
	
	</main><!-- #main -->

<!--WCLEARFY_PAGE_TYPE_post--><!--WCLEARFY_FOOTER_START--></div><!-- #content-wrapper -->


 <div id="footer-sidebar" class="widget-area">
    <div class="container">
        <div class="row">
                    </div>
    </div>
</div>
	<footer id="colophon" class="site-footer">
		<div class="container">
			<div class="site-info">
				Donation Address: <a href="https://www.blockchain.com/btc/address/1Lw2kh9WzCActXSGHxyypGLkqQZfxDpw8v" target="_blank">♥  BTC: 1Lw2kh9WzCActXSGHxyypGLkqQZfxDpw8v</a>				<span class="sep"> | </span>
					Copyright © 2022 «CRYPTO DEEP TECH». 			</div><!-- .site-info -->
		</div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<nav id="menu" class="panel" role="navigation" style="position: fixed; top: 0px; bottom: 0px; height: 100%; left: -15.625em; width: 15.625em;">
	<div class="menu-overlay"></div>
	<div id="panel-top-bar">
		<button class="go-to-bottom"></button>
		<button id="close-menu" class="menu-link"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>
	</div>

	<ul id="menu-main" class="menu"><li class="page_item page-item-53"><a href="https://cryptodeeptech.ru/contacts/">CONTACTS</a></li>
<li class="page_item page-item-43"><a href="https://cryptodeeptech.ru/publication/">PUBLICATIONS</a></li>
<li class="page_item page-item-55"><a href="https://cryptodeeptech.ru/resources/">RESOURCES</a></li>
<li class="page_item page-item-49"><a href="https://cryptodeeptech.ru/study/">STUDY</a></li>
</ul>

	<button class="go-to-top"></button>
</nav>

<div id="sticky-navigation">
	<div class="nav-wrapper">
		 <div class="container">

			 <div class="row justify-content-end align-items-center justify-content-between no-gutters">


				<div class="main-navigation col-lg-9" role="navigation">
					<ul id="menu-desktop" class="menu"><li class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-229"><a href="https://cryptodeeptech.ru/">HOME</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-225"><a href="https://cryptodeeptech.ru/publication/">PUBLICATIONS</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-226"><a href="https://cryptodeeptech.ru/study/">STUDY</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-227"><a href="https://cryptodeeptech.ru/resources/">RESOURCES</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-page menu-item-228"><a href="https://cryptodeeptech.ru/contacts/">CONTACTS</a></li>
<li class="menu-item menu-item-type-post_type menu-item-object-post menu-item-240"><a href="https://cryptodeeptech.ru/lattice-attack/">BLOG</a></li>
</ul>				</div>

				<button href="#menu" class="menu-link mobile-nav-btn"><i class="fa fa-bars" aria-hidden="true"></i></button>

				<button type="button" id="go-to-field" tabindex="-1"></button>

				<button class="search-btn-sticky ml-auto col-auto"><i class="fa fa-search"></i></button>
				
<div class="itng-search-sticky">
	<form role="search" method="get" class="search-form" action="https://cryptodeeptech.ru/">
				<label>
					<span class="screen-reader-text">Найти:</span>
					<input type="search" class="search-field" placeholder="Поиск…" value="" name="s">
				</label>
				<input type="submit" class="search-submit" value="Поиск">
			</form>	<button type="button" id="go-to-btn" tabindex="-1"></button>
</div>

			</div>
		</div>
	</div>
</div>

<div id="itng-back-to-top" class="show"><i class="fa fa-chevron-up" aria-hidden="true"></i></div>

		<script type="text/javascript">
							jQuery("#post-322 .entry-meta .date").css("display","none");
					jQuery("#post-322 .entry-date").css("display","none");
					jQuery("#post-322 .posted-on").css("display","none");
							jQuery("#post-463 .entry-meta .date").css("display","none");
					jQuery("#post-463 .entry-date").css("display","none");
					jQuery("#post-463 .posted-on").css("display","none");
							jQuery("#post-82 .entry-meta .date").css("display","none");
					jQuery("#post-82 .entry-date").css("display","none");
					jQuery("#post-82 .posted-on").css("display","none");
							jQuery("#post-71 .entry-meta .date").css("display","none");
					jQuery("#post-71 .entry-date").css("display","none");
					jQuery("#post-71 .posted-on").css("display","none");
				</script>
	<script src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_2b1ae4cca3cc8d12c39be42768565308.js" id="big-slide-js"></script>
<script src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_ccdf893e7d8b26933af0c336bcc3943e.js" id="owl-js-js"></script>
<script src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/jquery.magnific-popup.min.js" id="mag-lightbox-js-js"></script>
<script id="itng-custom-js-js-extra">
var itng = {"toTopEnable":"1","stickyNav":""};
</script>
<script src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_ea8874ba65dbd53bf5c7fb5c619ac579.js" id="itng-custom-js-js"></script>
<script src="./Pollard&#39;s Kangaroo find solutions to the discrete logarithm secp256k1 PRIVATE KEY + NONCES in a known range - «CRYPTO DEEP TECH»_files/wmac_single_6ec0e9b3201c83a442e24aba829a5f05.js" id="itng-navigation-js"></script>
<!-- Yandex.Metrika counter --> <script type="text/javascript"> (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(89424273, "init", {  id:89424273, clickmap:true, trackLinks:true, webvisor:true, accurateTrackBounce:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/89424273" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->
<!-- Yandex.Metrika counter -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   var z = null;m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(89995532, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/89995532" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->


</body></html>