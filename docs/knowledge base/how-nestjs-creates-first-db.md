It has

```
TypeOrmModule.forRoot({
  synchronize: true,
  ...
})
```

This parameter tells a Next.js that all changes made in the Nest.js entities should be immediatley provided to a database.
