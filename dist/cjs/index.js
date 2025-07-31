'use strict';

var require$$0 = require('react');
var styled = require('styled-components');

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var reactJsxRuntime_development = {};

/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_development;

function requireReactJsxRuntime_development () {
	if (hasRequiredReactJsxRuntime_development) return reactJsxRuntime_development;
	hasRequiredReactJsxRuntime_development = 1;
	"production" !== process.env.NODE_ENV &&
	  (function () {
	    function getComponentNameFromType(type) {
	      if (null == type) return null;
	      if ("function" === typeof type)
	        return type.$$typeof === REACT_CLIENT_REFERENCE
	          ? null
	          : type.displayName || type.name || null;
	      if ("string" === typeof type) return type;
	      switch (type) {
	        case REACT_FRAGMENT_TYPE:
	          return "Fragment";
	        case REACT_PROFILER_TYPE:
	          return "Profiler";
	        case REACT_STRICT_MODE_TYPE:
	          return "StrictMode";
	        case REACT_SUSPENSE_TYPE:
	          return "Suspense";
	        case REACT_SUSPENSE_LIST_TYPE:
	          return "SuspenseList";
	        case REACT_ACTIVITY_TYPE:
	          return "Activity";
	      }
	      if ("object" === typeof type)
	        switch (
	          ("number" === typeof type.tag &&
	            console.error(
	              "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
	            ),
	          type.$$typeof)
	        ) {
	          case REACT_PORTAL_TYPE:
	            return "Portal";
	          case REACT_CONTEXT_TYPE:
	            return (type.displayName || "Context") + ".Provider";
	          case REACT_CONSUMER_TYPE:
	            return (type._context.displayName || "Context") + ".Consumer";
	          case REACT_FORWARD_REF_TYPE:
	            var innerType = type.render;
	            type = type.displayName;
	            type ||
	              ((type = innerType.displayName || innerType.name || ""),
	              (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	            return type;
	          case REACT_MEMO_TYPE:
	            return (
	              (innerType = type.displayName || null),
	              null !== innerType
	                ? innerType
	                : getComponentNameFromType(type.type) || "Memo"
	            );
	          case REACT_LAZY_TYPE:
	            innerType = type._payload;
	            type = type._init;
	            try {
	              return getComponentNameFromType(type(innerType));
	            } catch (x) {}
	        }
	      return null;
	    }
	    function testStringCoercion(value) {
	      return "" + value;
	    }
	    function checkKeyStringCoercion(value) {
	      try {
	        testStringCoercion(value);
	        var JSCompiler_inline_result = !1;
	      } catch (e) {
	        JSCompiler_inline_result = true;
	      }
	      if (JSCompiler_inline_result) {
	        JSCompiler_inline_result = console;
	        var JSCompiler_temp_const = JSCompiler_inline_result.error;
	        var JSCompiler_inline_result$jscomp$0 =
	          ("function" === typeof Symbol &&
	            Symbol.toStringTag &&
	            value[Symbol.toStringTag]) ||
	          value.constructor.name ||
	          "Object";
	        JSCompiler_temp_const.call(
	          JSCompiler_inline_result,
	          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
	          JSCompiler_inline_result$jscomp$0
	        );
	        return testStringCoercion(value);
	      }
	    }
	    function getTaskName(type) {
	      if (type === REACT_FRAGMENT_TYPE) return "<>";
	      if (
	        "object" === typeof type &&
	        null !== type &&
	        type.$$typeof === REACT_LAZY_TYPE
	      )
	        return "<...>";
	      try {
	        var name = getComponentNameFromType(type);
	        return name ? "<" + name + ">" : "<...>";
	      } catch (x) {
	        return "<...>";
	      }
	    }
	    function getOwner() {
	      var dispatcher = ReactSharedInternals.A;
	      return null === dispatcher ? null : dispatcher.getOwner();
	    }
	    function UnknownOwner() {
	      return Error("react-stack-top-frame");
	    }
	    function hasValidKey(config) {
	      if (hasOwnProperty.call(config, "key")) {
	        var getter = Object.getOwnPropertyDescriptor(config, "key").get;
	        if (getter && getter.isReactWarning) return false;
	      }
	      return void 0 !== config.key;
	    }
	    function defineKeyPropWarningGetter(props, displayName) {
	      function warnAboutAccessingKey() {
	        specialPropKeyWarningShown ||
	          ((specialPropKeyWarningShown = true),
	          console.error(
	            "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
	            displayName
	          ));
	      }
	      warnAboutAccessingKey.isReactWarning = true;
	      Object.defineProperty(props, "key", {
	        get: warnAboutAccessingKey,
	        configurable: true
	      });
	    }
	    function elementRefGetterWithDeprecationWarning() {
	      var componentName = getComponentNameFromType(this.type);
	      didWarnAboutElementRef[componentName] ||
	        ((didWarnAboutElementRef[componentName] = true),
	        console.error(
	          "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
	        ));
	      componentName = this.props.ref;
	      return void 0 !== componentName ? componentName : null;
	    }
	    function ReactElement(
	      type,
	      key,
	      self,
	      source,
	      owner,
	      props,
	      debugStack,
	      debugTask
	    ) {
	      self = props.ref;
	      type = {
	        $$typeof: REACT_ELEMENT_TYPE,
	        type: type,
	        key: key,
	        props: props,
	        _owner: owner
	      };
	      null !== (void 0 !== self ? self : null)
	        ? Object.defineProperty(type, "ref", {
	            enumerable: false,
	            get: elementRefGetterWithDeprecationWarning
	          })
	        : Object.defineProperty(type, "ref", { enumerable: false, value: null });
	      type._store = {};
	      Object.defineProperty(type._store, "validated", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: 0
	      });
	      Object.defineProperty(type, "_debugInfo", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: null
	      });
	      Object.defineProperty(type, "_debugStack", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugStack
	      });
	      Object.defineProperty(type, "_debugTask", {
	        configurable: false,
	        enumerable: false,
	        writable: true,
	        value: debugTask
	      });
	      Object.freeze && (Object.freeze(type.props), Object.freeze(type));
	      return type;
	    }
	    function jsxDEVImpl(
	      type,
	      config,
	      maybeKey,
	      isStaticChildren,
	      source,
	      self,
	      debugStack,
	      debugTask
	    ) {
	      var children = config.children;
	      if (void 0 !== children)
	        if (isStaticChildren)
	          if (isArrayImpl(children)) {
	            for (
	              isStaticChildren = 0;
	              isStaticChildren < children.length;
	              isStaticChildren++
	            )
	              validateChildKeys(children[isStaticChildren]);
	            Object.freeze && Object.freeze(children);
	          } else
	            console.error(
	              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
	            );
	        else validateChildKeys(children);
	      if (hasOwnProperty.call(config, "key")) {
	        children = getComponentNameFromType(type);
	        var keys = Object.keys(config).filter(function (k) {
	          return "key" !== k;
	        });
	        isStaticChildren =
	          0 < keys.length
	            ? "{key: someKey, " + keys.join(": ..., ") + ": ...}"
	            : "{key: someKey}";
	        didWarnAboutKeySpread[children + isStaticChildren] ||
	          ((keys =
	            0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}"),
	          console.error(
	            'A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />',
	            isStaticChildren,
	            children,
	            keys,
	            children
	          ),
	          (didWarnAboutKeySpread[children + isStaticChildren] = true));
	      }
	      children = null;
	      void 0 !== maybeKey &&
	        (checkKeyStringCoercion(maybeKey), (children = "" + maybeKey));
	      hasValidKey(config) &&
	        (checkKeyStringCoercion(config.key), (children = "" + config.key));
	      if ("key" in config) {
	        maybeKey = {};
	        for (var propName in config)
	          "key" !== propName && (maybeKey[propName] = config[propName]);
	      } else maybeKey = config;
	      children &&
	        defineKeyPropWarningGetter(
	          maybeKey,
	          "function" === typeof type
	            ? type.displayName || type.name || "Unknown"
	            : type
	        );
	      return ReactElement(
	        type,
	        children,
	        self,
	        source,
	        getOwner(),
	        maybeKey,
	        debugStack,
	        debugTask
	      );
	    }
	    function validateChildKeys(node) {
	      "object" === typeof node &&
	        null !== node &&
	        node.$$typeof === REACT_ELEMENT_TYPE &&
	        node._store &&
	        (node._store.validated = 1);
	    }
	    var React = require$$0,
	      REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	      REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	      REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	      REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	      REACT_PROFILER_TYPE = Symbol.for("react.profiler");
	    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	      REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	      REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	      REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	      REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	      REACT_MEMO_TYPE = Symbol.for("react.memo"),
	      REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	      REACT_ACTIVITY_TYPE = Symbol.for("react.activity"),
	      REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"),
	      ReactSharedInternals =
	        React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	      hasOwnProperty = Object.prototype.hasOwnProperty,
	      isArrayImpl = Array.isArray,
	      createTask = console.createTask
	        ? console.createTask
	        : function () {
	            return null;
	          };
	    React = {
	      "react-stack-bottom-frame": function (callStackForError) {
	        return callStackForError();
	      }
	    };
	    var specialPropKeyWarningShown;
	    var didWarnAboutElementRef = {};
	    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(
	      React,
	      UnknownOwner
	    )();
	    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
	    var didWarnAboutKeySpread = {};
	    reactJsxRuntime_development.Fragment = REACT_FRAGMENT_TYPE;
	    reactJsxRuntime_development.jsx = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        false,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	    reactJsxRuntime_development.jsxs = function (type, config, maybeKey, source, self) {
	      var trackActualOwner =
	        1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
	      return jsxDEVImpl(
	        type,
	        config,
	        maybeKey,
	        true,
	        source,
	        self,
	        trackActualOwner
	          ? Error("react-stack-top-frame")
	          : unknownOwnerDebugStack,
	        trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask
	      );
	    };
	  })();
	return reactJsxRuntime_development;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;

	if (process.env.NODE_ENV === 'production') {
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	} else {
	  jsxRuntime.exports = requireReactJsxRuntime_development();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

const StyledButton = styled.button `
    padding: 10px 16px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s ease-in-out;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;

    ${({ variant }) => variant === "primary" && styled.css `
        background-color: #000000ea;
        color: white;
        border: none;
        &:hover{
            background-color: #232935ff;
        }
    `}
    ${({ variant }) => variant === "secondary" && styled.css `
        background-color: #ffa500ff;
        color: white;
        border: none;
        &:hover{
            background-color: #ffb733;
        }
    `}
    ${({ variant }) => variant === "outlined" && styled.css `
        background-color: transparent;
        color: #3b82f6;
        border: 2px solid #3b82f6;
        &:hover {
            background-color: #e0f2fe;
        }
    `}
    ${({ disabled }) => disabled && styled.css `
        opacity: 0.6;
        cursor: not-allowed;
    `}
`;

const Button = (props) => {
    const { disabled = false, children, variant = "primary", action } = props;
    return (jsxRuntimeExports.jsx(StyledButton, { disabled: disabled, variant: variant, onClick: disabled ? undefined : action, children: children }));
};

const StyledInput = styled.input `
  padding: 10px 14px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid transparent;
  outline: none;
  width: 100%;

  ${({ variant }) => variant === "primary" &&
    styled.css `
      background-color: #292c2eff;
      border-color: #051b24ff;
      color: #ffffffff;
      &:focus {
        border-color: #06013aff;
      }
    `}

  ${({ variant }) => variant === "secondary" &&
    styled.css `
      background-color: #292c2eff;
      color: #ffffffff;
      border: none;
      border-bottom: 3px solid #333333;
      border-radius: 0px;

      &:focus {
        border-color: #666666;
      }
    `}

  ${({ disabled }) => disabled &&
    styled.css `
      background-color: #f3f4f6;
      color: #9ca3af;
      border-color: #d1d5db;
      cursor: not-allowed;
    `}
`;

const Input = (props) => {
    const { disabled = false, variant = "primary", placeholder = "", value, type = "text", onChange, } = props;
    return (jsxRuntimeExports.jsx(StyledInput, { type: type, variant: variant, disabled: disabled, placeholder: placeholder, value: value, onChange: onChange }));
};

const AccordionContainer = styled.div `
  width: 100%;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  overflow: hidden;
  background-color: #ffffff;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
const AccordionItem = styled.div `
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`;
const AccordionHeader = styled.div `
  padding: 1.25rem 1.5rem;
  background-color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
  &:hover {
    background-color: #f8fafc;
  }
  
  &:active {
    background-color: #f1f5f9;
  }
`;
const AccordionContent = styled.div `
  padding: 0 1.5rem 1.5rem 1.5rem;
  background-color: #ffffff;
  color: #475569;
  line-height: 1.6;
  animation: expandContent 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  transform-origin: top;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
  @keyframes expandContent {
    from {
      opacity: 0;
      max-height: 0;
      transform: translateY(-8px);
    }
    to {
      opacity: 1;
      max-height: 1000px;
      transform: translateY(0);
    }
  }
`;

const Accordion = (props) => {
    const { items, allowMultipleOpen } = props;
    const [openIndexes, setOpenIndexes] = require$$0.useState([]);
    const toggleItem = (index) => {
        if (allowMultipleOpen) {
            setOpenIndexes((prev) => prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]);
        }
        else {
            setOpenIndexes((prev) => (prev[0] === index ? [] : [index]));
        }
    };
    return (jsxRuntimeExports.jsx(AccordionContainer, { children: items.map((item, index) => (jsxRuntimeExports.jsxs(AccordionItem, { children: [jsxRuntimeExports.jsx(AccordionHeader, { onClick: () => toggleItem(index), children: item.title }), openIndexes.includes(index) && (jsxRuntimeExports.jsx(AccordionContent, { children: item.content }))] }, index))) }));
};

const DropdownMenu = styled.div `
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  background-color: ${({ variant }) => (variant === "dark" ? "#000000ea" : "#ffffff")};
  color: ${({ variant }) => (variant === "dark" ? "#f1f5f9" : "#1e293b")};
  border: 1px solid ${({ variant }) => (variant === "dark" ? "#334155" : "#e2e8f0")};
  border-radius: 0.75rem;
  min-width: 180px;
  box-shadow: ${({ variant }) => variant === "dark"
    ? "0 10px 25px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)"
    : "0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"};
  z-index: 100;
  overflow: hidden;
  backdrop-filter: blur(8px);
  animation: dropdownSlide 0.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  transform-origin: top right;
  
  @keyframes dropdownSlide {
    from {
      opacity: 0;
      transform: scale(0.95) translateY(-8px);
    }
    to {
      opacity: 1;
      transform: scale(1) translateY(0);
    }
  }
`;
const DropdownItem = styled.div `
  padding: 0.75rem 1rem;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: 14px;
  font-weight: 600;
  border-radius: 0.5rem;
  margin: 0.25rem 0.5rem;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
  &:first-child {
    margin-top: 0.5rem;
  }
  
  &:last-child {
    margin-bottom: 0.5rem;
  }
  
  &:hover {
    background-color: ${({ variant }) => variant === "dark"
    ? "rgba(148, 163, 184, 0.1)"
    : "rgba(59, 130, 246, 0.08)"};
    transform: translateX(2px);
  }
  
  &:active {
    background-color: ${({ variant }) => variant === "dark"
    ? "rgba(148, 163, 184, 0.15)"
    : "rgba(59, 130, 246, 0.12)"};
    transform: translateX(1px);
  }
`;

const Dropdown = (props) => {
    const { options, action, variant = "light", children } = props;
    const [isOpen, setIsOpen] = require$$0.useState(false);
    const ref = require$$0.useRef(null);
    require$$0.useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return (jsxRuntimeExports.jsxs("div", { ref: ref, style: { position: "relative", display: "inline-block" }, children: [jsxRuntimeExports.jsx("div", { onClick: () => setIsOpen((prev) => !prev), style: { display: "inline-block", cursor: "pointer" }, children: children }), isOpen && (jsxRuntimeExports.jsx(DropdownMenu, { variant: variant, role: "menu", children: options.map((opt) => (jsxRuntimeExports.jsx(DropdownItem, { onClick: () => {
                        action(opt.value);
                        setIsOpen(false);
                    }, children: opt.label }, opt.value))) }))] }));
};

const Overlay = styled.div `
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  animation: fadeIn 0.2s ease-out;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      backdrop-filter: blur(0px);
    }
    to {
      opacity: 1;
      backdrop-filter: blur(8px);
    }
  }
