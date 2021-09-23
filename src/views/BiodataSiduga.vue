<template>
  <div>
    <myheaderSiduga></myheaderSiduga>
    <section id="biodata-siduga">
      <b-container>
        <b-row>
          <b-col xs="12" sm="12" md="12" lg="12">
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
                  <h4 class="text-center"><strong>BIODATA PASIEN</strong></h4>
                </b-col>
              </b-row>

              <b-row class="mt-4">
                <b-col xs="12" sm="12" md="12" lg="12">
                  <b-form>
                    <b-form-group label="Nama Pasien">
                      <b-form-input placeholder="" size="lg"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Usia">
                      <b-form-input placeholder="" size="lg"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Alamat">
                      <b-form-input placeholder="" size="lg"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Pendidikan">
                      <b-form-input placeholder="" size="lg"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Lama Perawatan">
                      <b-form-input placeholder="" size="lg"></b-form-input>
                    </b-form-group>

                    <b-form-group label="Penanggung Jawab Pasien">
                      <b-form-input placeholder="" size="lg"></b-form-input>
                    </b-form-group>

                    <b-button variant="primary" size="lg">Simpan</b-button>
                  </b-form>
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
  name: "BiodataSiduga",
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
#biodata-siduga {
  width: 100%;
  min-height: 100vh;
  background-image: url("../assets/bgsiduga.jpg");
  background-size: cover;
  padding: 30px 0;
}

#biodata-siduga .box-konten {
  width: 100%;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}

#biodata-siduga .box-konten h1 {
  /* font-size: 48px; */
  font-weight: bold;
}
</style>
