"use strict"
var event = event || {}
event =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, event_vue_js, cookie_js, main_vue_js, compo_js, event_js, faq_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		event_vue_js = js + '/vue/event_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		cookie_js = js + '/cmm/cookie.js'
		compo_js = js + '/cmm/compo.js'
		event_js = js + '/cmm/event.js'
		faq_js = js + '/cmm/faq.js'
	}
	let onCreate =x=>{
		init()
		$.when(
			$.getScript(event_vue_js),
			$.getScript(main_vue_js),
			$.getScript(cookie_js),
			$.getScript(compo_js),
			$.getScript(event_js),
			$.getScript(faq_js)
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

			$('#faq')
			.click(()=>{
				faq.onCreate('faq')
			})

		})
		.fail(()=>{
			alert(WHEN_ERR)
		})
	}
	
	let setContentView =x=>{
		$('head')
		.html(event_vue.event_head())
		if( x === 'event' ){
			event()
		}
		else{
			alert('이벤트 실패..ㅠㅠ')
			main()
		}
	}
	
	let event =()=>{
		$('body')
		.html(event_vue.event_body({img: $.img()}))
		
	}
	
	return { onCreate }
})()