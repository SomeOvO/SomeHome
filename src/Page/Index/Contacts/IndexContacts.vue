<script lang="ts" setup>
import PublicTitle from '@/components/PublicComponenets/PublicTitle.vue'
import ContactList from './ContactList.vue'
</script>
<template>
  <div class="IndexContacts Model">
    <PublicTitle -desc="请备注来意" -english="ContactME" -title="联系我" />
    <div class="list">
      <ContactList />
    </div>
  </div>
</template>

<style scoped>
.IndexContacts {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  justify-content: start;
  .list {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
  }
}
</style>
