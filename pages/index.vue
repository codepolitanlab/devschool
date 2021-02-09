<template>
  <div>
    <section id="jumbotron" class="cover height-70 imagebg text-center" data-overlay="4">
      <div class="container pos-vertical-center">
        <div class="row">
          <div class="col-md-8">
            <h1 class="mb-5">
              Cara Tepat Akselerasi Belajar Coding
            </h1>
            <p class="lead">
              Kelas belajar pemrograman secara intensif dengan kurikulum berbasis industri dan dengan bimbingan para instruktur profesional
            </p>
            <div class="mt-5 pt-3">
              <a href="#definisi" class="btn type--uppercase btn--lg btn-scroll-to">Pelajari Dahulu</a>
              <a href="#program" class="btn btn--primary type--uppercase btn--lg btn-scroll-to">Daftar Sekarang</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- COLLABORATION -->
    <section class="text-center bg--secondary pt-5 pb-5">
      <div class="container">
        <h3 class="mt-3 mb-0">
          Organized by
        </h3>
        <div class="partner-logo pt-5">
          <a href="https://www.codepolitan.com/" target="_blank"><img src="@/assets/img/logo-cp.png" class="mb-3"></a>
        </div>
      </div>
    </section>
    <!-- END: COLLABORATION -->
    <section id="definisi" class="switchable feature-large space--md">
      <div class="container">
        <div class="row justify-content-around">
          <div class="col-md-6">
            <div class="video-cover border--round box-shadow">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/GJVDXV1BbRc"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-5">
            <div class="switchable__text">
              <h2>Developer School</h2>
              <p class="lead">
                Semangat kami adalah menjadi bagian dari solusi. Dengan kurikulum yang berorientasi pada industri dan metode belajar yang telah teruji, kami ingin mendorong lahirnya banyak programmer baru yang siap menjadi solusi untuk berbagai permasalahan yang ada di Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="program" class="text-center bg--secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8">
            <h1>Pilihan Program</h1>
            <p class="lead">
              Berikut ini program-program yang tersedia di Developer School
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="switchable feature-large switchable--switch bg--secondary">
      <div class="container">
        <div class="row justify-content-md-center pb-5">
          <div class="col-md-5">
            <div class="feature feature-1">
              <img alt="Weekend Bootcamp" src="@/assets/img/thumb-akhir-pekan.jpg">
              <div class="feature__body boxed boxed--lg boxed--border text-center">
                <h4>Weekend Bootcamp</h4>
                <div class="mb-5">
                  Kelas belajar coding yang diselenggarakan di setiap akhir pekan, berlokasi di Bandung dan Jakarta
                </div>
                <a class="btn type--uppercase" to="/kelas-programming-akhir-pekan"> <span class="btn__text">MULAI BELAJAR</span> </a>
              </div>
            </div>
          </div>
          <div class="col-md-5">
            <div class="feature feature-1">
              <img alt="Intensive Bootcamp" src="@/assets/img/thumb-intensif.jpg">
              <div class="feature__body boxed boxed--lg boxed--border text-center">
                <h4>Intensive Bootcamp</h4>
                <div class="mb-5">
                  Kelas belajar pemrograman Web dan Android secara intensif selama satu minggu dengan sistem karantina
                </div>
                <a class="btn type--uppercase" to="/kelas-programming-intensif"> <span class="btn__text">MULAI BELAJAR</span> </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="dev" class="imagebg feature-large-7 switchable">
      <div class="container">
        <div class="row">
          <div class="col-md-7 col-lg-5">
            <div class="boxed boxed--lg border--round bg--white row justify-content-center">
              <div class="col-lg-10 col-md-12">
                <h3>Bangun Karirmu Sebagai Developer Profesional</h3>
                <p class="lead">
                  Tak ada cara instan untuk menjadi profesional, termasuk dalam belajar pemrograman dan menjadi seorang developer. Semua butuh proses, usaha dan kerja keras. Bangun karirmu dengan belajar pemrograman untuk menjadi seorang developer profesional. Mulai langkah pertamamu dengan bergabung dalam program Developer School!
                </p>
                <hr class="short">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8">
            <h2>Classroom Partners</h2>
            <p class="lead">
              Kami berkolaborasi dengan berbagai pihak untuk bisa menghadirkan pendidikan di banyak tempat dan menjangkau lebih luas
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="partner-logo">
              <a href="http://kadinjabar.or.id/"><img src="@/assets/img/logo-kadin.png"></a>
              <a href="http://essentia.id/"><img src="@/assets/img/logo-essentia.png"></a>
              <a href="https://www.linkedin.com/in/keboen-coding-depok-389702127/"><img src="@/assets/img/logo-keboencoding.png"></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-10 col-lg-8">
            <h2>Community Partners</h2>
            <p class="lead">
              Kami berkolaborasi dengan berbagai komunitas IT di Indonesia untuk sama-sama membangun ekosistem programming Indonesia yang lebih baik
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="partner-logo">
              <a href="https://www.phpindonesia.id/"><img src="@/assets/img/logo-phpindonesia.png"></a>
              <a href="https://www.dicoding.com/"><img src="@/assets/img/logo-dicoding.png"></a>
              <a href="https://impactbyte.com/"><img src="@/assets/img/logo-impactbyte.png"></a>
              <a href="https://refactory.id/"><img src="@/assets/img/logo-refactory.png"></a>
              <a href="http://www.friendzit.land/"><img src="@/assets/img/logo-zit.png"></a>
              <a href="https://www.facebook.com/JVMDeveloperID/"><img src="@/assets/img/logo-jvm.jpg"></a>
              <a href="http://www.pondokprogrammer.com/"><img src="@/assets/img/logo-pondok.png"></a>
              <a href="http://www.skystarventures.com/"><img src="@/assets/img/logo-skystar.png"></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="space--md pt-0 pb-0 bg--secondary">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <b-carousel
              id="carousel-1"
              :interval="4000"
              controls
              indicators
              img-width="1024"
              img-height="320"
            >
              <!-- Slide with blank fluid image to maintain slide aspect ratio -->
              <b-carousel-slide img-blank img-alt="Blank image">
                <div class="d-flex align-items-center">
                  <div class="testimonial row justify-content-center">
                    <div class="col-lg-2 col-md-4 col-6 text-center">
                      <img class="testimonial__image" alt="Kursus Pemrograman Website Dan Android" src="@/assets/img/foto-peter.png">
                    </div>
                    <div class="col-md-8 col-12">
                      <span class="h3">“Dunia IT ibarat Taman Bermain dan dengan belajar coding, maka kita akan memiliki tiket yang bisa membuka semua wahana permainan. Selamat belajar, bermain dan nikmati”
                      </span>
                      <h5>Peter J. Kambey</h5> <span>IT Manager Titan Baking, Head Of Executive PHP Indonesia</span>
                    </div>
                  </div>
                </div>
              </b-carousel-slide>
              <b-carousel-slide img-blank img-alt="Blank image">
                <div class="d-flex align-items-center">
                  <div class="testimonial row justify-content-center">
                    <div class="col-lg-2 col-md-4 col-6 text-center">
                      <img class="testimonial__image" alt="Kursus Pemrograman Website Dan Android" src="@/assets/img/foto-haidar.png">
                    </div>
                    <div class="col-md-8 col-12">
                      <span class="h3">“Ingin membuka cakrawala berpikir dan menyelesaikan masalah dengan solusi teknologi? Belajar coding inilah kuncinya”
                      </span>
                      <h5>M Haidar Hanif</h5> <span>Co-Founder, Global Program Lead, Tech Mentor at Impactbyte</span>
                    </div>
                  </div>
                </div>
              </b-carousel-slide>
              <b-carousel-slide img-blank img-alt="Blank image">
                <div class="d-flex align-items-center">
                  <div class="testimonial row justify-content-center">
                    <div class="col-lg-2 col-md-4 col-6 text-center">
                      <img class="testimonial__image" alt="Kursus Pemrograman Website Dan Android" src="@/assets/img/foto-galih.png">
                    </div>
                    <div class="col-md-8 col-12">
                      <span class="h3">“Belajar Coding bukan hanya sekedar memahami barisan kode, namun disitulah kita mempelajari sesuatu yang dapat mengubah dunia menjadi lebih baik dengan teknologi”
                      </span>
                      <h5>Galih Pratama</h5> <span>Owner of BelajarKoding, Head Front-end at CROWDE</span>
                    </div>
                  </div>
                </div>
              </b-carousel-slide>
              <b-carousel-slide img-blank img-alt="Blank image">
                <div class="d-flex align-items-center">
                  <div class="testimonial row justify-content-center">
                    <div class="col-lg-2 col-md-4 col-6 text-center">
                      <img class="testimonial__image" alt="Kursus Pemrograman Website Dan Android" src="@/assets/img/foto-luri.png">
                    </div>
                    <div class="col-md-8 col-12">
                      <span class="h3">“Coding... Kehidupan itu penuh dengan tanda-tanda, penuh makna ( code ). Membaca dan mengolahnya perlu logika dan rasa. Tingkatkan logikamu, tingkatkan rasamu..”
                      </span>
                      <h5>Luri Darmawan</h5> <span>Creator of Aksi IDE, FastPlaz & Carik Bot, Coach at Ajaro.id</span>
                    </div>
                  </div>
                </div>
              </b-carousel-slide>
            </b-carousel>
          </div>
        </div>
      </div>
    </section>

    <section id="definisi" class="switchable feature-large space--md">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-8">
            <h2 class="text-center">
              Lihat Apa Kata Mereka Tentang Belajar Coding di CodePolitan Developer School
            </h2>
            <div class="video-cover border--round box-shadow">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/v2i5y6rheu0"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="dokumentasi" class="text-center imagebg parallax space--md" data-overlay="4">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-lg-6">
            <div class="cta">
              <h2 class="h1 mb-5">
                Dokumentasi Program<br>Developer School
              </h2>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="project-thumb mb-5">
              <img class="rounded" alt="Kursus Pemrograman Website Dan Android" src="@/assets/img/gallery_1.jpg">
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-thumb mb-5">
              <img class="rounded" alt="Kursus Pemrograman Website Dan Android" src="@/assets/img/gallery_2.jpg">
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-thumb mb-5">
              <img class="rounded" alt="Kursus Pemrograman Website Dan Android" src="@/assets/img/gallery_3.jpg">
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-thumb mb-5">
              <img class="rounded" alt="Kursus Pemrograman Website Dan Android" src="@/assets/img/gallery_4.jpg">
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-thumb mb-5">
              <img class="rounded" alt="Kursus Pemrograman Website Dan Android" src="@/assets/img/gallery_5.jpg">
            </div>
          </div>
          <div class="col-md-4">
            <div class="project-thumb mb-5">
              <img class="rounded" alt="Kursus Pemrograman Website Dan Android" src="@/assets/img/gallery_6.jpg">
            </div>
          </div>
        </div>
        <div class="">
          <a class="btn btn--primary type--uppercase" href="https://photos.app.goo.gl/OyTBa7nytIDOv1yl2" target="_blank"><span class="btn__text">Lihat Dokumentasi Lainnya</span></a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'CodePolitan DevSchool - Kursus Pemrograman Website Dan Android - CodePolitan.com',
      description: 'Program kursus belajar pemrograman website dan android secara intensif secara tatap muka (offline) dengan bimbingan mentor berpengalaman dan fasilitas asrama. Tersedia beragam kelas yang bisa diikuti sesuai dengan kebutuhan.',
      url: 'https://devschool.id/',
      image: 'https://static.cdn-cdpl.com/source/b8e29e8f0b15aab3473fed5df06c9186/program-codepolitan-developer-school.jpg'
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

<style scoped>
#jumbotron {
  background-image: url('~@/assets/img/bg-school.jpg');
}
#dev {
  background-image: url('~@/assets/img/bg-coding.jpg');
}
#dokumentasi {
  background-image: url('~@/assets/img/bg_foto2.jpg');
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
