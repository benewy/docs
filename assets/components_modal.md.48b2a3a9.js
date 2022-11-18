import{_ as s,c as n,o as a,b as l}from"./app.c2134f6f.js";const B=JSON.parse('{"title":"BasicModal \u5F39\u7A97\u6269\u5C55","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"\u57FA\u7840\u4F7F\u7528","slug":"\u57FA\u7840\u4F7F\u7528","link":"#\u57FA\u7840\u4F7F\u7528","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]},{"level":2,"title":"\u4E8B\u4EF6","slug":"\u4E8B\u4EF6","link":"#\u4E8B\u4EF6","children":[]}],"relativePath":"components/modal.md","lastUpdated":1668781900000}'),o={name:"components/modal.md"},p=l(`<h1 id="basicmodal-\u5F39\u7A97\u6269\u5C55" tabindex="-1">BasicModal \u5F39\u7A97\u6269\u5C55 <a class="header-anchor" href="#basicmodal-\u5F39\u7A97\u6269\u5C55" aria-hidden="true">#</a></h1><p>\u5BF9 <code>Modal</code> \u7EC4\u4EF6\u8FDB\u884C\u5C01\u88C5</p><h2 id="\u57FA\u7840\u4F7F\u7528" tabindex="-1">\u57FA\u7840\u4F7F\u7528 <a class="header-anchor" href="#\u57FA\u7840\u4F7F\u7528" aria-hidden="true">#</a></h2><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">n-button</span><span style="color:#666666;"> </span><span style="color:#BD976A;">type</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">primary</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;"> @</span><span style="color:#BD976A;">click</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#BD976A;">showModal</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">\u6253\u5F00Modal</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">n-button</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">basicModal</span><span style="color:#666666;"> @</span><span style="color:#BD976A;">register</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#BD976A;">modalRegister</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;"> </span><span style="color:#BD976A;">ref</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">modalRef</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;"> </span><span style="color:#BD976A;">class</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">basicModal</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;"> @</span><span style="color:#BD976A;">on-ok</span><span style="color:#666666;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#BD976A;">okModal</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">template</span><span style="color:#666666;"> #</span><span style="color:#BD976A;">default</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;</span><span style="color:#DBD7CAEE;">\u6211\u662F\u5F39\u7A97\u5185\u5BB9</span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">p</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">basicModal</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">template</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#666666;">&lt;</span><span style="color:#4D9375;">script</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">lang</span><span style="color:#DBD7CAEE;">=</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#C98A7D;">ts</span><span style="color:#C98A7DAA;">&quot;</span><span style="color:#666666;">&gt;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">defineComponent</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">vue</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#4D9375;">import</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">basicModal</span><span style="color:#666666;">,</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">useModal</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">}</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">from</span><span style="color:#DBD7CAEE;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">@/components/Modal</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">;</span></span>
<span class="line"><span style="color:#4D9375;">export</span><span style="color:#DBD7CAEE;"> </span><span style="color:#4D9375;">default</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">defineComponent</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#B8A965;">components</span><span style="color:#666666;">:</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">basicModal</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">},</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#80A665;">setup</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#CB7676;">const </span><span style="color:#666666;">[</span><span style="color:#BD976A;">modalRegister</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#666666;">{</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">openModal</span><span style="color:#666666;">,</span><span style="color:#CB7676;"> </span><span style="color:#BD976A;">closeModal</span><span style="color:#CB7676;"> </span><span style="color:#666666;">}]</span><span style="color:#CB7676;"> </span><span style="color:#666666;">=</span><span style="color:#CB7676;"> </span><span style="color:#80A665;">useModal</span><span style="color:#666666;">({</span></span>
<span class="line"><span style="color:#CB7676;">            </span><span style="color:#B8A965;">title</span><span style="color:#666666;">:</span><span style="color:#CB7676;"> </span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#C98A7D;">\u65B0\u589E\u9884\u7EA6</span><span style="color:#C98A7DAA;">&#39;</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#CB7676;">        </span><span style="color:#666666;">});</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#CB7676;">async</span><span style="color:#DBD7CAEE;"> </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">okModal</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">           </span><span style="color:#80A665;">closeModal</span><span style="color:#666666;">();</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#CB7676;">function</span><span style="color:#DBD7CAEE;"> </span><span style="color:#80A665;">showModal</span><span style="color:#666666;">()</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#80A665;">openModal</span><span style="color:#666666;">();</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#4D9375;">return</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#BD976A;">modalRegister</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#BD976A;">okModal</span><span style="color:#666666;">,</span></span>
<span class="line"><span style="color:#DBD7CAEE;">            </span><span style="color:#BD976A;">showModal</span></span>
<span class="line"><span style="color:#DBD7CAEE;">        </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">}</span></span>
<span class="line"><span style="color:#666666;">})</span></span>
<span class="line"><span style="color:#666666;">&lt;/</span><span style="color:#4D9375;">script</span><span style="color:#666666;">&gt;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">n-button</span><span style="color:#999999;"> </span><span style="color:#B07D48;">type</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">primary</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;"> @</span><span style="color:#B07D48;">click</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B07D48;">showModal</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">\u6253\u5F00Modal</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">n-button</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">basicModal</span><span style="color:#999999;"> @</span><span style="color:#B07D48;">register</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B07D48;">modalRegister</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;"> </span><span style="color:#B07D48;">ref</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">modalRef</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;"> </span><span style="color:#B07D48;">class</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">basicModal</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;"> @</span><span style="color:#B07D48;">on-ok</span><span style="color:#999999;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B07D48;">okModal</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">template</span><span style="color:#999999;"> #</span><span style="color:#B07D48;">default</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;</span><span style="color:#393A34;">\u6211\u662F\u5F39\u7A97\u5185\u5BB9</span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">p</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">basicModal</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">template</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#999999;">&lt;</span><span style="color:#1E754F;">script</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">lang</span><span style="color:#393A34;">=</span><span style="color:#B56959AA;">&quot;</span><span style="color:#B56959;">ts</span><span style="color:#B56959AA;">&quot;</span><span style="color:#999999;">&gt;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">defineComponent</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">vue</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#1E754F;">import</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">basicModal</span><span style="color:#999999;">,</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">useModal</span><span style="color:#393A34;"> </span><span style="color:#999999;">}</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">from</span><span style="color:#393A34;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">@/components/Modal</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">;</span></span>
<span class="line"><span style="color:#1E754F;">export</span><span style="color:#393A34;"> </span><span style="color:#1E754F;">default</span><span style="color:#393A34;"> </span><span style="color:#59873A;">defineComponent</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#998418;">components</span><span style="color:#999999;">:</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">basicModal</span><span style="color:#393A34;"> </span><span style="color:#999999;">},</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#59873A;">setup</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#AB5959;">const </span><span style="color:#999999;">[</span><span style="color:#B07D48;">modalRegister</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#999999;">{</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">openModal</span><span style="color:#999999;">,</span><span style="color:#AB5959;"> </span><span style="color:#B07D48;">closeModal</span><span style="color:#AB5959;"> </span><span style="color:#999999;">}]</span><span style="color:#AB5959;"> </span><span style="color:#999999;">=</span><span style="color:#AB5959;"> </span><span style="color:#59873A;">useModal</span><span style="color:#999999;">({</span></span>
<span class="line"><span style="color:#AB5959;">            </span><span style="color:#998418;">title</span><span style="color:#999999;">:</span><span style="color:#AB5959;"> </span><span style="color:#B56959AA;">&#39;</span><span style="color:#B56959;">\u65B0\u589E\u9884\u7EA6</span><span style="color:#B56959AA;">&#39;</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#AB5959;">        </span><span style="color:#999999;">});</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#AB5959;">async</span><span style="color:#393A34;"> </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">okModal</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">           </span><span style="color:#59873A;">closeModal</span><span style="color:#999999;">();</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#AB5959;">function</span><span style="color:#393A34;"> </span><span style="color:#59873A;">showModal</span><span style="color:#999999;">()</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#59873A;">openModal</span><span style="color:#999999;">();</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#1E754F;">return</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B07D48;">modalRegister</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B07D48;">okModal</span><span style="color:#999999;">,</span></span>
<span class="line"><span style="color:#393A34;">            </span><span style="color:#B07D48;">showModal</span></span>
<span class="line"><span style="color:#393A34;">        </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">}</span></span>
<span class="line"><span style="color:#999999;">})</span></span>
<span class="line"><span style="color:#999999;">&lt;/</span><span style="color:#1E754F;">script</span><span style="color:#999999;">&gt;</span></span>
<span class="line"></span></code></pre></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u9192</p><ul><li>\u9664\u4EE5\u4E0B\u53C2\u6570\u5916\uFF0C\u5B98\u65B9\u6587\u6863\u5185\u7684 props \u4E5F\u90FD\u652F\u6301\uFF0C\u5177\u4F53\u53EF\u4EE5\u53C2\u8003 <a href="https://www.naiveui.com/zh-CN/os-theme/components/modal" target="_blank" rel="noreferrer">Modal | Dialog</a></li></ul></div><table><thead><tr><th>\u5C5E\u6027</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u53EF\u9009\u503C</th><th>\u8BF4\u660E</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>title</td><td><code>string</code></td><td>-</td><td>-</td><td>\u5F39\u7A97\u6807\u9898</td><td></td></tr><tr><td>subBtuText</td><td><code>string</code></td><td><code>\u786E\u8BA4</code></td><td>-</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td></td></tr></tbody></table><h2 id="\u4E8B\u4EF6" tabindex="-1">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6" aria-hidden="true">#</a></h2><table><thead><tr><th>\u4E8B\u4EF6</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>setProps</td><td><code>Function(props)</code></td><td>\u8BBE\u7F6E\u7EC4\u4EF6\u5185\u90E8\u53C2\u6570-\u53C2\u8003\u5B98\u65B9UI\u6587\u6863</td></tr><tr><td>openModal</td><td><code>Function()</code></td><td>\u6253\u5F00\u5F39\u7A97</td></tr><tr><td>closeModal</td><td><code>Function()</code></td><td>\u5173\u95ED\u5F39\u7A97</td></tr><tr><td>setSubLoading</td><td><code>Function()</code></td><td>\u8BBE\u7F6E\u786E\u5B9A\u6309\u94AEloading\u72B6\u6001</td></tr></tbody></table>`,9),t=[p];function e(c,r,y,A,d,D){return a(),n("div",null,t)}const E=s(o,[["render",e]]);export{B as __pageData,E as default};
