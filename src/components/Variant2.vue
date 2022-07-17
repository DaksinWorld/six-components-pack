<template>
  <div>
    <h1>
      Variant2
    </h1>
    <div class="card mt-5">
      <span class="card-title">EXPAND</span>
      <label class="input-container mt-2">Product
        <input type="radio" checked="checked" name="radio">
        <span class="checkmark"></span>
      </label>
      <label class="input-container">Supplier
        <input type="radio" name="radio">
        <span class="checkmark"></span>
      </label>
      <label class="input-container">Employee
        <input type="radio" name="radio">
        <span class="checkmark"></span>
      </label>
      <label class="input-container">Region
        <input type="radio" name="radio">
        <span class="checkmark"></span>
      </label>
      <label class="input-container">Customer
        <input type="radio" name="radio">
        <span class="checkmark"></span>
      </label>
      <hr class="my-2">
      <span class="card-title">RELATED</span>
      <label class="input-container mt-2">Reordered product
        <input type="radio" checked="checked" name="radio">
        <span class="checkmark"></span>
      </label>
      <label class="input-container">Active
        <input type="radio" name="radio">
        <span class="checkmark"></span>
      </label>
      <label class="input-container">In US
        <input type="radio" name="radio">
        <span class="checkmark"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Variant2"
}
</script>

<style scoped>
.card {
  background-color: white;
  width: 224px;
  border: 1px solid #C6C2DE;
  padding: 14px;
  border-radius: 6px;
}

li, .card-title {
    padding: 3px;
}

.card-title {
  padding: 5px 10px;
  font-weight: 400;
  color: #C6C2DE;
}

.input-container:first-child {
  margin-top: 10px;
}

.input-container {
  padding: 5px 10px;
  border-radius: 4px;
  display: block;
  position: relative;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 14px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.input-container:hover {
  background-color: #F2F0F9;
}

/* Hide the browser's default radio button */
.input-container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

/* Create a custom radio button */
.checkmark {
  position: absolute;
  top: 6px;
  right: 10px;
  height: 15px;
  width: 15px;
  background-color: #fff;
  border: 2px solid #6D5BD0;
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
  background-color: #fff;
  border: 2px solid #6D5BD0;
}

/* When the radio button is checked, add a blue background */
.input-container input:checked ~ .checkmark {
  border: 0;
  background-color: #6D5BD0;
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.input-container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.input-container .checkmark:after {
  top: 5px;
  left: 5px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: white;
}

</style>
