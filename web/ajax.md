---
outline: deep
---

# 联调

## 开发环境

如果前端应用和后端接口服务器没有运行在同一个主机上，你需要在开发环境下将接口请求代理到接口服务器。

如果是同一个主机，可以直接请求具体的接口地址。

### 配置

开发环境时候，接口地址在项目根目录下

[.env.development](https://github.com/benewy/template/blob/main/web/.env.development) 文件配置

```bash
# vite 本地跨域代理
VITE_PROXY=[["/api","http://localhost:8000"]]
# 接口地址
VITE_GLOB_API_URL=/api
```

::: tip

- .env 文件中的字段如果是字符串，则无需加引号，默认全部为字符串
- VITE_PROXY 不能换行

:::

### 跨域处理

如果你在 `src/api/` 下面的接口为下方代码，且 **.env.development** 文件配置如下注释，则在控制台看到的地址为 `http://localhost:8001/api/login`。

由于 `/api` 匹配到了设置的 `VITE_PROXY`，所以上方实际是请求 **`http://localhost:8000/login`**，这样同时也解决了跨域问题。（**8001**为项目端口号，**`http://localhost:8000`**为PROXY代理的目标地址）

```ts
// .env.development
// VITE_PROXY=[["/api","http://localhost:8000"]]
// VITE_GLOB_API_URL=/api
enum Api {
  Login = '/login',
}
/**
 * @description: 用户登陆
 */
export function loginApi(params: LoginParams) {
  return http.request<LoginResultModel>({
    url: Api.Login,
    method: 'POST',
    params,
  });
}
```

### 没有跨域时的配置

如果没有跨域问题，可以直接忽略 **VITE_PROXY** 配置，直接将接口地址设置在 **VITE_GLOB_API_URL**

```bash
# 例如接口地址为 http://localhost:8000 则
VITE_GLOB_API_URL=http://localhost:8000
```

如果有跨域问题，将 **VITE_GLOB_API_URL** 设置为跟 **VITE_PROXY** 内其中一个数组的第一个项一致的值即可。

下方的接口地址设置为 `/api`，当请求发出的时候会经过 Vite 的 proxy 代理，匹配到了我们设置的 **VITE_PROXY** 规则，将 `/api` 转化为 `http://localhost:8000` 进行请求

```bash
# 例如接口地址为 http://localhost:8000 则
VITE_PROXY=[["/basic-api","http://localhost:8000"]]
# 接口地址
VITE_GLOB_API_URL=/api
```

### 跨域原理解析

在 `vite.config.ts` 配置文件中，提供了 server 的 proxy 功能，用于代理 API 请求。

```ts
server: {
  proxy: {
    "/api":{
      target: 'http://localhost:8000',
      changeOrigin: true,
      ws: true,
      rewrite: (path) => path.replace(new RegExp(`^/api`), ''),
    }
  },
},
```

::: tip 注意

从浏览器控制台的 Network 看，请求是 `http://localhost:8000/api/xxx`，这是因为 proxy 配置不会改变本地请求的 url。

:::

## 生产环境

生产环境接口地址在项目根目录下 [.env.production](https://github.com/benewy/template/blob/main/web/.env.production) 文件配置。

生产环境接口地址值需要修改 **VITE_GLOB_API_URL**，如果出现跨域问题，可以使用 nginx 或者后台开启 cors 进行处理

::: tip 打包后如何进行地址修改?

**VITE_GLOB\_\*** 开头的变量会在打包的时候注入 **\_app.config.js** 文件内。

在 **dist/\_app.config.js** 修改相应的接口地址后刷新页面即可，不需要在根据不同环境打包多次，一次打包可以用于多个不同接口环境的部署。

:::

## 接口请求

在 naive-ui-admin 中:

1. 页面交互操作；
2. 调用统一管理的 api 请求函数；
3. 使用封装的 axios.ts 发送请求；
4. 获取服务端返回数据
5. 更新 data；

接口统一存放于 [src/api/](https://github.com/benewy/template/tree/main/web/src/api) 下面管理

以登陆接口为例:

在 **src/api/** 内新建模块文件，其中参数与返回值最好定义一下类型，方便校验。虽然麻烦，但是后续维护字段很方便。

::: tip

类型定义文件可以抽取出去统一管理，具体参考项目，至于参数类型校验，可以单独抽离 `model` 引入

:::

```ts
import http from '@/utils/http/axios';
import { LoginParams, LoginResultModel } from './model/userModel';
export function getTableList(params) {
    return http.request({
        url: '/table/list',
        method: 'get',
        params,
    });
}
```

## axios 配置

**axios** 请求封装存放于 [src/utils/http/axios](https://github.com/benewy/template/tree/main/web/src/utils/http/axios) 文件夹内部

除 `index.ts` 文件内容需要根据项目自行修改外，其余文件无需修改

```js
├── Axios.ts // axios实例
├── axiosCancel.ts // axiosCancel实例，取消重复请求
├── axiosTransform.ts // 数据转换类
├── checkStatus.ts // 返回状态值校验
├── index.ts // 接口返回统一处理
```

### index.ts 配置说明

```ts
const axios = new VAxios({
    timeout: 10 * 1000,
    // 接口前缀
    prefixUrl: urlPrefix,
    headers: { 'Content-Type': ContentTypeEnum.JSON },
    // 数据处理方式
    transform,
    // 配置项，下面的选项都可以在独立的接口请求中覆盖
    requestOptions: {
        // 默认将prefix 添加到url
        joinPrefix: true,
        // 需要对返回数据进行处理
        isTransformRequestResult: true,
        // post请求的时候添加参数到url
        joinParamsToUrl: false,
        // 格式化提交参数时间
        formatDate: true,
        // 消息提示类型
        errorMessageMode: 'none',
        // 接口地址
        apiUrl: globSetting.apiUrl as string,
    },
    withCredentials: false,
});
```

**transform 数据处理说明**

类型定义，见 **axiosTransform.ts** 文件

```js
export abstract class AxiosTransform {
  /**
   * @description: 请求之前处理配置
   */
  beforeRequestHook?: (config: AxiosRequestConfig, options: RequestOptions) => AxiosRequestConfig;
  /**
   * @description: 请求成功处理
   */
  transformRequestData?: (res: AxiosResponse<Result>, options: RequestOptions) => any;
  /**
   * @description: 请求失败处理
   */
  requestCatch?: (e: Error) => Promise<any>;
  /**
   * @description: 请求之前的拦截器
   */
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  /**
   * @description: 请求之后的拦截器
   */
  responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;
  /**
   * @description: 请求之前的拦截器错误处理
   */
  requestInterceptorsCatch?: (error: Error) => void;
  /**
   * @description: 请求之后的拦截器错误处理
   */
  responseInterceptorsCatch?: (error: Error) => void;
}
```

项目默认 transform 处理逻辑，可以根据各自项目进行处理。一般需要更改的部分为下方代码，见代码注释说明

```js
/**
 * @description: 数据处理，方便区分多种处理方式
 */
const transform: AxiosTransform = {
        /**
         * @description: 处理请求数据
         */
        transformRequestData: (res: AxiosResponse<Result>, options: RequestOptions) => {
            const {
                isTransformRequestResult,
                isShowMessage = true,
                isShowErrorMessage,
                isShowSuccessMessage,
                successMessageText,
                errorMessageText,
            } = options;
            const reject = Promise.reject;
            const { data } = res;
            //  这里 code，result，message为 后台统一的字段，需要在 types.ts内修改为项目自己的接口返回格式
            const { code, result, message } = data;
            // 请求成功
            const hasSuccess = data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS;
            // 是否显示提示信息
            if (isShowMessage) {
                if (hasSuccess && (successMessageText || isShowSuccessMessage)) {
                    // 是否显示自定义信息提示
                    Message.success(successMessageText || message || '操作成功！');
                } else if (!hasSuccess && (errorMessageText || isShowErrorMessage)) {
                    // 是否显示自定义信息提示
                    Message.error(message || errorMessageText || '操作失败！');
                } else if (!hasSuccess && options.errorMessageMode === 'modal') {
                    // errorMessageMode=‘custom-modal’的时候会显示modal错误弹窗，而不是消息提示，用于一些比较重要的错误
                    Modal.confirm({ title: '错误提示', content: message });
                }
            }
            // 不进行任何处理，直接返回
            // 用于页面代码可能需要直接获取code，data，message这些信息时开启
            if (!isTransformRequestResult) {
                return res.data;
            }
            if (!data) {
                // return '[HTTP] Request has no return value';
                return reject(data);
            }
            // 接口请求成功，直接返回结果
            if (code === ResultEnum.SUCCESS) {
                return result;
            }
            // 接口请求错误，统一提示错误信息
            if (code === ResultEnum.ERROR) {
                if (message) {
                    Message.error(data.message);
                    Promise.reject(new Error(message));
                } else {
                    const msg = '操作失败,系统异常!';
                    Message.error(msg);
                    Promise.reject(new Error(msg));
                }
                return reject();
            }
            // 登录超时
            if (code === ResultEnum.TIMEOUT) {
                if (router.currentRoute.value.name == 'login') return;
                // 到登录页
                const timeoutMsg = '登录超时,请重新登录!';
                Modal.destroyAll();
                Modal.warning({
                    title: '提示',
                    content: '登录身份已失效,请重新登录!',
                    onOk: () => {
                        router.replace({
                            name: 'login',
                            query: {
                                redirect: router.currentRoute.value.fullPath,
                            },
                        });
                        storage.clear();
                    },
                });
                return reject(new Error(timeoutMsg));
            }
            // 这里逻辑可以根据项目进行修改
            if (!hasSuccess) {
                return reject(new Error(message));
            }
            return data;
        },
        // 请求之前处理config
        beforeRequestHook: (config, options) => {
            const { apiUrl, joinPrefix, joinParamsToUrl, formatDate, joinTime = true } = options;
            if (joinPrefix) {
                config.url = `${urlPrefix}${config.url}`;
            }
            if (apiUrl && isString(apiUrl)) {
                config.url = `${apiUrl}${config.url}`;
            }
            const params = config.params || {};
            if (config.method?.toUpperCase() === RequestEnum.GET) {
                if (!isString(params)) {
                    // 给 get 请求加上时间戳参数，避免从缓存中拿数据。
                    config.params = Object.assign(params || {}, joinTimestamp(joinTime, false));
                } else {
                    // 兼容restful风格
                    config.url = config.url + params + `${joinTimestamp(joinTime, true)}`;
                    config.params = undefined;
                }
            } else {
                if (!isString(params)) {
                    formatDate && formatRequestDate(params);
                    config.data = params;
                    config.params = undefined;
                    if (joinParamsToUrl) {
                        config.url = setObjToUrlParams(config.url as string, config.data);
                    }
                } else {
                    // 兼容restful风格
                    config.url = config.url + params;
                    config.params = undefined;
                }
            }
            return config;
        },
        /**
         * @description: 请求拦截器处理
         */
        requestInterceptors: (config) => {
            // 请求之前处理config
            const userStore = useUserStoreWidthOut();
            const token = userStore.getToken;
            if (token) {
                // jwt token
                config.headers.token = token;
            }
            return config;
        },
        /**
         * @description: 响应错误处理
         */
        responseInterceptorsCatch: (error: any) => {
            const { response, code, message } = error || {};
            const msg: string =
                response && response.data && response.data.error ? response.data.error.message : '';
            const err: string = error.toString();
            try {
                if (code === 'ECONNABORTED' && message.indexOf('timeout') !== -1) {
                    Message.error('接口请求超时,请刷新页面重试!');
                    return;
                }
                if (err && err.includes('Network Error')) {
                    Modal.confirm({
                        title: '网络异常',
                        content: '请检查您的网络连接是否正常!',
                    });
                    return;
                }
            } catch (error) {
                throw new Error(error);
            }
            // 请求是否被取消
            const isCancel = axios.isCancel(error);
            if (!isCancel) {
                checkStatus(error.response && error.response.status, msg);
            } else {
                console.warn(error, '请求被取消！');
            }
            return error;
        },
    };
```
### 更改参数格式
项目接口默认为 Json 参数格式，即 `headers: { 'Content-Type': ContentTypeEnum.JSON }`,
如果需要更改为 `form-data` 格式，更改 headers 的 `'Content-Type` 为 `ContentTypeEnum.FORM_URLENCODED` 即可
### 多个接口地址
当项目中需要用到多个接口地址时, 可以在 [src/utils/http/axios/index.ts](https://github.com/benewy/template/blob/main/web/src/utils/http/axios/index.ts) 导出多个 axios 实例
```ts
// 目前只导出一个默认实例，接口地址对应的是环境变量中的 VITE_GLOB_API_URL 接口地址
export const Axios = new VAxios({});
// 需要有其他接口地址的可以在后面添加
// other api url
export const AxiosTow = new VAxios({
  requestOptions: {
    apiUrl: 'xxx',
  },
});
```
### 删除请求 URL 携带的时间戳参数
如果不需要 url 上面默认携带的时间戳参数 `?_t=xxx`
```ts
const axios = new VAxios({
  requestOptions: {
    // 是否加入时间戳
    joinTime: false,
  },
});
```
