(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73bdcbea"],{"55f1":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("Card",[a("p",{attrs:{slot:"title"},slot:"title"},[t._v("任务列表")]),a("Row",[a("Form",{attrs:{inline:"","label-width":100},nativeOn:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.search(e))}}},[a("FormItem",{attrs:{label:"任务名称"}},[a("Input",{attrs:{placeholder:"请输入任务名称"},model:{value:t.taskName,callback:function(e){t.taskName=e},expression:"taskName"}})],1),a("FormItem",{staticStyle:{width:"250px"},attrs:{label:"可用分组"}},[a("Select",{attrs:{placeholder:"请选择后台可用分组"},model:{value:t.groupId,callback:function(e){t.groupId=e},expression:"groupId"}},t._l(t.groupList,(function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.groupName))])})),1)],1),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")])],1),a("FormItem",[a("Button",{attrs:{type:"info"},on:{click:t.showAddTaskModel}},[t._v("添加任务")])],1)],1)],1),a("Row",{staticClass:"margin-top-20"},[a("Table",{attrs:{stripe:"",border:"",columns:t.columns,data:t.configList}})],1),a("Row",{staticClass:"margin-top-20"},[a("Page",{attrs:{"page-size-opts":t.page.pageSiezs,total:t.page.total,"page-size":t.page.pageSize,"show-elevator":"","show-sizer":"","show-total":""},on:{"on-change":t.toPageNo,"on-page-size-change":t.changePageSize}})],1)],1),a("Modal",{attrs:{title:t.title,"mask-closable":!1,"ok-text":"添加",styles:{top:"20px"}},model:{value:t.showTaskModal,callback:function(e){t.showTaskModal=e},expression:"showTaskModal"}},[a("Form",{ref:"addTaskForm",attrs:{model:t.task,"label-width":100,rules:t.taskRule}},[a("FormItem",{attrs:{label:"任务名称",prop:"taskName"}},[a("Input",{attrs:{placeholder:"请输入任务名称"},model:{value:t.task.taskName,callback:function(e){t.$set(t.task,"taskName",e)},expression:"task.taskName"}})],1),a("FormItem",{attrs:{label:"任务分组",prop:"groupId"}},[a("Select",{attrs:{placeholder:"请选择所属分组"},model:{value:t.task.groupId,callback:function(e){t.$set(t.task,"groupId",e)},expression:"task.groupId"}},t._l(t.groupList,(function(e){return a("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.groupName+" ("+e.groupCode+")")+"\n          ")])})),1)],1),a("FormItem",{attrs:{label:"任务上下文",prop:"taskContext"}},[a("Input",{attrs:{placeholder:"请输入任务上下文",type:"textarea",autosize:{minRows:5,maxRows:10}},model:{value:t.task.taskContext,callback:function(e){t.$set(t.task,"taskContext",e)},expression:"task.taskContext"}})],1),a("FormItem",{attrs:{label:"任务执行器",prop:"processor"}},[a("Input",{attrs:{placeholder:"请输入任务执行器"},model:{value:t.task.processor,callback:function(e){t.$set(t.task,"processor",e)},expression:"task.processor"}})],1),a("FormItem",{attrs:{label:"调度时间类型",prop:"scheduleType"}},[a("Select",{attrs:{placeholder:"请选择任务调度时区"},model:{value:t.task.scheduleType,callback:function(e){t.$set(t.task,"scheduleType",e)},expression:"task.scheduleType"}},[a("Option",{attrs:{value:"CRON"}},[t._v("CRON")])],1)],1),a("FormItem",{attrs:{label:"调度时区",prop:"timeZone"}},[a("Input",{attrs:{placeholder:"请选择任务调度时区",disabled:""},model:{value:t.task.timeZone="Asia/Shanghai",callback:function(e){t.$set(t.task,"timeZone = 'Asia/Shanghai'",e)},expression:"task.timeZone = 'Asia/Shanghai'"}})],1),a("FormItem",{attrs:{label:"调度表达式",prop:"scheduleExpress"}},[a("Input",{attrs:{placeholder:"请输入任务CRON执行表达式"},model:{value:t.task.scheduleExpress,callback:function(e){t.$set(t.task,"scheduleExpress",e)},expression:"task.scheduleExpress"}})],1),a("FormItem",{attrs:{label:"任务优先级",prop:"priority"}},[a("Select",{attrs:{placeholder:"请选择任务优先级(优先级高则优先执行)"},model:{value:t.task.priority,callback:function(e){t.$set(t.task,"priority",e)},expression:"task.priority"}},[a("Option",{attrs:{value:1}},[t._v("1")]),a("Option",{attrs:{value:2}},[t._v("2")]),a("Option",{attrs:{value:3}},[t._v("3")]),a("Option",{attrs:{value:4}},[t._v("4")]),a("Option",{attrs:{value:5}},[t._v("5")]),a("Option",{attrs:{value:6}},[t._v("6")]),a("Option",{attrs:{value:7}},[t._v("7")]),a("Option",{attrs:{value:8}},[t._v("8")]),a("Option",{attrs:{value:9}},[t._v("9")]),a("Option",{attrs:{value:10}},[t._v("10")])],1)],1),a("FormItem",{attrs:{label:"是否并发执行",prop:"parallel"}},[a("RadioGroup",{model:{value:t.task.parallel,callback:function(e){t.$set(t.task,"parallel",e)},expression:"task.parallel"}},[a("Radio",{attrs:{label:0}},[t._v("否")]),a("Radio",{attrs:{label:1}},[t._v("是")])],1)],1)],1),a("Row",{attrs:{slot:"footer",justify:"center",type:"flex"},slot:"footer"},[a("Button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v(t._s(t.buttonContext))]),a("Button",{staticStyle:{"margin-left":"50px"},attrs:{type:"warning"},on:{click:t.cancle}},[t._v("取消")])],1)],1)],1)},r=[],n=a("7e1e"),o={name:"task-list",data:function(){var t=this;return{taskName:"",groupId:"",task:{parallel:1},taskStatus:"",showTaskModal:!1,title:"添加任务",buttonContext:"添加",groupList:[],eventType:"sava",columns:[{title:"名称",align:"center",key:"taskName",minWidth:100},{title:"状态",align:"center",key:"taskState",width:100},{title:"分组",key:"groupCode",align:"center",minWidth:30},{title:"处理器",key:"processor",minWidth:200,align:"center",render:function(t,e){return t("strong",e.row.processor.substr(e.row.processor.lastIndexOf(".")+1))}},{title:"调度规则",key:"scheduleExpress",align:"center",width:130},{title:"并发",key:"parallel",align:"center",width:70,render:function(t,e){return t("strong",e.row.parallel?"是":"否")}},{title:"创建时间",key:"createTime",align:"left",minWidth:100},{title:"操作",align:"left",width:330,render:function(e,a){return e("div",[e("Button",{props:{type:"warning",size:"small"},style:{marginLeft:"10px"},on:{click:function(){Object(n["n"])({taskId:a.row.id}).then((function(e){"200"===e.data.code?(t.$Message.success("调度成功"),t.taskConfigList()):t.$Message.error("调度失败!"+e.data.msg)}))}}},"立刻执行"),e("Button",{props:{type:"warning",size:"small"},style:{marginLeft:"10px",display:a.row.runCmdId>0?"inline-block":"none"},on:{click:function(){Object(n["c"])({taskId:a.row.id}).then((function(e){"200"===e.data.code?(t.$Message.success("clean success"),t.taskConfigList()):t.$Message.error("clean fail!"+e.data.msg)}))}}},"清理锁"),e("Button",{props:{type:"PAUSE"===a.row.taskState?"info":"warning",size:"small"},style:{marginLeft:"10px"},on:{click:function(){"PAUSE"===a.row.taskState?t.scheduleResume(a.row.id):t.schedulePause(a.row.id)}}},"PAUSE"===a.row.taskState?"恢复":"暂停"),e("Button",{props:{type:"success",size:"small"},style:{marginLeft:"10px"},on:{click:function(){t.showTaskModal=!0,t.title="修改任务",t.task=a.row,t.buttonContext="修改",t.eventType="edit"}}},"编辑"),e("Button",{props:{type:"info",size:"small"},style:{marginLeft:"10px"},on:{click:function(){t.$Modal.confirm({title:"确定删除任务?",onOk:function(){Object(n["e"])({taskId:a.row.id}).then((function(e){"200"===e.data.code?(t.$Message.success("删除成功"),t.taskConfigList()):t.$Message.error("删除失败,"+e.data.msg)}))}})}}},"删除")])}}],configList:[],taskRule:{groupId:[{required:!0,message:"任务所属组不能为空"}],taskName:[{required:!0,message:"任务名称不能为空"}],taskContext:[{required:!0,message:"任务上下文不能为空"}],processor:[{required:!0,message:"任务任务执行器不能为空"}],scheduleType:[{required:!0,message:"任务调度类型不能为空"}],timeZone:[{required:!0,message:"任务调度时区不能为空"}],scheduleExpress:[{required:!0,message:"任务调度表达式不能为空"}],parallel:[{required:!0,message:"请选择任务是否并发执行"}],priority:[{required:!0,message:"请输入任务优先级"}]},page:{total:40,pageNo:1,pageSize:20,pageSiezs:[10,20,50]}}},methods:{search:function(){this.taskConfigList()},cancle:function(){this.task={},this.showTaskModal=!1},toPageNo:function(t){this.page.pageNo=t,this.taskConfigList()},changePageSize:function(t){this.page.pageSize=t,this.taskConfigList()},showAddTaskModel:function(){this.showTaskModal=!0,this.buttonContext="添加",this.title="添加任务",this.eventType="sava"},scheduleResume:function(t){var e=this;Object(n["m"])({taskId:t}).then((function(t){"200"===t.data.code?(e.$Message.success("恢复调度成功"),e.taskConfigList()):e.$Message.error("恢复调度失败")}))},schedulePause:function(t){var e=this;Object(n["l"])({taskId:t}).then((function(t){"200"===t.data.code?(e.$Message.success("暂停调度成功"),e.taskConfigList()):e.$Message.error("暂停调度失败")}))},submit:function(){var t=this;switch(this.eventType){case"edit":this.$refs["addTaskForm"].validate((function(e){e&&Object(n["k"])(t.task).then((function(e){"200"===e.data.code?(t.$Message.success("修改任务成功"),t.cancle(),t.taskConfigList()):t.$Message.error("修改任务失败:"+e.data.msg)}))}));break;case"sava":this.$refs["addTaskForm"].validate((function(e){e&&Object(n["b"])(t.task).then((function(e){"200"===e.data.code?(t.$Message.success("添加任务成功"),t.cancle(),t.taskConfigList()):t.$Message.error("添加任务失败:"+e.data.msg)}))}));break}},taskConfigList:function(){var t=this,e={taskName:this.taskName,groupId:this.groupId,taskStatus:this.taskStatus,pageNo:this.page.pageNo,pageSize:this.page.pageSize};Object(n["f"])(e).then((function(e){"200"===e.data.code&&(t.configList=e.data.data,t.page.total=e.data.totalNum)})).catch((function(t){console.log(t)}))},getGroupList:function(){var t=this;Object(n["g"])({pageNo:1,pageSize:9999}).then((function(e){"200"===e.data.code&&(t.groupList=e.data.data)}))}},mounted:function(){this.taskConfigList(),this.getGroupList()}},i=o,u=(a("e7c2"),a("4023")),l=Object(u["a"])(i,s,r,!1,null,null,null);e["default"]=l.exports},"7e1e":function(t,e,a){"use strict";a.d(e,"p",(function(){return r})),a.d(e,"o",(function(){return n})),a.d(e,"i",(function(){return o})),a.d(e,"n",(function(){return i})),a.d(e,"c",(function(){return u})),a.d(e,"f",(function(){return l})),a.d(e,"b",(function(){return c})),a.d(e,"g",(function(){return d})),a.d(e,"h",(function(){return p})),a.d(e,"e",(function(){return m})),a.d(e,"k",(function(){return k})),a.d(e,"m",(function(){return f})),a.d(e,"l",(function(){return g})),a.d(e,"d",(function(){return h})),a.d(e,"j",(function(){return v})),a.d(e,"a",(function(){return b})),a.d(e,"r",(function(){return y})),a.d(e,"q",(function(){return w})),a.d(e,"s",(function(){return I}));var s=a("66df"),r=function(t){switch(t){case"SCHEDULE":return"调度";case"SCHEDULE_STOP":return"终止"}return t},n=function(t){switch(t){case"INIT":return"待下发";case"PUBLISHING":return"下发中";case"PUBLISH_FAIL":return"下发失败";case"RUN":return"执行中";case"PAUSE":return"暂停";case"STOPING":return"终止中";case"ABORT":return"终止";case"FINISH":return"完成";case"DELETED":return"已取消"}return t},o=function(t){return s["a"].request({url:"/user/login",params:t,method:"post"})},i=function(t){return s["a"].request({url:"/schedule/immediate",data:t,method:"post"})},u=function(t){return s["a"].request({url:"/schedule/cleanRunningLock",params:t,method:"post"})},l=function(t){return s["a"].request({url:"/task/list",params:t,method:"get"})},c=function(t){return s["a"].request({url:"/task/add",data:t,method:"post"})},d=function(t){return s["a"].request({url:"/group/list",params:t,method:"get"})},p=function(t){return s["a"].request({url:"/command/list",params:t,method:"get"})},m=function(t){return s["a"].request({url:"/task/delete",data:t,method:"post"})},k=function(t){return s["a"].request({url:"/task/modify",data:t,method:"post"})},f=function(t){return s["a"].request({url:"/schedule/resume",data:t,method:"post"})},g=function(t){return s["a"].request({url:"/schedule/pause",data:t,method:"post"})},h=function(t){return s["a"].request({url:"/group/delete",data:t,method:"post"})},v=function(t){return s["a"].request({url:"/group/modify",data:t,method:"post"})},b=function(t){return s["a"].request({url:"/group/add",data:t,method:"post"})},y=function(t){return s["a"].request({url:"/command/taskCopy",data:t,method:"post"})},w=function(t){return s["a"].request({url:"/command/abort",data:t,method:"post"})},I=function(t){return s["a"].request({url:"/command/delete",data:t,method:"post"})}},"984b":function(t,e,a){},e7c2:function(t,e,a){"use strict";var s=a("984b"),r=a.n(s);r.a}}]);