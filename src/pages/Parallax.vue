
<template>
  <div class="parallax">
    <div class="pimg1">
      <div class="ptext">
        <span class="border">
          Parallax Website
        </span>
      </div>
    </div>
    <section class="section section-light">
      <h2>Section 1</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in. Distinctio provident dolorem modi cumque illo enim quidem tempora deserunt nostrum voluptate labore repellat quisquam quasi cum suscipit dolore ab consequuntur, ad porro earum temporibus. Laborum ad temporibus ex, omnis!</p>
    </section>
    <div class="pimg2">
      <div class="ptext">
        <span class="border trans">
          Image 2 Text
        </span>
      </div>
    </div>
    <section class="section section-dark">
      <h2>Section 2</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.</p>
    </section>
    <div class="pimg3">
      <div class="ptext">
        <span class="border trans">
          Image 3 Text
        </span>
      </div>
    </div>
    <section class="section section-dark">
      <h2>Section 3</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, laudantium, quibusdam? Nobis, delectus, commodi, fugit amet tempora facere dolores nisi facilis consequatur, odio hic minima nostrum. Perferendis eos earum praesentium, blanditiis sapiente labore aliquam ipsa architecto vitae. Minima soluta temporibus voluptates inventore commodi cumque esse suscipit optio aliquam et, dolorem a cupiditate nihil fuga laboriosam fugiat placeat dignissimos! Unde eveniet placeat quisquam blanditiis voluptatem doloremque fugiat dolor repellendus ratione in.</p>
    </section>
    <div class="pimg1">
      <div class="ptext">
        <span class="border">
          Parallax Website
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parallax'
}
</script>

<style scoped>
.parallax {
  position: absolute;
  height: 100%;
  font-size: 16px;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  line-height: 1.8em;
  color:#666;
}

.pimg1, .pimg2, .pimg3 {
  position:relative;
  opacity:0.70;
  background-position:center;
  background-size:cover;
  background-repeat:no-repeat;

  /*
    fixed = parallax
    scroll = normal
  */
  background-attachment:fixed;
}

.pimg1 {
  background-image:url('../assets/img/image1.jpg');
  min-height:100%;
}

.pimg2 {
  background-image:url('../assets/img/image2.jpg');
  min-height:400px;
}

.pimg3 {
  background-image:url('../assets/img/image3.jpg');
  min-height:400px;
}

.section {
  text-align:center;
  padding:50px 80px;
}

.section-light {
  background-color:#f4f4f4;
  color:#666;
}

.section-dark {
  background-color:#282e34;
  color:#ddd;
}

.ptext {
  position:absolute;
  top:50%;
  width:100%;
  text-align:center;
  color:#000;
  font-size:27px;
  letter-spacing:8px;
  text-transform:uppercase;
}

.ptext .border{
  background-color:#111;
  color:#fff;
  padding:20px;
}

.ptext .border.trans{
  background-color:transparent;
}

@media(max-width:568px){
  .pimg1, .pimg2, .pimg3{
    background-attachment:scroll;
  }
}
</style>
