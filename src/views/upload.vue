<template>
    <div class="v-img-upload">
        <div v-on:click.prevent = 'uploadCancel' v-if="isCancel" class="v-img-cancel">
            <i class="fa fa-times-circle"></i>
        </div>
        <div class="v-img-show">
            <i class="fa fa-plus-square"></i>
            <div class="img" ref="img"></div>
            <input ref="uploadInp" v-on:change='uploadImg' class="v-img-upload-btn" type="file">
        </div>
    </div>
</template>

<script>
export default {
        data (){
            return {
                isCancel: false
            }
        },
        methods:{
            uploadImg(){
                this.isCancel = !this.isCancel
                var files = this.$refs.uploadInp.files[0]
                this.$refs.img.style.backgroundImage = "url("+this.getImgFile(files)+")"
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
                console.log(1)
                this.$refs.img.removeAttribute('style')
                this.isCancel = false
                // this.files = null
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
        }
    }
</style>
