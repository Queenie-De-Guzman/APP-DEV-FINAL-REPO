<template>
       <div class="container-scroller">
  <div class="container-fluid page-body-wrapper">
    <nav class="sidebar sidebar-offcanvas" id="sidebar">
     <ul class="nav">
       <li class="nav-item">
       <a class="nav-link" href="/AdminHome">
         <i class="icon-contract menu-icon"></i>
         <span class="menu-title">Home</span>
       </a>
     </li>
     <li class="nav-item">
         <a class="nav-link" href="/Dash">
           <i class="icon-bar-graph menu-icon"></i>
           <span class="menu-title">Dashboard</span>
         </a>
       </li>

     <li class="nav-item">
       <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="#auth">
         <i class="icon-layout menu-icon"></i>
         <span class="menu-title">OrientalMindoro</span>
         <i class="menu-arrow"></i>
       </a>
       <div class="collapse" id="auth">
         <ul class="nav flex-column sub-menu">
           <li class="nav-item"> <a class="nav-link" href="/Mindoro">Dashboard</a></li>
           <li class="nav-item"> <a class="nav-link" href="/OrminT">Table</a></li>
             </ul>
       </div>
     </li>
     
     <li class="nav-item">
       <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
         <i class="icon-layout menu-icon"></i>
         <span class="menu-title">Occidental Mindoro</span>
         <i class="menu-arrow"></i>
       </a>
       <div class="collapse" id="ui-basic">
         <ul class="nav flex-column sub-menu">
           <li class="nav-item"> <a class="nav-link" href="/Occi">Dashboard</a></li>
           <li class="nav-item"> <a class="nav-link" href="/OcciT">Table</a></li>
             </ul>
       </div>
     </li>
     <li class="nav-item">
       <a class="nav-link" data-toggle="collapse" href="#form-elements" aria-expanded="false" aria-controls="form-elements">
         <i class="icon-layout menu-icon"></i>
         <span class="menu-title">Palawan</span>
         <i class="menu-arrow"></i>
       </a>
       <div class="collapse" id="form-elements">
         <ul class="nav flex-column sub-menu">
           <li class="nav-item"> <a class="nav-link" href="/Pal">Dashboard</a></li>
           <li class="nav-item"> <a class="nav-link" href="/PalT">Table</a></li>
             </ul>
       </div>
     </li>
     
     <li class="nav-item">
       <a class="nav-link" data-toggle="collapse" href="#charts" aria-expanded="false" aria-controls="charts">
         <i class="icon-layout menu-icon"></i>
         <span class="menu-title">Romblon</span>
         <i class="menu-arrow"></i>
       </a>
       <div class="collapse" id="charts">
         <ul class="nav flex-column sub-menu">
           <li class="nav-item"> <a class="nav-link" href="/Rom">Dashboard</a></li>
           <li class="nav-item"> <a class="nav-link" href="/RomT">Table</a></li>
             </ul>
       </div>
     </li>
     
     <li class="nav-item">
       <a class="nav-link" data-toggle="collapse" href="#icons" aria-expanded="false" aria-controls="icons">
         <i class="icon-layout menu-icon"></i>
         <span class="menu-title">Marinduque</span>
         <i class="menu-arrow"></i>
       </a>
       <div class="collapse" id="icons">
         <ul class="nav flex-column sub-menu">
           <li class="nav-item"> <a class="nav-link" href="/Mar">Dashboard</a></li>
           <li class="nav-item"> <a class="nav-link" href="/MarT">Table</a></li>
             </ul>
       </div>
     </li>

       <li class="nav-item">
         <a class="nav-link" href="/Report">
           <i class="icon-bar-graph menu-icon"></i>
           <span class="menu-title">Report</span>
         </a>
       </li>
       <li class="nav-item">
         <a class="nav-link" href="/Table">
           <i class="icon-columns menu-icon"></i>
           <span class="menu-title">Table</span>
         </a>
       </li>
    
       <li class="nav-item">
         <a class="nav-link" href="/">
           <i class="icon-head menu-icon"></i>
           <span class="menu-title">Log Out</span>
         </a>
       </li>


     </ul>
  </nav>
    <div class="main-panel">
      <div class="card">







