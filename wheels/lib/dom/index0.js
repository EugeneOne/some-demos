let dom = {
    on: function(element, eventType, selector, fn) {
        element.addEventListener(eventType, e => {
            let el = e.target;
            while (!el.matches(elector)) {
                if (element === el) {
                    el = null;
                    break;
                }
                el = el.parentNode;
            }
            el && fn.call(el, e, el);
        })
        return element;
    },
    index: function(element) {
        let siblings = element.parentNode.children;
        for(let i = 0; i < siblings.length; i++) {
            if(siblings[i] == element) {
                return i;
            }
        }

        return -1;
    },
    uniqueClass: function(element, className) {
        dom.every(element.parentNode.children, el => {
            el.classList.remove(className)
        })
        element.classList.add(className);
        return element;
    },
    every: function(nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++) {
            fn.call(null, nodeList[i], i) //this指向window
        }
        return nodeList;
    },
    create: function(parent, children) {
        var template = document.createElement('template');
        template.innerHTML = html.trim();
        let node = template.content.firstChild;
        if(children) {
            dom.append(node, children)
        }
        return node;
    },
    append: function(parent, children) {
        if(children.length == undefined) {
            children = [children]
        }
        for(let i = 0; i < children.length; i++) {
            parent.appendChild(children[i])
        }
        return parent
    },
    prepend: function(parent, children) {
        if(children.length == undefined) {
            children = [children]
        }
        for(let i = children.length - 1; i >= 0; i++) {
            if(parent.firstChild) {
                parent.insertBefore(children[i], parent.firstChild)
            } else {
                parent.appendChild(children[i])
            }
        }
    },
    removeChildren: function(element) {
        while(element.hasChildNodes()) {
            element.removeChildren(element.lastChild)
        }
        return this;
    },
    dispatchEvent: function(element, eventType, detail) {
        //添加自定义事件
        let event = new CustomEvent(eventType, { detail });
        element.dispatchEvent(event)
        return this
    }
}
