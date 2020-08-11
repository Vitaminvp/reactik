let nextUnitOfWork = null;

const createElement = (type, props, ...children) => ({
  type,
  props: {
    ...props,
    children: children.map(child =>
      typeof child === "object"
        ? child
        : {
            type: "TEXT_ELEMENT",
            props: {
              nodeValue: child,
              children: []
            }
          }
    )
  }
});

function createDom(fiber) {
  const dom =
    fiber.type === "TEXT_ELEMENT"
      ? document.createTextNode("")
      : document.createElement(fiber.type);

  const isEvent = key => key.startsWith("on");
  const isProperty = key => key !== "children";
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach(name => {
      if (isEvent(name)) {
        const eventType = name.toLowerCase().substring(2);
        dom.addEventListener(eventType, fiber.props[name]);
      } else {
        dom[name] = fiber.props[name];
      }
    });

  return dom;
}

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork) {
    if (!shouldYield) {
      nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
      shouldYield = deadline.timeRemaining() < 1;
    }
    requestIdleCallback(workLoop);
  }
}

function performUnitOfWork(fiber) {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  if (fiber.parent) {
    fiber.parent.dom.appendChild(fiber.dom);
  }

  let prevSibling = null;

  fiber.props.children.forEach(({ type, props }, index) => {
    const newFiber = {
      type,
      props,
      parent: fiber,
      dom: null
    };

    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
  });

  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}

function render(element, container) {
  container.innerHTML = "";
  nextUnitOfWork = {
    dom: container,
    props: {
      children: [element]
    }
  };
  requestIdleCallback(workLoop);
}

const Reactik = {
  createElement,
  render
};

export default Reactik;
