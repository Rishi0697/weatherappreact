(this.webpackJsonpassignment_zonolith=this.webpackJsonpassignment_zonolith||[]).push([[0],{17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(11),s=c.n(a),r=(c(17),c(2)),j=(c(18),c(0));var i=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main_div",children:Object(j.jsx)("div",{className:"container text-center",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-lg-4 col-md-4 col-10 content_div mx-auto my-5 ",children:[Object(j.jsx)("lable",{htmlFor:"name",children:"Enter Your Name"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"name"}),Object(j.jsx)("br",{}),Object(j.jsx)("lable",{htmlFor:"name",children:"Enter Your Email"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"email",name:"name"}),Object(j.jsx)("br",{}),Object(j.jsx)("lable",{htmlFor:"name",children:"Enter Your Password"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"password",name:"name"}),Object(j.jsx)("br",{}),Object(j.jsx)("button",{className:"my-2",id:"btn",children:Object(j.jsx)("a",{href:"/registration",children:"Register"})})]})})})})})},l=c(5),b=c(9),m=c(3);var o=function(){var e=Object(n.useState)({name:"",password:"",phone:"",username:"",email:""}),t=Object(m.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)({}),r=Object(m.a)(s,2),i=r[0],o=r[1],d=Object(n.useState)(!1),x=Object(m.a)(d,2),O=x[0],h=x[1];Object(n.useEffect)((function(){0===Object.keys(i).length&&O&&console.log(i)}),[i]);var u=function(e){var t={};return e.name||(t.name="name is required"),t};return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"main_div",children:Object(j.jsx)("div",{className:"container text-center",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-lg-4 col-md-4 col-10 content_div mx-auto my-5",children:Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault(),o(u(c)),h(!0)},children:[Object(j.jsx)("lable",{htmlFor:"name",children:"Enter Your Name"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"name",id:"name",onChange:function(e){var t=e.target,c=t.name,n=t.value;a(Object(b.a)(Object(b.a)({},c),{},Object(l.a)({},c,n)))},value:c.name}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"text-danger",children:i.name}),Object(j.jsx)("lable",{htmlFor:"password",children:"Password"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"password",name:"password",id:"password",value:c.password}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"text-danger",children:i.password}),Object(j.jsx)("lable",{htmlFor:"phone",children:"Mobile Number"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"tel",name:"phone",id:"phone",value:c.phone}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"text-danger",children:i.phone}),Object(j.jsx)("lable",{htmlFor:"username",children:"Username"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",name:"username",id:"username",value:c.username}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"text-danger",children:i.username}),Object(j.jsx)("lable",{htmlFor:"email",children:"Email"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"email",name:"email",id:"email",value:c.email}),Object(j.jsx)("br",{}),Object(j.jsx)("p",{className:"text-danger",children:i.email}),Object(j.jsx)("button",{type:"submit",children:"Validate"}),0===Object.keys(i).length&&O?Object(j.jsx)("button",{className:"my-2 mx-4",id:"btn",children:Object(j.jsx)("a",{href:"/validate",children:"Login"})}):Object(j.jsx)("p",{className:"text-primary",children:"plese validate the form"})]})})})})})})},d=c(10),x=c.n(d),O=c(12);var h=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)("mumbai"),r=Object(m.a)(s,2),i=r[0],l=r[1];return Object(n.useEffect)((function(){var e=function(){var e=Object(O.a)(x.a.mark((function e(){var t,c,n;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=metric&appid=f9fb1617ce3c14dfdff846cb52e13fc3"),e.next=3,fetch(t);case 3:return c=e.sent,e.next=6,c.json();case 6:n=e.sent,a(n.main);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[i]),Object(j.jsx)("div",{style:{width:"100%",height:"100vh",backgroundColor:"#ABB8C3"},children:Object(j.jsx)("div",{className:"container text-center",children:Object(j.jsx)("div",{className:"row",children:Object(j.jsxs)("div",{className:"col-lg-6 col-md-6 col-10 mx-auto",children:[Object(j.jsx)("input",{type:"search",className:"my-5",onChange:function(e){l(e.target.value)},style:{borderRadius:"5px"}}),c?Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{className:"text-success",children:i}),Object(j.jsxs)("h3",{children:["Current Temp : ",c.temp,"\u2103el"]}),Object(j.jsxs)("p",{children:["max-temp : ",c.temp_max,"\u2103el"]}),Object(j.jsxs)("p",{children:["min-temp: ",c.temp_min,"\u2103el"]})]}):Object(j.jsx)("p",{children:"Data Not Found"}),Object(j.jsx)("button",{className:"my-2 mx-4",id:"btn",children:Object(j.jsx)("a",{href:"/logout",children:"Logout"})})]})})})})};var u=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{exact:!0,path:"/",element:Object(j.jsx)(i,{})}),Object(j.jsx)(r.b,{exact:!0,path:"/registration",element:Object(j.jsx)(o,{})}),Object(j.jsx)(r.b,{exact:!0,path:"/validate",element:Object(j.jsx)(h,{})}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(r.a,{to:"/"})})]})})},p=c(8),v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,22)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};s.a.render(Object(j.jsx)(p.a,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),v()}},[[21,1,2]]]);
//# sourceMappingURL=main.e690b0f0.chunk.js.map