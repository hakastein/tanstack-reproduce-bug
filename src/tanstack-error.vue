<script setup>
import {useQuery} from "@tanstack/vue-query";

const { data, error, isError } = useQuery({
  queryKey: ['test'],
  queryFn: () => {
    throw new Error('tanstack error');
    return 'query data';
  },
  retry: false,
  useErrorBoundary: true
})
</script>

<template>
  <div>
    {{data}}
    {{error}}
  </div>
</template>

<style scoped>

</style>