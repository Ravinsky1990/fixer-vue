<template>
  <input
    class="formInput"
    :placeholder="placeholder"
    v-bind:value="value"
    :style="styles"
    v-on:input="$emit('input', $event.target.value)"
  >
</template>

<script>
export default {
  props: {
    placeholder: String,
    styles: Object,
    value: String,
  },
};
</script>

<style>
.formInput {
  display: block;
  border: 2px solid #f2f2f2;
  padding-left: 14px;
  width: 100%;
  padding-top: 11px;
  padding-bottom: 11px;
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #222428;
  outline: none;
  background: #fcfcfc;
  border-radius: 2px;
  box-sizing: border-box;
}
</style>
