<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resources')"
      :mode="storedResButtonMode"
    >
      Stored Resources
    </base-button>
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
    >
      Add Resource
    </base-button>
  </base-card>
  <!-- здесь мы вешаем обрабочик на кастомный компонент с кнопкой, и это работает, 
    обработчик проникает в компонент и прикрепляется к корневому элементу 
    в разметке этого компонента -->
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';

export default {
  components: {
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guid',
          title: 'Official Guide',
          description: 'The official Vue JS documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'official-google',
          title: 'Official Google',
          description: 'The Google is fine',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      onAddNewResource: this.onAddNewResource,
      removeResourse: this.removeResourse,
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    },
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab;
    },
    onAddNewResource(title, description, link) {
      const newResourse = {
        id: new Date().toISOString(),
        title,
        description,
        link,
      };
      this.storedResources.unshift(newResourse);
      this.selectedTab = 'stored-resources';
    },
    removeResourse(resId) {
      // this.storedResources = this.storedResources.filter((r) => r.id !== resId);
      // этот прием удаляет элемент массива, но не влияет на функциональность provide/inject,
      // из-за чего эта функциональность не обсепечивает реактивное изменение отображения данных
      // здесь мы переписываем массив данны методом filter, а provide/inject всегда работает
      // только с тем, что передавалось первоначально
      const resIndex = this.storedResources.findIndex(
        (res) => res.id === resId
      );
      this.storedResources.splice(resIndex, 1);
    },
  },
};
</script>