`;
const DialogContainer = styled.div `
  background: ${({ variant }) => variant === "light"
    ? "rgba(255, 255, 255, 0.95)"
    : "rgba(20, 20, 20, 0.95)"};
  backdrop-filter: blur(20px);
  border: 1px solid ${({ variant }) => variant === "light"
    ? "rgba(255, 255, 255, 0.2)"
    : "rgba(255, 255, 255, 0.1)"};
  color: ${({ variant }) => (variant === "light" ? "#1a1a1a" : "#f0f0f0")};
  border-radius: 20px;
  width: 500px;
  max-width: 90vw;
  padding: 32px;
  box-shadow: ${({ variant }) => variant === "light"
    ? "0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1)"
    : "0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05)"};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  transform: translateY(0);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;
const Header = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;
const Title = styled.h2 `
  font-size: 20px;
  margin: 0;
`;
const CloseButton = styled.button `
  background: transparent;
  border: none;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  padding: 8px;
  border-radius: 4px;
  color: #666;
  transition: all 0.15s ease;
  
  &:hover {   
    color: #333;
  }
`;
const Content = styled.div `
  font-size: 16px;
`;
const OpenButton = styled.button `
   padding: 10px 16px;
    border-radius: 6px;
    font-weight: 600;
    font-size: 14px;
    transition: background 0.2s ease-in-out;
    cursor: pointer;
    background-color: #000000ea;
    color: white;
    border: none;
    &:hover{
        background-color: #232935ff;
    }
`;

