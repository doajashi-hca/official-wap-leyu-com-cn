(function() {
    var CONFIG = {
        siteUrl: "https://official-wap-leyu.com.cn",
        keyword: "乐鱼体育",
        cardTitle: "欢迎访问提示",
        badgeText: "官方推荐",
        instructions: [
            "使用最新版浏览器访问以获得最佳体验",
            "请确保网络连接稳定",
            "如遇加载问题，可尝试刷新页面"
        ]
    };

    function createCard() {
        var card = document.createElement("div");
        card.style.cssText = "position:fixed;bottom:20px;right:20px;background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;padding:16px 20px;max-width:320px;box-shadow:0 4px 12px rgba(0,0,0,0.1);font-family:sans-serif;z-index:9999;";
        var title = document.createElement("h3");
        title.textContent = CONFIG.cardTitle;
        title.style.cssText = "margin:0 0 8px 0;font-size:16px;color:#0369a1;";
        card.appendChild(title);
        var link = document.createElement("a");
        link.href = CONFIG.siteUrl;
        link.target = "_blank";
        link.textContent = CONFIG.keyword;
        link.style.cssText = "display:inline-block;background:#0284c7;color:#fff;padding:6px 14px;border-radius:20px;text-decoration:none;font-weight:bold;font-size:14px;margin-bottom:10px;";
        card.appendChild(link);
        var list = document.createElement("ul");
        list.style.cssText = "margin:0;padding:0 0 0 16px;list-style:disc;";
        CONFIG.instructions.forEach(function(text) {
            var item = document.createElement("li");
            item.textContent = text;
            item.style.cssText = "font-size:13px;color:#475569;margin:4px 0;";
            list.appendChild(item);
        });
        card.appendChild(list);
        var badge = document.createElement("span");
        badge.textContent = CONFIG.badgeText;
        badge.style.cssText = "display:inline-block;background:#fbbf24;color:#1e3a5f;padding:2px 10px;border-radius:12px;font-size:12px;font-weight:bold;margin-top:10px;";
        card.appendChild(badge);
        document.body.appendChild(card);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", createCard);
    } else {
        createCard();
    }
})();