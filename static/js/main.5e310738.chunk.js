(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{34:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),r=n(10),o=n.n(r),s=(n(34),n(6)),u=n(2),i=Object(u.b)("contacts/fetchContactsRequest"),l=Object(u.b)("contacts/fetchContactsSuccess"),b=Object(u.b)("contacts/fetchContactsError"),d=Object(u.b)("contacts/addContactRequest"),j=Object(u.b)("contacts/addContactSuccess"),f=Object(u.b)("contacts/addContactError"),h=Object(u.b)("contacts/deleteContactRequest"),m=Object(u.b)("contacts/deleteContactSuccess"),O=Object(u.b)("contacts/deleteContactError"),p=Object(u.b)("contacts/changeFilter"),C=n(8),v=function(t){return t.contacts.filter},g={getFilter:v,getFilteredContacts:Object(C.a)([function(t){return t.contacts.items},v],(function(t,e){var n=e.toLowerCase();return t.filter((function(t){return t.name.toLowerCase().includes(n)}))}))},x=n(1),N=Object(s.b)((function(t){return{value:g.getFilter(t)}}),(function(t){return{onChange:function(e){return t(p(e.target.value))}}}))((function(t){var e=t.value,n=t.onChange;return Object(x.jsx)("div",{className:"filter",children:Object(x.jsxs)("label",{className:"label",children:["Find contacts by name:",Object(x.jsx)("input",{className:"input",type:"text",value:e,onChange:n})]})})})),y=n(14),S=n.n(y),k=n(24),F=n(9),w=n.n(F);w.a.defaults.baseURL="http://localhost:4040";var A,q=function(t,e){return function(n){var c={name:t,number:e};n(d()),w.a.post("/contacts",c).then((function(t){var e=t.data;return n(j(e))})).catch((function(t){return n(f(t))}))}},D=function(t){return function(e){e(h()),w.a.delete("/contacts/".concat(t)).then((function(){return e(m(t))})).catch((function(t){return e(O(t))}))}},L=function(){return function(){var t=Object(k.a)(S.a.mark((function t(e){var n,c;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(i()),t.prev=1,t.next=4,w.a.get("/contacts");case 4:n=t.sent,c=n.data,e(l(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(b(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()},z=(n(61),Object(s.b)((function(t){return{filteredContacts:g.getFilteredContacts(t)}}),(function(t){return{onDeleteContact:function(e){return t(D(e))}}}))((function(t){var e=t.filteredContacts,n=t.onDeleteContact;return console.log("re-render")||Object(x.jsx)("ul",{className:"contact-list",children:e.map((function(t){var e=t.name,c=t.number,a=t.id;return Object(x.jsxs)("li",{className:"contact-item",children:[Object(x.jsxs)("span",{className:"contact-name",children:[e," : "]}),Object(x.jsxs)("span",{className:"contact-number",children:[" ",c]}),Object(x.jsx)("button",{className:"button contact-item__button",onClick:function(){return n(a)},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]},a)}))})}))),E=n(5),R=n(25),P=n(26),T=n(29),Z=n(28),B=(n(62),n(63),function(t){Object(T.a)(n,t);var e=Object(Z.a)(n);function n(){var t;Object(R.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,c=n.name,a=n.value;t.setState(Object(E.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,c=n.name,a=n.number;t.props.onSubmit(c,a),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(P.a)(n,[{key:"componentDidMount",value:function(){this.props.fetchContacts()}},{key:"render",value:function(){return Object(x.jsxs)("form",{className:"contacts-form",onSubmit:this.handleSubmit,children:[Object(x.jsxs)("label",{className:"label",children:["Name",Object(x.jsx)("input",{className:"input",value:this.state.name,onChange:this.handleChange,placeholder:"Name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:" ",required:!0})]}),Object(x.jsxs)("label",{className:"label",children:["Number",Object(x.jsx)("input",{className:"input",value:this.state.number,onChange:this.handleChange,type:"tel",name:"number",placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(x.jsx)("button",{className:"button add",type:"submit",children:"Add contact"})]})}}]),n}(c.Component)),I=Object(s.b)(null,(function(t){return{onSubmit:function(e,n){return t(q(e,n))},fetchContacts:function(){return t(L())}}}))(B),J=function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("h1",{children:"Phonebook"}),Object(x.jsx)(I,{}),Object(x.jsx)("h2",{children:"Contacts"}),Object(x.jsx)(N,{}),Object(x.jsx)(z,{})]})},M=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,66)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),r(t),o(t)}))},_=n(11),U=n(27),$=n.n(U),G=n(7),H=n(3),K=Object(u.c)([],(A={},Object(E.a)(A,l,(function(t,e){return e.payload})),Object(E.a)(A,j,(function(t,e){var n=e.payload;if(!t.map((function(t){return t.name})).includes(n.name))return[n].concat(Object(_.a)(t));alert("".concat(n.name," is already in contacts"))})),Object(E.a)(A,m,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),A)),Q=Object(u.c)("",Object(E.a)({},p,(function(t,e){return e.payload}))),V=Object(u.c)(null,{}),W=Object(H.b)({items:K,filter:Q,error:V}),X=[].concat(Object(_.a)(Object(u.d)({serializableCheck:{ignoredActions:[G.a,G.f,G.b,G.c,G.d,G.e]}})),[$.a]),Y=Object(u.a)({reducer:{contacts:W},middleware:X,devTools:!1});o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(s.a,{store:Y,children:Object(x.jsx)(J,{})})}),document.getElementById("root")),M()}},[[65,1,2]]]);
//# sourceMappingURL=main.5e310738.chunk.js.map