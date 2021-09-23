<template>
  <div>
    <myheaderSiduga></myheaderSiduga>
    <section id="dashboard-siduga">
      <b-container>
        <b-row>
          <b-col xs="12" sm="12" md="4" lg="4" offset-md="4" offset-lg="4">
            <div class="box-konten">
              <b-row>
                <b-col xs="12" sm="12" md="12" lg="12">
                  <center>
                    <img
                      src="../assets/logosiduga.png"
                      alt=""
                      style="height: 150px"
                    />
                  </center>

                  <h1 class="mt-2 text-center"><strong>SIDUGA</strong></h1>
                  <h5 class="text-center">
                    Sistem Informasi<br />Dukungan Keluarga ODGJ
                  </h5>
                </b-col>

                <b-col xs="12" sm="12" md="12" lg="12" class="mt-5">
                  <h4 class="text-center"><strong>MENU UTAMA</strong></h4>
                </b-col>
              </b-row>

              <b-row class="mt-4">
                <b-col xs="12" sm="12" md="12" lg="12">
                  <div class="box-menus">
                    <router-link
                      :to="'biodataSiduga'"
                      style="color: #0089e7; text-decoration: none"
                    >
                      <center>
                        <img
                          src="../assets/Biodata Pasien.png"
                          style="width: 140px"
                        />
                        <h4 class="m-t-15 m-b-0"><strong>BIODATA</strong></h4>
                        <h6 class="m-t-0 m-b-0"><strong>PASIEN</strong></h6>
                      </center>
                    </router-link>
                  </div>
                </b-col>

                <b-col xs="12" sm="12" md="12" lg="12" class="mt-4">
                  <div class="box-menus">
                    <router-link
                      :to="'dukunganKelSiduga'"
                      style="color: #0089e7; text-decoration: none"
                    >
                      <center>
                        <img
                          src="../assets/Dukungan Keluarga.png"
                          style="width: 140px"
                        />
                        <h4 class="m-t-15 m-b-0"><strong>DUKUNGAN</strong></h4>
                        <h6 class="m-t-0 m-b-0"><strong>KELUARGA</strong></h6>
                      </center>
                    </router-link>
                  </div>
                </b-col>

                <b-col xs="12" sm="12" md="12" lg="12" class="mt-4">
                  <div class="box-menus">
                    <router-link
                      :to="''"
                      style="color: #0089e7; text-decoration: none"
                    >
                      <center>
                        <img
                          src="../assets/Konsultasi Ners.png"
                          style="width: 140px"
                        />
                        <h4 class="m-t-15 m-b-0">
                          <strong>KONSULTASI</strong>
                        </h4>
                        <h6 class="m-t-0 m-b-0"><strong>NERS</strong></h6>
                      </center>
                    </router-link>
                  </div>
                </b-col>
              </b-row>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'
import myheaderSiduga from "../components/headerSiduga";

export default {
  name: "dashboardSiduga",
  components: {
    myheaderSiduga,
  },
  data() {
    return {
      isLogin: false,
    };
  },
};
</script>

<style scoped>
#dashboard-siduga {
  width: 100%;
  min-height: 100vh;
  background-image: url("../assets/bgsiduga.jpg");
  background-size: cover;
  padding: 30px 0;
}

#dashboard-siduga .box-konten {
  width: 100%;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}

#dashboard-siduga .box-konten h1 {
  /* font-size: 48px; */
  font-weight: bold;
}

#dashboard-siduga .box-konten .box-menus {
  width: 80%;
  padding: 30px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  background-color: #fff;
  margin: auto;
}
</style>
