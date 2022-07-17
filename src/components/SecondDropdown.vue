<template>
  <div>
    <h1>Second Dropdown</h1>
    <div class="dropdown p-3 mt-5">
      <ul class="dropdown-first">
        <li class="">
          <Refresh/>
          Refresh
        </li>
        <li class="">
          <Edit/>
          Edit Name
        </li>
        <li class="">
          <Duplicate/>
          Duplicate
        </li>
        <li class="">
          <Remove/>
          Remove
        </li>
      </ul>
      <hr class="mt-2 mb-4">
      <span class="dropdown-title">
      CHANGE CHART TYPE
    </span>
      <ul>
        <li class="flex flex-row align-center mt-3 font-bold">
          <img width="25px" height="25px" class="mr-2" src="/icons/bar.png" alt="bar">
          Bar
        </li>
        <li class="flex flex-row align-center mt-3">
          <img width="25px" height="25px" class="mr-2" src="/icons/metric.png" alt="metric">
          Metric
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Refresh from "./IconsSvg/Refresh";
import Remove from "./IconsSvg/Remove";
import Edit from "./IconsSvg/Edit";
import Duplicate from "./IconsSvg/Duplicate";

export default {
  components: {
    Refresh,
    Remove,
    Edit,
    Duplicate
  }
}
</script>

<style scoped>

.dropdown{
  border-radius: 5px;
  border: 1px solid #bdbdbd;
}

.dropdown-title {
  padding: 7px 5px;
}

li {
  display: grid;
  grid-template-columns: 30px auto;
  gap: 10px;
  align-items: center;
  padding: 7px 5px;
}

.dropdown-first li {
  color: black;
  background: transparent;
  border-radius: 5px;
}

.dropdown-first li:hover {
  background: #F4F6FB;
  color: #2E6BF2;
}

.dropdown-title {
  color: #5C6270;
  font-weight: 700;
}

</style>
