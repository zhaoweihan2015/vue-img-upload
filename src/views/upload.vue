<template>
    <div class="v-img-upload">
        <transition name="v-cancel">
            <div v-on:click.prevent = 'uploadCancel' v-show="isCancel" class="v-img-cancel">
                <i class="fa fa-times-circle"></i>
            </div>
        </transition>
        <div class="v-img-show">
            <i class="fa fa-plus-square"></i>
            <transition name="v-img-upload">
                <div v-show="isUpload" class="img" ref="img"></div>
            </transition>
            <input ref="uploadInp" v-on:change='uploadImg' class="v-img-upload-btn" type="file">
        </div>
    </div>
</template>

<script>
export default {
        data (){
            return {
                isCancel: false,
                isUpload:false,
                files:''
            }
        },
        mounted (){
             this.files = this.$refs.uploadInp
        },
        methods:{
            uploadImg(){
                this.$refs.img.style.backgroundImage = "url("+this.getImgFile(this.files.files[0])+")"
                this.isCancel = this.isUpload = true
            },
            getImgFile(file) {
                var url = null;
                if(window.createObjectURL != undefined) {
                    url = window.createObjectURL(file)
                } else if(window.URL != undefined) {
                    url = window.URL.createObjectURL(file)
                } else if(window.webkitURL != undefined) {
                    url = window.webkitURL.createObjectURL(file)
                }
                return url
            },
            uploadCancel (){
                this.files.value = null
                this.isUpload = this.isCancel = false
            }
        }
}
</script>

<style lang="less">
    .mixS (){
        width: 100%;
        height: 100%;
    }
    .v-img-upload{
        position: relative;
        height: 60px;
        width: 60px;
        background: white;
        border-radius: 3px;
        padding: 8px;
        box-sizing: border-box;

        .v-img-show{
            position: relative;
            overflow: hidden;
            .mixS();
            background-color:#eee;
            text-align: center;
            .img,i,input{
                position: absolute;
                .mixS();
                top: 0;
                left: 0;
            } 
            input{
                opacity: 0;
            }
            .img{
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                transition: all .2s;
                transform: translate3d(0,0,0)
            }
            i{
                font-size: 20px;
                margin-top: 12px;
            }
        }

        .v-img-cancel{
            position: absolute;
            right: -8px;
            top: -8px;
            background: #fff;
            text-align: center;
            width: 20px;
            height: 20px;
            border-radius: 50%;
            line-height: 20px;
            font-size: 15px;
            color: #eb0404;
            transition: all .2s;
            transform: translate3d(0,0,0)
        }
    }
    .v-cancel-enter-active{
        animation: cancelShow;
    }
    .v-cancel-leave-active{
        animation: cancelShow;
    }

    @keyframes cancelShow {
        0%{
            right: 8px;
            top: 8px;
        }
        100%{
            right: -8px;
            top: -8px;
        }
    }
    @keyframes cancelShow {
        0%{
            right: -8px;
            top: -8px;
        }
        100%{
            right: 8px;
            top: 8px;
        }
    }


    .v-img-upload-enter-active{
        animation: imgshow;
        opacity: 0;
    }
    .v-img-upload-leave-active{
        animation: imgHide;
        opacity: 0;
    }

    @keyframes imgshow {
        0%{
            opacity: 0
        }
        100%{
            opacity: 1
        }
    }
    @keyframes imgHide {
        0%{
            opacity: 1
        }
        100%{
            opacity: 0
        }
    }
</style>
