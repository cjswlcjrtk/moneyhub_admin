var faq_vue = faq_vue || {}
faq_vue ={
	faq_head : ()=>{
		return '<head>'+
		'	<meta charset="utf-8">'+
		'	<meta http-equiv="X-UA-Compatible" content="IE=edge">'+
		'	<meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, viewport-fit=cover">'+
		'	<meta name="description" content="빠르고 저렴하게 해외로 돈을 보낼 수 있는 해외송금서비스, 중국송금, 일본송금, 싱가포르송금, 미국송금, 호주송금">'+
		'	<meta property="og:type" content="website">'+
		'	<meta property="og:title" content="머니허브(MONEYHUB) 해외송금">'+
		'	<meta property="og:description" content="빠르고 저렴하게 해외로 돈을 보낼 수 있는 해외송금서비스">'+
		'	<meta property="og:image" content="https://img.themoin.com/public/img/meta_link_thumbnail.png">'+
		'	<meta property="og:url" content="https://www.themoin.com">'+
		'	<meta name="application-name" content="머니허브(MONEYHUB) 해외송금">'+
		'	<meta name="msapplication-TileColor" content="#ffffff">'+
		'	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">'+
		'	<meta name="theme-color" content="#ffffff">'+
		'	<link rel="canonical" href="https://www.themoin.com">'+
		'	<link rel="manifest" href="https://www.themoin.com/manifest.json">'+
		'	<link rel="alternate" hreflang="ko" href="https://www.themoin.com/ko">'+
		'	<link rel="alternate" hreflang="en" href="https://www.themoin.com/en">'+
		'	<link rel="alternate" hreflang="x-default" href="https://www.themoin.com/">'+
		
		'<!-- Add a banner for Appstore link -->'+
		'	<meta name="apple-itunes-app" content="app-id=1228063143">'+
		'	<title>머니허브(MONEYHUB) 해외송금</title>'+
		
		'<!-- Bootstrap core CSS -->'+
		'	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">'+
		'	<link href="https://www.themoin.com/moin.bundle.css" rel="stylesheet">'+
		'	<script src="https://cdn.onesignal.com/sdks/OneSignalPageSDKES6.js?v=150710" async=""></script>'+
		'</head>'
	},
	faq_body : x=>{
		return `<div id="root">
		<div><nav class="themoin-header"><div><a class="logo"><img src="'+x.img+'/logo.png/"></a><div class="spacer"></div><a class="menu"><div class="line1"></div><div class="line2"></div></a><ul class=""><li><a>로그인</a></li><li><a>회원가입</a></li><li class="mobile"><div class="themoin-language-dropdown" tabindex="0"><img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg"><a> <!-- -->한국어<!-- --> </a><img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg"><ul><li><div class="spacer"></div><a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a></li><li><div class="spacer"></div><a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a></li></ul></div></li></ul><div class="language"><div class="themoin-language-dropdown" tabindex="0"><img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg"><a> <!-- -->한국어<!-- --> </a><img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg"><ul><li><div class="spacer"></div><a><img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어</a></li><li><div class="spacer"></div><a><img src="https://img.themoin.com/public/img/ic-flag-en.svg">English</a></li></ul></div></div></div></nav><div class="themoin-faq"><div><h1 class="title">안녕하세요, 무엇을 도와드릴까요?</h1><form><div class="search"><img src="https://img.themoin.com/public/img/search-new.svg" class="btn-search" type="button"><div class="moin-input"><input class="fs-block" placeholder="검색어를 입력해주세요." type="text" tabindex="0" value=""></div><p class="moin-error"></p></div></form><div class="category"><button class="selected"><div>
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="82" height="42" viewBox="0 0 82 42">
		<defs>
			<path id="a" d="M0 .229h50v36.77H0z"></path>
		</defs>
		<g fill-rule="evenodd">
			<g transform="translate(16 2.771)">
				<path d="M48.273 31.999a3.276 3.276 0 0 1-3.274 3.274H31.9a3.276 3.276 0 0 1-3.274-3.274V21.306h19.647v10.693zm-31.276.325c-5.109 0-10.219.002-15.328.005h-.106v-3.98c0-.153.027-.354.052-.494.139-.766.494-1.337 1.087-1.746.404-.28.837-.566 1.272-.742 1.434-.576 2.912-1.127 4.341-1.66l.477-.178c1.172-.437 2.385-.89 3.455-1.721 1.027-.798 1.498-1.884 1.363-3.14-.089-.83-.419-1.514-.738-2.175l-.098-.203c-.106-.224-.216-.446-.325-.668-.36-.733-.7-1.426-.952-2.148-.678-1.944-.827-4.128-.457-6.678.328-2.262 1.586-3.798 3.738-4.566a7.46 7.46 0 0 1 4.212-.242c2.206.499 3.621 1.715 4.327 3.718.331.939.363 1.947.398 3.015l.005.155c.088 2.635-.464 4.974-1.686 7.152a9.708 9.708 0 0 0-.786 1.81c-.525 1.652-.088 3.012 1.298 4.042a7.248 7.248 0 0 0 1.56.91c.947.39 1.904.748 2.786 1.067v8.142c0 .11.01.22.017.328l-9.912-.003zm31.334-12.746h-.454v-4.022c0-5.201-4.228-9.434-9.434-9.434-5.199 0-9.434 4.228-9.434 9.434a.86.86 0 0 0 .864.863.86.86 0 0 0 .863-.863c0-4.247 3.454-7.707 7.707-7.707 4.247 0 7.707 3.454 7.707 7.707v4.022H28.562c-.921 0-1.67.748-1.67 1.67v.944a61.327 61.327 0 0 1-2.19-.846c-.38-.158-.792-.4-1.223-.72-.86-.64-1.068-1.288-.741-2.315a8.162 8.162 0 0 1 .659-1.517c1.347-2.401 1.981-5.083 1.885-7.97l-.005-.154c-.037-1.14-.075-2.317-.486-3.483-.886-2.516-2.722-4.105-5.455-4.723a8.984 8.984 0 0 0-5.084.294c-2.702.964-4.347 2.974-4.759 5.813-.407 2.805-.234 5.23.529 7.417.282.812.659 1.579 1.024 2.323.107.216.213.434.318.652l.101.21c.272.566.531 1.1.591 1.663.079.727-.158 1.264-.769 1.737-.88.686-1.93 1.077-3.085 1.508l-.433.16a185.562 185.562 0 0 0-4.378 1.676c-.584.235-1.099.577-1.577.906-.938.647-1.523 1.573-1.737 2.753A4.727 4.727 0 0 0 0 28.35v4.435c0 .735.562 1.108 1.67 1.108 8.532-.006 17.064-.003 25.598 0A5.008 5.008 0 0 0 31.894 37h13.105A5.008 5.008 0 0 0 50 31.999V21.248a1.67 1.67 0 0 0-1.669-1.67z"></path>
			</g>
			<path d="M54.45 29.679a1.506 1.506 0 0 1 0 3.012 1.505 1.505 0 0 1 0-3.012m0 4.739a3.233 3.233 0 0 0 3.229-3.23 3.233 3.233 0 0 0-3.23-3.23 3.233 3.233 0 0 0-3.23 3.23 3.233 3.233 0 0 0 3.23 3.23"></path>
		</g>
		</svg>
			</div><p>가입 및 인증</p></button><button class=""><div>
		<svg width="75px" height="75px" viewBox="0 0 75 75" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
			<title>74C541E7-EFE7-4545-BEA4-0AD764E37A27</title>
			<desc>Created with sketchtool.</desc>
			<defs>
				<polygon id="path-1" points="0 0.0004 74.9998 0.0004 74.9998 75 0 75"></polygon>
			</defs>
			<g id="송금스텝" stroke="none" stroke-width="1" fill-rule="evenodd">
				<g id="Remitform_IDCheck_KR_Default_HD" transform="translate(-683.000000, -325.000000)">
					<g id="Group-6" transform="translate(683.000000, 325.000000)">
						<g id="Group-3">
							<mask id="mask-2" fill="white">
								<use xlink:href="#path-1"></use>
							</mask>
							<g id="Clip-2"></g>
							<path d="M37.4998,72.5804 C18.1558,72.5804 2.4198,56.8434 2.4198,37.5004 C2.4198,28.9134 5.5248,21.0414 10.6668,14.9364 C11.3098,15.7904 12.1558,16.9574 12.5808,17.7274 C12.7718,18.1224 12.8968,18.6694 13.0548,19.3604 C13.4738,21.1984 14.1058,23.9754 16.9038,27.3114 C17.4738,27.9864 18.3428,28.5074 19.2628,29.0584 C20.5818,29.8494 22.0778,30.7454 22.9488,32.2684 C24.5688,35.1544 25.8898,35.4834 27.4198,35.8654 L27.5118,35.8894 C28.1138,36.0394 28.7638,35.9514 29.3898,35.8684 C30.7058,35.6914 31.5428,35.6424 32.1378,36.8084 C33.0918,38.6014 34.2708,39.7564 35.1488,39.7564 L35.1618,39.7564 C35.5088,39.7514 35.7948,39.5724 35.9608,39.2384 C36.4018,38.2104 34.5648,35.0274 32.7658,34.2054 C32.0508,33.8784 31.3378,33.8004 30.7108,33.7314 C29.7458,33.6264 28.9848,33.5434 28.3518,32.6574 C28.0898,32.3144 28.0168,31.9574 28.1298,31.5664 C28.3878,30.6664 29.5368,29.8074 30.2668,29.5334 C31.3378,29.1314 33.4218,29.4214 33.7708,29.8994 C34.3388,30.6724 35.2028,31.8434 36.2528,31.6414 C36.5728,31.6014 36.7298,31.4164 36.7968,31.3094 C37.0228,30.9404 36.8608,30.4854 36.6368,29.8554 C36.3998,29.1934 36.0768,28.2874 36.1448,27.3124 C36.2288,25.5194 40.2198,21.9574 43.4268,19.0954 L43.8708,18.6994 C45.0928,17.6074 45.6248,16.6274 45.4988,15.7004 C45.2798,14.1014 43.2108,13.0824 40.5918,11.7914 C40.1928,11.5954 39.7818,11.3924 39.3638,11.1814 C38.0498,10.5174 37.0918,10.3954 36.4338,10.8104 C35.5138,11.3914 35.5438,12.7584 35.5678,13.8574 C35.5768,14.2374 35.5898,14.8124 35.5398,14.9234 C35.1038,15.4204 32.5278,15.4524 30.2788,14.1874 C29.6858,13.8654 28.9638,13.3094 28.8998,12.4914 C28.8398,11.6994 29.4178,10.7784 30.4908,9.9624 C32.2268,8.6124 32.9198,7.6104 32.6728,6.8094 C32.4078,5.9524 31.2368,5.8794 30.8428,5.8544 C29.8248,5.8084 28.2638,6.1704 26.6018,6.5494 C25.0998,6.8904 22.5858,7.4644 22.2238,7.1754 C22.2018,7.1204 22.2028,7.0814 22.2288,7.0254 C22.5388,6.3374 24.9178,5.4894 27.2198,4.6704 L28.1808,4.3254 C31.6488,3.0764 36.1408,5.4704 37.1068,6.8144 C38.3478,8.5404 39.5528,10.1014 40.6618,10.2544 C41.0008,10.3014 41.3158,10.2154 41.5768,10.0074 C41.6428,9.9534 41.7138,9.8984 41.7888,9.8424 C42.3368,9.4244 43.1648,8.7924 43.0898,7.8294 C43.0128,6.8464 42.0178,5.8684 39.9538,4.7514 C37.9098,3.6544 37.4308,2.8564 37.3508,2.4234 C37.3998,2.4234 37.4498,2.4194 37.4998,2.4194 C40.4048,2.4194 43.2268,2.7804 45.9278,3.4494 C45.6068,4.4944 45.5288,6.2134 46.5818,8.8874 C47.2308,10.5334 48.0038,11.4304 48.9448,11.6294 C49.0768,11.6564 49.2088,11.6704 49.3388,11.6704 C50.5118,11.6704 51.5858,10.6054 52.4668,9.7334 C52.7098,9.4944 52.9398,9.2644 53.1578,9.0724 C53.9368,8.3884 55.5928,8.2674 56.9368,8.3134 C60.9248,10.9784 64.3328,14.4394 66.9438,18.4644 C66.3258,19.5814 65.4858,21.4294 65.7678,22.8374 C65.9958,23.9784 66.7678,24.5834 67.3878,25.0684 C68.0198,25.5634 68.2518,25.7894 68.1848,26.1944 C68.1458,26.4294 68.1448,26.4344 67.6738,26.5234 C66.8958,26.6734 65.5938,26.9224 64.2218,29.3794 C62.8648,31.8384 62.6988,35.0994 63.8158,37.3074 C64.4348,38.5294 65.3948,39.2844 66.5278,39.4334 C66.8138,39.4644 67.1078,39.4774 67.4058,39.4774 C69.2568,39.4774 71.2518,38.9264 72.5558,38.4834 C72.0318,57.3724 56.5138,72.5804 37.4998,72.5804 M37.4998,0.0004 C16.8218,0.0004 -0.0002,16.8224 -0.0002,37.5004 C-0.0002,58.1774 16.8218,75.0004 37.4998,75.0004 C58.1778,75.0004 74.9998,58.1774 74.9998,37.5004 C74.9998,16.8224 58.1778,0.0004 37.4998,0.0004" id="Fill-1" mask="url(#mask-2)"></path>
						</g>
						<path d="M52.1727,42.5931 C49.7987,42.0481 49.2747,41.5711 48.0057,40.4171 C47.7677,40.2001 47.5067,39.9631 47.2017,39.6971 C45.1997,37.9881 41.5187,37.5491 41.1107,37.5051 C39.8957,37.2311 38.7857,37.5641 37.9027,38.4711 C36.1977,40.2231 35.6757,43.7751 36.2577,45.9911 C36.7767,48.0061 38.1937,49.1321 39.3307,50.0371 C39.9557,50.5341 40.4957,50.9641 40.6877,51.3911 C41.1777,52.4851 40.4517,57.4311 39.8807,60.2921 C39.8087,60.6521 39.6827,61.0861 39.5497,61.5461 C38.9597,63.5781 38.1517,66.3641 39.9637,68.8501 C40.7737,69.9611 41.5297,70.5041 42.2687,70.5041 C42.3277,70.5041 42.3887,70.5001 42.4477,70.4931 C43.1897,70.4051 43.6487,69.7501 43.8017,69.3781 C43.8927,69.1581 43.8107,68.9061 43.6097,68.7811 C42.3237,67.9881 42.3827,66.8791 43.1887,64.1551 C43.7727,62.2261 45.1307,61.0721 46.5687,59.8511 C46.9197,59.5541 47.2677,59.2581 47.6067,58.9481 C49.3467,57.3101 52.9657,51.9531 54.8027,48.8771 C55.7827,47.2351 56.0377,45.8511 55.5627,44.7631 C55.0947,43.6971 53.9507,42.9661 52.1727,42.5931" id="Fill-4"></path>
					</g>
				</g>
			</g>
		</svg>
			</div><p>국가별 안내</p></button><button class=""><div>
		<svg xmlns="http://www.w3.org/2000/svg" width="82" height="42" viewBox="0 0 82 42">
			<g fill-rule="evenodd">
				<path d="M51.11 39.286c-10.083 0-18.285-8.204-18.285-18.285 0-10.084 8.202-18.287 18.285-18.287s18.286 8.203 18.286 18.287c0 10.081-8.203 18.285-18.286 18.285m0-38.287c-11.028 0-20 8.974-20 20.002 0 11.027 8.972 19.998 20 19.998 11.029 0 20-8.971 20-19.998 0-11.028-8.971-20.002-20-20.002"></path>
				<path d="M51.055 34.337c-7.384 0-13.392-6.007-13.392-13.391S43.67 7.554 51.055 7.554c7.385 0 13.393 6.008 13.393 13.392 0 7.384-6.008 13.39-13.393 13.39m0-28.491c-8.326 0-15.102 6.774-15.102 15.1 0 8.328 6.776 15.102 15.102 15.102 8.327 0 15.102-6.774 15.102-15.101 0-8.327-6.775-15.101-15.102-15.101"></path>
				<path d="M54.17 23.094l-.167 2.656h-.138l-.359-2.656-.139-.968h.886l-.083.968zm-3.737-2.063l.277-3.177h.14l.302 3.177h-.719zm-2.104 2.063l-.332 2.656h-.138l-.166-2.656-.083-.968h.858l-.139.968zm9.245-7.914h-2.713l-.498 5.85h-1.162l-.747-5.042h-3.182l-.665 5.043H47.5l-.582-5.851h-2.96l1.106 5.904-1.218.054v.988h1.44l1.134 6.048h3.128l.775-6.048h.941l.831 6.048h3.293l1.024-6.048h1.273V21.03h-1.107l.996-5.851zM18.439 16.809h9.887v-2h-9.887v2zm10.427-3H17.9c-.298 0-.54.314-.54.7v2.6c0 .386.242.7.54.7h10.966c.298 0 .54-.314.54-.7v-2.6c0-.386-.242-.7-.54-.7zM18.439 28.989h9.887v-2h-9.887v2zm10.427-3.001H17.9c-.298 0-.54.315-.54.7v2.6c0 .386.242.7.54.7h10.966c.298 0 .54-.314.54-.7v-2.6c0-.385-.242-.7-.54-.7zM12.081 22.899h13.538v-2H12.081v2zm14.618.3v-2.601c0-.386-.242-.7-.54-.7H11.541c-.298 0-.541.314-.541.7v2.6c0 .387.243.7.541.7h14.618c.298 0 .54-.313.54-.7z"></path>
			</g>
		</svg>
			</div><p>송금신청</p></button><button class=""><div>
		<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="82" height="42" viewBox="0 0 82 42">
			<defs>
				<path id="a" d="M0 40h78.793V.094H0v39.239z"></path>
			</defs>
			<g fill="none" fill-rule="evenodd">
				<g transform="translate(2 1)">
					<path stroke-width="1.3" d="M71.906 22.007c-2.178 0-3.786.768-4.884 1.854v-1.459h-6.305V38.78h6.305v-7.975c0-1.812 1.316-3.723 2.702-3.723.727 0 .97.527.97 1.35V38.78h6.304v-11.6c0-2.8-1.282-5.173-5.092-5.173M22.683 22.007c-2.286 0-4.226.988-5.196 2.603-.762-1.911-2.563-2.603-4.676-2.603-1.917 0-3.588.696-4.711 1.873v-1.478H1.796V38.78H8.1v-7.909c0-2.076 1.455-3.79 2.667-3.79.727 0 .97.56.97 1.55v10.15h6.235v-7.91c0-2.076 1.455-3.79 2.667-3.79.728 0 .97.56.97 1.55v10.15h6.304V27.608c0-3.724-1.8-5.602-5.23-5.602"></path>
					<path stroke-width="1.3" d="M51.33 38.78h6.304V22.402H51.33zM43.19 8.889c.685-4.523 4.801-8 9.776-8 5.454 0 9.875 4.179 9.875 9.333 0 5.155-4.421 9.334-9.875 9.334-4.3 0-7.958-2.598-9.313-6.223h-24.8v5.334H1.794v-16h17.057v6.222h24.339zm9.776-1.913c-1.897 0-3.435 1.453-3.435 3.246s1.538 3.247 3.435 3.247 3.435-1.454 3.435-3.247-1.538-3.246-3.435-3.246zm-45.2 6.09h5.116v-4.8H7.765v4.8z"></path>
				</g>
				<path stroke-width="1.3" d="M41.5 28.196a3.305 3.305 0 1 1-.001 6.61 3.305 3.305 0 0 1 .001-6.61M32 31.5a9.5 9.5 0 0 0 9.5 9.5 9.5 9.5 0 0 0 9.5-9.5 9.5 9.5 0 0 0-9.5-9.5 9.5 9.5 0 0 0-9.5 9.5"></path>
			</g>
		</svg>
			</div><p>모인 소개</p></button></div><div class="content"><div><div class="question"><p>가상계좌 입금 방법</p><img class="" src="https://img.themoin.com/public/img/btn-open-list.png"></div><div class="answer"><p> <span>가상계좌 입금오류 발생시 아래 목록을 확인해주세요.
		<br></span><span>
		<br></span><span>1. 모인에 등록하신 은행계좌의 모바일뱅킹/인터넷뱅킹/텔레뱅킹을 통해 이체해야 합니다.
		<br></span><span>(토스, 카카오페이, 페이코 등 간편송금 서비스 이용불가 - 전액 자동반환)
		<br></span><span>2. 모인에 인증한 계좌에서 출금해주세요.
		<br></span><span>(인증 계좌변경 가능 - 단, 운영시간에만)
		<br></span><span>3. 은행 합병 전 구 계좌, 평생계좌는 이용이 불가합니다. *기업은행 개인사업자 계좌는 이용이 불가할 수 있음*
		<br></span><span>4. 신청시 안내된 한화금액을 1원단위까지 정확하게 이체해야 합니다.
		<br></span><span>5. 신청 후 1시간 이내로 이체되지 않은 건은 만료가 되어 자동취소됩니다. 1시간 이내로 이체를 완료해주세요.
		<br></span><span>6. 광주은행 점검시간(오후 11:30 - 오전 12:30)에는 입금이 불가하오니 해당 시간대를 피해주세요.
		<br></span><span>7. 은행창구 또는 ATM으로는 입금이 불가합니다.
		<br></span><span>
		<br></span><span>*하나라도 해당사항이 있을 경우 이체가 완료되지 않으니 주의하시기 바랍니다.* <br></span></p><p>최종 수정시각 : 2019-07-16 17:04</p></div></div><div><div class="question"><p>회원가입은 어떻게 하나요?</p><img class="" src="https://img.themoin.com/public/img/btn-open-list.png"></div><div class="answer"><p> <span>1. "회원가입" 버튼을 누르고 회원가입 시작화면으로 이동합니다.
		<br></span><span>2. 이메일 주소만으로도 가입 가능하며, 네이버나 페이스북 아이디로도 간편가입이 가능합니다. 
		<br></span><span>원하시는 방법을 선택하여 가입을 진행합니다.
		<br></span><span>(단, 간편가입으로 가입하는 경우 가입시 로그인한 계정을 꼭 미리 확인 부탁드립니다) 
		<br></span><span>3. 이용약관, 개인정보 취급방침을 읽어보신 뒤, 동의란에 확인을 하시면 회원가입이 완료됩니다.<br></span></p><p>최종 수정시각 : 2019-06-28 21:00</p></div></div><div><div class="question"><p>개인정보 및 계정정보는 안전하게 보호되나요?</p><img class="" src="https://img.themoin.com/public/img/btn-open-list.png"></div><div class="answer"><p> <span>네, 물론입니다.
		<br></span><span>고객님의 소중한 개인정보와 계정정보는 모두 암호화됩니다.
		<br></span><span>
		<br></span><span>개인정보 취급방침 전문은 아래 페이지에서 확인 가능합니다.
		<br></span><span>https://www.themoin.com/privacy<br></span></p><p>최종 수정시각 : 2019-06-28 21:00</p></div></div><div><div class="question"><p>회원정보 또는 계정정보를 변경하고 싶습니다.</p><img class="" src="https://img.themoin.com/public/img/btn-open-list.png"></div><div class="answer"><p> <span>&lt;WEB&gt;
		<br></span><span>로그인 후 홈페이지 우측 상단의 "내 계정 관리" - "회원 정보" 에서 수정 가능합니다.
		<br></span><span>
		<br></span><span>&lt;APP&gt;
		<br></span><span>로그인 후 메인 화면 좌측 상단의 "≡ 아이콘" - "내 정보 관리" 에서 수정 가능합니다.<br></span></p><p>최종 수정시각 : 2019-06-28 21:00</p></div></div><div><div class="question"><p>비밀번호를 잊어버려서 변경하고 싶습니다.</p><img class="" src="https://img.themoin.com/public/img/btn-open-list.png"></div><div class="answer"><p> <span>&lt;WEB&gt;
		<br></span><span>홈페이지 우측 상단의 "로그인" - "비밀번호를 잊어버리셨나요?" - "비밀번호 찾기" 에서 가입한 메일주소를 입력하시면 비밀번호 재설정 안내 메일이 발송됩니다. 메일을 확인해주세요.
		<br></span><span>
		<br></span><span>&lt;APP&gt;
		<br></span><span>비밀번호 변경은 WEB으로 접속하여 변경하셔야 합니다.<br></span></p><p>최종 수정시각 : 2019-06-28 21:00</p></div></div><div><div class="question"><p>(법인) 송금 신청 절차가 어떻게 되나요?</p><img class="" src="https://img.themoin.com/public/img/btn-open-list.png"></div><div class="answer"><p> <span>법인의 회원가입 절차는 다음과 같습니다.
		<br></span><span>
		<br></span><span>1. 회사 이메일로 회원가입을 합니다 (반드시 회사 이메일을 기재해주세요)
		<br></span><span>2. 신분증 사진으로 사업자등록증을 올립니다 (법인 정보를 정확히 확인할 수 있어야 합니다)
		<br></span><span>3. 마지막으로, 등록한 회사 이메일로 아래 서류를 corporate@themoin.com 으로 보냅니다.
		<br></span><span>신청 서류 및 필수 정보 : 주주 명부, 통장사본, 대표자 신분증 그리고 대표 혹은 담당자 성함 및 회사 이메일
		<br></span><span>*계좌 인증은 실제로 이체하실 법인 명의의 계좌로 진행해주세요!*
		<br></span><span>
		<br></span><span>*개인 사업자인 경우*
		<br></span><span>'개인'과 동일하게 송금 신청 절차를 진행하시면 됩니다.<br></span></p><p>최종 수정시각 : 2019-06-28 21:00</p></div></div><div><div class="question"><p>(일반) 송금 신청 절차가 어떻게 되나요?</p><img class="" src="https://img.themoin.com/public/img/btn-open-list.png"></div><div class="answer"><p> <span>모인 송금 신청 절차는 다음과 같이 이뤄집니다
		<br></span><span>
		<br></span><span>1. 회원가입 or 로그인 (이메일 혹은 페이스북이나 네이버 간편 아이디로 회원가입 가능)
		<br></span><span>2. 신청 송금액 입력 (원화, 엔화, 위안화, 싱가포르 달러, 미국 달러 모두 입력 가능) 
		<br></span><span>3. 송금인 정보 입력
		<br></span><span>4. 신분증 및 계좌 인증 (서비스 이용 시 최초 1회에만 해당)
		<br></span><span>5. 수취인 정보 입력
		<br></span><span>6. 가상 계좌 입금
		<br></span><span>7. 서류 검토 후 송금 진행 <br></span></p><p>최종 수정시각 : 2019-06-28 21:00</p></div></div><div><div class="question"><p>나의 휴대폰번호 SMS인증이 안됩니다.</p><img class="" src="https://img.themoin.com/public/img/btn-open-list.png"></div><div class="answer"><p> <span>휴대폰번호 SMS 인증이 안되는 경우 아래 사항을 확인해주세요. 
		<br></span><span>
		<br></span><span>1) 입력한 연락처에 오탈자는 없는지 확인 
		<br></span><span>2) 모인 문자를 수신할 수 있는 환경인지 확인 
		<br></span><span>
		<br></span><span>일부 일본 통신사의 경우(예: 와이모바일 등) 문자알림 전송이 안될 수 있습니다.  
		<br></span><span>이 경우, 본인의 한국휴대폰 번호로 인증시도를 하시거나 임시로  
		<br></span><span>가족 등 가까운 지인의 전화번호로 인증시도를 해주세요. 
		<br></span><span>
		<br></span><span>그래도 인증이 어려운 경우, 모인 웹/앱 우측 하단의 "상담하기"를 통해 문의해주세요. 
		<br></span><span>모인 운영시간(평일 오전9시~오후7시)에 연락을 주시면 빠르게 답변드립니다.<br></span></p><p>최종 수정시각 : 2019-06-28 21:00</p></div></div><div><div class="question"><p>본인인증은 어떻게 하고, 무엇을 준비해야 하나요?</p><img class="" src="https://img.themoin.com/public/img/btn-open-list.png"></div><div class="answer"><p> <span>모인은 외국환거래법에 따라 본인 인증 절차를 필수적으로 밟고 있습니다.
		<br></span><span>
		<br></span><span>&lt;신분증 인증&gt;
		<br></span><span>내국인 : 주민등록증 또는 운전면허증 
		<br></span><span>외국인 : 여권 또는 한국 운전면허증
		<br></span><span>미성년자 : 학생증과 주민등록등본 (두 서류가 모두 확인되어야 합니다)
		<br></span><span>
		<br></span><span>&lt;계좌 인증&gt;
		<br></span><span>신청금액을 이체할 고객님 명의의 한국 출금계좌를 인증하는 단계입니다.
		<br></span><span>금액을 이체할 계좌의 은행이름, 계좌정보를 입력하시면 됩니다.
		<br></span><span>인증 및 등록하실 출금계좌의 명의는 고객님의 신분증명과 동일해야 합니다.
		<br></span><span>(인터넷뱅킹, 모바일뱅킹 등 비대면 서비스 이용이 가능한 계좌인지 꼭 확인해주세요)
		<br></span><span>
		<br></span><span>
		<br></span><span>*아래 목록의 계좌는 이용이 불가하오니 확인 부탁드립니다*
		<br></span><span>평생계좌 / 은행 합병 전 구 계좌 / 핸드폰번호 계좌 / 증권계좌<br></span></p><p>최종 수정시각 : 2019-06-28 21:00</p></div></div><div><div class="question"><p>모인 App도 있나요?</p><img class="" src="https://img.themoin.com/public/img/btn-open-list.png"></div><div class="answer"><p> <span>모인 앱은 안드로이드와 iOS 두 버전 모두 있습니다.
		<br></span><span>구글 플레이 스토어나 앱스토어에서 &lt;모인&gt;, &lt;해외송금 모인&gt;, 또는 &lt;MOIN&gt;을 검색하시면 됩니다.<br></span></p><p>최종 수정시각 : 2019-06-28 21:00</p></div></div><div><div class="question"><p>세금계산서도 발급 되나요?</p><img class="" src="https://img.themoin.com/public/img/btn-open-list.png"></div><div class="answer"><p> <span>저희 모인은 현재 금융업자로 등록된 사업체이며 은행법에 의거한 외환 업무를 영위하는 조직입니다.
		<br></span><span>
		<br></span><span>[부가가치세법 제3장 제2절 면세 편]
		<br></span><span>제26조(재화 또는 용역의 공급에 대한 면세)
		<br></span><span>① 다음 각 호의 재화 또는 용역의 공급에 대하여는 부가가치세를 면제한다.
		<br></span><span>11. 금융 보험 용역으로서 대통령령으로 정하는 것
		<br></span><span>
		<br></span><span>제40조(면세하는 금융ㆍ보험 용역의 범위)
		<br></span><span>① 법 제26조제1항제11호에 따른 금융ㆍ보험 용역은 다음 각 호의 용역, 사업 및 업무에 해당하는 역무로 한다.
		<br></span><span>1. 「은행법」에 따른 은행업무 및 부수업무로서 다음 각 목의 용역
		<br></span><span>다. 내국환ㆍ외국환
		<br></span><span>
		<br></span><span>위 법령에 근거하여 모인의 서비스는 면세대상입니다. 즉 세금계산서가 발급되지 않습니다.
		<br></span><span>
		<br></span><span>거래 증빙이 필요하신 경우, 송금명세서를 발급은 해드리고 있사오니 메일 혹은 채팅으로 문의 부탁드립니다.<br></span></p><p>최종 수정시각 : 2019-06-28 21:00</p></div></div></div></div></div><div class="themoin-footer"><div><div class="section top"><div class="contact"><h3>언어별 고객 센터</h3><h3 class="phone ko">한국어<!-- --> <br> 02-2088-1583 / 070-5089-2017</h3><p><span>평일 : 09:00 ~ 19:00 (주말/공휴일 휴무)</span><br>팩스 : 0504-393-9687<br>이메일 : support@themoin.com<br>카카오톡 플러스친구 : @모인 MOIN</p><h3 class="phone np">नेपाली<!-- --> <br> 070-4367-0297</h3><p><span>Weekday : 12:45 ~ 21:45</span><br>email : support_nepal@themoin.com</p><h3 class="business">비즈니스 및 제휴 문의 <br> 070-4367-0113</h3></div><div class="spacer"></div><div class="social"><h3 class="desktop">Follow Us</h3><a href="https://www.facebook.com/moincompany" target="new"><img src="https://img.themoin.com/public/img/btn-facebook.svg"><span class="desktop">모인 페이스북 페이지</span></a><a href="http://blog.naver.com/moin_company" target="new"><img src="https://img.themoin.com/public/img/btn-blog.svg"><span class="desktop">모인 네이버 블로그</span></a><a href="https://plus.kakao.com/home/ne7qlhac" target="new"><img src="https://img.themoin.com/public/img/btn-kakaotalk.svg"><span class="desktop">모인 카카오톡 플러스친구</span></a></div><div class="spacer"></div><div class="links"><h3 class="desktop">Company</h3><a class="caption">회사 소개</a><a class="caption">서비스 소개</a><a class="caption">이용약관</a><a class="caption">개인정보 취급방침</a><a class="caption">F A Q</a><a class="caption">공지사항</a><h3 class="event-univ">학생 및 기관 할인</h3><a class="caption">학생 및 기관 할인등록 페이지</a></div></div><div class="section bottom"><div class="company"><img src="https://img.themoin.com/public/img/footer-logo-2.svg"><p>(주)모인 | 대표이사 : 서일석 | 사업자등록번호 : 636-81-00400<br>소액해외송금업 등록번호 : 2018-2<br>주소 : 서울시 서초구 서초대로 78길 22 홍우2빌딩 613호<br>© 2016 MOIN, Inc. All Rights Reserved.</p></div><div class="spacer"></div></div></div></div><div style="display:none"></div></div></div>
			<div id="popup-root"></div>
			
			<div id="moin-ch-plugin-root"></div>
			<script src="/moin.bundle.js"></script>
			<script src="https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js"></script>
		</body>`
	}
}