/**
 * Created by just on 10.06.15.
 */
function prototypeFill() {
    if (!Array.prototype.fill) {
        Array.prototype.fill = function (callback) {
            var i, len = this.length;
            for (i = 0; i < len; i+=1) {
                this[i] = arguments[0];
            }
            return this;
        };
    }
}