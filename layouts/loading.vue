<template>
  <div class="row loading fill-height collunm justify-center align-center">
    <div class="col-ml-5">
      <div class="row justify-center mb-5">
        <img
          height="100px"
          :src="require('~/assets/images/logo/logo-menu.svg')"
        />
      </div>

      <div class="text-center white-text display-4">
        <span class="display-3 white-text"
          >Pronto! Estamos preparando tudo para você</span
        >
      </div>
      <div class="text-center white-text my-2">
        <span
          >Seu cadastro foi realizado com sucesso. Enviaremos um e-mail
          <b>jhonatanborgesdj@gmail.com</b> quando tiver tudo certo.</span
        >
      </div>
      <div class="row justify-center my-5">
        <div class="col-ml-8">
          <a href="https://admin.mixentregas.com.br" class="btn btn-secondary">
            <span
              >Ir para o painel <span class="mdi mdi-arrow-right"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {},
}
</script>
<style>
.loading {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' version='1.1' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:svgjs='http://svgjs.com/svgjs' width='1440' height='631' preserveAspectRatio='none' viewBox='0 0 1440 631'%3e%3cg mask='url(%26quot%3b%23SvgjsMask1000%26quot%3b)' fill='none'%3e%3crect width='1440' height='631' x='0' y='0' fill='rgba(102%2c 40%2c 234%2c 1)'%3e%3c/rect%3e%3cpath d='M0%2c518.691C95.459%2c528.274%2c169.574%2c441.222%2c251.937%2c392.022C337.423%2c340.956%2c449.769%2c314.866%2c492.094%2c224.732C534.463%2c134.504%2c489.597%2c29.992%2c467.589%2c-67.229C447.231%2c-157.16%2c424.781%2c-246.308%2c368.865%2c-319.624C310.544%2c-396.093%2c235.952%2c-462.291%2c144.232%2c-491.209C51.595%2c-520.416%2c-45.486%2c-497.741%2c-141.056%2c-480.393C-247.338%2c-461.101%2c-366.764%2c-460.288%2c-443.718%2c-384.484C-522.034%2c-307.339%2c-530.889%2c-187.371%2c-548.657%2c-78.885C-566.748%2c31.574%2c-616.104%2c161.544%2c-547.652%2c250.104C-476.985%2c341.529%2c-325.146%2c293.623%2c-221.399%2c344.504C-135.348%2c386.706%2c-95.364%2c509.117%2c0%2c518.691' fill='%235315d7'%3e%3c/path%3e%3cpath d='M1440 923.412C1496.91 919.979 1554.902 915.244 1603.0430000000001 884.7 1651.334 854.061 1673.722 799.1759999999999 1707.9850000000001 753.385 1752.81 693.478 1830.3029999999999 648.794 1835.412 574.148 1840.576 498.692 1795.446 420.23199999999997 1733.785 376.43399999999997 1674.651 334.432 1594.479 355.417 1522.048 351.569 1466.768 348.632 1414.351 349.743 1359.413 356.546 1293.499 364.708 1215.282 348.652 1168.103 395.4 1120.993 442.079 1131.6100000000001 519.897 1127.737 586.103 1124.162 647.213 1122.468 708.738 1146.481 765.046 1170.871 822.239 1209.083 875.643 1263.8029999999999 905.1669999999999 1316.842 933.784 1379.842 927.0409999999999 1440 923.412' fill='%237f4bed'%3e%3c/path%3e%3c/g%3e%3cdefs%3e%3cmask id='SvgjsMask1000'%3e%3crect width='1440' height='631' fill='white'%3e%3c/rect%3e%3c/mask%3e%3c/defs%3e%3c/svg%3e");
}
</style>
