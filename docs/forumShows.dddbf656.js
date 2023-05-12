function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},s=t.parcelRequiref629;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){i[e]=t},t.parcelRequiref629=s),s.register("7McF0",(function(t,n){e(t.exports,"db",(()=>l)),e(t.exports,"UserSign",(()=>u)),s("fhN3L");var i=s("7xvHX");s("gdelx");var r=s("iJApx"),o=s("heT8F");const a=(0,i.initializeApp)({apiKey:"AIzaSyC5is-1uGEsEhU9IEfj_F-JvbenGXFiU6s",authDomain:"socialamedia-94491.firebaseapp.com",databaseURL:"https://socialamedia-94491-default-rtdb.europe-west1.firebasedatabase.app/",projectId:"socialamedia-94491",storageBucket:"socialamedia-94491.appspot.com",messagingSenderId:"213252239486",appId:"1:213252239486:web:690fddb7cd17c84f8ce82f"}),l=(0,r.getDatabase)(a),h=(0,r.ref)(l,"/users/userInfo/"),c=new(0,o.DisplayToDom);class u{constructor(e,t){this.username=e,this.password=t}createUser(){document.getElementById("register-user-to-site").addEventListener("click",(e=>{e.preventDefault,this.username=document.querySelector("#username"),this.password=document.querySelector("#password");const t=document.querySelector("#bio");let n;document.querySelectorAll(".form-radio").forEach((e=>{e.checked&&(n=e.value)}));const i=this.username.value.toLowerCase();let s=n;if(""===i||""===this.password.value||""===t.value)c.fillInEveryBlock();else{const e={username:document.querySelector("#username").value,password:document.querySelector("#password").value,gender:document.querySelector("#gender").value,bio:document.querySelector("#bio").value,profilePic:n};(0,r.get)((0,r.child)(h,`/${i}`)).then((n=>{if(n.exists())c.alreadyUser();else if(""!=i&&""!=this.password.value&&""!=t.value&&s){const t={};t[i]=e,(0,r.update)(h,t),sessionStorage.setItem("user",`${e.username}`),sessionStorage.setItem("gender",`${e.gender}`),sessionStorage.setItem("bio",`${e.bio}`),sessionStorage.setItem("pic",`${e.profilePic}`),window.location.href="./profile.html"}}))}}))}logIn(){document.getElementById("login").addEventListener("click",(e=>{e.preventDefault(),this.username=document.querySelector("#username"),this.password=document.querySelector("#password"),this.gender=document.querySelector("#gender"),this.bio=document.querySelector("#bio");const t=(0,r.ref)((0,r.getDatabase)());(0,r.get)((0,r.child)(t,`users/userInfo/${this.username.value}`)).then((e=>{e.exists()?(""==this.username.value||""==this.password.value?c.fillInEveryBlock():this.password.value!=e.val().password?c.wrongUserOrPassword():this.password.value==e.val().password&&(window.location.href="./home.html"),sessionStorage.setItem("user",`${e.val().username}`),sessionStorage.setItem("gender",`${e.val().gender}`),sessionStorage.setItem("bio",`${e.val().bio}`),sessionStorage.setItem("pic",`${e.val().profilePic}`)):c.wrongUserOrPassword()}))}))}}})),s.register("fhN3L",(function(t,n){e(t.exports,"initializeApp",(()=>s("7xvHX").initializeApp)),e(t.exports,"registerVersion",(()=>s("7xvHX").registerVersion));s("7xvHX");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s("7xvHX").registerVersion)("firebase","9.19.1","app")})),s.register("7xvHX",(function(t,n){e(t.exports,"_registerComponent",(()=>m)),e(t.exports,"_getProvider",(()=>y)),e(t.exports,"SDK_VERSION",(()=>b)),e(t.exports,"initializeApp",(()=>I)),e(t.exports,"getApp",(()=>E)),e(t.exports,"registerVersion",(()=>T));var i=s("eryG9"),r=s("5Z2ef"),o=s("gMVVg"),a=(o=s("gMVVg"),s("iItpQ"));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class l{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const h="@firebase/app",c="0.9.7",u=new(0,r.Logger)("@firebase/app"),d="[DEFAULT]",p={[h]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},_=new Map,f=new Map;function g(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function m(e){const t=e.name;if(f.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;f.set(t,e);for(const t of _.values())g(t,e);return!0}function y(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const v={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},C=new(0,o.ErrorFactory)("app","Firebase",v);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,i.Component)("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw C.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b="9.19.1";function I(e,t={}){let n=e;if("object"!=typeof t){t={name:t}}const s=Object.assign({name:d,automaticDataCollectionEnabled:!1},t),r=s.name;if("string"!=typeof r||!r)throw C.create("bad-app-name",{appName:String(r)});if(n||(n=(0,o.getDefaultAppConfig)()),!n)throw C.create("no-options");const a=_.get(r);if(a){if((0,o.deepEqual)(n,a.options)&&(0,o.deepEqual)(s,a.config))return a;throw C.create("duplicate-app",{appName:r})}const l=new(0,i.ComponentContainer)(r);for(const e of f.values())l.addComponent(e);const h=new w(n,s,l);return _.set(r,h),h}function E(e=d){const t=_.get(e);if(!t&&e===d)return I();if(!t)throw C.create("no-app",{appName:e});return t}function T(e,t,n){var s;let r=null!==(s=p[e])&&void 0!==s?s:e;n&&(r+=`-${n}`);const o=r.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${r}" with version "${t}":`];return o&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}m(new(0,i.Component)(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const S="firebase-heartbeat-database",k=1,x="firebase-heartbeat-store";let N=null;function P(){return N||(N=(0,a.openDB)(S,k,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(x)}}).catch((e=>{throw C.create("idb-open",{originalErrorMessage:e.message})}))),N}async function R(e,t){try{const n=(await P()).transaction(x,"readwrite"),i=n.objectStore(x);return await i.put(t,D(e)),n.done}catch(e){if(e instanceof o.FirebaseError)u.warn(e.message);else{const t=C.create("idb-set",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}function D(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new L(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=O();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=O(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let i=e.slice();for(const s of e){const e=n.find((e=>e.agent===s.agent));if(e){if(e.dates.push(s.date),M(n)>t){e.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),M(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}(this._heartbeatsCache.heartbeats),i=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function O(){return(new Date).toISOString().substring(0,10)}class L{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(e){try{return(await P()).transaction(x).objectStore(x).get(D(e))}catch(e){if(e instanceof o.FirebaseError)u.warn(e.message);else{const t=C.create("idb-get",{originalErrorMessage:null==e?void 0:e.message});u.warn(t.message)}}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function M(e){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;F="",m(new(0,i.Component)("platform-logger",(e=>new l(e)),"PRIVATE")),m(new(0,i.Component)("heartbeat",(e=>new A(e)),"PRIVATE")),T(h,c,F),T(h,c,"esm2017"),T("fire-js","")})),s.register("eryG9",(function(t,n){e(t.exports,"Component",(()=>r)),e(t.exports,"ComponentContainer",(()=>l));var i=s("gMVVg");class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new(0,i.Deferred);if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),i=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(i)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),s=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;s.add(e),this.onInitCallbacks.set(i,s);const r=this.instances.get(i);return r&&e(r,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(i=e,i===o?void 0:i),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var i;return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class l{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new a(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}})),s.register("gMVVg",(function(n,i){e(n.exports,"assert",(()=>a)),e(n.exports,"assertionError",(()=>l)),e(n.exports,"base64",(()=>c)),e(n.exports,"base64Encode",(()=>d)),e(n.exports,"base64urlEncodeWithoutPadding",(()=>p)),e(n.exports,"deepCopy",(()=>f)),e(n.exports,"getDefaultEmulatorHostnameAndPort",(()=>v)),e(n.exports,"getDefaultAppConfig",(()=>C)),e(n.exports,"Deferred",(()=>w)),e(n.exports,"createMockUserToken",(()=>b)),e(n.exports,"isMobileCordova",(()=>E)),e(n.exports,"isReactNative",(()=>T)),e(n.exports,"isNodeSdk",(()=>S)),e(n.exports,"isIndexedDBAvailable",(()=>k)),e(n.exports,"validateIndexedDBOpenable",(()=>x)),e(n.exports,"FirebaseError",(()=>N)),e(n.exports,"ErrorFactory",(()=>P)),e(n.exports,"jsonEval",(()=>D)),e(n.exports,"stringify",(()=>A)),e(n.exports,"isValidFormat",(()=>L)),e(n.exports,"isAdmin",(()=>M)),e(n.exports,"contains",(()=>F)),e(n.exports,"safeGet",(()=>q)),e(n.exports,"isEmpty",(()=>U)),e(n.exports,"map",(()=>B)),e(n.exports,"deepEqual",(()=>W)),e(n.exports,"querystring",(()=>H)),e(n.exports,"Sha1",(()=>V)),e(n.exports,"errorPrefix",(()=>z)),e(n.exports,"stringToByteArray",(()=>$)),e(n.exports,"stringLength",(()=>Y)),e(n.exports,"getModularInstance",(()=>G));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var r=s("hPtJY");const o={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},a=function(e,t){if(!e)throw l(t)},l=function(e){return new Error("Firebase Database ("+o.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)},h=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):55296==(64512&s)&&i+1<e.length&&56320==(64512&e.charCodeAt(i+1))?(s=65536+((1023&s)<<10)+(1023&e.charCodeAt(++i)),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},c={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let t=0;t<e.length;t+=3){const s=e[t],r=t+1<e.length,o=r?e[t+1]:0,a=t+2<e.length,l=a?e[t+2]:0,h=s>>2,c=(3&s)<<4|o>>4;let u=(15&o)<<2|l>>6,d=63&l;a||(d=64,r||(u=64)),i.push(n[h],n[c],n[u],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(h(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,i=0;for(;n<e.length;){const s=e[n++];if(s<128)t[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=e[n++];t[i++]=String.fromCharCode((31&s)<<6|63&r)}else if(s>239&&s<365){const r=((7&s)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[i++]=String.fromCharCode(55296+(r>>10)),t[i++]=String.fromCharCode(56320+(1023&r))}else{const r=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&s)<<12|(63&r)<<6|63&o)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let t=0;t<e.length;){const s=n[e.charAt(t++)],r=t<e.length?n[e.charAt(t)]:0;++t;const o=t<e.length?n[e.charAt(t)]:64;++t;const a=t<e.length?n[e.charAt(t)]:64;if(++t,null==s||null==r||null==o||null==a)throw new u;const l=s<<2|r>>4;if(i.push(l),64!==o){const e=r<<4&240|o>>2;if(i.push(e),64!==a){const e=o<<6&192|a;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const d=function(e){const t=h(e);return c.encodeByteArray(t,!0)},p=function(e){return d(e).replace(/\./g,"")},_=function(e){try{return c.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function f(e){return g(void 0,e)}function g(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:return new Date(t.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&"__proto__"!==n&&(e[n]=g(e[n],t[n]));return e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const m=()=>
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==t)return t;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,y=()=>{try{return m()||(()=>{if(void 0===r||void 0===r.env)return})()||(()=>{if("undefined"==typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(e){return}const t=e&&_(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},v=e=>{const t=(e=>{var t,n;return null===(n=null===(t=y())||void 0===t?void 0:t.emulatorHosts)||void 0===n?void 0:n[e]})(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const i=parseInt(t.substring(n+1),10);return"["===t[0]?[t.substring(1,n-1),i]:[t.substring(0,n),i]},C=()=>{var e;return null===(e=y())||void 0===e?void 0:e.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class w{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const r=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e);return[p(JSON.stringify({alg:"none",type:"JWT"})),p(JSON.stringify(r)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function E(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(I())}function T(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function S(){return!0===o.NODE_CLIENT||!0===o.NODE_ADMIN}function k(){try{return"object"==typeof indexedDB}catch(e){return!1}}function x(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var e;t((null===(e=s.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class N extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,N.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,P.prototype.create)}}class P{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,s=this.errors[e],r=s?function(e,t){return e.replace(R,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}(s,n):"Error",o=`${this.serviceName}: ${r} (${i}).`;return new N(i,o,n)}}const R=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return JSON.parse(e)}function A(e){return JSON.stringify(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=function(e){let t={},n={},i={},s="";try{const r=e.split(".");t=D(_(r[0])||""),n=D(_(r[1])||""),s=r[2],i=n.d||{},delete n.d}catch(e){}return{header:t,claims:n,data:i,signature:s}},L=function(e){const t=O(e).claims;return!!t&&"object"==typeof t&&t.hasOwnProperty("iat")},M=function(e){const t=O(e).claims;return"object"==typeof t&&!0===t.admin};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function F(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function q(e,t){return Object.prototype.hasOwnProperty.call(e,t)?e[t]:void 0}function U(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function B(e,t,n){const i={};for(const s in e)Object.prototype.hasOwnProperty.call(e,s)&&(i[s]=t.call(n,e[s],s,e));return i}function W(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const s of n){if(!i.includes(s))return!1;const n=e[s],r=t[s];if(j(n)&&j(r)){if(!W(n,r))return!1}else if(n!==r)return!1}for(const e of i)if(!n.includes(e))return!1;return!0}function j(e){return null!==e&&"object"==typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function H(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class V{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if("string"==typeof e)for(let i=0;i<16;i++)n[i]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let i=0;i<16;i++)n[i]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let e=16;e<80;e++){const t=n[e-3]^n[e-8]^n[e-14]^n[e-16];n[e]=4294967295&(t<<1|t>>>31)}let i,s,r=this.chain_[0],o=this.chain_[1],a=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(let e=0;e<80;e++){e<40?e<20?(i=l^o&(a^l),s=1518500249):(i=o^a^l,s=1859775393):e<60?(i=o&a|l&(o|a),s=2400959708):(i=o^a^l,s=3395469782);const t=(r<<5|r>>>27)+i+h+s+n[e]&4294967295;h=l,l=a,a=4294967295&(o<<30|o>>>2),o=r,r=t}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+o&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295}update(e,t){if(null==e)return;void 0===t&&(t=e.length);const n=t-this.blockSize;let i=0;const s=this.buf_;let r=this.inbuf_;for(;i<t;){if(0===r)for(;i<=n;)this.compress_(e,i),i+=this.blockSize;if("string"==typeof e){for(;i<t;)if(s[r]=e.charCodeAt(i),++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}else for(;i<t;)if(s[r]=e[i],++r,++i,r===this.blockSize){this.compress_(s),r=0;break}}this.inbuf_=r,this.total_+=t}digest(){const e=[];let t=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let e=this.blockSize-1;e>=56;e--)this.buf_[e]=255&t,t/=256;this.compress_(this.buf_);let n=0;for(let t=0;t<5;t++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[t]>>i&255,++n;return e}}function z(e,t){return`${e} failed: ${t} argument `}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let s=e.charCodeAt(i);if(s>=55296&&s<=56319){const t=s-55296;i++,a(i<e.length,"Surrogate pair missing trail surrogate.");s=65536+(t<<10)+(e.charCodeAt(i)-56320)}s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=63&s|128):s<65536?(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=63&s|128):(t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=63&s|128)}return t},Y=function(e){let t=0;for(let n=0;n<e.length;n++){const i=e.charCodeAt(n);i<128?t++:i<2048?t+=2:i>=55296&&i<=56319?(t+=4,n++):t+=3}return t};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function G(e){return e&&e._delegate?e._delegate:e}})),s.register("hPtJY",(function(e,t){var n,i,s=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:o}catch(e){i=o}}();var l,h=[],c=!1,u=-1;function d(){c&&l&&(c=!1,l.length?h=l.concat(h):u=-1,h.length&&p())}function p(){if(!c){var e=a(d);c=!0;for(var t=h.length;t;){for(l=h,h=[];++u<t;)l&&l[u].run();u=-1,t=h.length}l=null,c=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===o||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{return i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}function f(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new _(e,t)),1!==h.length||c||a(p)},_.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=f,s.addListener=f,s.once=f,s.off=f,s.removeListener=f,s.removeAllListeners=f,s.emit=f,s.prependListener=f,s.prependOnceListener=f,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}})),s.register("5Z2ef",(function(t,n){e(t.exports,"LogLevel",(()=>s)),e(t.exports,"Logger",(()=>c)),e(t.exports,"setLogLevel",(()=>u)),e(t.exports,"setUserLogHandler",(()=>d));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var s,r;(r=s||(s={}))[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT";const o={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},a=s.INFO,l={[s.DEBUG]:"log",[s.VERBOSE]:"log",[s.INFO]:"info",[s.WARN]:"warn",[s.ERROR]:"error"},h=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),s=l[t];if(!s)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[s](`[${i}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=a,this._logHandler=h,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in s))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,s.DEBUG,...e),this._logHandler(this,s.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,s.VERBOSE,...e),this._logHandler(this,s.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,s.INFO,...e),this._logHandler(this,s.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,s.WARN,...e),this._logHandler(this,s.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,s.ERROR,...e),this._logHandler(this,s.ERROR,...e)}}function u(e){i.forEach((t=>{t.setLogLevel(e)}))}function d(e,t){for(const n of i){let i=null;t&&t.level&&(i=o[t.level]),n.userLogHandler=null===e?null:(t,n,...r)=>{const o=r.map((e=>{if(null==e)return null;if("string"==typeof e)return e;if("number"==typeof e||"boolean"==typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(e){return null}})).filter((e=>e)).join(" ");n>=(null!=i?i:t.logLevel)&&e({level:s[n].toLowerCase(),message:o,args:r,type:t.name})}}}})),s.register("iItpQ",(function(t,n){e(t.exports,"openDB",(()=>r));var i=s("jMRra");i=s("jMRra");function r(e,t,{blocked:n,upgrade:s,blocking:r,terminated:o}={}){const a=indexedDB.open(e,t),l=(0,i.w)(a);return s&&a.addEventListener("upgradeneeded",(e=>{s((0,i.w)(a.result),e.oldVersion,e.newVersion,(0,i.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),l.then((e=>{o&&e.addEventListener("close",(()=>o())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),l}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],l=new Map;function h(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(l.get(t))return l.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,s=a.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!s&&!o.includes(n))return;const r=async function(e,...t){const r=this.transaction(e,s?"readwrite":"readonly");let o=r.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),s&&r.done]))[0]};return l.set(t,r),r}(0,i.r)((e=>({...e,get:(t,n,i)=>h(t,n)||e.get(t,n,i),has:(t,n)=>!!h(t,n)||e.has(t,n)})))})),s.register("jMRra",(function(t,n){e(t.exports,"w",(()=>f)),e(t.exports,"r",(()=>d));const i=(e,t)=>t.some((t=>e instanceof t));let s,r;const o=new WeakMap,a=new WeakMap,l=new WeakMap,h=new WeakMap,c=new WeakMap;let u={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return a.get(e);if("objectStoreNames"===t)return e.objectStoreNames||l.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return f(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function d(e){u=e(u)}function p(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(r||(r=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(g(this),t),f(o.get(this))}:function(...t){return f(e.apply(g(this),t))}:function(t,...n){const i=e.call(g(this),t,...n);return l.set(i,t.sort?t.sort():[t]),f(i)}}function _(e){return"function"==typeof e?p(e):(e instanceof IDBTransaction&&function(e){if(a.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",r),e.removeEventListener("abort",r)},s=()=>{t(),i()},r=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",r),e.addEventListener("abort",r)}));a.set(e,t)}(e),i(e,s||(s=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,u):e)}function f(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",r)},s=()=>{t(f(e.result)),i()},r=()=>{n(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",r)}));return t.then((t=>{t instanceof IDBCursor&&o.set(t,e)})).catch((()=>{})),c.set(t,e),t}(e);if(h.has(e))return h.get(e);const t=_(e);return t!==e&&(h.set(e,t),c.set(t,e)),t}const g=e=>c.get(e)})),s.register("gdelx",(function(t,n){e(t.exports,"child",(()=>s("iJApx").child)),e(t.exports,"get",(()=>s("iJApx").get)),e(t.exports,"getDatabase",(()=>s("iJApx").getDatabase)),e(t.exports,"onValue",(()=>s("iJApx").onValue)),e(t.exports,"push",(()=>s("iJApx").push)),e(t.exports,"ref",(()=>s("iJApx").ref)),e(t.exports,"remove",(()=>s("iJApx").remove)),e(t.exports,"update",(()=>s("iJApx").update)),s("iJApx")})),s.register("iJApx",(function(t,n){e(t.exports,"child",(()=>As)),e(t.exports,"ref",(()=>Ds)),e(t.exports,"push",(()=>Os)),e(t.exports,"remove",(()=>Ls)),e(t.exports,"update",(()=>Fs)),e(t.exports,"get",(()=>qs)),e(t.exports,"onValue",(()=>js)),e(t.exports,"getDatabase",(()=>Gs));var i=s("7xvHX"),r=s("eryG9"),o=s("gMVVg"),a=s("5Z2ef"),l=s("hPtJY");const h="@firebase/database",c="0.14.4";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let u="";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){null==t?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),(0,o.stringify)(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return null==t?null:(0,o.jsonEval)(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){null==t?delete this.cache_[e]:this.cache_[e]=t}get(e){return(0,o.contains)(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _=function(e){try{if("undefined"!=typeof window&&void 0!==window[e]){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new d(t)}}catch(e){}return new p},f=_("localStorage"),g=_("sessionStorage"),m=new(0,a.Logger)("@firebase/database"),y=function(){let e=1;return function(){return e++}}(),v=function(e){const t=(0,o.stringToByteArray)(e),n=new(0,o.Sha1);n.update(t);const i=n.digest();return o.base64.encodeByteArray(i)},C=function(...e){let t="";for(let n=0;n<e.length;n++){const i=e[n];Array.isArray(i)||i&&"object"==typeof i&&"number"==typeof i.length?t+=C.apply(null,i):t+="object"==typeof i?(0,o.stringify)(i):i,t+=" "}return t};let w=null,b=!0;const I=function(e,t){(0,o.assert)(!t||!0===e||!1===e,"Can't turn on custom loggers persistently."),!0===e?(m.logLevel=a.LogLevel.VERBOSE,w=m.log.bind(m),t&&g.set("logging_enabled",!0)):"function"==typeof e?w=e:(w=null,g.remove("logging_enabled"))},E=function(...e){if(!0===b&&(b=!1,null===w&&!0===g.get("logging_enabled")&&I(!0)),w){const t=C.apply(null,e);w(t)}},T=function(e){return function(...t){E(e,...t)}},S=function(...e){const t="FIREBASE INTERNAL ERROR: "+C(...e);m.error(t)},k=function(...e){const t=`FIREBASE FATAL ERROR: ${C(...e)}`;throw m.error(t),new Error(t)},x=function(...e){const t="FIREBASE WARNING: "+C(...e);m.warn(t)},N=function(e){return"number"==typeof e&&(e!=e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},P="[MIN_NAME]",R="[MAX_NAME]",D=function(e,t){if(e===t)return 0;if(e===P||t===R)return-1;if(t===P||e===R)return 1;{const n=B(e),i=B(t);return null!==n?null!==i?n-i==0?e.length-t.length:n-i:-1:null!==i?1:e<t?-1:1}},A=function(e,t){return e===t?0:e<t?-1:1},O=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+(0,o.stringify)(t))},L=function(e){if("object"!=typeof e||null===e)return(0,o.stringify)(e);const t=[];for(const n in e)t.push(n);t.sort();let n="{";for(let i=0;i<t.length;i++)0!==i&&(n+=","),n+=(0,o.stringify)(t[i]),n+=":",n+=L(e[t[i]]);return n+="}",n},M=function(e,t){const n=e.length;if(n<=t)return[e];const i=[];for(let s=0;s<n;s+=t)s+t>n?i.push(e.substring(s,n)):i.push(e.substring(s,s+t));return i};function F(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const q=function(e){(0,o.assert)(!N(e),"Invalid JSON number");const t=1023;let n,i,s,r,a;0===e?(i=0,s=0,n=1/e==-1/0?1:0):(n=e<0,(e=Math.abs(e))>=Math.pow(2,-1022)?(r=Math.min(Math.floor(Math.log(e)/Math.LN2),t),i=r+t,s=Math.round(e*Math.pow(2,52-r)-Math.pow(2,52))):(i=0,s=Math.round(e/Math.pow(2,-1074))));const l=[];for(a=52;a;a-=1)l.push(s%2?1:0),s=Math.floor(s/2);for(a=11;a;a-=1)l.push(i%2?1:0),i=Math.floor(i/2);l.push(n?1:0),l.reverse();const h=l.join("");let c="";for(a=0;a<64;a+=8){let e=parseInt(h.substr(a,8),2).toString(16);1===e.length&&(e="0"+e),c+=e}return c.toLowerCase()};const U=new RegExp("^-?(0*)\\d{1,10}$"),B=function(e){if(U.test(e)){const t=Number(e);if(t>=-2147483648&&t<=2147483647)return t}return null},W=function(e){try{e()}catch(e){setTimeout((()=>{const t=e.stack||"";throw x("Exception was thrown by user callback.",t),e}),Math.floor(0))}},j=function(e,t){const n=setTimeout(e,t);return"number"==typeof n&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(n):"object"==typeof n&&n.unref&&n.unref(),n};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=null==t?void 0:t.getImmediate({optional:!0}),this.appCheck||null==t||t.get().then((e=>this.appCheck=e))}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise(((t,n)=>{setTimeout((()=>{this.appCheck?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){var t;null===(t=this.appCheckProvider)||void 0===t||t.get().then((t=>t.addTokenListener(e)))}notifyForInvalidToken(){x(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit((e=>this.auth_=e))}getToken(e){return this.auth_?this.auth_.getToken(e).catch((e=>e&&"auth/token-not-initialized"===e.code?(E("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(e))):new Promise(((t,n)=>{setTimeout((()=>{this.auth_?this.getToken(e).then(t,n):t(null)}),0)}))}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then((t=>t.addAuthTokenListener(e)))}removeTokenChangeListener(e){this.authProvider_.get().then((t=>t.removeAuthTokenListener(e)))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',x(e)}}class z{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}z.OWNER="owner";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $="5",Y=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,G="ac",K="websocket",Q="long_polling";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class J{constructor(e,t,n,i,s=!1,r="",o=!1,a=!1){this.secure=t,this.namespace=n,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=r,this.includeNamespaceInQueryParams=o,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=f.get("host:"+e)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&f.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function X(e,t,n){let i;if((0,o.assert)("string"==typeof t,"typeof type must == string"),(0,o.assert)("object"==typeof n,"typeof params must == object"),t===K)i=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else{if(t!==Q)throw new Error("Unknown connection type: "+t);i=(e.secure?"https://":"http://")+e.internalHost+"/.lp?"}(function(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams})(e)&&(n.ns=e.namespace);const s=[];return F(n,((e,t)=>{s.push(e+"="+t)})),i+s.join("&")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.counters_={}}incrementCounter(e,t=1){(0,o.contains)(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return(0,o.deepCopy)(this.counters_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ee={},te={};function ne(e){const t=e.toString();return ee[t]||(ee[t]=new Z),ee[t]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ie{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const e=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let t=0;t<e.length;++t)e[t]&&W((()=>{this.onMessage_(e[t])}));if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="start";class re{constructor(e,t,n,i,s,r,o){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.transportSessionId=r,this.lastSessionId=o,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=T(e),this.stats_=ne(t),this.urlFn=e=>(this.appCheckToken&&(e[G]=this.appCheckToken),X(t,Q,e))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new ie(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout((()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null}),Math.floor(3e4)),function(e){if((0,o.isNodeSdk)()||"complete"===document.readyState)e();else{let t=!1;const n=function(){document.body?t||(t=!0,e()):setTimeout(n,Math.floor(10))};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",(()=>{"complete"===document.readyState&&n()})),window.attachEvent("onload",n))}}((()=>{if(this.isClosed_)return;this.scriptTagHolder=new oe(((...e)=>{const[t,n,i,s,r]=e;if(this.incrementIncomingBytes_(e),this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,t===se)this.id=n,this.password=i;else{if("close"!==t)throw new Error("Unrecognized command received: "+t);n?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(n,(()=>{this.onClosed_()}))):this.onClosed_()}}),((...e)=>{const[t,n]=e;this.incrementIncomingBytes_(e),this.myPacketOrderer.handleResponse(t,n)}),(()=>{this.onClosed_()}),this.urlFn);const e={};e[se]="t",e.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(e.cb=this.scriptTagHolder.uniqueCallbackIdentifier),e.v=$,this.transportSessionId&&(e.s=this.transportSessionId),this.lastSessionId&&(e.ls=this.lastSessionId),this.applicationId&&(e.p=this.applicationId),this.appCheckToken&&(e[G]=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&Y.test(location.hostname)&&(e.r="f");const t=this.urlFn(e);this.log_("Connecting via long-poll to "+t),this.scriptTagHolder.addTag(t,(()=>{}))}))}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){re.forceAllow_=!0}static forceDisallow(){re.forceDisallow_=!0}static isAvailable(){return!(0,o.isNodeSdk)()&&(!!re.forceAllow_||!(re.forceDisallow_||"undefined"==typeof document||null==document.createElement||"object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href)||"object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=(0,o.base64Encode)(t),i=M(n,1840);for(let e=0;e<i.length;e++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[e]),this.curSegmentNum++}addDisconnectPingFrame(e,t){if((0,o.isNodeSdk)())return;this.myDisconnFrame=document.createElement("iframe");const n={dframe:"t"};n.id=e,n.pw=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=(0,o.stringify)(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class oe{constructor(e,t,n,i){if(this.onDisconnect=n,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,o.isNodeSdk)())this.commandCB=e,this.onMessageCB=t;else{this.uniqueCallbackIdentifier=y(),window["pLPCommand"+this.uniqueCallbackIdentifier]=e,window["pRTLPCB"+this.uniqueCallbackIdentifier]=t,this.myIFrame=oe.createIFrame_();let n="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){n='<script>document.domain="'+document.domain+'";<\/script>'}const i="<html><body>"+n+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(i),this.myIFrame.doc.close()}catch(e){E("frame writing exception"),e.stack&&E(e.stack),E(e)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",!document.body)throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";document.body.appendChild(e);try{e.contentWindow.document||E("No IE domain setting required")}catch(t){const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout((()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)}),Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e.id=this.myID,e.pw=this.myPW,e.ser=this.currentSerial;let t=this.urlFn(e),n="",i=0;for(;this.pendingSegs.length>0;){if(!(this.pendingSegs[0].d.length+30+n.length<=1870))break;{const e=this.pendingSegs.shift();n=n+"&seg"+i+"="+e.seg+"&ts"+i+"="+e.ts+"&d"+i+"="+e.d,i++}}return t+=n,this.addLongPollTag_(t,this.currentSerial),!0}return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(n,Math.floor(25e3));this.addTag(e,(()=>{clearTimeout(i),n()}))}addTag(e,t){(0,o.isNodeSdk)()?this.doNodeLongPoll(e,t):setTimeout((()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const e=n.readyState;e&&"loaded"!==e&&"complete"!==e||(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{E("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch(e){}}),Math.floor(1))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ae=null;"undefined"!=typeof MozWebSocket?ae=MozWebSocket:"undefined"!=typeof WebSocket&&(ae=WebSocket);class le{constructor(e,t,n,i,s,r,o){this.connId=e,this.applicationId=n,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=T(this.connId),this.stats_=ne(t),this.connURL=le.connectionURL_(t,r,o,i,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,i,s){const r={};return r.v=$,!(0,o.isNodeSdk)()&&"undefined"!=typeof location&&location.hostname&&Y.test(location.hostname)&&(r.r="f"),t&&(r.s=t),n&&(r.ls=n),i&&(r[G]=i),s&&(r.p=s),X(e,K,r)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,f.set("previous_websocket_failure",!0);try{let e;if((0,o.isNodeSdk)()){const t=this.nodeAdmin?"AdminNode":"Node";e={headers:{"User-Agent":`Firebase/${$}/${u}/${l.platform}/${t}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(e.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(e.headers["X-Firebase-AppCheck"]=this.appCheckToken);const n={},i=0===this.connURL.indexOf("wss://")?n.HTTPS_PROXY||n.https_proxy:n.HTTP_PROXY||n.http_proxy;i&&(e.proxy={origin:i})}this.mySock=new ae(this.connURL,[],e)}catch(e){this.log_("Error instantiating WebSocket.");const t=e.message||e.data;return t&&this.log_(t),void this.onClosed_()}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=e=>{this.handleIncomingFrame(e)},this.mySock.onerror=e=>{this.log_("WebSocket error.  Closing connection.");const t=e.message||e.data;t&&this.log_(t),this.onClosed_()}}start(){}static forceDisallow(){le.forceDisallow_=!0}static isAvailable(){let e=!1;if("undefined"!=typeof navigator&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&null!==ae&&!le.forceDisallow_}static previouslyFailed(){return f.isInMemoryStorage||!0===f.get("previous_websocket_failure")}markConnectionHealthy(){f.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const e=this.frames.join("");this.frames=null;const t=(0,o.jsonEval)(e);this.onMessage(t)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if((0,o.assert)(null===this.frames,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(null===this.mySock)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(t);else{const e=this.extractFrameCount_(t);null!==e&&this.appendFrame_(e)}}send(e){this.resetKeepAlive();const t=(0,o.stringify)(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=M(t,16384);n.length>1&&this.sendString_(String(n.length));for(let e=0;e<n.length;e++)this.sendString_(n[e])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval((()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()}),Math.floor(45e3))}sendString_(e){try{this.mySock.send(e)}catch(e){this.log_("Exception thrown from WebSocket.send():",e.message||e.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}le.responsesRequiredToBeHealthy=2,le.healthyTimeout=3e4;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class he{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[re,le]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=le&&le.isAvailable();let n=t&&!le.previouslyFailed();if(e.webSocketOnly&&(t||x("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[le];else{const e=this.transports_=[];for(const t of he.ALL_TRANSPORTS)t&&t.isAvailable()&&e.push(t);he.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}he.globalTransportInitialized_=!1;class ce{constructor(e,t,n,i,s,r,o,a,l,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=r,this.onReady_=o,this.onDisconnect_=a,this.onKill_=l,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=T("c:"+this.id+":"),this.transportManager_=new he(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout((()=>{this.conn_&&this.conn_.open(t,n)}),Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=j((()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))}),Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{2!==this.state_&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if("t"in e){const t=e.t;"a"===t?this.upgradeIfSecondaryHealthy_():"r"===t?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),this.tx_!==this.secondaryConn_&&this.rx_!==this.secondaryConn_||this.close()):"o"===t&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=O("t",e),n=O("d",e);if("c"===t)this.onSecondaryControl_(n);else{if("d"!==t)throw new Error("Unknown protocol layer: "+t);this.pendingDataMessages.push(n)}}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=O("t",e),n=O("d",e);"c"===t?this.onControl_(n):"d"===t&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=O("t",e);if("d"in e){const n=e.d;if("h"===t){const e=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(e.h=this.repoInfo_.host),this.onHandshake_(e)}else if("n"===t){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let e=0;e<this.pendingDataMessages.length;++e)this.onDataMessage_(this.pendingDataMessages[e]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===t?this.onConnectionShutdown_(n):"r"===t?this.onReset_(n):"e"===t?S("Server Error: "+n):"o"===t?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):S("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$!==n&&x("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),j((()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())}),Math.floor(6e4))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):j((()=>{this.sendPingOnPrimaryIfNecessary_()}),Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,this.tx_!==e&&this.rx_!==e||this.close()}onConnectionLost_(e){this.conn_=null,e||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(f.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(e)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{put(e,t,n,i){}merge(e,t,n,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(e){this.allowedEvents_=e,this.listeners_={},(0,o.assert)(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let e=0;e<n.length;e++)n[e].callback.apply(n[e].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const i=this.getInitialEvent(e);i&&t.apply(n,i)}off(e,t,n){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let e=0;e<i.length;e++)if(i[e].callback===t&&(!n||n===i[e].context))return void i.splice(e,1)}validateEventType_(e){(0,o.assert)(this.allowedEvents_.find((t=>t===e)),"Unknown event: "+e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe extends de{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,o.isMobileCordova)()||(window.addEventListener("online",(()=>{this.online_||(this.online_=!0,this.trigger("online",!0))}),!1),window.addEventListener("offline",(()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))}),!1))}static getInstance(){return new pe}getInitialEvent(e){return(0,o.assert)("online"===e,"Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e=32,fe=768;class ge{constructor(e,t){if(void 0===t){this.pieces_=e.split("/");let t=0;for(let e=0;e<this.pieces_.length;e++)this.pieces_[e].length>0&&(this.pieces_[t]=this.pieces_[e],t++);this.pieces_.length=t,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)""!==this.pieces_[t]&&(e+="/"+this.pieces_[t]);return e||"/"}}function me(){return new ge("")}function ye(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function ve(e){return e.pieces_.length-e.pieceNum_}function Ce(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new ge(e.pieces_,t)}function we(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function be(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Ie(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new ge(t,0)}function Ee(e,t){const n=[];for(let t=e.pieceNum_;t<e.pieces_.length;t++)n.push(e.pieces_[t]);if(t instanceof ge)for(let e=t.pieceNum_;e<t.pieces_.length;e++)n.push(t.pieces_[e]);else{const e=t.split("/");for(let t=0;t<e.length;t++)e[t].length>0&&n.push(e[t])}return new ge(n,0)}function Te(e){return e.pieceNum_>=e.pieces_.length}function Se(e,t){const n=ye(e),i=ye(t);if(null===n)return t;if(n===i)return Se(Ce(e),Ce(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function ke(e,t){const n=be(e,0),i=be(t,0);for(let e=0;e<n.length&&e<i.length;e++){const t=D(n[e],i[e]);if(0!==t)return t}return n.length===i.length?0:n.length<i.length?-1:1}function xe(e,t){if(ve(e)!==ve(t))return!1;for(let n=e.pieceNum_,i=t.pieceNum_;n<=e.pieces_.length;n++,i++)if(e.pieces_[n]!==t.pieces_[i])return!1;return!0}function Ne(e,t){let n=e.pieceNum_,i=t.pieceNum_;if(ve(e)>ve(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[i])return!1;++n,++i}return!0}class Pe{constructor(e,t){this.errorPrefix_=t,this.parts_=be(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let e=0;e<this.parts_.length;e++)this.byteLength_+=(0,o.stringLength)(this.parts_[e]);Re(this)}}function Re(e){if(e.byteLength_>fe)throw new Error(e.errorPrefix_+"has a key path longer than "+fe+" bytes ("+e.byteLength_+").");if(e.parts_.length>_e)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+_e+") or object contains a cycle "+De(e))}function De(e){return 0===e.parts_.length?"":"in property '"+e.parts_.join(".")+"'"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends de{constructor(){let e,t;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(t="visibilitychange",e="hidden"):void 0!==document.mozHidden?(t="mozvisibilitychange",e="mozHidden"):void 0!==document.msHidden?(t="msvisibilitychange",e="msHidden"):void 0!==document.webkitHidden&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,(()=>{const t=!document[e];t!==this.visible_&&(this.visible_=t,this.trigger("visible",t))}),!1)}static getInstance(){return new Ae}getInitialEvent(e){return(0,o.assert)("visible"===e,"Unknown event type: "+e),[this.visible_]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oe=1e3;class Le extends ue{constructor(e,t,n,i,s,r,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=r,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Le.nextPersistentConnectionId_++,this.log_=T("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Oe,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!(0,o.isNodeSdk)())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ae.getInstance().on("visible",this.onVisible_,this),-1===e.host.indexOf("fblocal")&&pe.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const i=++this.requestNumber_,s={r:i,a:e,b:t};this.log_((0,o.stringify)(s)),(0,o.assert)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[i]=n)}get(e){this.initConnection_();const t=new(0,o.Deferred),n={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:e=>{const n=e.d;"ok"===e.s?t.resolve(n):t.reject(n)}};this.outstandingGets_.push(n),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,i){this.initConnection_();const s=e._queryIdentifier,r=e._path.toString();this.log_("Listen called for "+r+" "+s),this.listens.has(r)||this.listens.set(r,new Map),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,o.assert)(!this.listens.get(r).has(s),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:n};this.listens.get(r).set(s,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,(n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)}))}sendListen_(e){const t=e.query,n=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+n+" for "+i);const s={p:n};e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest("q",s,(s=>{const r=s.d,o=s.s;Le.warnOnListenWarnings_(r,t);(this.listens.get(n)&&this.listens.get(n).get(i))===e&&(this.log_("listen response",s),"ok"!==o&&this.removeListen_(n,i),e.onComplete&&e.onComplete(o,r))}))}static warnOnListenWarnings_(e,t){if(e&&"object"==typeof e&&(0,o.contains)(e,"w")){const n=(0,o.safeGet)(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const e='".indexOn": "'+t._queryParams.getIndex().toString()+'"',n=t._path.toString();x(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${e} at ${n} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},(()=>{})),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&40===e.length||(0,o.isAdmin)(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},(()=>{}))}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=(0,o.isValidFormat)(e)?"auth":"gauth",n={cred:e};null===this.authOverride_?n.noauth=!0:"object"==typeof this.authOverride_&&(n.authvar=this.authOverride_),this.sendRequest(t,n,(t=>{const n=t.s,i=t.d||"error";this.authToken_===e&&("ok"===n?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(n,i))}))}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},(e=>{const t=e.s,n=e.d||"error";"ok"===t?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)}))}unlisten(e,t){const n=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+i),(0,o.assert)(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");this.removeListen_(n,i)&&this.connected_&&this.sendUnlisten_(n,i,e._queryObject,t)}sendUnlisten_(e,t,n,i){this.log_("Unlisten on "+e+" for "+t);const s={p:e};i&&(s.q=n,s.t=i),this.sendRequest("n",s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,i){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,(e=>{i&&setTimeout((()=>{i(e.s,e.d)}),Math.floor(0))}))}put(e,t,n,i){this.putInternal("p",e,t,n,i)}merge(e,t,n,i){this.putInternal("m",e,t,n,i)}putInternal(e,t,n,i,s){this.initConnection_();const r={p:t,d:n};void 0!==s&&(r.h=s),this.outstandingPuts_.push({action:e,request:r,onComplete:i}),this.outstandingPutCount_++;const o=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(o):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,(n=>{this.log_(t+" response",n),delete this.outstandingPuts_[e],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),i&&i(n.s,n.d)}))}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,(e=>{if("ok"!==e.s){const t=e.d;this.log_("reportStats","Error sending stats: "+t)}}))}}onDataMessage_(e){if("r"in e){this.log_("from server: "+(0,o.stringify)(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),"d"===e?this.onDataUpdate_(t.p,t.d,!1,t.t):"m"===e?this.onDataUpdate_(t.p,t.d,!0,t.t):"c"===e?this.onListenRevoked_(t.p,t.q):"ac"===e?this.onAuthRevoked_(t.s,t.d):"apc"===e?this.onAppCheckRevoked_(t.s,t.d):"sd"===e?this.onSecurityDebugPacket_(t):S("Unrecognized action received from server: "+(0,o.stringify)(e)+"\nAre you using the latest client?")}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=(new Date).getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){(0,o.assert)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout((()=>{this.establishConnectionTimer_=null,this.establishConnection_()}),Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){(new Date).getTime()-this.lastConnectionEstablishedTime_>3e4&&(this.reconnectDelay_=Oe),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=(new Date).getTime();const e=(new Date).getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=(new Date).getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Le.nextConnectionId_++,s=this.lastSessionId;let r=!1,a=null;const l=function(){a?a.close():(r=!0,n())},h=function(e){(0,o.assert)(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(e)};this.realtime_={close:l,sendRequest:h};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[o,l]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);r?E("getToken() completed but was canceled"):(E("getToken() completed. Creating connection."),this.authToken_=o&&o.accessToken,this.appCheckToken_=l&&l.token,a=new ce(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,(e=>{x(e+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")}),s))}catch(e){this.log_("Failed to get token: "+e),r||(this.repoInfo_.nodeAdmin&&x(e),l())}}}interrupt(e){E("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){E("Resuming connection for reason: "+e),delete this.interruptReasons_[e],(0,o.isEmpty)(this.interruptReasons_)&&(this.reconnectDelay_=Oe,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-(new Date).getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;n=t?t.map((e=>L(e))).join("$"):"default";const i=this.removeListen_(e,n);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const n=new ge(e).toString();let i;if(this.listens.has(n)){const e=this.listens.get(n);i=e.get(t),e.delete(t),0===e.size&&this.listens.delete(n)}else i=void 0;return i}onAuthRevoked_(e,t){E("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){E("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,"invalid_token"!==e&&"permission_denied"!==e||(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace("\n","\nFIREBASE: "))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";(0,o.isNodeSdk)()&&(t=this.repoInfo_.nodeAdmin?"admin_node":"node"),e["sdk."+t+"."+u.replace(/\./g,"-")]=1,(0,o.isMobileCordova)()?e["framework.cordova"]=1:(0,o.isReactNative)()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pe.getInstance().currentlyOnline();return(0,o.isEmpty)(this.interruptReasons_)&&e}}Le.nextPersistentConnectionId_=0,Le.nextConnectionId_=0;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Me{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new Me(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new Me(P,e),i=new Me(P,t);return 0!==this.compare(n,i)}minPost(){return Me.MIN}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qe;class Ue extends Fe{static get __EMPTY_NODE(){return qe}static set __EMPTY_NODE(e){qe=e}compare(e,t){return D(e.name,t.name)}isDefinedOn(e){throw(0,o.assertionError)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return Me.MIN}maxPost(){return new Me(R,qe)}makePost(e,t){return(0,o.assert)("string"==typeof e,"KeyIndex indexValue must always be a string."),new Me(e,qe)}toString(){return".key"}}const Be=new Ue;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,t,n,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,i&&(r*=-1),r<0)e=this.isReverse_?e.left:e.right;else{if(0===r){this.nodeStack_.push(e);break}this.nodeStack_.push(e),e=this.isReverse_?e.right:e.left}}getNext(){if(0===this.nodeStack_.length)return null;let e,t=this.nodeStack_.pop();if(e=this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return e}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class je{constructor(e,t,n,i,s){this.key=e,this.value=t,this.color=null!=n?n:je.RED,this.left=null!=i?i:He.EMPTY_NODE,this.right=null!=s?s:He.EMPTY_NODE}copy(e,t,n,i,s){return new je(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=s?s:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const s=n(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===s?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return He.EMPTY_NODE;let e=this;return e.left.isRed_()||e.left.left.isRed_()||(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,i;if(n=this,t(e,n.key)<0)n.left.isEmpty()||n.left.isRed_()||n.left.left.isRed_()||(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),n.right.isEmpty()||n.right.isRed_()||n.right.left.isRed_()||(n=n.moveRedRight_()),0===t(e,n.key)){if(n.right.isEmpty())return He.EMPTY_NODE;i=n.right.min_(),n=n.copy(i.key,i.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}je.RED=!0,je.BLACK=!1;class He{constructor(e,t=He.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new He(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,je.BLACK,null,null))}remove(e){return new He(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,je.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,i=null;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),0===t){if(n.left.isEmpty())return i?i.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}t<0?n=n.left:t>0&&(i=n,n=n.right)}throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new We(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new We(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new We(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new We(this.root_,null,this.comparator_,!0,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ve(e,t){return D(e.name,t.name)}function ze(e,t){return D(e,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e;He.EMPTY_NODE=new class{copy(e,t,n,i,s){return this}insert(e,t,n){return new je(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};const Ye=function(e){return"number"==typeof e?"number:"+q(e):"string:"+e},Ge=function(e){if(e.isLeafNode()){const t=e.val();(0,o.assert)("string"==typeof t||"number"==typeof t||"object"==typeof t&&(0,o.contains)(t,".sv"),"Priority must be a string or number.")}else(0,o.assert)(e===$e||e.isEmpty(),"priority of unexpected type.");(0,o.assert)(e===$e||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Ke,Qe,Je;class Xe{constructor(e,t=Xe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,(0,o.assert)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),Ge(this.priorityNode_)}static set __childrenNodeConstructor(e){Ke=e}static get __childrenNodeConstructor(){return Ke}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Xe(this.value_,e)}getImmediateChild(e){return".priority"===e?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Te(e)?this:".priority"===ye(e)?this.priorityNode_:Xe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return".priority"===e?this.updatePriority(t):t.isEmpty()&&".priority"!==e?this:Xe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ye(e);return null===n?t:t.isEmpty()&&".priority"!==n?this:((0,o.assert)(".priority"!==n||1===ve(e),".priority must be the last token in a path"),this.updateImmediateChild(n,Xe.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ce(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Ye(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",e+="number"===t?q(this.value_):this.value_,this.lazyHash_=v(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Xe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Xe.__childrenNodeConstructor?-1:((0,o.assert)(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,i=Xe.VALUE_TYPE_ORDER.indexOf(t),s=Xe.VALUE_TYPE_ORDER.indexOf(n);return(0,o.assert)(i>=0,"Unknown leaf type: "+t),(0,o.assert)(s>=0,"Unknown leaf type: "+n),i===s?"object"===n?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}return!1}}Xe.VALUE_TYPE_ORDER=["object","boolean","number","string"];const Ze=new class extends Fe{compare(e,t){const n=e.node.getPriority(),i=t.node.getPriority(),s=n.compareTo(i);return 0===s?D(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return Me.MIN}maxPost(){return new Me(R,new Xe("[PRIORITY-POST]",Je))}makePost(e,t){const n=Qe(e);return new Me(t,new Xe("[PRIORITY-POST]",n))}toString(){return".priority"}},et=Math.log(2);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){var t;this.count=(t=e+1,parseInt(Math.log(t)/et,10)),this.current_=this.count-1;const n=(i=this.count,parseInt(Array(i+1).join("1"),2));var i;this.bits_=e+1&n}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const nt=function(e,t,n,i){e.sort(t);const s=function(t,i){const r=i-t;let o,a;if(0===r)return null;if(1===r)return o=e[t],a=n?n(o):o,new je(a,o.node,je.BLACK,null,null);{const l=parseInt(r/2,10)+t,h=s(t,l),c=s(l+1,i);return o=e[l],a=n?n(o):o,new je(a,o.node,je.BLACK,h,c)}},r=function(t){let i=null,r=null,o=e.length;const a=function(t,i){const r=o-t,a=o;o-=t;const h=s(r+1,a),c=e[r],u=n?n(c):c;l(new je(u,c.node,i,null,h))},l=function(e){i?(i.left=e,i=e):(r=e,i=e)};for(let e=0;e<t.count;++e){const n=t.nextBitIsOne(),i=Math.pow(2,t.count-(e+1));n?a(i,je.BLACK):(a(i,je.BLACK),a(i,je.RED))}return r}(new tt(e.length));return new He(i||t,r)};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it;const st={};class rt{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return(0,o.assert)(st&&Ze,"ChildrenNode.ts has not been loaded"),it=it||new rt({".priority":st},{".priority":Ze}),it}get(e){const t=(0,o.safeGet)(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof He?t:null}hasIndex(e){return(0,o.contains)(this.indexSet_,e.toString())}addIndex(e,t){(0,o.assert)(e!==Be,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let i=!1;const s=t.getIterator(Me.Wrap);let r,a=s.getNext();for(;a;)i=i||e.isDefinedOn(a.node),n.push(a),a=s.getNext();r=i?nt(n,e.getCompare()):st;const l=e.toString(),h=Object.assign({},this.indexSet_);h[l]=e;const c=Object.assign({},this.indexes_);return c[l]=r,new rt(c,h)}addToIndexes(e,t){const n=(0,o.map)(this.indexes_,((n,i)=>{const s=(0,o.safeGet)(this.indexSet_,i);if((0,o.assert)(s,"Missing index implementation for "+i),n===st){if(s.isDefinedOn(e.node)){const n=[],i=t.getIterator(Me.Wrap);let r=i.getNext();for(;r;)r.name!==e.name&&n.push(r),r=i.getNext();return n.push(e),nt(n,s.getCompare())}return st}{const i=t.get(e.name);let s=n;return i&&(s=s.remove(new Me(e.name,i))),s.insert(e,e.node)}}));return new rt(n,this.indexSet_)}removeFromIndexes(e,t){const n=(0,o.map)(this.indexes_,(n=>{if(n===st)return n;{const i=t.get(e.name);return i?n.remove(new Me(e.name,i)):n}}));return new rt(n,this.indexSet_)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ot;class at{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&Ge(this.priorityNode_),this.children_.isEmpty()&&(0,o.assert)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return ot||(ot=new at(new He(ze),null,rt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ot}updatePriority(e){return this.children_.isEmpty()?this:new at(this.children_,e,this.indexMap_)}getImmediateChild(e){if(".priority"===e)return this.getPriority();{const t=this.children_.get(e);return null===t?ot:t}}getChild(e){const t=ye(e);return null===t?this:this.getImmediateChild(t).getChild(Ce(e))}hasChild(e){return null!==this.children_.get(e)}updateImmediateChild(e,t){if((0,o.assert)(t,"We should always be passing snapshot nodes"),".priority"===e)return this.updatePriority(t);{const n=new Me(e,t);let i,s;t.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(i=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const r=i.isEmpty()?ot:this.priorityNode_;return new at(i,r,s)}}updateChild(e,t){const n=ye(e);if(null===n)return t;{(0,o.assert)(".priority"!==ye(e)||1===ve(e),".priority must be the last token in a path");const i=this.getImmediateChild(n).updateChild(Ce(e),t);return this.updateImmediateChild(n,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,i=0,s=!0;if(this.forEachChild(Ze,((r,o)=>{t[r]=o.val(e),n++,s&&at.INTEGER_REGEXP_.test(r)?i=Math.max(i,Number(r)):s=!1})),!e&&s&&i<2*n){const e=[];for(const n in t)e[n]=t[n];return e}return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(null===this.lazyHash_){let e="";this.getPriority().isEmpty()||(e+="priority:"+Ye(this.getPriority().val())+":"),this.forEachChild(Ze,((t,n)=>{const i=n.hash();""!==i&&(e+=":"+t+":"+i)})),this.lazyHash_=""===e?"":v(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const i=this.resolveIndex_(n);if(i){const n=i.getPredecessorKey(new Me(e,t));return n?n.name:null}return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.minKey();return e&&e.name}return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new Me(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const e=t.maxKey();return e&&e.name}return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new Me(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal((e=>t(e.name,e.node))):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,(e=>e));{const n=this.children_.getIteratorFrom(e.name,Me.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)<0;)n.getNext(),i=n.peek();return n}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,(e=>e));{const n=this.children_.getReverseIteratorFrom(e.name,Me.Wrap);let i=n.peek();for(;null!=i&&t.compare(i,e)>0;)n.getNext(),i=n.peek();return n}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===lt?-1:0}withIndex(e){if(e===Be||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new at(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Be||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority())){if(this.children_.count()===t.children_.count()){const e=this.getIterator(Ze),n=t.getIterator(Ze);let i=e.getNext(),s=n.getNext();for(;i&&s;){if(i.name!==s.name||!i.node.equals(s.node))return!1;i=e.getNext(),s=n.getNext()}return null===i&&null===s}return!1}return!1}}resolveIndex_(e){return e===Be?null:this.indexMap_.get(e.toString())}}at.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;const lt=new class extends at{constructor(){super(new He(ze),at.EMPTY_NODE,rt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return at.EMPTY_NODE}isEmpty(){return!1}};Object.defineProperties(Me,{MIN:{value:new Me(P,at.EMPTY_NODE)},MAX:{value:new Me(R,lt)}}),Ue.__EMPTY_NODE=at.EMPTY_NODE,Xe.__childrenNodeConstructor=at,$e=lt,function(e){Je=e}(lt);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ht=!0;function ct(e,t=null){if(null===e)return at.EMPTY_NODE;if("object"==typeof e&&".priority"in e&&(t=e[".priority"]),(0,o.assert)(null===t||"string"==typeof t||"number"==typeof t||"object"==typeof t&&".sv"in t,"Invalid priority type found: "+typeof t),"object"==typeof e&&".value"in e&&null!==e[".value"]&&(e=e[".value"]),"object"!=typeof e||".sv"in e){return new Xe(e,ct(t))}if(e instanceof Array||!ht){let n=at.EMPTY_NODE;return F(e,((t,i)=>{if((0,o.contains)(e,t)&&"."!==t.substring(0,1)){const e=ct(i);!e.isLeafNode()&&e.isEmpty()||(n=n.updateImmediateChild(t,e))}})),n.updatePriority(ct(t))}{const n=[];let i=!1;if(F(e,((e,t)=>{if("."!==e.substring(0,1)){const s=ct(t);s.isEmpty()||(i=i||!s.getPriority().isEmpty(),n.push(new Me(e,s)))}})),0===n.length)return at.EMPTY_NODE;const s=nt(n,Ve,(e=>e.name),ze);if(i){const e=nt(n,Ze.getCompare());return new at(s,ct(t),new rt({".priority":e},{".priority":Ze}))}return new at(s,ct(t),rt.Default)}}!function(e){Qe=e}(ct);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ut extends Fe{constructor(e){super(),this.indexPath_=e,(0,o.assert)(!Te(e)&&".priority"!==ye(e),"Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),i=this.extractChild(t.node),s=n.compareTo(i);return 0===s?D(e.name,t.name):s}makePost(e,t){const n=ct(e),i=at.EMPTY_NODE.updateChild(this.indexPath_,n);return new Me(t,i)}maxPost(){const e=at.EMPTY_NODE.updateChild(this.indexPath_,lt);return new Me(R,e)}toString(){return be(this.indexPath_,0).join("/")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt=new class extends Fe{compare(e,t){const n=e.node.compareTo(t.node);return 0===n?D(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return Me.MIN}maxPost(){return Me.MAX}makePost(e,t){const n=ct(e);return new Me(t,n)}toString(){return".value"}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(e){return{type:"value",snapshotNode:e}}function _t(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function ft(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function gt(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(e){this.index_=e}updateChild(e,t,n,i,s,r){(0,o.assert)(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(n.getChild(i))&&a.isEmpty()===n.isEmpty()?e:(null!=r&&(n.isEmpty()?e.hasChild(t)?r.trackChildChange(ft(t,a)):(0,o.assert)(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?r.trackChildChange(_t(t,n)):r.trackChildChange(gt(t,n,a))),e.isLeafNode()&&n.isEmpty()?e:e.updateImmediateChild(t,n).withIndex(this.index_))}updateFullNode(e,t,n){return null!=n&&(e.isLeafNode()||e.forEachChild(Ze,((e,i)=>{t.hasChild(e)||n.trackChildChange(ft(e,i))})),t.isLeafNode()||t.forEachChild(Ze,((t,i)=>{if(e.hasChild(t)){const s=e.getImmediateChild(t);s.equals(i)||n.trackChildChange(gt(t,i,s))}else n.trackChildChange(_t(t,i))}))),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?at.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.indexedFilter_=new mt(e.getIndex()),this.index_=e.getIndex(),this.startPost_=yt.getStartPost_(e),this.endPost_=yt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,i,s,r){return this.matches(new Me(t,n))||(n=at.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,i,s,r)}updateFullNode(e,t,n){t.isLeafNode()&&(t=at.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(at.EMPTY_NODE);const s=this;return t.forEachChild(Ze,((e,t)=>{s.matches(new Me(e,t))||(i=i.updateImmediateChild(e,at.EMPTY_NODE))})),this.indexedFilter_.updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}return e.getIndex().maxPost()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt{constructor(e){this.withinDirectionalStart=e=>this.reverse_?this.withinEndPost(e):this.withinStartPost(e),this.withinDirectionalEnd=e=>this.reverse_?this.withinStartPost(e):this.withinEndPost(e),this.withinStartPost=e=>{const t=this.index_.compare(this.rangedFilter_.getStartPost(),e);return this.startIsInclusive_?t<=0:t<0},this.withinEndPost=e=>{const t=this.index_.compare(e,this.rangedFilter_.getEndPost());return this.endIsInclusive_?t<=0:t<0},this.rangedFilter_=new yt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,i,s,r){return this.rangedFilter_.matches(new Me(t,n))||(n=at.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,i,s,r):this.fullLimitUpdateChild_(e,t,n,s,r)}updateFullNode(e,t,n){let i;if(t.isLeafNode()||t.isEmpty())i=at.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<t.numChildren()&&t.isIndexed(this.index_)){let e;i=at.EMPTY_NODE.withIndex(this.index_),e=this.reverse_?t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let n=0;for(;e.hasNext()&&n<this.limit_;){const t=e.getNext();if(this.withinDirectionalStart(t)){if(!this.withinDirectionalEnd(t))break;i=i.updateImmediateChild(t.name,t.node),n++}}}else{let e;i=t.withIndex(this.index_),i=i.updatePriority(at.EMPTY_NODE),e=this.reverse_?i.getReverseIterator(this.index_):i.getIterator(this.index_);let n=0;for(;e.hasNext();){const t=e.getNext();n<this.limit_&&this.withinDirectionalStart(t)&&this.withinDirectionalEnd(t)?n++:i=i.updateImmediateChild(t.name,at.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,i,s){let r;if(this.reverse_){const e=this.index_.getCompare();r=(t,n)=>e(n,t)}else r=this.index_.getCompare();const a=e;(0,o.assert)(a.numChildren()===this.limit_,"");const l=new Me(t,n),h=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),c=this.rangedFilter_.matches(l);if(a.hasChild(t)){const e=a.getImmediateChild(t);let o=i.getChildAfterChild(this.index_,h,this.reverse_);for(;null!=o&&(o.name===t||a.hasChild(o.name));)o=i.getChildAfterChild(this.index_,o,this.reverse_);const u=null==o?1:r(o,l);if(c&&!n.isEmpty()&&u>=0)return null!=s&&s.trackChildChange(gt(t,n,e)),a.updateImmediateChild(t,n);{null!=s&&s.trackChildChange(ft(t,e));const n=a.updateImmediateChild(t,at.EMPTY_NODE);return null!=o&&this.rangedFilter_.matches(o)?(null!=s&&s.trackChildChange(_t(o.name,o.node)),n.updateImmediateChild(o.name,o.node)):n}}return n.isEmpty()?e:c&&r(h,l)>=0?(null!=s&&(s.trackChildChange(ft(h.name,h.node)),s.trackChildChange(_t(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(h.name,at.EMPTY_NODE)):e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ze}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return(0,o.assert)(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:P}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return(0,o.assert)(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:R}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,o.assert)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ze}copy(){const e=new Ct;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function wt(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ze?n="$priority":e.index_===dt?n="$value":e.index_===Be?n="$key":((0,o.assert)(e.index_ instanceof ut,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=(0,o.stringify)(n),e.startSet_){const n=e.startAfterSet_?"startAfter":"startAt";t[n]=(0,o.stringify)(e.indexStartValue_),e.startNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexStartName_))}if(e.endSet_){const n=e.endBeforeSet_?"endBefore":"endAt";t[n]=(0,o.stringify)(e.indexEndValue_),e.endNameSet_&&(t[n]+=","+(0,o.stringify)(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function bt(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;""===n&&(n=e.isViewFromLeft()?"l":"r"),t.vf=n}return e.index_!==Ze&&(t.i=e.index_.toString()),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ue{constructor(e,t,n,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=i,this.log_=T("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return void 0!==t?"tag$"+t:((0,o.assert)(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const r=It.getListenId_(e,n),a={};this.listens_[r]=a;const l=wt(e._queryParams);this.restRequest_(s+".json",l,((e,t)=>{let l=t;if(404===e&&(l=null,e=null),null===e&&this.onDataUpdate_(s,l,!1,n),(0,o.safeGet)(this.listens_,r)===a){let t;t=e?401===e?"permission_denied":"rest_error:"+e:"ok",i(t,null)}}))}unlisten(e,t){const n=It.getListenId_(e,t);delete this.listens_[n]}get(e){const t=wt(e._queryParams),n=e._path.toString(),i=new(0,o.Deferred);return this.restRequest_(n+".json",t,((e,t)=>{let s=t;404===e&&(s=null,e=null),null===e?(this.onDataUpdate_(n,s,!1,null),i.resolve(s)):i.reject(new Error(s))})),i.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then((([i,s])=>{i&&i.accessToken&&(t.auth=i.accessToken),s&&s.token&&(t.ac=s.token);const r=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+(0,o.querystring)(t);this.log_("Sending REST request for "+r);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&4===a.readyState){this.log_("REST Response for "+r+" received. status:",a.status,"response:",a.responseText);let e=null;if(a.status>=200&&a.status<300){try{e=(0,o.jsonEval)(a.responseText)}catch(e){x("Failed to parse JSON response for "+r+": "+a.responseText)}n(null,e)}else 401!==a.status&&404!==a.status&&x("Got unsuccessful REST response for "+r+" Status: "+a.status),n(a.status);n=null}},a.open("GET",r,!0),a.send()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(){this.rootNode_=at.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(){return{value:null,children:new Map}}function St(e,t,n){if(Te(t))e.value=n,e.children.clear();else if(null!==e.value)e.value=e.value.updateChild(t,n);else{const i=ye(t);e.children.has(i)||e.children.set(i,Tt());St(e.children.get(i),t=Ce(t),n)}}function kt(e,t,n){null!==e.value?n(t,e.value):function(e,t){e.children.forEach(((e,n)=>{t(n,e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,((e,i)=>{kt(i,new ge(t.toString()+"/"+e),n)}))}class xt{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&F(this.last_,((e,n)=>{t[e]=t[e]-n})),this.last_=e,t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new xt(e);const n=1e4+2e4*Math.random();j(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;F(e,((e,i)=>{i>0&&(0,o.contains)(this.statsToReport_,e)&&(t[e]=i,n=!0)})),n&&this.server_.reportStats(t),j(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt,Rt;function Dt(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(Rt=Pt||(Pt={}))[Rt.OVERWRITE=0]="OVERWRITE",Rt[Rt.MERGE=1]="MERGE",Rt[Rt.ACK_USER_WRITE=2]="ACK_USER_WRITE",Rt[Rt.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";class At{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Pt.ACK_USER_WRITE,this.source={fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}operationForChild(e){if(Te(this.path)){if(null!=this.affectedTree.value)return(0,o.assert)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new ge(e));return new At(me(),t,this.revert)}}return(0,o.assert)(ye(this.path)===e,"operationForChild called for unrelated child."),new At(Ce(this.path),this.affectedTree,this.revert)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e,t){this.source=e,this.path=t,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return Te(this.path)?new Ot(this.source,me()):new Ot(this.source,Ce(this.path))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Pt.OVERWRITE}operationForChild(e){return Te(this.path)?new Lt(this.source,me(),this.snap.getImmediateChild(e)):new Lt(this.source,Ce(this.path),this.snap)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Pt.MERGE}operationForChild(e){if(Te(this.path)){const t=this.children.subtree(new ge(e));return t.isEmpty()?null:t.value?new Lt(this.source,me(),t.value):new Mt(this.source,me(),t)}return(0,o.assert)(ye(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Mt(this.source,Ce(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Te(e))return this.isFullyInitialized()&&!this.filtered_;const t=ye(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ut(e,t,n,i,s,r){const a=i.filter((e=>e.type===n));a.sort(((t,n)=>function(e,t,n){if(null==t.childName||null==n.childName)throw(0,o.assertionError)("Should only compare child_ events.");const i=new Me(t.childName,t.snapshotNode),s=new Me(n.childName,n.snapshotNode);return e.index_.compare(i,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))),a.forEach((n=>{const i=function(e,t,n){return"value"===t.type||"child_removed"===t.type||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}(e,n,r);s.forEach((s=>{s.respondsTo(n.type)&&t.push(s.createEvent(i,e.query_))}))}))}function Bt(e,t){return{eventCache:e,serverCache:t}}function Wt(e,t,n,i){return Bt(new Ft(t,n,i),e.serverCache)}function jt(e,t,n,i){return Bt(e.eventCache,new Ft(t,n,i))}function Ht(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function Vt(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt;class $t{constructor(e,t=(()=>(zt||(zt=new He(A)),zt))()){this.value=e,this.children=t}static fromObject(e){let t=new $t(null);return F(e,((e,n)=>{t=t.set(new ge(e),n)})),t}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(null!=this.value&&t(this.value))return{path:me(),value:this.value};if(Te(e))return null;{const n=ye(e),i=this.children.get(n);if(null!==i){const s=i.findRootMostMatchingPathAndValue(Ce(e),t);if(null!=s){return{path:Ee(new ge(n),s.path),value:s.value}}return null}return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,(()=>!0))}subtree(e){if(Te(e))return this;{const t=ye(e),n=this.children.get(t);return null!==n?n.subtree(Ce(e)):new $t(null)}}set(e,t){if(Te(e))return new $t(t,this.children);{const n=ye(e),i=(this.children.get(n)||new $t(null)).set(Ce(e),t),s=this.children.insert(n,i);return new $t(this.value,s)}}remove(e){if(Te(e))return this.children.isEmpty()?new $t(null):new $t(null,this.children);{const t=ye(e),n=this.children.get(t);if(n){const i=n.remove(Ce(e));let s;return s=i.isEmpty()?this.children.remove(t):this.children.insert(t,i),null===this.value&&s.isEmpty()?new $t(null):new $t(this.value,s)}return this}}get(e){if(Te(e))return this.value;{const t=ye(e),n=this.children.get(t);return n?n.get(Ce(e)):null}}setTree(e,t){if(Te(e))return t;{const n=ye(e),i=(this.children.get(n)||new $t(null)).setTree(Ce(e),t);let s;return s=i.isEmpty()?this.children.remove(n):this.children.insert(n,i),new $t(this.value,s)}}fold(e){return this.fold_(me(),e)}fold_(e,t){const n={};return this.children.inorderTraversal(((i,s)=>{n[i]=s.fold_(Ee(e,i),t)})),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,me(),t)}findOnPath_(e,t,n){const i=!!this.value&&n(t,this.value);if(i)return i;if(Te(e))return null;{const i=ye(e),s=this.children.get(i);return s?s.findOnPath_(Ce(e),Ee(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,me(),t)}foreachOnPath_(e,t,n){if(Te(e))return this;{this.value&&n(t,this.value);const i=ye(e),s=this.children.get(i);return s?s.foreachOnPath_(Ce(e),Ee(t,i),n):new $t(null)}}foreach(e){this.foreach_(me(),e)}foreach_(e,t){this.children.inorderTraversal(((n,i)=>{i.foreach_(Ee(e,n),t)})),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal(((t,n)=>{n.value&&e(t,n.value)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.writeTree_=e}static empty(){return new Yt(new $t(null))}}function Gt(e,t,n){if(Te(t))return new Yt(new $t(n));{const i=e.writeTree_.findRootMostValueAndPath(t);if(null!=i){const s=i.path;let r=i.value;const o=Se(s,t);return r=r.updateChild(o,n),new Yt(e.writeTree_.set(s,r))}{const i=new $t(n),s=e.writeTree_.setTree(t,i);return new Yt(s)}}}function Kt(e,t,n){let i=e;return F(n,((e,n)=>{i=Gt(i,Ee(t,e),n)})),i}function Qt(e,t){if(Te(t))return Yt.empty();{const n=e.writeTree_.setTree(t,new $t(null));return new Yt(n)}}function Jt(e,t){return null!=Xt(e,t)}function Xt(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return null!=n?e.writeTree_.get(n.path).getChild(Se(n.path,t)):null}function Zt(e){const t=[],n=e.writeTree_.value;return null!=n?n.isLeafNode()||n.forEachChild(Ze,((e,n)=>{t.push(new Me(e,n))})):e.writeTree_.children.inorderTraversal(((e,n)=>{null!=n.value&&t.push(new Me(e,n.value))})),t}function en(e,t){if(Te(t))return e;{const n=Xt(e,t);return new Yt(null!=n?new $t(n):e.writeTree_.subtree(t))}}function tn(e){return e.writeTree_.isEmpty()}function nn(e,t){return sn(me(),e.writeTree_,t)}function sn(e,t,n){if(null!=t.value)return n.updateChild(e,t.value);{let i=null;return t.children.inorderTraversal(((t,s)=>{".priority"===t?((0,o.assert)(null!==s.value,"Priority writes must always be leaf nodes"),i=s.value):n=sn(Ee(e,t),s,n)})),n.getChild(e).isEmpty()||null===i||(n=n.updateChild(Ee(e,".priority"),i)),n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(e,t){return yn(t,e)}function on(e,t){const n=e.allWrites.findIndex((e=>e.writeId===t));(0,o.assert)(n>=0,"removeWrite called with nonexistent writeId.");const i=e.allWrites[n];e.allWrites.splice(n,1);let s=i.visible,r=!1,a=e.allWrites.length-1;for(;s&&a>=0;){const t=e.allWrites[a];t.visible&&(a>=n&&an(t,i.path)?s=!1:Ne(i.path,t.path)&&(r=!0)),a--}if(s){if(r)return function(e){e.visibleWrites=hn(e.allWrites,ln,me()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}(e),!0;if(i.snap)e.visibleWrites=Qt(e.visibleWrites,i.path);else{F(i.children,(t=>{e.visibleWrites=Qt(e.visibleWrites,Ee(i.path,t))}))}return!0}return!1}function an(e,t){if(e.snap)return Ne(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Ne(Ee(e.path,n),t))return!0;return!1}function ln(e){return e.visible}function hn(e,t,n){let i=Yt.empty();for(let s=0;s<e.length;++s){const r=e[s];if(t(r)){const e=r.path;let t;if(r.snap)Ne(n,e)?(t=Se(n,e),i=Gt(i,t,r.snap)):Ne(e,n)&&(t=Se(e,n),i=Gt(i,me(),r.snap.getChild(t)));else{if(!r.children)throw(0,o.assertionError)("WriteRecord should have .snap or .children");if(Ne(n,e))t=Se(n,e),i=Kt(i,t,r.children);else if(Ne(e,n))if(t=Se(e,n),Te(t))i=Kt(i,me(),r.children);else{const e=(0,o.safeGet)(r.children,ye(t));if(e){const n=e.getChild(Ce(t));i=Gt(i,me(),n)}}}}}return i}function cn(e,t,n,i,s){if(i||s){const r=en(e.visibleWrites,t);if(!s&&tn(r))return n;if(s||null!=n||Jt(r,me())){const r=function(e){return(e.visible||s)&&(!i||!~i.indexOf(e.writeId))&&(Ne(e.path,t)||Ne(t,e.path))};return nn(hn(e.allWrites,r,t),n||at.EMPTY_NODE)}return null}{const i=Xt(e.visibleWrites,t);if(null!=i)return i;{const i=en(e.visibleWrites,t);if(tn(i))return n;if(null!=n||Jt(i,me())){return nn(i,n||at.EMPTY_NODE)}return null}}}function un(e,t,n,i){return cn(e.writeTree,e.treePath,t,n,i)}function dn(e,t){return function(e,t,n){let i=at.EMPTY_NODE;const s=Xt(e.visibleWrites,t);if(s)return s.isLeafNode()||s.forEachChild(Ze,((e,t)=>{i=i.updateImmediateChild(e,t)})),i;if(n){const s=en(e.visibleWrites,t);return n.forEachChild(Ze,((e,t)=>{const n=nn(en(s,new ge(e)),t);i=i.updateImmediateChild(e,n)})),Zt(s).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}return Zt(en(e.visibleWrites,t)).forEach((e=>{i=i.updateImmediateChild(e.name,e.node)})),i}(e.writeTree,e.treePath,t)}function pn(e,t,n,i){return function(e,t,n,i,s){(0,o.assert)(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Ee(t,n);if(Jt(e.visibleWrites,r))return null;{const t=en(e.visibleWrites,r);return tn(t)?s.getChild(n):nn(t,s.getChild(n))}}(e.writeTree,e.treePath,t,n,i)}function _n(e,t){return function(e,t){return Xt(e.visibleWrites,t)}(e.writeTree,Ee(e.treePath,t))}function fn(e,t,n,i,s,r){return function(e,t,n,i,s,r,o){let a;const l=en(e.visibleWrites,t),h=Xt(l,me());if(null!=h)a=h;else{if(null==n)return[];a=nn(l,n)}if(a=a.withIndex(o),a.isEmpty()||a.isLeafNode())return[];{const e=[],t=o.getCompare(),n=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let l=n.getNext();for(;l&&e.length<s;)0!==t(l,i)&&e.push(l),l=n.getNext();return e}}(e.writeTree,e.treePath,t,n,i,s,r)}function gn(e,t,n){return function(e,t,n,i){const s=Ee(t,n),r=Xt(e.visibleWrites,s);if(null!=r)return r;if(i.isCompleteForChild(n))return nn(en(e.visibleWrites,s),i.getNode().getImmediateChild(n));return null}(e.writeTree,e.treePath,t,n)}function mn(e,t){return yn(Ee(e.treePath,t),e.writeTree)}function yn(e,t){return{treePath:e,writeTree:t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;(0,o.assert)("child_added"===t||"child_changed"===t||"child_removed"===t,"Only child changes supported for tracking"),(0,o.assert)(".priority"!==n,"Only non-priority child changes can be tracked.");const i=this.changeMap.get(n);if(i){const s=i.type;if("child_added"===t&&"child_removed"===s)this.changeMap.set(n,gt(n,e.snapshotNode,i.snapshotNode));else if("child_removed"===t&&"child_added"===s)this.changeMap.delete(n);else if("child_removed"===t&&"child_changed"===s)this.changeMap.set(n,ft(n,i.oldSnap));else if("child_changed"===t&&"child_added"===s)this.changeMap.set(n,_t(n,e.snapshotNode));else{if("child_changed"!==t||"child_changed"!==s)throw(0,o.assertionError)("Illegal combination of changes: "+e+" occurred after "+i);this.changeMap.set(n,gt(n,e.snapshotNode,i.oldSnap))}}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cn=new class{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}};class wn{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const t=null!=this.optCompleteServerCache_?new Ft(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return gn(this.writes_,e,t)}}getChildAfterChild(e,t,n){const i=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:Vt(this.viewCache_),s=fn(this.writes_,i,t,1,n,e);return 0===s.length?null:s[0]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bn(e,t,n,i,s){const r=new vn;let a,l;if(n.type===Pt.OVERWRITE){const h=n;h.source.fromUser?a=Tn(e,t,h.path,h.snap,i,s,r):((0,o.assert)(h.source.fromServer,"Unknown source."),l=h.source.tagged||t.serverCache.isFiltered()&&!Te(h.path),a=En(e,t,h.path,h.snap,i,s,l,r))}else if(n.type===Pt.MERGE){const h=n;h.source.fromUser?a=function(e,t,n,i,s,r,o){let a=t;return i.foreach(((i,l)=>{const h=Ee(n,i);Sn(t,ye(h))&&(a=Tn(e,a,h,l,s,r,o))})),i.foreach(((i,l)=>{const h=Ee(n,i);Sn(t,ye(h))||(a=Tn(e,a,h,l,s,r,o))})),a}(e,t,h.path,h.children,i,s,r):((0,o.assert)(h.source.fromServer,"Unknown source."),l=h.source.tagged||t.serverCache.isFiltered(),a=xn(e,t,h.path,h.children,i,s,l,r))}else if(n.type===Pt.ACK_USER_WRITE){const l=n;a=l.revert?function(e,t,n,i,s,r){let a;if(null!=_n(i,n))return t;{const l=new wn(i,t,s),h=t.eventCache.getNode();let c;if(Te(n)||".priority"===ye(n)){let n;if(t.serverCache.isFullyInitialized())n=un(i,Vt(t));else{const e=t.serverCache.getNode();(0,o.assert)(e instanceof at,"serverChildren would be complete if leaf node"),n=dn(i,e)}c=e.filter.updateFullNode(h,n,r)}else{const s=ye(n);let o=gn(i,s,t.serverCache);null==o&&t.serverCache.isCompleteForChild(s)&&(o=h.getImmediateChild(s)),c=null!=o?e.filter.updateChild(h,s,o,Ce(n),l,r):t.eventCache.getNode().hasChild(s)?e.filter.updateChild(h,s,at.EMPTY_NODE,Ce(n),l,r):h,c.isEmpty()&&t.serverCache.isFullyInitialized()&&(a=un(i,Vt(t)),a.isLeafNode()&&(c=e.filter.updateFullNode(c,a,r)))}return a=t.serverCache.isFullyInitialized()||null!=_n(i,me()),Wt(t,c,a,e.filter.filtersNodes())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,l.path,i,s,r):function(e,t,n,i,s,r,o){if(null!=_n(s,n))return t;const a=t.serverCache.isFiltered(),l=t.serverCache;if(null!=i.value){if(Te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return En(e,t,n,l.getNode().getChild(n),s,r,a,o);if(Te(n)){let i=new $t(null);return l.getNode().forEachChild(Be,((e,t)=>{i=i.set(new ge(e),t)})),xn(e,t,n,i,s,r,a,o)}return t}{let h=new $t(null);return i.foreach(((e,t)=>{const i=Ee(n,e);l.isCompleteForPath(i)&&(h=h.set(e,l.getNode().getChild(i)))})),xn(e,t,n,h,s,r,a,o)}}(e,t,l.path,l.affectedTree,i,s,r)}else{if(n.type!==Pt.LISTEN_COMPLETE)throw(0,o.assertionError)("Unknown operation type: "+n.type);a=function(e,t,n,i,s){const r=t.serverCache,o=jt(t,r.getNode(),r.isFullyInitialized()||Te(n),r.isFiltered());return In(e,o,n,i,Cn,s)}(e,t,n.path,i,r)}const h=r.getChanges();return function(e,t,n){const i=t.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=Ht(e);(n.length>0||!e.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&n.push(pt(Ht(t)))}}(t,a,h),{viewCache:a,changes:h}}function In(e,t,n,i,s,r){const a=t.eventCache;if(null!=_n(i,n))return t;{let l,h;if(Te(n))if((0,o.assert)(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const n=Vt(t),s=dn(i,n instanceof at?n:at.EMPTY_NODE);l=e.filter.updateFullNode(t.eventCache.getNode(),s,r)}else{const n=un(i,Vt(t));l=e.filter.updateFullNode(t.eventCache.getNode(),n,r)}else{const c=ye(n);if(".priority"===c){(0,o.assert)(1===ve(n),"Can't have a priority with additional path components");const s=a.getNode();h=t.serverCache.getNode();const r=pn(i,n,s,h);l=null!=r?e.filter.updatePriority(s,r):a.getNode()}else{const o=Ce(n);let u;if(a.isCompleteForChild(c)){h=t.serverCache.getNode();const e=pn(i,n,a.getNode(),h);u=null!=e?a.getNode().getImmediateChild(c).updateChild(o,e):a.getNode().getImmediateChild(c)}else u=gn(i,c,t.serverCache);l=null!=u?e.filter.updateChild(a.getNode(),c,u,o,s,r):a.getNode()}}return Wt(t,l,a.isFullyInitialized()||Te(n),e.filter.filtersNodes())}}function En(e,t,n,i,s,r,o,a){const l=t.serverCache;let h;const c=o?e.filter:e.filter.getIndexedFilter();if(Te(n))h=c.updateFullNode(l.getNode(),i,null);else if(c.filtersNodes()&&!l.isFiltered()){const e=l.getNode().updateChild(n,i);h=c.updateFullNode(l.getNode(),e,null)}else{const e=ye(n);if(!l.isCompleteForPath(n)&&ve(n)>1)return t;const s=Ce(n),r=l.getNode().getImmediateChild(e).updateChild(s,i);h=".priority"===e?c.updatePriority(l.getNode(),r):c.updateChild(l.getNode(),e,r,s,Cn,null)}const u=jt(t,h,l.isFullyInitialized()||Te(n),c.filtersNodes());return In(e,u,n,s,new wn(s,u,r),a)}function Tn(e,t,n,i,s,r,o){const a=t.eventCache;let l,h;const c=new wn(s,t,r);if(Te(n))h=e.filter.updateFullNode(t.eventCache.getNode(),i,o),l=Wt(t,h,!0,e.filter.filtersNodes());else{const s=ye(n);if(".priority"===s)h=e.filter.updatePriority(t.eventCache.getNode(),i),l=Wt(t,h,a.isFullyInitialized(),a.isFiltered());else{const r=Ce(n),h=a.getNode().getImmediateChild(s);let u;if(Te(r))u=i;else{const e=c.getCompleteChild(s);u=null!=e?".priority"===we(r)&&e.getChild(Ie(r)).isEmpty()?e:e.updateChild(r,i):at.EMPTY_NODE}if(h.equals(u))l=t;else{l=Wt(t,e.filter.updateChild(a.getNode(),s,u,r,c,o),a.isFullyInitialized(),e.filter.filtersNodes())}}}return l}function Sn(e,t){return e.eventCache.isCompleteForChild(t)}function kn(e,t,n){return n.foreach(((e,n)=>{t=t.updateChild(e,n)})),t}function xn(e,t,n,i,s,r,o,a){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let l,h=t;l=Te(n)?i:new $t(null).setTree(n,i);const c=t.serverCache.getNode();return l.children.inorderTraversal(((n,i)=>{if(c.hasChild(n)){const l=kn(0,t.serverCache.getNode().getImmediateChild(n),i);h=En(e,h,new ge(n),l,s,r,o,a)}})),l.children.inorderTraversal(((n,i)=>{const l=!t.serverCache.isCompleteForChild(n)&&null===i.value;if(!c.hasChild(n)&&!l){const l=kn(0,t.serverCache.getNode().getImmediateChild(n),i);h=En(e,h,new ge(n),l,s,r,o,a)}})),h}class Nn{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,i=new mt(n.getIndex()),s=(r=n).loadsAllData()?new mt(r.getIndex()):r.hasLimit()?new vt(r):new yt(r);var r;this.processor_=function(e){return{filter:e}}(s);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(at.EMPTY_NODE,o.getNode(),null),h=s.updateFullNode(at.EMPTY_NODE,a.getNode(),null),c=new Ft(l,o.isFullyInitialized(),i.filtersNodes()),u=new Ft(h,a.isFullyInitialized(),s.filtersNodes());this.viewCache_=Bt(u,c),this.eventGenerator_=new qt(this.query_)}get query(){return this.query_}}function Pn(e,t){const n=Vt(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!Te(t)&&!n.getImmediateChild(ye(t)).isEmpty())?n.getChild(t):null}function Rn(e){return 0===e.eventRegistrations_.length}function Dn(e,t,n){const i=[];if(n){(0,o.assert)(null==t,"A cancel should cancel all event registrations.");const s=e.query._path;e.eventRegistrations_.forEach((e=>{const t=e.createCancelEvent(n,s);t&&i.push(t)}))}if(t){let n=[];for(let i=0;i<e.eventRegistrations_.length;++i){const s=e.eventRegistrations_[i];if(s.matches(t)){if(t.hasAnyCallback()){n=n.concat(e.eventRegistrations_.slice(i+1));break}}else n.push(s)}e.eventRegistrations_=n}else e.eventRegistrations_=[];return i}function An(e,t,n,i){t.type===Pt.MERGE&&null!==t.source.queryId&&((0,o.assert)(Vt(e.viewCache_),"We should always have a full cache before handling merges"),(0,o.assert)(Ht(e.viewCache_),"Missing event cache, even though we have a server cache"));const s=e.viewCache_,r=bn(e.processor_,s,t,n,i);var a,l;return a=e.processor_,l=r.viewCache,(0,o.assert)(l.eventCache.getNode().isIndexed(a.filter.getIndex()),"Event snap not indexed"),(0,o.assert)(l.serverCache.getNode().isIndexed(a.filter.getIndex()),"Server snap not indexed"),(0,o.assert)(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=r.viewCache,On(e,r.changes,r.viewCache.eventCache.getNode(),null)}function On(e,t,n,i){const s=i?[i]:e.eventRegistrations_;return function(e,t,n,i){const s=[],r=[];return t.forEach((t=>{var n;"child_changed"===t.type&&e.index_.indexedValueChanged(t.oldSnap,t.snapshotNode)&&r.push((n=t.childName,{type:"child_moved",snapshotNode:t.snapshotNode,childName:n}))})),Ut(e,s,"child_removed",t,i,n),Ut(e,s,"child_added",t,i,n),Ut(e,s,"child_moved",r,i,n),Ut(e,s,"child_changed",t,i,n),Ut(e,s,"value",t,i,n),s}(e.eventGenerator_,t,n,s)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ln,Mn;class Fn{constructor(){this.views=new Map}}function qn(e,t,n,i){const s=t.source.queryId;if(null!==s){const r=e.views.get(s);return(0,o.assert)(null!=r,"SyncTree gave us an op for an invalid query."),An(r,t,n,i)}{let s=[];for(const r of e.views.values())s=s.concat(An(r,t,n,i));return s}}function Un(e,t,n,i,s){const r=t._queryIdentifier,o=e.views.get(r);if(!o){let e=un(n,s?i:null),r=!1;e?r=!0:i instanceof at?(e=dn(n,i),r=!1):(e=at.EMPTY_NODE,r=!1);const o=Bt(new Ft(e,r,!1),new Ft(i,s,!1));return new Nn(t,o)}return o}function Bn(e,t,n,i,s,r){const o=Un(e,t,i,s,r);return e.views.has(t._queryIdentifier)||e.views.set(t._queryIdentifier,o),function(e,t){e.eventRegistrations_.push(t)}(o,n),function(e,t){const n=e.viewCache_.eventCache,i=[];n.getNode().isLeafNode()||n.getNode().forEachChild(Ze,((e,t)=>{i.push(_t(e,t))}));return n.isFullyInitialized()&&i.push(pt(n.getNode())),On(e,i,n.getNode(),t)}(o,n)}function Wn(e,t,n,i){const s=t._queryIdentifier,r=[];let a=[];const l=$n(e);if("default"===s)for(const[t,s]of e.views.entries())a=a.concat(Dn(s,n,i)),Rn(s)&&(e.views.delete(t),s.query._queryParams.loadsAllData()||r.push(s.query));else{const t=e.views.get(s);t&&(a=a.concat(Dn(t,n,i)),Rn(t)&&(e.views.delete(s),t.query._queryParams.loadsAllData()||r.push(t.query)))}return l&&!$n(e)&&r.push(new((0,o.assert)(Ln,"Reference.ts has not been loaded"),Ln)(t._repo,t._path)),{removed:r,events:a}}function jn(e){const t=[];for(const n of e.views.values())n.query._queryParams.loadsAllData()||t.push(n);return t}function Hn(e,t){let n=null;for(const i of e.views.values())n=n||Pn(i,t);return n}function Vn(e,t){if(t._queryParams.loadsAllData())return Yn(e);{const n=t._queryIdentifier;return e.views.get(n)}}function zn(e,t){return null!=Vn(e,t)}function $n(e){return null!=Yn(e)}function Yn(e){for(const t of e.views.values())if(t.query._queryParams.loadsAllData())return t;return null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn=1;class Kn{constructor(e){this.listenProvider_=e,this.syncPointTree_=new $t(null),this.pendingWriteTree_={visibleWrites:Yt.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qn(e,t,n,i,s){return function(e,t,n,i,s){(0,o.assert)(i>e.lastWriteId,"Stacking an older write on top of newer ones"),void 0===s&&(s=!0),e.allWrites.push({path:t,snap:n,writeId:i,visible:s}),s&&(e.visibleWrites=Gt(e.visibleWrites,t,n)),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i,s),s?ri(e,new Lt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,n)):[]}function Jn(e,t,n,i){!function(e,t,n,i){(0,o.assert)(i>e.lastWriteId,"Stacking an older merge on top of newer ones"),e.allWrites.push({path:t,children:n,writeId:i,visible:!0}),e.visibleWrites=Kt(e.visibleWrites,t,n),e.lastWriteId=i}(e.pendingWriteTree_,t,n,i);const s=$t.fromObject(n);return ri(e,new Mt({fromUser:!0,fromServer:!1,queryId:null,tagged:!1},t,s))}function Xn(e,t,n=!1){const i=function(e,t){for(let n=0;n<e.allWrites.length;n++){const i=e.allWrites[n];if(i.writeId===t)return i}return null}(e.pendingWriteTree_,t);if(on(e.pendingWriteTree_,t)){let t=new $t(null);return null!=i.snap?t=t.set(me(),!0):F(i.children,(e=>{t=t.set(new ge(e),!0)})),ri(e,new At(i.path,t,n))}return[]}function Zn(e,t,n){return ri(e,new Lt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,n))}function ei(e,t,n,i,s=!1){const r=t._path,o=e.syncPointTree_.get(r);let a=[];if(o&&("default"===t._queryIdentifier||zn(o,t))){const l=Wn(o,t,n,i);0===o.views.size&&(e.syncPointTree_=e.syncPointTree_.remove(r));const h=l.removed;if(a=l.events,!s){const n=-1!==h.findIndex((e=>e._queryParams.loadsAllData())),s=e.syncPointTree_.findOnPath(r,((e,t)=>$n(t)));if(n&&!s){const t=e.syncPointTree_.subtree(r);if(!t.isEmpty()){const n=function(e){return e.fold(((e,t,n)=>{if(t&&$n(t)){return[Yn(t)]}{let e=[];return t&&(e=jn(t)),F(n,((t,n)=>{e=e.concat(n)})),e}}))}(t);for(let t=0;t<n.length;++t){const i=n[t],s=i.query,r=li(e,i);e.listenProvider_.startListening(_i(s),hi(e,s),r.hashFn,r.onComplete)}}}if(!s&&h.length>0&&!i)if(n){const n=null;e.listenProvider_.stopListening(_i(t),n)}else h.forEach((t=>{const n=e.queryToTagMap.get(ci(t));e.listenProvider_.stopListening(_i(t),n)}))}!function(e,t){for(let n=0;n<t.length;++n){const i=t[n];if(!i._queryParams.loadsAllData()){const t=ci(i),n=e.queryToTagMap.get(t);e.queryToTagMap.delete(t),e.tagToQueryMap.delete(n)}}}(e,h)}return a}function ti(e,t,n,i){const s=ui(e,i);if(null!=s){const i=di(s),r=i.path,o=i.queryId,a=Se(r,t);return pi(e,r,new Lt(Dt(o),a,n))}return[]}function ni(e,t,n,i=!1){const s=t._path;let r=null,a=!1;e.syncPointTree_.foreachOnPath(s,((e,t)=>{const n=Se(e,s);r=r||Hn(t,n),a=a||$n(t)}));let l,h=e.syncPointTree_.get(s);if(h?(a=a||$n(h),r=r||Hn(h,me())):(h=new Fn,e.syncPointTree_=e.syncPointTree_.set(s,h)),null!=r)l=!0;else{l=!1,r=at.EMPTY_NODE;e.syncPointTree_.subtree(s).foreachChild(((e,t)=>{const n=Hn(t,me());n&&(r=r.updateImmediateChild(e,n))}))}const c=zn(h,t);if(!c&&!t._queryParams.loadsAllData()){const n=ci(t);(0,o.assert)(!e.queryToTagMap.has(n),"View does not exist, but we have a tag");const i=Gn++;e.queryToTagMap.set(n,i),e.tagToQueryMap.set(i,n)}let u=Bn(h,t,n,rn(e.pendingWriteTree_,s),r,l);if(!c&&!a&&!i){const n=Vn(h,t);u=u.concat(function(e,t,n){const i=t._path,s=hi(e,t),r=li(e,n),a=e.listenProvider_.startListening(_i(t),s,r.hashFn,r.onComplete),l=e.syncPointTree_.subtree(i);if(s)(0,o.assert)(!$n(l.value),"If we're adding a query, it shouldn't be shadowed");else{const t=l.fold(((e,t,n)=>{if(!Te(e)&&t&&$n(t))return[Yn(t).query];{let e=[];return t&&(e=e.concat(jn(t).map((e=>e.query)))),F(n,((t,n)=>{e=e.concat(n)})),e}}));for(let n=0;n<t.length;++n){const i=t[n];e.listenProvider_.stopListening(_i(i),hi(e,i))}}return a}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,t,n))}return u}function ii(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,((e,n)=>{const i=Hn(n,Se(e,t));if(i)return i}));return cn(i,t,s,n,!0)}function si(e,t){const n=t._path;let i=null;e.syncPointTree_.foreachOnPath(n,((e,t)=>{const s=Se(e,n);i=i||Hn(t,s)}));let s=e.syncPointTree_.get(n);s?i=i||Hn(s,me()):(s=new Fn,e.syncPointTree_=e.syncPointTree_.set(n,s));const r=null!=i,o=r?new Ft(i,!0,!1):null;return function(e){return Ht(e.viewCache_)}(Un(s,t,rn(e.pendingWriteTree_,t._path),r?o.getNode():at.EMPTY_NODE,r))}function ri(e,t){return oi(t,e.syncPointTree_,null,rn(e.pendingWriteTree_,me()))}function oi(e,t,n,i){if(Te(e.path))return ai(e,t,n,i);{const s=t.get(me());null==n&&null!=s&&(n=Hn(s,me()));let r=[];const o=ye(e.path),a=e.operationForChild(o),l=t.children.get(o);if(l&&a){const e=n?n.getImmediateChild(o):null,t=mn(i,o);r=r.concat(oi(a,l,e,t))}return s&&(r=r.concat(qn(s,e,i,n))),r}}function ai(e,t,n,i){const s=t.get(me());null==n&&null!=s&&(n=Hn(s,me()));let r=[];return t.children.inorderTraversal(((t,s)=>{const o=n?n.getImmediateChild(t):null,a=mn(i,t),l=e.operationForChild(t);l&&(r=r.concat(ai(l,s,o,a)))})),s&&(r=r.concat(qn(s,e,i,n))),r}function li(e,t){const n=t.query,i=hi(e,n);return{hashFn:()=>{const e=function(e){return e.viewCache_.serverCache.getNode()}(t)||at.EMPTY_NODE;return e.hash()},onComplete:t=>{if("ok"===t)return i?function(e,t,n){const i=ui(e,n);if(i){const n=di(i),s=n.path,r=n.queryId,o=Se(s,t);return pi(e,s,new Ot(Dt(r),o))}return[]}(e,n._path,i):function(e,t){return ri(e,new Ot({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t))}(e,n._path);{const i=function(e,t){let n="Unknown Error";"too_big"===e?n="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===e?n="Client doesn't have permission to access the desired data.":"unavailable"===e&&(n="The service is unavailable");const i=new Error(e+" at "+t._path.toString()+": "+n);return i.code=e.toUpperCase(),i}(t,n);return ei(e,n,null,i)}}}}function hi(e,t){const n=ci(t);return e.queryToTagMap.get(n)}function ci(e){return e._path.toString()+"$"+e._queryIdentifier}function ui(e,t){return e.tagToQueryMap.get(t)}function di(e){const t=e.indexOf("$");return(0,o.assert)(-1!==t&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new ge(e.substr(0,t))}}function pi(e,t,n){const i=e.syncPointTree_.get(t);(0,o.assert)(i,"Missing sync point for query tag that we're tracking");return qn(i,n,rn(e.pendingWriteTree_,t),null)}function _i(e){return e._queryParams.loadsAllData()&&!e._queryParams.isDefault()?new((0,o.assert)(Mn,"Reference.ts has not been loaded"),Mn)(e._repo,e._path):e}class fi{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new fi(t)}node(){return this.node_}}class gi{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ee(this.path_,e);return new gi(this.syncTree_,t)}node(){return ii(this.syncTree_,this.path_)}}const mi=function(e){return(e=e||{}).timestamp=e.timestamp||(new Date).getTime(),e},yi=function(e,t,n){return e&&"object"==typeof e?((0,o.assert)(".sv"in e,"Unexpected leaf node or priority contents"),"string"==typeof e[".sv"]?vi(e[".sv"],t,n):"object"==typeof e[".sv"]?Ci(e[".sv"],t):void(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2))):e},vi=function(e,t,n){if("timestamp"===e)return n.timestamp;(0,o.assert)(!1,"Unexpected server value: "+e)},Ci=function(e,t,n){e.hasOwnProperty("increment")||(0,o.assert)(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const i=e.increment;"number"!=typeof i&&(0,o.assert)(!1,"Unexpected increment value: "+i);const s=t.node();if((0,o.assert)(null!=s,"Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const r=s.getValue();return"number"!=typeof r?i:r+i},wi=function(e,t,n,i){return Ii(t,new gi(n,e),i)},bi=function(e,t,n){return Ii(e,new fi(t),n)};function Ii(e,t,n){const i=e.getPriority().val(),s=yi(i,t.getImmediateChild(".priority"),n);let r;if(e.isLeafNode()){const i=e,r=yi(i.getValue(),t,n);return r!==i.getValue()||s!==i.getPriority().val()?new Xe(r,ct(s)):e}{const i=e;return r=i,s!==i.getPriority().val()&&(r=r.updatePriority(new Xe(s))),i.forEachChild(Ze,((e,i)=>{const s=Ii(i,t.getImmediateChild(e),n);s!==i&&(r=r.updateImmediateChild(e,s))})),r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function Ti(e,t){let n=t instanceof ge?t:new ge(t),i=e,s=ye(n);for(;null!==s;){const e=(0,o.safeGet)(i.node.children,s)||{children:{},childCount:0};i=new Ei(s,i,e),n=Ce(n),s=ye(n)}return i}function Si(e){return e.node.value}function ki(e,t){e.node.value=t,Di(e)}function xi(e){return e.node.childCount>0}function Ni(e,t){F(e.node.children,((n,i)=>{t(new Ei(n,e,i))}))}function Pi(e,t,n,i){n&&!i&&t(e),Ni(e,(e=>{Pi(e,t,!0,i)})),n&&i&&t(e)}function Ri(e){return new ge(null===e.parent?e.name:Ri(e.parent)+"/"+e.name)}function Di(e){null!==e.parent&&function(e,t,n){const i=function(e){return void 0===Si(e)&&!xi(e)}(n),s=(0,o.contains)(e.node.children,t);i&&s?(delete e.node.children[t],e.node.childCount--,Di(e)):i||s||(e.node.children[t]=n.node,e.node.childCount++,Di(e))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.parent,e.name,e)}const Ai=/[\[\].#$\/\u0000-\u001F\u007F]/,Oi=/[\[\].#$\u0000-\u001F\u007F]/,Li=10485760,Mi=function(e){return"string"==typeof e&&0!==e.length&&!Ai.test(e)},Fi=function(e){return"string"==typeof e&&0!==e.length&&!Oi.test(e)},qi=function(e){return null===e||"string"==typeof e||"number"==typeof e&&!N(e)||e&&"object"==typeof e&&(0,o.contains)(e,".sv")},Ui=function(e,t,n,i){i&&void 0===t||Bi((0,o.errorPrefix)(e,"value"),t,n)},Bi=function(e,t,n){const i=n instanceof ge?new Pe(n,e):n;if(void 0===t)throw new Error(e+"contains undefined "+De(i));if("function"==typeof t)throw new Error(e+"contains a function "+De(i)+" with contents = "+t.toString());if(N(t))throw new Error(e+"contains "+t.toString()+" "+De(i));if("string"==typeof t&&t.length>3495253.3333333335&&(0,o.stringLength)(t)>Li)throw new Error(e+"contains a string greater than "+Li+" utf8 bytes "+De(i)+" ('"+t.substring(0,50)+"...')");if(t&&"object"==typeof t){let n=!1,s=!1;if(F(t,((t,r)=>{if(".value"===t)n=!0;else if(".priority"!==t&&".sv"!==t&&(s=!0,!Mi(t)))throw new Error(e+" contains an invalid key ("+t+") "+De(i)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');var a,l;l=t,(a=i).parts_.length>0&&(a.byteLength_+=1),a.parts_.push(l),a.byteLength_+=(0,o.stringLength)(l),Re(a),Bi(e,r,i),function(e){const t=e.parts_.pop();e.byteLength_-=(0,o.stringLength)(t),e.parts_.length>0&&(e.byteLength_-=1)}(i)})),n&&s)throw new Error(e+' contains ".value" child '+De(i)+" in addition to actual children.")}},Wi=function(e,t,n,i){if(i&&void 0===t)return;const s=(0,o.errorPrefix)(e,"values");if(!t||"object"!=typeof t||Array.isArray(t))throw new Error(s+" must be an object containing the children to replace.");const r=[];F(t,((e,t)=>{const i=new ge(e);if(Bi(s,t,Ee(n,i)),".priority"===we(i)&&!qi(t))throw new Error(s+"contains an invalid value for '"+i.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(i)})),function(e,t){let n,i;for(n=0;n<t.length;n++){i=t[n];const s=be(i);for(let t=0;t<s.length;t++)if(".priority"===s[t]&&t===s.length-1);else if(!Mi(s[t]))throw new Error(e+"contains an invalid key ("+s[t]+") in path "+i.toString()+'. Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"')}t.sort(ke);let s=null;for(n=0;n<t.length;n++){if(i=t[n],null!==s&&Ne(s,i))throw new Error(e+"contains a path "+s.toString()+" that is ancestor of another path "+i.toString());s=i}}(s,r)},ji=function(e,t,n,i){if(!(i&&void 0===n||Fi(n)))throw new Error((0,o.errorPrefix)(e,t)+'was an invalid path = "'+n+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},Hi=function(e,t,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ji(e,t,n,i)},Vi=function(e,t){if(".info"===ye(t))throw new Error(e+" failed = Can't modify data under /.info/")},zi=function(e,t){const n=t.path.toString();if("string"!=typeof t.repoInfo.host||0===t.repoInfo.host.length||!Mi(t.repoInfo.namespace)&&"localhost"!==t.repoInfo.host.split(":")[0]||0!==n.length&&!function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),Fi(e)}(n))throw new Error((0,o.errorPrefix)(e,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Yi(e,t){let n=null;for(let i=0;i<t.length;i++){const s=t[i],r=s.getPath();null===n||xe(r,n.path)||(e.eventLists_.push(n),n=null),null===n&&(n={events:[],path:r}),n.events.push(s)}n&&e.eventLists_.push(n)}function Gi(e,t,n){Yi(e,n),Qi(e,(e=>xe(e,t)))}function Ki(e,t,n){Yi(e,n),Qi(e,(e=>Ne(e,t)||Ne(t,e)))}function Qi(e,t){e.recursionDepth_++;let n=!0;for(let i=0;i<e.eventLists_.length;i++){const s=e.eventLists_[i];if(s){t(s.path)?(Ji(e.eventLists_[i]),e.eventLists_[i]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function Ji(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(null!==n){e.events[t]=null;const i=n.getEventRunner();w&&E("event: "+n.toString()),W(i)}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xi="repo_interrupt",Zi=25;class es{constructor(e,t,n,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new $i,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tt(),this.transactionQueueTree_=new Ei,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ts(e,t,n){if(e.stats_=ne(e.repoInfo_),e.forceRestClient_||("object"==typeof window&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0)e.server_=new It(e.repoInfo_,((t,n,i,s)=>{ss(e,t,n,i,s)}),e.authTokenProvider_,e.appCheckProvider_),setTimeout((()=>rs(e,!0)),0);else{if(null!=n){if("object"!=typeof n)throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,o.stringify)(n)}catch(e){throw new Error("Invalid authOverride provided: "+e)}}e.persistentConnection_=new Le(e.repoInfo_,t,((t,n,i,s)=>{ss(e,t,n,i,s)}),(t=>{rs(e,t)}),(t=>{!function(e,t){F(t,((t,n)=>{os(e,t,n)}))}(e,t)}),e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener((t=>{e.server_.refreshAuthToken(t)})),e.appCheckProvider_.addTokenChangeListener((t=>{e.server_.refreshAppCheckToken(t.token)})),e.statsReporter_=function(e,t){const n=e.toString();return te[n]||(te[n]=t()),te[n]}(e.repoInfo_,(()=>new Nt(e.stats_,e.server_))),e.infoData_=new Et,e.infoSyncTree_=new Kn({startListening:(t,n,i,s)=>{let r=[];const o=e.infoData_.getNode(t._path);return o.isEmpty()||(r=Zn(e.infoSyncTree_,t._path,o),setTimeout((()=>{s("ok")}),0)),r},stopListening:()=>{}}),os(e,"connected",!1),e.serverSyncTree_=new Kn({startListening:(t,n,i,s)=>(e.server_.listen(t,i,n,((n,i)=>{const r=s(n,i);Ki(e.eventQueue_,t._path,r)})),[]),stopListening:(t,n)=>{e.server_.unlisten(t,n)}})}function ns(e){const t=e.infoData_.getNode(new ge(".info/serverTimeOffset")).val()||0;return(new Date).getTime()+t}function is(e){return mi({timestamp:ns(e)})}function ss(e,t,n,i,s){e.dataUpdateCount++;const r=new ge(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let a=[];if(s)if(i){const t=(0,o.map)(n,(e=>ct(e)));a=function(e,t,n,i){const s=ui(e,i);if(s){const i=di(s),r=i.path,o=i.queryId,a=Se(r,t),l=$t.fromObject(n);return pi(e,r,new Mt(Dt(o),a,l))}return[]}(e.serverSyncTree_,r,t,s)}else{const t=ct(n);a=ti(e.serverSyncTree_,r,t,s)}else if(i){const t=(0,o.map)(n,(e=>ct(e)));a=function(e,t,n){const i=$t.fromObject(n);return ri(e,new Mt({fromUser:!1,fromServer:!0,queryId:null,tagged:!1},t,i))}(e.serverSyncTree_,r,t)}else{const t=ct(n);a=Zn(e.serverSyncTree_,r,t)}let l=r;a.length>0&&(l=fs(e,r)),Ki(e.eventQueue_,l,a)}function rs(e,t){os(e,"connected",t),!1===t&&function(e){us(e,"onDisconnectEvents");const t=is(e),n=Tt();kt(e.onDisconnect_,me(),((i,s)=>{const r=wi(i,s,e.serverSyncTree_,t);St(n,i,r)}));let i=[];kt(n,me(),((t,n)=>{i=i.concat(Zn(e.serverSyncTree_,t,n));const s=Cs(e,t);fs(e,s)})),e.onDisconnect_=Tt(),Ki(e.eventQueue_,me(),i)}(e)}function os(e,t,n){const i=new ge("/.info/"+t),s=ct(n);e.infoData_.updateSnapshot(i,s);const r=Zn(e.infoSyncTree_,i,s);Ki(e.eventQueue_,i,r)}function as(e){return e.nextWriteId_++}function ls(e,t,n,i,s){us(e,"set",{path:t.toString(),value:n,priority:i});const r=is(e),o=ct(n,i),a=ii(e.serverSyncTree_,t),l=bi(o,a,r),h=as(e),c=Qn(e.serverSyncTree_,t,l,h,!0);Yi(e.eventQueue_,c),e.server_.put(t.toString(),o.val(!0),((n,i)=>{const r="ok"===n;r||x("set at "+t+" failed: "+n);const o=Xn(e.serverSyncTree_,h,!r);Ki(e.eventQueue_,t,o),ds(e,s,n,i)}));const u=Cs(e,t);fs(e,u),Ki(e.eventQueue_,u,[])}function hs(e,t,n){let i;i=".info"===ye(t._path)?ei(e.infoSyncTree_,t,n):ei(e.serverSyncTree_,t,n),Gi(e.eventQueue_,t._path,i)}function cs(e){e.persistentConnection_&&e.persistentConnection_.interrupt(Xi)}function us(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),E(n,...t)}function ds(e,t,n,i){t&&W((()=>{if("ok"===n)t(null);else{const e=(n||"error").toUpperCase();let s=e;i&&(s+=": "+i);const r=new Error(s);r.code=e,t(r)}}))}function ps(e,t,n){return ii(e.serverSyncTree_,t,n)||at.EMPTY_NODE}function _s(e,t=e.transactionQueueTree_){if(t||vs(e,t),Si(t)){const n=ms(e,t);(0,o.assert)(n.length>0,"Sending zero length transaction queue");n.every((e=>0===e.status))&&function(e,t,n){const i=n.map((e=>e.currentWriteId)),s=ps(e,t,i);let r=s;const a=s.hash();for(let e=0;e<n.length;e++){const i=n[e];(0,o.assert)(0===i.status,"tryToSendTransactionQueue_: items in queue should all be run."),i.status=1,i.retryCount++;const s=Se(t,i.path);r=r.updateChild(s,i.currentOutputSnapshotRaw)}const l=r.val(!0),h=t;e.server_.put(h.toString(),l,(i=>{us(e,"transaction put response",{path:h.toString(),status:i});let s=[];if("ok"===i){const i=[];for(let t=0;t<n.length;t++)n[t].status=2,s=s.concat(Xn(e.serverSyncTree_,n[t].currentWriteId)),n[t].onComplete&&i.push((()=>n[t].onComplete(null,!0,n[t].currentOutputSnapshotResolved))),n[t].unwatcher();vs(e,Ti(e.transactionQueueTree_,t)),_s(e,e.transactionQueueTree_),Ki(e.eventQueue_,t,s);for(let e=0;e<i.length;e++)W(i[e])}else{if("datastale"===i)for(let e=0;e<n.length;e++)3===n[e].status?n[e].status=4:n[e].status=0;else{x("transaction at "+h.toString()+" failed: "+i);for(let e=0;e<n.length;e++)n[e].status=4,n[e].abortReason=i}fs(e,t)}}),a)}(e,Ri(t),n)}else xi(t)&&Ni(t,(t=>{_s(e,t)}))}function fs(e,t){const n=gs(e,t),i=Ri(n);return function(e,t,n){if(0===t.length)return;const i=[];let s=[];const r=t.filter((e=>0===e.status)),a=r.map((e=>e.currentWriteId));for(let r=0;r<t.length;r++){const h=t[r],c=Se(n,h.path);let u,d=!1;if((0,o.assert)(null!==c,"rerunTransactionsUnderNode_: relativePath should not be null."),4===h.status)d=!0,u=h.abortReason,s=s.concat(Xn(e.serverSyncTree_,h.currentWriteId,!0));else if(0===h.status)if(h.retryCount>=Zi)d=!0,u="maxretry",s=s.concat(Xn(e.serverSyncTree_,h.currentWriteId,!0));else{const n=ps(e,h.path,a);h.currentInputSnapshot=n;const i=t[r].update(n.val());if(void 0!==i){Bi("transaction failed: Data returned ",i,h.path);let t=ct(i);"object"==typeof i&&null!=i&&(0,o.contains)(i,".priority")||(t=t.updatePriority(n.getPriority()));const r=h.currentWriteId,l=is(e),c=bi(t,n,l);h.currentOutputSnapshotRaw=t,h.currentOutputSnapshotResolved=c,h.currentWriteId=as(e),a.splice(a.indexOf(r),1),s=s.concat(Qn(e.serverSyncTree_,h.path,c,h.currentWriteId,h.applyLocally)),s=s.concat(Xn(e.serverSyncTree_,r,!0))}else d=!0,u="nodata",s=s.concat(Xn(e.serverSyncTree_,h.currentWriteId,!0))}Ki(e.eventQueue_,n,s),s=[],d&&(t[r].status=2,l=t[r].unwatcher,setTimeout(l,Math.floor(0)),t[r].onComplete&&("nodata"===u?i.push((()=>t[r].onComplete(null,!1,t[r].currentInputSnapshot))):i.push((()=>t[r].onComplete(new Error(u),!1,null)))))}var l;vs(e,e.transactionQueueTree_);for(let e=0;e<i.length;e++)W(i[e]);_s(e,e.transactionQueueTree_)}(e,ms(e,n),i),i}function gs(e,t){let n,i=e.transactionQueueTree_;for(n=ye(t);null!==n&&void 0===Si(i);)i=Ti(i,n),n=ye(t=Ce(t));return i}function ms(e,t){const n=[];return ys(e,t,n),n.sort(((e,t)=>e.order-t.order)),n}function ys(e,t,n){const i=Si(t);if(i)for(let e=0;e<i.length;e++)n.push(i[e]);Ni(t,(t=>{ys(e,t,n)}))}function vs(e,t){const n=Si(t);if(n){let e=0;for(let t=0;t<n.length;t++)2!==n[t].status&&(n[e]=n[t],e++);n.length=e,ki(t,n.length>0?n:void 0)}Ni(t,(t=>{vs(e,t)}))}function Cs(e,t){const n=Ri(gs(e,t)),i=Ti(e.transactionQueueTree_,t);return function(e,t,n){let i=n?e:e.parent;for(;null!==i;){if(t(i))return!0;i=i.parent}}(i,(t=>{ws(e,t)})),ws(e,i),Pi(i,(t=>{ws(e,t)})),n}function ws(e,t){const n=Si(t);if(n){const i=[];let s=[],r=-1;for(let t=0;t<n.length;t++)3===n[t].status||(1===n[t].status?((0,o.assert)(r===t-1,"All SENT items should be at beginning of queue."),r=t,n[t].status=3,n[t].abortReason="set"):((0,o.assert)(0===n[t].status,"Unexpected transaction status in abort"),n[t].unwatcher(),s=s.concat(Xn(e.serverSyncTree_,n[t].currentWriteId,!0)),n[t].onComplete&&i.push(n[t].onComplete.bind(null,new Error("set"),!1,null))));-1===r?ki(t,void 0):n.length=r+1,Ki(e.eventQueue_,Ri(t),s);for(let e=0;e<i.length;e++)W(i[e])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=function(e,t){const n=Is(e),i=n.namespace;"firebase.com"===n.domain&&k(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),i&&"undefined"!==i||"localhost"===n.domain||k("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&x("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().");const s="ws"===n.scheme||"wss"===n.scheme;return{repoInfo:new J(n.host,n.secure,i,s,t,"",i!==n.subdomain),path:new ge(n.pathString)}},Is=function(e){let t="",n="",i="",s="",r="",o=!0,a="https",l=443;if("string"==typeof e){let h=e.indexOf("//");h>=0&&(a=e.substring(0,h-1),e=e.substring(h+2));let c=e.indexOf("/");-1===c&&(c=e.length);let u=e.indexOf("?");-1===u&&(u=e.length),t=e.substring(0,Math.min(c,u)),c<u&&(s=function(e){let t="";const n=e.split("/");for(let e=0;e<n.length;e++)if(n[e].length>0){let i=n[e];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch(e){}t+="/"+i}return t}(e.substring(c,u)));const d=function(e){const t={};"?"===e.charAt(0)&&(e=e.substring(1));for(const n of e.split("&")){if(0===n.length)continue;const i=n.split("=");2===i.length?t[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):x(`Invalid query segment '${n}' in query '${e}'`)}return t}(e.substring(Math.min(e.length,u)));h=t.indexOf(":"),h>=0?(o="https"===a||"wss"===a,l=parseInt(t.substring(h+1),10)):h=t.length;const p=t.slice(0,h);if("localhost"===p.toLowerCase())n="localhost";else if(p.split(".").length<=2)n=p;else{const e=t.indexOf(".");i=t.substring(0,e).toLowerCase(),n=t.substring(e+1),r=i}"ns"in d&&(r=d.ns)}return{host:t,port:l,domain:n,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}},Es="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Ts=function(){let e=0;const t=[];return function(n){const i=n===e;let s;e=n;const r=new Array(8);for(s=7;s>=0;s--)r[s]=Es.charAt(n%64),n=Math.floor(n/64);(0,o.assert)(0===n,"Cannot push at time == 0");let a=r.join("");if(i){for(s=11;s>=0&&63===t[s];s--)t[s]=0;t[s]++}else for(s=0;s<12;s++)t[s]=Math.floor(64*Math.random());for(s=0;s<12;s++)a+=Es.charAt(t[s]);return(0,o.assert)(20===a.length,"nextPushId: Length should be 20."),a}}();
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ss{constructor(e,t,n,i){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=i}getPath(){const e=this.snapshot.ref;return"value"===this.eventType?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,o.stringify)(this.snapshot.exportVal())}}class ks{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return(0,o.assert)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ns{constructor(e,t,n,i){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=i}get key(){return Te(this._path)?null:we(this._path)}get ref(){return new Ps(this._repo,this._path)}get _queryIdentifier(){const e=bt(this._queryParams),t=L(e);return"{}"===t?"default":t}get _queryObject(){return bt(this._queryParams)}isEqual(e){if(!((e=(0,o.getModularInstance)(e))instanceof Ns))return!1;const t=this._repo===e._repo,n=xe(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&n&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)""!==e.pieces_[n]&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}(this._path)}}class Ps extends Ns{constructor(e,t){super(e,t,new Ct,!1)}get parent(){const e=Ie(this._path);return null===e?null:new Ps(this._repo,e)}get root(){let e=this;for(;null!==e.parent;)e=e.parent;return e}}class Rs{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new ge(e),n=As(this.ref,e);return new Rs(this._node.getChild(t),n,Ze)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){if(this._node.isLeafNode())return!1;return!!this._node.forEachChild(this._index,((t,n)=>e(new Rs(n,As(this.ref,t),Ze))))}hasChild(e){const t=new ge(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ds(e,t){return(e=(0,o.getModularInstance)(e))._checkNotDeleted("ref"),void 0!==t?As(e._root,t):e._root}function As(e,t){return null===ye((e=(0,o.getModularInstance)(e))._path)?Hi("child","path",t,!1):ji("child","path",t,!1),new Ps(e._repo,Ee(e._path,t))}function Os(e,t){e=(0,o.getModularInstance)(e),Vi("push",e._path),Ui("push",t,e._path,!0);const n=ns(e._repo),i=Ts(n),s=As(e,i),r=As(e,i);let a;return a=null!=t?Ms(r,t).then((()=>r)):Promise.resolve(r),s.then=a.then.bind(a),s.catch=a.then.bind(a,void 0),s}function Ls(e){return Vi("remove",e._path),Ms(e,null)}function Ms(e,t){e=(0,o.getModularInstance)(e),Vi("set",e._path),Ui("set",t,e._path,!1);const n=new(0,o.Deferred);return ls(e._repo,e._path,t,null,n.wrapCallback((()=>{}))),n.promise}function Fs(e,t){Wi("update",t,e._path,!1);const n=new(0,o.Deferred);return function(e,t,n,i){us(e,"update",{path:t.toString(),value:n});let s=!0;const r=is(e),o={};if(F(n,((n,i)=>{s=!1,o[n]=wi(Ee(t,n),ct(i),e.serverSyncTree_,r)})),s)E("update() called with empty data.  Don't do anything."),ds(0,i,"ok",void 0);else{const s=as(e),r=Jn(e.serverSyncTree_,t,o,s);Yi(e.eventQueue_,r),e.server_.merge(t.toString(),n,((n,r)=>{const o="ok"===n;o||x("update at "+t+" failed: "+n);const a=Xn(e.serverSyncTree_,s,!o),l=a.length>0?fs(e,t):t;Ki(e.eventQueue_,l,a),ds(0,i,n,r)})),F(n,(n=>{const i=Cs(e,Ee(t,n));fs(e,i)})),Ki(e.eventQueue_,t,[])}}(e._repo,e._path,t,n.wrapCallback((()=>{}))),n.promise}function qs(e){e=(0,o.getModularInstance)(e);const t=new xs((()=>{})),n=new Us(t);return function(e,t,n){const i=si(e.serverSyncTree_,t);return null!=i?Promise.resolve(i):e.server_.get(t).then((i=>{const s=ct(i).withIndex(t._queryParams.getIndex());let r;if(ni(e.serverSyncTree_,t,n,!0),t._queryParams.loadsAllData())r=Zn(e.serverSyncTree_,t._path,s);else{const n=hi(e.serverSyncTree_,t);r=ti(e.serverSyncTree_,t._path,s,n)}return Ki(e.eventQueue_,t._path,r),ei(e.serverSyncTree_,t,n,null,!0),s}),(n=>(us(e,"get for query "+(0,o.stringify)(t)+" failed: "+n),Promise.reject(new Error(n)))))}(e._repo,e,n).then((t=>new Rs(t,new Ps(e._repo,e._path),e._queryParams.getIndex())))}class Us{constructor(e){this.callbackContext=e}respondsTo(e){return"value"===e}createEvent(e,t){const n=t._queryParams.getIndex();return new Ss("value",this,new Rs(e.snapshotNode,new Ps(t._repo,t._path),n))}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ks(this,e,t):null}matches(e){return e instanceof Us&&(!e.callbackContext||!this.callbackContext||e.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}}class Bs{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t="children_added"===e?"child_added":e;return t="children_removed"===t?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new ks(this,e,t):null}createEvent(e,t){(0,o.assert)(null!=e.childName,"Child events should have a childName.");const n=As(new Ps(t._repo,t._path),e.childName),i=t._queryParams.getIndex();return new Ss(e.type,this,new Rs(e.snapshotNode,n,i),e.prevName)}getEventRunner(e){return"cancel"===e.getEventType()?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Bs&&(this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)))}hasAnyCallback(){return!!this.callbackContext}}function Ws(e,t,n,i,s){let r;if("object"==typeof i&&(r=void 0,s=i),"function"==typeof i&&(r=i),s&&s.onlyOnce){const t=n,i=(n,i)=>{hs(e._repo,e,a),t(n,i)};i.userCallback=n.userCallback,i.context=n.context,n=i}const o=new xs(n,r||void 0),a="value"===t?new Us(o):new Bs(t,o);return function(e,t,n){let i;i=".info"===ye(t._path)?ni(e.infoSyncTree_,t,n):ni(e.serverSyncTree_,t,n),Gi(e.eventQueue_,t._path,i)}(e._repo,e,a),()=>hs(e._repo,e,a)}function js(e,t,n,i){return Ws(e,"value",t,n,i)}!function(e){(0,o.assert)(!Ln,"__referenceConstructor has already been defined"),Ln=e}(Ps),function(e){(0,o.assert)(!Mn,"__referenceConstructor has already been defined"),Mn=e}(Ps);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Hs="FIREBASE_DATABASE_EMULATOR_HOST",Vs={};let zs=!1;function $s(e,t,n,i,s){let r=i||e.options.databaseURL;void 0===r&&(e.options.projectId||k("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),E("Using default host for project ",e.options.projectId),r=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o,a,h=bs(r,s),c=h.repoInfo;void 0!==l&&l.env&&(a=l.env[Hs]),a?(o=!0,r=`http://${a}?ns=${c.namespace}`,h=bs(r,s),c=h.repoInfo):o=!h.repoInfo.secure;const u=s&&o?new z(z.OWNER):new V(e.name,e.options,t);zi("Invalid Firebase Database URL",h),Te(h.path)||k("Database URL must point to the root of a Firebase Database (not including a child path).");const d=function(e,t,n,i){let s=Vs[t.name];s||(s={},Vs[t.name]=s);let r=s[e.toURLString()];r&&k("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call.");return r=new es(e,zs,n,i),s[e.toURLString()]=r,r}(c,e,u,new H(e.name,n));return new Ys(d,e)}class Ys{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ts(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ps(this._repo,me())),this._rootInternal}_delete(){return null!==this._rootInternal&&(!function(e,t){const n=Vs[t];n&&n[e.key]===e||k(`Database ${t}(${e.repoInfo_}) has already been deleted.`),cs(e),delete n[e.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){null===this._rootInternal&&k("Cannot call "+e+" on a deleted database.")}}function Gs(e=(0,i.getApp)(),t){const n=(0,i._getProvider)(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const e=(0,o.getDefaultEmulatorHostnameAndPort)("database");e&&function(e,t,n,i={}){e=(0,o.getModularInstance)(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&k("Cannot call useEmulator() after instance has already been initialized.");const s=e._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&k('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new z(z.OWNER);else if(i.mockUserToken){const t="string"==typeof i.mockUserToken?i.mockUserToken:(0,o.createMockUserToken)(i.mockUserToken,e.app.options.projectId);r=new z(t)}!function(e,t,n,i){e.repoInfo_=new J(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),i&&(e.authTokenProvider_=i)}(s,t,n,r)}(n,...e)}return n}Le.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)},Le.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Ks,Qs;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qs=i.SDK_VERSION,u=Qs,(0,i._registerComponent)(new(0,r.Component)("database",((e,{instanceIdentifier:t})=>$s(e.getProvider("app").getImmediate(),e.getProvider("auth-internal"),e.getProvider("app-check-internal"),t)),"PUBLIC").setMultipleInstances(!0)),(0,i.registerVersion)(h,c,Ks),(0,i.registerVersion)(h,c,"esm2017")})),s.register("heT8F",(function(t,n){e(t.exports,"DisplayToDom",(()=>i));class i{hideRegisterElements(){document.querySelector("#gender-choice").style.display="none";document.querySelector("#user-bio").style.display="none";document.querySelector("#register-user").style.display="none"}fillInEveryBlock(){document.getElementById("chattapp").innerText="Please fill in every input..."}wrongUserOrPassword(){document.getElementById("chattapp").innerText="Wrong username or password, try again..."}doesntExist(){document.getElementById("chattapp").innerText="User doesn't exist."}alreadyUser(){document.getElementById("chattapp").innerText="This username is already taken. Try another one."}hideAndShowLoginPage(){document.getElementById("register").addEventListener("click",(e=>{e.preventDefault();const t=document.getElementById("form-title-container"),n=document.getElementById("login-title"),i=document.getElementById("username"),s=document.getElementById("password-title"),r=document.querySelector("#gender-choice"),o=(document.querySelector("#mylogo"),document.getElementById("password")),a=document.getElementById("login"),l=document.getElementById("register"),h=document.querySelector("#user-bio"),c=document.querySelector("#bio-title"),u=document.querySelector("#register-user"),d=document.querySelector("#userIMG");d.style.display="block",u.style.display="center",n.style.display="center",i.style.display="center",o.style.display="center",i.value="",o.value="",t.style.height="834px",a.style.display="none",r.style.display="block",h.style.display="block",n.innerText="Choose a username",s.style.display="initial",s.innerText="Choose password",s.style.color="white",c.innerText="Write something about yourself:",c.style.color="white",u.style.display="block",l.innerHTML='Already have an account? <a id="return" href="">Click here</a>',document.getElementById("return").addEventListener("click",(e=>{e.preventDefault(),e.stopPropagation(),r.style.display="none",h.style.display="none",n.innerText="Log in",i.value="",o.value="",s.style.display="none",u.style.display="none",a.style.display="revert",l.style.display="center",d.style.display="none",t.style.height="500px",l.innerHTML='No account? <a id="return" href="">Register here</a>'}))}))}}}));
//# sourceMappingURL=forumShows.dddbf656.js.map
