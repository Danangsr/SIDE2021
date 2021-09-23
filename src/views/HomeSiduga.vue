<template>
  <div id="home-siduga">
    <b-container>
      <b-row>
        <b-col xs="12" sm="12" md="4" lg="4" offset-md="4" offset-lg="4">
          <div class="box-konten">
            <img src="../assets/logosiduga.png" alt="" style="height: 180px" />
            <h1 class="mt-2 text-center"><strong>SIDUGA</strong></h1>
            <h5 class="text-center">
              Sistem Informasi<br />Dukungan Keluarga ODGJ
            </h5>

            <router-link :to="'/loginSiduga'">
              <b-button variant="primary" size="lg" class="mt-5"
                >MASUK</b-button
              >
            </router-link>
            <router-link :to="'/daftarSiduga'">
              <b-button variant="warning" size="lg" class="mt-2"
                >DAFTAR</b-button
              >
            </router-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "HomeSiduga",
  data() {
    return {
      isLogin: false,
    };
  },
};
</script>

<style scoped>
#home-siduga {
  width: 100%;
  min-height: 100vh;
  background-image: url("../assets/bgsiduga.jpg");
  background-size: cover;
}

#home-siduga .box-konten {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#home-siduga .box-konten h1 {
  font-size: 48px;
  font-weight: bold;
}
</style>
