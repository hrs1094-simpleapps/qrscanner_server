
const pool = require("../config/db.config");

// Create and Save a new Tutorial
exports.findAll = async (req, res) => {

    //console.log("cal recieved 2");
    try {
        pool.query('SELECT * FROM tutorial', function (error, results) {
            //console.log(error, results);
            if (results) {
                res.status(200).send(results.rows);
            } else {
                res.status(200).send({ message: "Request Failed!" });
            }

        });
    } catch (e) {
        console.error(e.message);
        res.status(400).send({
            message: e.message
        });
    }
    return;
    /* // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const tutorial = {
        title: req.body.title,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    };

    // Save Tutorial in the database
    Tutorial.create(tutorial)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Tutorial."
            });
        }); */
};

// Retrieve all Tutorials from the database.
exports.create = (req, res) => {

    console.log(req.body);
    if (!req.body.uuid || !req.body.model || !req.body.brand ||  !req.body.device ) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }
    try {
        pool.query('INSERT INTO tutorial (title, description, published) values($1, $2, $3)', 
        [req.body.uuid, req.body.device+" : "+req.body.model+" : "+req.body.brand, 0], function (error, results) {
           // console.log(error, results.rows);
            if (results) {
                res.status(200).send(results.rows);
            } else {
                res.status(500).send({ message: "Request Failed!" });
            }

        });
    } catch (e) {
        console.error(e.message);
        res.status(400).send({
            message: e.message
        });
    }
    return;
    /*  const title = req.query.title;
     var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
 
     Tutorial.findAll({ where: condition })
         .then(data => {
             res.send(data);
         })
         .catch(err => {
             res.status(500).send({
                 message:
                     err.message || "Some error occurred while retrieving tutorials."
             });
         }); */

};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    /*  const id = req.params.id;
 
     Tutorial.findByPk(id)
         .then(data => {
             res.send(data);
         })
         .catch(err => {
             res.status(500).send({
                 message: "Error retrieving Tutorial with id=" + id
             });
         }); */

};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
    /* const id = req.params.id;

    Tutorial.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "Tutorial was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Tutorial with id=" + id
            });
        }); */

};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    /*  const id = req.params.id;
 
     Tutorial.destroy({
         where: { id: id }
     })
         .then(num => {
             if (num == 1) {
                 res.send({
                     message: "Tutorial was deleted successfully!"
                 });
             } else {
                 res.send({
                     message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
                 });
             }
         })
         .catch(err => {
             res.status(500).send({
                 message: "Could not delete Tutorial with id=" + id
             });
         }); */
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    /*     Tutorial.destroy({
            where: {},
            truncate: false
        })
            .then(nums => {
                res.send({ message: `${nums} Tutorials were deleted successfully!` });
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while removing all tutorials."
                });
            }); */
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
    /*   Tutorial.findAll({ where: { published: true } })
          .then(data => {
              res.send(data);
          })
          .catch(err => {
              res.status(500).send({
                  message:
                      err.message || "Some error occurred while retrieving tutorials."
              });
          }); */
};
