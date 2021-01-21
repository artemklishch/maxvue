<template>
  <base-dialog
    v-if="inputIsInvalid"
    title="Invalid Input"
    @close="confirmError"
  >
    <template #default>
      <p>Unfortinaly, at least one input value is invalid</p>
      <p>
        Please, check all inputs, and make sure you enter at least a few
        charachers inpi each input field
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okey</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="addNewResource">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="3"
          ref="descriptionInput"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" name="link" id="link" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
        <!-- атрибут type проникает в компоненту и присваивается корневому элементу, 
        вданном случае кнопке, поэтому это работает -->
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['onAddNewResource'],
  data() {
    return {
      inputIsInvalid: false,
    };
  },
  methods: {
    addNewResource() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;
      if (
        !enteredTitle.trim() ||
        !enteredDescription.trim() ||
        !enteredLink.trim()
      ) {
        this.inputIsInvalid = true;
        return;
      }
      this.onAddNewResource(enteredTitle, enteredDescription, enteredLink);
      this.$refs.titleInput.value = '';
      this.$refs.descriptionInput.value = '';
      this.$refs.linkInput.value = '';
    },
    confirmError() {
      this.inputIsInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>