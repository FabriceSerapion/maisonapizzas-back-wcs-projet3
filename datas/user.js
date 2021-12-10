const bcrypt = require('bcryptjs');

module.exports = async db => {
  const User = db.user;
  await User.create({
    id: 1,
    email: 'yavuz.kutuk@wildcodeschool.com',
    password: bcrypt.hashSync('yavuz', 8),
    status: 1,
    civility: 1,
    lastname: 'KUTUK',
    firstname: 'Yavuz',
    phone: '0600000000',
    lastConnect: Date.now(),
    lastIp: '192.168.0.1',
    isVerified: 1,
    roleId: 3,
  });
};