<div class="card">
            <div class="card-body">
              <h4 class="card-title">Farm Information</h4>
              <p class="card-description">
                Report
              </p>
              <form class="forms-sample" @submit.prevent="save">
            <div class="form-group">
              <label for="NameofFramer">Name of Farmer</label>
              <input type="text" class="form-control" v-model="Name" id="Name" placeholder="Name of Farmer">
            </div>
            <div class="form-group">
              <label for="FarmerLocation">Farmer Location</label>
              <input type="text" class="form-control" v-model="location" id="location" placeholder="Farmer Location">
            </div>
            <div class="form-group">
              <label for="NoofCans">No. of Cans</label>
              <input type="number" class="form-control" v-model="nocans" id="cans" placeholder="No. of Cans">
            </div>
            <div class="form-group">
              <label for="SeedlingDate">Seedling Date</label>
              <input type="date" class="form-control" v-model="seeddate" id="date" placeholder="Seedling Date">
            </div>
            <div class="form-group">
              <label for="NoofArea">Expected No. of Area</label>
              <input type="text" class="form-control" v-model="area" id="area" placeholder="Expected No of Area">
            </div>
            <div class="card">
            <div class="card-body">
              <h4 class="card-title">Damages</h4>
              <p class="card-description">
                Report
              </p>
              <div class="form-group">
                  <label for="DamegeTyphoon">Damaged By Typhoon (ha)</label>
                  <input type="text" class="form-control" v-model="typhoon" id="typhoon" placeholder=" Damaged By Typhoon">
                </div>
                                 <div class="form-group">
                  <label for="Rain"> Damaged By Heavy Rains(HA)</label>
                  <input type="text" class="form-control" v-model="heavyrains" id="heavyRain" placeholder=" Damaged By Heavy Rains">
                </div>
    
                  <div class="form-group">
                  <label for="Toatal">Total Damaged(HA)</label>
                  <input type="text" class="form-control" v-model="total" id="total" placeholder=" TotalDamagedd">
                </div>     
            </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Status</h4>
              <p class="card-description">
                Report
              </p>
              <div class="form-group">
                  <label for="StandingCrop">Standing Crop</label>
                  <input type="text" class="form-control" v-model="standcrop" id="standcrop" placeholder="StandingbCrop">
                </div>
                <div class="form-group">
                  <label for="TransplateDate">Transplant Date</label>
                  <input type="date" class="form-control" v-model="transdate" id="transdate" placeholder="Transplate Date">
                </div>
              </div>
          </div>
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Expected Informations</h4>
              <p class="card-description">
                Report
              </p>
              <div class="form-group">
                  <label for="ExpectedDate">Expected Date of Harvest</label>
                  <input type="date" class="form-control" v-model="expdate" id="expdate" placeholder="Expected Date of Harvest">
                </div>
                <div class="form-group">
                  <label for="ExpectedArea" >Expected Area of Harvest(HA)</label>
                  <input type="text" class="form-control" v-model="exparea" id="exparea" placeholder="Expected Area of Harvest">
                </div>
                <div class="form-group">
                  <label for="ExpectedVolume">Expected Volume of Harvest (MT)</label>
                  <input type="number" class="form-control" v-model="expvolume" id="expvolume" placeholder="Expected Volume of Harvest">
                </div>
              </div>
              </div>
              <button type="submit" class="btn btn-primary mr-2">Submit</button>
            <button class="btn btn-light">Cancel</button>
          </form>
        </div>
          </div>
        </div>
      </div>
<!-- main-panel ends -->
</div>
<!-- page-body-wrapper ends -->
</div>
<!-- container-scroller -->

</template>
<script>
import axios from 'axios'
export default{
data(){
return{
Name: "", 
location: "", 
nocans: "", 
seeddate: "", 
area: "",
typhoon: "", 
heavyrains: "", 
total: "", 
standcrop: "", 
transdate: "", 
expdate: "", 
exparea: "", 
expvolume: "", 
}
},
methods:{
async save()
{
try {
  const ins = await axios.post('save',{
    Name: this.Name,
    location: this.location,
    nocans: this.nocans,
    seeddate: this.seeddate,
    area: this.area,
    typhoon: this.typhoon,
    heavyrains: this.heavyrains,
    total: this.total,
    standcrop: this.standcrop,
    transdate: this.transdate,
    expdate: this.expdate,
    exparea: this.exparea,
    expvolume: this.expvolume,
  });
} catch (error) {
  console.log(error);
}
}
}
}
</script>