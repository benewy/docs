import{_ as e,c as t,o as a,b as s}from"./app.c2134f6f.js";const u=JSON.parse('{"title":"\u653F\u52A1\u9489\u9489\u5DE5\u5177","description":"","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"entity.msg","slug":"entity-msg","link":"#entity-msg","children":[]},{"level":2,"title":"ZWDDBaseUtils","slug":"zwddbaseutils","link":"#zwddbaseutils","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Methods","slug":"methods","link":"#methods","children":[]}]},{"level":2,"title":"ZWDDPhoneUtils","slug":"zwddphoneutils","link":"#zwddphoneutils","children":[{"level":3,"title":"Methods","slug":"methods-1","link":"#methods-1","children":[]}]},{"level":2,"title":"ZWDDQrcodeUtils","slug":"zwddqrcodeutils","link":"#zwddqrcodeutils","children":[{"level":3,"title":"Methods","slug":"methods-2","link":"#methods-2","children":[]}]}],"relativePath":"utils/zwdd.md","lastUpdated":1668781900000}'),o={name:"utils/zwdd.md"},n=s(`<h1 id="\u653F\u52A1\u9489\u9489\u5DE5\u5177" tabindex="-1">\u653F\u52A1\u9489\u9489\u5DE5\u5177 <a class="header-anchor" href="#\u653F\u52A1\u9489\u9489\u5DE5\u5177" aria-hidden="true">#</a></h1><blockquote><p>\u7528\u4E8E\u64CD\u4F5C\u653F\u52A1\u9489\u9489\uFF0C\u4E0E\u653F\u52A1\u9489\u9489\u4EA4\u4E92</p></blockquote><h2 id="entity-msg" tabindex="-1">entity.msg <a class="header-anchor" href="#entity-msg" aria-hidden="true">#</a></h2><p>\u8BE5\u5305\u653E\u7F6E\u4E86\u653F\u52A1\u9489\u9489\u7684\u5DE5\u4F5C\u901A\u77E5\uFF0C<code>Card</code>\u5361\u7247\u6D88\u606F\u8BBE\u7F6E</p><p>\u5982\u82E5\u9700\u8981\u4FEE\u6539\u53EF\u5728\u9879\u76EE\u6839\u76EE\u5F55\u4E0B <a href="https://github.com/elonehoo/benewy-template/tree/main/project/basic/src/main/java/com/beneway/basic/utils/dd/entity/msg" target="_blank" rel="noreferrer">entity.msg</a> \u5305\u4E0B\u4FEE\u6539 <code>Card</code> \u6216 <code>CardBtn</code> \u5B9E\u4F53</p><h2 id="zwddbaseutils" tabindex="-1">ZWDDBaseUtils <a class="header-anchor" href="#zwddbaseutils" aria-hidden="true">#</a></h2><blockquote><p>\u653F\u52A1\u9489\u9489\u7684\u57FA\u7840\u5DE5\u5177\u7C7B</p></blockquote><h3 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-hidden="true">#</a></h3><p>\u793A\u4F8B\uFF1A</p><div class="language-java"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#CB7676;">public</span><span style="color:#DBD7CAEE;"> JsonObject </span><span style="color:#80A665;">getUserInfo</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">String auth_code</span><span style="color:#666666;">)</span><span style="color:#DBD7CAEE;"> </span><span style="color:#666666;">{</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">...</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    JsonObject</span><span style="color:#C99076;"> </span><span style="color:#BD976A;">data</span><span style="color:#C99076;"> </span><span style="color:#666666;">=</span><span style="color:#DBD7CAEE;"> </span><span style="color:#BD976A;">ZWDDBaseUtils</span><span style="color:#666666;">.</span><span style="color:#80A665;">getJsonData</span><span style="color:#666666;">(</span><span style="color:#DBD7CAEE;">content</span><span style="color:#666666;">);</span></span>
<span class="line"><span style="color:#DBD7CAEE;">    </span><span style="color:#666666;">...</span></span>
<span class="line"><span style="color:#666666;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#AB5959;">public</span><span style="color:#393A34;"> JsonObject </span><span style="color:#59873A;">getUserInfo</span><span style="color:#999999;">(</span><span style="color:#393A34;">String auth_code</span><span style="color:#999999;">)</span><span style="color:#393A34;"> </span><span style="color:#999999;">{</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">...</span></span>
<span class="line"><span style="color:#393A34;">    JsonObject</span><span style="color:#A65E2B;"> </span><span style="color:#B07D48;">data</span><span style="color:#A65E2B;"> </span><span style="color:#999999;">=</span><span style="color:#393A34;"> </span><span style="color:#B07D48;">ZWDDBaseUtils</span><span style="color:#999999;">.</span><span style="color:#59873A;">getJsonData</span><span style="color:#999999;">(</span><span style="color:#393A34;">content</span><span style="color:#999999;">);</span></span>
<span class="line"><span style="color:#393A34;">    </span><span style="color:#999999;">...</span></span>
<span class="line"><span style="color:#999999;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div><h3 id="methods" tabindex="-1">Methods <a class="header-anchor" href="#methods" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8FD4\u56DE\u7C7B\u578B</th><th>\u5165\u53C2</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDBaseUtils.java#L51" target="_blank" rel="noreferrer">getJsonSuccess</a></td><td><code>boolean</code></td><td>json(<code>String</code>)</td><td>\u83B7\u53D6<code>json</code>\u4E2D\u7684<code>content</code>\u53C2\u6570\uFF0C\u5E76\u8FD4\u56DE\u83B7\u53D6\u72B6\u6001</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDBaseUtils.java#L62" target="_blank" rel="noreferrer">getJsonData</a></td><td><code>JsonObject</code></td><td>json(<code>String</code>)</td><td>\u5C06<code>String</code>\u7C7B\u578B\u7684\u6570\u636E\u8F6C\u6362\u6210<code>JsonObject</code></td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDBaseUtils.java#L71" target="_blank" rel="noreferrer">requestProxy</a></td><td><code>String</code></td><td>requestProxyUrl(<code>String</code>)<br>type(<code>String</code>)<br>api(<code>String</code>)<br>map(<code>Map&lt;String, String&gt;</code>)</td><td>\u5C06\u8BF7\u6C42\u8FDB\u884C\u4EE3\u7406</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDBaseUtils.java#L80" target="_blank" rel="noreferrer">requestProxy</a></td><td><code>String</code></td><td>executableClient(<code>ExecutableClient</code>)<br>type(<code>String</code>)<br>api(<code>String</code>)<br>map(<code>Map&lt;String, String&gt;</code>)</td><td>\u5C06\u8BF7\u6C42\u8FDB\u884C\u4EE3\u7406</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDBaseUtils.java#L114" target="_blank" rel="noreferrer">flushToken</a></td><td>-</td><td>key(<code>String</code>)<br>secret(<code>String</code>)<br>executableClient(<code>ExecutableClient</code>)<br>TOKEN_TYPE(<code>String</code>)</td><td>\u5237\u65B0\u653F\u52A1\u9489\u9489token\u51ED\u8BC1</td></tr></tbody></table><h2 id="zwddphoneutils" tabindex="-1">ZWDDPhoneUtils <a class="header-anchor" href="#zwddphoneutils" aria-hidden="true">#</a></h2><blockquote><p>\u7528\u4E8E\u624B\u673A\u653F\u52A1\u9489\u9489\u7684\u5DE5\u5177\u7C7B</p></blockquote><h3 id="methods-1" tabindex="-1">Methods <a class="header-anchor" href="#methods-1" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8FD4\u56DE\u7C7B\u578B</th><th>\u5165\u53C2</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDPhoneUtils.java#L66" target="_blank" rel="noreferrer">getExecutableClient</a></td><td><code>ExecutableClient</code></td><td>-</td><td>\u83B7\u53D6\u4E00\u4E2A\u65B0\u7684ExecutableClient</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDPhoneUtils.java#L84" target="_blank" rel="noreferrer">getToken</a></td><td><code>String</code></td><td>-</td><td>\u83B7\u53D6\u6570\u636E\u5E93\u4E2D\u5B58\u50A8\u7684\u79FB\u52A8\u7AEF\u7684token\u51ED\u8BC1</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDPhoneUtils.java#L90" target="_blank" rel="noreferrer">flushToken</a></td><td>-</td><td>-</td><td>\u5237\u65B0\u6570\u636E\u5E93\u4E2D\u79FB\u52A8\u7AEFtoken\u51ED\u8BC1</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDPhoneUtils.java#L94" target="_blank" rel="noreferrer">getUserInfo</a></td><td><code>JsonObject</code></td><td>auth_code(<code>String</code>)</td><td>\u83B7\u53D6\u653F\u52A1\u9489\u9489\u7528\u6237\u4FE1\u606F</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDPhoneUtils.java#L125" target="_blank" rel="noreferrer">sendWorkCardMsg</a></td><td>-</td><td>accountIdList(<code>List&lt;String&gt;</code>)<br>card(<code>Card</code>)</td><td>\u53D1\u9001\u5DE5\u4F5C\u5361\u7247\u901A\u77E5</td></tr></tbody></table><h2 id="zwddqrcodeutils" tabindex="-1">ZWDDQrcodeUtils <a class="header-anchor" href="#zwddqrcodeutils" aria-hidden="true">#</a></h2><blockquote><p>\u7528\u4E8E\u653F\u52A1\u9489\u9489\u4E8C\u7EF4\u7801\u7684\u5DE5\u5177\u7C7B</p></blockquote><h3 id="methods-2" tabindex="-1">Methods <a class="header-anchor" href="#methods-2" aria-hidden="true">#</a></h3><table><thead><tr><th>\u65B9\u6CD5</th><th>\u8FD4\u56DE\u7C7B\u578B</th><th>\u5165\u53C2</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDQrcodeUtils.java#L56" target="_blank" rel="noreferrer">getExecutableClient</a></td><td><code>ExecutableClient</code></td><td>-</td><td>\u83B7\u53D6\u4E00\u4E2A\u65B0\u7684ExecutableClient</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDQrcodeUtils.java#L74" target="_blank" rel="noreferrer">getToken</a></td><td><code>String</code></td><td>-</td><td>\u83B7\u53D6\u6570\u636E\u5E93\u4E2D\u5B58\u50A8\u7684\u4E8C\u7EF4\u7801\u626B\u7801\u7684token\u51ED\u8BC1</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDQrcodeUtils.java#L78" target="_blank" rel="noreferrer">flushToken</a></td><td>-</td><td>-</td><td>\u5237\u65B0\u6570\u636E\u5E93\u4E2D\u4E8C\u7EF4\u7801\u626B\u7801\u7684token\u51ED\u8BC1</td></tr><tr><td><a href="https://github.com/elonehoo/benewy-template/blob/main/project/basic/src/main/java/com/beneway/basic/utils/dd/ZWDDQrcodeUtils.java#L88" target="_blank" rel="noreferrer">getUserInfoQrcode</a></td><td><code>JsonObject</code></td><td>code(<code>String</code>)</td><td>\u83B7\u53D6\u653F\u52A1\u9489\u9489\u7528\u6237\u4FE1\u606F</td></tr></tbody></table>`,20),d=[n];function l(r,c,i,p,h,b){return a(),t("div",null,d)}const y=e(o,[["render",l]]);export{u as __pageData,y as default};