const Dialog = (props) => {
    const { children, variant = "light", title, triggerText } = props;
    const [isOpen, setIsOpen] = require$$0.useState(false);
    const ref = require$$0.useRef(null);
    const toggleDialog = () => setIsOpen(prev => !prev);
    const renderTrigger = () => {
        return (jsxRuntimeExports.jsx(OpenButton, { onClick: toggleDialog, children: triggerText }));
    };
    return (jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [renderTrigger(), isOpen && (jsxRuntimeExports.jsx(Overlay, { children: jsxRuntimeExports.jsxs(DialogContainer, { ref: ref, variant: variant, "data-testid": "dialogContainer", children: [jsxRuntimeExports.jsxs(Header, { children: [jsxRuntimeExports.jsx(Title, { "data-testid": "dialogTitle", children: title }), jsxRuntimeExports.jsx(CloseButton, { onClick: toggleDialog, "data-testid": "dialogCloseButton", children: "x" })] }), jsxRuntimeExports.jsx(Content, { "data-testid": "dialogContent", children: children })] }) }))] }));
};

const StyledTabsContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`;
const StyledTabHeader = styled.div `
  display: flex;
  gap: 8px;
  padding: 0;
`;
const StyledTabButton = styled.button `
  padding: 8px 16px;
  border: none;
  border-radius: 9999px; 
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background-color: ${props => props.isactive
    ? props.variant === "light" ? "#e0e0e0" : "#333333"
    : "transparent"};
  color: ${props => props.isactive
    ? props.variant === "light" ? "#000000" : "#ffffff"
    : props.variant === "light" ? "#444444" : "#817e7eff"};
  border: 1px solid
    ${props => props.isactive
    ? props.variant === "light" ? "#c0c0c0" : "#444444"
    : "transparent"};
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${props => props.variant === "light" ? "#f0f0f0" : "#444444"};
  }
