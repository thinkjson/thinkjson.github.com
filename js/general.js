/*globals $ window document */
var thinkjson = {
    // define your oft-used settings below
    settings: {

    },
    
    path_specs: [
        { path: "open-source", init: "fetch_github_projects" },
        { path: "contact", init: "select_name" }
    ],

    fetch_github_projects: function () {
        $(document).ready(function () {
            $projects = $("#projects");
            $projects.html("Loading projects...");
            $.getScript("https://api.github.com/users/thinkjson/repos?callback=thinkjson.render_github_projects")
        });
    },

    render_github_projects: function(data) {
        $projects.html("");
        $.each(data.data, function (project_iterator, project) {
            var $div = $("<div />").html("Language: " + project.language +
                "<br />" + project.description)
                .appendTo($projects);
            $div.addClass('project');
            if (project.fork === true) {
                $div.addClass('fork');
            }
            if ((new Date() - new Date(project.updated_at))/1000/60/60/24 > 90) {
                $div.addClass('inactive');
            } else {
                $div.addClass('active');
            }
            var $header = $("<h3 />").prependTo($div);
            $("<a />").text(project.name)
                .attr({ href: project.url })
                .appendTo($header);
        });
    },
    
    select_name: function() {
        $('input[name="name"]').focus();
    },
    
    init: function() {
        for (var i in thinkjson.path_specs) {
            if (window.location.pathname.toLowerCase()
                    .indexOf(thinkjson.path_specs[i].path) !== -1) {
                thinkjson[thinkjson.path_specs[i].init]();
            }
        }
    }
};

thinkjson.init();