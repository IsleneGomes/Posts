const interview = {
  age: 20,
  name: 'Fulano',
  status: 'Test',
};

const hiring = [interview, interview.status['Hired'], interview];
// hiring[1].status = 'Hired';
console.log(hiring[1].status);