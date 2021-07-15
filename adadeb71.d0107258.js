(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{101:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),d=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,b=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return a?r.a.createElement(b,c(c({ref:t},i),{},{components:a})):r.a.createElement(b,c({ref:t},i))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var i=2;i<o;i++)s[i]=a[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(6),o=(a(0),a(101)),s={title:"Placeholders"},c={unversionedId:"placeholders",id:"placeholders",isDocsHomePage:!1,title:"Placeholders",description:"Placeholders allow the user to add structure to some EQL request. They work as a special",source:"@site/docs/placeholders.mdx",slug:"/placeholders",permalink:"/docs/placeholders",editUrl:"https://github.com/wilkerlucio/pathom3-docs/edit/master/docs/placeholders.mdx",version:"current",sidebar:"docs",previous:{title:"Cache",permalink:"/docs/cache"},next:{title:"Mutations",permalink:"/docs/mutations"}},l=[{value:"Provide data",id:"provide-data",children:[]},{value:"Compose different views",id:"compose-different-views",children:[{value:"Conflict params",id:"conflict-params",children:[]},{value:"Isolation break",id:"isolation-break",children:[]},{value:"Solving with placeholders",id:"solving-with-placeholders",children:[]}]}],i={rightToc:l};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Placeholders allow the user to add structure to some EQL request. They work as a special\nattribute namespace, by default, Pathom recognize any attribute with the namespace ",Object(o.b)("inlineCode",{parentName:"p"},">")," as\na placeholder attribute."),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can configure the placeholder namespaces by setting the option ",Object(o.b)("inlineCode",{parentName:"p"},"com.wsscode.pathom3.placeholder/placeholder-prefixes"),"\nin the env, the default value is ",Object(o.b)("inlineCode",{parentName:"p"},'#{">"}'),"."))),Object(o.b)("p",null,"In this guide, you will go over a few examples of how to use placeholders."),Object(o.b)("h2",{id:"provide-data"},"Provide data"),Object(o.b)("p",null,"You can use placeholders to provide in-query data for Pathom processing. To do this, lets\nget back to our famous full name example, the way to provide data is to send it to\na placeholder key as ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://edn-query-language.org/eql/1.0.0/specification.html#_parameters"}),"EQL parameters"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'(pco/defresolver full-name [{::keys [first-name last-name]}]\n  {::full-name (str first-name " " last-name)})\n\n(def env (pci/register full-name))\n\n(p.eql/process env\n  [{\'(:>/bret {::first-name "Bret" ::last-name "Victor"})\n    [::full-name]}])\n; => {:>/bret {:com.wsscode.pathom3.docs.placeholder/full-name "Bret Victor"}}\n')),Object(o.b)("p",null,"When moving to a placeholder context, Pathom inherits the same parent data and merges\nthe params data to it, to illustrate let's make a nested example of it:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'(p.eql/process env\n  [{\'(:>/bret {::first-name "Bret" ::last-name "Victor"})\n    [::full-name\n     {\'(:>/bard {::first-name "Bard"})\n      [::full-name]}]}])\n; {:>/bret\n;   {:com.wsscode.pathom3.docs.placeholder/full-name "Bret Victor",\n;    :>/bard\n;    {:com.wsscode.pathom3.docs.placeholder/full-name "Bard Victor"}}}\n')),Object(o.b)("h2",{id:"compose-different-views"},"Compose different views"),Object(o.b)("p",null,"For this example, consider a system where you make a UI out of components, and each\ncomponent has its query to express its data needs. Here are some of these\ncomponent queries:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),"(def header-view-eql\n  [:acme.customer/full-name])\n\n(def latest-orders-eql\n  [{:acme.customer/orders\n    [:acme.order/id\n     :acme.order/description]}])\n\n(def address-eql\n  [:acme.address/street\n   :acme.address/number\n   :acme.address/zipcode])\n")),Object(o.b)("p",null,'One thing these queries have in common, is that they are "about" the same entity, always\nthe same customer, but different data about it. You might be tempted to just concatenate\nthe queries, something like:'),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),"(into [] (concat header-view-eql latest-orders-eql address-eql))\n; [:acme.customer/full-name\n;  {:acme.customer/orders [:acme.order/id :acme.order/description]}\n;  :acme.address/street\n;  :acme.address/number\n;  :acme.address/zipcode]\n")),Object(o.b)("p",null,"Then run this query and send the full result to all the components, and for this specific\nexample that would work, but I need to point some problems with this approach to you:"),Object(o.b)("h3",{id:"conflict-params"},"Conflict params"),Object(o.b)("p",null,"Let's add a new component to this system that breaks the previous solution, this is the\nnew component:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),"(def expensive-orders-eql\n  [{'(:acme.customer/orders {::filter-price-gt 100})\n    [:acme.order/id\n     :acme.order/description]}])\n")),Object(o.b)("p",null,"Note this component uses the same attribute that ",Object(o.b)("inlineCode",{parentName:"p"},"latest-orders-eql")," did, but it uses\nEQL parameters to affect the request. Now we have two components that need the same\nattribute but with different data. This is not possible and causes an attribute\nconflict for the planner."),Object(o.b)("p",null,"To have those two points of data in the same response, they need to be at different\nplaces."),Object(o.b)("h3",{id:"isolation-break"},"Isolation break"),Object(o.b)("p",null,"Another problem with merging the queries is that the code gets data it didn't ask for. To\nillustrate this, let's imagine the following code to display the data from the address\ncomponent:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'(defn render-address [{:acme.address/keys [street number zipcode]}]\n  (str "Send to: " street ", " number ", " zipcode))\n')),Object(o.b)("p",null,"Now we also want to display the user name, so we change it to:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),'(defn render-address [{:acme.address/keys  [street number zipcode]\n                       :acme.customer/keys [full-name]}]\n  (str "Send to " full-name " at: " street ", " number ", " zipcode))\n')),Object(o.b)("p",null,"If we use the previous combined query, without changing the ",Object(o.b)("inlineCode",{parentName:"p"},"address-eql")," to also ask for ",Object(o.b)("inlineCode",{parentName:"p"},":acme.customer/full-name"),', this\ncode "accidentally works", because ',Object(o.b)("inlineCode",{parentName:"p"},"header-view-eql")," was asking for ",Object(o.b)("inlineCode",{parentName:"p"},":acme.customer/full-name"),". This can turn into\nbig headaches in the long run because by changing one component, you may affect other components."),Object(o.b)("h3",{id:"solving-with-placeholders"},"Solving with placeholders"),Object(o.b)("p",null,"The solution to fix the previous issues is to put each component into a different\nplaceholder path, this way each one gets full isolation from each other:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-clojure"}),"[{:>/header header-view-eql}\n {:>/latest latest-orders-eql}\n {:>/address address-eql}\n {:>/expensive expensive-orders-eql}]\n")),Object(o.b)("p",null,"This way, Pathom guarantees isolation for each path, no more shared data, and each\ncomponent can ask different params, and Pathom knows how to deal with it."))}d.isMDXComponent=!0}}]);