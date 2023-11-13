<script>
 src="https://cdnjs.cloudflare.com/ajax/libs/push.js/0.0.11/push.min.js"
 function push(){
  Push.create("更新情報", 
   {
    body: "ブログの更新をお知らせします!",
    timeout: 8000,
    onClick: function () {
    window.focus(); 
    this.close();
    }
  })
}
</script>
