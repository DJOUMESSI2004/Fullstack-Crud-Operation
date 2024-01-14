const TaskModel = require('../models/TaskModel');

module.exports.getTasks = async (req, res) => {
    const tasks = await TaskModel.find()
    res.send(tasks);
    // res.json("hello world");
}

module.exports.saveTasks =  (req, res) => {
    const {task} = req.body
    TaskModel.create({task})
    .then((data) => {
        console.log("successful added task....")
        res.status(201).send(data);
    }).catch((err) => {
        console.log(err)
        res.send({error: err, msg:"Something Went Wrong !"})
    })
}

module.exports.updateTask = (req, res) => {
  const { id } = req.params;
  const { task } = req.body; // Assuming task is in the request body

  TaskModel.findByIdAndUpdate(id, { task })
    .then((data) => {
      res.status(201).send("Updated Successfully!");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send({ error: err, msg: "Something Went Wrong!" });
    });
};


module.exports.deleteTask = (req, res) => {
  const { id } = req.params;

  TaskModel.findByIdAndDelete(id)
    .then(() => {
      console.log("Successfully Deleted!");
      res.status(200).send({ message: 'Successfully Deleted!' });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send({ error: err, message: 'Something Went Wrong!' });
    });
};
