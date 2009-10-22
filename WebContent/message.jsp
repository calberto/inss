<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ taglib prefix="s" uri="struts-tags" %>

<s:if test="hasActionMessages()">
	<br>
	<s:iterator value="actionMessages">
		<s:property/>
	</s:iterator>
	<br><br>
</s:if>