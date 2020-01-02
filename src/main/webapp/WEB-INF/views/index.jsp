<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<title>Document</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/app.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/router.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/main_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/auth_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/event_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/vue/compo_vue.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/cmm/cookie.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin/adminIndex.js"></script>
	<script src="<%=application.getContextPath()%>/resources/js/admin_vue/adminIndex_vue.js"></script>
		
	<!-- Bootstrap core JavaScript-->
	<script src="<%=application.getContextPath()%>/resources/vendor/jquery/jquery.min.js"></script>
	<script src="<%=application.getContextPath()%>/resources/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
	<!-- Core plugin JavaScript-->
	<script src="<%=application.getContextPath()%>/resources/vendor/jquery-easing/jquery.easing.min.js"></script>
	<!-- Custom scripts for all pages-->
	<script src="<%=application.getContextPath()%>/resources/js/sb-admin-2.min.js"></script>
	
</head>
<body>
	<div id="wrapper">
	</div>
	<script>
		app.run('<%=application.getContextPath()%>')
	</script>
</body>
</html>