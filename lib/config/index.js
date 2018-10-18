"use strict"
module.exports = {
  queueSize: 100,
  errorTable: {
    // v2
    "E_AUTHORIZATION_EXPIRED": {
      errorName: "E_AUTHORIZATION_EXPIRED",
      message: "授权过期，应该尽快刷新"
    },
    "E_INVALID_AUTHORIZATION": {
      errorName: "E_INVALID_AUTHORIZATION",
      message: "授权非法"
    },
    "E_NO_SUCH_ENDPOINT": {
      errorName: "E_NO_SUCH_ENDPOINT",
      message: "终端不存在"
    },
    "E_NOT_SUPPORTED_DIRECTIVE": {
      errorName: "E_NOT_SUPPORTED_DIRECTIVE",
      message: "Skill 不支持当前命令请求"
    },
    "E_VALUE_OUT_OF_RANGE": {
      errorName: "E_VALUE_OUT_OF_RANGE",
      message: "命令的值超出了阈值"
    },
    "E_ENDPOINT_BUSY": {
      errorName: "E_DRIVER_DEVICE_NO_FOUND",
      message: "终端正在处理请求，无法处理当前命令请求",
    },
    "E_CHANNEL_NOT_FOUND": {
      errorName: "E_CHANNEL_NOT_FOUND",
      message: "没有对应的频道"
    },
    "E_INTERNAL_ERROR": {
      errorName: "E_INTERNAL_ERROR",
      message: "通用错误"
    },
    "E_ENDPOINT_UNBOUND": {
      errorName: "E_ENDPOINT_UNBOUND",
      message: "设备被解绑，无法控制。"
    },
    "E_ENDPOINT_NEEDS_UPGRADE": {
      errorName: "E_ENDPOINT_NEEDS_UPGRADE",
      message: "设备固件需要升级"
    },
    "E_ENDPOINT_UNREACHABLE": {
      errorName: "E_ENDPOINT_UNREACHABLE",
      message: "无法访问到终端"
    }
    ,
    "E_ENDPOINT_INITIATING": {
      errorName: "E_ENDPOINT_INITIATING",
      message: "终端正在初始化"
    }
    ,
    "E_GATEWAY_UNREACHABLE": {
      errorName: "E_GATEWAY_UNREACHABLE",
      message: "无法访问到终端网关"
    }
    ,
    "E_SERVER_UNREACHABLE": {
      errorName: "E_SERVER_UNREACHABLE",
      message: "无法访问到终端服务器"
    },
    "E_MEDIA_RESOURCE_NOT_FOUND": {
      errorName: "E_MEDIA_RESOURCE_NOT_FOUND",
      message: "找不到相关歌曲"
    },
    "E_MEDIA_FAVORITE_NOT_FOUND": {
      errorName: "E_MEDIA_FAVORITE_NOT_FOUND",
      message: "未找到收藏歌曲"
    },
    "E_MEDIA_NO_PREV": {
      errorName: "E_MEDIA_NO_PREV",
      message: "已经是第一首了"
    },
    "E_MEDIA_NO_NEXT": {
      errorName: "E_MEDIA_NO_NEXT",
      message: "已经是最后一首了"
    },
  
    // v1
    "E_DRIVER_ERROR": {
      errorName: "E_DRIVER_ERROR",
      message: "通用错误"
    },
    "E_DRIVER_SIGN_ERROR": {
      errorName: "E_DRIVER_SIGN_ERROR",
      message: "签名错误"
    },
    "E_DRIVER_DEVICE_NO_FOUND": {
      errorName: "E_DRIVER_DEVICE_NO_FOUND",
      message: "设备不存在"
    },
    "E_DRIVER_TIMEOUT": {
      errorName: "E_DRIVER_TIMEOUT",
      message: "设备控制超时"
    },
    "E_DRIVER_WRONG_USERNAME_PASSWORD": {
      errorName: "E_DRIVER_WRONG_USERNAME_PASSWORD",
      message: "用户名密码错误"
    },
    "E_DRIVER_LOGIN_FAILED": {
      errorName: "E_DRIVER_LOGIN_FAILED",
      message: "登录失败"
    },
    "E_ENDPOINT_REVOKED_AUTHORIZATION": {
      errorName: "E_ENDPOINT_REVOKED_AUTHORIZATION",
      message: "取消了该终端对若琪的授权"
    },
    "E_DRIVER_FAVORITE_NOT_FOUND": {
      errorName: "E_DRIVER_FAVORITE_NOT_FOUND",
      message: "找不到收藏夹中的点播歌曲"
    },
    "E_DRIVER_MEDIA_NO_PREV": {
      errorName: "E_DRIVER_MEDIA_NO_PREV",
      message: "没有上一首了"
    },
    "E_DRIVER_MEDIA_NO_NEXT": {
      errorName: "E_DRIVER_MEDIA_NO_NEXT",
      message: "没有下一首了"
    },
    "E_DRIVER_MEDIA_NOT_PLAYING": {
      errorName: "E_DRIVER_MEDIA_NOT_PLAYING",
      message: "当前没有在播放状态"
    },
  }
}