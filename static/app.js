

const __version='4.0.2'
const {createApp,ref,reactive,computed,onMounted,watch,provide,inject}=Vue
const i18n={
  zh:{username:'用户名',password:'密码',confirmPwd:'确认密码',login:'登录',register:'注册',goRegister:'没有账号？注册',goLogin:'已有账号？登录',dashboard:'仪表盘',channels:'渠道',users:'用户',tokens:'令牌',logs:'日志',guide:'使用指南',myTokens:'我的令牌',logout:'退出登录',requests:'请求数',tokensUsed:'Token用量',modelUsage:'模型使用统计',addChannel:'添加渠道',cancel:'取消',chName:'名称',chNamePh:'例如 OpenAI',chType:'类型',models:'模型',commaSep:'逗号分隔',modelMapping:'模型映射',mappingTip:'不需要留空',weight:'权重',priority:'优先级',autoBan:'5次失败自动禁用',fails:'次失败',testing:'测试中',test:'测试',enable:'启用',disable:'禁用',delete:'删除',noChannels:'暂无渠道',allTokens:'所有令牌',createToken:'创建令牌',tkName:'名称',tkNamePh:'例如 我的应用',emptyAll:'空=全部',quota:'额度',unlimited:'无限',created:'已创建',copy:'复制',active:'启用',disabled:'已禁用',status:'状态',actions:'操作',role:'角色',maxTokensCount:'令牌数上限',tokenQuota:'Token额度',allowedModels:'允许模型',emptyAllModels:'空=全部模型',resetPwd:'重置密码',allModels:'全部',inheritUser:'继承用户',noLogs:'暂无日志',time:'时间',model:'模型',latency:'延迟',guide1Title:'配置环境',deleteConfirm:'确定删除？',pwdResetTo:'密码已重置为',changePwd:'修改密码',oldPwd:'原密码',newPwd:'新密码',confirm:'确认',tokenCountQuota:'令牌数量',tokenUsageQuota:'Token用量额度',sysSettings:'系统设置',settings:'系统设置',allowRegister:'开放注册',open:'开放',closed:'关闭',defMaxTokens:'新用户默认令牌数',defTokenQuota:'新用户默认Token额度',regClosed:'注册已关闭，请联系管理员',clickShow:'点击显示完整Key',clickHide:'点击隐藏',copied:'已复制',inputTokens:'输入Token',outputTokens:'输出Token',successRate:'成功率',recentLogs:'最近记录',save:'保存',saved:'保存成功',groups:'分组',addGroup:'添加分组',grpName:'分组名称',grpNamePh:'例如 VIP',comment:'备注',userCount:'用户数',noGroups:'暂无分组',group:'分组',allowedGroups:'允许分组',emptyAllGroups:'空=所有分组',bindChannels:'绑定渠道',noGroupsTip:'暂无分组，请先创建分组',defGroup:'新用户默认分组',authedModels:'授权模型',noAuthedModels:'暂无可用模型',noGroupWarn:'您尚未分配分组，无法使用任何渠道',selectModels:'选择模型',recharge:'充值',captchaCode:'验证码',clickRefresh:'点击刷新验证码',rechargeAmount:'充值数量',rechargeSuccess:'充值成功',quotaRemaining:'剩余',rechargeTk:'充值令牌额度',rechargeUser:'充值用户额度',deductUser:'扣除用户额度',deductAmount:'扣除数量',deductSuccess:'扣除成功',setUnlimited:'设为无限',setUnlimitedConfirm:'确定设为无限额度？',inputTok:'输入',outputTok:'输出',tokenName:'令牌',channelName:'渠道',streamType:'流式',clientIP:'客户端IP',errorMsg:'错误信息',totalTok:'总Token',loadMore:'加载更多',noMore:'没有更多了',allStatus:'全部状态',successOnly:'仅成功',failOnly:'仅失败',logDetail:'日志详情',filterModel:'筛选模型',filterStatus:'筛选状态',usage:'用量分析',myUsage:'我的用量',usageAnalysis:'用量分析',exportReport:'导出报表',groupBy:'聚合维度',groupByDay:'按天',groupByUser:'按用户',groupByModel:'按模型',groupByChannel:'按渠道',dimension:'维度',success:'成功',noData:'暂无数据',search:'搜索',resetFilter:'重置筛选',dateFrom:'开始日期',dateTo:'结束日期',exportCsv:'导出CSV',exportXlsx:'导出Excel',exportFormat:'导出格式',minToken:'最小Token',maxToken:'最大Token',operator:'运营',totalTokens:'总Token',platformStats:'平台统计',externalModels:'对外模型名',upstreamModels:'上游模型名',externalModelsTip:'用户看到的模型名，逗号分隔',upstreamModelsTip:'发往上游的模型名，逗号分隔，与上方一一对应，留空则与对外名称相同',filterUser:'筛选用户',filterChannel:'筛选渠道',all:'全部',groupByDetail:'用户/模型/渠道',exportAllUsage:'导出总表',exportLogs:'导出日志',myInfo:'我的信息',username:'用户名',notifications:'通知中心',faultNotif:'故障通知',infoNotif:'普通通知',recoveryNotif:'恢复通知',unread:'未读',read:'已读',markRead:'标记已读',markAllRead:'全部已读',noNotifications:'暂无通知',sendNotif:'发送通知',sendSuccess:'发送成功',notifCategory:'通知类型',notifTitle:'通知标题',notifTitlePh:'请输入标题',notifContent:'通知内容',notifContentPh:'请输入内容',notifReceiver:'接收者',broadcastAll:'广播所有人',singleUser:'单个用户',batchUsers:'批量用户',selectUser:'选择用户',selectUsers:'选择用户',send:'发送',deleteConfirmTitle:'确认删除',deleteConfirmMsg:'此操作不可撤销，确定要删除吗？',inboxTab:'收到',sentTab:'已发送',recipientCount:'接收人数',jwtExpire:'JWT过期(小时)',corsOrigins:'CORS域名',proxyTimeout:'代理超时(秒)',proxyMaxConn:'最大连接数',proxyMaxKeepalive:'最大Keepalive',proxyKeepaliveExp:'Keepalive过期(秒)',proxyRetry:'重试次数',cacheEnabled:'缓存',cacheTTL:'缓存TTL(秒)',cacheMaxEntries:'缓存最大条目',rateLimitEnabled:'限流',rateLimitRpm:'Token RPM',rateLimitIpRpm:'IP RPM',logBatchSize:'日志批量',logBatchInterval:'批量间隔(秒)',logRetention:'日志保留(天)',logCleanupInterval:'清理间隔(小时)',logCleanupBatch:'清理批量',errorLogMax:'系统错误日志最大条数',errorLogMaxDays:'错误日志最大保留天数',minPwdLen:'最短密码',readonlyCfg:'只读(需重启)',serverHost:'监听地址',serverPort:'监听端口',serverWorkers:'Worker数',timezoneOffset:'时区偏移(小时)',dbUrl:'数据库地址',dbPool:'连接池大小',dbOverflow:'最大溢出',secSettings:'安全设置',proxySettings:'代理设置',cacheSettings:'缓存设置',rateLimitSettings:'限流设置',logSettings:'日志设置',regSettings:'注册设置',readonlySettings:'只读配置',heartSettings:'心跳检测',heartEnabled:'心跳检测',heartAutoDisable:'自动禁用',heartAutoDisableTip:'关闭后，渠道故障仅上报告警通知，不自动禁用渠道',autoDisableOn:'自动禁用',autoDisableOff:'仅告警',heartInterval:'检测间隔(秒)',heartTimeout:'超时(秒)'},
  en:{username:'Username',password:'Password',confirmPwd:'Confirm password',login:'Login',register:'Register',goRegister:'No account? Register',goLogin:'Have account? Login',dashboard:'Dashboard',channels:'Channels',users:'Users',tokens:'Tokens',logs:'Logs',guide:'Guide',myTokens:'My Tokens',logout:'Logout',requests:'Requests',tokensUsed:'Tokens Used',modelUsage:'Model Usage',addChannel:'Add Channel',cancel:'Cancel',chName:'Name',chNamePh:'e.g. OpenAI',chType:'Type',models:'Models',commaSep:'comma separated',modelMapping:'Model Mapping',mappingTip:'leave empty if not needed',weight:'Weight',priority:'Priority',autoBan:'Auto-ban on 5 failures',fails:'fails',testing:'Testing',test:'Test',enable:'Enable',disable:'Disable',delete:'Delete',noChannels:'No channels yet',allTokens:'All Tokens',createToken:'Create Token',tkName:'Name',tkNamePh:'e.g. My App',emptyAll:'empty=all',quota:'Quota',unlimited:'unlimited',created:'Created',copy:'Copy',active:'Active',disabled:'Disabled',status:'Status',actions:'Actions',role:'Role',maxTokensCount:'Max Token Count',tokenQuota:'Token Quota',allowedModels:'Allowed Models',emptyAllModels:'empty=all models',resetPwd:'Reset Pwd',allModels:'All',inheritUser:'Inherit user',noLogs:'No logs yet',time:'Time',model:'Model',latency:'Latency',guide1Title:'Configure',deleteConfirm:'Are you sure?',pwdResetTo:'Password reset to',changePwd:'Change Password',oldPwd:'Old Password',newPwd:'New Password',confirm:'Confirm',tokenCountQuota:'Token Count',tokenUsageQuota:'Token Usage Quota',sysSettings:'System Settings',settings:'Settings',allowRegister:'Allow Register',open:'Open',closed:'Closed',defMaxTokens:'Default Max Tokens',defTokenQuota:'Default Token Quota',regClosed:'Registration closed, contact admin',clickShow:'Click to show full key',clickHide:'Click to hide',copied:'Copied',inputTokens:'Input Tokens',outputTokens:'Output Tokens',successRate:'Success',recentLogs:'Recent Logs',save:'Save',saved:'Saved',groups:'Groups',addGroup:'Add Group',grpName:'Group Name',grpNamePh:'e.g. VIP',comment:'Comment',userCount:'Users',noGroups:'No groups yet',group:'Group',allowedGroups:'Allowed Groups',emptyAllGroups:'empty=all groups',bindChannels:'Bind Channels',noGroupsTip:'No groups yet, create one first',defGroup:'Default Group',authedModels:'Authorized Models',noAuthedModels:'No available models',noGroupWarn:'No group assigned, no channel access',selectModels:'Select Models',recharge:'Recharge',captchaCode:'Captcha',clickRefresh:'Click to refresh',rechargeAmount:'Recharge amount',rechargeSuccess:'Recharge successful',quotaRemaining:'Remaining',rechargeTk:'Recharge token quota',rechargeUser:'Recharge user quota',deductUser:'Deduct user quota',deductAmount:'Deduct amount',deductSuccess:'Deducted',setUnlimited:'Set unlimited',setUnlimitedConfirm:'Set unlimited quota?',inputTok:'Input',outputTok:'Output',tokenName:'Token',channelName:'Channel',streamType:'Stream',clientIP:'Client IP',errorMsg:'Error',totalTok:'Total',loadMore:'Load More',noMore:'No more',allStatus:'All',successOnly:'Success only',failOnly:'Failed only',logDetail:'Log Detail',filterModel:'Filter model',filterStatus:'Filter status',usage:'Usage',myUsage:'My Usage',usageAnalysis:'Usage Analysis',exportReport:'Export',groupBy:'Group By',groupByDay:'By Day',groupByUser:'By User',groupByModel:'By Model',groupByChannel:'By Channel',dimension:'Dimension',success:'Success',noData:'No data',search:'Search',resetFilter:'Reset',dateFrom:'Date From',dateTo:'Date To',exportCsv:'Export CSV',exportXlsx:'Export Excel',exportFormat:'Format',minToken:'Min Token',maxToken:'Max Token',operator:'Operator',totalTokens:'Total Tokens',platformStats:'Platform Stats',externalModels:'External Models',upstreamModels:'Upstream Models',externalModelsTip:'Model names visible to users, comma separated',upstreamModelsTip:'Model names sent to upstream, comma separated, 1:1 with external, leave empty to use same names',filterUser:'Filter User',filterChannel:'Filter Channel',all:'All',groupByDetail:'User/Model/Channel',exportAllUsage:'Export All',exportLogs:'Export Logs',myInfo:'My Info',username:'Username',notifications:'Notifications',faultNotif:'Fault',infoNotif:'Info',recoveryNotif:'Recovery',unread:'Unread',read:'Read',markRead:'Mark read',markAllRead:'Mark all read',noNotifications:'No notifications',sendNotif:'Send Notification',sendSuccess:'Sent successfully',notifCategory:'Category',notifTitle:'Title',notifTitlePh:'Enter title',notifContent:'Content',notifContentPh:'Enter content',notifReceiver:'Receiver',broadcastAll:'Broadcast all',singleUser:'Single user',batchUsers:'Batch users',selectUser:'Select user',selectUsers:'Select users',send:'Send',deleteConfirmTitle:'Confirm Delete',deleteConfirmMsg:'This action cannot be undone. Are you sure?',inboxTab:'Inbox',sentTab:'Sent',recipientCount:'Recipients',jwtExpire:'JWT Expiry(h)',corsOrigins:'CORS Origins',proxyTimeout:'Proxy Timeout(s)',proxyMaxConn:'Max Connections',proxyMaxKeepalive:'Max Keepalive',proxyKeepaliveExp:'Keepalive Expiry(s)',proxyRetry:'Retry Count',cacheEnabled:'Cache',cacheTTL:'Cache TTL(s)',cacheMaxEntries:'Cache Max Entries',rateLimitEnabled:'Rate Limit',rateLimitRpm:'Token RPM',rateLimitIpRpm:'IP RPM',logBatchSize:'Log Batch',logBatchInterval:'Batch Interval(s)',logRetention:'Retention(days)',logCleanupInterval:'Cleanup Interval(h)',logCleanupBatch:'Cleanup Batch',errorLogMax:'System Error Log Max',minPwdLen:'Min Pwd Length',readonlyCfg:'Read-only(restart)',serverHost:'Listen Host',serverPort:'Listen Port',serverWorkers:'Workers',timezoneOffset:'Timezone Offset (hrs)',dbUrl:'Database URL',dbPool:'Pool Size',dbOverflow:'Max Overflow',secSettings:'Security',proxySettings:'Proxy',cacheSettings:'Cache',rateLimitSettings:'Rate Limit',logSettings:'Logging',regSettings:'Registration',readonlySettings:'Read-only',heartSettings:'Heartbeat',heartEnabled:'Heartbeat',heartAutoDisable:'Auto Disable',heartAutoDisableTip:'When off, channel faults only trigger alerts without auto-disabling channels',autoDisableOn:'Auto Disable',autoDisableOff:'Alert Only',heartInterval:'Interval(s)',heartTimeout:'Timeout(s)'}}
