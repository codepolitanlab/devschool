<template>
  <!-- NAVBAR -->
  <div>
    <b-navbar toggleable="lg" variant="white" class="border-bottom" fixed="top">
      <div class="container">
        <b-navbar-brand>
          <nuxt-link to="/">
            <img src="@/assets/img/devschool-logo.png" alt="logo">
          </nuxt-link>
        </b-navbar-brand>

        <b-navbar-toggle class="dark" target="nav-collapse">
          <template #default="{ expanded }">
            <b-icon v-if="expanded" icon="x-square" />
            <b-icon v-else icon="list" />
          </template>
        </b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown
              id="my-nav-dropdown"
              text="Program"
              toggle-class="nav-link ml-3 nav-text text-uppercase"
            >
              <b-dropdown-group id="dropdown-group-1" header="Kelas Programming Akhir Pekan" class="type--bold">
                <nuxt-link to="/kelas-ekstensif-web-programming">
                  <b-dropdown-item-button>
                    Fullstack Web Developer
                  </b-dropdown-item-button>
                </nuxt-link>
                <nuxt-link to="/kelas-akhir-pekan-fullstack-android-developer">
                  <b-dropdown-item-button>
                    Fullstack Android Developer
                  </b-dropdown-item-button>
                </nuxt-link>
              </b-dropdown-group>
              <b-dropdown-group id="dropdown-group-2" header="Kelas Programming Intensif" class="type--bold">
                <nuxt-link to="/android-masterclass">
                  <b-dropdown-item-button>
                    Kotlin Android Development
                  </b-dropdown-item-button>
                </nuxt-link>
                <nuxt-link to="/training-intensif-basic-front-end-web-development">
                  <b-dropdown-item-button>
                    Basic Front End Web Development
                  </b-dropdown-item-button>
                </nuxt-link>
              </b-dropdown-group>
            </b-nav-item-dropdown>
            <nuxt-link class="nav-link ml-3 nav-text text-uppercase" to="/contact">
              Contact
            </nuxt-link>
            <a :href="hash" class="btn ml-3 btn--primary text-light nav-link type--bold text-uppercase pl-3 pr-3">Daftar Sekarang</a>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  computed: {
    hash () {
      if (this.$route.fullPath === '/') {
        return '#program'
      } else {
        return '#investasi'
      }
    }
  }
}
</script>

<style scoped>
.nav-text {
  color: #707070;
}
span {
  font-weight: bold;
}
.text-membership {
  color: #ffffff !important;
}
.btn--primary {
  border-radius: 0.65rem;
}
ul:not([class*='menu']) li > a {
  font-weight: bold !important;
}
#my-nav-dropdown__BV_toggle_ span {
  font-weight: bold !important
}
</style>
