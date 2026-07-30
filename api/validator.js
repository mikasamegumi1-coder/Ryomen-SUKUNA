// ======================================
// RYOMEN SUKUNA
// URL Validator
// ======================================

export function validateProductUrl(productUrl) {

    if (!productUrl) {

        return {
            valid: false,
            message: "Product URL is required."
        };

    }

    if (typeof productUrl !== "string") {

        return {
            valid: false,
            message: "Invalid URL format."
        };

    }

    const url = productUrl.trim();

    if (url.length === 0) {

        return {
            valid: false,
            message: "Product URL is empty."
        };

    }

    const shopeePattern =
        /^https?:\/\/([a-z]+\.)?shopee\.[a-z.]+\/.+$/i;

    if (!shopeePattern.test(url)) {

        return {
            valid: false,
            message: "Only Shopee product links are supported."
        };

    }

    return {
        valid: true,
        url
    };

}
