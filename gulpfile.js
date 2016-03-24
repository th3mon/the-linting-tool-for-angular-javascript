var gulp = require('gulp');
var eslint = require('gulp-eslint');
var stylish = require('jshint-stylish');
var angularPlugin = require('eslint-plugin-angular');
var config =
    {
        apps: ['app/**/*.js'],
        html: ['*.html', 'app/**/*.html']
    };


gulp.task('validateSyntax-eslint', [], function () {
    return gulp.src(config.apps)
    .pipe(eslint(
        {
            "extends": ["eslint:recommended"],
            "plugins": ["angular"],
            "env": {
                "browser": true
            },

            "globals": {
                'jQuery': true,
                '$': true,
                "angular": true,
                "app":true
            },
            'rules': {
                'quotes': [0, 'single'],
                'semi': [2, 'always'],
                'no-unused-vars': 1,
                'no-console': 0,
                "angular/controller-name": [1, "/[A-Z].*Controller$/"],


            }
        }))
    .pipe(eslint.format())
});

