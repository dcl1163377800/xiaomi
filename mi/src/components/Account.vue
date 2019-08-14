<template>
    <div id="account">
        <div class="menu">
            <span class="iconfont icon-right"></span>
            <span>用户结算</span>
        </div>
        <div class="address">
            <span>添加收货地址</span>
            <span class="iconfont icon-icon1"></span>
        </div>
        <div class="alipay">
            <p>
                <span class="iconfont icon-umidd17"></span>
                <span class="zfb">支付宝</span>
            </p>
            <p>
                <input type="checkbox">
            </p>
        </div>
        <div class="wechat">
            <p>
                <span class="iconfont icon-weixin"></span>
                <span class="zfb">微信支付</span>
            </p>
            <p>
                <input type="checkbox">
            </p>
        </div>
        <div class="millet">
            <p>
                <span class="iconfont icon-qianbao"></span>
                <span class="zfb">小米钱包</span>
            </p>
            <p>
                <input type="checkbox">
            </p>
        </div>
        <div class="unionpay">
            <p>
                <span class="iconfont icon-yinlianzhifu"></span>
                <span class="zfb">银联支付</span>
            </p>
            <p>
                <input type="checkbox">
            </p>
        </div>
        <div class="wingpay">
            <p>
                <span class="iconfont icon-bestpay"></span>
                <span class="zfb">翼支付</span>
            </p>
            <p>
                <input type="checkbox">
            </p>
        </div>
        <div class="milletstage">
            <p>
                <span class="iconfont icon-fenqi"></span>
                <span class="zfb">小米分期</span>
            </p>
            <p>
                <input type="checkbox">
            </p>
        </div><div class="tokio">
            <p>
                <span class="iconfont icon-weibiaoti--"></span>
                <span class="zfb">花呗分期</span>
            </p>
            <p>
                <input type="checkbox">
            </p>
        </div>
    </div>
</template>
<script>
export default {
    name:'account'
}
</script>
<style lang="scss" scoped>
#account{
    background-color:#f5f5f5;
    .menu{
        position: fixed;
        width: 100%;
        height: 1rem;
        top: 0;
        background: #f2f2f2;
        line-height: 1rem;
        padding: 0 0.2rem;
        color:#666;

        .icon-right{
            font-size: 0.5rem;
        }
        span{
            font-size: 16px;
            padding-right:35%;
        }
    }
    .address{
        width:100%;
        height:1rem;
        line-height: 1rem;
        background-color: #fff;
        border-top:#ff6700 3px dashed;
        border-bottom:#f5f5f5 1px solid;
        margin-top:1rem;
        display:flex;
        justify-content: space-between;
        padding:0 0.3rem;
        color:#3c3c3c;
        font-size: 14px;
        margin-bottom:0.2rem;
        span:first-child{
            font-weight: 700;
        }
    }
    .alipay,.wechat,.millet,.unionpay,.wingpay,.milletstage,.tokio{
        background-color: #fff;
        border:1px solid #f3f3f3;
        height:1rem;
        line-height:1rem;
        padding:0 0.3rem;
        display:flex;
        justify-content: space-between;
        p{
            display:flex;
            align-items: center;
            .iconfont{
                font-size: .6rem;
                color:#3385ff;
            }
            .zfb{
                font-size: 14px;
                margin-left: 0.2rem;
            }
            input{
                width: 0.4rem;
                height:0.4rem;
            }
        }
    }
    .wechat{
        p{
            .iconfont{
                color:#00CD00;
                font-size: .5rem;
            }
        }
        
    }
    .millet{
        p{
            .iconfont{
                color:orange;
            }
        }
    }
    .unionpay{
        p{
            .iconfont{
                color:#27408B;
            }
        }
    }
    .wingpay{
        p{
            .iconfont{
                color:#FF3E96;
            }
        }
    }
    .milletstage{
        p{
            .iconfont{
                color:#ff6700;
            }
        }
    }
}
    
</style>