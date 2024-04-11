<template>
  <div class="main">
    <component :is="currentViewComponent" />
  </div>
</template>

<script>
import Discover from '@/components/Discover';
import Search from '@/components/Search';
import Likes from '@/components/Likes';

export default {
  components: {
    Discover,
    Search,
    Likes
  },
  computed: {
    currentViewComponent() {
      return this.$store.state.currentView;
    },
  },
};
</script>