define("test/sampleModule/0.0.1/module",[],function(a,b){b.get=function(a){return $(a)}}),define("test/sampleModule/0.0.1/debugRequire",["./module"],function(a,b){var c=a("./module.js"),d=a("./module");b.say=function(){c.get(),d.get()}});