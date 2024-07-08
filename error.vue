<template>
    <div>
      <p>{{error.statusCode}}</p>
      <p>Ooops.</p>
      <p>{{error.message}}</p>
      <button @click="handleError">Go Home...</button>
    </div>
  </template>
  
  <script setup>
    defineProps({
      error: Object
    })
  
    const handleError = () => clearError({ redirect: '/' })
  </script>