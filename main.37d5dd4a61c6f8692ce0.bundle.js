(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1076:function(module,exports,__webpack_require__){"use strict";__webpack_require__(3),__webpack_require__(51),__webpack_require__(42),__webpack_require__(33),__webpack_require__(40),__webpack_require__(1077),__webpack_require__(1078),__webpack_require__(6),__webpack_require__(43);var _clientApi=__webpack_require__(56),_clientLogger=__webpack_require__(39),_configFilename=__webpack_require__(1079);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1079:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var _storybook_client_api__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(56);Object(_storybook_client_api__WEBPACK_IMPORTED_MODULE_0__.addParameters)({viewMode:"docs"})},1080:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(360).configure)([__webpack_require__(1081)],module,!1)}).call(this,__webpack_require__(108)(module))},1081:function(module,exports,__webpack_require__){var map={"./component-package/src/CustomComponent.stories.tsx":1082,"./component-package/src/MarkdownStory.stories.mdx":1084,"./hook-package/src/useCustomHook.stories.tsx":1089};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1081},1082:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"CustomComponentDefault",(function(){return CustomComponentDefault})),__webpack_require__.d(__webpack_exports__,"CustomComponentWithNegativeValue",(function(){return CustomComponentWithNegativeValue})),__webpack_require__.d(__webpack_exports__,"CustomComponentWithZeroValue",(function(){return CustomComponentWithZeroValue}));__webpack_require__(257),__webpack_require__(4);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(61),___WEBPACK_IMPORTED_MODULE_4__=(__webpack_require__(0),__webpack_require__(76));__webpack_exports__.default={title:"CustomComponent",component:___WEBPACK_IMPORTED_MODULE_4__.a};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_4__.a,Object.assign({},args))};Template.displayName="Template";var CustomComponentDefault=Template.bind({});CustomComponentDefault.args={title:"Example title",value:42};var CustomComponentWithNegativeValue=Template.bind({});CustomComponentWithNegativeValue.args={title:"Example title",value:-42};var CustomComponentWithZeroValue=Template.bind({});CustomComponentWithZeroValue.args={title:"Example title",value:0},CustomComponentDefault.parameters=Object.assign({storySource:{source:"(args: CustomComponentProps) => <CustomComponent {...args} />"}},CustomComponentDefault.parameters),CustomComponentWithNegativeValue.parameters=Object.assign({storySource:{source:"(args: CustomComponentProps) => <CustomComponent {...args} />"}},CustomComponentWithNegativeValue.parameters),CustomComponentWithZeroValue.parameters=Object.assign({storySource:{source:"(args: CustomComponentProps) => <CustomComponent {...args} />"}},CustomComponentWithZeroValue.parameters)},1084:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"componentExample",(function(){return componentExample})),__webpack_require__.d(__webpack_exports__,"componentExample2",(function(){return componentExample2})),__webpack_require__.d(__webpack_exports__,"playground",(function(){return playground}));__webpack_require__(3),__webpack_require__(17),__webpack_require__(4),__webpack_require__(6),__webpack_require__(0);var _mdx_js_react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(30),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(75),___WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(76);function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var layoutProps={};function MDXContent(_ref){var components=_ref.components,props=_objectWithoutProperties(_ref,["components"]);return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Meta,{title:"Component/Custom Component",component:___WEBPACK_IMPORTED_MODULE_7__.a,mdxType:"Meta"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h1",{id:"custom-component"},"Custom Component"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("p",null,"Description of the component"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Canvas,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Story,{name:"Component Example",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(___WEBPACK_IMPORTED_MODULE_7__.a,{title:"Title",value:42,mdxType:"CustomComponent"}))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Canvas,{mdxType:"Canvas"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Story,{name:"Component Example 2",mdxType:"Story"},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",null,"Yo!"))),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h2",{id:"arguments"},"Arguments"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.ArgsTable,{of:___WEBPACK_IMPORTED_MODULE_7__.a,mdxType:"ArgsTable"}),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("h2",{id:"playground"},"Playground"),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.Story,{name:"Playground",mdxType:"Story"},(function(args){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(___WEBPACK_IMPORTED_MODULE_7__.a,_extends({},args,{mdxType:"CustomComponent"}))})),Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.ArgsTable,{story:"Playground",mdxType:"ArgsTable"}))}MDXContent.displayName="MDXContent",MDXContent.isMDXComponent=!0;var componentExample=function componentExample(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(___WEBPACK_IMPORTED_MODULE_7__.a,{title:"Title",value:42})};componentExample.displayName="componentExample",componentExample.storyName="Component Example",componentExample.parameters={storySource:{source:'<CustomComponent title="Title" value={42} />'}};var componentExample2=function componentExample2(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)("div",null,"Yo!")};componentExample2.displayName="componentExample2",componentExample2.storyName="Component Example 2",componentExample2.parameters={storySource:{source:"<div>Yo!</div>"}};var playground=function playground(args){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(___WEBPACK_IMPORTED_MODULE_7__.a,args)};playground.displayName="playground",playground.storyName="Playground",playground.parameters={storySource:{source:"args => <CustomComponent {...args} />"}};var componentMeta={title:"Component/Custom Component",component:___WEBPACK_IMPORTED_MODULE_7__.a,includeStories:["componentExample","componentExample2","playground"]},mdxStoryNameToKey={"Component Example":"componentExample","Component Example 2":"componentExample2",Playground:"playground"};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs=Object.assign({},componentMeta.parameters.docs||{},{page:function page(){return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_6__.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_5__.mdx)(MDXContent,null))}}),__webpack_exports__.default=componentMeta},1089:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"HookExample",(function(){return useCustomHook_stories_HookExample}));__webpack_require__(3),__webpack_require__(8),__webpack_require__(18),__webpack_require__(15),__webpack_require__(14),__webpack_require__(4),__webpack_require__(11),__webpack_require__(13),__webpack_require__(16);var jsx_runtime=__webpack_require__(61),react=__webpack_require__(0);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useCustomHook_stories_slicedToArray(arr,i){return function useCustomHook_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useCustomHook_stories_iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function useCustomHook_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useCustomHook_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useCustomHook_stories_arrayLikeToArray(o,minLen)}(arr,i)||function useCustomHook_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useCustomHook_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}__webpack_exports__.default={title:"useCustomHook"};var useCustomHook_stories_HookExample=function HookExample(){var _useCustomHook2=useCustomHook_stories_slicedToArray(function useCustomHook(){var _useState2=_slicedToArray(Object(react.useState)(0),2),state=_useState2[0],setState=_useState2[1];return[state,function(){return setState(state+1)},function(){return setState(state-1)}]}(),3),state=_useCustomHook2[0],increase=_useCustomHook2[1],decrease=_useCustomHook2[2];return Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsxs)("p",{children:["State is ",state,"."]}),Object(jsx_runtime.jsx)("button",{onClick:increase,children:"Increase"}),Object(jsx_runtime.jsx)("button",{onClick:decrease,children:"Decrease"})]})};useCustomHook_stories_HookExample.displayName="HookExample",useCustomHook_stories_HookExample.parameters=Object.assign({storySource:{source:"() => {\n  const [state, increase, decrease] = useCustomHook();\n\n  return (\n    <div>\n      <p>State is {state}.</p>\n      <button onClick={increase}>Increase</button>\n      <button onClick={decrease}>Decrease</button>\n    </div>\n  );\n}"}},useCustomHook_stories_HookExample.parameters)},478:function(module,exports,__webpack_require__){__webpack_require__(479),__webpack_require__(650),__webpack_require__(651),__webpack_require__(807),__webpack_require__(1025),__webpack_require__(1057),__webpack_require__(1069),__webpack_require__(1071),__webpack_require__(1076),module.exports=__webpack_require__(1080)},553:function(module,exports){},651:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(360)},76:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CustomComponent_CustomComponent}));var jsx_runtime=__webpack_require__(61),CustomComponent_CustomComponent=(__webpack_require__(0),function CustomComponent(props){return Object(jsx_runtime.jsxs)("div",{children:[Object(jsx_runtime.jsx)("h1",{"data-testid":"title",children:props.title}),Object(jsx_runtime.jsxs)("p",{children:["Value is ",props.value]})]})});CustomComponent_CustomComponent.displayName="CustomComponent";try{CustomComponent_CustomComponent.displayName="CustomComponent",CustomComponent_CustomComponent.__docgenInfo={description:"",displayName:"CustomComponent",props:{title:{defaultValue:null,description:"Title of the component",name:"title",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"Current value",name:"value",required:!0,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/component-package/src/CustomComponent.tsx#CustomComponent"]={docgenInfo:CustomComponent_CustomComponent.__docgenInfo,name:"CustomComponent",path:"packages/component-package/src/CustomComponent.tsx#CustomComponent"})}catch(__react_docgen_typescript_loader_error){}}},[[478,1,2]]]);
//# sourceMappingURL=main.37d5dd4a61c6f8692ce0.bundle.js.map