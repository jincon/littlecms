CG = {
    
    log: function() {
        if (console) {
            console.log(arguments)
        }
    },
    id: 1,
    getId: function() {
        return this.id++
    },
    max: function() {
        var b = arguments.length;
        if (b > 0) {
            var a = arguments[0];
            for (var c = 1; c < b; c++) {
                if (a < arguments[c]) {
                    a = arguments[c]
                }
            }
        }
        return a
    },
    min: function() {
        var a = arguments.length;
        if (a > 0) {
            var c = arguments[0];
            for (var b = 1; b < a; b++) {
                if (c > arguments[b]) {
                    c = arguments[b]
                }
            }
        }
        return c
    },
    merge: function() {
        var b = arguments.length,
        e = new Array();
        for (var d = 0; d < b; d++) {
            var a = arguments[d].length;
            for (var c = 0; c < a; c++) {
                e.push(arguments[d][c])
            }
        }
        return e
    },
    isInvalid: function(a) {
        if (typeof a === "undefined") {
            return true
        } else {
            if (typeof a === "object" && a == undefined) {
                return true
            }
        }
        return false
    },
    objToStr: function(c) {
        var b = [];
        if (typeof c == "string") {
            return '"' + c.replace(/([\'\"\\])/g, "\\$1").replace(/(\n)/g, "\\n").replace(/(\r)/g, "\\r").replace(/(\t)/g, "\\t") + '"'
        }
        if (typeof c == "object") {
            if (!c.sort) {
                for (var a in c) {
                    b.push(a + ":" + CUST.objToStr(c[a]))
                }
                if ( !! document.all && !/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(c.toString)) {
                    b.push("toString:" + c.toString.toString())
                }
                b = "{" + b.join() + "}"
            } else {
                for (var a = 0; a < c.length; a++) {
                    b.push(CUST.objToStr(c[a]))
                }
                b = "[" + b.join() + "]"
            }
            return b
        }
        return c.toString()
    },
    strToObj: function(data) {
        try {
            if ($.type(data) == "string") {
                return eval("(" + data + ")")
            } else {
                return data
            }
        } catch(e) {
            return {}
        }
    },
    aryToObj: function(d, b) {
        if (!b || b.length < 1) {
            return {}
        }
        var f = {},
        c = d.length,
        a = b.length;
        for (var e = 0; e < c; e++) {
            if (a == 1) {
                f[d[e]] = b[0]
            } else {
                f[d[e]] = b[e]
            }
        }
        return f
    },
    aryToStr: function(b, c) {
        var a = typeof b;
        if (!b || a !== "object" || b.length == undefined) {
            if (a === "string" || a === "number") {
                return b
            }
            return ""
        }
        return b.join(c)
    },
    getTwoLen: function(a) {
        a = a.toString();
        if (a.length == 1) {
            return "0" + a
        } else {
            return a
        }
    },
    trans: function(a) {
        return a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
    },
    encode: function(a) {
        return a.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll(" ", "&nbsp;")
    },
    stripHtml: function(a) {
        return a.replace(/<.[^<>]*?>/g, "").replace(/&nbsp;|&#160;/gi, "").replace(/[.(),;:!?%#$'"_+=\/-]*/g, "")
    },
    htmlToText: function(a) {
        return a.replace(/<.[^<>]*?>/g, "").replace(/&nbsp;|&#160;/gi, "").replace(/\s/g, "")
    },
    isOverAxis: function(a, b, c) {
        return (a >= b) && (a <= (b + c))
    },
    getUrlWithParams: function(b, e) {
        var a = false;
        if (e) {
            if (b.indexOf("?") === -1) {
                b += "?";
                a = true
            }
            var c = 0;
            for (var d in e) {
                if (a && c == 0) {} else {
                    b += "&"
                }
                b += d + "=" + e[d];
                c++
            }
        }
        return b
    },
    getUrlWithoutParams: function(a) {
        if (!a) {
            a = window.location.href
        }
        var b = a.indexOf("?");
        if (b !== -1) {
            return a.substr(0, b)
        }
        return a
    },
    getAnchorByUrl: function(a) {
        if (!a) {
            a = window.location.href
        }
        return a.substr(a.indexOf("#") + 1)
    },
    getParamsByUrl: function(a) {
        if (!a) {
            a = window.location.href
        }
        a = a.substring(0, a.indexOf("#"));
        var e = {},
        d = a.substr(a.indexOf("?") + 1),
        f = d.split("&");
        for (var b = f.length - 1; b >= 0; b--) {
            var c = f[b].split("=");
            e[c[0]] = c[1]
        }
        return e
    }
};
CG.CONST = {
    MASK_HTML: '<div class="cg-mask"></div>',
    OVERLAY_HTML: '<div class="cg-overlay"></div>',
    TOLLTIP_HTML: '<div class="cg-tooltips"><div class="cg-tooltips-arrow"></div><div class="cg-tooltips-message"></div></div>',
    SLIDER_HTML: '<div class="cg-slider clearfix"><div class="cg-slider-left"></div><div class="cg-slider-range-container"><div class="cg-slider-range"></div></div><div class="cg-slider-right"></div><div class="cg-slider-handler"></div></div>',
    SELECT_HTML: '<div class="cg-select"><div class="cg-select-name"></div><div class="cg-option"><ul></ul></div></div>',
    TIPS_HTML: '<div class="cg-tips"><div class="cg-tips-info"></div></div>',
    BUTTON_HTML: '<a class="cg-button"><div class="cg-button-left"></div><div class="cg-button-inner"><div class="cg-button-icon"></div><div class="cg-button-text"></div><div class="cg-button-role"></div></div><div class="cg-button-right"></div></a>',
    DIALOG_HTML: '<div class="cg-dialog"><div class="cg-dialog-header"><div class="cg-dialog-close"></div><div class="cg-dialog-maximize"></div><div class="cg-dialog-minimize"></div><span class="cg-dialog-title"></span></div><div class="cg-dialog-body"><div class="cg-dialog-content-container"><div class="cg-dialog-content clearfix"></div></div></div><div class="cg-dialog-button-container clearfix"><span class="cg-dialog-button clearfix"></span></div><!--<div class="cg-dialog-resize-l"></div><div class="cg-dialog-resize-r"></div><div class="cg-dialog-resize-t"></div><div class="cg-dialog-resize-b"></div><div class="cg-dialog-resize-lt"></div><div class="cg-dialog-resize-rt"></div><div class="cg-dialog-resize-lb"></div>--><div class="cg-dialog-resize-rb"></div><div class="cg-dialog-popup-close"></div></div>',
    AUTOCOMPLETE_HTML: '<div class="cg-autocomplete"><ul></ul></div>',
    TIMEPICKER_HTML: '<div class="cg-timepicker"><table><tr><td class="cg-timepicker-td-hour"><a class="cg-timepicker-arrow cg-timepicker-hour-up"><i class="cg-timepicker-arrow-up"></i></a></td><td class="cg-timepicker-separator"></td><td class="cg-timepicker-td-minute"><a class="cg-timepicker-arrow cg-timepicker-minute-up"><i class="cg-timepicker-arrow-up"></i></a></td><td class="cg-timepicker-separator"></td><td class="cg-timepicker-td-second"><a class="cg-timepicker-arrow cg-timepicker-second-up"><i class="cg-timepicker-arrow-up"></i></a></td></tr><tr><td class="cg-timepicker-td-hour"><input type="text"class="cg-timepicker-input cg-timepicker-hour"title="时"/></td><td class="cg-timepicker-separator">:</td><td class="cg-timepicker-td-minute"><input type="text"class="cg-timepicker-input cg-timepicker-minute"title="分"/></td><td class="cg-timepicker-separator">:</td><td class="cg-timepicker-td-second"><input type="text"class="cg-timepicker-input cg-timepicker-second"title="秒"/></td></tr><tr><td class="cg-timepicker-td-hour"><a class="cg-timepicker-arrow cg-timepicker-hour-down"><i class="cg-timepicker-arrow-down"></i></a></td><td class="cg-timepicker-separator"></td><td class="cg-timepicker-td-minute"><a class="cg-timepicker-arrow cg-timepicker-minute-down"><i class="cg-timepicker-arrow-down"></i></a></td><td class="cg-timepicker-separator"></td><td class="cg-timepicker-td-second"><a class="cg-timepicker-arrow cg-timepicker-second-down"><i class="cg-timepicker-arrow-down"></i></a></td></tr><tr><td colspan="5"style="text-align:right"><input type="button"class="cg-timepicker-button"id="cg-timepicker-clear"value="清空"/><input type="button"class="cg-timepicker-button"id="cg-timepicker-confirm"value="确定"/></td></tr></table></div>'
};
CG.CONFIG = {
    CALENDAR_DATEFORMAT: "yyyy-MM:dd hh:mm:ss",
    CALENDAR_WEEKS: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    CALENDAR_SHORTWEEKS: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    CALENDAR_MONTHS: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    CALENDAR_SHORTMONTHS: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    CALENDAR_TIMENAME: ["hour", "minute", "second"],
    CALENDAR_BUTTONS: ["clear", "today", "ok"],
    CALENDAR_STARTWEEK: 0,
    TIMEPICKER_BUTTONS: ["clear", "ok"],
    TIMEPICKER_INPUT_TIPS: ["hour", "minute", "second"]
}; (function(a) {
    a.extend(String.prototype, {
        trim: function() {
            return this.replace(/(^\s*)|(\s*$)|\r|\n/g, "")
        },
        replaceAll: function(c, b) {
            return this.replace(new RegExp(c, "gm"), b)
        },
        startsWith: function(b) {
            return this.indexOf(b) === 0
        },
        endsWith: function(b) {
            var c = this.length - b.length;
            return c >= 0 && this.lastIndexOf(b) === c
        },
        isValidPassword: function() {
            return (new RegExp(/^([_]|[a-zA-Z0-9]){6,32}$/).test(this))
        },
        isEmail: function() {
            return (new RegExp(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/).test(this.trim()))
        },
        isQq: function() {
            return (new RegExp(/^[1-9]\d{4,}$/).test(this))
        },
        isIdcard: function() {
            return (new RegExp(/^\d{15}(\d{2}[A-Za-z0-9])?$/).test(this))
        },
        isChinese: function() {
            return (new RegExp(/^[\u0391-\uFFE5]+$/).test(this))
        },
        isIp: function() {
            return (new RegExp(/^([1-9]\d{0,2}){1}\.([1-9]\d{0,2}){1}\.([1-9]\d{0,2}){1}$/).test(this))
        },
        isSpaces: function() {
            for (var b = 0; b < this.length; b += 1) {
                var c = this.charAt(b);
                if (c != " " && c != "\n" && c != "\t" && c != "\r") {
                    return false
                }
            }
            return true
        },
        isTelphone: function() {
            return (new RegExp(/(^([0-9]{3,4}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0-9]{3,4}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{7,8}$)/).test(this))
        },
        isMobilephone: function() {
            return (new RegExp(/^\d{11}$/).test(this))
        },
        isPhone: function() {
            return (new RegExp(/(^([0-9]{3,4}[-])?\d{3,8}(-\d{1,6})?$)|(^\([0-9]{3,4}\)\d{3,8}(\(\d{1,6}\))?$)|(^\d{7,8}$)|(^\d{11}$)/).test(this))
        },
        isUrl: function() {
            return (new RegExp(/^[a-zA-z]+:\/\/([a-zA-Z0-9\-\.]+)([-\w .\/?%&=:]*)$/).test(this))
        },
        isExternalUrl: function() {
            return this.isUrl() && this.indexOf("://" + document.domain) == -1
        },
        isInteger: function() {
            return (new RegExp(/^-?\d+$/).test(this))
        },
        isPositiveInteger: function() {
            return (new RegExp(/^[1-9]\d*$/).test(this))
        },
        isNegativeInteger: function() {
            return (new RegExp(/^-[1-9]\d*$/).test(this))
        },
        isNumber: function() {
            return (new RegExp(/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/).test(this))
        },
        isNegativeNumber: function() {
            return this.isNumber() && (this < 0)
        },
        isPositiveNumber: function() {
            return this.isNumber() && (this > 0)
        },
        parseDate: function(q) {
            var p = this;
            q = q || "yyyy-mm-dd";
            var g = p.match(/(\d+)/g),
            h = 0,
            c = {};
            q.replace(/(yyyy|yyy|dd|d|mm|m|hh|h|MM|M|ss|s)/g,
            function(r) {
                c[r] = h++
            });
            var n = g[c.yyyy] || (parseInt(g[c.yyy]) + 1900) || 0,
            m = (parseInt(g[c.mm]) - 1) || (parseInt(g[c.m]) - 1) || 0,
            o = g[c.dd] || g[c.d],
            f = g[c.hh] || g[c.h] || 0,
            e = g[c.MM] || g[c.M] || 0,
            b = g[c.ss] || g[c.s] || 0;
            if (o != undefined && o === 0) {
                o = 1
            }
            var d = new Date(n, m, o || 0, f, e, b);
            return d
        }
    });
    a.extend(Date.prototype, {
        format: function(c) {
            var d = "";
            var b = function(e, f) {
                f = f.replace(/yyyy/g, e.getFullYear());
                f = f.replace(/yyy/g, e.getYear());
                f = f.replace(/mm/g, CG.getTwoLen(e.getMonth() + 1));
                f = f.replace(/m/g, e.getMonth() + 1);
                f = f.replace(/dd/g, CG.getTwoLen(e.getDate()));
                f = f.replace(/d/g, e.getDate());
                f = f.replace(/hh/g, CG.getTwoLen(e.getHours()));
                f = f.replace(/h/g, e.getHours());
                f = f.replace(/MM/g, CG.getTwoLen(e.getMinutes()));
                f = f.replace(/M/g, e.getMinutes());
                f = f.replace(/ss/g, CG.getTwoLen(e.getSeconds()));
                f = f.replace(/s/g, e.getSeconds());
                return f
            };
            d = b(this, c);
            return d
        }
    });
    a.extend(Array.prototype, {
        unique: function() {
            var c = {},
            b = this.length;
            for (var e = 0; e < b; e++) {
                var d = this[e];
                if (typeof(c[d]) === "undefined") {
                    c[d] = 1
                }
            }
            this.length = 0;
            for (var e in c) {
                this[this.length] = e
            }
            return this
        },
        del: function(c) {
            var e = new Array(),
            b = this.length;
            for (var d = 0; d < b; d++) {
                if (d != c) {
                    e.push(this[d])
                }
            }
            this.length = 0;
            for (var d = 0; d < b - 1; d++) {
                this[d] = e[d]
            }
            return this
        }
    })
})(jQuery); (function(a) {
    a.cgDialog = {
        close: function() {
            switch (this.settings.effect) {
            case "shake":
                this.ui.dialog.animate({
                    top:
                    -500,
                    opacity: 0
                },
                400,
                function() {
                    a(this).remove()
                });
                break;
            default:
                this.ui.dialog.fadeOut(200,
                function() {
                    a(this).remove()
                });
                break
            }
            if (this.settings.modal) {
                this.ui.dialogOverlay.destory()
            }
        },
        hide: function() {
            this.ui.dialog.fadeOut(200);
            if (this.settings.modal) {
                this.ui.dialogOverlay.disable()
            }
        },
        show: function() {
            this.ui.dialog.fadeIn(200);
            if (this.settings.modal) {
                this.ui.dialogOverlay.enable()
            }
        },
        reload: function(b) {
            var c = this;
            if (c.settings.iframe) {
                if (b) {
                    c.ui.content.find("iframe").attr("src", b)
                } else {
                    c.getIframeWindow().location.reload()
                }
            } else {
                if (b) {
                    c.ui.content.html(c.getContentByAjaxRequest(b))
                } else {
                    c.ui.content.html(c.getContentByAjaxRequest(CG.getUrlWithParams(c.settings.href, c.settings.params)))
                }
            }
        },
        getContentByAjaxRequest: function(b) {
            var c = a.ajax({
                url: b,
                type: "post",
                async: false
            }).responseText;
            return c
        },
        getReturnValue: function(b) {
            return this.getValue(b)
        },
        getValue: function(b) {
            return this.getIframe()[b]
        },
        getIframeWindow: function() {
            return this.getIframe()
        },
        getIframe: function() {
            var b = this;
            if (b.settings.iframe) {
                return b.ui.content.find("iframe")[0].contentWindow
            }
        },
        submitIframeForm: function(c) {
            var b = this.getIframe();
            b.document.getElementById(c).submit()
        },
        addButtons: function(m, e) {
            var h = this;
            if (m && m.length > 0) {
                var d = m.length;
                for (var g = 0; g < d; g++) {
                    var f = m[g];
                    var c = a("<span></span>").appendTo(h.ui.buttonsContainer).cgButton(a.extend({},
                    f, {
                        handler: null
                    }));
                    if (a.isFunction(f.handler)) {
                        c.mousedown(function(b) {
                            b.stopPropagation()
                        });
                        c.click({
                            dialog: h
                        },
                        f.handler)
                    }
                }
            }
            if (!e) {
                a.merge(h.settings.buttons, m)
            }
        },
        removeButton: function(b) {
            var c = this;
            c.ui.buttonsContainer.children("span").eq(b).remove();
            c.settings.buttons.del(b)
        },
        disableButton: function(b) {
            var c = this;
            var d = c.settings.buttons[b].handler;
            c.ui.buttonsContainer.children("span").eq(b).addClass("cg-button-disabled").unbind("click", d)
        },
        enableButton: function(b) {
            var c = this;
            var d = c.settings.buttons[b].handler;
            c.ui.buttonsContainer.children("span").eq(b).removeClass("cg-button-disabled").bind("click", {
                dialog: c
            },
            d)
        },
        setTitle: function(b) {
            this.ui.title.html(b)
        },
        setContent: function(c) {
            var b = this;
            b.ui.content.html(c)
        },
        getContent: function() {
            var b = this;
            return b.ui.content.html()
        }
    };
    a.fn.cgDialog = {
        add: function(b) {
            return a.fn.cgDialog.init(b)
        },
        init: function(c) {
            c = a.extend(true, {
                type: "window",
                id: null,
                dialogClass: null,
                title: "",
                width: 500,
                height: 400,
                iframe: false,
                href: null,
                params: null,
                content: "",
                max: {
                    width: 1440,
                    height: 700
                },
                min: {
                    width: 100,
                    height: 100
                },
                container: null,
                modal: true,
                monitor: false,
                effect: null,
                speed: 500,
                easing: "easeOutElastic",
                fixed: true,
                isClickClose: false,
                draggable: true,
                closable: true,
                resizable: true,
                minimizable: false,
                maximizable: false,
                closeHandler: null,
                minimizeHandler: null,
                maximizeHandler: null,
                buttons: null
            },
            c);
            var d = {},
            b = {};
            d.dialog = a(CG.CONST.DIALOG_HTML);
            d.header = a(".cg-dialog-header", d.dialog);
            d.title = a(".cg-dialog-title", d.dialog);
            d.content = a(".cg-dialog-content", d.dialog);
            d.buttonsContainer = a(".cg-dialog-button", d.dialog);
            d.dragHandler = a(".cg-dialog-header", d.dialog);
            d.container = a(c.container);
            d.closeHandler = a(".cg-dialog-close", d.dialog);
            if (c.type === "popup") {
                d.closeHandler = a(".cg-dialog-popup-close", d.dialog)
            }
            d.minimizeHandler = a(".cg-dialog-minimize", d.dialog);
            d.maximizeHandler = a(".cg-dialog-maximize", d.dialog);
            d.wResizeHandler = a(".cg-dialog-resize-l", d.dialog);
            d.eResizeHandler = a(".cg-dialog-resize-r", d.dialog);
            d.nResizeHandler = a(".cg-dialog-resize-t", d.dialog);
            d.sResizeHandler = a(".cg-dialog-resize-b", d.dialog);
            d.nwResizeHandler = a(".cg-dialog-resize-lt", d.dialog);
            d.neResizeHandler = a(".cg-dialog-resize-rt", d.dialog);
            d.seResizeHandler = a(".cg-dialog-resize-rb", d.dialog);
            d.swResizeHandler = a(".cg-dialog-resize-lb", d.dialog);
            b.ui = d;
            b.settings = c;
            diglog = a.extend(true, b, a.cgDialog);
            b.setTitle(c.title);
            this._setContent(d, c, b);
            b.addButtons(c.buttons, true);
            this._setModal(d, c, b);
            this._initDialog(d, c);
            this._setType(d, c);
            this._effect(d, c);
            this._drag(d, c);
            this._resize(d, c);
            this._close(d, c, b);
            this._minimize(d, c);
            this._maximize(d, c, b);
            return diglog
        },
        _getSize: function(e, b, g, d) {
            var c = {};
            if (e === "auto" && d.iframe) {
                e = d.max.width
            }
            if (b === "auto" && d.iframe) {
                b = d.max.height
            }
            c.width = e;
            c.height = b;
            var h = this._getContentSize(g);
            if (e === "auto") {
                c.width = h.width
            }
            if (b === "auto") {
                this._setContentHeight(h.height, g, d);
                c.height = g.dialog.getSize().outerHeight;
                c = this._getActualSize(c.width, c.height, d)
            } else {
                c = this._getActualSize(c.width, c.height, d)
            }
            var f = this._getContentHeightByDialogHeight(c.height, d);
            this._setContentHeight(f, g, d);
            if (d.type === "msgbox") {
                c.height = "auto"
            }
            return c
        },
        _getActualSize: function(e, b, d) {
            var c = {};
            c.width = e;
            c.height = b;
            if (e > d.max.width) {
                c.width = d.max.width
            } else {
                if (e < d.min.width) {
                    c.width = d.min.width
                }
            }
            if (b > d.max.height) {
                c.height = d.max.height
            } else {
                if (b < d.min.height) {
                    c.height = d.min.height
                }
            }
            var b = a(window).height(),
            e = a(window).width();
            if (c.height > b) {
                c.height = b
            }
            if (c.width > e) {
                c.width = e - (d.type === "popup" ? 30 : 0)
            }
            return c
        },
        _getContentSize: function(c) {
            var b = c.content.getSize();
            return {
                width: b.outerWidth,
                height: b.outerHeight
            }
        },
        _getContentHeightByDialogHeight: function(b, c) {
            if (c.type === "popup") {
                return b - ((c.buttons && c.buttons.length > 0) ? 35 : 0)
            } else {
                return b - 30 - ((c.buttons && c.buttons.length > 0) ? 35 : 0) - 12
            }
        },
        _setContentHeight: function(b, d, c) {
            if (c.type === "window" || c.type === "popup") {
                d.content.parent().height(b);
                if (c.iframe && c.href) {
                    d.content.find("iframe").attr("height", b).height(b);
                    d.content.height(b)
                }
            }
        },
        _setContent: function(d, c, b) {
            if (c.href) {
                if (c.iframe) {
                    d.content.html('<iframe width="100%" frameborder="0"></iframe>')
                }
                b.reload(CG.getUrlWithParams(c.href, c.params))
            } else {
                if (typeof c.content === "string") {
                    d.content.html(c.content)
                } else {
                    d.content.html(a(c.content).html())
                }
            }
        },
        _initDialog: function(c, b) {
            c.dialog.css({
                "z-index": ++a.maxZindex,
                position: b.fixed && a.ieVersion > 6 ? "fixed": "absolute"
            }).addClass(b.dialogClass).attr("id", b.id);
            if (!b.container || b.container === "body" && c.container.outerHeight(true) < a(window).height() || b.fixed) {
                c.container = a(window)
            }
        },
        _setType: function(c, b) {
            if (b.type === "msgbox") {
                c.header.remove();
                c.dialogDrag = c.dialog.cgDrag({
                    handler: c.buttonsContainer.parent(),
                    start: function() {
                        c.dialogDrag.option("zIndex", ++a.maxZindex)
                    }
                })
            } else {
                if (b.type === "popup") {
                    c.header.remove();
                    c.dialog.addClass("cg-popup-dialog")
                }
            }
        },
        _setModal: function(d, c, b) {
            if (c.modal) {
                d.dialogOverlay = a(window).cgOverlay({
                    zIndex: ++a.maxZindex
                })
            }
            if (c.isClickClose && c.modal && (c.type === "popup" || c.type === "window")) {
                d.dialogOverlay.ui.overlay.click(function(f) {
                    b.close()
                })
            }
        },
        _effect: function(e, d) {
            var c = {};
            e.dialog.appendTo("body");
            if (d.width === "auto" || d.height === "auto") {
                e.dialog.show();
                c = this._getSize(d.width, d.height, e, d);
                e.dialog.css(c);
                if (d.type === "msgbox") {
                    c.height = e.dialog.outerHeight()
                }
                e.dialog.hide()
            } else {
                c = this._getSize(d.width, d.height, e, d);
                e.dialog.css(c)
            }
            var f = e.dialog.cgGetPosition({
                target: e.container,
                size: c,
                fixed: a.ieVersion != 6 ? d.fixed: false
            });
            var b = {};
            if (d.fixed) {
                b.left = f.offsetLeft;
                b.top = f.offsetTop
            } else {
                b = f
            }
            switch (d.effect) {
            case "flyin":
                e.dialog.css({
                    width:
                    0,
                    height: 0
                }).offset({
                    left: d.pageX,
                    top: d.pageY
                });
                e.dialog.animate({
                    width: c.width,
                    height: c.height,
                    left: b.left,
                    top: b.top,
                    opacity: 1
                },
                d.speed);
                break;
            case "fade":
                e.dialog.css(b).fadeIn(d.speed);
                break;
            case "shake":
                e.dialog.css({
                    left:
                    b.left,
                    top: -c.height + 30
                }).show().animate({
                    top: b.top
                },
                {
                    speed: d.speed,
                    easing: d.easing
                });
                break;
            default:
                e.dialog.css(b).show();
                break
            }
        },
        _drag: function(d, c) {
            if (c.draggable) {
                var b;
                d.dialogDrag = d.dialog.cgDrag({
                    container: c.container ? d.container: null,
                    handler: d.dragHandler,
                    zIndex: ++a.maxZindex,
                    iframeFix: true,
                    start: function() {
                        d.dialogDrag.option("zIndex", ++a.maxZindex)
                    },
                    stop: function() {}
                })
            }
        },
        _resize: function(d, c) {
            var e = this;
            if (c.resizable) {
                var b;
                d.dialogResize = d.dialog.cgResize({
                    axis: "xy",
                    cursor: "se-resize",
                    handler: d.seResizeHandler,
                    iframeFix: true,
                    resize: function(m, n, g, o) {
                        var h = e._getActualSize(n.currentSize.width, n.currentSize.height, c);
                        if (h.height != n.currentSize.height || h.width != n.currentSize.width) {
                            n.currentSize = h
                        }
                        var f = e._getContentHeightByDialogHeight(h.height, c);
                        e._setContentHeight(f, d, c)
                    },
                    start: function() {
                        d.dialogResize.option("zIndex", ++a.maxZindex)
                    },
                    stop: function(g, f) {}
                })
            } else {
                d.seResizeHandler.remove()
            }
        },
        _minimize: function(c, b) {
            if (!b.minimizable) {
                c.minimizeHandler.remove();
                return
            }
            c.minimizeHandler.mousedown(function(d) {
                return false
            }).mouseup(function(d) {
                dialog.minimize();
                return false
            })
        },
        _maximize: function(c, b) {
            if (!b.maximizable) {
                c.maximizeHandler.remove();
                return
            }
            c.maximizeHandler.mousedown(function(d) {
                return false
            }).mouseup(function(d) {
                dialog.maximize();
                return false
            })
        },
        _close: function(d, c, b) {
            if (!c.closable) {
                d.closeHandler.remove();
                return
            }
            d.closeHandler.mousedown(function(f) {
                return false
            }).mouseup(function(f) {
                if (a.isFunction(c.closeHandler) && c.closeHandler.call(this, f) === false) {} else {
                    b.close()
                }
                return false
            })
        }
    }
})(jQuery); (function(d) {
    var b = ["DOMMouseScroll", "mousewheel"];
    if (d.event.fixHooks) {
        for (var a = b.length; a;) {
            d.event.fixHooks[b[--a]] = d.event.mouseHooks
        }
    }
    d.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener) {
                for (var e = b.length; e;) {
                    this.addEventListener(b[--e], c, false)
                }
            } else {
                this.onmousewheel = c
            }
        },
        teardown: function() {
            if (this.removeEventListener) {
                for (var e = b.length; e;) {
                    this.removeEventListener(b[--e], c, false)
                }
            } else {
                this.onmousewheel = null
            }
        }
    };
    d.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    });
    function c(n) {
        var h = n || window.event,
        g = [].slice.call(arguments, 1),
        o = 0,
        m = true,
        f = 0,
        e = 0;
        n = d.event.fix(h);
        n.type = "mousewheel";
        if (h.wheelDelta) {
            o = h.wheelDelta / 120
        }
        if (h.detail) {
            o = -h.detail / 3
        }
        e = o;
        if (h.axis !== undefined && h.axis === h.HORIZONTAL_AXIS) {
            e = 0;
            f = -1 * o
        }
        if (h.wheelDeltaY !== undefined) {
            e = h.wheelDeltaY / 120
        }
        if (h.wheelDeltaX !== undefined) {
            f = -1 * h.wheelDeltaX / 120
        }
        g.unshift(n, o, f, e);
        return (d.event.dispatch || d.event.handle).apply(this, g)
    }
})(jQuery); (function(a) {
    a.fn.cgSwitch = function(b) {
        b = a.extend({},
        {
            title: "",
            content: "",
            selectedClass: null,
            event: "click",
            type: null,
            speed: 200
        },
        b);
        return this.each(function(c) {
            var d = {};
            d.$this = a(this);
            d.titles = a(b.title, d.$this);
            d.contents = a(b.content, d.$this);
            d.titles.each(function(e) {
                var f = a(this);
                f.bind(b.event,
                function() {
                    f.toggleClass(b.selectedClass);
                    if (b.type === "fade") {
                        d.contents.eq(e).fadeToggle(b.speed)
                    } else {
                        if (b.type === "slide") {
                            d.contents.eq(e).slideToggle(b.speed)
                        } else {
                            d.contents.eq(e).toggle(b.speed)
                        }
                    }
                })
            })
        })
    };
    a.fn.cgMonitor = function(b) {
        b = a.extend({
            monitor: true,
            callback: null,
            target: window,
            firstExecute: true,
            monitorTarget: window,
            event: "resize scroll"
        },
        b);
        return a(this).each(function() {
            var n = a(this),
            m = b.target ? a(b.target) : n,
            d = b.monitorTarget ? a(b.monitorTarget) : n,
            f,
            c,
            h,
            g;
            var e = function() {
                var o = m.getMaxSize(window);
                f = o.outerWidth;
                c = o.outerHeight;
                h = m.scrollLeft();
                g = m.scrollTop()
            };
            if (b.firstExecute) {
                e();
                b.callback.call(n, n, f, c, h, g)
            }
            if (b.monitor) {
                d.bind(b.event,
                function() {
                    e();
                    b.callback.call(n, n, f, c, h, g)
                })
            }
        })
    }
})(jQuery); (function(a) {
    a.extend({
        ieVersion: a.browser.msie ? a.browser.version: 100,
        maxZindex: 200,
        cookie: function(c, n, q) {
            if (typeof n != "undefined") {
                q = q || {};
                if (n === null) {
                    n = "";
                    q.expires = -1
                }
                var f = "";
                if (q.expires && (typeof q.expires == "number" || q.expires.toUTCString)) {
                    var g;
                    if (typeof q.expires == "number") {
                        g = new Date();
                        g.setTime(g.getTime() + (q.expires * 24 * 60 * 60 * 1000))
                    } else {
                        g = q.expires
                    }
                    f = "; expires=" + g.toUTCString()
                }
                var p = q.path ? "; path=" + q.path: "";
                var h = q.domain ? "; domain=" + q.domain: "";
                var b = q.secure ? "; secure": "";
                document.cookie = [c, "=", encodeURIComponent(n), f, p, h, b].join("")
            } else {
                var e = null;
                if (document.cookie && document.cookie != "") {
                    var o = document.cookie.split(";");
                    for (var m = 0; m < o.length; m++) {
                        var d = jQuery.trim(o[m]);
                        if (d.substring(0, c.length + 1) == (c + "=")) {
                            e = decodeURIComponent(d.substring(c.length + 1));
                            break
                        }
                    }
                }
                return e
            }
        }
    });
    a.fn.extend({
        outerHtml: function(m) {
            if (!this.length) {
                return null
            } else {
                if (m === undefined) {
                    var d = (this.length) ? this[0] : this,
                    n;
                    if (d.outerHTML) {
                        n = d.outerHTML
                    } else {
                        n = a(document.createElement("div")).append(a(d).clone()).html()
                    }
                    if (typeof n === "string") {
                        n = a.trim(n)
                    }
                    return n
                } else {
                    if (a.isFunction(m)) {
                        this.each(function(o) {
                            var p = a(this);
                            p.outerHTML(m.call(this, o, p.outerHTML()))
                        })
                    } else {
                        var f = a(this),
                        e = [],
                        g = a(m),
                        b;
                        for (var h = 0; h < f.length; h++) {
                            b = g.clone(true);
                            f.eq(h).replaceWith(b);
                            for (var c = 0; c < b.length; c++) {
                                e.push(b[c])
                            }
                        }
                        return (e.length) ? a(e) : null
                    }
                }
            }
        },
        getSize: function() {
            var b = new Object();
            b.width = this.width();
            b.height = this.height();
            if (arguments[0]) {
                b.outerWidth = this.outerWidth(true);
                b.outerHeight = this.outerHeight(true)
            } else {
                b.outerWidth = this.outerWidth();
                b.outerHeight = this.outerHeight()
            }
            return b
        },
        getMaxSize: function(f, b) {
            var e = this.getSize(b),
            d = a(f).getSize(b),
            c = d;
            if (e.width > d.width) {
                c.width = e.width
            }
            if (e.height > d.height) {
                c.height = e.height
            }
            if (e.outerWidth > d.outerWidth) {
                c.outerWidth = e.outerWidth
            }
            if (e.outerHeight > d.outerHeight) {
                c.outerHeight = e.outerHeight
            }
            return c
        },
        setSize: function(e, b, f, g) {
            var c = CG.isInvalid(e),
            d = CG.isInvalid(b);
            if (!c && d) {
                this.stop(true, true).animate({
                    width: e
                },
                f || 0, g)
            } else {
                if (!d && c) {
                    this.stop(true, true).animate({
                        height: b
                    },
                    f || 0, g)
                } else {
                    if (!d && !c) {
                        this.stop(true, true).animate({
                            width: e,
                            height: b
                        },
                        f || 0, g)
                    }
                }
            }
            return this
        },
        getPosition: function() {
            var b = {};
            b.left = parseInt(this.css("left")) || 0;
            b.top = parseInt(this.css("top")) || 0;
            return b
        },
        setPosition: function(f, e, d, g) {
            var b = CG.isInvalid(f),
            c = CG.isInvalid(e);
            if (!b && c) {
                this.stop(true, true).animate({
                    left: f
                },
                d || 0, g)
            } else {
                if (!c && b) {
                    this.stop(true, true).animate({
                        top: e
                    },
                    d || 0, g)
                } else {
                    if (!c && !b) {
                        this.stop(true, true).animate({
                            left: f,
                            top: e
                        },
                        d || 0, g)
                    }
                }
            }
            return this
        },
        getOffset: function() {
            var b = {};
            if (arguments[0]) {
                b = this.position()
            } else {
                b = this.offset()
            }
            if (!b) {
                return {
                    left: 0,
                    top: 0
                }
            }
            return b
        },
        getScroll: function() {
            var b = {};
            b.scrollLeft = this.scrollLeft();
            b.scrollTop = this.scrollTop();
            return b
        },
        resetCss: function() {
            var b = CG.aryToObj(arguments, [""]);
            this.css(b);
            return this
        },
        isTag: function(b) {
            return this[0].tagName === b.toUpperCase()
        },
        isCover: function(b, f) {
            var d = this.getOffset(),
            c = this.getSize();
            if (arguments.length == 1) {
                var e = arguments[0].getOffset();
                b = e.left;
                f = e.top
            }
            return CG.isOverAxis(f, d.top, c.outerHeight) && CG.isOverAxis(b, d.left, c.outerWidth)
        },
        isOver: function(e) {
            var d = this.getOffset(),
            b = this.getSize();
            return e.isCover(d.left, d.top) && e.isCover(d.left + b.outerWidth, d.top + b.outerHeight)
        },
        isOverX: function(g) {
            var f = this.getOffset(),
            d = this.getSize(),
            e = g.getOffset(),
            b = g.getSize();
            return CG.isOverAxis(f.left, e.left, b.outerWidth) && CG.isOverAxis(f.left + d.outerWidth, e.left, b.outerWidth)
        },
        isOverY: function(g) {
            var f = this.getOffset(),
            d = this.getSize(),
            e = g.getOffset(),
            b = g.getSize();
            return CG.isOverAxis(f.top, e.top, b.outerHeight) && CG.isOverAxis(f.top + d.outerHeight, e.left, b.outerHeight)
        },
        getOffsetRange: function(b) {
            var f = b.getOffset(),
            d = b.getSize(),
            e = this.getSize(),
            c = {};
            c.min = {},
            c.max = {};
            c.min.left = f.left;
            c.min.top = f.top;
            c.max.left = f.left + (d.outerWidth || d.width) - e.outerWidth;
            c.max.top = f.top + (d.outerHeight || d.height) - e.outerHeight;
            return c
        },
        getPositionByOffset: function(e, d) {
            var c = this.attr("style"),
            b = this.offset({
                left: e,
                top: d
            }).getPosition();
            if (c) {
                this.attr("style", c)
            } else {
                this.removeAttr("style")
            }
            return b
        }
    });
    a.fn.extend({
        cgPosition: function(b) {
            b = a.extend({
                x: "left",
                y: "bottom",
                zIndex: null,
                monitor: true,
                target: "body",
                speed: 0
            },
            b);
            var c = {
                init: function(d) {
                    var e = {},
                    f = {};
                    f.$this = d;
                    return f.$this.each(function() {
                        c.setPos(a(this), a(b.target));
                        if (b.monitor) {
                            a(window).bind("resize scroll", {
                                "$this": a(this),
                                target: a(b.target)
                            },
                            c.monitorHandler)
                        }
                    })
                },
                monitorHandler: function(d) {
                    c.setPos(d.data.$this, d.data.target)
                },
                setPos: function(n, m) {
                    var f = m.getSize(),
                    d = n.getSize(),
                    o = m.getOffset(),
                    e = n.getScope(m),
                    h = 0,
                    g = 0;
                    switch (b.x) {
                    case "center":
                        h = e.minX + (f.outerWidth - d.outerWidth) / 2;
                        break;
                    case "right":
                        h = e.minX + f.outerWidth;
                        break;
                    case "left":
                        h = e.minX + 0;
                        break;
                    default:
                        h = e.minX + (b.x || 0);
                        break
                    }
                    switch (b.y) {
                    case "middle":
                        g = e.minY + (f.outerHeight - d.outerHeight) / 2;
                        break;
                    case "bottom":
                        g = e.minY + f.outerHeight;
                        break;
                    case "top":
                        g = e.minY + 0;
                        break;
                    default:
                        g = e.minY + (b.y || 0);
                        break
                    }
                    h += m.scrollLeft();
                    g += m.scrollTop();
                    n.css({
                        "z-index": b.zIndex
                    }).animate({
                        left: h,
                        top: g
                    },
                    b.speed)
                }
            };
            return c.init(a(this))
        },
        cgShow: function(c, d, f, e, b) {
            b = b || 0;
            d = d || 0;
            switch (c) {
            case "slide":
                this.stop(true, true).delay(b).slideDown(d, f, e);
                break;
            case "fade":
                this.stop(true, true).delay(b).fadeIn(d, f, e);
                break;
            default:
                this.stop(true, true).delay(b).show(d, f, e)
            }
            return this
        },
        cgHide: function(c, d, f, e, b) {
            b = b || 0;
            d = d || 0;
            switch (c) {
            case "slide":
                this.stop(true, true).delay(b).slideUp(d, f, e);
                break;
            case "fade":
                this.stop(true, true).delay(b).fadeOut(d, f, e);
                break;
            default:
                this.stop(true, true).delay(b).hide(d, f, e)
            }
            return this
        }
    })
})(jQuery); (function(a) {
    a.cgGetPosition = {
        _init: function(c, b) {
            return this._getPos(c, a(b.target), b)
        },
        _getPos: function(n, m, c) {
            var g = m.getSize(),
            r = m.offset(),
            o = m.attr("style"),
            b = (n.attr("style") || ""),
            s = {},
            e = 0,
            p = 0,
            f = 0,
            d = 0;
            if (!c.size) {
                s.width = n.outerWidth();
                s.height = n.outerHeight()
            } else {
                s = c.size
            }
            if (a.isWindow(a(c.target)[0])) {
                var q = a(c.target).getScroll();
                f = q.scrollLeft;
                d = q.scrollTop
            }
            switch (c.x) {
            case "center":
                e = (g.width - s.width) / 2 + f;
                break;
            case "right":
                e = g.width - s.width + f;
                break;
            case "left":
                e = f;
                break;
            default:
                e = (c.x || 0);
                break
            }
            switch (c.y) {
            case "middle":
                p = (g.height - s.height) / 2 + d;
                break;
            case "bottom":
                p = g.height - s.height + d;
                break;
            case "top":
                p = d;
                break;
            default:
                p = (c.y || 0);
                break
            }
            if (r) {
                e += r.left;
                p += r.top
            }
            var h = {};
            if (c.position) {
                h = n.offset({
                    left: e,
                    top: p
                }).getPosition();
                if (!b) {
                    n.removeAttr("style")
                } else {
                    n.attr("style", b)
                }
            }
            h.offsetLeft = e;
            h.offsetTop = p;
            return h
        }
    };
    a.fn.cgGetPosition = function(b) {
        b = a.extend({
            x: "center",
            y: "middle",
            size: null,
            target: "body",
            position: true
        },
        b);
        return a.cgGetPosition._init(a(this).eq(0), b)
    }
})(jQuery); (function(a) {
    var b = {
        destory: function() {
            var c = this.ui;
            c.overlay.remove()
        },
        enable: function() {
            var c = this.ui;
            c.overlay.show()
        },
        disable: function() {
            var c = this.ui;
            c.overlay.hide()
        },
        option: function(c, e) {
            var d = this.settings;
            if (e) {
                d[c] = e
            } else {
                if (c) {
                    return d[c]
                }
            }
        }
    };
    a.cgOverlay = {
        _init: function(d, c) {
            var f = {},
            e = {};
            f.$this = d;
            this._create(f, c);
            return a.extend(true, {
                ui: f,
                settings: c
            },
            b)
        },
        _create: function(e, d) {
            var c = "cg-overlay-" + CG.getId();
            e.overlay = a(CG.CONST.OVERLAY_HTML);
            e.overlay.css({
                opacity: d.opacity,
                "z-index": d.zIndex,
                cursor: d.cursor,
                background: d.background,
                position: "absolute"
            }).attr("id", c).appendTo(d.appendTo);
            this._setSizeAndPosition(e);
            if (d.monitor) {
                a(window).bind("resize scroll", {
                    ui: e
                },
                a.cgOverlay._monitorHandler)
            }
        },
        _getSize: function(d) {
            var c = d.$this.getSize();
            if (a.isWindow(d.$this[0])) {
                c = d.$this.getMaxSize("body")
            } else {
                if (d.$this.isTag("body")) {
                    c = d.$this.getMaxSize(window)
                }
            }
            return c
        },
        _setSizeAndPosition: function(d) {
            var e = d.$this.offset(),
            c = this._getSize(d);
            if (!e) {
                e = {
                    left: 0,
                    top: 0
                }
            }
            d.overlay.css({
                left: e.left,
                top: e.top,
                width: c.outerWidth,
                height: c.outerHeight
            })
        },
        _monitorHandler: function(d) {
            var c = d.data.ui;
            a.cgOverlay._setSizeAndPosition(c)
        }
    };
    a.fn.cgOverlay = function(c) {
        c = a.extend({
            opacity: 0.3,
            zIndex: null,
            background: "#000",
            cursor: null,
            appendTo: "body",
            monitor: true
        },
        c);
        return a.cgOverlay._init(a(this).eq(0), c)
    }
})(jQuery); (function(a) {
    var b = {
        destory: function() {
            var c = this.ui;
            c.handler.unbind("mousedown", a.cgDrag.start)
        },
        disable: function() {
            var c = this.ui;
            c.handler.unbind("mousedown", a.cgDrag.start)
        },
        enable: function() {
            var c = this.ui;
            c.handler.bind("mousedown", {
                ui: c,
                settings: this.settings
            },
            a.cgDrag.start)
        },
        option: function(c, e) {
            var d = this.settings;
            if (e) {
                d[c] = e
            } else {
                if (c) {
                    return d[c]
                }
            }
        }
    };
    a.cgDrag = {
        init: function(d, c) {
            var e = {};
            e.$this = d;
            e.handler = c.handler ? a(c.handler, e.$this) : e.$this;
            e.container = a(c.container);
            e._draggable = true;
            e.handler.mousedown({
                ui: e,
                settings: c
            },
            a.cgDrag.start);
            return a.extend({
                ui: e,
                settings: c
            },
            b)
        },
        start: function(m) {
            if (m.which == 3) {
                return
            }
            var h = m.data.ui,
            c = m.data.settings,
            f = {};
            if (!h._draggable) {
                return false
            }
            h.position = h.$this.getPosition();
            h.currentPosition = h.position;
            if (a.isFunction(c.start) && c.start.call(h.$this, m, h) === false) {
                return false
            }
            h._draggable = false;
            f.pageX = m.pageX;
            f.pageY = m.pageY;
            if (c.container) {
                var d = h.$this.cgGetPosition({
                    target: h.container,
                    x: "left",
                    y: "top"
                });
                var g = h.$this.cgGetPosition({
                    target: h.container,
                    x: "right",
                    y: "bottom"
                });
                f.minX = d.left;
                f.maxX = g.left;
                f.minY = d.top;
                f.maxY = g.top
            }
            if (c.iframeFix) {
                f.iframeOverlay = a("body").cgOverlay({
                    opacity: 0,
                    cursor: c.cursor,
                    zIndex: 10000
                })
            }
            if (c.overlay) {
                f.overlay = a(c.container).cgOverlay(c.overlay)
            }
            f.opacity = h.$this.css("opacity");
            f.cursor = h.handler.css("cursor");
            h.$this.css({
                opacity: c.opacity,
                "z-index": c.zIndex
            });
            h.handler.css("cursor", c.cursor);
            f.body = a("body");
            f.bodyStyle = f.body.attr("style");
            f.body.css("cursor", c.cursor);
            a(document).mousemove({
                ui: h,
                privateObj: f,
                settings: c
            },
            a.cgDrag.drag).bind("mouseup", {
                ui: h,
                privateObj: f,
                settings: c
            },
            a.cgDrag.stop);
            m.stopPropagation();
            m.preventDefault()
        },
        drag: function(f) {
            var m = f.data.ui,
            d = f.data.privateObj,
            c = f.data.settings;
            var p = f.pageX - d.pageX,
            o = f.pageY - d.pageY;
            if (c.grid) {
                if (c.grid[0]) {
                    p = parseInt(p / c.grid[0] + 0.07) * c.grid[0]
                }
                if (c.grid[1]) {
                    o = parseInt(o / c.grid[1] + 0.07) * c.grid[1]
                }
            }
            var h = a.cgDrag.getActualPosition(p, o, m, c, d),
            n = h.left - m.currentPosition.left,
            g = h.top - m.currentPosition.top;
            m.currentPosition = h;
            if (a.isFunction(c.drag) && c.drag.call(m.$this, f, m, n, g) === false) {
                return false
            }
            m.$this.css(m.currentPosition);
            return false
        },
        stop: function(g) {
            var f = g.data.ui,
            d = g.data.privateObj,
            c = g.data.settings;
            if (a.isFunction(c.stop) && c.stop.call(f.$this, g, f) === false) {
                return false
            }
            if (d.bodyStyle) {
                d.body.attr("style", d.bodyStyle)
            } else {
                d.body.removeAttr("style")
            }
            f._draggable = true;
            if (c.iframeFix) {
                d.iframeOverlay.destory()
            }
            if (c.overlay) {
                d.overlay.destory()
            }
            f.$this.css("opacity", d.opacity);
            f.handler.css("cursor", d.cursor);
            a(document).unbind("mousemove", a.cgDrag.drag).unbind("mouseup", a.cgDrag.stop)
        },
        getActualPosition: function(e, c, g, d, f) {
            var m = e + g.position.left,
            h = c + g.position.top;
            switch (d.direction) {
            case "n":
                m = g.position.left;
                if (c > 0) {
                    c = 0
                }
                h = c + g.position.top;
                break;
            case "s":
                m = g.position.left;
                if (c < 0) {
                    c = 0
                }
                h = c + g.position.top;
                break;
            case "e":
                h = g.position.top;
                if (e < 0) {
                    e = 0
                }
                m = e + g.position.left;
                break;
            case "w":
                h = g.position.top;
                if (e > 0) {
                    e = 0
                }
                m = e + g.position.left;
                break;
            case "ns":
                m = g.position.left;
                h = c + g.position.top;
                break;
            case "we":
                h = g.position.top;
                m = e + g.position.left;
                break;
            default:
                break
            }
            if (d.container) {
                if (m < f.minX) {
                    m = f.minX
                } else {
                    if (m > f.maxX) {
                        m = f.maxX
                    }
                }
                if (h < f.minY) {
                    h = f.minY
                } else {
                    if (h > f.maxY) {
                        h = f.maxY
                    }
                }
            }
            return {
                left: m,
                top: h
            }
        }
    };
    a.fn.cgDrag = function(c) {
        c = a.extend({
            handler: null,
            container: null,
            zIndex: 10,
            cursor: null,
            direction: null,
            iframeFix: false,
            overlay: null,
            opacity: 0.8,
            grid: null,
            drag: null,
            start: null,
            stop: null
        },
        c);
        return a.cgDrag.init(a(this).eq(0), c)
    }
})(jQuery); (function(a) {
    var b = {
        destory: function() {
            var c = this.ui;
            c.handler.unbind("mousedown", a.cgResize.start)
        },
        disable: function() {
            var c = this.ui;
            c.handler.unbind("mousedown", a.cgResize.start)
        },
        enable: function() {
            var c = this.ui;
            c.handler.bind("mousedown", {
                ui: c,
                settings: this.settings
            },
            a.cgResize.start)
        },
        option: function(c, e) {
            var d = this.settings;
            if (e) {
                d[c] = e
            } else {
                if (c) {
                    return d[c]
                }
            }
        }
    };
    a.cgResize = {
        init: function(d, c) {
            var e = {};
            e.$this = d;
            e._resizable = true;
            e.handler = c.handler ? a(c.handler, e.$this) : e.$this;
            e.handler.mousedown({
                ui: e,
                settings: c
            },
            a.cgResize.start);
            return a.extend({
                ui: e,
                settings: c
            },
            b)
        },
        start: function(g) {
            if (g.which == 3) {
                return
            }
            var f = g.data.ui,
            c = g.data.settings,
            d = {};
            if (!f._resizable) {
                return false
            }
            f.size = {
                width: f.$this.width(),
                height: f.$this.height()
            };
            f.currentSize = f.size;
            if (a.isFunction(c.start) && c.start.call(f.$this, g, f) === false) {
                return false
            }
            f._resizable = false;
            d.pageX = g.pageX;
            d.pageY = g.pageY;
            if (c.iframeFix) {
                d.iframeOverlay = a("body").cgOverlay({
                    opacity: 0,
                    cursor: c.cursor,
                    zIndex: 10000
                })
            }
            if (c.overlay) {
                d.overlay = a("body").cgOverlay(c.overlay)
            }
            d.opacity = f.$this.css("opacity");
            d.cursor = f.handler.css("cursor");
            f.$this.css({
                opacity: c.opacity,
                "z-index": c.zIndex
            });
            f.handler.css("cursor", c.cursor);
            d.body = a("body");
            d.bodyStyle = d.body.attr("style");
            d.body.css("cursor", c.cursor);
            a(document).mousemove({
                ui: f,
                privateObj: d,
                settings: c
            },
            a.cgResize.resize).bind("mouseup", {
                ui: f,
                privateObj: d,
                settings: c
            },
            a.cgResize.stop);
            g.stopPropagation();
            g.preventDefault()
        },
        resize: function(f) {
            var h = f.data.ui,
            d = f.data.privateObj,
            c = f.data.settings;
            var o = f.pageX - d.pageX,
            n = f.pageY - d.pageY;
            switch (c.direction) {
            case "n":
                o = 0;
                n = -n;
                break;
            case "s":
                o = 0;
                break;
            case "w":
                o = -o;
                n = 0;
                break;
            case "e":
                n = 0;
                break;
            case "ne":
                n = -n;
                break;
            case "nw":
                n = -n;
                o = -o;
                break;
            case "se":
                break;
            case "sw":
                o = -o;
                break
            }
            if (c.grid) {
                if (c.grid[0]) {
                    o = parseInt(o / c.grid[0] + 0.07) * c.grid[0]
                }
                if (c.grid[1]) {
                    n = parseInt(n / c.grid[1] + 0.07) * c.grid[1]
                }
            }
            var p = a.cgResize.getActualSize(o, n, h, c),
            m = p.width - h.currentSize.width,
            g = p.height - h.currentSize.height;
            h.currentSize = p;
            if (a.isFunction(c.resize) && c.resize.call(h.$this, f, h, m, g) == false) {
                return false
            }
            a.cgResize.setSizeAndPosition(m, g, h, c);
            return false
        },
        stop: function(g) {
            var f = g.data.ui,
            d = g.data.privateObj,
            c = g.data.settings;
            if (a.isFunction(c.stop) && c.stop.call(f.$this, g, f) === false) {
                return false
            }
            if (d.bodyStyle) {
                d.body.attr("style", d.bodyStyle)
            } else {
                d.body.removeAttr("style")
            }
            f._resizable = true;
            if (c.iframeFix) {
                d.iframeOverlay.destory()
            }
            if (c.overlay) {
                d.overlay.destory()
            }
            f.$this.css("opacity", d.opacity);
            f.handler.css("cursor", d.cursor);
            a(document).unbind("mousemove", a.cgResize.resize).unbind("mouseup", a.cgResize.stop)
        },
        setSizeAndPosition: function(c, f, e, d) {
            switch (d.direction) {
            case "n":
                f = -f;
                e.$this.css({
                    height: e.currentSize.height
                });
                break;
            case "s":
                f = 0;
                e.$this.css({
                    height: e.currentSize.height
                });
                break;
            case "e":
                c = 0;
                e.$this.css({
                    width: e.currentSize.width
                });
                break;
            case "w":
                c = -c;
                e.$this.css({
                    width: e.currentSize.width
                });
                break;
            case "ne":
                f = -f;
                c = 0;
                e.$this.css(e.currentSize);
                break;
            case "nw":
                c = -c;
                f = -f;
                e.$this.css(e.currentSize);
                break;
            case "se":
                c = 0;
                f = 0;
                e.$this.css(e.currentSize);
                break;
            case "sw":
                c = -c;
                f = 0;
                e.$this.css(e.currentSize);
                break
            }
            if (c == 0 && f != 0) {
                e.$this.setPosition(null, "+=" + f)
            } else {
                if (c == 0 && f == 0) {} else {
                    if (c != 0 && f == 0) {
                        e.$this.setPosition("+=" + c, null)
                    } else {
                        e.$this.setPosition("+=" + c, "+=" + f)
                    }
                }
            }
        },
        getActualSize: function(f, d, h, e) {
            var g = f + h.size.width,
            c = d + h.size.height;
            if (e.min && !CG.isInvalid(e.min.width) && g < e.min.width) {
                g = e.min.width
            } else {
                if (e.max && !CG.isInvalid(e.max.width) && g > e.max.width) {
                    g = e.max.width
                }
            }
            if (e.min && !CG.isInvalid(e.min.height) && c < e.min.height) {
                c = e.min.height
            } else {
                if (e.max && !CG.isInvalid(e.max.height) && c > e.max.height) {
                    c = e.max.height
                }
            }
            return {
                width: g,
                height: c
            }
        }
    };
    a.fn.cgResize = function(c) {
        c = a.extend({
            handler: null,
            min: null,
            max: null,
            zIndex: 10,
            cursor: null,
            direction: "se",
            iframeFix: false,
            overlay: null,
            opacity: 0.8,
            grid: null,
            resize: null,
            start: null,
            stop: null
        },
        c);
        return a.cgResize.init(a(this).eq(0), c)
    }
})(jQuery); (function(a) {
    var b = {
        destory: function() {
            var c = this.ui;
            c.handler.unbind("mousedown", a.cgDrop.start)
        },
        disable: function() {
            var c = this.ui;
            c.handler.unbind("mousedown", a.cgDrop.start)
        },
        enable: function() {
            var c = this.ui;
            c.handler.bind("mousedown", {
                ui: c,
                settings: this.settings
            },
            a.cgDrop.start)
        },
        option: function(c, e) {
            var d = this.settings;
            if (e) {
                d[c] = e
            } else {
                if (c) {
                    return d[c]
                }
            }
        }
    };
    a.cgDrop = {
        init: function(d, c) {
            var e = {};
            e.$this = d;
            e._droppable = true;
            e.handler = c.handler ? a(c.handler, e.$this) : e.$this;
            e.accept = a(c.accept);
            e.container = a(c.container);
            e.handler.bind("mousedown", {
                ui: e,
                settings: c
            },
            a.cgDrop.start);
            return a.extend({
                ui: e,
                settings: c
            },
            b)
        },
        start: function(g) {
            var f = g.data.ui,
            c = g.data.settings,
            d = {};
            if (!f._droppable) {
                return false
            }
            f.offset = f.$this.getOffset();
            f.currentOffset = f.offset;
            f.isOver = false;
            if (a.isFunction(c.start) && c.start.call(f.$this, g, f) === false) {
                return false
            }
            f._droppable = false;
            d.pageX = g.pageX;
            d.pageY = g.pageY;
            d.isOver = false;
            if (c.clone) {
                f.drag = f.$this.clone().appendTo(f.$this.parent());
                f.drag.offset(f.offset)
            } else {
                f.drag = f.$this
            }
            if (c.container) {
                d.range = f.drag.getOffsetRange(f.container);
                d.minX = d.range.min.left;
                d.minY = d.range.min.top;
                d.maxX = d.range.max.left;
                d.maxY = d.range.max.top
            }
            if (c.iframeFix) {
                d.iframeOverlay = a("body").cgOverlay({
                    opacity: 0,
                    cursor: c.cursor,
                    zIndex: 10000
                })
            }
            if (c.overlay) {
                d.overlay = a(c.container).cgOverlay(c.overlay)
            }
            d.opacity = f.drag.css("opacity");
            d.cursor = f.handler.css("cursor");
            f.drag.css({
                opacity: c.opacity,
                "z-index": c.zIndex
            });
            f.handler.css("cursor", c.cursor);
            a(document).mousemove({
                ui: f,
                settings: c,
                privateObj: d
            },
            a.cgDrop.drag).mouseup({
                ui: f,
                settings: c,
                privateObj: d
            },
            a.cgDrop.stop);
            g.stopPropagation();
            g.preventDefault()
        },
        drag: function(f) {
            var m = f.data.ui,
            d = f.data.privateObj,
            c = f.data.settings;
            var p = f.pageX - d.pageX,
            o = f.pageY - d.pageY,
            h = a.cgDrop.getActualPosition(p, o, m, c, d),
            n = h.left - m.currentOffset.left,
            g = h.top - m.currentOffset.top;
            m.currentOffset = h;
            if (a.isFunction(c.drag) && c.drag.call(m.$this, f, m, n, g) === false) {
                return false
            }
            if (m.accept.isCover(f.pageX, f.pageY)) {
                if (!d.isOver) {
                    m.isOver = true;
                    a.cgDrop.over(f, m, c);
                    d.isOver = true
                }
            } else {
                if (d.isOver) {
                    m.isOver = false;
                    a.cgDrop.out(f, m, c);
                    d.isOver = false
                }
            }
            m.drag.offset(m.currentOffset);
            return false
        },
        stop: function(g) {
            var f = g.data.ui,
            d = g.data.privateObj,
            c = g.data.settings;
            if (a.isFunction(c.stop) && c.stop.call(f.$this, g, f) === false) {
                return false
            }
            f._droppable = true;
            a.cgDrop.drop(g, f, c);
            if (c.iframeFix) {
                d.iframeOverlay.destory()
            }
            if (c.overlay) {
                d.overlay.destory()
            }
            f.drag.css("opacity", d.opacity);
            f.handler.resetCss("cursor", d.cursor);
            a(document).unbind("mousemove", a.cgDrop.drag).unbind("mouseup", a.cgDrop.stop)
        },
        over: function(f, d, c) {
            if (a.isFunction(c.over)) {
                c.over.call(d.$this, f, d)
            }
        },
        out: function(f, d, c) {
            if (a.isFunction(c.out)) {
                c.out.call(d.$this, f, d)
            }
        },
        drop: function(f, d, c) {
            if (a.isFunction(c.drop)) {
                c.drop.call(d.$this, f, d)
            }
        },
        getActualPosition: function(e, c, g, d, f) {
            var m = e + g.offset.left,
            h = c + g.offset.top;
            if (d.container) {
                if (m < f.minX) {
                    m = f.minX
                } else {
                    if (m > f.maxX) {
                        m = f.maxX
                    }
                }
                if (h < f.minY) {
                    h = f.minY
                } else {
                    if (h > f.maxY) {
                        h = f.maxY
                    }
                }
            }
            return {
                left: m,
                top: h
            }
        }
    };
    a.fn.cgDrop = function(c) {
        c = a.extend({
            handler: null,
            container: null,
            zIndex: null,
            cursor: null,
            iframeFix: true,
            overlay: null,
            opacity: 0.5,
            accept: null,
            clone: false,
            drag: null,
            start: null,
            stop: null,
            over: null,
            out: null,
            drop: null
        },
        c);
        return a.cgDrop.init(a(this).eq(0), c)
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(n, m, b, c, d) {
        return jQuery.easing[jQuery.easing.def](n, m, b, c, d)
    },
    easeInQuad: function(n, m, b, c, d) {
        return c * (m /= d) * m + b
    },
    easeOutQuad: function(n, m, b, c, d) {
        return - c * (m /= d) * (m - 2) + b
    },
    easeInOutQuad: function(n, m, b, c, d) {
        if ((m /= d / 2) < 1) {
            return c / 2 * m * m + b
        }
        return - c / 2 * ((--m) * (m - 2) - 1) + b
    },
    easeInCubic: function(n, m, b, c, d) {
        return c * (m /= d) * m * m + b
    },
    easeOutCubic: function(n, m, b, c, d) {
        return c * ((m = m / d - 1) * m * m + 1) + b
    },
    easeInOutCubic: function(n, m, b, c, d) {
        if ((m /= d / 2) < 1) {
            return c / 2 * m * m * m + b
        }
        return c / 2 * ((m -= 2) * m * m + 2) + b
    },
    easeInQuart: function(n, m, b, c, d) {
        return c * (m /= d) * m * m * m + b
    },
    easeOutQuart: function(n, m, b, c, d) {
        return - c * ((m = m / d - 1) * m * m * m - 1) + b
    },
    easeInOutQuart: function(n, m, b, c, d) {
        if ((m /= d / 2) < 1) {
            return c / 2 * m * m * m * m + b
        }
        return - c / 2 * ((m -= 2) * m * m * m - 2) + b
    },
    easeInQuint: function(n, m, b, c, d) {
        return c * (m /= d) * m * m * m * m + b
    },
    easeOutQuint: function(n, m, b, c, d) {
        return c * ((m = m / d - 1) * m * m * m * m + 1) + b
    },
    easeInOutQuint: function(n, m, b, c, d) {
        if ((m /= d / 2) < 1) {
            return c / 2 * m * m * m * m * m + b
        }
        return c / 2 * ((m -= 2) * m * m * m * m + 2) + b
    },
    easeInSine: function(n, m, b, c, d) {
        return - c * Math.cos(m / d * (Math.PI / 2)) + c + b
    },
    easeOutSine: function(n, m, b, c, d) {
        return c * Math.sin(m / d * (Math.PI / 2)) + b
    },
    easeInOutSine: function(n, m, b, c, d) {
        return - c / 2 * (Math.cos(Math.PI * m / d) - 1) + b
    },
    easeInExpo: function(n, m, b, c, d) {
        return (m == 0) ? b: c * Math.pow(2, 10 * (m / d - 1)) + b
    },
    easeOutExpo: function(n, m, b, c, d) {
        return (m == d) ? b + c: c * ( - Math.pow(2, -10 * m / d) + 1) + b
    },
    easeInOutExpo: function(n, m, b, c, d) {
        if (m == 0) {
            return b
        }
        if (m == d) {
            return b + c
        }
        if ((m /= d / 2) < 1) {
            return c / 2 * Math.pow(2, 10 * (m - 1)) + b
        }
        return c / 2 * ( - Math.pow(2, -10 * --m) + 2) + b
    },
    easeInCirc: function(n, m, b, c, d) {
        return - c * (Math.sqrt(1 - (m /= d) * m) - 1) + b
    },
    easeOutCirc: function(n, m, b, c, d) {
        return c * Math.sqrt(1 - (m = m / d - 1) * m) + b
    },
    easeInOutCirc: function(n, m, b, c, d) {
        if ((m /= d / 2) < 1) {
            return - c / 2 * (Math.sqrt(1 - m * m) - 1) + b
        }
        return c / 2 * (Math.sqrt(1 - (m -= 2) * m) + 1) + b
    },
    easeInElastic: function(o, m, p, a, b) {
        var d = 1.70158;
        var c = 0;
        var n = a;
        if (m == 0) {
            return p
        }
        if ((m /= b) == 1) {
            return p + a
        }
        if (!c) {
            c = b * 0.3
        }
        if (n < Math.abs(a)) {
            n = a;
            var d = c / 4
        } else {
            var d = c / (2 * Math.PI) * Math.asin(a / n)
        }
        return - (n * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c)) + p
    },
    easeOutElastic: function(o, m, p, a, b) {
        var d = 1.70158;
        var c = 0;
        var n = a;
        if (m == 0) {
            return p
        }
        if ((m /= b) == 1) {
            return p + a
        }
        if (!c) {
            c = b * 0.3
        }
        if (n < Math.abs(a)) {
            n = a;
            var d = c / 4
        } else {
            var d = c / (2 * Math.PI) * Math.asin(a / n)
        }
        return n * Math.pow(2, -10 * m) * Math.sin((m * b - d) * (2 * Math.PI) / c) + a + p
    },
    easeInOutElastic: function(o, m, p, a, b) {
        var d = 1.70158;
        var c = 0;
        var n = a;
        if (m == 0) {
            return p
        }
        if ((m /= b / 2) == 2) {
            return p + a
        }
        if (!c) {
            c = b * (0.3 * 1.5)
        }
        if (n < Math.abs(a)) {
            n = a;
            var d = c / 4
        } else {
            var d = c / (2 * Math.PI) * Math.asin(a / n)
        }
        if (m < 1) {
            return - 0.5 * (n * Math.pow(2, 10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c)) + p
        }
        return n * Math.pow(2, -10 * (m -= 1)) * Math.sin((m * b - d) * (2 * Math.PI) / c) * 0.5 + a + p
    },
    easeInBack: function(o, n, b, c, d, m) {
        if (m == undefined) {
            m = 1.70158
        }
        return c * (n /= d) * n * ((m + 1) * n - m) + b
    },
    easeOutBack: function(o, n, b, c, d, m) {
        if (m == undefined) {
            m = 1.70158
        }
        return c * ((n = n / d - 1) * n * ((m + 1) * n + m) + 1) + b
    },
    easeInOutBack: function(o, n, b, c, d, m) {
        if (m == undefined) {
            m = 1.70158
        }
        if ((n /= d / 2) < 1) {
            return c / 2 * (n * n * (((m *= (1.525)) + 1) * n - m)) + b
        }
        return c / 2 * ((n -= 2) * n * (((m *= (1.525)) + 1) * n + m) + 2) + b
    },
    easeInBounce: function(n, m, b, c, d) {
        return c - jQuery.easing.easeOutBounce(n, d - m, 0, c, d) + b
    },
    easeOutBounce: function(n, m, b, c, d) {
        if ((m /= d) < (1 / 2.75)) {
            return c * (7.5625 * m * m) + b
        } else {
            if (m < (2 / 2.75)) {
                return c * (7.5625 * (m -= (1.5 / 2.75)) * m + 0.75) + b
            } else {
                if (m < (2.5 / 2.75)) {
                    return c * (7.5625 * (m -= (2.25 / 2.75)) * m + 0.9375) + b
                } else {
                    return c * (7.5625 * (m -= (2.625 / 2.75)) * m + 0.984375) + b
                }
            }
        }
    },
    easeInOutBounce: function(n, m, b, c, d) {
        if (m < d / 2) {
            return jQuery.easing.easeInBounce(n, m * 2, 0, c, d) * 0.5 + b
        }
        return jQuery.easing.easeOutBounce(n, m * 2 - d, 0, c, d) * 0.5 + c * 0.5 + b
    }
}); (function(a) {
    a.fn.cgAccordion = function(b) {
        var b = a.extend({},
        {
            title: ".accordion-title",
            content: ".accordion-content",
            speed: 300,
            selectedClass: "accordion-selected",
            current: 0,
            beforeChange: null,
            change: null,
            event: "click",
            multiple: true
        },
        b);
        return this.each(function() {
            var d = {},
            c = {};
            d.$this = a(this);
            d.titles = a(b.title, d.$this);
            d.contents = a(b.content, d.$this);
            c.current = b.current;
            c.flag = true;
            d.titles.removeClass(b.selectedClass);
            d.contents.not(d.contents.eq(c.current)).hide();
            d.titles.each(function(e) {
                a(this).bind(b.event,
                function(f) {
                    title = a(this);
                    if (!b.multiple) {
                        if (e != c.current && c.flag) {
                            if (a.isFunction(b.beforeChange) && b.beforeChange.call(a(this), f, d.contents.eq(e), e) === false) {
                                return false
                            }
                            c.flag = false;
                            c.next = e;
                            d.titles.eq(c.current).removeClass(b.selectedClass);
                            title.addClass(b.selectedClass);
                            d.contents.eq(c.current).stop().slideUp(b.speed,
                            function(g) {
                                c.current = c.next;
                                c.flag = true
                            });
                            d.contents.eq(c.next).stop().slideDown(b.speed,
                            function(g) {});
                            if (a.isFunction(b.change)) {
                                b.change.call(a(this), f, d.contents.eq(e), e)
                            }
                        }
                    } else {
                        if (a.isFunction(b.beforeChange) && b.beforeChange.call(a(this), f, d.contents.eq(e), e) === false) {
                            return false
                        }
                        if (title.hasClass(b.selectedClass)) {
                            title.removeClass(b.selectedClass);
                            d.contents.eq(e).stop().slideUp(b.speed,
                            function(g) {
                                if (a.isFunction(b.up)) {
                                    b.up.call(a(this), g, title, e)
                                }
                            })
                        } else {
                            title.addClass(b.selectedClass);
                            d.contents.eq(e).stop().slideDown(b.speed,
                            function(g) {
                                if (a.isFunction(b.down)) {
                                    b.down.call(a(this), g, title, e)
                                }
                            })
                        }
                        if (a.isFunction(b.change)) {
                            b.change.call(a(this), f, d.contents.eq(e), e)
                        }
                    }
                })
            });
            d.titles.eq(c.current).addClass(b.selectedClass);
            d.contents.eq(c.current).show()
        })
    }
})(jQuery); (function(a) {
    a.alert = function(c) {
        var c = a.extend(true, {
            info: "",
            icon: "icon-success",
            width: 320,
            height: 80,
            modal: true,
            handler: function(d) {
                d.data.dialog.close()
            }
        },
        c);
        var b = '<div class="cg-message ' + c.icon + '">' + c.info + "</div>";
        return a.fn.cgDialog.init({
            type: "msgbox",
            content: b,
            dialogClass: "cg-message-box",
            width: c.width,
            height: "auto",
            modal: c.modal,
            iframe: false,
            closable: false,
            resizable: false,
            draggable: false,
            buttons: [{
                text: "确定",
                handler: c.handler
            }]
        })
    }
})(jQuery); (function(a) {
    a.cgAutoComplete = {
        _init: function(d, c) {
            var b = a(CG.CONST.AUTOCOMPLETE_HTML);
            b.appendTo("body");
            this._initInput(d, b, c)
        },
        _initInput: function(g, d, e) {
            var c, f, h = g.offset(),
            b = g.attr("name") || "value";
            d.css({
                left: h.left,
                top: h.top + g.outerHeight(),
                width: g.outerWidth()
            });
            a(document).bind("click", {
                html: d,
                "$this": g
            },
            a.cgAutoComplete._hide);
            g.keyup(function(o) {
                var m = {},
                n = g.val();
                m[b] = n;
                if (n != c) {
                    a.cgAutoComplete._getData(e, m,
                    function(p) {
                        if (a.isFunction(e.success)) {
                            e.success.call(this, p)
                        }
                        a.cgAutoComplete._setData(p, d, e);
                        a.cgAutoComplete._check(g, d, e, p)
                    });
                    c = n
                }
                return false
            })
        },
        _hide: function(b) {
            if (!b.data.$this.isCover(b.pageX, b.pageY) && !b.data.html.isCover(b.pageX, b.pageY)) {
                b.data.html.fadeOut(200)
            }
        },
        _check: function(f, c, d, e) {
            var b = a("li[value]", c);
            b.bind("click",
            function(h) {
                var g = b.index(a(this));
                var m = e[g];
                if (a.isFunction(d.beforeCheck) && d.beforeCheck.call(this, h, m) === false) {} else {
                    f.val(m[d.keys[0]]);
                    c.fadeOut(200);
                    if (a.isFunction(d.check)) {
                        d.check.call(this, h, m)
                    }
                }
            })
        },
        _setData: function(f, c, d) {
            var e = f.length,
            g = "";
            c.fadeIn(200);
            if (f && e > 0) {
                for (var b = 0; b < e; b++) {
                    g += '<li value="' + f[b][d.keys[1]] + '" >' + f[b][d.keys[0]] + "</li>"
                }
                c.find("ul").html(g)
            } else {
                c.find("ul").html('<li class="border-none">' + d.tips + "</li>")
            }
        },
        _getData: function(b, c, d) {
            a.post(b.url, a.extend(c, b.params), d, "json")
        }
    };
    a.fn.cgAutoComplete = function(b) {
        b = a.extend({
            url: "",
            params: null,
            keys: ["name", "value"],
            success: null,
            tips: "暂无数据",
            beforeCheck: null,
            check: null
        },
        b);
        return this.each(function() {
            a.cgAutoComplete._init(a(this), b)
        })
    }
})(jQuery); (function(a) {
    a.fn.cgAutoHeight = function(b) {
        b = a.extend(true, {
            iframe: parent.$("iframe"),
            width: null,
            height: null,
            monitorWidth: false,
            monitorHeight: true
        },
        b);
        var d = function(g, f, e) {
            g.setSize(f, e)
        };
        var c = function(f, e) {
            if (b.width) {
                f = b.width
            }
            if (b.height) {
                e = b.height
            }
            if (!b.monitorWidth) {
                f = null
            }
            if (!b.monitorHeight) {
                e = null
            }
            return {
                width: f,
                height: e
            }
        };
        return a(b.iframe).each(function() {
            var g = a(this),
            e = a("body").getSize(true, true),
            f = c(e.outerWidth, e.outerHeight);
            d(g, f.width, f.height);
            window.onload = function() {
                e = a("body").getSize(true, true);
                f = c(e.outerWidth, e.outerHeight);
                d(g, f.width, f.height)
            }
        })
    }
})(jQuery); (function(a) {
    a.fn.cgAutoSize = function(b) {
        b = a.extend(true, {
            width: null,
            height: null,
            monitorWidth: false,
            monitorHeight: true
        },
        b);
        var e = function(h, g, f) {
            h.setSize(g, f)
        };
        var d = function(g, f) {
            if (b.width) {
                g = b.width
            }
            if (b.height) {
                f = b.height
            }
            if (!b.monitorWidth) {
                g = null
            }
            if (!b.monitorHeight) {
                f = null
            }
            return {
                width: g,
                height: f
            }
        };
        var c = function(f) {
            var g = {};
            if (document.getElementById) {
                if (f && !window.opera) {
                    if (f.contentDocument && f.contentDocument.body.offsetHeight) {
                        g.height = f.contentDocument.body.offsetHeight + 20;
                        g.width = f.contentDocument.body.offsetWidth + 20
                    } else {
                        if (f.Document && f.Document.body.scrollHeight) {
                            g.height = f.Document.body.scrollHeight + 10;
                            g.width = f.Document.body.scrollWidth + 10
                        }
                    }
                } else {
                    if (f.contentWindow.document && f.contentWindow.document.body.scrollHeight) {
                        g.height = f.contentWindow.document.body.scrollHeight;
                        g.width = f.contentWindow.document.body.scrollWidth
                    }
                }
            }
            return g
        };
        return a(this).each(function() {
            var g = a(this),
            f = g[0].contentWindow;
            if (f.$ && f.$.each) {
                size = f.$("body").getSize(true, true);
                actualSize = d(size.outerWidth, size.outerHeight);
                e(g, actualSize.width, actualSize.height)
            } else {
                size = c(g[0]);
                actualSize = d(size.width, size.height);
                e(g, actualSize.width, actualSize.height)
            }
        })
    }
})(jQuery); (function(a) {
    a.fn.cgButton = function(c) {
        c = a.extend({
            id: null,
            text: null,
            icon: null,
            role: null,
            buttonClass: null,
            handler: null
        },
        c);
        var b = {};
        return a(this).each(function() {
            var d = a(this),
            e = c.text || d.html();
            d.html(CG.CONST.BUTTON_HTML).addClass(c.buttonClass).attr("id", c.id).find(".cg-button-text").html(e);
            if (!c.icon) {
                d.find(".cg-button-icon").remove()
            } else {
                d.find(".cg-button-icon").addClass(c.icon)
            }
            if (!c.role) {
                d.find(".cg-button-role").remove()
            } else {
                d.find(".cg-button-role").addClass(c.role)
            }
            if (a.isFunction(c.handler)) {
                d.click(c.handler)
            }
        })
    }
})(jQuery); (function(a) {
    a.fn.cgCalendar = function(d) {
        var d = a.extend(true, {
            format: "yyyy-mm-dd hh:MM:ss",
            shortWeeks: ["日", "一", "二", "三", "四", "五", "六"],
            weeks: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            months: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            timePanelNames: ["时", "分", "秒"],
            buttons: ["清空", "今天", "确定"],
            startWeek: 0,
            disabledDates: null,
            disabledDays: null,
            disabledWeeks: null,
            disabledMonths: null,
            disabledYears: null,
            disabledTimes: null,
            disabledHours: null,
            disabledMinutes: null,
            disabledSeconds: null,
            selectedDates: null,
            showTimePanel: true,
            showTimeSelectPanel: true,
            showToolsPanel: true,
            showClear: true,
            showToday: true,
            showConfirm: true,
            startDate: null,
            dateRange: null,
            timeRange: null,
            validate: null,
            beforeSelect: null,
            beforeClick: null,
            click: null,
            mouseover: null,
            mouseout: null,
            dblclick: null,
            clearHandler: null,
            todayHandler: null,
            confirmHandler: null,
            event: null,
            eventHandler: null,
            speed: 100,
            width: null,
            height: null,
            href: "",
            complete: true,
            language: "zh"
        },
        d || {});
        var c = {
            stringToDate: function(t, x) {
                var v = new Date();
                var f = "^" + x + "$",
                h, u = v.getFullYear(),
                s = v.getMonth() + 1,
                w = v.getDate(),
                q = 0,
                p = 0,
                g = 0,
                o;
                try {
                    var n;
                    if (x.indexOf("yyyy") != -1) {
                        h = new RegExp(b.getReg(f, "yyyy"));
                        n = t.match(h);
                        if (n && n[1]) {
                            u = n[1]
                        }
                    }
                    if (x.indexOf("mm") != -1) {
                        h = new RegExp(b.getReg(f, "mm"));
                        n = t.match(h);
                        if (n && n[1]) {
                            s = n[1]
                        }
                    }
                    if (x.indexOf("dd") != -1) {
                        h = new RegExp(b.getReg(f, "dd"));
                        n = t.match(h);
                        if (n && n[1]) {
                            w = n[1]
                        }
                    }
                    if (x.indexOf("hh") != -1) {
                        h = new RegExp(b.getReg(f, "hh"));
                        n = t.match(h);
                        if (n && n[1]) {
                            q = n[1]
                        }
                    }
                    if (x.indexOf("MM") != -1) {
                        h = new RegExp(b.getReg(f, "MM"));
                        n = t.match(h);
                        if (n && n[1]) {
                            p = n[1]
                        }
                    }
                    if (x.indexOf("ss") != -1) {
                        h = new RegExp(b.getReg(f, "ss"));
                        n = t.match(h);
                        if (n && n[1]) {
                            g = n[1]
                        }
                    }
                    o = new Date(u, s - 1, w, q, p, g, 0)
                } catch(r) {
                    return new Date()
                }
                return o
            },
            dateToString: function(f, m) {
                var n = "";
                var h = function(o, p) {
                    p = p.replace("yyyy", o.getFullYear());
                    p = p.replace("mm", (o.getMonth() + 1) >= 10 ? o.getMonth() + 1 : "0" + (o.getMonth() + 1));
                    p = p.replace("dd", o.getDate() >= 10 ? o.getDate() : "0" + o.getDate());
                    p = p.replace("hh", o.getHours() >= 10 ? o.getHours() : "0" + o.getHours());
                    p = p.replace("MM", o.getMinutes() >= 10 ? o.getMinutes() : "0" + o.getMinutes());
                    p = p.replace("ss", o.getSeconds() >= 10 ? o.getSeconds() : "0" + o.getSeconds());
                    p = p.replace("w", d.weeks[o.getDay()]);
                    return p
                };
                try {
                    n = h(f, m)
                } catch(g) {
                    n = h(new Date(), m)
                }
                return n
            },
            getRealDate: function(f, g) {
                if (typeof f == "string") {
                    f = c.stringToDate(f, g)
                } else {
                    if (!f) {
                        return new Date()
                    }
                }
                return f
            },
            show: function(f) {
                if (arguments.length == 0) {
                    f = this.doms.datepicker
                }
                f.fadeIn(d.speed)
            },
            hide: function(f) {
                if (arguments.length == 0) {
                    f = this.doms.datepicker
                }
                f.fadeOut(d.speed)
            },
            isDisabledDate: function(o, r, s) {
                var t = o,
                B;
                if (typeof s != "undefined" && s) {
                    if (this.doms) {
                        var h = b.unique(b.merge(this.doms.disabledDates || [], d.disabledDates || [])),
                        z = b.unique(b.merge(this.doms.disabledDays || [], d.disabledDays || [])),
                        g = b.unique(b.merge(this.doms.disabledWeeks || [], d.disabledWeeks || [])),
                        v = b.unique(b.merge(this.doms.disabledYears || [], d.disabledYears || [])),
                        q = b.unique(b.merge(this.doms.disabledMonths || [], d.disabledMonths || []))
                    } else {
                        var h = d.disabledDates,
                        z = d.disabledDays,
                        g = d.disabledWeeks,
                        v = d.disabledYears,
                        q = d.disabledMonths
                    }
                    if (h) {
                        var u = c.dateToString(o, "yyyy-mm-dd");
                        for (var p = 0; p < h.length; p++) {
                            if (u == h[p]) {
                                return true
                            }
                        }
                    }
                    if (z) {
                        var t = o.getDate();
                        for (var p = 0; p < z.length; p++) {
                            if (t == z[p]) {
                                return true
                            }
                        }
                    }
                    if (g) {
                        var A = o.getDay();
                        for (var p = 0; p < g.length; p++) {
                            if (A == g[p]) {
                                return true
                            }
                        }
                    }
                    if (v) {
                        var x = o.getFullYear();
                        for (var p = 0; p < v.length; p++) {
                            if (x == v[p]) {
                                return true
                            }
                        }
                    }
                    if (q) {
                        var n = o.getMonth();
                        for (var p = 0; p < q.length; p++) {
                            if (n == q[p]) {
                                return true
                            }
                        }
                    }
                    B = r.dateRange;
                    t = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0, 0)
                } else {
                    B = d.dateRange;
                    if (!d.showTimePanel) {
                        t = new Date(o.getFullYear(), o.getMonth(), o.getDate(), 0, 0, 0, 0)
                    }
                }
                if (!B || !B.min && !B.max) {
                    return false
                }
                if (B.max && B.min && t <= B.max && t >= B.min || !B.min && B.max && t <= B.max || !B.max && B.min && t >= B.min) {
                    return false
                } else {
                    return true
                }
                return false
            },
            isDisabledTime: function(w, o, x) {
                if (!d.showTimePanel) {
                    return false
                }
                if (this.doms) {
                    var v = b.unique(b.merge(this.doms.disabledHours || [], d.disabledHours || [])),
                    u = b.unique(b.merge(this.doms.disabledMinutes || [], d.disabledMinutes || [])),
                    f = b.unique(b.merge(this.doms.disabledSeconds || [], d.disabledSeconds || [])),
                    g = b.unique(b.merge(this.doms.disabledTimes || [], d.disabledTimes || []))
                } else {
                    var v = d.disabledHours,
                    u = d.disabledMinutes,
                    f = d.disabledSeconds,
                    g = d.disabledTimes
                }
                if (arguments.length == 1) {
                    try {
                        var q = w.getHours();
                        o = w.getMinutes();
                        x = w.getSeconds();
                        q = q > 9 ? q: ("0" + q);
                        o = o > 9 ? o: ("0" + o);
                        x = x > 9 ? x: ("0" + x)
                    } catch(r) {
                        return undefined
                    }
                } else {
                    var q = w;
                    if (q.length == 1) {
                        q = "0" + q
                    }
                    if (o.length == 1) {
                        o = "0" + o
                    }
                    if (x.length == 1) {
                        x = "0" + x
                    }
                }
                if (g) {
                    var t = (q) + ":" + (o) + ":" + (x);
                    for (var p = 0; p < g.length; p++) {
                        if (t == g[p]) {
                            return true
                        }
                    }
                }
                if (v) {
                    for (var p = 0; p < v.length; p++) {
                        if (q == v[p]) {
                            return true
                        }
                    }
                }
                if (u) {
                    for (var p = 0; p < u.length; p++) {
                        if (o == u[p]) {
                            return true
                        }
                    }
                }
                if (f) {
                    for (var p = 0; p < f.length; p++) {
                        if (x == f[p]) {
                            return true
                        }
                    }
                }
                if (!d.timeRange || !d.timeRange.min && !d.timeRange.max) {
                    return false
                }
                var n = new Date(1970, 0, 1, q, o, x, 0);
                if (d.timeRange.min && d.timeRange.max && n >= d.timeRange.min && n <= d.timeRange.max || !d.timeRange.max && d.timeRange.min && n >= d.timeRange.min || !d.timeRange.min && d.timeRange.max && n <= d.timeRange.max) {
                    return false
                } else {
                    return true
                }
                return false
            },
            getDate: function(h, g) {
                if (arguments.length == 1) {
                    g = this.doms
                }
                var f = new Date(h.attr("year"), h.attr("month"), h.attr("day"), g.hour.val() || 0, g.minute.val() || 0, g.second.val() || 0, 0);
                return f
            },
            nextMonth: function(f) {
                f.setMonth(f.getMonth() + 1);
                return f
            },
            prevMonth: function(f) {
                f.setMonth(f.getMonth() - 1);
                return f
            },
            nextYear: function(f) {
                f.setYear(f.getFullYear() + 1);
                return f
            },
            prevYear: function(f) {
                f.setYear(f.getFullYear() - 1);
                return f
            },
            setDateRange: function(f) {
                d.dateRange = f;
                b.initDateRange(this.doms)
            },
            setTimeRange: function(f) {
                d.timeRange = f;
                b.initTimeRange()
            },
            getDoms: function() {
                return this.doms
            },
            refresh: function(g) {
                var p = g;
                if (arguments.length == 0) {
                    b.setMonthByDate(this.doms.currentDate, this.doms);
                    p = this.doms.currentDate
                } else {
                    b.setMonthByDate(g, this.doms);
                    this.doms.currentDate = new Date(g)
                }
                if (d.showTimePanel && d.showTimeSelectPanel) {
                    this.doms.hoursBox.children("table").html(b.getHMSHtml("h", this.doms));
                    this.doms.minutesBox.children("table").html(b.getHMSHtml("m", this.doms));
                    this.doms.secondsBox.children("table").html(b.getHMSHtml("s", this.doms))
                }
                if (d.showTimePanel && arguments.length >= 1) {
                    var o = p.getHours(),
                    f = p.getMinutes(),
                    n = p.getSeconds();
                    this.doms.hour.val(o > 9 ? o: ("0" + o));
                    this.doms.minute.val(f > 9 ? f: ("0" + f));
                    this.doms.second.val(n > 9 ? n: ("0" + n))
                }
            },
            destory: function() {
                if (this.doms.isInput) {
                    this.doms.$this.unbind("click foucsin")
                }
                this.doms.datepicker.remove()
            }
        };
        var b = {
            unique: function(m) {
                m = m || [];
                var f = {};
                for (var h = 0; h < m.length; h++) {
                    var g = m[h];
                    if (typeof(f[g]) == "undefined") {
                        f[g] = 1
                    }
                }
                m.length = 0;
                for (var h in f) {
                    m[m.length] = h
                }
                return m
            },
            merge: function(o) {
                var g = arguments.length,
                n = new Array();
                for (var m = 0; m < g; m++) {
                    var f = arguments[m].length;
                    for (var h = 0; h < f; h++) {
                        n.push(arguments[m][h])
                    }
                }
                return n
            },
            getReg: function(f, g) {
                f = f.replace(g, "(" + g + ")");
                f = f.replace("yyyy", "\\d{4}");
                f = f.replace("mm", "\\d{2}");
                f = f.replace("dd", "\\d{2}");
                f = f.replace("hh", "\\d{2}");
                f = f.replace("MM", "\\d{2}");
                f = f.replace("ss", "\\d{2}");
                return f
            },
            setMonthByDate: function(f, m) {
                var g = f.getFullYear(),
                h = f.getMonth();
                m.daysBox.html(b.getDaysHtml(g, f.getMonth(), m));
                m.month.html(d.months[h]).attr("month", h);
                m.year.html(g).attr("year", g);
                m.ableDays = a(".days td:not('.unselected-day'):not('.un-day') a", m.datepicker[0]);
                m.unselectedDays = a(".days .unselected-day a", m.datepicker[0]);
                m.unDays = a(".days .un-day a", m.datepicker[0]);
                m.days = a(".days a", m.datepicker[0])
            },
            selectDate: function(o, t, r) {
                if (t.isInput) {
                    var n = c.dateToString(o, d.format);
                    t.$this.val(n);
                    t.$this.data("date", o);
                    c.hide(t.datepicker)
                }
                b.setMonthByDate(o, t);
                if (typeof r != "undefined" && r) {
                    var q = o.getHours(),
                    g = o.getMinutes(),
                    p = o.getSeconds();
                    t.hour.val(q > 9 ? q: ("0" + q));
                    t.minute.val(g > 9 ? g: ("0" + g));
                    t.second.val(p > 9 ? p: ("0" + p))
                }
            },
            getDays: function(f, g) {
                var h = new Date(f, g + 1, 0);
                return h.getDate()
            },
            getDaysHtml: function(t, q, m) {
                var n = "",
                x = b.getDays(t, q),
                n = "<tr>" + b.getPreDaysHtml(t, q),
                v = new Array(),
                o,
                u = c.dateToString(m.today, "yyyy-mm-dd");
                v = b.unique(b.merge(m.clickDates, m.selectedDates || [], d.selectedDates));
                o = v.length;
                var w = function(A) {
                    var s = a("<td></td>");
                    if (c.isDisabledDate(A, m, 1)) {
                        s.addClass("unselected-day")
                    }
                    if (!s.hasClass("unselected-day")) {
                        var B = c.dateToString(A, "yyyy-mm-dd");
                        for (var z = 0; z < o; z++) {
                            if (B == v[z]) {
                                s.addClass("selected-day");
                                break
                            }
                        }
                    }
                    if (B == u) {
                        s.addClass("today")
                    }
                    if (s.attr("class")) {
                        return 'class="' + s.attr("class") + '"'
                    }
                    return ""
                };
                for (var h = 1,
                g = b.getPreDays(t, q); h <= x; h++, g++) {
                    if (! (g % 7) && g != 0) {
                        n += "</tr><tr>"
                    }
                    var p = new Date(t, q, h),
                    y = c.dateToString(p, d.format),
                    r = "<tr><td " + w(p) + '><a href="' + (d.href || "") + '" year="' + t + '" month="' + q + '" day="' + h + '">' + h + "</a></td></tr>",
                    f = a(r);
                    if (a.isFunction(d.validate)) {
                        d.validate.call(this, y, p, a("td a", f), m)
                    }
                    n += f.html()
                }
                n += b.getNextDaysHtml(t, q) + "</tr>";
                return n
            },
            getPreDays: function(h, m) {
                var f = new Date(h, m, 1);
                var g = (f.getDay() + 7 - d.startWeek) % 7,
                o;
                o = g;
                if (d.complete && o == 0) {
                    o = 7
                }
                return o
            },
            getPreDaysHtml: function(r, q) {
                var f = b.getPreDays(r, q),
                p = "";
                var t = b.getDays(r, q - 1);
                var g = new Date(r, q - 1, t);
                var s = g.getFullYear(),
                h = g.getMonth();
                for (var o = t - f + 1; o <= t; o++) {
                    p += '<td class="un-day"><a href="' + (d.href || "") + '" year="' + s + '" month="' + h + '" day="' + o + '">' + o + "</a></td>"
                }
                return p
            },
            getNextDays: function(h, m) {
                var f = new Date(h, m, b.getDays(h, m));
                var g = (f.getDay() + 7 - d.startWeek) % 7,
                o;
                o = 7 - g - 1;
                return o
            },
            getNextDaysHtml: function(r, q) {
                var f = b.getNextDays(r, q),
                p = "";
                var g = new Date(r, q + 1, 1);
                var t = b.getDays(r, q);
                var s = g.getFullYear(),
                h = g.getMonth();
                var o = 1;
                for (; o <= f; o++) {
                    p += '<td class="un-day"><a href="' + (d.href || "") + '" year="' + s + '" month="' + h + '" day="' + o + '">' + o + "</a></td>"
                }
                if (d.complete && (b.getPreDays(r, q) + t + f) < 42) {
                    p += "</tr><tr>";
                    for (; o <= f + 7; o++) {
                        p += '<td class="un-day"><a href="' + (d.href || "") + '" year="' + s + '" month="' + h + '" day="' + o + '">' + o + "</a></td>"
                    }
                }
                return p
            },
            getWeeksHtml: function() {
                var h = '<thead  class="weeks"><tr>';
                for (var g = d.startWeek,
                f = 0; f < 7; g = (g + 1) % 7, f++) {
                    h += "<th>" + d.shortWeeks[g] + "</th>"
                }
                h += "</tr></thead>";
                return h
            },
            getYearsHtml: function(h, g, m) {
                var f = "<tr>";
                for (h = (g == "+" ? h: h - 19), j = 0; j < 20; j++, h++) {
                    if (! (j % 4) && j != 0) {
                        f += "</tr><tr>"
                    }
                    f += '<td year="' + h + '">' + h + "</td>"
                }
                m.years = a("td:not('.un-year')", a(f + "</tr>"));
                return f + "</tr>"
            },
            getMonthsHtml: function() {
                var g = "<tr>";
                for (var f = 0; f < 12; f++) {
                    if (! (f % 2) && f != 0) {
                        g += "</tr><tr>"
                    }
                    g += '<td month="' + f + '">' + d.months[f] + "</td>"
                }
                return g + "</tr>"
            },
            getHMSHtml: function(x, p) {
                var q = "<tr>",
                f, w = "hour",
                v = 59,
                m = 63;
                if (x == "h") {
                    if (p) {
                        f = b.unique(b.merge(p.disabledHours || [], d.disabledHours || []))
                    } else {
                        f = d.disabledHours
                    }
                    v = 23;
                    m = 28
                } else {
                    if (x == "m") {
                        if (p) {
                            f = b.unique(b.merge(p.disabledMinutes || [], d.disabledMinutes || []))
                        } else {
                            f = d.disabledMinutes
                        }
                        w = "minute"
                    } else {
                        if (p) {
                            f = b.unique(b.merge(p.disabledSeconds || [], d.disabledSeconds || []))
                        } else {
                            f = d.disabledSeconds
                        }
                        w = "second"
                    }
                }
                var u = function(t, A) {
                    var z, g, y;
                    if (d.timeRange.min) {
                        z = d.timeRange.min.getHours()
                    }
                    if (d.timeRange.max) {
                        g = d.timeRange.max.getHours()
                    }
                    if (z && g && t >= z && t <= g || !g && z && t >= z || !z && g && t <= g) {
                        y = "<td " + A + '="' + t + '">' + t + "</td>"
                    } else {
                        y = '<td class="unselected-time" ' + A + '="' + t + '">' + t + "</td>"
                    }
                    return y
                };
                for (var o = 0,
                n = 0; o < m; o++) {
                    if (! (o % 7) && o != 0) {
                        q += "</tr><tr>"
                    }
                    if (n > v) {
                        if (o == m - 1) {
                            q += '<td class="un-time" title="close">x</td>'
                        } else {
                            q += '<td class="un-time" title="close"></td>'
                        }
                        continue
                    } else {
                        var h = 0,
                        r = n;
                        n = n > 9 ? n: "0" + n;
                        if (f) {
                            var s = f.length;
                            for (h = 0; h < s; h++) {
                                if (r == f[h]) {
                                    q += '<td class="unselected-time" ' + w + '="' + n + '">' + n + "</td>";
                                    break
                                }
                            }
                            if (f && h == s) {
                                if (x == "h" && d.timeRange) {
                                    q += u(n, w)
                                } else {
                                    q += "<td " + w + '="' + n + '">' + n + "</td>"
                                }
                            }
                        } else {
                            if (x == "h" && d.timeRange) {
                                q += u(n, w)
                            } else {
                                q += "<td " + w + '="' + n + '">' + n + "</td>"
                            }
                        }
                        n++
                    }
                }
                return q + "</tr>"
            },
            createHtml: function(g, o) {
                var s = g.getFullYear(),
                r = g.getMonth(),
                n = g.getHours(),
                m = g.getMinutes(),
                f = g.getSeconds();
                n = n > 9 ? n: ("0" + n);
                m = m > 9 ? m: ("0" + m);
                f = f > 9 ? f: ("0" + f);
                var v = '<div class="nav"><div class="month-nav"><span class="button prev">&#171;</span><span class="month-name"></span><span class="button next">&#187;</span></div><div class="year-nav"><span class="button prev">&#171;</span><span class="year-name"></span><span class="button next">&#187;</span></div></div>';
                var t = '<div class="time"><span class="hour">' + d.timePanelNames[0] + ' : <input type="text" id="hour" maxlength="2" value="' + n + '"/></span> <span class="minute">' + d.timePanelNames[1] + ' : <input type="text" id="minute" maxlength="2" value="' + m + '"/></span> <span class="second">' + d.timePanelNames[2] + ' : <input type="text" id="second" maxlength="2" value="' + f + '"/></span></div>';
                var q = '<div class="tollbars">';
                if (d.showConfirm) {
                    q += '<input type="button" value="' + d.buttons[2] + '" id="okBtn"/>'
                }
                if (d.showToday) {
                    q += '<input type="button" value="' + d.buttons[1] + '" id="todayBtn"/>'
                }
                if (d.showClear) {
                    q += '<input type="button" value="' + d.buttons[0] + '" id="clearBtn"/>'
                }
                q += "</div>";
                var u = '<div class="year" id="year"><table></table><div class="year-tollbars"><span class="button prev">&#171;</span><span class="year-name"></span><span class="button next">&#187;</span></div></div>';
                var h = '<div class="month" id="month"><table></table></div>';
                var p = '<div class="datepicker" id="datepicker">';
                p += v + '<table id="days">' + b.getWeeksHtml() + '<tbody class="days"></tbody></table>';
                if (d.showTimePanel) {
                    p += t
                }
                if (d.showToolsPanel) {
                    p += q
                }
                if (d.showTimePanel && d.showTimeSelectPanel) {
                    p += '<div id="hour-select" class="time-select"><table>' + b.getHMSHtml("h", o) + "</table></div>";
                    p += '<div id="minute-select" class="time-select"><table>' + b.getHMSHtml("m") + "</table></div>";
                    p += '<div id="second-select" class="time-select"><table>' + b.getHMSHtml("s") + "</table></div>"
                }
                p = p + u + h;
                p += "</div>";
                return p
            },
            _hideIfClickOutside: function(f) {
                var h = f.data.datepickerInput,
                g = a(f.target);
                if (f.target != h[0] && !b._checkPosition(f, f.data.datepicker)) {
                    c.hide(f.data.datepicker)
                }
            },
            _checkPosition: function(f, g) {
                var h = g.offset();
                h.right = h.left + g.outerWidth(true);
                h.bottom = h.top + g.outerHeight(true);
                return f.pageY < h.bottom && f.pageY > h.top && f.pageX < h.right && f.pageX > h.left
            },
            setPosition: function(g, f) {
                g.css({
                    position: "absolute",
                    top: f.offset().top + f.outerHeight(true),
                    left: f.offset().left
                })
            },
            setLanguage: function() {
                switch (d.language) {
                case "en":
                    d.shortWeeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                    d.weeks = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                    d.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                    d.shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                    d.timePanelNames = ["hour", "minute", "second"];
                    d.buttons = ["clear", "today", "ok"];
                    break;
                    defualt: break
                }
            },
            initDateRange: function(f) {
                if (d.dateRange.min) {
                    d.dateRange.min = c.getRealDate(d.dateRange.min, "yyyy-mm-dd hh:MM:ss");
                    var g = new Date(d.dateRange.min.getFullYear(), d.dateRange.min.getMonth(), d.dateRange.min.getDate(), 0, 0, 0, 0);
                    if (!d.showTimePanel) {
                        d.dateRange.min = g
                    }
                    f.dateRange.min = g
                } else {
                    f.dateRange.min = null
                }
                if (d.dateRange.max) {
                    d.dateRange.max = c.getRealDate(d.dateRange.max, "yyyy-mm-dd hh:MM:ss");
                    var g = new Date(d.dateRange.max.getFullYear(), d.dateRange.max.getMonth(), d.dateRange.max.getDate(), 0, 0, 0, 0);
                    if (!d.showTimePanel) {
                        d.dateRange.max = g
                    }
                    f.dateRange.max = g
                } else {
                    f.dateRange.max = null
                }
            },
            initTimeRange: function() {
                if (d.timeRange.min) {
                    d.timeRange.min = c.getRealDate(d.timeRange.min, "hh:MM:ss");
                    d.timeRange.min = new Date(1970, 0, 1, d.timeRange.min.getHours(), d.timeRange.min.getMinutes(), d.timeRange.min.getSeconds(), 0)
                }
                if (d.timeRange.max) {
                    d.timeRange.max = c.getRealDate(d.timeRange.max, "hh:MM:ss");
                    d.timeRange.max = new Date(1970, "0", 1, d.timeRange.max.getHours(), d.timeRange.max.getMinutes(), d.timeRange.max.getSeconds(), 0)
                }
            },
            checkNum: function(g) {
                var f = 59;
                if (g.data) {
                    f = g.data.max
                }
                if (/^[\d]{0,2}$/.test(a(this).val())) {
                    if (a(this).val() > f) {
                        a(this).val(f);
                        return false
                    }
                    return true
                }
                a(this).val("00");
                return false
            },
            checkCode: function(g) {
                var f = g.keyCode;
                if (f >= 48 && f <= 57 || f >= 96 && f <= 105 || f == 8 || f == 46 || f == 9) {
                    return true
                }
                return false
            }
        };
        var e = new Array();
        a(this).each(function(n) {
            var p = a(this),
            f,
            m = {},
            h,
            o = true;
            var g = function() {
                m.currentDate = d.startDate;
                m.isInput = false;
                if (p[0].tagName == "INPUT") {
                    m.isInput = true
                }
                m.clickDates = new Array();
                m.dateRange = {};
                m.dateRange.min = null;
                m.dateRange.max = null;
                m.timeRange = {};
                m.timeRange.min = null;
                m.timeRange.max = null;
                m.selectedDates = new Array();
                d.selectedDates = d.selectedDates || [];
                if (d.dateRange) {
                    b.initDateRange(m)
                }
                if (d.timeRange) {
                    b.initTimeRange()
                }
                if (d.startWeek < 0 || d.startWeek > 6) {
                    d.startWeek = 0
                } else {
                    d.startWeek = parseInt(d.startWeek)
                }
                b.setLanguage()
            };
            var r = function() {
                g();
                if (m.isInput) {
                    if (p.val()) {
                        m.currentDate = c.getRealDate(p.val(), d.format)
                    } else {
                        m.currentDate = c.getRealDate(m.currentDate, d.format)
                    }
                    m.clickDates.push(c.dateToString(m.currentDate, "yyyy-mm-dd"));
                    h = a(b.createHtml(m.currentDate, m));
                    f = "body";
                    p.unbind("click foucsin").bind("click foucsin",
                    function(s) {
                        if (o) {
                            h.hide().appendTo(f);
                            b.setPosition(h, p);
                            c.show(h);
                            a(document).click({
                                datepickerInput: p,
                                datepicker: h
                            },
                            b._hideIfClickOutside);
                            o = false
                        } else {
                            b.setPosition(h, p);
                            c.show(h)
                        }
                    })
                } else {
                    m.currentDate = c.getRealDate(m.currentDate, d.format);
                    m.clickDates.push(c.dateToString(m.currentDate, "yyyy-mm-dd"));
                    h = a(b.createHtml(m.currentDate, m));
                    f = p;
                    h.appendTo(f)
                }
                h.css({
                    width: d.width,
                    height: d.height
                });
                if (!d.showTimeSelectPanel) {
                    m.hour = a(".time span", h).css("cursor", "default")
                }
                m.$this = p;
                m.today = new Date();
                m.datepicker = h;
                m.month = a(".month-nav .month-name", h);
                m.prevMonth = a(".month-nav .prev", h);
                m.nextMonth = a(".month-nav .next", h);
                m.year = a(".year-nav .year-name", h);
                m.prevYear = a(".year-nav .prev", h);
                m.nextYear = a(".year-nav .next", h);
                m.daysBox = a("#days tbody", h);
                m.clearBtn = a("#clearBtn", h);
                m.todayBtn = a("#todayBtn", h);
                m.okBtn = a("#okBtn", h);
                m.hour = a(".time #hour", h);
                m.minute = a(".time #minute", h);
                m.second = a(".time #second", h);
                m.yearBox = a("#year", h);
                m.nextYears = a(".year-tollbars .next", m.yearBox);
                m.preYears = a(".year-tollbars .prev", m.yearBox);
                m.currentYear = a(".year-tollbars .year-name", m.yearBox);
                m.years = a("table td:not('.un-year')", m.yearBox[0]);
                m.monthBox = a("#month", h);
                m.months = a("table td:not('.un-month')", m.monthBox[0]);
                m.hoursBox = a("#hour-select", h);
                m.hours = a("#hour-select td:not(.un-time):not(.unselected-time)", h[0]);
                m.unHours = a("#hour-select .un-time", h[0]);
                m.minutesBox = a("#minute-select", h);
                m.minutes = a("#minute-select td:not(.un-time):not(.unselected-time)", h[0]);
                m.unMinutes = a("#minute-select .un-time", h[0]);
                m.secondsBox = a("#second-select", h);
                m.seconds = a("#second-select td:not(.un-time):not(.unselected-time)", h[0]);
                m.unSeconds = a("#second-select .un-time", h[0]);
                m.ableDays = a(".days td:not('.unselected-day'):not('.un-day') a", h[0]);
                m.unselectedDays = a(".days .unselected-day a", h[0]);
                m.unDays = a(".days .un-day a", h[0]);
                m.days = a(".days a", h[0]);
                if (!d.showTimeSelectPanel) {
                    m.hour.keydown(b.checkCode).keyup({
                        max: 23
                    },
                    b.checkNum);
                    m.minute.keydown(b.checkCode).keyup(b.checkNum);
                    m.second.keydown(b.checkCode).keyup(b.checkNum)
                }
                b.setMonthByDate(m.currentDate, m);
                q()
            };
            var q = function() {
                var y = a("#days", h),
                A = a(".tollbars", h),
                x = a(".time", h);
                var s = function() {
                    y.hide();
                    A.hide();
                    x.hide()
                };
                var t = function() {
                    y.fadeIn(d.speed);
                    A.fadeIn(d.speed);
                    x.fadeIn(d.speed)
                };
                var w = function() {
                    m.hoursBox.hide();
                    m.minutesBox.hide();
                    m.secondsBox.hide()
                };
                var z = true,
                v = true;
                m.year.click(function() {
                    w();
                    if (m.yearBox.is(":visible")) {
                        m.yearBox.hide();
                        t()
                    } else {
                        s();
                        m.monthBox.hide();
                        if (z) {
                            var B = m.today.getFullYear();
                            m.currentYear.html(B).attr("year", B);
                            a("table", m.yearBox).html(b.getYearsHtml(parseInt(m.year.html()), "+", m));
                            z = false
                        }
                        m.yearBox.fadeIn(d.speed)
                    }
                    return false
                });
                m.nextYears.click(function() {
                    a("table", m.yearBox).html(b.getYearsHtml(parseInt(m.years.eq(m.years.length - 1).html()) + 1, "+", m))
                });
                m.preYears.click(function() {
                    a("table", m.yearBox).html(b.getYearsHtml(parseInt(m.years.eq(0).html()) - 1, "-", m))
                });
                m.years.live("click",
                function() {
                    var B = a(this).attr("year");
                    m.currentDate.setYear(B);
                    b.setMonthByDate(m.currentDate, m);
                    m.yearBox.hide();
                    t()
                });
                m.currentYear.bind("click",
                function() {
                    var B = a(this).attr("year");
                    m.currentDate.setYear(B);
                    b.setMonthByDate(m.currentDate, m);
                    m.yearBox.hide();
                    t()
                });
                m.month.click(function() {
                    w();
                    if (m.monthBox.is(":visible")) {
                        m.monthBox.hide();
                        t()
                    } else {
                        s();
                        m.yearBox.hide();
                        if (v) {
                            a("table", m.monthBox).html(b.getMonthsHtml());
                            m.months = a("table td:not('.un-month')", m.monthBox[0]);
                            v = false
                        }
                        m.monthBox.fadeIn(d.speed)
                    }
                    return false
                });
                m.months.live("click",
                function() {
                    var B = a(this).attr("month");
                    m.currentDate.setMonth(B);
                    b.setMonthByDate(m.currentDate, m);
                    m.monthBox.hide();
                    t()
                });
                var u = function() {
                    a(".time .hour", h).click(function() {
                        s();
                        m.hoursBox.fadeIn(d.speed);
                        return false
                    });
                    a(".time .minute", h).click(function() {
                        s();
                        m.minutesBox.fadeIn(d.speed);
                        return false
                    });
                    a(".time .second", h).click(function() {
                        s();
                        m.secondsBox.fadeIn(d.speed);
                        return false
                    });
                    m.hours.live("click",
                    function() {
                        m.hour.val(a(this).attr("hour"));
                        m.hoursBox.hide();
                        t()
                    });
                    m.minutes.live("click",
                    function() {
                        m.minute.val(a(this).attr("minute"));
                        m.minutesBox.hide();
                        t()
                    });
                    m.seconds.live("click",
                    function() {
                        if (!c.isDisabledTime(m.hour.val(), m.minute.val(), a(this).attr("second"))) {
                            m.second.val(a(this).attr("second"));
                            m.secondsBox.hide();
                            t()
                        }
                    });
                    m.unHours.live("click",
                    function() {
                        m.hoursBox.hide();
                        t()
                    });
                    m.unMinutes.live("click",
                    function() {
                        m.minutesBox.hide();
                        t()
                    });
                    m.unSeconds.live("click",
                    function() {
                        m.secondsBox.hide();
                        t()
                    })
                };
                if (d.showTimeSelectPanel) {
                    u()
                }
                m.prevMonth.click(function() {
                    var B = c.prevMonth(m.currentDate);
                    b.setMonthByDate(B, m)
                });
                m.nextMonth.click(function() {
                    var B = c.nextMonth(m.currentDate);
                    b.setMonthByDate(B, m)
                });
                m.prevYear.click(function() {
                    var B = c.prevYear(m.currentDate);
                    b.setMonthByDate(B, m)
                });
                m.nextYear.click(function() {
                    var B = c.nextYear(m.currentDate);
                    b.setMonthByDate(B, m)
                });
                m.unselectedDays.live("click",
                function() {
                    return false
                });
                m.unDays.live("click",
                function() {
                    return false
                });
                if (d.showToolsPanel && m.isInput) {
                    if (d.showClear) {
                        m.clearBtn.bind("click",
                        function(C) {
                            var D = function() {
                                p.val("");
                                c.hide(h)
                            };
                            if (a.isFunction(d.clearHandler)) {
                                var B = d.clearHandler.call(this, C, p, h);
                                if (typeof B == "undefined" || B) {
                                    D()
                                }
                            } else {
                                D()
                            }
                        })
                    }
                    if (d.showToday) {
                        m.todayBtn.bind("click",
                        function(F) {
                            var D = new Date(),
                            B = c.dateToString(D, d.format);
                            var C = function() {
                                if (!c.isDisabledDate(D) && !c.isDisabledTime(D)) {
                                    var G = true;
                                    if (a.isFunction(d.beforeSelect)) {
                                        G = d.beforeSelect.call(this, B, D, p, m)
                                    }
                                    if (typeof G == "undefined" || G) {
                                        b.selectDate(D, m, true)
                                    }
                                }
                            };
                            if (a.isFunction(d.todayHandler)) {
                                var E = d.todayHandler.call(this, F, B, D, p, m);
                                if (typeof E == "undefined" || E) {
                                    C()
                                }
                            } else {
                                C()
                            }
                        })
                    }
                    if (d.showConfirm) {
                        m.okBtn.bind("click",
                        function(G) {
                            if (m.ableDays.length < 1) {
                                return false
                            }
                            var D = m.ableDays.last(),
                            C,
                            E;
                            m.ableDays.each(function() {
                                if (a(this).parent().hasClass("selected-day")) {
                                    D = a(this);
                                    return
                                }
                            });
                            E = c.getDate(D, m);
                            C = c.dateToString(E, d.format);
                            var B = function() {
                                if (!c.isDisabledDate(E) && !c.isDisabledTime(E)) {
                                    var H = true;
                                    if (a.isFunction(d.beforeSelect)) {
                                        H = d.beforeSelect.call(this, C, E, p, m)
                                    }
                                    if (typeof H == "undefined" || H) {
                                        m.clickDates = new Array();
                                        m.clickDates.push(c.dateToString(E, "yyyy-mm-dd"));
                                        b.selectDate(E, m)
                                    }
                                }
                            };
                            if (a.isFunction(d.confirmHandler)) {
                                var F = d.confirmHandler.call(this, G, C, E, p, m);
                                if (typeof F == "undefined" || F) {
                                    B()
                                }
                            } else {
                                B()
                            }
                        })
                    }
                }
                m.ableDays.live("click",
                function(H) {
                    var C = c.getDate(a(this), m),
                    B = c.dateToString(C, d.format),
                    D = a(this);
                    var F = function() {
                        if (!c.isDisabledDate(C) && !c.isDisabledTime(C)) {
                            var I = true;
                            if (a.isFunction(d.beforeSelect)) {
                                I = d.beforeSelect.call(this, B, C, D, m)
                            }
                            if (m.isInput && (typeof I == "undefined" || I)) {
                                m.clickDates = new Array();
                                m.clickDates.push(c.dateToString(C, "yyyy-mm-dd"));
                                b.selectDate(C, m)
                            }
                        }
                    };
                    if (a.isFunction(d.beforeClick)) {
                        var G = d.beforeClick.call(this, H, B, C, D, m);
                        if (typeof G == "undefined" || G) {
                            F()
                        } else {
                            return false
                        }
                    } else {
                        F()
                    }
                    if (a.isFunction(d.click)) {
                        var E;
                        E = d.click.call(this, H, B, C, D, m);
                        if (typeof E == "undefined" || !E) {
                            return false
                        } else {
                            return true
                        }
                    } else {
                        return false
                    }
                });
                if (a.isFunction(d.dblclick)) {
                    m.ableDays.live("dblclick",
                    function(C) {
                        var B = c.getDate(a(this), m);
                        return d.dblclick.call(this, C, c.dateToString(B, d.format), B, a(this), m)
                    })
                }
                if (a.isFunction(d.mouseover)) {
                    m.ableDays.live("mouseover",
                    function(C) {
                        var B = c.getDate(a(this), m);
                        return d.mouseover.call(this, C, c.dateToString(B, d.format), B, a(this), m)
                    })
                }
                if (a.isFunction(d.mouseout)) {
                    m.ableDays.live("mouseout",
                    function(C) {
                        var B = c.getDate(a(this), m);
                        return d.mouseout.call(this, C, c.dateToString(B, d.format), B, a(this), m)
                    })
                }
                if (a.isFunction(d.eventHandler) && d.event) {
                    m.ableDays.live(d.event,
                    function(C) {
                        var B = c.getDate(a(this), m);
                        return d.eventHandler.call(this, C, c.dateToString(B, d.format), B, a(this), m)
                    })
                }
            };
            r();
            c.doms = m;
            e.push(c);
            return
        });
        return e[0]
    }
})(jQuery); (function($) {
    $.cgCascadeSelect = {
        _init: function(opt) {
            if (!opt.selects || typeof opt.selects === "string" || opt.selects.length == undefined) {
                return false
            }
            opt.selectLength = opt.selects.length;
            opt.selects.each(function(index) {
                var $this = $(this);
                if (index !== opt.selectLength - 1) {
                    $this.change(function(e) {
                        $.cgCascadeSelect._changeHandler($this, index, opt, false, e)
                    });
                    if (index === 0) {
                        $.cgCascadeSelect.selectOption($this)
                    }
                    if (opt.initialized) {
                        $.cgCascadeSelect._initialized($this, index, opt)
                    }
                }
            })
        },
        _setOptions: function(data, index, opt) {
            var options = opt.defaultOption,
            len = data.length;
            for (var i = 0; i < len; i++) {
                options += '<option value="' + data[i][opt.keys[1]] + '">' + data[i][opt.keys[0]] + "</option>"
            }
            opt.selects.eq(index + 1).html(options)
        },
        _emptySelect: function(index, opt) {
            for (var i = index + 1; i < opt.selectLength; i++) {
                opt.selects.eq(i).empty()
            }
        },
        _changeHandler: function($this, index, opt, flag, e) {
            var value = $this.find("option:selected").val(),
            selectName = $this.attr("name") || "",
            params = {};
            params[selectName] = value;
            $.extend(params, opt.params);
            if (!flag) {
                if ($.isFunction(opt.beforeChange) && opt.beforeChange.call($this, e, value, index) === false) {
                    return false
                }
            }
            if (value != undefined || flag) {
                $.cgCascadeSelect.getData(opt.url, params,
                function(data) {
                    if (!flag) {
                        $.cgCascadeSelect._emptySelect(index, opt)
                    }
                    $.cgCascadeSelect._setOptions(data, index, opt);
                    if ($.isFunction(opt.success)) {
                        opt.success.call($this, data, opt.selects.eq(index + 1), index + 1)
                    }
                    if (flag) {
                        $.cgCascadeSelect.selectOption(opt.selects.eq(index + 1))
                    }
                })
            }
            if (!flag) {
                if ($.isFunction(opt.change)) {
                    opt.change.call($this, e, value, index)
                }
            }
        },
        _initialized: function($this, index, opt) {
            $.cgCascadeSelect._changeHandler($this, index, opt, true)
        },
        selectOption: function($this) {
            var selectedValue = $this.attr("selected-value");
            $this.find("option").attr("selected", false).filter("[value=" + selectedValue + "]").attr("selected", true)
        },
        getData: function(url, params, callback) {
            var data = $.ajax({
                async: false,
                type: "post",
                url: url,
                data: params,
                dataType: "json"
            }).responseText;
            if (!data) {
                return
            }
            data = eval("(" + data + ")");
            if ($.isFunction(callback)) {
                callback.call(this, data)
            }
        }
    };
    $.fn.cgCascadeSelect = function(opt) {
        opt = $.extend(true, {
            selects: null,
            url: null,
            params: null,
            keys: ["name", "value"],
            defaultOption: null,
            success: null,
            beforeChange: null,
            change: null,
            initialized: false
        },
        opt);
        opt.selects = $(this);
        $.cgCascadeSelect._init(opt)
    }
})(jQuery); (function(a) {
    a.fn.cgColorPicker = function(d) {
        var c = new Array("00", "33", "66", "99", "CC", "FF");
        var e = new Array("FF0000", "00FF00", "0000FF", "FFFF00", "00FFFF", "FF00FF");
        var g = jQuery.extend({},
        {
            ishex: true,
            fillcolor: true,
            target: null,
            event: "click",
            success: function() {},
            reset: function() {}
        },
        d);
        b();
        return this.each(function(m) {
            var n = a(this);
            n.bind(g.event,
            function() {
                var p = a(this).offset().top;
                var q = a(this).outerHeight(true);
                var o = a(this).offset().left;
                a("#colorpanel").css({
                    top: p + q,
                    left: o
                }).show();
                a(document).bind("click", {
                    obj: n
                },
                f);
                var r = g.target ? a(g.target) : n;
                var s = r.val();
                if (s) {
                    a("#DisColor").css("background", s);
                    a("#HexColor").val(s)
                }
                a("#_creset").unbind("click").bind("click",
                function() {
                    a("#colorpanel").hide();
                    r.val("");
                    if (a.isFunction(g.reset)) {
                        g.reset(n)
                    }
                });
                a("#colorlist tr td").unbind("click").mouseover(function() {
                    var t = a(this).css("background-color");
                    a("#DisColor").css("background", t);
                    a("#HexColor").val(a(this).attr("rel"))
                }).click(function() {
                    var u = a(this).css("background");
                    var t = g.ishex ? a(this).attr("rel") : u;
                    if (g.fillcolor) {
                        r.val(t).css("color", t)
                    }
                    a("#colorpanel").hide();
                    a(document).unbind("click", f);
                    if (a.isFunction(g.success)) {
                        g.success(n, t)
                    }
                })
            })
        });
        function f(m) {
            var n = m.data.obj;
            if (m.target != n[0] && !h(m, a("#colorpanel"))) {
                a("#colorpanel").hide();
                a(document).unbind("click", f)
            }
        }
        function h(m, n) {
            var o = n.offset();
            o.right = o.left + n.outerWidth(true);
            o.bottom = o.top + n.outerHeight(true);
            return m.pageY < o.bottom && m.pageY > o.top && m.pageX < o.right && m.pageX > o.left
        }
        function b() {
            a("body").append('<div id="colorpanel" style="position: absolute; display: none;background:#F1F1F1;z-index:1000;border-radius: 4px; box-shadow: 0 0 4px #718BB7;border:1px solid #718BB7"></div>');
            var m = "";
            var n = "";
            for (i = 0; i < 2; i++) {
                for (j = 0; j < 6; j++) {
                    m = m + '<tr height="12">';
                    m = m + '<td width="11" rel="#000000" style="background-color:#000000">';
                    n = i == 0 ? c[j] + c[j] + c[j] : e[j];
                    m = m + '<td width="11" rel="#' + n + '" style="background-color:#' + n + '">';
                    m = m + '<td width="11" rel="#000000" style="background-color:#000000">';
                    for (k = 0; k < 3; k++) {
                        for (l = 0; l < 6; l++) {
                            n = c[k + i * 3] + c[l] + c[j];
                            m = m + '<td width="11" rel="#' + n + '" style="background-color:#' + n + '">'
                        }
                    }
                }
            }
            m = '<table width="253" border="0" cellspacing="0" cellpadding="0"><tr height="30"><td style="background:#F1F1F1;padding:0px 10px;"><input type="button" id="_cclose" style="float:right;border:1px solid #CCCCCC;height:20px;width:40px;" value="关闭" /><input type="button" id="_creset" style="float:right;border:1px solid #CCCCCC;height:20px;width:40px;margin-right:2px" value="清空" /><input type="text" id="DisColor" size="6" disabled style="border:solid 1px #000000;margin-right:10px;"><input type="text" id="HexColor" size="6"></td></tr></table><table id="colorlist" border="1" cellspacing="0" bordercolor="#000" cellpadding="0" style="border-collapse: collapse;cursor:pointer;">' + m + "</table>";
            a("#colorpanel").html(m);
            a("#_cclose").live("click",
            function() {
                a("#colorpanel").hide();
                return false
            })
        }
    }
})(jQuery); (function(a) {
    a.confirm = function(c) {
        var c = a.extend(true, {
            info: "",
            icon: "icon-confirm",
            width: 320,
            height: 120,
            modal: true,
            confirm: function(d) {
                d.data.dialog.close()
            },
            cancel: function(d) {
                d.data.dialog.close()
            }
        },
        c);
        var b = '<div class="cg-message ' + c.icon + '">' + c.info + "</div>";
        return a.fn.cgDialog.init({
            type: "msgbox",
            dialogClass: "cg-message-box",
            content: b,
            width: c.width,
            height: "auto",
            modal: c.modal,
            iframe: false,
            closable: false,
            resizable: false,
            draggable: false,
            buttons: [{
                text: "确定",
                handler: c.confirm
            },
            {
                text: "取消",
                handler: c.cancel
            }]
        })
    }
})(jQuery); (function(a) {
    a.cgDragSort = {
        _init: function(d, c) {
            var b = a(c.sortTarget, d),
            e = b.length;
            if (e === 1) {
                return
            }
            b.each(function() {
                var h = a(this),
                f,
                g = a("<div></div>").addClass(c.className).appendTo("body");
                f = h.cgDrop({
                    container: c.container ? a(c.container) : d,
                    clone: true,
                    cursor: c.cursor,
                    iframeFix: c.iframeFix,
                    handler: c.handler ? a(c.handler, h) : null,
                    drag: function(n, m) {
                        if (a.isFunction(c.drag) && c.drag.call(h, n, b) === false) {
                            return false
                        }
                        a.cgDragSort._setOverTargetStyle(h, b, n, m, g)
                    },
                    start: function(n, m) {
                        if (a.isFunction(c.start) && c.start.call(h, n, b) === false) {
                            return false
                        }
                    },
                    stop: function(n, m) {
                        if (a.isFunction(c.beforeStop) && c.beforeStop.call(h, n, b) === false) {
                            return false
                        } else {
                            a.cgDragSort._replace(h, b, n, m);
                            g.hide();
                            if (a.isFunction(c.stop) && c.stop.call(h, n, b) === false) {
                                return false
                            }
                        }
                    }
                })
            })
        },
        _setOverTargetStyle: function(m, b, h, g, d) {
            var c = b.index(m);
            var f = a.cgDragSort._getOverTarget(b, c, h.pageX, h.pageY);
            if (f) {
                d.offset(f.offset()).css({
                    width: f.outerWidth(),
                    height: f.outerHeight()
                }).show()
            }
        },
        _getOverTarget: function(c, d, b, f) {
            var e;
            c.each(function(g) {
                if (g !== d) {
                    var h = a(this),
                    m = h.getOffset();
                    if (h.isCover(b, f)) {
                        e = h;
                        return false
                    }
                }
            });
            return e
        },
        _replace: function(m, g, n, r) {
            var d = r.$this.offset(),
            h = g.index(m);
            var q = a.cgDragSort._getOverTarget(g, h, n.pageX, n.pageY);
            if (q) {
                var t = g.index(q);
                var o = m.prev(),
                s = m.next(),
                c = q.next(),
                b = q.prev();
                if (c.length !== 0) {
                    var f = g.index(c);
                    if (h !== f) {
                        m.insertBefore(c)
                    } else {
                        m.insertAfter(q)
                    }
                } else {
                    m.appendTo(m.parent())
                }
                if (o.length !== 0) {
                    var p = g.index(o);
                    if (t !== p) {
                        q.insertAfter(o)
                    } else {
                        m.insertBefore(q)
                    }
                } else {
                    q.prependTo(q.parent())
                }
            }
            r.drag.offset(d);
            r.drag.remove()
        }
    };
    a.fn.cgDragSort = function(b) {
        b = a.extend(true, {
            stop: null,
            beforeStop: null,
            start: null,
            drag: null,
            cursor: "move",
            container: null,
            handler: null,
            sortTarget: null,
            iframeFix: false,
            className: "cg-dragsort-border"
        },
        b);
        return a(this).each(function() {
            a.cgDragSort._init(a(this), b)
        })
    }
})(jQuery); (function($) {
    $.cgForm = {
        validate: function(obj, delimiter) {
            var flags = obj.attr("flags") || "",
            reg = new RegExp(obj.attr("reg"), flags),
            splitChar = obj.attr("splitChar") || "|",
            value = obj.getFormElementValue({
                delimiter: delimiter || splitChar
            }),
            inputType = obj.attr("inputType"),
            flag = true,
            ajaxFlag = true,
            needed = eval(obj.attr("needed")),
            min = obj.attr("min"),
            max = obj.attr("max"),
            minLength = obj.attr("minLength"),
            maxLength = obj.attr("maxLength");
            var validate = function() {
                if (minLength && ("" + minLength).isNumber()) {
                    flag = (value.length >= minLength)
                }
                if (flag && maxLength && ("" + maxLength).isNumber()) {
                    flag = (value.length <= maxLength)
                }
                if (flag && min && ("" + min).isNumber() && value.isNumber()) {
                    min = parseFloat(min);
                    flag = (value >= min)
                }
                if (flag && max && ("" + max).isNumber() && value.isNumber()) {
                    max = parseFloat(max);
                    flag = (value <= max)
                }
                if (flag && !reg.test(value)) {
                    flag = false
                }
                if (flag && obj.attr("url") != undefined) {
                    ajaxFlag = $.cgForm.ajaxValidate(obj, value);
                    flag = ajaxFlag
                }
            };
            if (needed) {
                if (value.length < 1) {
                    flag = false
                } else {
                    flag = $.cgForm.validateType(inputType, value);
                    if (flag) {
                        validate()
                    }
                }
            } else {
                if (value.length > 0) {
                    flag = $.cgForm.validateType(inputType, value);
                    if (flag) {
                        validate()
                    }
                }
            }
            if (flag && ajaxFlag) {
                $.cgForm.hideTips(obj)
            } else {
                if (ajaxFlag) {
                    $.cgForm.showTips(obj)
                }
            }
            return flag
        },
        validateType: function(inputType, value) {
            var flag = true;
            if (inputType) {
                switch (inputType) {
                case "number":
                    flag = value.isNumber();
                    break;
                case "negativeNumber":
                    flag = value.isNegativeNumber();
                    break;
                case "positiveNumber":
                    flag = value.isPositiveNumber();
                    break;
                case "integer":
                    flag = value.isInteger();
                    break;
                case "positiveInteger":
                    flag = value.isPositiveInteger();
                    break;
                case "negativeInteger":
                    flag = value.isNegativeInteger();
                    break;
                case "email":
                    flag = value.isEmail();
                    break;
                case "mobilephone":
                    flag = value.isMobilephone();
                    break;
                case "telphone":
                    flag = value.isTelphone();
                    break;
                case "phone":
                    flag = value.isPhone();
                    break;
                case "url":
                    flag = value.isUrl();
                    break;
                case "idcard":
                    flag = value.isIdcard();
                    break;
                case "chinese":
                    flag = value.isChinese();
                    break;
                case "qq":
                    flag = value.isQq();
                    break;
                case "ip":
                    flag = value.isIp();
                    break
                }
            }
            return flag
        },
        ajaxValidate: function(obj, value, delimiter) {
            var url = obj.attr("url"),
            callbackdata = "",
            data = {},
            flag = true;
            data[obj.attr("name")] = value || obj.getFormElementValue({
                delimiter: delimiter
            });
            callbackdata = $.ajax({
                url: url,
                data: data,
                async: false,
                type: obj.attr("requestType") || "post",
                error: function() {
                    $.cgForm.showTips(obj, "出现异常，请重试！")
                }
            }).responseText;
            if (callbackdata) {
                callbackdata = eval("(" + callbackdata + ")");
                if (typeof callbackdata !== "object") {
                    if (callbackdata == "success") {
                        $.cgForm.hideTips(obj);
                        return true
                    } else {
                        $.cgForm.showTips(obj, callbackdata)
                    }
                } else {
                    if (typeof callbackdata === "object") {
                        if (callbackdata.status == 200) {
                            $.cgForm.hideTips(obj);
                            return true
                        } else {
                            $.cgForm.showTips(obj, callbackdata.message)
                        }
                    }
                }
            }
            return false
        },
        showTips: function(obj, tip) {
            tip = tip ? tip: obj.attr("tips");
            if (!obj.data("style") && obj.data("style") != "") {
                obj.data("style", obj.attr("style") || "")
            }
            obj.css("border", "2px solid #F00");
            if (tip) {
                if (!obj.data("cg-form-tooltips")) {
                    var tipsId = "cg-form-tooltips-" + (new Date()).getTime();
                    var html = '<div id="cg-form-tooltips" class="cg-tooltips"><div id="form-tip-arrow" class="cg-tooltips-arrow"></div><div id="cg-tooltips-message">' + tip + "</div></div>",
                    $html = $(html);
                    $html.css({
                        position: "absolute",
                        left: obj.offset().left,
                        top: obj.offset().top + obj.outerHeight(true) + 10
                    }).addClass(tipsId).hide().appendTo("body").fadeIn(200);
                    obj.data("cg-form-tooltips", tipsId)
                } else {
                    $("#cg-tooltips-message", $("." + obj.data("cg-form-tooltips"))).html(tip);
                    $("." + obj.data("cg-form-tooltips")).css({
                        left: obj.offset().left,
                        top: obj.offset().top + obj.outerHeight(true) + 10
                    }).fadeIn(200)
                }
            }
        },
        hideTips: function(obj, speed) {
            if (obj.data("style") !== "undefined") {
                obj.attr("style", obj.data("style"))
            }
            $("." + obj.data("cg-form-tooltips")).fadeOut(speed || 200)
        }
    };
    $.fn.clearFormTips = function() {
        $(this).getValidateElements().each(function() {
            $.cgForm.hideTips($(this))
        })
    };
    $.fn.initForm = function(o) {
        o = $.extend(true, {
            errorClass: "cg-form-failed",
            beforeSend: null,
            success: null,
            error: null,
            async: true,
            cache: false,
            dataType: "html",
            type: "post",
            url: null,
            delimiter: "|",
            params: null,
            extendedValidate: null,
            validateFail: null,
            submitButton: ".submit",
            clearButton: ".clear",
            resetButton: ".reset",
            ajaxSubmitButton: ".ajax-submit"
        },
        o);
        return $(this).each(function() {
            var $this = $(this);
            if (!o.type) {
                o.type = $this.attr("method")
            }
            if (!o.url) {
                o.url = $this.attr("action")
            }
            var initBtn = function() {
                var submit = $(o.submitButton, $this),
                ajaxSubmit = $(o.ajaxSubmitButton, $this),
                reset = $(o.resetButton, $this),
                clear = $(o.clearButton, $this);
                submit.click(function(e) {
                    var btn = $(this),
                    href = btn.attr("action");
                    if (!href) {
                        href = btn.attr("href")
                    }
                    if (href) {
                        $this.attr("action", href)
                    }
                    if ($this.validateForm({
                        extendedValidate: o.extendedValidate,
                        errorClass: o.errorClass,
                        validateFail: o.validateFail
                    })) {
                        $this[0].submit()
                    }
                    e.preventDefault()
                });
                ajaxSubmit.click(function(e) {
                    var btn = $(this),
                    href = btn.attr("action");
                    if (!href) {
                        href = btn.attr("href")
                    }
                    if (href) {
                        $this.attr("action", href);
                        o.url = href
                    }
                    $this.ajaxSubmitForm({
                        beforeSend: o.beforeSend,
                        success: o.success,
                        error: o.error,
                        async: o.async,
                        cache: o.cache,
                        dataType: o.dataType,
                        type: o.type,
                        url: o.url,
                        delimiter: o.delimiter,
                        params: o.params,
                        extendedValidate: o.extendedValidate,
                        validateFail: o.validateFail
                    });
                    e.preventDefault()
                });
                reset.click(function(e) {
                    $this.resetForm();
                    e.preventDefault()
                });
                clear.click(function(e) {
                    $this.clearForm();
                    e.preventDefault()
                })
            };
            initBtn();
            $this.submit(function() {
                if (! ($this.validateForm({
                    extendedValidate: o.extendedValidate,
                    errorClass: o.errorClass,
                    validateFail: o.validateFail
                }))) {
                    return false
                }
            });
            $this.getValidateElements().each(function() {
                $(this).focusin(function() {}).blur(function() {
                    $.cgForm.validate($(this))
                })
            })
        })
    };
    $.fn.ajaxSubmitForm = function(o) {
        o = $.extend(true, {
            beforeSend: null,
            success: null,
            error: null,
            async: true,
            cache: false,
            dataType: "json",
            type: "post",
            url: null,
            delimiter: "|",
            params: null,
            extendedValidate: null,
            validateFail: null
        },
        o);
        return $(this).each(function() {
            var $this = $(this);
            if (!o.type) {
                o.type = $this.attr("method")
            }
            if (!o.url) {
                o.url = $this.attr("action")
            }
            if ($this.validateForm({
                extendedValidate: o.extendedValidate,
                validateFail: o.validateFail
            })) {
                var data = $.extend({},
                $this.getFormData({
                    delimiter: o.delimiter
                }), o.params || {});
                $.ajax({
                    async: o.async,
                    cache: o.cache,
                    dataType: o.dataType,
                    type: o.type,
                    url: o.url,
                    data: data,
                    beforeSend: o.beforeSend,
                    success: o.success,
                    error: o.error
                })
            }
        })
    };
    $.fn.resetForm = function() {
        return $(this).each(function() {
            $(this)[0].reset()
        })
    };
    $.fn.clearForm = function() {
        $("input:not(:button,:submit,:reset,:image,:radio,:checkbox),textarea", $(this)).val("");
        $("select option:selected,input:checkbox:checked,input:radio:checked", $(this)).attr("selected", false).attr("checked", false);
        return $(this)
    };
    $.fn.getFormData = function(o) {
        o = $.extend({
            delimiter: "|"
        },
        o);
        var $this = $(this).eq(0);
        var data = {};
        $("input:not(:button,:submit,:reset,:checkbox,:radio,:image)[name],textarea[name],input[type=checkbox][name]:checked,input[type=radio][name]:checked", $this).each(function() {
            var name = $(this).attr("name"),
            value = $(this).val();
            if (value != "" && name != "") {
                if (data[name] == undefined) {
                    data[name] = value
                } else {
                    data[name] = data[name] + o.delimiter + value
                }
            }
        });
        $("select[name] option:selected", $this).each(function() {
            var name = $(this).parent().attr("name"),
            value = $(this).val();
            if (name != "" && value != "") {
                if (data[name] == undefined) {
                    data[name] = value
                } else {
                    data[name] = data[name] + o.delimiter + value
                }
            }
        });
        return data
    };
    $.fn.loadFormData = function(o) {
        var $this = $(this).eq(0);
        o = $.extend(true, {
            beforeSend: null,
            success: null,
            error: null,
            cache: false,
            dataType: "json",
            type: "post",
            url: null,
            params: null,
            delimiter: "|"
        },
        o);
        $.ajax({
            cache: o.cache,
            dataType: o.dataType,
            type: o.type,
            url: o.url,
            data: o.params,
            beforeSend: o.beforeSend,
            success: function(data) {
                if ($.isFunction(o.success) && o.success.call($this, data) === false) {} else {
                    if (data) {
                        $this.setFormData({
                            data: data,
                            delimiter: o.delimiter
                        })
                    }
                }
            },
            error: o.error
        })
    };
    $.fn.validateForm = function(o) {
        o = $.extend({
            extendedValidate: null,
            validateFail: null,
            errorClass: "cg-form-failed"
        },
        o);
        var isSubmit = true,
        $this = $(this).eq(0);
        $this.getValidateElements().each(function() {
            isSubmit = $.cgForm.validate($(this));
            if (!isSubmit) {
                if ($.isFunction(o.validateFail)) {
                    o.validateFail.call($this, $(this))
                }
                return false
            }
        });
        if (isSubmit && $.isFunction(o.extendedValidate)) {
            return o.extendedValidate.call($this)
        }
        return isSubmit
    };
    $.fn.getValidateElements = function() {
        return $("input,textarea,select", $(this)).filter("[reg],[url],[inputType],[needed],[min],[max],[minLength],[maxLength]")
    };
    $.fn.setFormData = function(o) {
        o = $.extend({
            delimiter: null,
            data: null
        },
        o);
        var $this = $(this).eq(0);
        $this.clearForm();
        $("input:text[name],:file[name],select[name],textarea[name],input:checkbox[name],input:radio[name],input:hidden[name]", $this).each(function(index) {
            var name = $(this).attr("name"),
            dataArray,
            value = o.data[name];
            if (value) {
                dataArray = value.split(o.delimiter);
                var len = dataArray.length
            }
            if ($(this).is(":checkbox")) {
                for (var i = 0; i < len; i++) {
                    if (dataArray[i] == $(this).val()) {
                        $(this).attr("checked", true)
                    }
                }
            } else {
                if ($(this)[0].tagName == "SELECT") {
                    $("option", $(this)).each(function(index) {
                        for (var i = 0; i < len; i++) {
                            if (dataArray[i] == $(this).val()) {
                                $(this).attr("selected", true)
                            }
                        }
                    })
                } else {
                    if ($(this).is(":radio")) {
                        for (var i = 0; i < len; i++) {
                            if (dataArray[i] == $(this).val()) {
                                $(this).attr("checked", true)
                            }
                        }
                    } else {
                        $(this).val(value)
                    }
                }
            }
        })
    };
    $.fn.getFormElementValue = function(o) {
        o = $.extend({
            delimiter: null
        },
        o);
        var len = $(this).length,
        $this = $(this).eq(0),
        value = new Array();
        if ($this.is(":text") || $this.is(":password") || $this.is(":file") || $this.is(":hidden") || $this[0].tagName == "TEXTAREA") {
            return $this.val()
        } else {
            if ($this.is(":checkbox") || $this.is(":radio")) {
                $(this).filter(":checked").each(function() {
                    value.push($(this).val())
                });
                if ($this.is(":radio")) {
                    return value[0]
                } else {
                    if (o.delimiter) {
                        return CG.aryToStr(value, o.delimiter)
                    } else {
                        return value
                    }
                }
            } else {
                if ($this[0].tagName == "SELECT") {
                    if (o.delimiter) {
                        return CG.aryToStr($this.val(), o.delimiter)
                    } else {
                        return $this.val()
                    }
                }
            }
        }
        return ""
    }
})(jQuery); (function(a) {
    a.messageBox = function(c) {
        var c = a.extend({
            info: "",
            width: 320,
            height: 120,
            modal: true,
            buttons: [{
                text: "确定",
                handler: function(d) {}
            },
            {
                text: "取消",
                handler: function(d) {
                    d.data.dialog.close()
                }
            }]
        },
        c);
        var b = '<div class="cg-message">' + c.info + "</div>";
        return a.fn.cgDialog.init({
            type: "msgbox",
            dialogClass: "cg-message-box cg-custom-message-box",
            content: b,
            width: c.width,
            height: "auto",
            modal: c.modal,
            iframe: false,
            closable: false,
            resizable: false,
            draggable: false,
            buttons: c.buttons
        })
    }
})(jQuery); (function(a) {
    a.cgPopup = {
        _init: function(e, c) {
            var b = '<div class="cg-popup"><h2 class="cg-popup-title"></h2><div class="cg-popup-content clearfix"></div><div class="cg-popup-arrow"></div></div>';
            var d = {};
            d.popup = a(b);
            d.title = d.popup.find(".cg-popup-title");
            d.content = d.popup.find(".cg-popup-content");
            d.$this = e;
            d.$this.data("popup", d.popup);
            d.popup.appendTo("body");
            this._setContentAndTitle(d, c);
            this._setPosition(d, c);
            this._bindEvent(d, c);
            if (c.firstVisible) {
                a.cgPopup._show(d, c)
            }
        },
        _bindEvent: function(c, b) {
            if (b.event === "click") {
                c.$this.toggle(function(d) {
                    if (b.beforeShow && a.isFunction(b.beforeShow) && b.beforeShow.call(this, d, c) === false) {
                        return false
                    }
                    a.cgPopup._show(c, b);
                    return false
                },
                function(d) {
                    if (b.beforeHide && a.isFunction(b.beforeHide) && b.beforeHide.call(this, d, c) === false) {
                        return false
                    }
                    a.cgPopup._hide(c, b);
                    return false
                })
            } else {
                c.$this.hover(function(d) {
                    if (b.beforeShow && a.isFunction(b.beforeShow) && b.beforeShow.call(this, d, c) === false) {
                        return false
                    }
                    a.cgPopup._show(c, b)
                },
                function(d) {
                    if (b.beforeHide && a.isFunction(b.beforeHide) && b.beforeHide.call(this, d, c) === false) {
                        return false
                    }
                    a.cgPopup._hide(c, b)
                })
            }
        },
        _show: function(c, b) {
            c.popup.delay(b.delay).stop(true, true).fadeToggle(b.speed)
        },
        _hide: function(c, b) {
            c.popup.delay(b.delay).stop(true, true).fadeToggle(b.speed)
        },
        _setContentAndTitle: function(c, b) {
            if (b.title) {
                c.title.html(b.title)
            } else {
                c.title.remove()
            }
            if (typeof b.content === "string") {
                c.content.html(b.content)
            } else {
                c.content.html(a(b.content).html())
            }
        },
        _setPosition: function(e, c) {
            e.popup.css({
                width: c.width,
                height: c.height
            });
            var h = e.popup.getSize(),
            m = e.$this.offset(),
            b = e.$this.getSize(),
            g,
            f,
            d;
            switch (c.placement) {
            case "left":
                d = "cg-popup-right";
                g = m.left - h.outerWidth - 10;
                f = m.top + b.outerHeight / 2 - h.outerHeight / 2;
                break;
            case "right":
                d = "cg-popup-left";
                g = m.left + b.outerWidth + 10;
                f = m.top + b.outerHeight / 2 - h.outerHeight / 2;
                break;
            case "top":
                d = "cg-popup-bottom";
                g = m.left - h.outerWidth / 2 + b.outerWidth / 2;
                f = m.top - h.outerHeight - 10;
                break;
            case "bottom":
                d = "cg-popup-top";
                g = m.left - h.outerWidth / 2 + b.outerWidth / 2;
                f = m.top + b.outerHeight + 10;
                break
            }
            e.popup.addClass(d).css({
                left: g,
                top: f
            })
        }
    };
    a.fn.cgPopup = function(b) {
        b = a.extend({
            width: null,
            height: null,
            title: null,
            content: null,
            beforeShow: null,
            beforeHide: null,
            event: "click",
            delay: 100,
            speed: 200,
            firstVisible: false,
            placement: "right"
        },
        b);
        return a(this).each(function() {
            a.cgPopup._init(a(this), b)
        })
    }
})(jQuery); (function(a) {
    a.prompt = function(c) {
        var c = a.extend(true, {
            info: "",
            icon: "icon-confirm",
            width: 320,
            height: 120,
            modal: true,
            inputType: null,
            confirm: function(e, d) {
                e.data.dialog.close()
            },
            cancel: function(d) {
                d.data.dialog.close()
            }
        },
        c);
        var b = '<div class="cg-message ' + c.icon + '">' + c.info + '<br/><input type="text" id="cg-prompt-input" value=""/></div>';
        return a.fn.cgDialog.init({
            type: "msgbox",
            dialogClass: "cg-message-box",
            content: b,
            width: c.width,
            height: "auto",
            modal: c.modal,
            iframe: false,
            closable: false,
            resizable: false,
            draggable: false,
            buttons: [{
                text: "确定",
                handler: function(e) {
                    var f = e.data;
                    result = a("#cg-prompt-input", f.dialog.contentBox).val();
                    if (c.inputType) {
                        var d = false;
                        switch (c.inputType) {
                        case "integer":
                            d = result.isInteger();
                            break;
                        case "positiveInteger":
                            d = result.isPositiveInteger();
                            break;
                        case "negativeInteger":
                            d = result.isNegativeInteger();
                            break;
                        case "number":
                            d = result.isNumber();
                            break;
                        case "chinese":
                            d = result.isChinese();
                            break;
                        case "phone":
                            d = result.isPhone();
                            break;
                        case "email":
                            d = result.isEmail();
                            break
                        }
                        if (d) {
                            c.confirm(e, result)
                        }
                    } else {
                        c.confirm(e, result)
                    }
                }
            },
            {
                text: "取消",
                handler: c.cancel
            }]
        })
    }
})(jQuery); (function(a) {
    a.fn.cgSelect = function(c) {
        c = a.extend(true, {
            width: null,
            height: null,
            change: null,
            beforeChange: null,
            left: null,
            top: null
        },
        c);
        var b = {
            destory: function() {
                f.selectedOption.unbind("click", e.show);
                f.optionContainer.remove()
            },
            disable: function() {
                f.optionContainer.hide();
                f.selectedOption.unbind("click", e.show)
            },
            enable: function() {
                f.selectedOption.bind("click", e.show)
            }
        };
        var e = {
            init: function() {
                f.select = a(CG.CONST.SELECT_HTML);
                f.selectedOption = f.select.find(".cg-select-name");
                var h = "",
                g = false;
                f.$this.hide();
                f.$this.find("option").each(function(m) {
                    var n = a(this);
                    if (n.is(":selected")) {
                        e.setValue(n, m);
                        g = true;
                        h += '<li value="' + n.attr("value") + '" selected="selected" class="cg-option-selected">' + n.html() + "</li>"
                    } else {
                        h += '<li value="' + n.attr("value") + '">' + n.html() + "</li>"
                    }
                });
                if (!g) {
                    e.setValue(f.$this.find("option:eq(0)"), 0)
                }
                f.select.find(".cg-option ul").html(h);
                f.optionContainer = f.select.find(".cg-option");
                f.options = a("li", f.optionContainer);
                e.create();
                e.initCss();
                return b
            },
            initCss: function() {
                f.select.css("position", "relative");
                f.optionContainer.css("position", "absolute");
                if (c.left) {
                    f.optionContainer.setPosition(c.left, null)
                } else {
                    if (!a.isNumeric(parseInt(f.optionContainer.css("left")))) {
                        f.optionContainer.setPosition(0, null)
                    }
                }
                if (c.top) {
                    f.optionContainer.setPosition(null, c.top)
                } else {
                    if (!a.isNumeric(parseInt(f.optionContainer.css("top")))) {
                        f.optionContainer.setPosition(null, f.selectedOption.getSize().outerHeight)
                    }
                }
                if (c.width) {
                    f.optionContainer.setSize(c.width, null)
                }
                if (c.height) {
                    f.optionContainer.setSize(null, c.height)
                }
            },
            create: function() {
                f.select.appendTo(f.$this.parent());
                f.selectedOption.click(e.show);
                a(document).click(function(g) {
                    if (!f.select.isCover(g.pageX, g.pageY) && !f.optionContainer.isCover(g.pageX, g.pageY)) {
                        e.hide()
                    }
                });
                f.options.click(function(g) {
                    e.change(g, a(this))
                })
            },
            setValue: function(h, g) {
                f.selectedOption.html(h.html()).attr("value", h.attr("value"));
                f.$this.find("option").attr("selected", false).eq(g).attr("selected", true)
            },
            change: function(n, h) {
                var g = f.options.index(h),
                m = h.attr("value");
                f.options.filter(".cg-option-selected").removeClass("cg-option-selected").removeAttr("selected");
                h.addClass("cg-option-selected").attr("selected", "selected");
                if (a.isFunction(c.beforeChange) && c.beforeChange.call(f.$this, n, m) === false) {} else {
                    e.setValue(h, g);
                    e.hide();
                    if (a.isFunction(c.change)) {
                        c.change.call(f.$this, n, m)
                    }
                }
            },
            show: function() {
                f.optionContainer.show()
            },
            hide: function() {
                f.optionContainer.hide()
            }
        };
        var f = {},
        d = {};
        f.$this = a(this).eq(0);
        return e.init()
    }
})(jQuery); (function(a) {
    a.fn.cgSlider = function(c) {
        c = a.extend(true, {
            handler: null,
            start: null,
            stop: null,
            slide: null,
            vertical: false,
            width: 230,
            maximum: 100,
            minimum: 0,
            value: 60,
            toggleByClick: false,
            order: "asc",
            speed: 0,
            fullmark: 100,
            reverseValue: null,
            obverseValue: null
        },
        c);
        var b = {
            getValue: function(e) {
                var d = (e / c.width) * c.fullmark;
                if (c.order === "desc") {
                    d = c.fullmark - d
                }
                if (a.isFunction(c.obverseValue)) {
                    d = c.obverseValue.call(this, d)
                }
                return d
            },
            getDistance: function(d) {
                var e = (d / c.fullmark) * c.width;
                return e
            }
        };
        return a(this).each(function(f) {
            var m = {};
            m.$this = a(this);
            var g = b.getDistance(c.minimum);
            var e = b.getDistance(c.maximum);
            var n = function() {
                m.$this.html(CG.CONST.SLIDER_HTML);
                c.width = c.width || 200;
                m.container = a(".cg-slider-range-container", m.$this);
                m.container.width(c.width);
                m.handler = a(".cg-slider-handler", m.$this);
                m.range = a(".cg-slider-range", m.$this);
                m.value = c.value;
                if (a.isFunction(c.reverseValue)) {
                    m.value = c.reverseValue.call(this, m.value)
                }
                var o = b.getDistance(c.order == "desc" ? c.fullmark - m.value: m.value);
                m.handler.setPosition(o);
                m.range.setSize(o);
                m.handler.html(parseInt(c.value))
            };
            n();
            var h = m.handler.cgDrag({
                direction: "we",
                opacity: 1,
                iframeFix: false,
                start: function(q, p) {
                    var o = b.getValue(p.currentPosition.left);
                    m.value = o;
                    if (a.isFunction(c.start) && c.start.call(m.$this, q, o) === false) {
                        return false
                    }
                },
                drag: function(r, q, o) {
                    if (q.currentPosition.left <= g) {
                        q.currentPosition.left = g
                    } else {
                        if (q.currentPosition.left >= e) {
                            q.currentPosition.left = e
                        }
                    }
                    var p = b.getValue(q.currentPosition.left);
                    m.value = p;
                    if (a.isFunction(c.slide) && c.slide.call(m.$this, r, p) === false) {
                        return false
                    }
                    m.range.setSize(q.currentPosition.left);
                    m.handler.html(parseInt(p))
                },
                stop: function(q, p) {
                    var o = m.value;
                    if (a.isFunction(c.stop) && c.stop.call(m.$this, q, o) === false) {
                        return false
                    }
                }
            });
            var d = function() {
                if (c.toggleByClick) {
                    var p = m.range.getOffset().left;
                    var o = function(s, r) {
                        var q;
                        q = s.pageX - r;
                        if (q > c.width) {
                            q = c.width
                        } else {
                            if (q < 0) {
                                q = 0
                            }
                        }
                        return q
                    };
                    m.$this.mousedown(function(t) {
                        var q = o(t, p);
                        var s = b.getValue(q);
                        m.value = s;
                        if (a.isFunction(c.start) && c.start.call(m.$this, t, s) === false) {
                            return false
                        }
                        var r = function(w) {
                            var u = o(w, p);
                            var v = b.getValue(u);
                            m.value = v;
                            if (a.isFunction(c.stop) && c.stop.call(m.$this, w, v) === false) {
                                return false
                            }
                            m.handler.setPosition(u, null, c.speed);
                            m.range.animate({
                                width: u
                            },
                            c.speed);
                            m.handler.html(parseInt(v));
                            w.stopPropagation()
                        };
                        a(this).one("mouseup", r);
                        t.stopPropagation()
                    })
                }
            };
            d()
        })
    }
})(jQuery); (function(a) {
    a.cgTabTotal = 0;
    a.cgTab = {
        close: function(d) {
            var b = this;
            var e = b.getIndex(d);
            if (e != -1) {
                b.tab.remove();
                b.content.remove();
                d.cgTabs.del(e);
                d._afresh();
                var c = d.getCurrent();
                if (typeof c == "undefined") {
                    c = e - 1;
                    if (c < 0) {
                        c = 0
                    }
                }
                d._scroll();
                d.select(d.cgTabs[c])
            }
        },
        select: function(d) {
            var b = this,
            c = b.getIndex(d);
            if (c == -1) {
                return
            }
            if (d.cgTabs[d.current]) {
                d.contents.hide();
                d.tabs.removeClass(d.selectedClass)
            }
            b.content.show();
            b.tab.addClass(d.selectedClass);
            d.current = c
        },
        reload: function(d) {
            var b = this;
            var c = a("iframe", b.content);
            if (!d) {
                c.attr("src", c.attr("src"))
            } else {
                c.attr("src", d)
            }
        },
        getIndex: function(b) {
            return b.tabs.index(this.tab)
        },
        getValue: function() {
            var b = this.getIframe();
            if (b && b.$) {
                return b.$.returnValue
            }
        },
        getIframe: function() {
            var b;
            b = a("iframe", this.content)[0].contentWindow;
            return b
        },
        _init: function(c) {
            var b = this;
            b.tab.unbind("click").click(function() {
                c.select(b)
            });
            a(".icon-close", b.tab).unbind("click").click(function(d) {
                if (typeof b.closeHandler == "function") {
                    b.closeHandler(d, b)
                } else {
                    c.close(b)
                }
            })
        }
    };
    a.fn.cgTab = {
        init: function(c) {
            var f = a.extend(true, {},
            {
                id: "header-tabs",
                tabContainer: ".tabs ul",
                tab: ".tab",
                contentContainer: "#container",
                content: ".iframe-box",
                selectedClass: "tab-selected",
                current: 0,
                scrollEffect: {
                    next: ".tabs-button .icon-next",
                    prev: ".tabs-button .icon-pre",
                    distance: 300,
                    speed: 200
                }
            },
            c);
            var b = {
                _scroll: function() {
                    var r = this,
                    h = r.tabContainer,
                    g = r.tabWidth,
                    m = r.tabContainer.parent().width();
                    a(window).resize(function() {
                        m = r.tabContainer.parent().width()
                    });
                    var q = Math.abs(parseInt(h.css("left"))) || 0;
                    if (m > g - q) {
                        q = q - (m - (g - q));
                        if (q < 0) {
                            q = 0
                        }
                    }
                    if (h.css("position") != "absolute") {
                        h.css({
                            position: "relative",
                            width: g,
                            left: -q
                        })
                    } else {
                        h.css({
                            width: g,
                            left: -q
                        })
                    }
                    if (!h.parent().css("position")) {
                        h.parent().css({
                            position: "relative"
                        })
                    }
                    var n = function() {
                        if (g > m) {
                            q = Math.abs(parseInt(h.css("left")));
                            if (q < g - m) {
                                var o = r.scrollEffect.distance;
                                if (o > g - m - q) {
                                    o = g - m - q
                                }
                                h.stop().animate({
                                    left: "-=" + o
                                },
                                r.scrollEffect.speed)
                            }
                        }
                    };
                    var p = function() {
                        q = parseInt(h.css("left"));
                        if (q < 0) {
                            var o = r.scrollEffect.distance;
                            if (Math.abs(q) < o) {
                                o = Math.abs(q)
                            }
                            h.stop().animate({
                                left: "+=" + o
                            },
                            r.scrollEffect.speed)
                        }
                    };
                    r.scrollEffect.next.unbind("click").click(function() {
                        n()
                    });
                    r.scrollEffect.prev.unbind("click").click(function() {
                        p()
                    });
                    r.tabContainer.unbind("mousewheel").mousewheel(function(o, s) {
                        if (s > 0) {
                            p()
                        } else {
                            if (s < 0) {
                                n()
                            }
                        }
                        return false
                    })
                },
                _afresh: function() {
                    var g = this;
                    g.contents = a(g.content, g.contentContainer);
                    g.tabs = a(g.tab, g.tabContainer);
                    g.tabsLength = g.tabs.length;
                    g.tabWidth = g._getTabBoxWidth()
                },
                _getTabBoxWidth: function() {
                    var h = this;
                    var g = 0;
                    if (a.ieVersion <= 7) {
                        g = 2
                    }
                    h.tabContainer.width(5000);
                    h.tabs.each(function(m) {
                        g += h.tabs.eq(m).outerWidth(true)
                    });
                    g += 2;
                    h.tabContainer.width(g);
                    return g
                },
                add: function(m) {
                    a.cgTabTotal += 1;
                    var n = this,
                    q = {};
                    m = a.extend(true, {},
                    {
                        id: "tab_" + a.cgTabTotal,
                        title: "",
                        content: "",
                        contentHtml: null,
                        iframe: true,
                        href: null,
                        closable: true,
                        closeHandler: null,
                        icon: null,
                        repeat: false,
                        before: function() {},
                        after: function() {}
                    },
                    m);
                    if (typeof n.before == "function") {
                        if (!n.before()) {
                            return
                        }
                    }
                    var r = n.exist({
                        id: m.id
                    });
                    if (!m.repeat && r != -1) {
                        n.select(n.cgTabs[r]);
                        return n.cgTabs[r]
                    }
                    var h = '<li class="btn tab"><div class="btn-left"></div><div class="btn-inner"><span class="btn-icon"></span><span class="btn-title"></span><span class="btn-role icon-close"></span></div><div class="btn-right"></div></li>';
                    if (m.contentHtml) {
                        var u = m.contentHtml
                    } else {
                        var u = '<div class="iframe-box"></div>'
                    }
                    var s;
                    if (m.iframe) {
                        s = "<iframe frameborder='0' width='100%' height='100%' scrolling='auto' src=" + m.href + "></iframe>"
                    } else {
                        if (typeof m.content == "string") {
                            s = m.content
                        } else {
                            try {
                                s = m.content.outerHTML()
                            } catch(t) {}
                        }
                    }
                    q.tab = a(h).attr("id", m.id);
                    q.content = a(u).html(s);
                    if (!m.closable) {
                        a(".btn-role", q.tab).remove()
                    }
                    if (m.icon) {
                        a(".btn-icon", q.tab).addClass(m.icon)
                    } else {
                        a(".btn-icon", q.tab).remove()
                    }
                    a(".btn-title", q.tab).html(m.title);
                    q.tab.appendTo(n.tabContainer);
                    q.content.appendTo(n.contentContainer);
                    n._afresh();
                    n._scroll();
                    var v = n.tabWidth;
                    var p = n.tabContainer.parent().width();
                    if (v > p) {
                        n.tabContainer.stop().animate({
                            left: -v + p
                        },
                        n.scrollEffect.speed)
                    }
                    var g = a.extend(true, {},
                    m, q, a.cgTab);
                    n.cgTabs.push(g);
                    n.select(g);
                    g._init(n);
                    if (typeof n.after == "function") {
                        if (!n.after()) {
                            return
                        }
                    }
                    return g
                },
                getCurrent: function() {
                    var h = this,
                    g;
                    h.tabs.each(function(m) {
                        if (a(this).hasClass(h.selectedClass)) {
                            this.current = m;
                            g = m
                        }
                    });
                    return g
                },
                getCurrentTab: function() {
                    return this.cgTabs[this.getCurrent()]
                },
                selectTabById: function(h) {
                    var g = this.getTabById(h);
                    if (g) {
                        this.select(g)
                    }
                },
                select: function(g) {
                    if (g) {
                        g.select(this)
                    }
                },
                close: function(g) {
                    g.close(this)
                },
                exist: function(n) {
                    for (var h = 0; h < this.cgTabs.length; h++) {
                        var g = true;
                        for (var m in n) {
                            g = g && (n[m] == this.cgTabs[h][m])
                        }
                        if (g == true) {
                            return h
                        }
                    }
                    return - 1
                },
                getTabByParams: function(o) {
                    var m = new Array();
                    for (var h = 0; h < this.cgTabs.length; h++) {
                        var g = true;
                        for (var n in o) {
                            g = g && (o[n] == this.cgTabs[h][n])
                        }
                        if (g == true) {
                            m.push(this.cgTabs[h])
                        }
                    }
                    return m
                },
                getTabById: function(h) {
                    for (var g = 0; g < this.cgTabs.length; g++) {
                        if (h == this.cgTabs[g].id) {
                            return this.cgTabs[g]
                        }
                    }
                }
            };
            var e = a(this);
            f.tabContainer = a(f.tabContainer);
            f.tabs = a(f.tab, f.tabContainer);
            f.contentContainer = a(f.contentContainer);
            f.contents = a(f.content, f.contentContainer);
            f.scrollEffect.next = a(f.scrollEffect.next);
            f.scrollEffect.prev = a(f.scrollEffect.prev);
            f.tabsLength = f.tabs.length;
            var d = a.extend(true, {},
            f, b);
            d.tabContainer.attr("id", d.id);
            d.cgTabs = new Array();
            d.tabs.each(function(h) {
                a.cgTabTotal += 1;
                var m = {};
                m.id = a(this).attr("id") || ("tab_" + a.cgTabTotal);
                a(this).attr("id", m.id);
                m.title = a(".btn-title", a(this)).html();
                m.closable = a(".btn-role", a(this)).length != 0;
                m.content = d.contents.eq(h);
                m.href = a("iframe", m.content).attr("src");
                m.tab = a(this);
                if (a(this).hasClass(d.selectedClass)) {
                    d.current = h
                }
                var g = a.extend(true, {},
                m, a.cgTab);
                d.cgTabs.push(g);
                g._init(d)
            });
            d._afresh();
            d.select(d.cgTabs[d.current]);
            d._scroll();
            return d
        }
    }
})(jQuery); (function(a) {
    var b = {
        show: function() {
            this.ui.timepicker.fadeIn(200)
        },
        hide: function() {
            this.ui.timepicker.fadeOut(200)
        },
        disable: function() {
            var c = this.ui;
            c.$this.unbind("focusin", a.cgTimepicker._setPosition)
        },
        enable: function() {
            var d = this.ui,
            c = this.settings;
            d.$this.bind("focusin", {
                ui: d,
                settings: c
            },
            a.cgTimepicker._setPosition)
        },
        destory: function() {
            this.disable();
            this.ui.timepicker.remove()
        },
        setTimeRange: function(c) {
            var e = this.ui,
            d = this.settings;
            a.cgTimepicker.initTimeRange(c, d.format);
            d.timeRange = c
        },
        setTime: function(c) {
            var e = this.ui,
            d = this.settings;
            if (e.hasHourInput) {
                if (d.format.indexOf("hh") != -1) {
                    e.hourInput.val(c.format("hh"))
                } else {
                    e.hourInput.val(c.format("h"))
                }
            }
            if (e.hasMinuteInput) {
                if (d.format.indexOf("MM") != -1) {
                    e.minuteInput.val(c.format("MM"))
                } else {
                    e.minuteInput.val(c.format("M"))
                }
            }
            if (e.hasSecondInput) {
                if (d.format.indexOf("ss") != -1) {
                    e.secondInput.val(c.format("ss"))
                } else {
                    e.secondInput.val(c.format("s"))
                }
            }
        },
        getTime: function() {
            var g = this.ui,
            f = this.settings;
            var e = new Date(g.currentTime),
            c = g.hourInput.val(),
            h = g.minuteInput.val(),
            d = g.secondInput.val();
            if (c) {
                e.setHours(c)
            }
            if (h) {
                e.setMinutes(h)
            }
            if (d) {
                e.setSeconds(d)
            }
            return e
        },
        getSecondsWithoutYMD: function(c) {
            var e = 0,
            d = this.ui;
            if (d.hasHourInput) {
                e += c.getHours() * 60 * 60
            }
            if (d.hasMinuteInput) {
                e += c.getMinutes() * 60
            }
            if (d.hasSecondInput) {
                e += c.getSeconds()
            }
            return e
        },
        isDisabledTime: function(f) {
            var m = this.ui,
            h = this.settings;
            var e = h.timeRange;
            if (!e) {
                return false
            }
            var g, c, n = this.getSecondsWithoutYMD(f),
            d = true;
            if (e.min != null) {
                g = this.getSecondsWithoutYMD(e.min);
                d = d && (n < g)
            }
            if (e.max != null) {
                c = this.getSecondsWithoutYMD(e.max);
                d = d && (n > c)
            }
            return d
        }
    };
    a.cgTimepicker = {
        _init: function(g, d) {
            var c = CG.CONST.TIMEPICKER_HTML,
            f = {},
            e = {};
            e.settings = d;
            e.ui = f;
            e = a.extend(e, b);
            f.$this = g;
            f.timepicker = a(c);
            f.clearButton = f.timepicker.find("#cg-timepicker-clear");
            f.confirmButton = f.timepicker.find("#cg-timepicker-confirm");
            f.hourInput = f.timepicker.find("input.cg-timepicker-hour");
            f.minuteInput = f.timepicker.find("input.cg-timepicker-minute");
            f.secondInput = f.timepicker.find("input.cg-timepicker-second");
            f.hourPrevButton = f.timepicker.find("a.cg-timepicker-hour-up");
            f.hourNextButton = f.timepicker.find("a.cg-timepicker-hour-down");
            f.minutePrevButton = f.timepicker.find("a.cg-timepicker-minute-up");
            f.minuteNextButton = f.timepicker.find("a.cg-timepicker-minute-down");
            f.secondPrevButton = f.timepicker.find("a.cg-timepicker-second-up");
            f.secondNextButton = f.timepicker.find("a.cg-timepicker-second-down");
            a.cgTimepicker._createTimepicker(f, d, e);
            this.setLanguage(f, d);
            return e
        },
        _createTimepicker: function(g, e, f) {
            if (!e.showClear) {
                g.clearButton.remove()
            }
            g.hasHourInput = true;
            g.hasMinuteInput = true;
            g.hasSecondInput = true;
            if (e.format.indexOf("h") == -1) {
                g.hourInput.remove();
                var m = g.timepicker.find(".cg-timepicker-td-hour");
                m.next("td").remove();
                m.remove();
                g.hasHourInput = false
            }
            if (e.format.indexOf("M") == -1) {
                g.minuteInput.remove();
                var h = g.timepicker.find(".cg-timepicker-td-minute");
                h.next("td").remove();
                h.remove();
                g.hasMinuteInput = false
            }
            if (e.format.indexOf("s") == -1) {
                g.secondInput.remove();
                var d = g.timepicker.find(".cg-timepicker-td-second");
                if ((!g.hasHourInput || !g.hasMinuteInput) || (g.hasHourInput && g.hasMinuteInput)) {
                    d.prev("td").remove()
                }
                d.remove();
                g.hasSecondInput = false
            }
            var c = g.$this.val();
            g.currentTime = e.startTime;
            if (c) {
                g.currentTime = c.parseDate(e.format)
            }
            f.setTime(g.currentTime);
            g.timepicker.appendTo("body");
            f.enable();
            a(document).bind("click", {
                ui: g,
                settings: e
            },
            a.cgTimepicker._hideIfClickOutside);
            this.initTimeRange(e.timeRange, e.format);
            this._toolsHandler(g, e, f);
            this._prevAndNextHandler(g, e, f);
            this._initTimeInput(g, e, f)
        },
        _hideIfClickOutside: function(f) {
            var d = f.data.ui,
            c = f.data.settings;
            if (!d.$this.isCover(f.pageX, f.pageY) && !d.timepicker.isCover(f.pageX, f.pageY)) {
                d.timepicker.fadeOut(200)
            }
        },
        _setPosition: function(m) {
            var f = m.data.ui,
            d = m.data.settings;
            var n = f.$this.offset(),
            c = f.$this.getSize(),
            h = f.timepicker.getSize(),
            g = n.top + c.outerHeight;
            if (a(window).height() < g + h.outerHeight) {
                g = n.top - h.outerHeight
            }
            f.timepicker.css({
                left: n.left,
                top: g
            }).fadeIn(200)
        },
        _initTimeInput: function(f, d, e) {
            var c = function(m) {
                var g = m.data.max,
                h = a(this).val();
                if (parseInt(h) > g) {
                    a(this).val(g);
                    return false
                } else {
                    f.currentTime = e.getTime()
                }
            };
            f.hourInput.keydown(a.cgTimepicker.checkCode).keyup({
                max: 23
            },
            c);
            f.minuteInput.keydown(a.cgTimepicker.checkCode).keyup({
                max: 59
            },
            c);
            f.secondInput.keydown(a.cgTimepicker.checkCode).keyup({
                max: 59
            },
            c)
        },
        initTimeRange: function(c, d) {
            if (c) {
                if (c.min && typeof c.min === "string") {
                    c.min = c.min.toString().parseDate(d)
                }
                if (c.max && typeof c.max === "string") {
                    c.max = c.max.toString().parseDate(d)
                }
            }
        },
        checkCode: function(d) {
            var c = d.keyCode;
            if (c >= 48 && c <= 57 || c >= 96 && c <= 105 || c == 8 || c == 46 || c == 9) {
                return true
            }
            return false
        },
        _prevAndNextHandler: function(e, c, d) {
            e.hourPrevButton.click(function() {
                e.currentTime.setHours(e.currentTime.getHours() - 1);
                d.setTime(e.currentTime)
            });
            e.hourNextButton.click(function() {
                e.currentTime.setHours(e.currentTime.getHours() + 1);
                d.setTime(e.currentTime)
            });
            e.minutePrevButton.click(function() {
                e.currentTime.setMinutes(e.currentTime.getMinutes() - 1);
                d.setTime(e.currentTime)
            });
            e.minuteNextButton.click(function() {
                e.currentTime.setMinutes(e.currentTime.getMinutes() + 1);
                d.setTime(e.currentTime)
            });
            e.secondPrevButton.click(function() {
                e.currentTime.setSeconds(e.currentTime.getSeconds() - 1);
                d.setTime(e.currentTime)
            });
            e.secondNextButton.click(function() {
                e.currentTime.setSeconds(e.currentTime.getSeconds() + 1);
                d.setTime(e.currentTime)
            })
        },
        setLanguage: function(d, c) {
            if (CG.CONFIG.LANGUAGE === "en") {
                if (CG.CONFIG.TIMEPICKER_BUTTONS) {
                    d.clearButton.val(CG.CONFIG.TIMEPICKER_BUTTONS[0]);
                    d.confirmButton.val(CG.CONFIG.TIMEPICKER_BUTTONS[1])
                }
                if (CG.CONFIG.TIMEPICKER_INPUT_TIPS) {
                    d.hourInput.attr("title", CG.CONFIG.TIMEPICKER_INPUT_TIPS[0]);
                    d.minuteInput.attr("title", CG.CONFIG.TIMEPICKER_INPUT_TIPS[1]);
                    d.secondInput.attr("title", CG.CONFIG.TIMEPICKER_INPUT_TIPS[2])
                }
            }
        },
        _toolsHandler: function(e, c, d) {
            e.clearButton.click(function(f) {
                d.setTime(e.currentTime);
                if (a.isFunction(c.clearHandler) && c.clearHandler.call(this, f) === false) {} else {
                    e.$this.val("");
                    d.hide()
                }
            });
            e.confirmButton.click(function(f) {
                e.currentTime = d.getTime();
                d.setTime(e.currentTime);
                var g = e.currentTime.format(c.format);
                if (a.isFunction(c.confirmHandler) && c.confirmHandler.call(this, f) === false) {} else {
                    if (a.isFunction(c.beforeSelect) && c.beforeSelect.call(this, g, e.currentTime) === false) {} else {
                        if (!d.isDisabledTime(e.currentTime)) {
                            e.$this.val(g);
                            if (c.select && a.isFunction(c.select)) {
                                c.select.call(this, g, e.currentTime)
                            }
                            d.hide()
                        }
                    }
                }
            })
        }
    };
    a.fn.cgTimepicker = function(c) {
        c = a.extend(true, {
            format: "hh:MM:ss",
            startTime: new Date(),
            timeRange: null,
            select: null,
            beforeSelect: null,
            clearHandler: null,
            confirmHandler: null,
            showClear: true,
            disabledHours: null,
            disabledMinutes: null,
            disabledSeconds: null,
            disabledTimes: null
        },
        c);
        return a.cgTimepicker._init(a(this).eq(0), c)
    }
})(jQuery); (function(a) {
    a.tips = function(f) {
        f = a.extend({
            monitor: false,
            target: window,
            x: "center",
            y: "middle",
            info: "",
            icon: "icon-success",
            time: 1500
        },
        f);
        var e = CG.CONST.TIPS_HTML,
        c, b = {},
        d = function(h) {
            c = h.cgGetPosition({
                target: f.target,
                x: f.x,
                y: f.y,
                position: false
            });
            h.offset({
                left: c.offsetLeft,
                top: c.offsetTop
            })
        },
        g = function(h) {
            h.show();
            a(".cg-tips-info", h).addClass(f.icon).html(f.info);
            d(h);
            if (f.monitor) {
                a(window).bind("resize scroll",
                function() {
                    d(h)
                })
            }
        };
        b = a(e).appendTo("body");
        g(b);
        setTimeout(function() {
            b.fadeOut(200,
            function() {
                a(this).remove()
            })
        },
        f.time)
    }
})(jQuery); (function(a) {
    a.fn.cgTolltip = function(d) {
        var d = a.extend({
            track: true,
            speed: 200
        },
        d);
        var b = {
            showTips: function(e) {
                var f = e.data("cg_tolltip_id");
                a("#" + f).fadeIn(d.speed)
            },
            hideTips: function(e) {
                var f = e.data("cg_tolltip_id");
                a("#" + f).fadeOut(d.speed)
            },
            setPosition: function(f) {
                var g = f.data.$this.data("cg_tolltip_id");
                a("#" + g).setPosition(f.pageX - 15, f.pageY + 30)
            },
            _setPosition: function(e) {
                var g = e.data("cg_tolltip_id");
                var f = e.getOffset();
                a("#" + g).setPosition(f.left, f.top + e.outerHeight() + 10)
            }
        };
        var c = CG.getId();
        return a(this).each(function(f) {
            var g = a(this),
            e = g.attr("tips");
            a(CG.CONST.TOLLTIP_HTML).attr("id", "cg_tolltip_" + (c + f)).hide().appendTo("body").find(".cg-tooltips-message").html(e);
            g.data("cg_tolltip_id", "cg_tolltip_" + (c + f));
            b._setPosition(g);
            g.mouseover(function() {
                b.showTips(a(this));
                if (d.track) {
                    a(this).mousemove({
                        "$this": a(this)
                    },
                    b.setPosition)
                }
            }).mouseleave(function() {
                b.hideTips(a(this));
                if (d.track) {
                    a(this).unbind("mousemove", b.setPosition)
                }
            })
        })
    }
})(jQuery); (function(a) {
    a.fn.cgTooltip = function(d) {
        d = a.extend({
            track: true,
            firstVisible: false,
            speed: 200
        },
        d);
        var b = {
            showTips: function(e) {
                var f = e.data("cg_tolltip_id");
                a("#" + f).fadeIn(d.speed)
            },
            hideTips: function(e) {
                var f = e.data("cg_tolltip_id");
                a("#" + f).fadeOut(d.speed)
            },
            setPosition: function(f) {
                var g = f.data.$this.data("cg_tolltip_id");
                a("#" + g).setPosition(f.pageX - 15, f.pageY + 30)
            },
            _setPosition: function(e) {
                var g = e.data("cg_tolltip_id");
                var f = e.getOffset();
                a("#" + g).setPosition(f.left, f.top + e.outerHeight() + 10)
            }
        };
        var c = CG.getId();
        return a(this).each(function(f) {
            var g = a(this),
            e = g.attr("tips");
            a(CG.CONST.TOLLTIP_HTML).attr("id", "cg_tolltip_" + (c + f)).hide().appendTo("body").find(".cg-tooltips-message").html(e);
            g.data("cg_tolltip_id", "cg_tolltip_" + (c + f));
            b._setPosition(g);
            if (d.firstVisible) {
                b.showTips(a(this))
            }
            g.mouseover(function() {
                b.showTips(a(this));
                if (d.track) {
                    a(this).mousemove({
                        "$this": a(this)
                    },
                    b.setPosition)
                }
            }).mouseleave(function() {
                b.hideTips(a(this));
                if (d.track) {
                    a(this).unbind("mousemove", b.setPosition)
                }
            })
        })
    }
})(jQuery); (function(a) {
    a.fn.cgAd = function(c) {
        var c = a.extend({
            type: "random",
            speed: 40,
            ie6Speed: 500,
            top: 100,
            left: 0,
            right: 0,
            bottom: "auto",
            closable: true,
            showLeft: true,
            showRight: true,
            stopByMouseover: true,
            clonable: false,
            direction: 1,
            zIndex: 20000,
            before: function() {},
            mouseover: function() {},
            mouseout: function() {},
            after: function() {}
        },
        c || {});
        var b = function(d) {
            if (d.direction == 1) {
                d.currentLeft++;
                d.currentTop++;
                d.$this.css({
                    left: d.currentLeft,
                    top: d.currentTop
                });
                if (d.winWidth - d.objWidth <= d.currentLeft) {
                    d.direction = 4
                }
                if (d.winHeight - d.objHeight + d.documentScrollTop <= d.currentTop) {
                    d.direction = 2
                }
            }
            if (d.direction == 2) {
                d.currentLeft++;
                d.currentTop--;
                d.$this.css({
                    left: d.currentLeft,
                    top: d.currentTop
                });
                if (d.winWidth - d.objWidth <= d.currentLeft) {
                    d.direction = 3
                }
                if (d.currentTop <= 0) {
                    d.direction = 1
                }
            }
            if (d.direction == 3) {
                d.currentLeft--;
                d.currentTop--;
                d.$this.css({
                    left: d.currentLeft,
                    top: d.currentTop
                });
                if (d.currentLeft <= 0) {
                    d.direction = 2
                }
                if (d.currentTop <= 0) {
                    d.direction = 4
                }
            }
            if (d.direction == 4) {
                d.currentLeft--;
                d.currentTop++;
                d.$this.css({
                    left: d.currentLeft,
                    top: d.currentTop
                });
                if (d.currentLeft <= 0) {
                    d.direction = 1
                }
                if (d.winHeight - d.objHeight + d.documentScrollTop <= d.currentTop) {
                    d.direction = 3
                }
            }
        };
        return this.each(function() {
            var h, o, g = {};
            g.direction = c.direction;
            h = a(this);
            g.$this = h;
            var m = function() {
                g.winWidth = a(window).width();
                g.winHeight = a(window).height();
                g.objWidth = g.$this.outerWidth(true);
                g.objHeight = g.$this.outerHeight(true);
                a("img", g.$this).load(function() {
                    g.objWidth = g.$this.outerWidth(true);
                    g.objHeight = g.$this.outerHeight(true)
                });
                g.currentLeft = g.$this.offset().left;
                g.currentTop = g.$this.offset().top;
                g.documentScrollTop = a(window).scrollTop()
            };
            if (c.type == "random") {
                if (c.before) {
                    c.before()
                }
                h.html = h.html();
                if (h[0].tagName == "IMG") {
                    h.wrap("<div class='wrap-img'></div>");
                    h.html = a(".wrap-img", h.parent().parent()).html();
                    h.unwrap("<div class='wrap-img'></div>")
                }
                $newthis = a('<div class="random-ad"></div>').html(h.html).css({
                    position: "absolute",
                    "z-index": c.zIndex
                }).appendTo("body");
                if (c.closable) {
                    a('<div class="close-ad" id="leftCloseAd"></div>').appendTo($newthis).click(function() {
                        a(this).parent().remove()
                    })
                }
                $newthis.css({
                    top: c.top,
                    left: c.left
                });
                g.$this = $newthis;
                if (!c.clonable) {
                    h.remove()
                }
                var o = setInterval(function() {
                    b(g)
                },
                c.speed);
                m();
                a(window).bind("resize",
                function() {
                    m()
                }).scroll(function() {
                    m()
                });
                if (c.stopByMouseover) {
                    g.$this.hover(function() {
                        if (c.mouseover) {
                            c.mouseover()
                        }
                        clearInterval(o)
                    },
                    function() {
                        o = setInterval(function() {
                            if (c.mouseout) {
                                c.mouseout()
                            }
                            b(g)
                        },
                        c.speed)
                    })
                }
                if (c.after) {
                    c.after()
                }
            } else {
                if (c.type == "double") {
                    if (c.before) {
                        c.before()
                    }
                    var d, e;
                    var f = function() {
                        h.html = h.html();
                        if (h[0].tagName == "IMG") {
                            h.wrap("<div class='wrap-img'></div>");
                            h.html = a(".wrap-img", h.parent().parent()).html();
                            h.unwrap("<div class='wrap-img'></div>")
                        }
                        if (c.showLeft) {
                            d = a('<div id="leftAd" style="position:fixed;*position:absolute;z-index:' + c.zIndex + '"></div>').html(h.html).css({
                                top: c.top,
                                left: c.left,
                                bottom: c.bottom
                            }).appendTo("body")
                        }
                        if (c.showRight) {
                            e = a('<div id="rightAd" style="position:fixed;*position:absolute;z-index:' + c.zIndex + '"></div>').html(h.html).css({
                                top: c.top,
                                right: c.right,
                                bottom: c.bottom
                            }).appendTo("body")
                        }
                        if (!c.clonable && (c.showRight || c.showLeft)) {
                            h.remove()
                        }
                        if (c.closable) {
                            if (c.showLeft) {
                                a('<div class="close-ad" id="leftCloseAd"></div>').appendTo(d).click(function() {
                                    d.remove();
                                    if (c.showRight) {
                                        e.remove()
                                    }
                                })
                            }
                            if (c.showRight) {
                                a('<div class="close-ad" id="rightCloseAd"></div>').appendTo(e).click(function() {
                                    e.remove();
                                    if (c.showLeft) {
                                        d.remove()
                                    }
                                })
                            }
                        }
                    };
                    f();
                    if (a.browser.msie && a.browser.version <= 7) {
                        a(window).scroll(function() {
                            m();
                            if (c.showLeft) {
                                d.stop(true).delay(200).animate({
                                    top: c.top + g.documentScrollTop
                                },
                                c.ie6Speed)
                            }
                            if (c.showRight) {
                                e.stop(true).delay(200).animate({
                                    top: c.top + g.documentScrollTop
                                },
                                c.ie6Speed)
                            }
                        })
                    }
                    if (c.after) {
                        c.after()
                    }
                } else {
                    if (c.type == "absolute") {
                        if (c.before) {
                            c.before()
                        }
                        var d, e;
                        var n = function() {
                            h.html = h.html();
                            if (h[0].tagName == "IMG") {
                                h.wrap("<div class='wrap-img'></div>");
                                h.html = a(".wrap-img", h.parent().parent()).html();
                                h.unwrap("<div class='wrap-img'></div>")
                            }
                            if (c.showLeft) {
                                d = a('<div id="leftAd" style="position:absolute;z-index:' + c.zIndex + '"></div>').html(h.html).css({
                                    top: c.top,
                                    left: c.left,
                                    bottom: c.bottom
                                }).appendTo("body")
                            }
                            if (c.showRight) {
                                e = a('<div id="rightAd" style="position:absolute;z-index:' + c.zIndex + '"></div>').html(h.html).css({
                                    top: c.top,
                                    right: c.right,
                                    bottom: c.bottom
                                }).appendTo("body")
                            }
                            if (!c.clonable && (c.showRight || c.showLeft)) {
                                h.remove()
                            }
                            if (c.closable) {
                                if (c.showLeft) {
                                    a('<div class="close-ad" id="leftCloseAd"></div>').appendTo(d).click(function() {
                                        d.remove();
                                        if (c.showRight) {
                                            e.remove()
                                        }
                                    })
                                }
                                if (c.showRight) {
                                    a('<div class="close-ad" id="rightCloseAd"></div>').appendTo(e).click(function() {
                                        e.remove();
                                        if (c.showLeft) {
                                            d.remove()
                                        }
                                    })
                                }
                            }
                        };
                        n();
                        if (c.after) {
                            c.after()
                        }
                    }
                }
            }
        })
    }
})(jQuery); (function(a) {
    a.fn.cgCarousel = function(b) {
        b = a.extend({
            prev: null,
            next: null,
            mousewheel: false,
            stopByMouseover: true,
            delay: 800,
            speed: 1000,
            range: 100,
            easing: null,
            vertical: false,
            direction: null,
            loop: true,
            visible: 4,
            start: 0,
            scroll: 1,
            before: null,
            after: null,
            type: null
        },
        b || {});
        if (!b.type) {
            return this.each(function(n) {
                var m = a(this),
                t = 0,
                z = 0,
                p;
                var q = a(this).children(),
                c = q.children(),
                f = c.length,
                u = m.width(),
                s = m.height(),
                h = c.eq(0).outerWidth(true),
                g = c.eq(0).outerHeight(true);
                var o = b.scroll;
                m.css({
                    overflow: "hidden"
                });
                if (b.vertical) {
                    o += parseInt(s / (c.length * g));
                    z = g * f;
                    q.height((o + 1) * z);
                    m.css("height", s)
                } else {
                    c.css({
                        "float": "left"
                    });
                    o += parseInt(u / (c.length * h));
                    t = h * f;
                    q.width((o + 1) * t);
                    m.css("width", u)
                }
                var y = function() {
                    var B = c.clone();
                    for (var A = 0; A < o; A++) {
                        B.clone().appendTo(q)
                    }
                };
                y();
                var x;
                var v = function() {
                    q.animate({
                        "margin-left": "-=" + (b.scroll * h)
                    },
                    b.speed,
                    function() {
                        var B = Math.abs(parseInt(q.css("margin-left")));
                        if (B + (b.scroll * h) + u >= (o + 1) * t) {
                            var A = parseInt(B / t);
                            q.css("margin-left", -(B - A * t))
                        }
                        x = false
                    })
                };
                var w = function() {
                    var C = parseInt(q.css("margin-left"));
                    var A = Math.abs(parseInt(q.css("margin-left")));
                    if (A - (b.scroll * h) <= 0 || C >= 0) {
                        var B = parseInt(b.scroll * h / t) + 1;
                        q.css("margin-left", -B * t - A)
                    }
                    q.animate({
                        "margin-left": "+=" + (b.scroll * h)
                    },
                    b.speed,
                    function() {
                        x = false
                    })
                };
                var e = function() {
                    q.animate({
                        "margin-top": "-=" + b.scroll * g
                    },
                    b.speed,
                    function() {
                        var B = Math.abs(parseInt(q.css("margin-top")));
                        if (B + (b.scroll * g) + s >= (o + 1) * z) {
                            var A = parseInt(B / z);
                            q.css("margin-top", -(B - A * z))
                        }
                        x = false
                    })
                };
                var r = function() {
                    var C = parseInt(q.css("margin-top"));
                    var B = Math.abs(C);
                    if (B - (b.scroll * g) <= 0 || C >= 0) {
                        var A = parseInt(b.scroll * g / z) + 1;
                        q.css("margin-top", -A * z - B)
                    }
                    q.animate({
                        "margin-top": "+=" + b.scroll * g
                    },
                    b.speed,
                    function() {
                        x = false
                    })
                };
                var d = function() {
                    if (b.vertical) {
                        p = setInterval(function() {
                            if (b.direction && b.direction == "s") {
                                r()
                            } else {
                                e()
                            }
                        },
                        b.speed + b.delay)
                    } else {
                        p = setInterval(function() {
                            if (b.direction && b.direction == "w") {
                                w()
                            } else {
                                v()
                            }
                        },
                        b.speed + b.delay)
                    }
                };
                d();
                if (b.prev) {
                    a(b.prev).hover(function() {
                        clearInterval(p);
                        a(this).unbind("click").click(function() {
                            if (x) {
                                return false
                            }
                            x = true;
                            if (b.vertical) {
                                if (b.direction && b.direction == "s") {
                                    e()
                                } else {
                                    r()
                                }
                            } else {
                                if (b.direction && b.direction == "w") {
                                    v()
                                } else {
                                    w()
                                }
                            }
                        })
                    },
                    function() {
                        clearInterval(p);
                        d()
                    })
                }
                if (b.next) {
                    a(b.next).hover(function() {
                        clearInterval(p);
                        a(this).unbind("click").click(function() {
                            if (x) {
                                return false
                            }
                            x = true;
                            if (b.vertical) {
                                if (b.direction && b.direction == "s") {
                                    r()
                                } else {
                                    e()
                                }
                            } else {
                                if (b.direction && b.direction == "w") {
                                    w()
                                } else {
                                    v()
                                }
                            }
                        })
                    },
                    function() {
                        clearInterval(p);
                        d()
                    })
                }
                if (b.stopByMouseover) {
                    m.hover(function() {
                        clearInterval(p)
                    },
                    function() {
                        d()
                    })
                }
            })
        } else {
            if (b.type == "ceaseless") {
                return this.each(function(p) {
                    var s = a(this),
                    n = 0,
                    q = 0,
                    d;
                    var r = a("ul", a(this)),
                    w = a("li", r),
                    e = s.width(),
                    u = s.height(),
                    o = 2;
                    s.css({
                        overflow: "hidden"
                    });
                    if (b.vertical) {
                        o = parseInt(u / (w.length * w.eq(0).outerHeight(true))) + 1;
                        w.each(function() {
                            q += parseInt(a(this).outerHeight(true))
                        });
                        r.height((o + 1) * q);
                        s.css("height", u)
                    } else {
                        w.css({
                            "float": "left"
                        });
                        o = parseInt(e / (w.length * w.eq(0).outerWidth(true))) + 1;
                        w.each(function() {
                            n += parseInt(a(this).outerWidth(true))
                        });
                        r.width((o + 1) * n + 10);
                        s.css("width", e)
                    }
                    var v = r.children("li").clone();
                    for (var m = 0; m < o; m++) {
                        v.clone().appendTo(r)
                    }
                    var h = function() {
                        d = setInterval(function() {
                            s.animate({
                                scrollLeft: "+=" + 1
                            },
                            0);
                            var x = s.scrollLeft();
                            if (x + e >= (o + 1) * n) {
                                s.scrollLeft(x - n)
                            }
                        },
                        b.speed)
                    };
                    var g = function() {
                        d = setInterval(function() {
                            s.animate({
                                scrollLeft: "-=" + 1
                            },
                            0);
                            var x = s.scrollLeft();
                            if (x <= 0) {
                                s.scrollLeft(n)
                            }
                        },
                        b.speed)
                    };
                    var f = function() {
                        d = setInterval(function() {
                            s.animate({
                                scrollTop: "+=" + 1
                            },
                            0);
                            var x = s.scrollTop();
                            if (x + u >= (o + 1) * q) {
                                s.scrollTop(x - q)
                            }
                        },
                        b.speed)
                    };
                    var c = function() {
                        d = setInterval(function() {
                            s.animate({
                                scrollTop: "-=" + 1
                            },
                            0);
                            var x = s.scrollTop();
                            if (x <= 0) {
                                s.scrollTop(q)
                            }
                        },
                        b.speed)
                    };
                    var t = function() {
                        if (b.vertical) {
                            if (b.direction && b.direction == "s") {
                                c()
                            } else {
                                f()
                            }
                        } else {
                            if (b.direction && b.direction == "w") {
                                g()
                            } else {
                                h()
                            }
                        }
                    };
                    t();
                    if (b.prev) {
                        a(b.prev).hover(function() {
                            clearInterval(d);
                            if (b.vertical) {
                                if (b.direction && b.direction == "s") {
                                    f()
                                } else {
                                    c()
                                }
                            } else {
                                if (b.direction && b.direction == "w") {
                                    h()
                                } else {
                                    g()
                                }
                            }
                        },
                        function() {
                            clearInterval(d);
                            t()
                        })
                    }
                    if (b.next) {
                        a(b.next).hover(function() {
                            clearInterval(d);
                            if (b.vertical) {
                                if (b.direction && b.direction == "s") {
                                    c()
                                } else {
                                    f()
                                }
                            } else {
                                if (b.direction && b.direction == "w") {
                                    g()
                                } else {
                                    h()
                                }
                            }
                        },
                        function() {
                            clearInterval(d);
                            t()
                        })
                    }
                    if (b.stopByMouseover) {
                        s.hover(function() {
                            clearInterval(d)
                        },
                        function() {
                            t()
                        })
                    }
                })
            }
        }
    }
})(jQuery); (function(a) {
    a.fn.cgChange = function(b) {
        b = a.extend({},
        {
            title: "",
            content: "",
            selectedClass: "",
            event: "click",
            beforeChange: null,
            change: null,
            current: 0
        },
        b);
        return this.each(function(c) {
            var e = {},
            d = b.current;
            e.$this = a(this);
            e.titles = a(b.title, e.$this);
            e.contents = a(b.content, e.$this);
            e.titles.not(e.titles.eq(b.current).addClass(b.selectedClass)).removeClass(b.selectedClass);
            e.contents.not(e.contents.eq(b.current).show()).hide();
            e.titles.bind(b.event,
            function(m) {
                var h = a(this),
                f = e.titles.index(h),
                g = e.contents.eq(f);
                if (d !== f) {
                    if (a.isFunction(b.beforeChange) && b.beforeChange.call(this, m, g, f) === false) {} else {
                        e.titles.eq(d).removeClass(b.selectedClass);
                        e.contents.eq(d).hide();
                        h.addClass(b.selectedClass);
                        g.show();
                        if (a.isFunction(b.change)) {
                            b.change.call(this, m, g, f)
                        }
                        d = f
                    }
                }
            })
        })
    }
})(jQuery); (function(a) {
    a.fn.cgDate = function(b) {
        b = a.extend(true, {
            format: "yyyy年mm月dd日 w",
            loop: false,
            weeks: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
        },
        b);
        this.each(function() {
            var d = a(this);
            var c = function(f) {
                var e = new Date(),
                g;
                g = e.format(f);
                g = g.replace(/w/g, b.weeks[e.getDay()]);
                return g
            };
            if (b.loop) {
                d.html(c(b.format));
                setInterval(function() {
                    d.html(c(b.format))
                },
                1000)
            } else {
                d.html(c(b.format))
            }
        })
    }
})(jQuery); (function(a) {
    a.fn.cgGotoTop = function(e) {
        var e = a.extend({
            range: 0,
            speed: 200,
            bottom: 5,
            top: null,
            left: null,
            right: 5,
            scrollTo: 0,
            isSetPosition: true,
            ie6Speed: 200,
            fadeSpeed: 200
        },
        e || {});
        var b = function(f) {
            if (a("body,html").scrollTop() >= (e.range || 0)) {
                f.show()
            } else {
                f.hide()
            }
            a(window).bind("resize scroll",
            function() {
                var g = a(window).scrollTop();
                e.range = typeof e.range == "number" ? e.range: e.range.offset().top;
                if (g > (e.range || 0)) {
                    f.fadeIn(e.fadeSpeed,
                    function() {
                        f.show()
                    })
                } else {
                    f.fadeOut(e.fadeSpeed,
                    function() {
                        f.hide()
                    })
                }
            })
        };
        var d = function(n) {
            if (a.browser.msie && a.browser.version < 7) {
                var g = a(window).width(),
                f = a(window).height(),
                m = a(window).scrollTop(),
                h = a(window).scrollLeft();
                n.css({
                    position: "absolute",
                    cursor: "pointer",
                    top: e.top ? e.top + m: f + m - (e.bottom || 0) - n.outerHeight(true),
                    left: e.left ? e.left + h: g + h - (e.right || 0) - n.outerWidth(true)
                });
                var o = function() {
                    g = a(window).width();
                    f = a(window).height();
                    m = a(window).scrollTop();
                    h = a(window).scrollLeft();
                    n.stop().animate({
                        top: e.top ? (e.top + m) : (f + m - (e.bottom || 0) - n.outerHeight(true)),
                        left: e.left ? (e.left + h) : (g + h - (e.right || 0) - n.outerWidth(true))
                    },
                    e.ie6Speed)
                };
                o();
                a(window).bind("resize scroll",
                function() {
                    o()
                })
            } else {
                n.css({
                    position: "fixed",
                    left: e.left,
                    top: e.top,
                    right: e.right,
                    bottom: e.bottom,
                    cursor: "pointer"
                })
            }
        };
        var c = function(f) {
            f.click(function(g) {
                e.scrollTo = typeof e.scrollTo == "number" ? e.scrollTo: e.scrollTo.offset().top;
                a("html,body").stop().animate({
                    scrollTop: e.scrollTo
                },
                e.speed);
                g.preventDefault()
            })
        };
        a(this).each(function() {
            b(a(this));
            if (e.isSetPosition) {
                d(a(this))
            }
            c(a(this))
        })
    }
})(jQuery); (function(a) {
    a.fn.cgMenu = function(b) {
        var d = a.extend(true, {
            width: "auto",
            top: null,
            left: null,
            type: 1,
            effect: {
                openSpeed: 350,
                closeSpeed: 350,
                openType: "fade",
                closeType: "fade",
                openEasing: "swing",
                closeEasing: "swing"
            },
            timeBeforeOpen: 50,
            timeBeforeClose: 100,
            mouseover: null,
            parentClass: "parent-nav",
            selectedClass: "selected-nav",
            mouseout: null
        },
        b || {});
        var c = {
            showNextNav: function(e) {
                e.otherMenu.bind("mouseenter",
                function(g) {
                    var f = a(this).children("ul");
                    c.setPosition(a(this), f);
                    c.showNav(f);
                    a(this).addClass(d.selectedClass);
                    if (d.width === "auto") {
                        f.width(f.width())
                    }
                    if (a.isFunction(d.mouseover)) {
                        d.mouseover.call(this, g)
                    }
                }).mouseleave(function(g) {
                    var f = a(this).children("ul");
                    c.hideNav(f);
                    a(this).removeClass(d.selectedClass);
                    if (a.isFunction(d.mouseout)) {
                        d.mouseout.call(this, g)
                    }
                })
            },
            showFirstNav: function(f) {
                var e;
                f.firstMenu.bind("mouseenter",
                function(g) {
                    e = a(this).children("ul");
                    c.hideNav(f.firstMenu.children("ul").not(e));
                    c.hideNav(f.otherMenu.children("ul"));
                    c.showNav(e);
                    a(this).addClass(d.selectedClass);
                    if (d.width === "auto") {
                        e.width(e.width())
                    }
                    if (a.isFunction(d.mouseover)) {
                        d.mouseover.call(this, g)
                    }
                }).mouseleave(function(h) {
                    var g = a(this).children("ul");
                    c.hideNav(g);
                    a(this).removeClass(d.selectedClass);
                    if (a.isFunction(d.mouseout)) {
                        d.mouseout.call(this, h)
                    }
                });
                f.firstMenu.children("ul").mouseleave(function(g) {})
            },
            showNav: function(e) {
                switch (d.effect.openType) {
                case "slide":
                    e.stop(true, true).delay(d.timeBeforeOpen).slideDown(d.effect.openSpeed, d.effect.openEasing);
                    break;
                case "fade":
                    e.stop(true, true).delay(d.timeBeforeOpen).fadeIn(d.effect.openSpeed, d.effect.openEasing);
                    break;
                default:
                    e.stop(true, true).delay(d.timeBeforeOpen).show()
                }
            },
            hideNav: function(e) {
                switch (d.effect.closeType) {
                case "slide":
                    e.stop(true, true).delay(d.timeBeforeClose).slideUp(d.effect.closeSpeed, d.effect.closeEasing);
                    break;
                case "fade":
                    e.stop(true, true).delay(d.timeBeforeClose).fadeOut(d.effect.closeSpeed, d.effect.closeEasing);
                    break;
                default:
                    e.stop(true, true).delay(d.timeBeforeClose).hide()
                }
            },
            setPosition: function(m, f) {
                if (!f.data("style")) {
                    var e = m.outerHeight(true),
                    g = m.parent("ul").outerWidth() - (parseInt(f.css("border-left-width")) || 0) * 2,
                    h = parseInt(m.position().top) || 0;
                    if (a.browser.msie && a.browser.version < 8) {
                        if (f.css("border-top-width")) {
                            h = h + (parseInt(f.css("border-top-width")) || 0)
                        }
                    }
                    f.css({
                        position: "absolute",
                        left: g,
                        top: h
                    });
                    f.data("style", true)
                }
            },
            initCss: function(e) {
                e.menu.children("ul").show();
                e.firstMenu.parent("ul").addClass("first-nav");
                e.secondMenu.parent("ul").addClass("second-nav");
                e.thirdMenu.parent("ul").addClass("third-nav");
                e.fourthMenu.parent("ul").addClass("fourth-nav");
                if (d.width == "auto") {} else {
                    e.otherMenu.width(d.width)
                }
                e.parentMenu.each(function() {
                    a(this).children().eq(0).addClass(d.parentClass)
                });
                e.firstMenu.each(function() {
                    var g = a(this).children("ul");
                    e.menu.children("ul").hide();
                    var m = a(this).height(),
                    f = a(this).width();
                    if (d.type == 1) {
                        if (d.top) {
                            m = d.top
                        }
                        g.css({
                            position: "absolute",
                            left: 0,
                            top: m
                        })
                    } else {
                        if (d.left) {
                            f = d.left
                        }
                        g.css({
                            position: "absolute",
                            left: f,
                            top: 0
                        })
                    }
                });
                e.firstMenu.css("position", "relative")
            }
        };
        a(this).each(function(e) {
            var g = {},
            f = a(this);
            var h = function() {
                g.$this = f;
                g.menu = a("li", f);
                g.firstMenu = f.children("li");
                g.secondMenu = g.firstMenu.children("ul").children("li");
                g.thirdMenu = g.secondMenu.children("ul").children("li");
                g.fourthMenu = g.thirdMenu.children("ul").children("li");
                g.otherMenu = g.menu.not(g.firstMenu);
                g.parentMenu = g.otherMenu.has("ul");
                if (a.browser.msie && a.browser.version < 7) {
                    if (d.effect.openType == "slide") {
                        d.effect.openType = "fade";
                        d.effect.closeType = "fade"
                    }
                    g.menu.children("ul").css("width", 10)
                }
                c.initCss(g);
                c.showFirstNav(g);
                c.showNextNav(g)
            };
            h()
        })
    }
})(jQuery); (function(a) {
    a.cgPictureEffect = {
        _init: function(e, c) {
            var d = {},
            b = {};
            b.ui = d;
            b.settings = c;
            this._initUi(e, d, c, b);
            this._create(d, c, b);
            this.auto(d, c, b);
            this._bindEvents(d, c, b)
        },
        _initUi: function(d, c, b) {
            c.$this = d;
            c.pictureContainer = a(b.picture, d);
            c.picturesContainer = a(b.effect.containerSelector, c.pictureContainer);
            c.pictures = a(b.effect.pictureSelector, c.picturesContainer);
            c.pictureWidth = c.pictures.eq(0).outerWidth();
            if (b.link) {
                c.links = a(b.link, d)
            } else {
                c.links = c.pictures.children("a")
            }
            c.thumbPictureContainer = a(b.thumbPicture, d);
            c.titleContainer = a(b.title, d);
            c.prev = a(b.prev, d);
            c.next = a(b.next, d);
            c.stop = a(b.stop, d);
            c.start = a(b.start, d);
            c.maxTime = Math.max(b.thumbEffect.speed, b.titleEffect.speed, b.effect.speed);
            c.pictureLength = c.pictures.length;
            c.current = b.current;
            c.previous = c.current;
            c._previous = c.current;
            c.finished = true
        },
        _create: function(f, d) {
            var c = '<ul class="' + (d.thumbEffect.className || "") + '">',
            e = f.pictureLength;
            if (d.picture) {
                switch (d.effect.type) {
                case "fade":
                    f.pictures.eq(d.current).show().siblings().hide();
                    f.picturesContainer.css("position", "relative");
                    f.pictures.css({
                        position: "absolute",
                        top: 0,
                        left: 0
                    });
                    break;
                case "fadein":
                    f.pictures.eq(d.current).show().siblings().hide();
                    f.pictures.eq(d.current).show().siblings().hide();
                    f.picturesContainer.css("position", "relative");
                    f.pictures.css({
                        position: "absolute",
                        top: 0,
                        left: 0
                    });
                    break;
                case "slide":
                    f.pictureContainer.css("position", "relative");
                    f.picturesContainer.css({
                        position: "absolute",
                        top: 0,
                        left: 0
                    });
                    break;
                case "sameDirectionSlide":
                    f.picturesContainer.css("position", "relative");
                    f.pictures.css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        "z-index": 1
                    });
                    f.pictures.eq(d.current).css("z-index", 2);
                    break
                }
            }
            if (d.thumbPicture) {
                switch (d.thumbEffect.style) {
                case "image":
                    for (var b = 0; b < e; b++) {
                        if (b === d.current && d.thumbEffect.selectedClass) {
                            c += '<li class="' + d.thumbEffect.selectedClass + '">' + f.pictures.eq(b).html() + "</li>"
                        } else {
                            c += "<li>" + f.pictures.eq(b).html() + "</li>"
                        }
                    }
                    c += "</ul>";
                    f.thumbPictureContainer.append(c);
                    break;
                case "icon":
                    for (var b = 0; b < e; b++) {
                        if (b === d.current && d.thumbEffect.selectedClass) {
                            c += '<li class="' + d.thumbEffect.selectedClass + '"></li>'
                        } else {
                            c += "<li></li>"
                        }
                    }
                    c += "</ul>";
                    f.thumbPictureContainer.append(c);
                    break;
                case "number":
                    for (var b = 0; b < e; b++) {
                        if (b === d.current && d.thumbEffect.selectedClass) {
                            c += '<li class="' + d.thumbEffect.selectedClass + '">' + (b + 1) + "</li>"
                        } else {
                            c += "<li>" + (b + 1) + "</li>"
                        }
                    }
                    c += "</ul>";
                    f.thumbPictureContainer.append(c);
                    break
                }
                f.thumbPictures = a("li", f.thumbPictureContainer);
                f.thumbLinks = a("a", f.thumbPictures);
                if (d.thumbEffect.style === "image" && d.thumbEffect.type === "fade") {
                    f.thumbPictures.eq(d.current).show().siblings().css("opacity", d.thumbEffect.opacity)
                }
            }
            if (d.title) {
                f.title = a('<a href="" title=""  target="_blank"></a>');
                f.title.appendTo(f.titleContainer).addClass(d.titleEffect.className);
                this.titleEffect(d.current, f, d)
            }
        },
        change: function(e, d, c, b) {
            if (d._previous == e || !d.finished) {
                return
            }
            d._previous = e;
            d.current = e;
            if (a.isFunction(c.before) && c.before.call(this, b) === false) {
                return false
            }
            this.pictureEffect(e, d, c);
            this.titleEffect(e, d, c);
            this.thumbPictureEffect(e, d, c);
            setTimeout(function() {
                d.previous = e;
                if (a.isFunction(c.after)) {
                    c.after.call(this, b)
                }
            },
            d.maxTime)
        },
        titleEffect: function(f, e, d) {
            if (!d.title) {
                return
            }
            var c = e.links.eq(f),
            g = c.attr("title") || "",
            b = c.attr("href") || "";
            switch (d.titleEffect.type) {
            case "fade":
                e.title.stop(true, true).fadeOut(d.titleEffect.speed,
                function() {
                    e.title.attr("href", b).attr("title", g).html(g.substr(0, d.titleEffect.cut))
                }).stop(true, true).fadeIn(d.titleEffect.speed);
                break;
            case "default":
                e.title.attr("href", b).attr("title", g).html(g.substr(0, d.titleEffect.cut));
                break;
            default:
                if (a.isFunction(d.titleEffect.typeFunction)) {
                    d.titleEffect.typeFunction(f, e, d)
                }
                break
            }
        },
        pictureEffect: function(g, e, b) {
            var d = e.pictures.eq(g);
            switch (b.effect.type) {
            case "fade":
                d.stop(true, true).fadeIn(b.effect.speed, b.effect.easing);
                d.siblings().stop(true).fadeOut(b.effect.speed);
                break;
            case "fadein":
                e.pictures.stop(true, true).fadeOut(0);
                d.stop(true, true).fadeIn(b.effect.speed, b.effect.easing);
                break;
            case "slide":
                e.picturesContainer.stop().animate({
                    left:
                    -g * e.pictureWidth
                },
                b.effect.speed, b.effect.easing || null);
                break;
            case "sameDirectionSlide":
                e.finished = false;
                var c = e.pictures.eq(e.previous),
                f = e.pictureWidth;
                if (e.previous < g || (e.previous == e.pictureLength - 1 && g == 0)) {
                    f = -f
                }
                d.css({
                    left: -f,
                    "z-index": 2
                });
                e.picturesContainer.stop(true, true).animate({
                    left: f
                },
                b.effect.speed, b.effect.easing,
                function(h) {
                    e.finished = true;
                    a(this).stop(true, true).css("left", 0);
                    d.css("left", 0).siblings().css("z-index", 1)
                });
                break;
            case "default":
                d.stop(true, true).show().siblings().stop(true, true).hide();
                break;
            default:
                if (a.isFunction(b.effect.typeFunction)) {
                    b.effect.typeFunction(g, e, b)
                }
                break
            }
        },
        thumbPictureEffect: function(e, d, c) {
            if (!c.thumbPicture) {
                return
            }
            var b = d.thumbPictures.eq(e);
            b.addClass(c.thumbEffect.selectedClass).siblings().removeClass(c.thumbEffect.selectedClass);
            switch (c.thumbEffect.type) {
            case "fade":
                if (c.thumbEffect.style === "image") {
                    b.stop(true, true).animate({
                        opacity: 1
                    },
                    c.thumbEffect.speed).siblings().stop(true, true).animate({
                        opacity: c.thumbEffect.opacity
                    },
                    c.effect.speed)
                }
                break;
            default:
                if (a.isFunction(c.thumbEffect.typeFunction)) {
                    c.thumbEffect.typeFunction(e, d, c)
                }
                break
            }
        },
        auto: function(d, c, b) {
            d.timer = setInterval(function() {
                var e = a.cgPictureEffect.getCurrent(d.current + 1, d, c);
                a.cgPictureEffect.change(e, d, c, b)
            },
            d.maxTime + c.delay + 5)
        },
        getCurrent: function(d, c, b) {
            if (!b.loop && d == c.pictureLength) {
                d = d - 1
            } else {
                d = d % c.pictureLength
            }
            if (d === -1) {
                d = c.pictureLength - 1
            }
            return d
        },
        _bindEvents: function(d, c, b) {
            if (c.thumbPicture) {
                d.thumbPictures.bind(c.thumbEffect.event,
                function(g) {
                    var f = d.thumbPictures.index(a(this));
                    a.cgPictureEffect.change(f, d, c, b)
                });
                d.thumbLinks.click(function(f) {
                    f.preventDefault()
                })
            }
            d.prev.bind("click",
            function() {
                var e = a.cgPictureEffect.getCurrent(d.current - 1, d, c);
                a.cgPictureEffect.change(e, d, c, b)
            });
            d.next.bind("click",
            function() {
                var e = a.cgPictureEffect.getCurrent(d.current + 1, d, c);
                a.cgPictureEffect.change(e, d, c, b)
            });
            d.start.bind("click",
            function(f) {
                if (a.isFunction(a.startHandler)) {
                    a.startHandler.call(this, f, b)
                }
            });
            d.stop.bind("click",
            function(f) {
                if (a.isFunction(a.startHandler)) {
                    a.stopHandler.call(this, f, b)
                }
            });
            d.$this.mouseover(function() {
                clearInterval(d.timer)
            }).mouseleave(function() {
                clearInterval(d.timer);
                a.cgPictureEffect.auto(d, c, b)
            })
        }
    };
    a.fn.cgPictureEffect = function(b) {
        var c = a.extend(true, {},
        {
            picture: null,
            thumbPicture: null,
            title: null,
            link: null,
            prev: null,
            next: null,
            stop: null,
            start: null,
            stopHandler: function(f, d) {
                d.ui.stop.hide();
                d.ui.start.show()
            },
            startHandler: function(f, d) {
                d.ui.start.hide();
                d.ui.stop.show()
            },
            disabledClass: null,
            current: 0,
            loop: true,
            effect: {
                containerSelector: "ul",
                pictureSelector: "li",
                type: "fade",
                speed: 300,
                easing: null,
                typeFunction: null,
                mouseover: null,
                mouseout: null
            },
            thumbEffect: {
                className: "thumb-title",
                style: "image",
                type: "fade",
                opacity: 0.6,
                speed: 200,
                typeFunction: null,
                selectedClass: null,
                event: "mouseover",
                mouseover: null,
                mouseout: null
            },
            titleEffect: {
                className: "title-link",
                type: "fade",
                speed: 400,
                cut: 40,
                typeFunction: null
            },
            delay: 2500,
            before: null,
            after: null
        },
        b);
        return this.each(function() {
            a.cgPictureEffect._init(a(this), c)
        })
    }
})(jQuery); (function(a) {
    a.fn.cgSetSize = function(b) {
        b = a.extend({
            width: null,
            height: null,
            maxWidth: null
        },
        b || {});
        return this.each(function(d) {
            var e = a(this);
            var g = e.width();
            var f = e.height();
            var c = function() {
                if (b.width && b.height) {
                    e.width(b.width);
                    e.height(b.height)
                } else {
                    if (g > b.maxWidth) {
                        e.width(b.maxWidth);
                        e.height(parseInt(b.maxWidth * f / g))
                    }
                }
            };
            if (g && f) {
                c()
            } else {
                e.load(function() {
                    g = e.width();
                    f = e.height();
                    c()
                })
            }
        })
    }
})(jQuery);