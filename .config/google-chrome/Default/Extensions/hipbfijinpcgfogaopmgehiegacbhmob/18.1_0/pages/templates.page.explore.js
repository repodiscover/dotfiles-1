templates=templates||{};templates.page=templates.page||{};templates.page.explore=templates.page.explore||{};(function(){var k=devhd.i18n.L,b=devhd.i18n.$L,g=[],h="",m=templates.page.explore;function j(p){var o=arguments,n;for(n=1;n<o.length;n++){p.push(o[n])}}var l,e,d,c,f,a;try{l=function(n){return devhd.s3("images/"+n)};a=function(n){return devhd.x2("images/"+n)
};e=devhd.str.toSafeHTML;d=devhd.str.toSafeAttr;c=devhd.str.stripTags;f=devhd.str.toJsEsc}catch(i){}m.css=function(o){var n=[];j(n,g[0],202-2*10,g[1],138-10-5,g[2],feedlyTheme.ma_links,g[3]);return n.join(h)};m.title=function(q,p){var n=[];j(n,g[4]);var o="";switch(q){case"en-US":o="English";break;case"de":o="German";break;case"ja":o="Japanese";break;
case"fr":o="French";break;case"it":o="Italian";break;case"es":o="Spanish";break;default:}j(n,g[5]);if(q!="en-US"){j(n,g[6])}j(n,g[7]);return n.join(h)};m.layout=function(t,s){var p=[];j(p,g[8]);for(var q=0;q<t.length;q++){j(p,g[9],t[q].label,g[10],t[q].visual,g[11],t[q].id,g[12],t[q].id,g[13],d(t[q].id),g[14],t[q].label,g[15],t[q].label,g[16],t[q].id,g[17],l("pixel.png"),g[18]);
for(var o=0;o<t[q].subscriptions.length&&o<3;o++){var r=t[q].subscriptions[o];var n=n=devhd.utils.WebUtils.getFavIconURL(r.website);j(p,g[19],d(r.id),g[20],d(r.id),g[21],d(r.title),g[22],r.id,g[23]);j(p,m.follow(r.id,r.subscribed));j(p,g[24],n,g[25],e(r.title),g[26])}j(p,g[27],t[q].id,g[28])}j(p,g[29]);return p.join(h)};m.follow=function(n,p){var o=[];
if(p!=true){j(o,g[30],d(n),g[31])}else{j(o,g[32],d(n),g[33])}return o.join(h)};g=[" \n.explore .topic \n{ \nwidth : 202px; \nmargin-right : 17px; \nmargin-bottom : 51px; \nline-height : 22px; \nfloat : left; \noverflow : hidden; \n} \n.explore .dot \n{ \nwidth : ","px; \nheight : ","px; \ncolor : #FFFFFF; \npadding : 10px; \npadding-top : 5px; \ntext-shadow : 1px 1px 1px rgba( 0, 0, 0, 0.5 ); \nfont-size : 16px; \nline-height : 24px; \n-webkit-background-size : cover; \n-moz-background-size : cover; \nbackground-size : cover; \nbackground-position : center center; \ncursor : pointer; \nfont-family : DINWebPro-Condensed, sans-serif; \ntext-transform : uppercase; \n} \n.explore .suggestion \n{ \nline-height : 18px; \nheight : 18px; \noverflow : hidden; \npadding-top : 3px; \npadding-bottom : 4px; \nmargin-top : 4px; \nmargin-bottom : 4px; \nborder-bottom : 1px dotted #EAEAEA; \ncursor : pointer; \ncolor : ","; \n} \n.explore .followAllButton \n{ \nfloat : right; \nmargin : -6px; \npadding : 6px; \nmargin-top : -4px; \npadding-top : 2px; \nfont-size : 24px; \nfont-weight : normal; \n} \n.explore .followButton \n{ \ncolor : #909090; \npadding-left : 8px; \npadding-right : 8px; \nmargin-top : -6px; \npadding-top : 6px; \npadding-bottom : 5px; \nfont-size : 18px; \nwidth : 15px; \ntext-align : center; \n} \n.explore .followDone \n{ \nfont-size : 12px; \nfont-weight : normal; \ndisplay : inline-block; \n} \n.explore .followButton:hover \n{ \nbackground-color : #EFEFEA; \n} \n"," \nFeedly \n",'\n<span class="hhint"> \nA News Reader for Creative Minds \n',' See also <span class="action" data-uri="explore/en-US">English edition</span> \n'," </span> \n",' \n<div class="explore" style="margin-right:-34px; margin-top:51px"> \n',' <div class="topic" data-followCategory="','"> \n<div class="dot" style="background-image:url( ',' ); background-color:#F1F1EF" data-uri="mix/','"> \n<div class="essentialFollow promptLogin followAllButton" data-essentialId="','" data-follow="essential" data-followId="','" title="+add all ',' suggestions"> \n+ \n</div> \n','<br/> \n<img class="essentialIndicator" data-essentialId="','" src="','" style="width:0px; height:6px; padding:2px; background-color:rgba( 255, 255, 255, 0.6 ); border: 1px solid #FFFFFF; opacity:0; margin-top:88px"/> \n</div> \n<div> \n','\n<div class="suggestion" data-uri="subscription/','" data-followId="','" data-followTitle="','"> \n<div class="followHolder" data-feedId="','" style="float:right; margin-top:-3px"> \n','\n</div> \n<img src="','" width="16" height="16" align="top" style="margin-right:3px" /> \n'," \n</div> \n",' <div class="suggestion" data-uri="mix/','" style="border-bottom:0px"> \nMore \n</div> \n</div> \n</div> \n'," </div> \n",' <div class="promptLogin followButton" data-follow="feed" data-followId="','">+</div> \n',' <div class="followButton" data-remove-feedId="','">-</div> \n']
})();