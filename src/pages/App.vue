<template>
  <!-- Upload Excel Page-->
  <div id="app">
    <Nav></Nav>
    <div class="container">
      <div class="buttons flex flex-row">
        <!-- Iterating Buttons Data -->
        <div v-for="(text, i) in buttonData">
          <button
            class="bg-slate-500 mx-1 my-5 hover:bg-slate-700 text-white font-regular py-2 px-4"
            :class="{'bg-yellow-500 hover:bg-yellow-700': pickedValue === text}"
            :key="i" @click="setPickedValue(text)"
          >
            {{text}}
          </button>
        </div>
      </div>
      <!-- File Input     -->
      <div class="upload-data w-full h-100 bg-gray-300">
        <label class="flex justify-center" for="file">
          <div class="upload-data__file bg-gray-200 p-4">
            <div class="upload-border w-full h-100 rounded">
              <img class="bg-transparent" src="/icons/upload-icon.png" width="100" alt="upload-icon">
              <h2 class="upload-text">Click or drag file to this area to upload</h2>
            </div>
          </div>
        </label>
        <input class="d-none" id="file" type="file">
      </div>
      <!--  Uploaded Files    -->
      <div class="uploaded-files w-full my-5">
        <h2 class="bg-gray-200 py-5 px-3 my-5">Already uploaded files</h2>
        <div class="my-5 w-full">
          <div
            class="uploaded-file"
            v-for="(file, i) in files">
            <span class="filesStyle bg-gray-200">{{file.name}}</span>
            <span class="filesStyle bg-gray-200">{{file.rows}}</span>
            <span class="filesStyle bg-gray-200">{{file.columns}}</span>
            <span class="filesStyle bg-gray-200">{{file.date}}</span>
            <span class="filesStyle bg-gray-200">{{file.authorName}}</span>
            <button class="filesStyle btn bg-red-400 hover:bg-red-500 p-5 rounded">Delete</button>
            <button class="filesStyle btn bg-blue-400 hover:bg-blue-500 p-5 rounded">Open</button>
            <span class="filesStyle bg-gray-200 uploaded-file__dashbords">{{file.dashbords}} Dashbords</span>
          </div>
        </div>
      </div>
    </div>
    <!-- Other Components   -->
    <div class="container">
      <StandingIcons/>
      <Cards/>
      <Dropdown/>
      <Variant2/>
      <SecondDropdown/>
      <Comment/>
    </div>
  </div>
</template>

<script>
  import Nav from '../components/Nav'
  import StandingIcons from '../components/StandingIcons'
  import Cards from '../components/Cards'
  import Variant2 from '../components/Variant2'
  import Dropdown from '../components/Dropdown'
  import Comment from '../components/Comment'
  import SecondDropdown from '../components/SecondDropdown'

  export default {
    components: {
      Nav,
      StandingIcons,
      Cards,
      Dropdown,
      Variant2,
      SecondDropdown,
      Comment,
    },
    data() {
      return {
        buttonData: ['Excel', 'MySQL', 'Postgres', 'Neo4j', 'MongoDB', 'SparQL', 'BigTable', 'SAP', '>'],
        files: [
          {
            name: 'file-name.xslx',
            rows: 'xxx',
            columns: 'xxx',
            date: '2022-01-01',
            authorName: 'Author Name',
            dashbords: '3',
          },
          {
            name: 'file-name.xslx',
            rows: 'xxx',
            columns: 'xxx',
            date: '2022-01-01',
            authorName: 'Author Name',
            dashbords: '33',
          },
          {
            name: 'file-name.xslx',
            rows: 'xxx',
            columns: 'xxx',
            date: '2022-01-01',
            authorName: 'Author Name',
            dashbords: '23',
          },
        ],
        pickedValue: 'Excel'
      }
    },
    methods: {
      setPickedValue(value) {
        this.pickedValue = value
      }
    }
  }
</script>

<!-- CSS libraries -->
<style src="../../node_modules/normalize.css/normalize.css"></style>

<!-- Global CSS -->
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

  * {
    font-family: Inter, sans-serif;
  }

  .container {
    width: 1340px;
    margin: 0 auto;
  }

  .d-none {
    display: none;
  }
</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>
.upload-data__file {
  height: 400px;
  width: 50%;
}

.upload-border {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  border: 1px dashed black;
}

.filesStyle {
  width: 12.5%;
  border-radius: 0.25rem;
  padding: 1.25rem;
  margin: 10px 10px;
}

.filesStyle:first-child, .filesStyle:last-child {
  margin: 0;
}
</style>
