<template>
  <div id="daftar-siduga">
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
                <h4 class="text-center"><strong>PENDAFTARAN</strong></h4>
              </b-col>

              <b-col xs="12" sm="12" md="12" lg="12" class="mt-4">
                <b-form>
                  <b-form-group label="Email">
                    <b-form-input size="lg"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Username">
                    <b-form-input size="lg"></b-form-input>
                  </b-form-group>

                  <b-form-group label="Password">
                    <b-form-input type="password" size="lg"></b-form-input>
                  </b-form-group>

                  <b-button variant="primary" class="mt-3" size="lg" block
                    >Login</b-button
                  >
                </b-form>
              </b-col>
            </b-row>
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
  name: "daftarSiduga",
  data() {
    return {
      isLogin: false,
    };
  },
};
</script>

<style scoped>
#daftar-siduga {
  width: 100%;
  min-height: 100vh;
  background-image: url("../assets/bgsiduga.jpg");
  background-size: cover;
  padding: 30px 0;
}

#daftar-siduga .box-konten {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#daftar-siduga .box-konten h1 {
  font-size: 48px;
  font-weight: bold;
}
</style>
