<template>
    <div class="w-100 h-100">
        <div>{{data}}</div>
    </div>
</template>
<script>
    // 结果
    // [ "数据1", "数据2", "数据3" ]
    export default {
         data() {
            return {
                data: null
            }
        },
        mounted() {
            Promise.all([this.runAsync1, this.runAsync2, this.runAsync3]).then((result) => {
                console.log(result)
            }).catch((err) => {
                
            });
        },
        methods: {
            runAsync1() {
                var f = new Promise(function(resolve, reject){
                    setTimeout(function(){
                        resolve('数据1');
                    }, 2000);
                });
                return f;
            },
            runAsync2() {
                var f = new Promise(function(resolve, reject){
                    setTimeout(function(){
                        resolve('数据2');
                    }, 3000);
                });
                return f;
            },
            runAsync3() {
                var f = new Promise(function(resolve, reject){
                    setTimeout(function(){
                        resolve('数据3');
                    }, 1000);
                });
                return f;
            }
        }
    }
</script>