createApp({
  setup(){
    const authed=ref(false),authMode=ref('login'),authError=ref('')
    const jwtToken=ref(localStorage.getItem('lite_jwt')||'')
    const currentUser=ref(null),isAdmin=ref(false),isOperator=ref(false),isSuperAdmin=ref(false),tab=ref('dashboard')
    const lang=ref(localStorage.getItem('lite_lang')||'zh')
    const sidebarOpen=ref(false)
    const appVersion=ref('4.0.2')
    const loginForm=reactive({username:'',password:'',captchaId:'',captchaCode:''})
    const captchaImg=ref('')
    const regForm=reactive({username:'',password:'',password2:'',captchaId:'',captchaCode:''})
    const stats=reactive({}),dash=reactive({})
    const channels=ref([]),users=ref([]),allTokens=ref([])
    const myTokens=ref([]),logs=ref([]),logsTotal=ref(0),expandedLog=ref(null),logFilter=reactive({model:'',status:'',username:'',channel_id:'',min_prompt:null,max_prompt:null,min_completion:null,max_completion:null,date_from:'',date_to:''})
    const newTokenKey=ref(''),showAddCh=ref(false),showAddMyTk=ref(false),editingChId=ref(null)
    const showChangePwd=ref(false),pwdMsg=ref(''),pwdOk=ref(false)
    const showResetPwd=ref(false),resetPwdUser=ref(null),resetPwdResult=ref('')
    const pwdForm=reactive({old_password:'',new_password:''})
    const testing=reactive({}),testResults=reactive({})
    const ch=reactive({name:'',type:'openai',base_url:'',api_key:'',models:'',upstream_models:'',weight:1,priority:0,auto_ban:true})
    const chAllowedGroups=ref([])
    const myTk=reactive({name:'',models:'',quota_limit:-1})
    const sysSet=reactive({allow_register:true,default_max_tokens:3,default_token_quota:-1,default_group:'',groups:[],all_models:[],
      jwt_expire_hours:1,cors_origins:'',proxy_timeout:120,proxy_max_connections:1000,proxy_max_keepalive:100,proxy_keepalive_expiry:30,proxy_retry_count:1,
      cache_enabled:true,cache_ttl:30,cache_max_entries:10000,rate_limit_enabled:true,rate_limit_rpm:60,rate_limit_ip_rpm:120,
      log_batch_size:50,log_batch_interval:5,log_retention_days:90,log_cleanup_interval_hours:6,log_cleanup_batch_size:10000,error_log_max_entries:10000,
      min_password_length:8,server_host:'',server_port:65000,server_workers:4,timezone_offset:8,database_url:'',db_pool_size:20,db_max_overflow:10})
    const toastMsg=ref(''),userDash=reactive({})
    const groups=ref([]),showAddGrp=ref(false),newGrp=reactive({name:'',comment:'',rate_mode:'global',rpm:0,tpm:0,model_rate_limits:''})
    const userFilter=reactive({keyword:'',role:'',status:'',group:''})
    const filteredUsers=computed(()=>users.value.filter(u=>{if(userFilter.keyword){const kw=userFilter.keyword.toLowerCase();if(!u.username.toLowerCase().includes(kw)&&String(u.id)!==kw)return false}if(userFilter.role&&u.role!==userFilter.role)return false;if(userFilter.status==='active'&&!u.enabled)return false;if(userFilter.status==='disabled'&&u.enabled)return false;if(userFilter.group&&u.group_name!==userFilter.group)return false;return true}))
    const mrlEditor=reactive({show:false,rules:[],target:null,type:''}),poolModels=ref([])
    const myAvailableModels=ref([]),myTkModels=ref([])
    const usageFilter=reactive({date_from:'',date_to:'',user_id:'',model:'',channel_id:'',group_by:'day'})
    const usageSummary=ref(null),usageItems=ref([]),usageTotal=ref(0),usagePageSize=ref(50),usageHasMore=ref(false)
    const myUsageFilter=reactive({date_from:'',date_to:'',model:'',group_by:'day'})
    const myUsageSummary=ref(null),myUsageItems=ref([]),myUsageTotal=ref(0),myUsagePageSize=ref(50),myUsageHasMore=ref(false)
    const logSummary=ref(null)
    const exportFmt=ref('xlsx')
    const dashChart=ref(null),dashChartData=ref(null),myDashChart=ref(null),myDashChartData=ref(null)

    // Notifications
    const notifItems=ref([]),notifTotal=ref(0),unreadCount=ref(0)
    const notifFilter=reactive({category:'',read:''})
    const notifTab=ref('inbox')
    const sentItems=ref([]),sentTotal=ref(0)
    const showSendNotif=ref(false)
    const sendNotifForm=reactive({category:'info',title:'',content:'',mode:'broadcast',receiver_id:null,receiver_ids:[]})
    // Delete confirm
    const showDelConfirm=ref(false),delConfirmMsg=ref(''),delConfirmAction=ref(null),delConfirmTitle=ref(''),delConfirmBtn=ref(''),delConfirmDanger=ref(true)

    function t(key){return(i18n[lang.value]||i18n.en)[key]||key}
    function toggleLang(){lang.value=lang.value==='zh'?'en':'zh';localStorage.setItem('lite_lang',lang.value)}
    function formatNum(n){if(typeof n==='string')try{n=Number(BigInt(n))}catch{n=Number(n)}return n>=1e12?(n/1e12).toFixed(1)+'T':n>=1e9?(n/1e9).toFixed(1)+'B':n>=1e6?(n/1e6).toFixed(1)+'M':n>=1e3?n.toLocaleString():n}
    function bigSub(a,b){try{return Number(BigInt(a)-BigInt(b))}catch{return a-b}}
    function barWidth(count,all){const mx=Math.max(...all.map(x=>x.count));return mx?Math.min(100,count/mx*100):0}
    const revealedKeys=reactive({})
    function maskKey(k){if(!k)return'';return k.slice(0,7)+'*'.repeat(Math.max(k.length-11,4))+k.slice(-4)}
    function toggleReveal(id){revealedKeys[id]=!revealedKeys[id]}
    function displayKey(tk){return revealedKeys[tk.id]?tk.key:maskKey(tk.key)}
    async function copyKey(k){try{await navigator.clipboard.writeText(k)}catch{const ta=document.createElement('textarea');ta.value=k;document.body.appendChild(ta);ta.select();document.execCommand('copy');document.body.removeChild(ta)}toast(t('copied'))}
    function toast(msg){toastMsg.value=msg;setTimeout(()=>{toastMsg.value=''},2000)}

    function authHeaders(){
      return{Authorization:'Bearer '+jwtToken.value,'Content-Type':'application/json'}
    }
    async function api(method,path,body=null){
      const opts={method,headers:authHeaders()}
      if(body)opts.body=JSON.stringify(body)
      const res=await fetch(path,opts)
      if(res.status===401){authError.value='Auth failed';return null}
      if(res.status===403){toast('权限不足');return null}
      if(!res.ok){try{const d=await res.json();toast(d.error?.message||d.detail||('Error '+res.status))}catch{toast('Error '+res.status)}return null}
      try{return await res.json()}catch{return null}
    }

    // Auth
    async function refreshCaptcha(){
      const res=await fetch('/api/auth/captcha')
      const blob=await res.blob()
      captchaImg.value=URL.createObjectURL(blob)
      const cid=res.headers.get('X-Captcha-Id')||''
      loginForm.captchaId=cid
      regForm.captchaId=cid
    }
    async function doLogin(){
      authError.value=''
      try{
      const res=await fetch('/api/auth/login',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:loginForm.username,password:loginForm.password,captcha_id:loginForm.captchaId,captcha_code:loginForm.captchaCode})})
      if(!res.ok){try{const d=await res.json();authError.value=d.error?.message||d.detail||('Error '+res.status)}catch{authError.value='Server error ('+res.status+')'}refreshCaptcha();return}
      const d=await res.json()
      if(!d.success){authError.value=d.error?.message||d.detail||'Login failed';refreshCaptcha();return}
      jwtToken.value=d.token;localStorage.setItem('lite_jwt',d.token)
      currentUser.value=d.user;isAdmin.value=d.user.role==='admin';isOperator.value=d.user.role==='operator';isSuperAdmin.value=d.user.is_super;loadUnreadCount()===true
      authed.value=true;tab.value=localStorage.getItem('lite_tab')||'dashboard'
      loadAll()
      }catch(e){authError.value='Login failed';refreshCaptcha()}
    }
    async function doRegister(){
      authError.value=''
      if(regForm.password!==regForm.password2){authError.value=t('confirmPwd')+' error';return}
      try{
      const res=await fetch('/api/auth/register',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({username:regForm.username,password:regForm.password,captcha_id:regForm.captchaId,captcha_code:regForm.captchaCode})})
      if(!res.ok){try{const d=await res.json();authError.value=d.error?.message||d.detail||('Error '+res.status)}catch{authError.value='Server error ('+res.status+')'}refreshCaptcha();return}
      const d=await res.json()
      if(!d.success){authError.value=d.error?.message||d.detail||'Register failed';refreshCaptcha();return}
      jwtToken.value=d.token;localStorage.setItem('lite_jwt',d.token)
      currentUser.value=d.user;isAdmin.value=false;isOperator.value=false;isSuperAdmin.value=false
      authed.value=true;tab.value=localStorage.getItem('lite_tab')||'dashboard'
      loadAll()
      }catch(e){authError.value='Network error';refreshCaptcha()}
    }
    function logout(){
      authed.value=false;jwtToken.value='';currentUser.value=null;isAdmin.value=false;isOperator.value=false;isSuperAdmin.value=false
      localStorage.removeItem('lite_jwt')
    }
    async function changePwd(){
      pwdMsg.value='';pwdOk.value=false
      const res=await fetch('/api/auth/password',{method:'PUT',headers:authHeaders(),body:JSON.stringify(pwdForm)})
      const d=await res.json()
      if(d.success){pwdOk.value=true;pwdMsg.value=t('changePwd')+' ✓';pwdForm.old_password='';pwdForm.new_password=''}
      else{pwdMsg.value=d.detail||'Failed'}
    }

    // Time formatting - convert UTC to local
    function fmtTime(iso){if(!iso)return '-'; if(typeof iso==='string' && iso.includes(' ') && !iso.includes('T'))return iso; const d=new Date(iso.includes('T')?iso+'Z':iso); const pad=n=>String(n).padStart(2,'0'); return `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`}
    function localDate(d){const dt=d||new Date();const pad=n=>String(n).padStart(2,'0');return `${dt.getFullYear()}-${pad(dt.getMonth()+1)}-${pad(dt.getDate())}`}
    function showLogError(l){if(l.error_msg)toastMsg.value=l.error_msg}

    // Load
    async function loadAll(){
      if(isAdmin.value){loadStats();loadDash();loadChannels();loadGroups();loadUsers();loadAllTokens();loadLogs();loadNotifications();loadUnreadCount();loadDashChart();if(isSuperAdmin.value){loadSettings()}else{fetch('/api/settings/public').then(r=>r.json()).then(d=>{if(d?.groups)sysSet.groups=d.groups;if(d?.all_models)sysSet.all_models=d.all_models}).catch(()=>{})}}
      if(isOperator.value){loadStats();loadDash();loadChannels();loadLogs();loadMyTokens();loadUserDash();loadMyModels();loadNotifications();loadUnreadCount();loadDashChart();fetch('/api/settings/public').then(r=>r.json()).then(d=>{if(d?.groups)sysSet.groups=d.groups;if(d?.all_models)sysSet.all_models=d.all_models}).catch(()=>{})}
      if(currentUser.value){loadMe();if(!isAdmin.value&&!isOperator.value){loadUserDash();loadMyTokens();loadMyModels();loadNotifications();loadUnreadCount();loadMyDashChart()}if(isAdmin.value){loadMyTokens();loadUserDash();loadMyModels()}}
    }
    async function loadMe(){const r=await(await fetch('/api/auth/me',{headers:{Authorization:'Bearer '+jwtToken.value}})).json();if(r.id){currentUser.value={...currentUser.value,...r};isSuperAdmin.value=r.is_super===true}}
    async function loadStats(){const d=await api('GET','/api/stats');if(d)Object.assign(stats,d)}
    async function loadDash(){const d=await api('GET','/api/dashboard');if(d)Object.assign(dash,d)}
    function renderDashChart(data){
      if(!data||!data.items)return
      const labels=data.items.map(i=>i.key.slice(5)),reqs=data.items.map(i=>i.requests),tokens=data.items.map(i=>i.total_tokens)
      const ctx=document.getElementById('dashChartCanvas')
      if(!ctx)return
      if(dashChart.value)dashChart.value.destroy()
      dashChart.value=new Chart(ctx,{type:'line',data:{labels,datasets:[
        {label:t('requests'),data:reqs,borderColor:'#6366f1',backgroundColor:'rgba(99,102,241,0.08)',fill:true,tension:0.3,pointRadius:2,borderWidth:2,yAxisID:'y'},
        {label:'Token',data:tokens,borderColor:'#a855f7',backgroundColor:'rgba(168,85,247,0.08)',fill:true,tension:0.3,pointRadius:2,borderWidth:2,yAxisID:'y1'}
      ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:{labels:{usePointStyle:true,pointStyle:'circle',boxWidth:6,font:{size:11}}}},scales:{x:{grid:{display:false},ticks:{font:{size:10}}},y:{type:'linear',position:'left',grid:{color:'rgba(0,0,0,0.04)'},ticks:{font:{size:10}},title:{display:true,text:t('requests'),font:{size:11}}},y1:{type:'linear',position:'right',grid:{drawOnChartArea:false},ticks:{font:{size:10}},title:{display:true,text:'Token',font:{size:11}}}}}})
    }
    async function loadDashChart(){
      if(dashChartData.value){await Vue.nextTick();renderDashChart(dashChartData.value);if(!dashChart.value){await Vue.nextTick();renderDashChart(dashChartData.value)}return}
      const d=await api('GET','/api/stats/usage?group_by=day&order=asc&date_from='+localDate(new Date(Date.now()-30*86400000)))
      if(!d||!d.items)return
      dashChartData.value=d
      await Vue.nextTick()
      renderDashChart(d)
      if(!dashChart.value){await Vue.nextTick();renderDashChart(d)}
    }
    function renderMyDashChart(data){
      if(!data||!data.items)return
      const labels=data.items.map(i=>i.key.slice(5)),reqs=data.items.map(i=>i.requests),tokens=data.items.map(i=>i.total_tokens)
      const ctx=document.getElementById('myDashChartCanvas')
      if(!ctx)return
      if(myDashChart.value)myDashChart.value.destroy()
      myDashChart.value=new Chart(ctx,{type:'line',data:{labels,datasets:[
        {label:t('requests'),data:reqs,borderColor:'#6366f1',backgroundColor:'rgba(99,102,241,0.08)',fill:true,tension:0.3,pointRadius:2,borderWidth:2,yAxisID:'y'},
        {label:'Token',data:tokens,borderColor:'#a855f7',backgroundColor:'rgba(168,85,247,0.08)',fill:true,tension:0.3,pointRadius:2,borderWidth:2,yAxisID:'y1'}
      ]},options:{responsive:true,maintainAspectRatio:false,interaction:{mode:'index',intersect:false},plugins:{legend:{labels:{usePointStyle:true,pointStyle:'circle',boxWidth:6,font:{size:11}}}},scales:{x:{grid:{display:false},ticks:{font:{size:10}}},y:{type:'linear',position:'left',grid:{color:'rgba(0,0,0,0.04)'},ticks:{font:{size:10}},title:{display:true,text:t('requests'),font:{size:11}}},y1:{type:'linear',position:'right',grid:{drawOnChartArea:false},ticks:{font:{size:10}},title:{display:true,text:'Token',font:{size:11}}}}}})
    }
    async function loadMyDashChart(){
      if(myDashChartData.value){await Vue.nextTick();renderMyDashChart(myDashChartData.value);if(!myDashChart.value){await Vue.nextTick();renderMyDashChart(myDashChartData.value)}return}
      const d=await api('GET','/api/my/usage?group_by=day&order=asc&date_from='+localDate(new Date(Date.now()-30*86400000)))
      if(!d||!d.items)return
      myDashChartData.value=d
      await Vue.nextTick()
      renderMyDashChart(d)
      if(!myDashChart.value){await Vue.nextTick();renderMyDashChart(d)}
    }
    async function loadChannels(){channels.value=(await api('GET','/api/channels'))||[]}
    async function loadUsers(){users.value=(await api('GET','/api/users'))||[]}
    async function loadAllTokens(){allTokens.value=(await api('GET','/api/tokens'))||[]}
    async function loadMyTokens(){myTokens.value=await(await fetch('/api/my/tokens',{headers:{Authorization:'Bearer '+jwtToken.value}})).json()||[]}
    async function loadLogs(){const p=new URLSearchParams({limit:'50',offset:'0'});if(logFilter.model)p.set('model',logFilter.model);if(logFilter.status)p.set('success',logFilter.status);if(logFilter.username)p.set('username',logFilter.username);if(logFilter.channel_id)p.set('channel_id',logFilter.channel_id);if(logFilter.min_prompt)p.set('min_prompt_tokens',logFilter.min_prompt);if(logFilter.max_prompt)p.set('max_prompt_tokens',logFilter.max_prompt);if(logFilter.min_completion)p.set('min_completion_tokens',logFilter.min_completion);if(logFilter.max_completion)p.set('max_completion_tokens',logFilter.max_completion);if(logFilter.date_from)p.set('date_from',logFilter.date_from);if(logFilter.date_to)p.set('date_to',logFilter.date_to);const logApi=isOperator.value?'/api/logs/operator?':'/api/logs?';const r=(await api('GET',logApi+p))||{items:[],total:0};logs.value=r.items;logsTotal.value=r.total;loadLogSummary()}async function reloadLogs(){await loadLogs()}async function loadMoreLogs(){const p=new URLSearchParams({limit:'50',offset:String(logs.value.length)});if(logFilter.model)p.set('model',logFilter.model);if(logFilter.status)p.set('success',logFilter.status);if(logFilter.username)p.set('username',logFilter.username);if(logFilter.channel_id)p.set('channel_id',logFilter.channel_id);if(logFilter.min_prompt)p.set('min_prompt_tokens',logFilter.min_prompt);if(logFilter.max_prompt)p.set('max_prompt_tokens',logFilter.max_prompt);if(logFilter.min_completion)p.set('min_completion_tokens',logFilter.min_completion);if(logFilter.max_completion)p.set('max_completion_tokens',logFilter.max_completion);if(logFilter.date_from)p.set('date_from',logFilter.date_from);if(logFilter.date_to)p.set('date_to',logFilter.date_to);const logApi=isOperator.value?'/api/logs/operator?':'/api/logs?';const r=(await api('GET',logApi+p))||{items:[]};logs.value=logs.value.concat(r.items)}function expandLog(l){expandedLog.value=expandedLog.value?.id===l.id?null:l}
    async function loadSettings(){const d=await api('GET','/api/settings');if(d)Object.assign(sysSet,d)}
    async function saveSettings(){const{groups:_,all_models:__ ,server_host:___,server_port:____,server_workers:_____,database_url:______,db_pool_size:_______,db_max_overflow:________,...payload}=sysSet;await api('PUT','/api/settings',payload);toast(t('saved'))}
    async function loadUserDash(){const d=await api('GET','/api/my/dashboard');if(d)Object.assign(userDash,d)}
    async function loadGroups(){groups.value=(await api('GET','/api/groups'))||[]}
    async function loadMyModels(){const d=await api('GET','/api/my/models');if(d){myAvailableModels.value=d.models||[];myTkModels.value=[]}}
    function userModelArr(u){
      // allowed_models有值=用户显式限制；为空=继承分组全部授权模型
      const am=(u.allowed_models||'').split(',').map(x=>x.trim()).filter(x=>x);
      const groupModels=u.authed_models||[];
      if(!am.length) return groupModels;
      // 用户显式限制 & 分组可用模型 取交集，避免用户allowed_models包含已解绑的模型
      return am.filter(m=>groupModels.includes(m));
    }
    function openMrlEditor(obj,type){
  mrlEditor.type=type;mrlEditor.target=obj;
  try{const parsed=JSON.parse(obj.model_rate_limits||'{}');mrlEditor.rules=Object.entries(parsed).map(([model,v])=>({model,rpm:v.rpm||0,tpm:v.tpm||0}))}catch(e){mrlEditor.rules=[]}
  if(!mrlEditor.rules.length)mrlEditor.rules.push({model:'*',rpm:0,tpm:0});
  try{
    const ms=new Set();
    if(type==='group'){
      // Only show models from channels bound to this group
      const grpName=obj.name;
      channels.value.forEach(ch=>{
        if(ch.allowed_groups){
          const grpList=(ch.allowed_groups+'').split(',').map(g=>g.trim());
          if(grpList.includes(grpName)||grpList.includes('*')||ch.allowed_groups===''){
            if(ch.models)(ch.models+'').split(',').forEach(m=>{m=m.trim();if(m)ms.add(m)})
          }
        }else{
          // No group restriction = all channels
          if(ch.models)(ch.models+'').split(',').forEach(m=>{m=m.trim();if(m)ms.add(m)})
        }
      });
    }else{
      // User: show models from user's allowed_models or their group's channels
      if(obj.allowed_models){
        (obj.allowed_models+'').split(',').forEach(m=>{m=m.trim();if(m)ms.add(m)});
      }
      // Also add models from user's group channels
      const gName=obj.group_name||'';
      if(gName){
        channels.value.forEach(ch=>{
          if(ch.allowed_groups){
            const grpList=(ch.allowed_groups+'').split(',').map(g=>g.trim());
            if(grpList.includes(gName)||grpList.includes('*')||ch.allowed_groups===''){
              if(ch.models)(ch.models+'').split(',').forEach(m=>{m=m.trim();if(m)ms.add(m)})
            }
          }
        });
      }
      // Fallback: if no models found, show all enabled channel models
      if(ms.size===0){
        channels.value.forEach(ch=>{if(ch.enabled&&ch.models)(ch.models+'').split(',').forEach(m=>{m=m.trim();if(m)ms.add(m)})});
      }
    }
    poolModels.value=[...ms].sort();
  }catch(e2){poolModels.value=[]}
  mrlEditor.show=true}
    function saveMrlEditor(){const obj={};mrlEditor.rules.forEach(r=>{if(r.model){obj[r.model]={};if(r.rpm)obj[r.model].rpm=r.rpm;if(r.tpm)obj[r.model].tpm=r.tpm}});mrlEditor.target.model_rate_limits=Object.keys(obj).length?JSON.stringify(obj):'';mrlEditor.show=false}
    function parseModelLimits(s){try{return JSON.parse(s||'{}')}catch(e){return{}}}
    function toggleUserModel(u,m,ev){
      const checked=ev.target.checked;
      const am=(u.allowed_models||'').split(',').map(x=>x.trim()).filter(x=>x);
      if(checked){
        if(!am.includes(m))am.push(m);
        u.allowed_models=am.join(',');
      }else{
        if(am.length===0){
          // 继承分组模式 → 转显式限制：去掉该模型
          u.allowed_models=(u.authed_models||[]).filter(x=>x!==m).join(',');
        }else{
          u.allowed_models=am.filter(x=>x!==m).join(',');
        }
      }
    }
    async function createGroup(){if(!newGrp.name)return;const d=await api('POST','/api/groups',newGrp);if(d?.success){Object.assign(newGrp,{name:'',comment:'',rate_mode:'global',rpm:0,tpm:0,model_rate_limits:''});showAddGrp.value=false;loadGroups();loadSettings();toast(t('saved'))}}
    async function updateGroup(g){await api('PUT','/api/groups/'+g.id,{name:g.name,comment:g.comment,allowed_models:g.allowed_models,rate_mode:g.rate_mode,rpm:g.rpm,tpm:g.tpm,model_rate_limits:g.model_rate_limits});loadGroups();loadUsers();loadSettings();toast(t('saved'))}
    async function delGroup(id){askDel(t('deleteConfirm'),async()=>{await api('DELETE','/api/groups/'+id);loadGroups();loadUsers();loadSettings();toast(t('saved'))})}
    // Group-Channel binding helpers
    function grpChannels(g){
      // 判断渠道是否属于某分组：allowed_groups为空=全部可用，否则需包含分组名
      // __none__ 表示显式不绑定任何分组
      return channels.value.filter(c=>{
        const ags=(c.allowed_groups||'').split(',').map(x=>x.trim()).filter(x=>x);
        if(ags.includes('__none__'))return false; // 显式无分组
        return ags.length===0||ags.includes(g.name);
      }).map(c=>c.id);
    }
    async function toggleGrpChannel(g,c,ev){
      const checked=ev.target.checked;
      let ags=(c.allowed_groups||'').split(',').map(x=>x.trim()).filter(x=>x);
      // 过滤掉特殊标记
      ags=ags.filter(x=>x!=='__none__');
      if(ags.length===0)ags=[...groups.value.map(grp=>grp.name)];
      if(checked){
        if(!ags.includes(g.name))ags.push(g.name);
      }else{
        const idx=ags.indexOf(g.name);
        if(idx>=0)ags.splice(idx,1);
      }
      // 取消全部后用 __none__ 标记"不绑定任何分组"，而非空串(空串=全部可用)
      if(ags.length===0)ags=['__none__'];
      await api('PUT','/api/channels/'+c.id,{allowed_groups:ags.join(',')});
      loadChannels();
      loadUsers();
    }

    // Channels
    function buildMapping(ext,upstream){const eArr=ext.split(',').map(x=>x.trim()).filter(x=>x);const uArr=upstream.split(',').map(x=>x.trim()).filter(x=>x);if(!uArr.length)return'';const map={};eArr.forEach((m,i)=>{if(uArr[i]&&uArr[i]!==m)map[m]=uArr[i]});return Object.keys(map).length?JSON.stringify(map):''}

