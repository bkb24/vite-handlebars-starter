export const helpers = {
    split: (str, delimeter) => {
        return str.split(delimeter);
    },

    isEqual: function(arg1, arg2, options) {
        return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    }
}
