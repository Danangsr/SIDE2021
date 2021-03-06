import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import HomeSide from "../views/HomeSide.vue";
import HomeSiduga from "../views/HomeSiduga.vue";
import LoginSiduga from "../views/LoginSiduga.vue";
import DaftarSiduga from "../views/DaftarSiduga.vue";
import DashboardSiduga from "../views/DashboardSiduga.vue";
import BiodataSiduga from "../views/BiodataSiduga.vue";
import DukunganKelSiduga from "../views/DukunganKelSiduga.vue";
import ScreeningSiduga from "../views/ScreeningSiduga.vue";
import Login from "../views/Login.vue";
import RiwayatPenyakit from "../views/loggedin/RiwayatPenyakit.vue";
import GejalaFisik from "../views/loggedin/GejalaFisik.vue";
import GejalaPsikis from "../views/loggedin/GejalaPsikis.vue";
import GejalaPerilakuBuruk from "../views/loggedin/GejalaPerilakuBuruk.vue";
import MasterPernyataan from "../views/loggedin/MasterPernyataan";
import screening from "../views/loggedin/screening";
import ScreeningPasien from "../views/loggedin/ScreeningPasien";
import dashboard from "../views/loggedin/dashboard.vue";
import Daftar from "../views/loggedin/Daftar.vue";
import ScreeningPasienFront from "../views/loggedin/ScreeningPasienFront";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      guest: true
    }
  },
  {
    path: "/homeSide",
    name: "HomeSide",
    component: HomeSide,
    meta: {
      guest: true
    }
  },
  
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      guest: true
    }
  },

  // SIDUGA
  {
    path: "/homeSiduga",
    name: "HomeSiduga",
    component: HomeSiduga,
    meta: {
      guest: true
    }
  },
  {
    path: "/loginSiduga",
    name: "LoginSiduga",
    component: LoginSiduga,
    meta: {
      guest: true
    }
  },

  {
    path: "/daftarSiduga",
    name: "DaftarSiduga",
    component: DaftarSiduga,
    meta: {
      guest: true
    }
  },

  {
    path: "/dashboardSiduga",
    name: "DashboardSiduga",
    component: DashboardSiduga,
    meta: {
      guest: true
    }
  },

  {
    path: "/biodataSiduga",
    name: "BiodataSiduga",
    component: BiodataSiduga,
    meta: {
      guest: true
    }
  },

  {
    path: "/dukunganKelSiduga",
    name: "DukunganKelSiduga",
    component: DukunganKelSiduga,
    meta: {
      guest: true
    }
  },

  {
    path: "/screeningSiduga",
    name: "ScreeningSiduga",
    component: ScreeningSiduga,
    meta: {
      guest: true
    }
  },
  
  // END SIDUGA

  {
    path: "/daftar",
    name: "daftar",
    component: Daftar,
  
  },
  {
    path: "/screeningfront/:idPasien",
    name: "ScreeningPasienFront",
    component: ScreeningPasienFront,
  
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: dashboard,
    meta: {
        requiresAuth: true
    }
  },

  {
    path: '/riwayatpenyakit',
    name: 'riwayatpenyakit',
    component: RiwayatPenyakit,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/gejalafisik',
    name: 'gejalafisik',
    component: GejalaFisik,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/gejalapsikis',
    name: 'gejalapsikis',
    component: GejalaPsikis,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/gejalaPerilakuBuruk',
    name: 'gejalaPerilakuBuruk',
    component: GejalaPerilakuBuruk,
    meta: {
        requiresAuth: true
    }
  },
  {
    path: '/masterpernyataan',
    name: 'masterpernyataan',
    component: MasterPernyataan,
    meta: {
        requiresAuth: true
    }
  },

  {
    path: '/screening',
    name: 'screening',
    component: screening,
    meta: {
        requiresAuth: true
    }
  },

  {
    path: '/screeningpasien/:idPasien',
    name: 'ScreeningPasien',
    component: ScreeningPasien,
    meta: {
        requiresAuth: true
    }
  },
// {
//     path: '/admin',
//     name: 'admin',
//     component: Admin,
//     meta: {
//         requiresAuth: true,
//         is_admin : true
//     }
// },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
      if (!localStorage.getItem('token') || localStorage.getItem('token')  == "undefined" || localStorage.getItem('token') == '' ) {
          next({
              path: '/login',
              query: { tujuan: to.fullPath }
          })
      } else {
          // let user = JSON.parse(localStorage.getItem('user'))
          // if(to.matched.some(record => record.meta.is_admin)) {
          //     if(user.is_admin == 1){
          //         next()
          //     }
          //     else{
          //         next({ name: 'userboard'})
          //     }
          // }else {
          //     next()
          // }
          next()
      }
  } else if(to.matched.some(record => record.meta.guest)) {
    // console.log(localStorage.getItem('token'))
      if(!localStorage.getItem('token') || localStorage.getItem('token')  == "undefined" || localStorage.getItem('token') == '' ){
          next()
      }
      else{
          next({ name: 'dashboard'})
      }
  }else {
      next()
  }
})

export default router;
