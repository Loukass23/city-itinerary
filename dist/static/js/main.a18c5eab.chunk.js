(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{273:function(e,t,a){},303:function(e,t,a){e.exports=a.p+"static/media/Berlin.0878793e.jpg"},411:function(e,t,a){e.exports=a(720)},416:function(e,t,a){},417:function(e,t,a){},688:function(e,t,a){},720:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(295),l=a.n(r),c=(a(416),a(8)),s=a(9),o=a(12),m=a(10),u=a(11),d=a(723),h=a(725),p=a(305),f=a(191),E=(a(417),function(e){var t=e.city;return i.a.createElement("div",{className:"card small",style:{maxHeight:"200px"}},i.a.createElement("div",{className:"card-image",style:{maxHeight:"200px"}},i.a.createElement("img",{src:t.photoURL,alt:""}),i.a.createElement("span",{id:"city-card",className:"card-title black-text lighten-2 "},t.cityName,", ",t.countryName)))}),g=function(e){var t=e.cities;return i.a.createElement("div",{className:"cities-list section"},t&&t.map(function(e){return i.a.createElement(f.a,{to:"/city/"+e.cityName,key:e.cityName},i.a.createElement(E,{city:e}))}))},v=a(5),N=a(15),y=a(13),b=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.cities,a=e.notifications;return console.log(a),i.a.createElement("div",{className:"cities container"},i.a.createElement("div",{className:"row valign-wrapper"},i.a.createElement("div",{style:{paddingTop:"10px"},className:"col s1"},i.a.createElement(f.a,{to:"/"},i.a.createElement("div",{className:"btn-floating btn-large waves-effect waves-light red lighten-3"},i.a.createElement("i",{className:"material-icons"},"home")))),i.a.createElement("h3",{className:"col s11"},"Cities")),i.a.createElement("div",{className:""},i.a.createElement(g,{cities:t})))}}]),t}(n.Component),O=Object(y.d)(Object(v.b)(function(e){return{cities:e.firestore.ordered.cities,notifications:e.firestore.ordered.notifications}}),Object(N.firestoreConnect)([{collection:"cities",orderBy:["createdAt","desc"]}]))(b),C=a(298),w=a(297),j=a.n(w),S=function(e){var t=e.notifications;return i.a.createElement("div",{className:"section"},i.a.createElement("div",{className:"card z-depth-0"},i.a.createElement("div",{className:"card-content"},i.a.createElement("div",{className:"card-title"},"Notifications"),i.a.createElement("ul",{className:"notifications"},t&&t.map(function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("span",{className:"teal-text"},e.user," "),i.a.createElement("span",null,e.content," "),i.a.createElement("div",{className:"grey-text note-date"},j()(e.time.toDate()).fromNow()),i.a.createElement(C.a,null))})))))},R=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.cities,e.notifications);return console.log(t),i.a.createElement("div",{className:"dashboard container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12 m6"},i.a.createElement(O,null)),i.a.createElement("div",{className:"col sm8 offset-m1"},i.a.createElement(S,{notifications:t}))),i.a.createElement("div",{className:"dashboard container"}))}}]),t}(n.Component),x=Object(y.d)(Object(v.b)(function(e){return{cities:e.city.cities,notifications:e.firestore.ordered.notifications}}),Object(N.firestoreConnect)([{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(R),I=function(e){var t=e.itinerary,a=e.city;return console.log(t),i.a.createElement("div",{className:"card medium itinerary-list-item-card col s12 m6 xl4 mx-4"},i.a.createElement("div",{className:"card-image"},i.a.createElement("img",{src:t.photoURL,alt:"",className:"activator"})),i.a.createElement("div",{className:"card-content"},i.a.createElement("span",{className:"card-title itinerary-list-item-title activator"},t.title,i.a.createElement("i",{className:"material-icons right"},"more_vert")),i.a.createElement("div",{className:"itinerary-list-item-details red-text text-lighten-2"},i.a.createElement("p",null,t.duration,i.a.createElement("i",{className:"far fa-clock small red-text text-lighten-2"})),i.a.createElement("i",{className:"fas fa-2x fa-euro-sign small red-text text-lighten-2"}),i.a.createElement("p",null,t.price),i.a.createElement("i",{className:"far fa-2x fa-star red-text text-lighten-2"}),i.a.createElement("p",null,t.rating))),i.a.createElement("div",{className:"card-reveal white-text",id:"card-reveal"},i.a.createElement("span",{className:"center-align itinerary-list-item-title activator card-title"},i.a.createElement("i",{className:"material-icons right "},"close")),i.a.createElement("p",{className:"itinerary-list-item-summary"},t.summary),i.a.createElement("div",{className:"explore-itinerary-btn center-align"},i.a.createElement(f.a,{to:{pathname:"/city/".concat(a,"/itineraries/").concat(t.id),state:{itinerary_id:t._id}},className:"btn red lighten-2 "},"Explore This Itinerary"))))},U=(a(273),function(e){var t=e.itineraries,a=e.city;return i.a.createElement("div",{className:"itineraries-list section"},i.a.createElement("div",{className:"",id:"iti-List"},t&&t.map(function(e){return i.a.createElement(I,{itinerary:e,city:a,key:e.id})})))}),F=a(299),k=a(40),A=a.n(k),L=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={myCity:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.name;A.a.firestore().collection("cities").where("cityName","==",t).get().then(function(t){var a=[];t.forEach(function(e){a.push(e.data())});var n=a[0];console.log(n),e.setState({myCity:n})}).catch(function(e){console.log("Error getting documents: ",e)})}},{key:"render",value:function(){var e=this.props,t=e.itineraries,a=e.city;e.cities;return console.log(this.props),i.a.createElement("div",{className:"dashboard container"},this.state.myCity&&i.a.createElement("div",{className:"row valign-wrapper",style:{backgroundImage:"url("+this.state.myCity.photoURL+")"}},i.a.createElement("div",{className:"col s1"},i.a.createElement(f.a,{to:"/city"},i.a.createElement("div",{className:"btn-floating btn-large waves-effect waves-light red lighten-3"},i.a.createElement("i",{className:" white-text lighten-3 fas fa-2x fa-arrow-left "})))),i.a.createElement("h3",{className:"col s11"},this.state.myCity.cityName)),i.a.createElement("div",{className:""},i.a.createElement(U,{itineraries:t,city:a})))}}]),t}(n.Component),_=Object(N.firestoreConnect)([{collection:"itineraries",orderBy:["createdAt","desc"]},{collection:"cities",orderBy:["createdAt","desc"]}]),T=Object(F.a)(Object(v.b)(function(e,t){console.log(e.firestore);var a=t.match.params.name,n=e.firestore.ordered.itineraries;return{itineraries:n?n.filter(function(e){return e.cityName===a}):null,city:a}}),_)(L),D=a(31),G=(a(189),a(67)),B=a.n(G),P=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={title:"",cityName:"",file:null,isUploading:!1,progress:0,photoURL:"",duration:null,price:null,rating:null,summary:null},a.handleChange=function(e){a.setState(Object(D.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createItinerary(a.state),a.props.history.push("/")},a.handleUpload=function(){var e=A.a.storage().ref();console.log(a.state.file.name),a.setState({isUploading:!0,progress:0}),e.child("images/".concat(a.state.file.name)).put(a.state.file).on("state_changed",function(e){console.log(e);var t=Math.round(100*e.bytesTransferred/e.totalBytes);a.setState({progress:t})},function(e){console.log(e)},function(){console.log("success"),a.setState({isUploading:!1,progress:100}),A.a.storage().ref("images").child("".concat(a.state.file.name)).getDownloadURL().then(function(e){return a.setState({photoURL:e})})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(B.a),B.a.AutoInit()}},{key:"render",value:function(){var e=this,t={width:this.state.progress+"%"},a=this.props,n=a.cities,r=a.input;return console.log(this.props),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row valign-wrapper"},i.a.createElement("div",{className:"col s1"},i.a.createElement(f.a,{to:"/city"},i.a.createElement("div",{className:"btn-floating btn-large waves-effect waves-light red lighten-3"},i.a.createElement("i",{className:" white-text lighten-3 fas fa-2x fa-arrow-left "})))),i.a.createElement("h4",{className:"col s11"},"Create Itinerary")),i.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},i.a.createElement("div",{className:"input-field"},i.a.createElement("label",{htmlFor:"title"},"Title"),i.a.createElement("input",{required:!0,type:"text",id:"title",onChange:this.handleChange})),i.a.createElement("div",{className:"input-field"},i.a.createElement("select",{required:!0,onChange:this.handleChange,id:"cityName"},n&&n.map(function(e,t){return i.a.createElement("option",{htmlFor:"cityName",key:t,value:e.cityName},e.cityName)})),i.a.createElement("label",null,"Select City")),i.a.createElement("div",{className:"input-field"},i.a.createElement("select",{required:!0,onChange:this.handleChange,id:"price"},i.a.createElement("option",null,"Cheap"),i.a.createElement("option",null,"Moderate"),i.a.createElement("option",null,"Expensive")),i.a.createElement("label",{htmlFor:"price"},"Price")),i.a.createElement("div",{className:"input-field"},i.a.createElement("input",{required:!0,id:"duration",type:"text",length:"10",className:"materialize-textarea",onChange:this.handleChange}),i.a.createElement("label",{htmlFor:"duration"},"Duration in hours")),i.a.createElement("div",{className:"input-field"},i.a.createElement("label",{required:!0,htmlFor:"summary"},"Summary"),i.a.createElement("textarea",{id:"summary",cols:"30",rows:"10",className:"materialize-textarea",onChange:this.handleChange})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s6 file-field input-field"},i.a.createElement("div",{className:"btn"},i.a.createElement("span",null,"File"),i.a.createElement("input",Object.assign({required:!0,accept:"image/*",type:"file"},r,{onChange:function(t){e.setState({file:t.target.files[0],isUploading:!0},e.handleUpload)}}))),i.a.createElement("div",{className:"file-path-wrapper "},i.a.createElement("input",{className:"file-path validate",type:"text"})),this.state.isUploading&&i.a.createElement("div",{className:"progress"},i.a.createElement("div",{className:"determinate",style:t}))),i.a.createElement("div",{className:"col s6"},this.state.photoURL&&i.a.createElement("img",{width:"100px",src:this.state.photoURL,alt:""}))),i.a.createElement("div",{className:"input-field"}),i.a.createElement("div",{className:"input-field"},i.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create"))))}}]),t}(n.Component),q=Object(y.d)(Object(v.b)(function(e){return{cities:e.firestore.ordered.cities}},function(e){return{createItinerary:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var i=n.getFirestore,r=a().firebase.profile,l=a().firebase.auth.uid;i().collection("itineraries").add({cityName:e.cityName,title:e.title,authorFirstName:r.firstName,authorLastName:r.lastName,authorId:l,photoURL:e.photoURL,summary:e.summary,price:e.price,rating:e.rating,duration:e.duration,createdAt:new Date}).then(function(){t({type:"CREATE_ITINERARY",itinerary:e})}).catch(function(e){t({type:"CREATE_ITINERARY_ERROR",err:e})})}}(t))}}}),Object(N.firestoreConnect)([{collection:"cities",orderBy:["createdAt","desc"]}]))(P),z=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.itineraries,e.city);return console.log(this.props),i.a.createElement("div",{className:"dashboard container"},i.a.createElement("div",{className:"row"},i.a.createElement("h3",null,t),i.a.createElement("div",{className:"col s12 m6"},"Test"),i.a.createElement("div",{className:"col sm8 offset-m1"})),i.a.createElement("div",{className:"dashboard container"}))}}]),t}(n.Component),Y=Object(y.d)(Object(v.b)(function(e,t){var a=t.match.params.id,n=e.firestore.ordered.activities;return{activities:n?n.filter(function(e){return e.itineraryId===a}):null}}),Object(N.firestoreConnect)([{collection:"activities",orderBy:["createdAt","desc"]}]))(z),M=a(724),W=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={email:"",password:""},a.handleChange=function(e){a.setState(Object(D.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a.handleGoogleButton=function(e){e.preventDefault(),a.props.googleSignIn()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authErr;return e.auth.uid?i.a.createElement(M.a,{to:"/"}):i.a.createElement("div",{className:"container w-50"},i.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},i.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),i.a.createElement("div",{className:"input-field"},i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),i.a.createElement("div",{className:"input-field"},i.a.createElement("label",{htmlFor:"password"},"Password"),i.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),i.a.createElement("div",{className:"input-field"},i.a.createElement("button",{className:"btn teal lighten-1 z-depth-0"},"LOGIN"),i.a.createElement("div",{className:"red-text-center"},t?i.a.createElement("p",null,t):null)),i.a.createElement("hr",null),i.a.createElement("div",{className:"row"},i.a.createElement("p",{className:"col s8"},"Google account"),i.a.createElement("div",{className:"col s4"},i.a.createElement("a",{className:"btn-floating btn-large waves-effect waves-light teal lighten-1",onClick:this.handleGoogleButton},i.a.createElement("i",{className:" white-text lighten-3 fab fa-2x fa-google"}))))))}}]),t}(n.Component),H=Object(v.b)(function(e){return{authErr:e.auth.authErr,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a},googleSignIn:function(){return e(function(e,t,a){var n=a.getFirebase,i=a.getFirestore,r=n(),l=i(),c=new r.auth.GoogleAuthProvider;r.auth().signInWithPopup(c).then(function(e){return l.collection("users").doc(e.user.uid).set({firstName:e.user.displayName,lastName:"",initials:e.user.displayName[0]+e.user.displayName[1],avatar:e.user.photoURL})}).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})})}}})(W),J=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={email:"",password:"",firstName:"",lastName:""},a.handleChange=function(e){a.setState(Object(D.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.uid?i.a.createElement(M.a,{to:"/"}):i.a.createElement("div",{className:"container"},i.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},i.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),i.a.createElement("div",{className:"input-field"},i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),i.a.createElement("div",{className:"input-field"},i.a.createElement("label",{htmlFor:"password"},"Password"),i.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),i.a.createElement("div",{className:"input-field"},i.a.createElement("label",{htmlFor:"firstName"},"First Name"),i.a.createElement("input",{type:"text",id:"firstName",onChange:this.handleChange})),i.a.createElement("div",{className:"input-field"},i.a.createElement("label",{htmlFor:"lastName"},"Last Name"),i.a.createElement("input",{type:"text",id:"lastName",onChange:this.handleChange})),i.a.createElement("div",{className:"input-field"},i.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"SIGN UP"))))}}]),t}(n.Component),K=Object(v.b)(function(e){return{auth:e.firebase.auth}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var i=n.getFirebase,r=n.getFirestore,l=i(),c=r();l.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return c.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR"})})}}(t))}}})(J),Z=a(301),$=a.n(Z),Q=a(722),V=Object(v.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESSS"})})})}}})(function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement(Q.a,{to:"/createItinerary"},"New itinerary")),i.a.createElement("li",null,i.a.createElement(Q.a,{to:"/createCity"},"New City")),i.a.createElement("li",null,i.a.createElement("a",{onClick:e.signOut},"Log Out")))}),X=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("li",null,i.a.createElement(Q.a,{to:"/signup"},"Sign Up")),i.a.createElement("li",null,i.a.createElement(Q.a,{to:"/signin"},"Log In")))},ee=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=document.querySelectorAll(".sidenav"),t=($.a.Sidenav.init(e,t),{inDuration:250,outDuration:200,draggable:!0})}},{key:"render",value:function(){var e=this.props,t=e.auth,a=e.profile,n=e.notifications,r=t.uid?i.a.createElement(V,{profile:a}):i.a.createElement(X,null),l=a.avatar?i.a.createElement("img",{width:"50px",className:"circle valign-wrapper",src:a.avatar,alt:""}):i.a.createElement("div",{className:"btn btn-floating teal lighten-1"},a.initials);return i.a.createElement("div",{className:"container-fluid px-3"},i.a.createElement("nav",null,i.a.createElement("div",{className:"nav-wrapper"},i.a.createElement(f.a,{to:"/",className:""},"City Itineraries"),i.a.createElement("a",{href:"#","data-target":"mobile-demo",className:"sidenav-trigger"},i.a.createElement("i",{className:"material-icons"},"menu")),i.a.createElement("ul",{style:{paddingRight:"10px"},className:"right hide-on-med-and-down valign-wrapper pr3"},r,i.a.createElement("li",null," ",l)))),i.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},i.a.createElement("li",null,t.uid&&i.a.createElement("div",{className:"user-view valign-wrapper"},i.a.createElement("div",{className:"background indigo lighten-4"}),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s4"},l),i.a.createElement("div",{className:"col s8"},i.a.createElement("span",{className:"black-text name"},a.firstName," ",a.lastName)))),!t.uid&&i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s12"},i.a.createElement(H,null),"Not a user? ",i.a.createElement(Q.a,{to:"/signup"}," Sign Up")))),t.uid&&i.a.createElement(V,{profile:a}),i.a.createElement("li",null,i.a.createElement("div",{className:"divider"}),i.a.createElement(S,{notifications:n}))))}}]),t}(n.Component),te=Object(y.d)(Object(v.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile,notifications:e.firestore.ordered.notifications}}),Object(N.firestoreConnect)([{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(ee),ae=(a(688),a(302)),ne=a.n(ae),ie=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={countryName:"",cityName:"",file:null,isUploading:!1,progress:0,photoURL:"",summary:null,options:ne()().getData(),value:""},a.changeSelectHandler=function(e){a.setState({value:e})},a.changeHandler=function(e){a.setState({value:e})},a.handleChange=function(e){a.setState(Object(D.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createCity(a.state),a.props.history.push("/")},a.handleUpload=function(){var e=A.a.storage().ref();console.log(a.state.file.name),a.setState({isUploading:!0,progress:0}),e.child("cities/".concat(a.state.file.name)).put(a.state.file).on("state_changed",function(e){console.log(e);var t=Math.round(100*e.bytesTransferred/e.totalBytes);a.setState({progress:t})},function(e){console.log(e)},function(){console.log("success"),a.setState({isUploading:!1,progress:100}),A.a.storage().ref("cities").child("".concat(a.state.file.name)).getDownloadURL().then(function(e){return a.setState({photoURL:e})})})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){console.log(B.a),B.a.AutoInit()}},{key:"render",value:function(){var e=this,t={width:this.state.progress+"%"},a=this.props,n=(a.cities,a.input);return console.log(this.state.options),i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row valign-wrapper"},i.a.createElement("div",{className:"col s1"},i.a.createElement(f.a,{to:"/city"},i.a.createElement("div",{className:"btn-floating btn-large waves-effect waves-light red lighten-2"},i.a.createElement("i",{className:" white-text lighten-3 fas fa-2x fa-arrow-left "})))),i.a.createElement("h4",{className:"col s11"},"Create City")),i.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},i.a.createElement("div",{className:"input-field"},i.a.createElement("label",{htmlFor:"cityName"},"City name"),i.a.createElement("input",{required:!0,type:"text",id:"cityName",onChange:this.handleChange})),i.a.createElement("div",{className:"input-field"},i.a.createElement("select",{required:!0,value:this.state.value,onChange:this.handleChange,id:"countryName"},this.state.options&&this.state.options.map(function(e,t){return i.a.createElement("option",{htmlFor:"countryName",key:t,value:e.label},e.label)})),i.a.createElement("label",null,"Select Country")),i.a.createElement("div",{className:"input-field"},i.a.createElement("label",{required:!0,htmlFor:"summary"},"Summary"),i.a.createElement("textarea",{id:"summary",cols:"30",rows:"10",className:"materialize-textarea",onChange:this.handleChange})),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col s6 file-field input-field"},i.a.createElement("div",{className:"btn"},i.a.createElement("span",null,"File"),i.a.createElement("input",Object.assign({required:!0,accept:"image/*",type:"file"},n,{onChange:function(t){e.setState({file:t.target.files[0],isUploading:!0},e.handleUpload)}}))),i.a.createElement("div",{className:"file-path-wrapper "},i.a.createElement("input",{className:"file-path validate",type:"text"})),this.state.isUploading&&i.a.createElement("div",{className:"progress"},i.a.createElement("div",{className:"determinate",style:t}))),i.a.createElement("div",{className:"col s6"},this.state.photoURL&&i.a.createElement("img",{width:"100px",src:this.state.photoURL,alt:""}))),i.a.createElement("div",{className:"input-field"}),i.a.createElement("div",{className:"input-field"},i.a.createElement("button",{disabled:this.isUploading,className:"btn red lighten-2 z-depth-0"},"Create"))))}}]),t}(n.Component),re=Object(v.b)(null,function(e){return{createCity:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var i=n.getFirestore,r=a().firebase.profile,l=a().firebase.auth.uid;i().collection("cities").add({cityName:e.cityName,countryName:e.countryName,authorFirstName:r.firstName,authorLastName:r.lastName,authorId:l,photoURL:e.photoURL,summary:e.summary,createdAt:new Date}).then(function(){t({type:"CREATE_CITY",city:e})}).catch(function(e){t({type:"CREATE_CITY_ERROR",err:e})})}}(t))}}})(ie),le=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(d.a,null,i.a.createElement("div",{className:"App"},i.a.createElement(te,null),i.a.createElement(h.a,null,i.a.createElement(p.a,{exact:!0,path:"/",component:x}),i.a.createElement(p.a,{exact:!0,path:"/city",component:O}),i.a.createElement(p.a,{path:"/city/:name",component:T}),i.a.createElement(p.a,{path:"/city/:name/itinerary/:id",component:Y}),i.a.createElement(p.a,{path:"/createItinerary",component:q}),i.a.createElement(p.a,{path:"/createCity",component:re}),i.a.createElement(p.a,{path:"/signin",component:H}),i.a.createElement(p.a,{path:"/signup",component:K}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ce(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}var se=a(88),oe={authErr:null},me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login failed"),Object(se.a)({},e,{authErr:"Login failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(se.a)({},e,{authErr:null});case"SIGNOUT_SUCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(se.a)({},e,{authErr:null});case"SIGNUP_ERROR":return console.log("signup faild"),Object(se.a)({},e,{authErr:t.err.message});default:return e}},ue=a(303),de={cities:[{id:1,name:"Berlin",photo:a.n(ue).a,details:"Welcome to Berlin"},{id:2,name:"Paris",details:"content2"}]},he=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_CITY":return console.log("created city",t.project),e;case"CREATE_CITY_ERROR":return console.log("create city error",t.err),e;default:return e}},pe={},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_ITINERARY":return console.log("created itinerary",t.project),e;case"CREATE_ITINERARY_ERROR":return console.log("create itinerary error",t.err),e;default:return e}},Ee=a(87),ge=Object(y.c)({auth:me,city:he,itinerary:fe,firestore:Ee.firestoreReducer,firebase:N.firebaseReducer}),ve=a(304),Ne=a(194),ye=a.n(Ne);a(718),a(719);ye.a.initializeApp({apiKey:"AIzaSyCtKC84podP-rj_fxclZg_1j7Cd7IwBGIk",authDomain:"city-itinerary.firebaseapp.com",databaseURL:"https://city-itinerary.firebaseio.com",projectId:"city-itinerary",storageBucket:"city-itinerary.appspot.com",messagingSenderId:"150124635351"});var be=ye.a,Oe=Object(y.e)(ge,Object(y.d)(Object(y.a)(ve.a.withExtraArgument({getFirebase:N.getFirebase,getFirestore:Ee.getFirestore})),Object(Ee.reduxFirestore)(be),Object(N.reactReduxFirebase)(be,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));Oe.firebaseAuthIsReady.then(function(){l.a.render(i.a.createElement(v.a,{store:Oe},i.a.createElement(le,null)),document.getElementById("root")),ce()}),ce()}},[[411,1,2]]]);
//# sourceMappingURL=main.a18c5eab.chunk.js.map