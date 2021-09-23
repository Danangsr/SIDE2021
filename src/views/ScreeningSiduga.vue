<template>
  <div>
    <myheaderSiduga></myheaderSiduga>
    <section id="screening-siduga">
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
                  <h4 class="text-center">
                    <strong>SCREENING DUKUNGAN KELUARGA</strong>
                  </h4>
                </b-col>
              </b-row>

              <b-row class="mt-4">
                <b-col xs="12" sm="12" md="12" lg="12">
                  <b-form>
                    <b-form-group
                      label="Keluarga melatih regulasi emosi pada pasien"
                    >
                      <b-form-select
                        :options="options"
                        size="lg"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label="Keluarga senantiasa memberikan pujian yang positif bagi penderita"
                    >
                      <b-form-select
                        :options="options"
                        size="lg"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label="Keluarga memberikan perhatian dengan menciptakan suasana lingkungan rumah yang aman"
                    >
                      <b-form-select
                        :options="options"
                        size="lg"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label="Keluarga memberikan kepercayaan kepada penderita dalam proses perawatan"
                    >
                      <b-form-select
                        :options="options"
                        size="lg"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label="Keluarga mendengarkan curhatan hati kepada penderita ketika sedih"
                    >
                      <b-form-select
                        :options="options"
                        size="lg"
                      ></b-form-select>
                    </b-form-group>

                    <b-form-group
                      label="Keluarga memberikan kasih sayang kepada penderita dalam proses perawatan"
                    >
                      <b-form-select
                        :options="options"
                        size="lg"
                      ></b-form-select>
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
  name: "daftarSiduga",
  components: {
    myheaderSiduga,
  },
  data() {
    return {
      isLogin: false,
      options: [
        { value: "0", text: "Selalu" },
        { value: "1", text: "Sering" },
        { value: "2", text: "Kadang-Kadang" },
        { value: "3", text: "Tidak Pernah" },
      ],
    };
  },
};
</script>

<style scoped>
#screening-siduga {
  width: 100%;
  min-height: 100vh;
  background-image: url("../assets/bgsiduga.jpg");
  background-size: cover;
  padding: 30px 0;
}

#screening-siduga .box-konten {
  width: 100%;
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
}

#screening-siduga .box-konten h1 {
  /* font-size: 48px; */
  font-weight: bold;
}
</style>
