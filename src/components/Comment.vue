<template>
  <div>
    <h1>Comments</h1>
    <div class="comments p-2 border mt-5">
      <div v-for="(comment, i) in comments" :key="i">
        <div class="comment mt-30px">
          <div class="comment-userdata flex flex-row align-items-center">
            <div class="comment-image">
              <img :src="comment.image" width="50" height="50" alt="avatar">
            </div>
            <div class="comment-name font-bold ml-3">
              {{comment.username}}
            </div>
          </div>
          <div class="more">
            <img src="/icons/more.png" alt="more">
          </div>
          <div class="comment-text">
            <div class="text">
              {{comment.text}}
            </div>
            <div class="date">
              {{comment.date}}
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
      comments: [
        {
          username: 'Name',
          image: '/icons/user-avatar.png',
          text: 'text',
          date: '8 minutes'
        },
        {
          username: 'Alex',
          image: '/icons/user-avatar.png',
          text: 'text',
          date: '12 minutes'
        },
        {
          username: 'Name',
          image: '/icons/user-avatar.png',
          text: 'text',
          date: '3 minutes'
        }
      ]
    }
  }
}
</script>

<style scoped>
.align-items-center {
  align-items: center;
}

.comment {
  display: grid;
  grid-template:
    "userdata more"
    "text text" / 1fr auto
;
  margin-bottom: 10px;
}

.comment-userdata {
  grid-area: userdata;
}

.mt-30px {
  margin-top: 30px;
}

.more {
  grid-area: more;
}

.comment-text {
  grid-area: text;
  padding-left: calc(50px + 0.75rem);
}

.text {
  margin-bottom: 10px;
}

.date {
  color: #c4c4c4;
}

</style>
