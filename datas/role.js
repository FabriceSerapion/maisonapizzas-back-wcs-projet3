module.exports = async db => {
  const Role = db.role;
  await Role.create({
    id: 1,
    name: 'ROLE_USER',
  });

  await Role.create({
    id: 2,
    name: 'ROLE_MODERATOR',
  });

  await Role.create({
    id: 3,
    name: 'ROLE_ADMIN',
  });
};
