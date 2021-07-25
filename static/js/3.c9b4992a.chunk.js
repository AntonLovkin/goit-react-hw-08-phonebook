(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[3],{85:function(t,e,n){},86:function(t,e,n){},87:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var c=n(5),a=n(32),r=n(33),u=n(35),s=n(34),o=n(0),i=n(12),l=n(16),b=n.n(l),j=n(22),h=n(18),f=n.n(h),m=n(20),d=function(t,e){return function(n){var c={name:t,number:e};n(Object(m.b)()),f.a.post("/contacts",c).then((function(t){var e=t.data;return n(Object(m.c)(e))})).catch((function(t){return n(Object(m.a)(t))}))}},p=function(t){return function(e){e(Object(m.f)()),f.a.delete("/contacts/".concat(t)).then((function(){return e(Object(m.g)(t))})).catch((function(t){return e(Object(m.e)(t))}))}},O=function(){return function(){var t=Object(j.a)(b.a.mark((function t(e){var n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(Object(m.i)()),t.prev=1,t.next=4,f.a.get("/contacts");case 4:n=t.sent,c=n.data,e(Object(m.j)(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(Object(m.h)(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},v=(n(85),n(86),n(1)),x=function(t){Object(u.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,u=new Array(r),s=0;s<r;s++)u[s]=arguments[s];return(t=e.call.apply(e,[this].concat(u))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,r=n.value;t.setState(Object(c.a)({},a,r))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number;t.props.onSubmit(c,a),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(v.jsxs)("form",{className:"contacts-form",onSubmit:this.handleSubmit,children:[Object(v.jsxs)("label",{className:"label",children:["Name",Object(v.jsx)("input",{className:"input",value:this.state.name,onChange:this.handleChange,placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:" ",required:!0})]}),Object(v.jsxs)("label",{className:"label",children:["Number",Object(v.jsx)("input",{className:"input",value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(v.jsx)("button",{className:"button add",type:"submit",children:"Add contact"})]})}}]),n}(o.Component),g=Object(i.b)(null,(function(t){return{onSubmit:function(e,n){return t(d(e,n))},fetchContacts:function(){return t(O())}}}))(x),C=n(24),N=function(t){return t.contacts.filter},k={getFilter:N,getFilteredContacts:Object(C.a)([function(t){return t.contacts.items},N],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},y=Object(i.b)((function(t){return{value:k.getFilter(t)}}),(function(t){return{onChange:function(e){return t(Object(m.d)(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(v.jsx)("div",{className:"filter",children:Object(v.jsxs)("label",{className:"label",children:["Find contacts by name:",Object(v.jsx)("input",{className:"input",type:"text",value:e,onChange:n})]})})})),w=(n(87),Object(i.b)((function(t){return{filteredContacts:k.getFilteredContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(p(e))}}}))((function(t){var e=t.filteredContacts,n=t.onDeleteContact;return console.log("re-render")||Object(v.jsx)("ul",{className:"contact-list",children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(v.jsxs)("li",{className:"contact-item",children:[Object(v.jsxs)("span",{className:"contact-name",children:[e," : "]}),Object(v.jsxs)("span",{className:"contact-number",children:[" ",c]}),Object(v.jsx)("button",{className:"button contact-item__button",onClick:function(){return n(a)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},a)}))})})));e.default=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("h1",{children:"Phonebook"}),Object(v.jsx)(g,{}),Object(v.jsx)("h2",{children:"Filter"}),Object(v.jsx)(y,{}),Object(v.jsx)("h2",{children:"Contacts"}),Object(v.jsx)(w,{})]})}}}]);
//# sourceMappingURL=3.c9b4992a.chunk.js.map