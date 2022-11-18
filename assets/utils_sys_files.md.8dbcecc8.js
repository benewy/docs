import{_ as s,c as a,o as l,b as e}from"./app.c2134f6f.js";const b=JSON.parse('{"title":"\u7CFB\u7EDF\u6587\u4EF6\u5DE5\u5177","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"FilePathEnum","slug":"filepathenum","link":"#filepathenum","children":[]},{"level":2,"title":"FileTypeEnum","slug":"filetypeenum","link":"#filetypeenum","children":[]},{"level":2,"title":"SysFilesUtils","slug":"sysfilesutils","link":"#sysfilesutils","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]}],"relativePath":"utils/sys_files.md","lastUpdated":1668781900000}'),n={name:"utils/sys_files.md"},o=e(`<h1 id="\u7CFB\u7EDF\u6587\u4EF6\u5DE5\u5177" tabindex="-1">\u7CFB\u7EDF\u6587\u4EF6\u5DE5\u5177 <a class="header-anchor" href="#\u7CFB\u7EDF\u6587\u4EF6\u5DE5\u5177" aria-hidden="true">#</a></h1><blockquote><p>\u7528\u4E8E\u5BF9\u7CFB\u7EDF\u4E2D\u7684\u6587\u4EF6\u8FDB\u884C\u64CD\u4F5C</p></blockquote><h2 id="filepathenum" tabindex="-1">FilePathEnum <a class="header-anchor" href="#filepathenum" aria-hidden="true">#</a></h2><blockquote><p>\u7528\u4E8E\u5B58\u653E\u6587\u4EF6\u7684\u64CD\u4F5C\u8DEF\u5F84</p></blockquote><p>\u8BE5\u6587\u4EF6\u4F4D\u4E8E\u6839\u9879\u76EE\u4E0B <a href="https://github.com/elonehoo/benewy-template/blob/docs/project/basic/src/main/java/com/beneway/basic/utils/sys_files/FilePathEnum.java" target="_blank" rel="noreferrer">FilePathEnum</a> \u6587\u4EF6\uFF0C\u5177\u4F53\u7EC6\u8282\u53EF\u67E5\u770B\u6B64\u6587\u4EF6</p><h2 id="filetypeenum" tabindex="-1">FileTypeEnum <a class="header-anchor" href="#filetypeenum" aria-hidden="true">#</a></h2><blockquote><p>\u7528\u4E8E\u5B58\u653E\u6587\u4EF6\u7684\u7C7B\u578B</p></blockquote><p>\u8BE5\u6587\u4EF6\u4F4D\u4E8E\u6839\u9879\u76EE\u4E0B <a href="https://github.com/elonehoo/benewy-template/blob/docs/project/basic/src/main/java/com/beneway/basic/utils/sys_files/FileTypeEnum.java" target="_blank" rel="noreferrer">FileTypeEnum</a> \u6587\u4EF6\uFF0C\u5177\u4F53\u7EC6\u8282\u53EF\u67E5\u770B\u6B64\u6587\u4EF6</p><h2 id="sysfilesutils" tabindex="-1">SysFilesUtils <a class="header-anchor" href="#sysfilesutils" aria-hidden="true">#</a></h2><blockquote><p>\u7528\u4E8E\u64CD\u4F5C\u7CFB\u7EDF\u4E2D\u7684\u6587\u4EF6</p></blockquote><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u793A\u4F8B\uFF1A</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">@</span><span style="color:#CB7676;">Resource</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">private</span><span style="color:#DBD7CAEE;"> SysFilesUtils</span><span style="color:#C99076;"> </span><span style="color:#BD976A;">sysFilesUtils</span><span style="color:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">@</span><span style="color:#CB7676;">Override</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#CB7676;">public</span><span style="color:#DBD7CAEE;"> File </span><span style="color:#80A665;">getFile</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">SysFiles sysFiles</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    String</span><span style="color:#C99076;"> </span><span style="color:#BD976A;">path</span><span style="color:#C99076;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">sysFiles</span><span style="color:#666666;">.</span><span style="color:#80A665;">getPath</span><span style="color:#666666;">();</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    String</span><span style="color:#C99076;"> </span><span style="color:#BD976A;">id</span><span style="color:#C99076;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">sysFiles</span><span style="color:#666666;">.</span><span style="color:#80A665;">getId</span><span style="color:#666666;">();</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    String</span><span style="color:#C99076;"> </span><span style="color:#BD976A;">realPath</span><span style="color:#C99076;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">sysFilesUtils</span><span style="color:#666666;">.</span><span style="color:#80A665;">packStorPath</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">path</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> id</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    File</span><span style="color:#C99076;"> </span><span style="color:#BD976A;">file</span><span style="color:#C99076;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">new</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">File</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">realPath</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> file</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">  </span><span style="color:#666666;">}</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">@</span><span style="color:#AB5959;">Resource</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">private</span><span style="color:#393A34;"> SysFilesUtils</span><span style="color:#A65E2B;"> </span><span style="color:#B07D48;">sysFilesUtils</span><span style="color:#999999;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">@</span><span style="color:#AB5959;">Override</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#AB5959;">public</span><span style="color:#393A34;"> File </span><span style="color:#59873A;">getFile</span><span style="color:#999999;">(</span><span style="color:#393A34;">SysFiles sysFiles</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">...</span></span>
<span class="line"><span style="color:#393A34;">    String</span><span style="color:#A65E2B;"> </span><span style="color:#B07D48;">path</span><span style="color:#A65E2B;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">sysFiles</span><span style="color:#999999;">.</span><span style="color:#59873A;">getPath</span><span style="color:#999999;">();</span></span>
<span class="line"><span style="color:#393A34;">    String</span><span style="color:#A65E2B;"> </span><span style="color:#B07D48;">id</span><span style="color:#A65E2B;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">sysFiles</span><span style="color:#999999;">.</span><span style="color:#59873A;">getId</span><span style="color:#999999;">();</span></span>
<span class="line"><span style="color:#393A34;">    String</span><span style="color:#A65E2B;"> </span><span style="color:#B07D48;">realPath</span><span style="color:#A65E2B;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">sysFilesUtils</span><span style="color:#999999;">.</span><span style="color:#59873A;">packStorPath</span><span style="color:#999999;">(</span><span style="color:#393A34;">path</span><span style="color:#999999;">,</span><span style="color:#393A34;"> id</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#393A34;">    File</span><span style="color:#A65E2B;"> </span><span style="color:#B07D48;">file</span><span style="color:#A65E2B;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">new</span><span style="color:#393A34;"> </span><span style="color:#59873A;">File</span><span style="color:#999999;">(</span><span style="color:#393A34;">realPath</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> file</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#393A34;">  </span><span style="color:#999999;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8FD4\u56DE\u7C7B\u578B</th><th>\u5165\u53C2</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/sys_files/SysFilesUtils.java#L64" target="_blank" rel="noreferrer">setFilePath</a></td><td>-</td><td>filePath(<code>String</code>)</td><td>\u8BBE\u7F6E\u6839\u6587\u4EF6\u5B58\u50A8\u8DEF\u5F84</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/sys_files/SysFilesUtils.java#L94" target="_blank" rel="noreferrer">createPath</a></td><td><code>File</code></td><td>path(<code>String</code>)</td><td>\u521B\u5EFA\u6587\u4EF6\u76EE\u5F55</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/sys_files/SysFilesUtils.java#L103" target="_blank" rel="noreferrer">packStorPath</a></td><td><code>String</code></td><td>paths(<code>String[]</code>)</td><td>\u83B7\u53D6\u8DEF\u5F84</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/sys_files/SysFilesUtils.java#L118" target="_blank" rel="noreferrer">packStorPath</a></td><td><code>String</code></td><td>filePathEnum(<code>FilePathEnum</code>)<br>paths(<code>String[]</code>)</td><td>\u83B7\u53D6\u8DEF\u5F84</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/sys_files/SysFilesUtils.java#L131" target="_blank" rel="noreferrer">getCurrentFilesPath</a></td><td><code>String</code></td><td>-</td><td>\u83B7\u53D6\u5F53\u524Dfiles\u4E0B\u7684\u76EE\u5F55</td></tr></tbody></table>`,15),t=[o];function p(r,c,i,y,d,h){return l(),a("div",null,t)}const u=s(n,[["render",p]]);export{b as __pageData,u as default};