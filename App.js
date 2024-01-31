
const Person = props => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('p', {}, props.occupation)

  ])
}
const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', { class: 'title' }, 'React IS rendered'),
    React.createElement(Person, {name: 'Shafi', occupation: 'Billionare'}, null),
    React.createElement(Person, {name: 'Buck', occupation: 'Night Keeper'}, null),
    React.createElement(Person, {name: 'Hana', occupation: 'House Keeper'}, null),
  ]);
};

const contianer = document.getElementById('root');
const root = ReactDOM.createRoot(contianer);
root.render(React.createElement(App));
