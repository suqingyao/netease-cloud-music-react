const apis = import.meta.glob('@/api/modules/*.ts', {
  eager: true
})

console.log(apis)

// export
