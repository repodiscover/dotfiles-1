"use strict";(function(){var c=devhd.pkg("pages");var e=c.BasePage.prototype;var d=c.createClass("OpmlPage",c.BasePage);var a=devhd.log.get("page.opml");var b=devhd.i18n.L;d.initialize=function(f){e.initialize.call(this);this.guid=f};d.service=function(g,f){this.pageInfo=g;this.width=f.width;this.initBase(f);this.startRenderHTML()};d.destroy=function(){this.pageElem.className=this.pageElem.className.replace(" editMode","");
this.destroyBase()};d.allowsSideArea=function(){return false};d.allowsPageHeader=function(){return true};d.startRenderHTML=function(){this.feedly.clearNbrPages();this.feedly.pushContext({uri:"opml",pageNumber:this.pageInfo.pageNumber,title:"OPML",level:1});this.feedly.setPageTitle("OPML");this.pageElem.innerHTML=templates.page.opml.layout()}})();