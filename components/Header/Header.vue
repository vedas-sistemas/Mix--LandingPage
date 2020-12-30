<template>
  <div class="header">
    <div class="header-container">
      <div class="header-child">
        <div class="header-child-text">
          <div class="header-child-title">
            <h3>Uma plataforma de delivery completa para seu o seu negócio</h3>
          </div>
          <div class="header-child-details">
            <p>
              seu cliente não precisa instalar nada. Aumente suas vendas e
              economize com aplicativos marketplaces.
            </p>
          </div>
          <div class="header-child-btn">
            <a href="#">quero ser parceiro</a>
          </div>
        </div>
      </div>
      <div class="header-child-item">
        <div class="header-child-image">
          <img :src="imageUrl" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: require('~/assets/images/header-image.png'),
    }
  },
}
</script>

<style>
.header {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='560' preserveAspectRatio='none' viewBox='0 0 1440 560'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1045%26quot%3b)' fill='none'%3e%3crect width='1440' height='560' x='0' y='0' fill='rgba(102%2c 40%2c 234%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c418.111C75.671%2c402.961%2c116.7%2c324.229%2c179.981%2c280.056C240.022%2c238.145%2c320.724%2c225.779%2c362.087%2c165.359C406.326%2c100.739%2c428.623%2c17.312%2c412.289%2c-59.278C396.275%2c-134.366%2c322.028%2c-177.688%2c275.846%2c-239.022C225.371%2c-306.058%2c202.906%2c-398.383%2c128.193%2c-436.586C49.517%2c-476.815%2c-52.729%2c-487.622%2c-131.314%2c-447.214C-208.37%2c-407.592%2c-224.446%2c-307.258%2c-268.466%2c-232.627C-303.747%2c-172.813%2c-355.384%2c-121.247%2c-364.213%2c-52.366C-372.979%2c16.028%2c-337.589%2c78.936%2c-316.827%2c144.69C-292.899%2c220.472%2c-293.299%2c310.843%2c-233.135%2c362.764C-171.417%2c416.026%2c-79.937%2c434.115%2c0%2c418.111' fill='%234f14cd'%3e%3c/path%3e%3cpath d='M1440 964.1279999999999C1514.464 954.818 1544.86 861.9590000000001 1607.45 820.558 1668.802 779.976 1768.05 790.609 1801.424 725.057 1834.6019999999999 659.892 1769.212 586.368 1763.812 513.443 1757.837 432.751 1807.75 346.21799999999996 1768.145 275.66 1727.74 203.678 1640.506 169.733 1560.188 150.678 1482.279 132.19400000000002 1402.034 146.54700000000003 1325.688 170.68900000000002 1250.581 194.43900000000002 1181.599 232.10899999999998 1126.05 287.961 1067.655 346.675 1012.625 414.894 1001.231 496.915 989.857 578.792 1019.108 662.387 1064.434 731.515 1106.19 795.1990000000001 1178.549 825.99 1243.289 866.088 1306.8600000000001 905.462 1365.801 973.405 1440 964.1279999999999' fill='%238655ee'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1045'%3e%3crect width='1440' height='560' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
  background-repeat: no-repeat;
  height: 500px;
}
.header-child-btn a {
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

@media all and (min-width: 1024px) and (max-width: 1490px) {
  .header-container {
    color: #def5f2;
    padding: 0px 80px;
    display: grid;
    grid-template-columns: 60% 50%;
    align-items: center;
    justify-items: center;
  }
  .header-child > .header-child-text {
    margin: 0px 10px;
  }
  .header-child-item {
    margin: 0;
    padding: 0;
  }
  .header-child-item .header-child-image img {
    max-height: 500px;
    bottom: -5px;
  }
  .header-child-title {
    font-size: 28px;
    font-weight: bold;
  }
  .header-child-details {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 33px;
    margin: 30px 0px;
  }
}

@media all and (min-width: 768px) and (max-width: 1024px) {
}

@media all and (min-width: 480px) and (max-width: 768px) {
}

@media all and (max-width: 480px) {
}
/* min-width 1025px, large screens */
</style>
