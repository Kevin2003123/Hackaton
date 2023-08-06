const { User, Location } = require("../db");
const axios = require("axios");
const FormData = require("form-data"); // Import the form-data library

const validateUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    const formHeaders = formData.getHeaders();

    const { data } = await axios.post(
      "https://hackathon.voiceteamcall.com?token=dGVhbTA1OmE4bGJxMGI2MQ==",
      formData,
      {
        headers: {
          ...formHeaders,
        },
      }
    );

    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      include: [
        {
          model: Location,
          attributes: ["id", "city"],
        },
      ],
    });
    {
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserByUserName = async (req, res) => {
  try {
    const { user } = req.body;
    const response = await User.findOne({
      where: { user },
      include: [
        {
          model: Location,
          attributes: ["id", "city"],
        },
      ],
    });



    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id);
    const deletedUser = await user.update({
      state: false,
    });

    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const insertUser = async (req, res) => {
  try {
    const { name, isAdmin, password } = req.body;
    const user = await User.create({ name, isAdmin, password });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { isAdmin } = req.body;
    if (typeof isAdmin !== "boolean") {
      res.status(500).json({ error: "Missing a value" });
    }

    const user = await User.findByPk(id);

    await user.update({ isActive });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const fillUser = async (User) => {
  try {
    await User.bulkCreate([
      { user: "user1", LocationId: 1, amount: 1500 },
      { user: "user2", LocationId: 2, amount: 2000 },
      { user: "user3", LocationId: 3, amount: 3000 },
      { user: "user4", LocationId: 4, amount: 4000 },
    ]);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getUsers,
  deleteUser,
  insertUser,
  updateUser,
  fillUser,
  validateUser,
  getUserByUserName
};
