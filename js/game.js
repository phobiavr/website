(function ($) {
    function qs(name) {
        var m = window.location.search.match(new RegExp('[?&]' + name + '=([^&]+)'));
        return m ? decodeURIComponent(m[1]) : null;
    }

    function mediaUrl(rel) {
        if (!rel) return '';
        if (/^https?:\/\//i.test(rel)) return rel;
        return API_URL + (rel.charAt(0) === '/' ? '' : '/') + rel;
    }

    function youtubeEmbed(url) {
        if (!url) return '';
        var m = url.match(/[?&]v=([^&]+)/) || url.match(/youtu\.be\/([^?&]+)/);
        return m ? 'https://www.youtube.com/embed/' + m[1] : '';
    }

    function escapeHtml(str) {
        return String(str == null ? '' : str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    var id = qs('id');
    if (!id) {
        $('.page-heading').text('Oyun tapılmadı (id təyin edilməyib)');
        return;
    }

    $.ajax({
        url: API_URL + '/hardware/games/' + encodeURIComponent(id),
        method: 'GET',
        dataType: 'json'
    }).done(function (g) {
        if (!g || !g.id) {
            $('.page-heading').text('Oyun tapılmadı');
            return;
        }

        document.title = g.name + ' — Phobia VR';
        $('.page-heading').text(g.name || '');

        var embed = youtubeEmbed(g.video);
        if (embed) {
            $('.youtube-player iframe').attr('src', embed);
        } else {
            $('.youtube-player').hide();
        }

        var $gallery = $('.game-gallery');
        $gallery.empty();
        if (g.preview) {
            $gallery.append('<li><img src="' + mediaUrl(g.preview) + '" alt=""></li>');
        } else {
            $gallery.hide();
        }

        var paragraphs = String(g.description || '')
            .split(/\n+/)
            .filter(function (p) { return p.trim().length; })
            .map(function (p) { return '<p class="p">' + escapeHtml(p) + '</p>'; })
            .join('');
        $('.game-descr .text').html(paragraphs || '<p class="p"></p>');

        var genres  = (g.genres || []).map(function (x) { return x.name; }).join(', ');
        var devices = (g.device || []).map(function (x) { return x.name; }).join(', ');

        var $list = $('.game-descr .options ul.list');
        $list.empty();
        if (genres)  $list.append('<li><span>Janr: </span><span>' + escapeHtml(genres) + '</span></li>');
        if (devices) $list.append('<li><span>Cihazlar: </span><span>' + escapeHtml(devices) + '</span></li>');
        $list.append('<li><span>Oyunçu sayı: </span><span>' + (g.multiplayer ? 'Multiplayer' : '1') + '</span></li>');
        if (typeof g.rating !== 'undefined' && g.rating !== null) {
            $list.append('<li><span>Reytinq: </span><span>' + escapeHtml(g.rating) + ' / 5</span></li>');
        }
    }).fail(function (xhr) {
        $('.page-heading').text('Oyun yüklənmədi (' + (xhr && xhr.status) + ')');
        if (window.console) {
            console.error('Game fetch failed', xhr && xhr.status, xhr && xhr.statusText, 'API_URL=' + API_URL, 'id=' + id);
        }
    });
})(jQuery);
