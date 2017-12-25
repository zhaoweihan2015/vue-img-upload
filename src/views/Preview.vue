<template>
<div>
    <transition name="v-priview">    
        <div class="priview" v-show="isShow" v-on:click.prevent = 'hidePriview'>
            <div class="priview-content"  >
                <img ref="img" alt="">
            </div>
        </div>
    </transition>
</div>
</template>

<script>
import bus from './bus.js'
export default {
  data(){
      return {
          isShow:false
      }
  },
  mounted(){
    const _this = this
    bus.$on('preview-show',(msg)=>{
        _this.isShow = msg.isShow
        this.setUrl(msg.url)
    })
  },
  methods :{
    hidePriview (){
        this.isShow = false
    },
    setUrl (u){
       this.$refs.img.src = u
    }
  }
}
</script>

<style lang="less">
    .pre-transform(@a:attr){
        -webkit-transform: @a;
        -moz-transform: @a;
        -o-transform: @a;
        -ms-transform: @a;
        transform: @a;
    }
    .priview{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;    
        height: 100%;
        z-index: 99;
        transition: all .3s;
        background-color: rgba(0, 0, 0, 0.5);

        .priview-content{
            position: absolute;
            .pre-transform(translate(-50%,-50%));
            background-color: white;
            left: 50%;
            top: 50%; 

            img{
                vertical-align: middle;
            }
        }
    }

    .v-priview-enter-active{
        animation: show-priview;
        opacity: 0;
    }
    .v-priview-leave-active{
        animation: hide-priview;
        opacity: 0;
    }

    @keyframes show-priview {
        0%{
            opacity: 0
        }
        100%{
            opacity: 1
        }
    }
    @keyframes hide-priview {
        0%{
            opacity: 1
        }
        100%{
            opacity: 0
        }
    }
</style>
