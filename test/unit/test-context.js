var context = require.context('./test/unit', true, /-spec\.js$/);
context.keys().forEach(context);