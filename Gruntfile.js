module.exports = function (grunt) {
	require('jit-grunt')(grunt);

	grunt.loadNpmTasks('grunt-git');
	grunt.loadNpmTasks('grunt-mocha-test');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		mochaTest: {
			test: {
				options: {
					reporter: 'spec',
					captureFile: 'results.txt', // Optionally capture the reporter output to a file
					quiet: false, // Optionally suppress output to standard out (defaults to false)
					clearRequireCache: false // Optionally clear the require cache before running tests (defaults to false)
				},
				src: ['test/**/*.js']
			}
		},
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"./public/css/main.css": ["./public/less/bootstrap.less", "./public/less/main.less"] // destination file and source file
				}
			}
		},
		watch: {
			styles: {
				files: ['./public/less/**/*.less'], // which files to watch
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		},
		gitpush: {
			master: {
				options: {
					verbose: true,
					branch: 'master',
					remote: 'github'
				}
			},
			staging: {
				options: {
					verbose: true,
					branch: 'staging',
					remote: 'github'
				}
			},
			openshift: {
				options: {
					verbose: true,
					branch: 'staging',
					remote: 'openshift-tst'
				}
			}
		}
	});

	grunt.registerTask('run-tests', ['mochaTest']);
	grunt.registerTask('openshift-test-deploy', ['openshift_tst_deploy']);
	grunt.registerTask('github-push-master', ['gitpush:master']);
	grunt.registerTask('github-push-staging', ['gitpush:staging']);
	grunt.registerTask('github-push-openshift', ['gitpush:openshift']);
	grunt.registerTask('watch-less', ['watch']);
	grunt.registerTask('compile-less', ['less']);
};
