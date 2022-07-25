<template>
  <div class="container pb-5">
    <div class="tabs">
      <button class="mr-1" :class="{'active': currTab === 'queries'}" @click="setTab('queries')">
        Queries
      </button>
      <span class="ml-1" :class="{'active': currTab === 'dashboards'}" @click="setTab('dashboards')">
        Dashboards
      </span>
    </div>
    <div class="text mt-5 flex flex-row justify-between">
      <div class="flex flex-row items-end">
        <img class="mr-2" src="/icons/Collection.svg" alt="Collection">
        <h2 class="font-bold text-xl">
          Collection
        </h2>
      </div>
      <Button @click="setModal">Create New Collection</Button>
    </div>
    <table class="mt-5 w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-200 dark:text-gray-400">
      <tr>
        <th scope="col" class="py-3 px-6 border">Query</th>
        <th scope="col" class="py-3 px-6 border">Collection Name</th>
        <th scope="col" class="py-3 px-6 border">Data Source Name</th>
        <th scope="col" class="py-3 px-6 border">Added on</th>
        <th scope="col" class="py-3 px-6 border"></th>
        <th scope="col" class="py-3 px-6 border"></th>
      </tr>
      </thead>
      <tbody>
      <tr
        class="uploaded-file bg-white border-b bg-gray-200 dark:border-gray-200"
        v-for="(e, i) in data"
        :key="i"
      >
        <td class="py-4 px-6 text-black font-semibold">{{ e.name }}</td>
        <td class="py-4 px-6 text-black font-semibold">{{ e.collection_name }}</td>
        <td class="py-4 px-6 text-black font-semibold">{{ e.data_source_name }}</td>
        <td class="py-4 px-6">{{ e.added_on }}</td>
        <td class="py-4 px-6">
          <button class="btn-open">
            <img width="20" src="/icons/OpenIcon.svg" alt="OpenIcon">
          </button>
        </td>
        <td class="py-4 px-6">
          <button class="btn-delete" @click="deleteRow(i)">
            <img width="20" src="/icons/DeleteIcon.svg" alt="DeleteIcon">
          </button>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="container flex justify-center">
      <div class="modal" v-if="isModalActive">
        <div @click="setModal" class="modal-background">
        </div>
        <div class="modal-content flex-row">
          <div v-if="step === 1" class="step-1">
            <div class="flex flex-col flex-wrap">
              <span>Add this shot to a collection</span>
              <input class="modal-input" type="text" v-model="filterValue" placeholder="Filter collections">
            </div>
            <div class="h-300px">
              <div
                v-for="(c, i) in filteredData"
                :class="{'bg-gray-300': pickedValue === i}"
                @click="pickedValue = i"
                :key="i">
                <div class="hover:bg-gray-200 flex flex-row border rounded p-1 mt-3">
                  <div class="mr-2">
                    <img :src="c.img" alt="img">
                  </div>
                  <ul>
                    <li class="font-bold">{{c.name}}</li>
                    <li class="my-1">{{c.quantity}} shots</li>
                    <li class="text-gray-400">updated {{c.lastUpdated}}</li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="flex flex-row justify-between items-center">
              <button @click="isModalActive = false" class="p-3 bg-gray-300 mt-3 rounded">Done</button>
              <button @click="step = 2">Create New Collection</button>
            </div>
          </div>
          <div v-else class="step-2">
            <div class="h-350px">
              <form>
                <h3 class="font-semibold mb-3">Create a new collection</h3>
                <div class="flex flex-col">
                  <label for="name">
                    Name
                  </label>
                  <input placeholder="Name" class="p-3 border my-2 rounded" id="name" type="text">
                </div>
                <div class="flex flex-col">
                  <label for="description">Description (optional)</label>
                  <textarea placeholder="Description" class="p-3 h-full border my-2 rounded" id="description"></textarea>
                </div>
              </form>
            </div>
            <div class="flex flex-row justify-between items-center">
              <button @click="isModalActive = false" class="p-3 bg-gray-300 mt-3 rounded">Create</button>
              <button @click="step = 1">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currTab: 'queries',
      data: [
        {
          name: 'Lorem Ipsum',
          collection_name: 'My Analysis',
          data_source_name: "Customer Complaint",
          added_on: "2020-01-23"
        },
        {
          name: 'Lorem Ipsum',
          collection_name: 'My Analysis',
          data_source_name: "Customer Complaint",
          added_on: "2020-01-23"
        },
        {
          name: 'Lorem Ipsum',
          collection_name: 'My Analysis',
          data_source_name: "Customer Complaint",
          added_on: "2020-01-23"
        },
        {
          name: 'Lorem Ipsum',
          collection_name: 'My Analysis',
          data_source_name: "Customer Complaint",
          added_on: "2020-01-23"
        }
      ],
      collections: [
        {
          img: '/icons/user-avatar.png',
          name: 'Color Theme',
          quantity: '4',
          lastUpdated: '4 months ago'
        },
        {
          img: '/icons/user-avatar.png',
          name: 'Test',
          quantity: '4',
          lastUpdated: '4 months ago'
        },
        {
          img: '/icons/user-avatar.png',
          name: 'Components',
          quantity: '4',
          lastUpdated: '4 months ago'
        },
        {
          img: '/icons/user-avatar.png',
          name: 'Dashboard',
          quantity: '4',
          lastUpdated: '4 months ago'
        },
        {
          img: '/icons/user-avatar.png',
          name: 'Dashboard',
          quantity: '4',
          lastUpdated: '4 months ago'
        },
      ],
      isModalActive: false,
      pickedValue: 0,
      filterValue: '',
      step: 1
    }
  },
  methods: {
    setTab(text) {
      this.currTab = text
    },
    setModal() {
      this.isModalActive = !this.isModalActive
    },
    deleteRow(i) {
      const newArr = () => this.data.splice(i, 1)
      newArr()
    }
  },
  computed: {
    filteredData() {
      return this.collections.filter((e) => {
        return e.name.toLowerCase().includes(this.filterValue.toLowerCase())
      })
    }
  },
  async mounted() {
    const collections = await this.$store.dispatch('getCollections')
    this.collections = collections
  }
}
</script>

<style scoped>
.active {
  border-bottom: 2px solid #22BCCD;
}

.btn-open, .btn-delete {
  display: flex;
  align-items: center;
  padding: 15px;

  height: 30px;

  border-radius: 15px;

}

.btn-open {
  background: linear-gradient(112.5deg, #00C0D6 40.18%, #00FFEF 115.9%);
  box-shadow: 0.746032px 0.746032px 1.49206px rgba(0, 0, 0, 0.45), 0px 0px 0.746032px rgba(0, 0, 0, 0.45);
}

.btn-delete {
  background: #BE123C;
  box-shadow: 0.746032px 0.746032px 1.49206px rgba(0, 0, 0, 0.45), 0px 0px 0.746032px rgba(0, 0, 0, 0.45);
}

.uploaded-file {
  transition: all .1s linear;
}

.modal {
  top: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.modal-background {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .3);
}

.h-300px {
  height: 350px;
  overflow-y: scroll;
}

.h-350px {
  height: 424px;
  overflow-y: scroll;
}

.modal-content {
  position: inherit;
  border-radius: 12px;
  top: 120px;
  padding: 30px;
  background-color: white;
  height: 540px;
  width: 600px;
}

.modal-input {
  margin-top: 15px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 7px;
}


</style>
