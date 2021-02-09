<template>
  <section class="offline-course-map text-center bg--secondary">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0925698653687!2d107.58789331442517!3d-6.879512669225914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e68e46d527c3%3A0x80c53eeb41601c6e!2sCodePolitan!5e0!3m2!1sid!2sid!4v1491893293188"
      width="100%"
      height="500"
      frameborder="0"
      style="border:0; display: block; margin-bottom: 0px;"
      allowfullscreen
    />

    <div class="offline-course-map-mask">
      <div class="map-btn">
        <div class="container">
          <div class="text-center padding-xl-top">
            <a href="https://www.google.co.id/maps/place/CodePolitan/@-6.8795127,107.5878933,17z/data=!3m1!4b1!4m5!3m4!1s0x2e68e68e46d527c3:0x80c53eeb41601c6e!8m2!3d-6.879518!4d107.590082?hl=id" class="btn btn--primary btn--lg" target="_blank"><span class="btn__text">Lihat Peta</span></a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: 'CodePolitan Developer School - Contact - CodePolitan.com',
      description: 'Program kursus belajar pemrograman website dan android secara intensif secara tatap muka (offline) dengan bimbingan mentor berpengalaman dan fasilitas asrama. Tersedia beragam kelas yang bisa diikuti sesuai dengan kebutuhan.',
      url: 'https://devschool.id/contact',
      image: 'https://static.cdn-cdpl.com/700x350/b8e29e8f0b15aab3473fed5df06c9186/banner-cpdevschool-og-image.jpg'
    }
  },
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.title
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.title
        },
        {
          hid: 'description',
          property: 'description',
          content: this.description
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.description
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.image
        }
      ]
    }
  }
}
</script>

<style>

</style>
