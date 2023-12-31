import { createRouter, createWebHistory } from 'vue-router'
import Agrisync from '../views/about/Agrisync.vue'
import about from '../views/about/About.vue'
import Contact from '../views/about/Contact.vue'
import Login from '../views/Login/Login.vue'
import Dashboard from '../views/Admin/Dashboard.vue'
import Report from '../views/Admin/Report.vue'
import Table from '../views/Admin/Table.vue'
import AdminHome from '../views/Landing/AdminHome.vue'
import LGULogin from '../views/Login/LGULogin.vue'
import StaffHome from '../views/Landing/StaffHome.vue'
import LGUDashboard from '../views/LGU/LGUDashboard.vue'
import LGUReport from '../views/LGU/LGUReport.vue'
import LGUTable from '../views/LGU/LGUTable.vue'
import Dash from '../views/AdminAll/Dash.vue'
import Mindoro from '../views/ALD/Mindoro.vue'
import Occi from '../views/ALD/Occi.vue'
import OrminT from '../views/ALD/OrminT.vue'
import OcciT from '../views/ALD/OcciT.vue'
import PalT from '../views/ALD/PalT.vue'
import Pal from '../views/ALD/Pal.vue'
import RomT from '../views/ALD/RomT.vue'
import Rom from '../views/ALD/Rom.vue'
import Mar from '../views/ALD/Mar.vue'
import MarT from '../views/ALD/MarT.vue'
const routes = [
  {
    path: '/',
    name: 'Agrisync',
    component: Agrisync
  },
  {
    path: '/About',
    name: 'About',
    component: about
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Dashboard',
    name: 'Dahboard',
    component: Dashboard
  },
  {
    path: '/Report',
    name: 'Report',
    component: Report
  },
  {
    path: '/Table',
    name: 'Table',
    component: Table
  },
  {
    path: '/AdminHome',
    name: 'AdminHome',
    component: AdminHome
  },

  {
    path: '/LGULogin',
    name: 'LGULogin',
    component:LGULogin
    },
    {
      path: '/StaffHome',
      name: 'StaffHome',
      component:StaffHome
      },
      {
        path: '/LGUDashboard',
        name: 'LGUDashboard',
        component:LGUDashboard
        },
        {
          path: '/LGUReport',
          name: 'LGUReport',
          component:LGUReport
        },
        {
          path: '/LGUTable',
          name: 'LGUTable',
          component:LGUTable
        },
        {
          path: '/Dash',
          name: 'Dash',
          component:Dash
        },
        {
          path: '/Mindoro',
          name: 'Mindoro',
          component:Mindoro
        },
        {
          path: '/OrminT',
          name: 'OrminT',
          component:OrminT
        },
        {
          path: '/OcciT',
          name: 'OcciT',
          component:OcciT
        },
        {
          path: '/Occi',
          name: 'Occi',
          component:Occi
        },
        {
          path: '/PalT',
          name: 'PalT',
          component:PalT
        },
        {
          path: '/Pal',
          name: 'Pal',
          component:Pal
        },
        {
          path: '/RomT',
          name: 'RomT',
          component:RomT
        },
        {
          path: '/Rom',
          name: 'Rom',
          component:Rom
        },
        {
          path: '/Mar',
          name: 'Mar',
          component:Mar
        },
        {
          path: '/MarT',
          name: 'MarT',
          component:MarT
        },


]

  const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes

})

export default router
