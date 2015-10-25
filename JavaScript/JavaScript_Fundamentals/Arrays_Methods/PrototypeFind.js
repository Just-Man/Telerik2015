/**
 * Created by just on 10.06.15.
 */
function prototypeFind() {
    if (!Array.prototype.find) {
        Array.prototype.find = function (callback) {
            var i, len = this.length;
            for (i = 0; i < len; i += 1) {
                if (callback(this[i], i, this)) {
                    return this[i];
                }
            }
        };
    }
}