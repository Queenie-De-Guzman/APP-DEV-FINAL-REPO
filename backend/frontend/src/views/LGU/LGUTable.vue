<template>

    <LGUNavbar/>
    <LGUForm/>
    <LGUT/>
    <LGUSettings/>
    <LGUFooter/>
</template>

<script>
import LGUNavbar from '@/components/User/LGUNavbar.vue';
import LGUForm from '@/components/User/LGUForms.vue';
import LGUT from '@/components/User/LGUT.vue'
import LGUSettings from '@/components/User/LGUSettings.vue';
import LGUFooter from '@/components/User/LGUFooter.vue';


export default {
name: 'LGUTable',
  components: {LGUNavbar,LGUForm,LGUT,LGUSettings,LGUFooter },
  mounted() {
  const scriptPaths = [
'./adminuser/vendors/js/vendor.bundle.base.js',
'./adminuser/vendors/chart.js/Chart.min.js',
'./adminuser/vendors/datatables.net/jquery.dataTables.js',
'./adminuser/vendors/datatables.net-bs4/dataTables.bootstrap4.js',
'./adminuser/js/dataTables.select.min.js',
'./adminuser/js/off-canvas.js',
'./adminuser/js/hoverable-collapse.js',
'./adminuser/js/template.js',
'./adminuser/js/settings.js',
'./adminuser/js/todolist.js',
'./adminuser/js/dashboard.js',
'./adminuser/js/Chart.roundedBarCharts.js',
    
  ];
      
  const loadScript = (path) => {
  return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = path;
      script.onload = resolve;
      script.onerror = reject;
      document.body.appendChild(script);
  });
  };

  const loadScripts = async () => {
  try {
      await loadScript(scriptPaths[0]); // Load jQuery first
      for (let i = 1; i < scriptPaths.length; i++) {
      await loadScript(scriptPaths[i]);
      }
  } catch (error) {
      console.error('Failed to load scripts:', error);
  }
  };
  loadScripts();
}
}
</script>

<style scoped>
@import '@/assets/adminuser/vendors/feather/feather.css';
@import '@/assets/adminuser/vendors/ti-icons/css/themify-icons.css';
@import '@/assets/adminuser/vendors/css/vendor.bundle.base.css';
@import '@/assets/adminuser/vendors/datatables.net-bs4/dataTables.bootstrap4.css';
@import'@/assets/adminuser/vendors/ti-icons/css/themify-icons.css';
@import'@/assets/adminuser/js/select.dataTables.min.css';
@import'@/assets/adminuser/css/vertical-layout-light/style.css';
</style>