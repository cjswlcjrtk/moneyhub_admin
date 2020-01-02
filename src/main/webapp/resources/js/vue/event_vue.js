var event_vue = event_vue || {}
event_vue ={
	event_head : ()=>{
		return '<head>'+
		'	<meta charset="utf-8">'+
		'	<meta name="viewport" content="initial-scale=1.0, minimum-scale=1.0, width=device-width, user-scalable=no">'+
		'	<meta name="format-detection" content="telephone=no">'+
		'	<meta name="description" content="머니허브 이벤트">'+
		'	<meta property="og:description" content="머니허브 이벤트">'+
		'	<meta property="og:type" content="website">'+
		'	<meta property="og:title" content="머니허브 이벤트">'+
		'	<meta property="og:url" content="https://www.kakaobank.com/events">'+
		'	<meta property="og:image" content="https://www.kakaobank.com/products_static/images/common/kakaobank_og_img.png">'+
		'	<meta property="og:site_name" content="www.kakaobank.com">'+
		'	<title>이벤트 | 머니허브</title>'+
		'	<link rel="icon" href="/products_static/images/common/B16.gif" sizes="16x16">'+
		'	<link rel="icon" href="/products_static/images/common/B96.gif" sizes="96x96">'+
		'	<link rel="icon" href="/products_static/images/common/B120.gif" sizes="120x120">'+
		'	<link rel="icon" href="/products_static/images/common/B256.gif" sizes="256x256">'+
		'<!-- Google Tag Manager -->'+
		'	<script src="https://connect.facebook.net/signals/config/394144084521930?v=2.9.15&amp;r=stable" async=""></script>'+
		'	<script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>'+
		'	<script type="text/javascript" async="" src="//static.criteo.net/js/ld/ld.js"></script>'+
		'	<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>'+
		'	<script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-NNBFK9V"></script>'+
		'<!-- End Google Tag Manager -->'+
		'	<link href="https://www.kakaobank.com/products_static/css/common/pc.css" rel="stylesheet" type="text/css">'+
		'	<link href="https://www.kakaobank.com/products_static/css/event/list/style.css" rel="stylesheet" type="text/css">'+
		'<!-- Bootstrap core CSS -->'+
		'	<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css" rel="stylesheet">'+
		'	<link href="https://www.themoin.com/moin.bundle.css" rel="stylesheet">'+
		'	<script src="https://cdn.onesignal.com/sdks/OneSignalPageSDKES6.js?v=150710" async=""></script>'+
		'</head>'
	},
	event_body : x=>{
		return '  <div id="mArticle">'+
		'	<nav class="themoin-header">'+
		'		<div>'+
		'			<a class="logo" href="">'+
		'				<img src="'+x.img+'/logo.png/">'+
		'			</a>'+
		'			<div class="spacer"></div>'+
		'			<a class="menu">'+
		'				<div class="line1"></div>'+
		'				<div class="line2"></div>'+
		'			</a>'+
		'			<ul class="">'+
		'				<li>'+
		'					<a>로그인</a>'+
		'				</li>'+
		'				<li>'+
		'					<a>회원가입</a>'+
		'				</li>'+
		'				<li class="mobile">'+
		'					<div class="themoin-language-dropdown" tabindex="0">'+
		'						<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'						<a> <!-- -->한국어<!-- --> </a>'+
		'						<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'						<ul>'+
		'							<li>'+
		'								<div class="spacer"></div>'+
		'								<a>'+
		'									<img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어'+
		'								</a>'+
		'							</li>'+
		'							<li>'+
		'								<div class="spacer"></div>'+
		'								<a>'+
		'									<img src="https://img.themoin.com/public/img/ic-flag-en.svg">English'+
		'								</a>'+
		'							</li>'+
		'						</ul>'+
		'					</div>'+
		'				</li>'+
		'			</ul>'+
		'			<div class="language">'+
		'				<div class="themoin-language-dropdown" tabindex="0">'+
		'					<img class="ic-flag" src="https://img.themoin.com/public/img/ic-flag-ko.svg">'+
		'					<a> <!-- -->한국어<!-- --> </a>'+
		'					<img class="btn-open-list-blue" src="https://img.themoin.com/public/img/btn-open-list-blue.svg">'+
		'					<ul>'+
		'						<li>'+
		'							<div class="spacer"></div>'+
		'							<a>'+
		'								<img src="https://img.themoin.com/public/img/ic-flag-ko.svg">한국어'+
		'							</a>'+
		'						</li>'+
		'						<li>'+
		'							<div class="spacer"></div>'+
		'							<a>'+
		'								<img src="https://img.themoin.com/public/img/ic-flag-en.svg">English'+
		'							</a>'+
		'						</li>'+
		'					</ul>'+
		'				</div>'+
		'			</div>'+
		'		</div>'+
		'	</nav>'+
		'    <h1 class="screen_out">이벤트 목록</h1>'+
		'    <div class="event-list">'+
		'      <ul class="tab-event" role="tablist">'+
		'          <li class="item on"><a href="?expired=false" class="link" role="tab" aria-selected="true">진행중 이벤트</a></li>'+
		'          <li class="item"><a href="?expired=true" class="link" role="tab" aria-selected="false">종료된 이벤트</a></li>'+
		'      </ul>'+
		'      <div class="tab-event-content">'+
		'          <ul id="listEvent" class="list-event" data-list-cnt="30">'+
		'              <li class="item1" style="margin: 0 0 0 210px">'+
		'                  <a href="" class="linkthumb" target="_blank">'+
		'					<img src="'+x.img+'/event1.jpg/" alt="머니허브 sns 이벤트" class="img" style="width:50%"></a>'+
		'                  <em class="emph">#머니허브 #머니허브sns이벤트</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="" target="_blank">머니허브 sns 이벤트</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-12-30">2019.12.30</time>'+
		'                  ~ <time datetime="2020-03-31">2020.03.31</time>'+
		'                </span>'+
		'              </li><br/><br/>'+
		'              <li class="item1" style="margin: 0 0 0 210px">'+
		'                  <a href="" class="linkthumb" target="_blank">'+
		'					<img src="'+x.img+'/event2.jpg/" alt="머니허브 첫 송금 시 1만원 페이백" class="img" style="width:50%"></a>'+
		'                  <em class="emph">#머니허브 #머니허브페이백 #머니허브송금</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="" target="_blank">머니허브 첫 송금 시 1만원 페이백</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-12-30">2019.12.30</time>'+
		'                  ~ <time datetime="2020-03-31">2020.03.31</time>'+
		'                </span><br/><br/>'+
		'              </li>'+
/* 		'              <li class="item ">'+
		'                  <a href="https://www.kakaobank.com/events/8" class="link-thumb" target="_blank"><img src="https://og.kakaobank.io/view/f6e32b1f-ac92-4844-a162-1cc1e2bb6762" alt="머니허브 체크카드로 결제하면, 입장료 50% 할인" class="img"></a>'+
		'                  <em class="emph">#체크카드 #라뜰리에</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="https://www.kakaobank.com/events/8" target="_blank">머니허브 체크카드로 결제하면, 입장료 50% 할인</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-11-01">2019.11.01</time>'+
		'                  ~ <time datetime="2019-12-31">12.31</time>'+
		'                </span>'+
		'              </li>'+
		'              <li class="item ">'+
		'                  <a href="https://www.kakaobank.com/events/5" class="link-thumb" target="_blank"><img src="https://og.kakaobank.io/view/f730a33f-0520-4d13-aa4f-49156db9795b" alt="머니허브 주식계좌 개설하기 이벤트 연장" class="img"></a>'+
		'                  <em class="emph">#주식계좌 #한국투자증권</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="https://www.kakaobank.com/events/5" target="_blank">머니허브 주식계좌 개설하기 이벤트 연장</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-08-01">2019.08.01</time>'+
		'                  ~ <time datetime="2019-12-31">12.31</time>'+
		'                </span>'+
		'              </li>'+ */
		'              <li class="item1" style="margin: 0 0 0 210px">'+
		'                  <a href="" class="linkthumb" target="_blank">'+
		'					<img src="'+x.img+'/event3.jpg/" alt="머니허브 회원가입 시 별다방 커피 증정 이벤트" class="img" style="width:50%"></a>'+
		'                  <em class="emph">#머니허브 #머니허브회원가입 #머니허브커피</em>'+
		'                  <div class="tit-area">'+
		'                    <strong class="tit"><a href="" target="_blank">머니허브 회원가입 시 별다방 커피 증정 이벤트</a></strong>'+
		'                  </div>'+
		'                <span class="datetime">'+
		'                  <time datetime="2019-12-30">2019.12.30</time>'+
		'                  ~ <time datetime="2020-03-31">2020.03.31</time>'+
		'                </span><br/><br/>'+
		'              </li>'+
		'          </ul>'+
		'      </div>'+
		'    </div>'+
		'  </div>'+
		'</main>'+
		'<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js");fbq("init","394144084521930");fbq("set","agent","tmgoogletagmanager","394144084521930");fbq("track","PageView");</script>'+
		'<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=394144084521930&amp;ev=PageView&amp;noscript=1"></noscript>'+
		'<div id="appPopup" class="layer-popup" role="alertdialog" aria-modal="true">'+
		'  <div class="box">'+
		'    <strong class="tit">머니허브 앱에서<br> 확인 가능합니다.</strong>'+
		'    <a href="javascript:;" class="btn-confirm" role="button" data-close="true">확인</a>'+
		'  </div>'+
		'</div>'+
		'<div id="checkPopup" class="layer-popup" role="alertdialog" aria-modal="true">'+
		'  <div class="box">'+
		'    <strong class="tit">당첨 개별공지 이벤트입니다.</strong>'+
		'    <p class="desc">당첨된 분께는 입력한 연락처로<br>개별 안내드렸습니다.</p>'+
		'    <a href="javascript:;" class="btn-confirm" role="button" data-close="true">확인</a>'+
		'  </div>'+
		'</div>'+
		'<div class="themoin-footer">'+
		'					<div> '+
		'						<div class="section top">   '+
		'    						<div class="contact">   '+
		'        						<h3>언어별 고객 센터</h3>   '+
		'        						<h3 class="phone ko">'+
		'									한국어 '+
		'            						<br>'+
		'									02-333-3333 / 070-123-4567'+
		'        						</h3>'+
		'        					<p>'+
		'								<span>평일 : 09:00 ~ 18:00 (주말/공휴일 휴무)</span>'+
		'            					<br>'+
		'								팩스 : 0504-123-4567'+
		'            					<br>'+
		'								이메일 : support@moneyhub.com'+
		'            					<br>'+
		'								카카오톡 플러스친구 : @머니허브 MONEYHUB'+
		'        					</p>'+
		'        					<h3 class="phone np">नेपाली  '+
		'            					<br>'+
		'								070-123-4567'+
		'							</h3>'+
		'   				     <p>'+
		'							<span>Weekday : 12:45 ~ 21:45</span>'+
		'            				<br>'+
		'							email : abc@moneyhub.com'+
		'        				</p>'+
		'        				<h3 class="business">'+
		'							비즈니스 및 제휴 문의'+
		'            				<br>'+
		'							070-123-4567'+
		'						</h3>'+
		'    				</div>'+
		'    				<div class="spacer"></div>'+
		'    				<div class="social">'+
		'        				<h3 class="desktop">Follow Us</h3>'+
		'        				<a href="https://www.facebook.com/moincompany" target="new">'+
		'        					<img src="https://img.themoin.com/public/img/btn-facebook.svg">'+
		'        					<span class="desktop">머니허브 페이스북 페이지</span>'+
		'        				</a>'+
		'        				<a href="http://blog.naver.com/moin_company" target="new">'+
		'        					<img src="https://img.themoin.com/public/img/btn-blog.svg">'+
		'      					  	<span class="desktop">머니허브 네이버 블로그</span>'+
		'        				</a>'+
		'        				<a href="https://plus.kakao.com/home/ne7qlhac" target="new">'+
		'        					<img src="https://img.themoin.com/public/img/btn-kakaotalk.svg">'+
		'        					<span class="desktop">머니허브 카카오톡 플러스</span>'+
		'        				</a>'+
		'    				</div>'+
		'    				<div class="spacer"></div>'+
		'    				<div class="links">'+
		'    					<h3 class="desktop">Company</h3>'+
		'        				<a id="compo" class="caption">회사 소개</a>'+
		'        				<a class="caption">서비스 소개</a>'+
		'        				<a class="caption">이용약관</a>'+
		'        				<a class="caption">개인정보 취급방침 </a>'+
		'        				<a class="caption">F A Q</a>'+
		'        				<a id="event" class="caption">이벤트 페이지</a>'+
		'        				<a class="caption">공지사항 </a>'+
		'    				</div>'+
		'				</div>'+
		'				<div class="section bottom">'+
		'					<div class="company">'+
		'						<p>'+
		'							(주)머니허브 | 대표이사 : 양현미 | 사업자등록번호 : 123-45-67890'+
		'							<br>'+
		'							소액해외송금업 등록번호 : 2019-12'+
		'							<br>'+
		'							주소 : 서울시 마포구 백범로 23 구프라자 3층'+
		'							<br>'+
		'							© 2019 MONEYHUB, Inc. All Rights Reserved.'+
		'						</p>'+
		'					</div>'+
		'					<div class="spacer">'+
		'				</div>'+
		'			</div>'+
		'		</div>'+
		'		<div style="display:none"></div>'+
		'	</div>'+
		'</div>'+
		'</body>'
	}
}