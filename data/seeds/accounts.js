exports.seed = function(knex, Promise) {
  return knex('accounts').truncate()
    .then(function () {
      // add data into insert
      return knex('accounts').insert([
        { name: 'Bob Smith', budget: 10000 },
        { name: 'Richard Smith', budget: 40400 },
        { name: 'Mickey Mouse', budget: 80800 },
        { name: 'Fred Flintstone', budget: 20200 },
        { name: 'Peter Griffin', budget: 3500 },
        { name: 'Homer Simpson', budget: 17 },
        
      ]);
    });
};