async function addChannel(){if(!ch.name||!ch.base_url||!ch.api_key)return;const payload={...ch,allowed_groups:chAllowedGroups.value.join(',')};await api('POST','/api/channels',payload);Object.assign(ch,{name:'',base_url:'',api_key:'',models:'',model_mapping:'',weight:1,priority:0,auto_ban:true});chAllowedGroups.value=[];showAddCh.value=false;loadChannels();loadStats()}
    async function editChannel(c){editingChId.value=c.id;let upstream='';if(c.model_mapping){try{const map=JSON.parse(c.model_mapping);upstream=Object.values(map).join(', ')}catch{}}Object.assign(ch,{name:c.name,type:c.type||'openai',base_url:c.base_url,api_key:'',models:c.models||'',upstream_models:upstream,weight:c.weight||1,priority:c.priority||0,auto_ban:c.auto_ban!==false});chAllowedGroups.value=(c.allowed_groups||'').split(',').map(x=>x.trim()).filter(x=>x&&x!=='__none__');showAddCh.value=false;ch._api_key_changed=false;ch._api_key_length=c.api_key_length||0}
    async function saveEditChannel(){if(!ch.name||!ch.base_url)return;const payload={name:ch.name,type:ch.type,base_url:ch.base_url,models:ch.models,model_mapping:buildMapping(ch.models,ch.upstream_models),weight:ch.weight,priority:ch.priority,auto_ban:ch.auto_ban,allowed_groups:chAllowedGroups.value.join(',')};if(ch._api_key_changed&&ch.api_key)payload.api_key=ch.api_key;await api('PUT','/api/channels/'+editingChId.value,payload);editingChId.value=null;Object.assign(ch,{name:'',base_url:'',api_key:'',models:'',upstream_models:'',weight:1,priority:0,auto_ban:true});chAllowedGroups.value=[];delete ch._api_key_changed;delete ch._api_key_length;loadChannels();loadStats()}
    function cancelEditChannel(){editingChId.value=null;Object.assign(ch,{name:'',base_url:'',api_key:'',models:'',upstream_models:'',weight:1,priority:0,auto_ban:true});chAllowedGroups.value=[];delete ch._api_key_changed;delete ch._api_key_length}
    async function toggleChannel(c){await api('PUT','/api/channels/'+c.id,{enabled:!c.enabled});loadChannels();loadStats()}
    async function delChannel(id){askDel(t('deleteConfirm'),async()=>{await api('DELETE','/api/channels/'+id);loadChannels();loadStats()})}
    async function testChannel(id){testing[id]=true;delete testResults[id];const d=await api('POST','/api/channels/'+id+'/test');testing[id]=false;if(d)testResults[id]=d;else testResults[id]={success:false,latency_ms:0,status:'Error'};loadChannels()}

    // Users
    async function updateUser(u){if(u.rate_mode==='inherit'){u.rpm=0;u.tpm=0;u.model_rate_limits=''}const payload={max_tokens:u.max_tokens,allowed_models:u.allowed_models,role:u.role,rate_mode:u.rate_mode,rpm:u.rpm,tpm:u.tpm,model_rate_limits:u.model_rate_limits};/* Only send group_id if user explicitly changed it via the saved state */if(u._group_changed){payload.group_id=u.group_id||0;payload.rate_mode='inherit';payload.rpm=0;payload.tpm=0;u.rate_mode='inherit';u.rpm=0;u.tpm=0};await api('PUT','/api/users/'+u.id,payload);delete u._group_changed;toast(t('saved'));loadUsers()}
    async function rechargeUser(u){
      const amt=prompt(t('rechargeUser')+' - '+u.username+'\n'+t('rechargeAmount')+':')
      if(!amt||isNaN(amt)||Number(amt)<=0)return
      const d=await api('POST','/api/users/'+u.id+'/recharge',{amount:Number(amt)})
      if(d?.success){loadUsers();toast(t('rechargeSuccess')+' +'+amt)}
    }
    async function setUserQuotaUnlimited(u){askDel(t('setUnlimitedConfirm')+'?',async()=>{await api('PUT','/api/users/'+u.id,{token_quota:-1});loadUsers();toast(t('saved'))},t('setUnlimited'),t('confirm'),false)}
    async function deductUser(u){
      const amt=prompt(t('deductUser')+' - '+u.username+'\n'+t('deductAmount')+':')
      if(!amt||isNaN(amt)||Number(amt)<=0)return
      const d=await api('POST','/api/users/'+u.id+'/deduct',{amount:Number(amt)})
      if(d?.success){loadUsers();toast(t('deductSuccess')+' -'+amt)}
    }
    async function setUserQuotaManual(u){
      const amt=prompt('设置用户额度 - '+u.username+'\n输入新的Token额度（从0开始计）:')
      if(!amt||isNaN(amt)||Number(amt)<0)return
      await api('PUT','/api/users/'+u.id,{token_quota:Number(amt),token_quota_used:0})
      loadUsers();toast(t('saved'))
    }
    async function rechargeTk(tk){
      const amt=prompt(t('rechargeTk')+' - '+tk.name+'\n'+t('rechargeAmount')+':')
      if(!amt||isNaN(amt)||Number(amt)<=0)return
      const d=await api('POST','/api/tokens/'+tk.id+'/recharge',{amount:Number(amt)})
      if(d?.success){loadAllTokens();toast(t('rechargeSuccess')+' +'+amt)}
    }
    async function setTkQuotaUnlimited(tk){askDel(t('setUnlimitedConfirm')+'?',async()=>{await api('PUT','/api/tokens/'+tk.id,{quota_limit:-1});loadAllTokens();toast(t('saved'))},t('setUnlimited'),t('confirm'),false)}
    async function toggleUserEnabled(u){await api('PUT','/api/users/'+u.id,{enabled:!u.enabled});loadUsers()}
    async function resetUserPwd(u){resetPwdUser.value=u;resetPwdResult.value='';showResetPwd.value=true}
    async function doResetPwd(){const u=resetPwdUser.value;if(!u)return;const pwd='Reset'+Math.random().toString(36).slice(2,8);await api('PUT','/api/users/'+u.id,{password:pwd});resetPwdResult.value=pwd}
    async function delUser(id){askDel(t('deleteConfirm'),async()=>{await api('DELETE','/api/users/'+id);loadUsers();loadStats()})}

    // Tokens (Admin)
    async function updateTokenAdmin(tk){await api('PUT','/api/tokens/'+tk.id,{models:tk.models,quota_limit:tk.quota_limit})}
    async function toggleTokenAdmin(tk){await api('PUT','/api/tokens/'+tk.id,{enabled:!tk.enabled});loadAllTokens()}
    async function delTokenAdmin(id){askDel(t('deleteConfirm'),async()=>{await api('DELETE','/api/tokens/'+id);loadAllTokens();loadStats()})}

    // My Tokens
    async function createMyToken(){
      if(!myTk.name){alert('Name required');return}
      const res=await fetch('/api/my/tokens',{method:'POST',headers:{Authorization:'Bearer '+jwtToken.value,'Content-Type':'application/json'},body:JSON.stringify({name:myTk.name,models:myTkModels.value.join(','),quota_limit:myTk.quota_limit})})
      const d=await res.json()
      if(d?.success){newTokenKey.value=d.key;Object.assign(myTk,{name:'',models:'',quota_limit:-1});myTkModels.value=[];showAddMyTk.value=false;loadMyTokens();loadMe()}
      else{alert(d?.detail||'Failed')}
    }
    async function toggleMyToken(tk){await fetch('/api/my/tokens/'+tk.id,{method:'PUT',headers:{Authorization:'Bearer '+jwtToken.value,'Content-Type':'application/json'},body:JSON.stringify({enabled:!tk.enabled})});loadMyTokens()}
    function tkModelsArr(tk){if(!tk.models)return[];return tk.models.split(',').map(x=>x.trim()).filter(x=>x)}
    async function setTkAllModels(tk){await api('PUT','/api/my/tokens/'+tk.id,{models:''});loadMyTokens()}
    async function toggleTkModel(tk,m,ev){const checked=ev.target.checked;let arr=tkModelsArr(tk);if(checked){if(!arr.includes(m))arr.push(m)}else{arr=arr.filter(x=>x!==m)}await api('PUT','/api/my/tokens/'+tk.id,{models:arr.join(',')});loadMyTokens()}
    async function delMyToken(id){askDel(t('deleteConfirm'),async()=>{await fetch('/api/my/tokens/'+id,{method:'DELETE',headers:{Authorization:'Bearer '+jwtToken.value}});loadMyTokens();loadMe()})}

    // Delete confirm helper
    function askDel(msg,action,title,btn,danger){delConfirmMsg.value=msg;delConfirmAction.value=action;delConfirmTitle.value=title||t('deleteConfirmTitle');delConfirmBtn.value=btn||t('delete');delConfirmDanger.value=danger!==false;showDelConfirm.value=true}
    function doDelConfirm(){showDelConfirm.value=false;if(delConfirmAction.value)delConfirmAction.value();delConfirmAction.value=null}

    // Notifications
    async function loadNotifications(){const p=new URLSearchParams({limit:'50',offset:'0'});if(notifFilter.category)p.set('category',notifFilter.category);if(notifFilter.read)p.set('read',notifFilter.read);const d=await api('GET','/api/notifications?'+p);if(d){notifItems.value=d.items||[];notifTotal.value=d.total||0}loadUnreadCount()}
    async function loadSentNotifications(){const p=new URLSearchParams({limit:'50',offset:'0'});if(notifFilter.category)p.set('category',notifFilter.category);const d=await api('GET','/api/notifications/sent?'+p);if(d){sentItems.value=d.items||[];sentTotal.value=d.total||0}}
    async function loadMoreNotif(){if(notifTab.value==='sent'){const p=new URLSearchParams({limit:'50',offset:String(sentItems.value.length)});if(notifFilter.category)p.set('category',notifFilter.category);const d=await api('GET','/api/notifications/sent?'+p);if(d)sentItems.value=sentItems.value.concat(d.items||[]);return}const p=new URLSearchParams({limit:'50',offset:String(notifItems.value.length)});if(notifFilter.category)p.set('category',notifFilter.category);if(notifFilter.read)p.set('read',notifFilter.read);const d=await api('GET','/api/notifications?'+p);if(d)notifItems.value=notifItems.value.concat(d.items||[])}
    async function loadUnreadCount(){const d=await api('GET','/api/notifications/unread_count');if(d)unreadCount.value=d.count||0}
    async function markRead(id){await api('PUT','/api/notifications/'+id+'/read');loadNotifications()}
    async function markAllRead(){await api('PUT','/api/notifications/read_all');loadNotifications()}
    async function delNotif(id){await api('DELETE','/api/notifications/'+id);loadNotifications()}
    async function delSentNotif(id){askDel(t('deleteConfirm'),async()=>{await api('DELETE','/api/notifications/sent/'+id);loadSentNotifications();loadNotifications()})}
    async function doSendNotif(){if(!sendNotifForm.title){toast(t('notifTitlePh'));return}if(sendNotifForm.mode==='broadcast'){await api('POST','/api/notifications',{title:sendNotifForm.title,content:sendNotifForm.content,category:sendNotifForm.category,receiver_id:null})}else if(sendNotifForm.mode==='single'){if(!sendNotifForm.receiver_id){toast(t('selectUser'));return}await api('POST','/api/notifications',{title:sendNotifForm.title,content:sendNotifForm.content,category:sendNotifForm.category,receiver_id:sendNotifForm.receiver_id})}else if(sendNotifForm.mode==='batch'){if(!sendNotifForm.receiver_ids.length){toast(t('selectUsers'));return}await api('POST','/api/notifications/batch',{title:sendNotifForm.title,content:sendNotifForm.content,category:sendNotifForm.category,receiver_ids:sendNotifForm.receiver_ids})}showSendNotif.value=false;Object.assign(sendNotifForm,{category:'info',title:'',content:'',mode:'broadcast',receiver_id:null,receiver_ids:[]});loadNotifications();if(isAdmin.value)loadSentNotifications();toast(t('sendSuccess'))}
    async function loadLogSummary(){
      const p=new URLSearchParams();
      if(logFilter.model)p.set('model',logFilter.model);if(logFilter.status)p.set('success',logFilter.status);
      if(logFilter.username)p.set('username',logFilter.username);if(logFilter.channel_id)p.set('channel_id',logFilter.channel_id);
      if(logFilter.min_prompt)p.set('min_prompt_tokens',logFilter.min_prompt);if(logFilter.max_prompt)p.set('max_prompt_tokens',logFilter.max_prompt);
      if(logFilter.min_completion)p.set('min_completion_tokens',logFilter.min_completion);if(logFilter.max_completion)p.set('max_completion_tokens',logFilter.max_completion);
      if(logFilter.date_from)p.set('date_from',logFilter.date_from);if(logFilter.date_to)p.set('date_to',logFilter.date_to);
      const usageApi=isOperator.value?'/api/stats/usage/operator?':'/api/stats/usage?';
      const d=await api('GET',usageApi+p);
      logSummary.value=d?.summary||null
    }
    function resetLogFilter(){Object.assign(logFilter,{model:'',status:'',username:'',channel_id:'',min_prompt:null,max_prompt:null,min_completion:null,max_completion:null,date_from:'',date_to:''});reloadLogs()}

    // Usage Analysis
    async function loadUsage(append=false){
      const p=new URLSearchParams({group_by:usageFilter.group_by,page_size:usagePageSize.value});
      if(usageFilter.date_from)p.set('date_from',usageFilter.date_from);if(usageFilter.date_to)p.set('date_to',usageFilter.date_to);
      if(usageFilter.user_id)p.set('user_id',usageFilter.user_id);
      if(usageFilter.model)p.set('model',usageFilter.model);
      if(usageFilter.channel_id)p.set('channel_id',usageFilter.channel_id);
      if(append){const pg=Math.floor(usageItems.value.length/50)+1;p.set('page',pg);p.set('page_size',50)}
      const usageApi=isOperator.value?'/api/stats/usage/operator?':'/api/stats/usage?';
      const d=await api('GET',usageApi+p);
      if(d){usageSummary.value=d.summary;if(append){usageItems.value=[...usageItems.value,...(d.items||[])]}else{usageItems.value=d.items||[]}usageTotal.value=d.total||0;usageHasMore.value=usageItems.value.length<usageTotal.value}
    }
    async function loadMyUsage(append=false){
      const p=new URLSearchParams({group_by:myUsageFilter.group_by,page_size:myUsagePageSize.value});
      if(myUsageFilter.date_from)p.set('date_from',myUsageFilter.date_from);if(myUsageFilter.date_to)p.set('date_to',myUsageFilter.date_to);
      if(myUsageFilter.model)p.set('model',myUsageFilter.model);
      if(append){const pg=Math.floor(myUsageItems.value.length/50)+1;p.set('page',pg);p.set('page_size',50)}
      const d=await api('GET','/api/my/usage?'+p);
      if(d){myUsageSummary.value=d.summary;if(append){myUsageItems.value=[...myUsageItems.value,...(d.items||[])]}else{myUsageItems.value=d.items||[]}myUsageTotal.value=d.total||0;myUsageHasMore.value=myUsageItems.value.length<myUsageTotal.value}
    }

    // Export helpers
    function _defaultDateRange(){
      // 92 days to account for backend +1 day on date_to (effective 93 days)
      const df=localDate(new Date(Date.now()-92*86400000));
      const dt=localDate();
      return [df,dt];
    }
    async function _doExport(url){
      try{const res=await fetch(url,{headers:{Authorization:'Bearer '+(jwtToken.value||'sk-lite-admin-token')}});if(!res.ok){const t=await res.text();try{toast(JSON.parse(t).error?.message||'Export failed')}catch{toast('Export failed')}}else{const blob=await res.blob();const cd=res.headers.get('Content-Disposition')||'';const fname=cd.match(/filename\*=UTF-8''(.+)/)?decodeURIComponent(cd.match(/filename\*=UTF-8''(.+)/)[1]):('report.'+(url.includes('fmt=csv')?'csv':'xlsx'));const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=fname;a.click();URL.revokeObjectURL(a.href)}}catch{toast('Export failed')}
    }

    // Export from Usage page (current view)
    async function exportReport(groupBy){
      const fmt=exportFmt.value||'xlsx';
      const [defDf,defDt]=_defaultDateRange();
      const p=new URLSearchParams({fmt,group_by:groupBy||'day',date_from:usageFilter.date_from||defDf,date_to:usageFilter.date_to||defDt});
      if(usageFilter.model)p.set('model',usageFilter.model);
      if(usageFilter.user_id)p.set('user_id',usageFilter.user_id);
      if(usageFilter.channel_id)p.set('channel_id',usageFilter.channel_id);
      const api=isOperator.value?'/api/reports/export/operator?':'/api/reports/export?';
      await _doExport(api+p);
    }
    // Export full summary table (user×model×channel)
    async function exportAllUsage(){
      const [defDf,defDt]=_defaultDateRange();
      const p=new URLSearchParams({fmt:'xlsx',group_by:'summary',date_from:usageFilter.date_from||defDf,date_to:usageFilter.date_to||defDt});
      if(usageFilter.user_id)p.set('user_id',usageFilter.user_id);
      if(usageFilter.model)p.set('model',usageFilter.model);
      if(usageFilter.channel_id)p.set('channel_id',usageFilter.channel_id);
      await _doExport('/api/reports/export?'+p);
    }
    // Export from Logs page
    async function exportLogReport(){
      const fmt=exportFmt.value||'xlsx';
      const [defDf,defDt]=_defaultDateRange();
      const p=new URLSearchParams({fmt,group_by:'detail',date_from:usageFilter.date_from||defDf,date_to:usageFilter.date_to||defDt});
      if(logFilter.model)p.set('model',logFilter.model);
      if(logFilter.status)p.set('success',logFilter.status);
      if(logFilter.username)p.set('username',logFilter.username);
      if(logFilter.channel_id)p.set('channel_id',logFilter.channel_id);
      if(logFilter.min_prompt)p.set('min_prompt_tokens',logFilter.min_prompt);
      if(logFilter.max_prompt)p.set('max_prompt_tokens',logFilter.max_prompt);
      if(logFilter.min_completion)p.set('min_completion_tokens',logFilter.min_completion);
      if(logFilter.max_completion)p.set('max_completion_tokens',logFilter.max_completion);
      const api=isOperator.value?'/api/reports/export/operator?':'/api/reports/export?';
      await _doExport(api+p);
    }
    // Export my usage
    async function exportMyReport(groupBy){
      const fmt=exportFmt.value||'xlsx';
      const [defDf,defDt]=_defaultDateRange();
      const p=new URLSearchParams({fmt,group_by:groupBy||'day',date_from:myUsageFilter.date_from||defDf,date_to:myUsageFilter.date_to||defDt});
      if(myUsageFilter.model)p.set('model',myUsageFilter.model);
      await _doExport('/api/reports/my/export?'+p);
    }

    // Refresh user data on tab switch
    watch(tab,(nv)=>{if(nv)localStorage.setItem('lite_tab',nv);if(currentUser.value){loadMe();if(!isAdmin.value&&!isOperator.value&&(nv==='dashboard'||nv==='myTokens')){loadUserDash();loadMyTokens();loadMyModels();if(nv==='dashboard')loadMyDashChart()}if(isAdmin.value&&(nv==='myTokens'||nv==='myUsage')){loadMyTokens();loadUserDash();loadMyModels()}if(isAdmin.value&&nv==='dashboard')loadDashChart();if(isOperator.value&&(nv==='myTokens'||nv==='myUsage')){loadMyTokens();loadUserDash();loadMyModels()}if(isOperator.value&&nv==='dashboard')loadDashChart();if(nv==='usage')loadUsage();if(nv==='myUsage')loadMyUsage();if(nv==='notifications'){loadNotifications();if(isAdmin.value)loadSentNotifications();loadUnreadCount()}}})

    // Check register status on mount
    const regOpen=ref(true)
    onMounted(()=>{
      fetch('/api/settings/public').then(r=>r.json()).then(d=>{if(d)regOpen.value=d.allow_register}).catch(()=>{})
      refreshCaptcha()
    })

    // Auto-restore session
    onMounted(()=>{
      fetch('/api/version').then(r=>r.json()).then(d=>{if(d.version)appVersion.value=d.version}).catch(()=>{})
      if(jwtToken.value){
        fetch('/api/auth/me',{headers:{Authorization:'Bearer '+jwtToken.value}}).then(r=>r.json()).then(d=>{
          if(d.id){currentUser.value=d;isAdmin.value=d.role==='admin';loadUnreadCount();isOperator.value=d.role==='operator';isSuperAdmin.value=d.is_super===true;authed.value=true;tab.value=localStorage.getItem('lite_tab')||'dashboard';loadAll()}
        })
      }
    })

    return{version:__version,api,authed,authMode,authError,currentUser,userFilter,filteredUsers,parseModelLimits,mrlEditor,poolModels,openMrlEditor,saveMrlEditor,isAdmin,isOperator,isSuperAdmin,tab,lang,loginForm,regForm,stats,dash,channels,users,allTokens,myTokens,logs,logsTotal,expandedLog,logFilter,newTokenKey,showAddCh,showAddMyTk,editingChId,showChangePwd,pwdMsg,pwdOk,showResetPwd,resetPwdUser,resetPwdResult,pwdForm,testing,testResults,ch,myTk,sysSet,regOpen,revealedKeys,toastMsg,userDash,groups,showAddGrp,newGrp,chAllowedGroups,myAvailableModels,myTkModels,usageFilter,usageSummary,usageItems,usageTotal,usageHasMore,myUsageFilter,myUsageSummary,myUsageItems,myUsageTotal,myUsageHasMore,logSummary,exportFmt,sidebarOpen,appVersion,notifItems,notifTotal,unreadCount,notifFilter,notifTab,sentItems,sentTotal,showSendNotif,sendNotifForm,showDelConfirm,delConfirmMsg,delConfirmTitle,delConfirmBtn,delConfirmDanger,
      t,toggleLang,formatNum,bigSub,barWidth,copyKey,maskKey,toggleReveal,displayKey,captchaImg,refreshCaptcha,doLogin,doRegister,logout,changePwd,loadSettings,saveSettings,
      loadChannels,addChannel,editChannel,saveEditChannel,cancelEditChannel,toggleChannel,delChannel,testChannel,loadUsers,updateUser,toggleUserEnabled,resetUserPwd,delUser,loadGroups,loadStats,loadDash,createGroup,updateGroup,delGroup,grpChannels,toggleGrpChannel,userModelArr,toggleUserModel,
      updateTokenAdmin,toggleTokenAdmin,delTokenAdmin,createMyToken,toggleMyToken,delMyToken,tkModelsArr,setTkAllModels,toggleTkModel,loadMyModels,rechargeUser,rechargeTk,setUserQuotaUnlimited,deductUser,setUserQuotaManual,setTkQuotaUnlimited,reloadLogs,loadMoreLogs,expandLog,fmtTime,showLogError,
      loadUsage,loadMyUsage,exportReport,exportLogReport,exportAllUsage,exportMyReport,resetLogFilter,loadLogSummary,loadNotifications,loadSentNotifications,loadMoreNotif,loadUnreadCount,markRead,markAllRead,delNotif,delSentNotif,doSendNotif,askDel,doDelConfirm,doResetPwd};
  }
}).mount('#app')

