templates=templates||{};templates.page=templates.page||{};templates.page.opml=templates.page.opml||{};(function(){var k=devhd.i18n.L,b=devhd.i18n.$L,g=[],h="",m=templates.page.opml;function j(p){var o=arguments,n;for(n=1;n<o.length;n++){p.push(o[n])}}var l,e,d,c,f,a;try{l=function(n){return devhd.s3("images/"+n)};a=function(n){return devhd.x2("images/"+n)
};e=devhd.str.toSafeHTML;d=devhd.str.toSafeAttr;c=devhd.str.stripTags;f=devhd.str.toJsEsc}catch(i){}m.layout=function(){var n=[];var o=devhd.utils.SessionUtils.load();j(n,g[0]);if(o!=null&&o.feedlyToken!=null){j(n,g[1],encodeURIComponent(o.feedlyToken),g[2])}else{j(n,g[3])}j(n,g[4]);return n.join(h)};g=[' <div style="margin-top:34px; line-height: 1.4em"> \nOPML is a format which allows you to share the sources you have collected in <br> \nyour feedly with other applications or migrate to another reader. <br/> \n<br> \n',' <a class="action" href="//cloud.feedly.com/v3/opml?feedlyToken=','" target="new">Click here to download your feedly OPML</a> \n'," Please login to be able to download your feedly OPML. \n"," \n<br> \n<br> \n<br> \n<br> \n<div> \nNote: If you have suggestions on how to improve feedly or are frustrated by a bug <br> \nplease send an email to edwin@feedly.com. We would love to try to help. \n</div> \n</div> \n"]
})();