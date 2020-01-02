"use strict"
var compo = compo || {}
compo =(()=>{
	const WHEN_ERR = 'js파일을 찾지 못했습니다.'
	let _, js, compo_vue_js, cookie_js, main_vue_js, compo_js, event_js, faq_js
	
	let init =()=>{
		_ = $.ctx()
		js = $.js()
		compo_vue_js = js + '/vue/compo_vue.js'
		main_vue_js = js + '/vue/main_vue.js'
		cookie_js = js + '/cmm/cookie.js'
		compo_js = js + '/cmm/compo.js'
		event_js = js + '/cmm/event.js'
		faq_js = js + '/cmm/faq.js'
	}
	let onCreate =x=>{
		init()
		$.when(
			$.getScript(compo_vue_js),
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
		.html(compo_vue.compo_head())
		if( x === 'compo' ){
			compo()
		}
		else{
			alert('compo 실패ㅠㅠ')
			main()
		}
	}
	
	let compo =()=>{
		$('body')
		.html(compo_vue.compo_body({img: $.img()}))
	}

	let main =()=>{
		$('body')
		.html(main_vue.main_body())
	}
	
	return { onCreate }
})()