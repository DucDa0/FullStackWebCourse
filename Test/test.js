const DucDao_SECRET_KEY = 96;
const QuinQuin_SECRET_KEY = 1710;

const SERVER_KEY = 113;

const DucDao_PUBLIC_KEY = DucDao_SECRET_KEY + SERVER_KEY; // 96 + 113
const QuinQuin_PUBLIC_KEY = QuinQuin_SECRET_KEY + SERVER_KEY; // 1710 + 113

const DucDao_COMMON_KEY = QuinQuin_PUBLIC_KEY + DucDao_SECRET_KEY; // 1710 + 113 + 96
const QuinQuin_COMMON_KEY = DucDao_PUBLIC_KEY + QuinQuin_SECRET_KEY; // 96 + 113 + 1710

console.log('DucDao_COMMON_KEY: ', DucDao_COMMON_KEY)
console.log('QuinQuin_COMMON_KEY: ', QuinQuin_COMMON_KEY)