"use strict"
var faq = faq || {}
faq =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, faq_vue_js, cookie_js, main_vue_js, compo_js, event_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		faq_vue_js = js + '/vue/faq_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		cookie_js = js + '/cmm/cookie.js'
		compo_js = js + '/cmm/compo.js'
		event_js = js + '/cmm/event.js'
	}
	let onCreate =x=>{
		init()
		$.when(
			$.getScript(faq_vue_js),
			$.getScript(main_vue_js),
			$.getScript(cookie_js),
			$.getScript(compo_js),
			$.getScript(event_js)
		)
		.done(()=>{
			setContentView(x)
			
			$('#compo')
			.click(()=>{
				compo.onCreate('compo')
			})

			$('#event')
			.click(()=>{
				event.onCreate('event')
			})

		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =x=>{
		$('head')
		.html(faq_vue.faq_head())
		if( x === 'faq' ){
			faq()
		}
		else{
			alert('compo 실패ㅠㅠ')
			main()
		}
	}
	
	let faq =()=>{
		$('body')
		.html(faq_vue.faq_body({img: $.img()}))
	}

	let main =()=>{
		$('body')
		.html(main_vue.main_body())
	}
	
	return { onCreate }
})()