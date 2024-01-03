"use strict";(self.webpackChunkpathom_3_docs=self.webpackChunkpathom_3_docs||[]).push([[376],{3905:(e,t,n)=>{n.d(t,{kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=l(n),u=r,d=h["".concat(p,".").concat(u)]||h[u]||m[u]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5480:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={id:"graphql-integration",title:"GraphQL Integration"},i=void 0,s={unversionedId:"tutorials/graphql-integration",id:"tutorials/graphql-integration",title:"GraphQL Integration",description:"This tutorial will demonstrate how you can consume GraphQL services in Pathom, making",source:"@site/docs/tutorials/graphql-integration.mdx",sourceDirName:"tutorials",slug:"/tutorials/graphql-integration",permalink:"/docs/tutorials/graphql-integration",draft:!1,editUrl:"https://github.com/wilkerlucio/pathom3-docs/edit/master/docs/tutorials/graphql-integration.mdx",tags:[],version:"current",frontMatter:{id:"graphql-integration",title:"GraphQL Integration"},sidebar:"docs",previous:{title:"Scripting with Babashka",permalink:"/docs/tutorials/babashka"}},p={},l=[{value:"Star Wars API",id:"star-wars-api",level:2},{value:"Federating over multiple GraphQL services",id:"federating-over-multiple-graphql-services",level:2}],c={toc:l},m="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(m,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This tutorial will demonstrate how you can consume GraphQL services in Pathom, making\nit part of the attribute system."),(0,r.kt)("h2",{id:"star-wars-api"},"Star Wars API"),(0,r.kt)("p",null,"To demonstrate this integration we are going to use the ",(0,r.kt)("a",{parentName:"p",href:"https://swapi-graphql.netlify.app/"},"Star Wars GraphQL API")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clojure"},'(ns com.wsscode.pathom3.docs.demos.tutorials.graphql\n  (:require\n    [clojure.data.json :as json]\n    [com.wsscode.pathom3.graphql :as p.gql]\n    [com.wsscode.pathom3.interface.eql :as p.eql]\n    [org.httpkit.client :as http]))\n\n; first a helper function to request GraphQL queries to the Star Wars API\n(defn request-swapi-graphql [query]\n  (-> @(http/request\n         {:url     "https://swapi-graphql.netlify.app/.netlify/functions/index"\n          :method  :post\n          :headers {"Content-Type" "application/json"\n                    "Accept"       "*/*"}\n          :body    (json/write-str {:query query})})\n      :body\n      json/read-str))\n\n; lets create the environment\n(def env\n  (-> {}\n      ; this helper will pull the schema and register it in the environment\n      (p.gql/connect-graphql\n        {::p.gql/namespace "swapi"}\n        request-swapi-graphql)))\n\n(comment\n  ; request all people and the title of the films they participate\n  (p.eql/process\n    env\n    [{:swapi.Root/allPeople\n      [{:swapi.PeopleConnection/people\n        [:swapi.Person/name\n         {:swapi.Person/filmConnection\n          [{:swapi.PersonFilmsConnection/films\n            [:swapi.Film/title]}]}]}]}]))\n')),(0,r.kt)("h2",{id:"federating-over-multiple-graphql-services"},"Federating over multiple GraphQL services"),(0,r.kt)("p",null,"In this part we will see how we can use Pathom to connect data leveraging multiple\nGraphQL services."),(0,r.kt)("p",null,"In this example we are going to use the ",(0,r.kt)("a",{parentName:"p",href:"https://tmdb.apps.quintero.io/"},"TMDB")," which is an open GraphQL service for\nmovie data."),(0,r.kt)("p",null,"Although the SWAPI has some data about the movies, the TMDB has more data, like overview,\nimages, budget..."),(0,r.kt)("p",null,"So how can we leverage this data to augment the information we have from the SWAPI?"),(0,r.kt)("p",null,"The first thing we need is a way to associate the SWAPI video instance, with a Movie\nentry on TMDB."),(0,r.kt)("p",null,"For this example I'll use a simple table mapping, that maps ids from SWAPI to TMDB."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clojure"},'(def swapi-id->tmdb-id\n  {"ZmlsbXM6MQ==" "MDoxMQ=="\n   "ZmlsbXM6Mg==" "MDoxODkx"\n   "ZmlsbXM6Mw==" "MDoxODky"\n   "ZmlsbXM6NA==" "MDoxODkz"\n   "ZmlsbXM6NQ==" "MDoxODk0"\n   "ZmlsbXM6Ng==" "MDoxODk1"})\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"I got the TMDB id's by manually searching for the Star Wars movies there. You could\nas an exercise try to make this more automatic, maybe by using the movie number or\nname to search from TMDB.")),(0,r.kt)("p",null,"Now let's include the TMDB setup in our environment and integrate the mapping:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clojure"},'; refactor to simplify the definition of a graphql source\n(defn graphql-request [url query]\n  (-> @(http/request\n         {:url     url\n          :method  :post\n          :headers {"Content-Type" "application/json"\n                    "Accept"       "*/*"}\n          :body    (json/write-str {:query query})})\n      :body\n      json/read-str))\n\n; SWAPI request\n(def request-swapi\n  #(graphql-request "https://swapi-graphql.netlify.app/.netlify/functions/index" %))\n\n; TMDB request\n(def request-tmdb\n  #(graphql-request "https://tmdb.apps.quintero.io/" %))\n\n(def swapi-id->tmdb-id\n  {"ZmlsbXM6MQ==" "MDoxMQ=="\n   "ZmlsbXM6Mg==" "MDoxODkx"\n   "ZmlsbXM6Mw==" "MDoxODky"\n   "ZmlsbXM6NA==" "MDoxODkz"\n   "ZmlsbXM6NQ==" "MDoxODk0"\n   "ZmlsbXM6Ng==" "MDoxODk1"})\n\n(def env\n  (-> {}\n      (pci/register\n        ; apply the static mapping using a built-in resolver helper\n        [(pbir/static-attribute-map-resolver :swapi.Film/id :tmdb.Node/id\n           swapi-id->tmdb-id)])\n      (p.gql/connect-graphql\n        {::p.gql/namespace "swapi"}\n        request-swapi)\n      (p.gql/connect-graphql\n        {::p.gql/namespace "tmdb"\n         ::p.gql/ident-map {"node" {"id" ["Node" "id"]}}}\n        request-tmdb)\n      ; let\'s integrate pathom viz so we can explore our data, note you need to add the\n      ; pathom connector dependency to your project https://github.com/wilkerlucio/pathom-viz-connector\n      ((requiring-resolve \'com.wsscode.pathom.viz.ws-connector.pathom3/connect-env)\n       "gqldemo")))\n')),(0,r.kt)("p",null,"Using Pathom Viz, we can use the auto-complete to explore our new possibilities:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Integrated options",src:n(2553).Z,width:"858",height:"514"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The reason we see other types like ",(0,r.kt)("inlineCode",{parentName:"p"},"TVShow")," is due to the fact the entry point for an\nentity in TMDB is a generic type called ",(0,r.kt)("inlineCode",{parentName:"p"},"Node"),", which means any type that implements\nthis interface might be a valid option here, and in this case Pathom will offer all the possible\noptions."),(0,r.kt)("p",{parentName:"admonition"},"Pathom will automatically group the attributes when sending to GraphQL using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"... on TYPE { attr attr2 } ")," syntax, and since in Pathom we have the full type name on\neach attribute that grouping is based on looking at the last namespace part in the\nattribute name.")),(0,r.kt)("p",null,"An example query getting the title from SWAPI, while overview and budget from TMDB:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-clojure"},"[{:swapi.Root/allFilms\n  [{:swapi.FilmsConnection/films\n    [:swapi.Film/title\n     :tmdb.Movie/budget\n     :tmdb.Movie/overview]}]}]\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Integrated query",src:n(2314).Z,width:"3208",height:"2420"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this scenario we see an N+1 issue. In the future this should be optimized internally\nand the same process should be resolved with just one request for each GraphQL\nservice."),(0,r.kt)("p",{parentName:"admonition"},"You can track this at: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/wilkerlucio/pathom3-graphql/issues/11"},"https://github.com/wilkerlucio/pathom3-graphql/issues/11"))))}h.isMDXComponent=!0},2553:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/autocomplete-ebfe4f0a58b57a1fea4814292a38a1ae.png"},2314:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/query-803f5c9022f5b16e50d8b9dcff9787e2.png"}}]);