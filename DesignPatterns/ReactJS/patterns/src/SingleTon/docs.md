1. What is Singleton - (Share a single global instance throughout our application)
- Singletons are classes which can be instantiated once, and can be accessed globally. This single instance can be shared throughout our application, which makes Singletons great for managing global state in an application.

2. Advantages
- Restricting the instantiation to just one instance could potentially save a lot of memory space.

3. Disadvantages
<!-- - Using a regular object instead of class -->
- Hard to test because can't create new instances each time