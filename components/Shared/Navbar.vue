<template>
  <div class="nav">
    <div class="topnav">
      <div class="title-nav">
        <span>mix | delivery agora</span>
      </div>
      <div class="topnav-right">
        <a href="#" class="start">Inicio</a>
        <a href="#" class="about">Sobre</a>
        <a href="#" class="answers">Dúvidas</a>
        <a href="#" class="partner">Quero ser parceiro</a>
        <div class="icons">
          <a href="#"> <span class="mdi mdi-facebook"></span></a>
          <a href="#"> <span class="mdi mdi-twitter"></span></a>
          <a href="#"> <span class="mdi mdi-youtube"></span></a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>

<style>
.nav {
  position: sticky;
  top: 0;
}
.title-nav {
  font-family: 'Manrope', sans-serif;
  font-size: 26px;
  color: #def5f2;
  padding: 5px 20px;
}
.topnav {
  background: linear-gradient(-45deg, #6628ea 20%, #6628ea 70%);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 20px 80px;
  font-family: 'Manrope', sans-serif;
}

.topnav a {
  margin: 0px 10px;
  float: left;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  padding: 10px 20px;
  letter-spacing: 0;
  font-weight: 500;
  color: #ffffff;
}
.topnav-right .icons a {
  text-align: center;
  text-decoration: none;
  font-size: 25px;
  padding: 10px 20px;
  letter-spacing: 0;
  font-weight: 500;
  color: #ffffff;
}
.topnav-right > .partner {
  margin: 0px 10px;
  float: left;
  text-align: center;
  text-decoration: none;
  background: #a0ece5;
  color: #301c6b;
  box-shadow: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 800;
  padding: 18px 32px 16px;
}

.topnav a:hover {
  background: #ffffff;
  border-radius: 8px;
  color: #301c6b;
}

.topnav a.active {
  background-color: white, 50%;
  color: #ffffff;
}

.topnav .icon {
  display: none;
}

@media screen and (max-width: 600px) {
  .topnav a:not(:first-child) {
    display: none;
  }
  .topnav a.icon {
    float: right;
    display: block;
  }
}

@media screen and (max-width: 600px) {
  .topnav.responsive {
    position: relative;
  }
  .topnav.responsive .icon {
    position: absolute;
    right: 0;
    top: 0;
  }
  .topnav.responsive a {
    float: none;
    display: block;
    text-align: left;
  }
}
.topnav-right {
  float: right;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.icons {
  display: flex;
  align-items: center;
}
.icons > .mdi {
  font-size: 28px;
  margin: 0px 10px;
  color: white;
}
</style>
