<template>
  <div>
    <div class="select">
      <label for class="select__label">{{label}}</label>
      <vSelect :placeholder="placeholder" :options="options"></vSelect>
    </div>
  </div>
</template>

<script>
import vSelect from 'vue-select';

export default {
  props: {
    label: String,
    options: Array,
    placeholder: String,
  },
  components: {
    vSelect,
  },
};
</script>

<style>
.v-select .vs__dropdown-toggle {
  border: 2px solid #f2f2f2;
  height: 41px;
  cursor: pointer;
  background: #fcfcfc;
}

.v-select .vs__search {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #35373b;
  cursor: pointer;
}
.v-select .vs__actions svg {
  fill: #01134e;
  cursor: pointer;
}
.v-select .vs__actions svg.vs__open-indicator path {
  d: path(
    "M4.39626 5.15214L0.683169 1.38059C0.44685 1.14068 0.44685 0.751695 0.683169 0.511895C0.919278 0.272077 1.30222 0.272077 1.53831 0.511895L4.82383 3.84913L8.10923 0.511992C8.34543 0.272174 8.72834 0.272174 8.96445 0.511992C9.20065 0.751811 9.20065 1.14077 8.96445 1.38069L5.2513 5.15224C5.13319 5.27214 4.97856 5.33203 4.82385 5.33203C4.66906 5.33203 4.51431 5.27203 4.39626 5.15214Z"
  );
}

.v-select .vs__dropdown-menu {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #35373b;
}
.v-select .vs__selected {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #35373b;
}

.select {
  max-width: 250px;
  margin-bottom: 20px;
}
.select__label {
  font-family: 'Roboto', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: #546087;
  margin-bottom: 5px;
  display: block;
}
</style>
