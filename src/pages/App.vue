<template>
  <!-- Upload Excel Page-->
  <div id="app">
    <Nav></Nav>
    <div class="container">
      <div class="buttons flex flex-row">
        <!-- Iterating Buttons Data -->
        <div v-for="(text, i) in buttonData">
          <button
            class="bg-slate-500 menu-btn mx-1 mt-5 hover:bg-slate-700 text-white font-regular py-2 px-4"
            :class="{'bg-yellow-500 hover:bg-yellow-700': pickedValue === text}"
            :key="i" @click="setPickedValue(text)"
          >
            {{text}}
          </button>
        </div>
      </div>
      <!-- File Input     -->
      <div class="upload-data w-full h-100 bg-gray-300 mt-8px">
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
      <div class="uploaded-files w-full mt-8px">
        <h2 class="bg-gray-200 py-5 px-3 mt-8px">Already uploaded files</h2>
        <table class="mt-8px w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6 border">File Name</th>
              <th scope="col" class="py-3 px-6 border">Rows</th>
              <th scope="col" class="py-3 px-6 border">Columns</th>
              <th scope="col" class="py-3 px-6 border">Date</th>
              <th scope="col" class="py-3 px-6 border">Author Name</th>
              <th scope="col" class="py-3 px-6 border">Dashbords</th>
              <th scope="col" class="py-3 px-6 border"></th>
              <th scope="col" class="py-3 px-6 border"></th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="uploaded-file bg-white border-b bg-gray-200 dark:border-gray-200"
              v-for="(file, i) in files"
              >
                <td class="py-4 px-6">{{file.name}}</td>
                <td class="py-4 px-6">{{file.rows}}</td>
                <td class="py-4 px-6">{{file.columns}}</td>
                <td class="py-4 px-6">{{file.date}}</td>
                <td class="py-4 px-6">{{file.authorName}}</td>
                <td class="py-4 px-6">{{file.dashbords}}</td>
                <td class="py-4 px-6 text-red-400 text-underline text-center hover:text-red-500">
                  Delete
                </td>
                <td class="py-4 px-6 text-white text-center text-blue-400 hover:text-blue-500">Open</td>
            </tr>
          </tbody>
        </table>
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
      <RichText/>
    </div>
    <CollectionOverview/>
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
  import RichText from '../components/RichText'
  import CollectionOverview from '../components/CollectionOverview'

  export default {
    components: {
      Nav,
      StandingIcons,
      Cards,
      Dropdown,
      Variant2,
      SecondDropdown,
      Comment,
      RichText,
      CollectionOverview
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

.icon g, .icon path {
  fill: black;
}

.icon {
  padding: 2px;
  fill: black;
}

.dropdown-first li:hover .icon path {
  fill: #2E6BF2;
}

.menu-btn:first-child {
  margin-left: 0;
}

</style>

<!-- Scoped component css -->
<!-- It only affect current component -->
<style scoped>

.mt-8px {
  margin-top: 8px;
}

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
