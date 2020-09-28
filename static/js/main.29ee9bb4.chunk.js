(this["webpackJsonpreact-hw-03-phonebook"]=this["webpackJsonpreact-hw-03-phonebook"]||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(16)},,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(6),o=n.n(r),l=n(7),i=n(1),u=n(2),s=n(4),m=n(3),f=(n(13),n(14),function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleFormSubmit=function(e){if(e.preventDefault(),!t.state.name.trim()||!t.state.number.trim())return alert("Fields Name and Number are required!"),!1;t.props.onAddContact(t.state.name,t.state.number),t.setState({name:"",number:""})},t.handleChangeName=function(e){t.setState({name:e.target.value})},t.handleChangeNumber=function(e){t.setState({number:e.target.value})},t}return Object(u.a)(n,[{key:"render",value:function(){return c.a.createElement("form",{className:"contact-form",onSubmit:this.handleFormSubmit},c.a.createElement("label",{className:"contact-form__label"},"Name",c.a.createElement("input",{className:"contact-form__text-input",type:"text",value:this.state.name,onChange:this.handleChangeName})),c.a.createElement("label",{className:"contact-form__label"},"Number",c.a.createElement("input",{className:"contact-form__text-input",type:"text",value:this.state.number,onChange:this.handleChangeNumber})),c.a.createElement("button",{className:"contact-form__submit-btn"},"Add contact"))}}]),n}(a.Component)),h=(n(15),function(t){var e=t.id,n=t.name,a=t.number,r=t.onDeleteContact;return c.a.createElement("li",{className:"contact-item"},n,": ",a," ",c.a.createElement("button",{className:"contact-item__delete-btn",onClick:function(){return r(e)}},"Delete"))}),d=function(t){var e=t.list,n=t.onDeleteContact;return c.a.createElement("ul",null,e.map((function(t){return c.a.createElement(h,{key:t.id,id:t.id,name:t.name,number:t.number,onDeleteContact:n})})))},b=function(t){var e=t.onFilterChange;return c.a.createElement("label",null,"Find contacts by name",c.a.createElement("input",{type:"text",onChange:function(t){return e(t.target.value)}}))},p=n(18),C=function(t){Object(s.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleAddContact=function(e,n){if(-1!==t.state.contacts.findIndex((function(t){return t.name===e})))return alert("".concat(e," is already in contacts")),!1;t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[{id:Object(p.a)(),name:e,number:n}])}}))},t.handleFilterChange=function(e){t.setState({filter:e})},t.handleDeleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.getFilteredList=function(){return t.state.filter?t.state.contacts.filter((function(e){return e.name.toLocaleLowerCase().includes(t.state.filter.toLocaleLowerCase())})):t.state.contacts},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){e.contacts!==this.state.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){return c.a.createElement("div",{className:"app-root"},c.a.createElement("h1",null,"Phonebook"),c.a.createElement(f,{onAddContact:this.handleAddContact}),c.a.createElement("h1",null,"Contacts"),c.a.createElement(b,{onFilterChange:this.handleFilterChange}),c.a.createElement(d,{list:this.getFilteredList(),onDeleteContact:this.handleDeleteContact}))}}]),n}(a.Component);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.29ee9bb4.chunk.js.map