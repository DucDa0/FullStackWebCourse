1. What is Proxy - (Intercept and control interactions to target objects)
- With a Proxy object, we get more control over the interactions with certain objects. A proxy object can determine the behavior whenever we're interacting with the object, for example when we're getting a value, or setting a value.

2. Advantages
- A proxy can be useful to add validation, formatting, notifications, or debugging.

* Overusing the Proxy object or performing heavy operations on each handler method invocation can easily affect the performance of your application negatively. It's best to not use proxies for performance-critical code.