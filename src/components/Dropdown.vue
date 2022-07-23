<template>
  <div>
    <h1>
      First Dropdown
    </h1>
    <div class="custom-shadow dropdown mt-5">
      <div class="background-transparent dropdown-tabs flex flex-row justify-between">
        <div class="flex flex-row">
          <div v-for="(item, i) in items" :key="i">
            <div class="tab flex flex-row align-center" @click="setTabActive(i)">
              <img v-if="i === tabActive" src="/icons/MessageIcon.png" alt="MessageIcon">
              <span class="text-gray-200" :class="{'text-black border-black': i === tabActive}">
              {{ item.name }}{{ i + 1 }}
          </span>
            </div>
          </div>
        </div>
        <img src="/icons/CloseLine.png" alt="CloseLine">
      </div>
      <div class="dropdown-search w-full">
        <div class="dropdown-input flex flex-row border-gray border-radius-top-right">
          <img class="p-3" src="/icons/SearchIcon.png" alt="SearchIcon">
          <input v-model="inputValue" class="p-3 w-full" type="text" placeholder="Search">
        </div>
      </div>
      <div class="dropdown-items">
        <div v-for="(item, i) in items" :key="i">
          <div class="p-2 border-gray" v-if="item.isActive">
            <div class="flex flex-row justify-between align-center">
            <span class="text-light-blue w-50">
              {{ item.name }} One
            </span>
              <div class="flex flex-row align-center custom-text-gray">
                <span class="custom-text-gray mr-1" @click="selectAll(item.children)">select all</span>
                <button @click="setItemActive(i, item.isActive)">
                  <img src="/icons/DownLine.png" height="7" width="12" alt="down-line">
                </button>
              </div>
            </div>
            <ul>
              <div>
                <li v-for="(child, i) in item.children" @click="addChild(child.id)"
                    :class="{'text-black': currentChildren.includes(child.id)}" :key="i">
                  {{ child.name }}
                </li>
              </div>
            </ul>
          </div>
          <div class="p-2 border-gray" v-else>
            <div class="flex flex-row justify-between align-center">
            <span class="custom-text-gray w-50">
              {{ item.name }} One
            </span>
              <div class="flex flex-row align-center custom-text-gray" @click="setItemActive(i, item.isActive)">
                <span class="custom-text-gray mr-1">select all</span>
                <button @click="setItemActive(i, item.isActive)">
                  <img src="/icons/DownLine.png" height="7" width="12" alt="down-line">
                </button>
              </div>
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
      items: [
        {
          name: 'Item',
          isActive: true,
          children: [
            {name: 'Apple', id: 1},
            {name: 'Banana', id: 2},
          ]
        },
        {
          name: 'Item',
          isActive: false,
          children: [
            {name: 'Apple', id: 3},
            {name: 'Banana', id: 4},
          ]
        },
        {
          name: 'Item',
          isActive: false,
          children: [
            {name: 'Apple', id: 5},
            {name: 'Banana', id: 6},
          ]
        }
      ],
      currentChildren: [],
      tabActive: 1,
      inputValue: ''
    }
  },
  methods: {
    setTabActive(i) {
      this.tabActive = i
    },
    setItemActive(i, boolean) {
      let array = [...this.items]
      array[i].isActive = !boolean
      this.items = array
    },
    selectAll(children) {
      const curr = this.currentChildren

      children.forEach((e) => {
        if(!curr.includes(e.id)) {
          curr.push(e.id)
        }
      })
    },
    addChild(child) {
      const curr = this.currentChildren

      const id = curr.indexOf(child)
      if (id === -1) {
        curr.push(child)
      } else {
        curr.splice(id, 1)
      }
    },
  },
}
</script>

<style scoped>
.text-black {
  color: black !important;
}

.custom-shadow {
  box-shadow: 0px 149.794px 119.835px rgba(0, 0, 0, 0.07), 0px 62.5805px 50.0644px rgba(0, 0, 0, 0.0503198), 0px 4.14519px 3.31615px rgba(0, 0, 0, 0.0196802);

  max-width: 640px;
}

.border-radius-top-right {
  border-radius: 0 5px 0 0;
}

.custom-text-gray {
  color: #EBECF2;
}

.text-light-blue {
  color: #24BFCD;
}

.border-gray, .tab {
  border-top: 1px solid #EBECF2;
  border-right: 1px solid #EBECF2;
  border-left: 1px solid #EBECF2;
}

ul li {
  padding: 10px;
  color: #EBECF2;
}

.tab {
  background-color: #FDFDFF;
  padding: 16px;
  border-radius: 6px 6px 0 0;
}

img {
  object-fit: contain;
}
</style>
