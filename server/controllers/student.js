import StudentData from "../models/student.js";


export const getStudents = async (req, res) => {
    try {
        const allStudents = await StudentData.find();

        res.status(200).json(allStudents);

    } catch (error) {
        res.status(404).json({ message: error.message })

    }

    // file comes from react in the form of json and goes to the node in the form of json
    export const createStudent = async (req, res) => {
        const student = req.body;

        const newStudent = new StudentData(student);

        // file is saved in database as a json file
        try {
           await newStudent.save();
           res.status(201).json(newStudent);

        } catch (error) {
            res.status(409).json({message: error.message});

        }
    }

    export const deleteStudent = async (req, res)=> {
        const id = req.params.id;

        try{
           await StudentData.findByIdAndRemove(id).exec();
           res.send('Successfully Deleted!') 
        }catch (error) {
            console.log(error);
        }
    }
}


