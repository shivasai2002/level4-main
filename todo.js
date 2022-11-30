const todoList = () => {
    let all = [];
    const add = (todoItem) => {
      all.push(todoItem);
    };
    const markAsDone = (index) => {
      all[index].completed = true;
    };
  
    const over_Due = () => {
      return all.filter(
        (item) => item.dueDate < new Date().toLocaleDateString("en-CA")
      );
    };
  
    const dueToday = () => {
      return all.filter(
        (item) => item.dueDate === new Date().toLocaleDateString("en-CA")
      );
    };
  
    const dueLater = () => {
      return all.filter(
        (item) => item.dueDate > new Date().toLocaleDateString("en-CA")
      );
    };
    return { all, add, markAsDone, over_Due, dueToday, dueLater };
  };
  
  module.exports = todoList;