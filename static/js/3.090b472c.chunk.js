(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[3],{299:function(e,a,s){e.exports={content:"Dialogs_content__1VIii",dialogs:"Dialogs_dialogs__2xRSA",messages:"Dialogs_messages__1w_Up",messageSend:"Dialogs_messageSend__3tB2u",textarea:"Dialogs_textarea__PRKXN",button:"Dialogs_button__UnW0m"}},301:function(e,a,s){e.exports={dialog:"DialogItem_dialog__3tDA2",nameDialogItem:"DialogItem_nameDialogItem__1IDA8",avatarDialogItem:"DialogItem_avatarDialogItem__-MRoC",activeLink:"DialogItem_activeLink__1IQU6"}},302:function(e,a,s){e.exports={MessageItem:"Message_MessageItem__2sLLT",message:"Message_message__1MOXo",sender:"Message_sender__bbOdk",receiver:"Message_receiver__2Fu_w"}},307:function(e,a,s){"use strict";s.r(a);s(0);var t=s(299),n=s.n(t),i=s(301),c=s.n(i),o=s(14),m=s(1),g=function(e){var a="/dialogs/"+e.id;return Object(m.jsxs)("div",{className:c.a.dialog,children:[Object(m.jsx)("img",{className:c.a.avatarDialogItem,src:e.avatar}),Object(m.jsx)(o.b,{className:c.a.nameDialogItem,activeClassName:c.a.activeLink,to:a,children:e.name})]})},r=s(302),l=s.n(r),d=function(e){return Object(m.jsx)("div",{className:"".concat(l.a.MessageItem," ").concat(l.a[e.from]),children:Object(m.jsx)("div",{className:l.a.message,children:e.messageText})})},_=s(128),b=s(129),j=s(75),u=s(76),x=Object(u.a)(50),v=Object(b.a)({form:"dialogAddMessageForm"})((function(e){return Object(m.jsxs)("form",{onSubmit:e.handleSubmit,className:n.a.messageSend,children:[Object(m.jsx)(_.a,{component:j.b,validate:[u.b,x],name:"newMessageBody",placeholder:"Enter your message",className:n.a.textarea}),Object(m.jsx)("button",{className:n.a.button,children:"Send++++"})]})})),O=s(13),f=s(127),D=s(27),p=s(7);a.default=Object(p.d)(D.a,Object(O.b)((function(e){return{dialogs:e.dialogPage.dialogs,messagesText:e.dialogPage.messagesText}}),(function(e){return{messageSend:function(a){e(Object(f.b)(a))}}})))((function(e){var a=e.dialogs.map((function(e){return Object(m.jsx)(g,{id:e.id,name:e.name,avatar:e.avatar},e.id)})),s=e.messagesText.map((function(e){return Object(m.jsx)(d,{messageText:e.messageText,from:e.from},e.id)}));return Object(m.jsxs)("div",{className:n.a.content,children:[Object(m.jsx)("div",{className:n.a.dialogs,children:a}),Object(m.jsx)("div",{className:n.a.messages,children:Object(m.jsxs)("div",{children:[s,Object(m.jsx)(v,{onSubmit:function(a){e.messageSend(a.newMessageBody)}})]})})]})}))}}]);
//# sourceMappingURL=3.090b472c.chunk.js.map