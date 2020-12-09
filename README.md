## typescript 使用demo
### files,include和exclude
- files和include没有指定,默认当前目录和子目录所有.ts .d.ts .tsx
- 优先级 files>outDir>exclude>include,outDir的文件不会被编译,除非使用files包含进来
- exclude 默认会排除node_modules，bower_components，jspm_packages
- "files"或"include"指定的文件所引用的文件也会被包含进来,优先级高于exclude

### @types，typeRoots和types
- 默认所有node_module/@types包被包含进来

### 命名空间
-  namespace 用来声明一个命名空间
-  declare namespace用来声明外部命名空间,可以用来声明js一个全局库
-  declare namespace用来声明外部命名空间,可以用来声明一个全局库
### 给已有库添加类型声明
-  1,命名为index.d.ts  
-  2,移动到待引入的模块下  
