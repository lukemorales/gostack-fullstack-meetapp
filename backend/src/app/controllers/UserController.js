import * as Yup from 'yup';

import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string()
        .required()
        .min(6),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    try {
      const userExists = await User.findOne({
        where: { email: req.body.email },
      });

      if (userExists) {
        return res.status(400).json({ error: 'User already exists' });
      }

      const user = await User.create(req.body);

      const { id, name, email } = user;

      return res.status(201).json({
        id,
        name,
        email,
      });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string()
        .min(6)
        .when('password', (password, field) =>
          password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    try {
      const { email, oldPassword } = req.body;

      const user = await User.findByPk(req.userID);

      if (email !== user.email) {
        const userExists = await User.findOne({
          where: { email },
        });

        if (userExists) {
          return res.status(400).json({ error: 'User already exists' });
        }
      }

      if (oldPassword && !(await user.checkPassword(oldPassword))) {
        return res.status(401).json({ error: 'Old Password does not match' });
      }

      const { id, name } = await user.update(req.body);

      return res.status(200).json({ id, name, email });
    } catch (err) {
      return res.status(400).json(err.message);
    }
  }
}

export default new UserController();
