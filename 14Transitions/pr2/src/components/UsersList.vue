<template>
  <transition-group tag="ul" name="user-list">
    <!-- этот компонент в атрибуте задает тип тега -->
    <li v-for="user in users" :key="user" @click="removeUser(user)">{{ user }}</li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add User</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: ['Max', 'Bob', 'Tom', 'Julie', 'Angela', 'Manu']
    };
  },
  methods: {
    removeUser(user) {
      this.users = this.users.filter(us => us !== user);
    },
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
      this.$refs.userNameInput.value = '';
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}
li {
  padding: 1rem;
  border: 1px solid #ccc;
  text-align: center;
}
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}
.user-list-enter-active {
  transition: all 1s ease-out;
}
.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute; /* это мы добавили, 
  чтоб обеспечить плавный переход анимаци группы элементов при удалении элемента,
  такой эффект оно создает */
}
.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.user-list-move {
  /* -move - специальный класс для того, чтоб распрострянять анимацию на группу элементов */
  transition: transform 0.8s ease;
}
</style>