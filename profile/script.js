/*let loadRepo = new XMLHttpRequest();
loadRepo.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let myResult = JSON.parse(this.responseText);
        document.getElementById("pasteHere").innerHTML = myResult[1].svn_url;
        
    }
}
loadRepo.open("GET", "https://api.github.com/users/kevinfrohlich/repos", true);
loadRepo.send();*/

function loadRepos() {
	$('#repos').empty();
	let url = 'https://api.github.com/users/kevinfrohlich/repos';
	$.ajax({
		url,
		success: displayRepos
	});
	function displayRepos(respos) {
		for (let repo of respos) {
			let link = $('<a>').text(repo.full_name);
			link.attr('href', repo.html_url);
			$('#repos').append($('<li>').append(link));
		}
	}
}

$(document).ready(function() {
	$('.git').hover(function() {
		$(this).attr('src', 'images/octocat1.png');
		$(this).css('height', '35px');
	});
		$('.git').mouseleave(function() {
		$(this).attr('src', 'images/GitHub-Light.png');
		$(this).css('height', '35px');
	});
});

$(document).ready(function() {
	$('.linkin').hover(function() {
		$(this).attr('src', 'images/in1.png');
		$(this).css('height', '35px');
	});
	$('.linkin').mouseleave(function() {
		$(this).attr('src', 'images/link-white.png');
		$(this).css('height', '35px');
	});
});

$(document).ready(function() {
	$('.face').hover(function() {
		$(this).attr('src', 'images/face1.png');
		$(this).css('height', '35px');
	});
	$('.face').mouseleave(function() {
		$(this).attr('src', 'images/face-white.png');
		$(this).css('height', '35px');
	});
});

$(document).ready(function() {
	$('.insta').hover(function() {
		$(this).attr('src', 'images/insta1a.png');
		$(this).css('height', '35px');
	});
	$('.insta').mouseleave(function() {
		$(this).attr('src', 'images/in-white.png');
		$(this).css('height', '35px');
	});
});

/*$(document).ready(function () {
    $(".git").hover(function () {
        $(this).css("height", "50px");
    });
    $(".git").mouseleave(function () {
        $(this).css("height", "25px");
    });
});

$(document).ready(function () {
    $(".linkin").hover(function () {
        $(this).css("height", "50px");
    });
    $(".linkin").mouseleave(function () {
        $(this).css("height", "25px");
    });
});

$(document).ready(function () {
    $(".face").hover(function () {
        $(this).css("height", "50px");
    });
    $(".face").mouseleave(function () {
        $(this).css("height", "25px");
    });
});

$(document).ready(function () {
    $(".insta").hover(function () {
        $(this).css("height", "50px");
    });
    $(".insta").mouseleave(function () {
        $(this).css("height", "25px");
    });
});*/
