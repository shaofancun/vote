/*! admin-1.0.0 2016-04-15 */
"use strict";$(function(){});var uTab=$(".user_tab").find("li"),ulist=$(".votes_list");uTab.each(function(a,b){$(b).click(function(){$(this).hasClass("check")||(uTab.removeClass("check"),$(this).addClass("check")),ulist.hide(),ulist.eq(a).show()})}),$(".det").click(function(){$(this).next().slideToggle(100)}),$("i.home").click(function(){var a=$(this).attr("url");window.location.href=a});