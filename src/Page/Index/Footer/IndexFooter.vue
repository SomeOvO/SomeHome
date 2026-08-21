<script lang="ts" setup></script>
<template>
  <div class="Footer">
    <div class="Content">
      <!-- <div class="Left">
        <h2>Designed solely by SomeOvO</h2>
        <p>二次修改请保留说明</p>
      </div>
      <div class="Right">
        <p>豫ICP备2024071946号-2</p>
        <p>豫公网安备41040302000173号</p>
      </div> -->
      <h1>Designed solely by SomeOvO</h1>
      <div class="ba">
        <span>豫ICP备2024071946号-2</span><span>豫公网安备41040302000173号</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.ba {
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 0.5rem;
  font-size: 100%;
  color: #686868;
}
@media (width < 347px) {
  .ba {
    font-size: 10% !important;
  }
}
@media (width < 465px) {
  .ba {
    font-size: 70%;
  }
}

.Footer {
  box-sizing: border-box;
  z-index: 0;
  position: fixed;
  width: 100%;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  bottom: 1rem;
  left: 0;
  .Content {
    color: #e7e7e7;
    padding: 0 1rem;
    border-radius: 7px;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    width: 100%;
    height: 100%;
    display: flex;
    background-color: #292929;
    p,
    h1 {
      font-size: clamp(1rem, 2rem, 5dvw);
      margin: 0;
    }
  }
}
.Left,
.Right {
  display: flex;
  flex-direction: column;
}
.Left {
  justify-content: center;
  align-items: start;
}
.Right {
  justify-content: center;
  align-items: end;
}
</style>
