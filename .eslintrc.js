module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": [1, {"extensions": [".js", ".jsx"]}],
        "react/prop-types": "off",
        "react/jsx-props-no-spreading": ["error", {
            "html": "ignore",
            "custom": "ignore",
            "exceptions": [""]
          }],
        "react/react-in-jsx-scope": "off",
        "import/no-unresolved": "off"
    }
};
