/**
 * Created by just on 10.06.15.
 */
function prototypeFindIndex() {
    if (!Array.prototype.findIndex) {
        Array.prototype.findIndex = function (callback) {
            var i, len = this.length;
            for (i = 0; i < len; i += 1) {
                if (callback(this[i], i, this)) {
                    return i;
                }
            }
            return -1;
        };
    }
}