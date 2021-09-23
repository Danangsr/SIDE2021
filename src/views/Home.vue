<template>
  <div id="home">
    <b-container>
      <b-row style="margin-top: 60px; margin-bottom: 60px">
        <!-- <b-col md="12" lg="12">
          <div class="box">
            <b-row>
              <b-col md="12" lg="12">
                <h1 class="m-t-0 m-b-0 text-center">
                  <strong>S I D E</strong>
                </h1>
                <h4 class="m-t-0 m-b-0 text-center">
                  Sistem Informasi Deteksi Emosi
                </h4>
              </b-col>

              <b-col md="12" lg="12" class="m-t-30">
                <p style="text-align: justify">
                  Pandemi COVID-19 menimbulkan emosi yang dapat menurunkan imun
                  seseorang dan akan menyebabkan risiko tertular COVID-19
                  meningkat. Emosi merupakan aspek kesehatan mental yang sangat
                  berpengaruh terhadap kesehatan fisik. Pelayanan kesehatan saat
                  ini masih fokus pada pendekatan kuratif dengan belum
                  memperhatikan faktor stress, emosi, sosial maupun spiritual
                  yang sangat berpengaruh terhadap kesehatan secara holistik
                </p>
                <p style="text-align: justify">
                  Beberapa penelitian tentang intervensi emosi melalui
                  pendekatan spiritual di Indonesia telah membuktikan adanya
                  kepatuhan dalam berobat dan meningkatkan kemandirian.
                  Kemandirian terdiri dari kemandirian fisik, mental, sosial,
                  cultural dan spiritual membuat seseorang mampu mencegah
                  penyakit secara holistic.
                </p>

                <p style="text-align: justify">
                  Penelitian ini bertujuan untuk mendeteksi emosi dan
                  pengaruhnya terhadap tanda-tanda vital dari kemampuan
                  meningkatkan imun dalam tubuh. Penelitian ini menggunakan
                  sebuah sistem informasi yang bernama SIDE (Sistem Informasi
                  Dekteksi Emosi) untuk mendeteksi emosi masyrakat usia
                  produktif.
                </p>

                <p style="text-align: justify">
                  Untuk mulai mendeteksi emosi, silahkan klik button dibawah ini
                  kemudian isi data dengan sebener-benarnya sehingga emosi anda
                  dapat kami analisa lebih lanjut.
                </p>
              </b-col>
            </b-row>

            <b-row class="m-t-30">
              <b-col md="12" lg="12">
                <center>
                  <router-link :to="'daftar'">
                    <b-button variant="primary" size="lg"
                      >Deteksi Emosi Anda Sekarang !</b-button
                    >
                  </router-link>
                </center>
              </b-col>
            </b-row>
          </div>
        </b-col> -->

        <b-col xs="12" sm="12" md="6" lg="6" class="mt-3 mb-3">
          <center>
            <div
              style="
                width: 80%;
                padding: 30px;
                box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                background-color: #fff;
              "
            >
              <router-link :to="'homeSide'">
                <center>
                  <img
                    src="../assets/checkup.png"
                    style="width: 160px; border-radius: 100%"
                  />
                  <h4 class="m-t-15 m-b-0"><strong>SIDE</strong></h4>
                  <h6 class="mt-2 m-b-0">
                    SISTEM INFORMASI<BR />DETEKSI EMOSI
                  </h6>
                </center>
              </router-link>
            </div>
          </center>
        </b-col>

        <b-col xs="12" sm="12" md="6" lg="6" class="mt-3 mb-3">
          <center>
            <div
              style="
                width: 80%;
                padding: 30px;
                box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.3);
                border-radius: 8px;
                background-color: #fff;
              "
            >
              <router-link :to="'homeSiduga'">
                <center>
                  <img
                    src="../assets/logosiduga.png"
                    style="width: 160px; border-radius: 100%"
                  />
                  <h5 class="m-t-15 m-b-0"><strong>SIDUGA</strong></h5>
                  <h6 class="mt-2 m-b-0">
                    SISTEM INFORMASI<BR />DUKUNGAN KELUARGA ODGJ
                  </h6>
                </center>
              </router-link>
            </div>
          </center>
        </b-col>
        <b-col xs="12" sm="12" md="6" lg="6"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
// import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  name: "Home",
  data() {
    return {
      isLogin: false,
    };
  },
};
</script>

<style scoped>
</style>