`;
const StyledTabContent = styled.div `
  width: auto;
  padding: 24px;
  border-radius: 12px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  background-color: ${props => props.variant === "light" ? "#ffffff" : "#1e1e1e"};
  color: ${props => props.variant === "light" ? "#333333" : "#ffffff"};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid
    ${props => (props.variant === "light" ? "#e6e6e6" : "#333333")};
`;

const Tab = ({ children }) => {
    return jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: children });
};
const Tabs = ({ children, variant = "light", defaultActiveTab = 0 }) => {
    const tabHeaders = require$$0.Children.toArray(children);
    const [activeTab, setActiveTab] = require$$0.useState(defaultActiveTab);
    return (jsxRuntimeExports.jsxs(StyledTabsContainer, { children: [jsxRuntimeExports.jsx(StyledTabHeader, { children: tabHeaders.map((tab, index) => (jsxRuntimeExports.jsx(StyledTabButton, { variant: variant, isactive: index === activeTab, onClick: () => setActiveTab(index), children: tab.props.title }, index))) }), jsxRuntimeExports.jsx(StyledTabContent, { "data-testid": "tab-content", variant: variant, children: tabHeaders[activeTab]?.props.children })] }));
};

exports.Accordion = Accordion;
exports.Button = Button;
exports.Dialog = Dialog;
exports.Dropdown = Dropdown;
exports.Input = Input;
exports.Tab = Tab;
exports.Tabs = Tabs;
//# sourceMappingURL=index.js.map
