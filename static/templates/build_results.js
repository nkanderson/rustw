!function(){var l=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n.build_results=l({1:function(l,n,a,e,s){var r,i;return'<div id="div_message">\n'+(null!=(i=null!=(i=a.rustw_message||(null!=n?n.rustw_message:n))?i:a.helperMissing,r="function"==typeof i?i.call(null!=n?n:{},{name:"rustw_message",hash:{},data:s}):i)?r:"")+"\n</div>\n"},3:function(l,n,a,e,s){var r,i,t=null!=n?n:{},d=a.helperMissing,p="function",u=l.escapeExpression;return'        <div class="div_diagnostic div_'+u((i=null!=(i=a.level||(null!=n?n.level:n))?i:d,typeof i===p?i.call(t,{name:"level",hash:{},data:s}):i))+'">\n            <span class="level_'+u((i=null!=(i=a.level||(null!=n?n.level:n))?i:d,typeof i===p?i.call(t,{name:"level",hash:{},data:s}):i))+'">'+u((i=null!=(i=a.level||(null!=n?n.level:n))?i:d,typeof i===p?i.call(t,{name:"level",hash:{},data:s}):i))+"</span>\n"+(null!=(r=a["if"].call(t,null!=n?n.code:n,{name:"if",hash:{},fn:l.program(4,s,0),inverse:l.noop,data:s}))?r:"")+'            : <span class="err_msg">'+(null!=(i=null!=(i=a.message||(null!=n?n.message:n))?i:d,r=typeof i===p?i.call(t,{name:"message",hash:{},data:s}):i)?r:"")+"</span>\n"+(null!=(r=l.invokePartial(e.src_snippet,n,{name:"src_snippet",data:s,indent:"            ",helpers:a,partials:e,decorators:l.decorators}))?r:"")+"\n"+(null!=(r=a["if"].call(t,null!=n?n.children:n,{name:"if",hash:{},fn:l.program(7,s,0),inverse:l.noop,data:s}))?r:"")+"        </div>\n"},4:function(l,n,a,e,s){var r,i=l.lambda,t=l.escapeExpression;return'            <span class="err_code" '+(null!=(r=a["if"].call(null!=n?n:{},null!=(r=null!=n?n.code:n)?r.explanation:r,{name:"if",hash:{},fn:l.program(5,s,0),inverse:l.noop,data:s}))?r:"")+' code="'+t(i(null!=(r=null!=n?n.code:n)?r.code:r,n))+'">'+t(i(null!=(r=null!=n?n.code:n)?r.code:r,n))+"</span>\n"},5:function(l,n,a,e,s){var r;return'explain="'+l.escapeExpression(l.lambda(null!=(r=null!=n?n.code:n)?r.explanation:r,n))+'"'},7:function(l,n,a,e,s){var r;return'            <div class="group_children">\n            <span class="expand_children small_button"></span>\n            <span class="div_children_dots">...</span>\n            <span class="div_children">\n'+(null!=(r=a.each.call(null!=n?n:{},null!=n?n.children:n,{name:"each",hash:{},fn:l.program(8,s,0),inverse:l.noop,data:s}))?r:"")+"            </span>\n            </div>\n"},8:function(l,n,a,e,s){var r,i,t=null!=n?n:{},d=a.helperMissing,p="function",u=l.escapeExpression;return'                <span class="div_diagnostic_nested div_'+u((i=null!=(i=a.level||(null!=n?n.level:n))?i:d,typeof i===p?i.call(t,{name:"level",hash:{},data:s}):i))+'">\n                    <span class="level_'+u((i=null!=(i=a.level||(null!=n?n.level:n))?i:d,typeof i===p?i.call(t,{name:"level",hash:{},data:s}):i))+'">'+u((i=null!=(i=a.level||(null!=n?n.level:n))?i:d,typeof i===p?i.call(t,{name:"level",hash:{},data:s}):i))+'</span>: <span class="err_msg">'+(null!=(i=null!=(i=a.message||(null!=n?n.message:n))?i:d,r=typeof i===p?i.call(t,{name:"message",hash:{},data:s}):i)?r:"")+"</span>\n"+(null!=(r=l.invokePartial(e.src_snippet,n,{name:"src_snippet",data:s,indent:"                    ",helpers:a,partials:e,decorators:l.decorators}))?r:"")+"                </span><br>\n"},10:function(l,n,a,e,s){return"            <pre>"+l.escapeExpression(l.lambda(n,n))+"</pre>\n"},compiler:[7,">= 4.0.0"],main:function(l,n,a,e,s){var r,i=null!=n?n:{};return(null!=(r=a["if"].call(i,null!=n?n.rustw_message:n,{name:"if",hash:{},fn:l.program(1,s,0),inverse:l.noop,data:s}))?r:"")+'\n<div id="div_errors">\n    <span id="expand_errors" class="small_button"></span> <span id="div_std_label">errors:</span>\n'+(null!=(r=a.each.call(i,null!=n?n.errors:n,{name:"each",hash:{},fn:l.program(3,s,0),inverse:l.noop,data:s}))?r:"")+'</div>\n\n<div id="div_stdout">\n    <span id="expand_messages" class="small_button"></span> <span id="div_std_label">info:</span>\n    <div id="div_messages">\n'+(null!=(r=a.each.call(i,null!=n?n.messages:n,{name:"each",hash:{},fn:l.program(10,s,0),inverse:l.noop,data:s}))?r:"")+"    </div>\n</div>\n"},usePartial:!0,useData:!0})}();