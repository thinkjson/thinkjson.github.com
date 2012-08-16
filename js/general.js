/*globals $ window document */
var tiemonster = {
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
            $.getScript("https://api.github.com/users/thinkjson/repos?callback=render_github_projects")
        });
    },

    render_github_projects: function(data) {
        $projects.html("");
        $.each(data.repositories, function (project_iterator, project) {
            var $div = $("<div />").text(project.description)
                .appendTo($projects);
            if (project.fork === true) {
                $div.addClass('fork');
            }
            if ((new Date() - new Date(project.updated_at))/1000/60/60/24 > 90) {
                $div.addClass('active');
            } else {
                $div.addClass('inactive');
            }
            var $header = $("<h2 />").prependTo($div);
            $("<a />").text(project.description)
                .attr({ href: project.url })
                .appendTo($header);
        });
    },
    
    select_name: function() {
        $('input[name="name"]').focus();
    },
    
    init: function() {
        for (var i in tiemonster.path_specs) {
            if (window.location.pathname.toLowerCase()
                    .indexOf(tiemonster.path_specs[i].path) !== -1) {
                tiemonster[tiemonster.path_specs[i].init]();
            }
        }
    }
};

tiemonster.init();