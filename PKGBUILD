# Maintainer: Kamari Kim <kamarikim8@gmail.com>
# Contributor: Tyler Ahde <notonewith@gmail.com>
# Upstream: https://github.com/bitpay/bitpay

pkgname=bitpay
pkgver=3.8.2
pkgrel=1
pkgdesc="BitPay Bitcoin Wallet"
arch=('x86_64')
url="https://bitpay.com"
license=('MIT')
depends=('')
makedepends=('unzip')

# For some reason, stripping the massive bitpay binary breaks the app
options=('!strip')

source=('bitpay.desktop')


md5sums=('0506f49c065177fc829f8f0a75aab19b')
md5sums_x86_64=('ee42303786708a59c9d8a623c640ddfb'
	'0234c47f33ada64c7bb8f131a774ca8e')

source_x86_64=("https://github.com/bitpay/copay/releases/download/v3.8.2/BitPay-linux.zip" 
"https://github.com/bitpay/copay/releases/download/v3.8.2/BitPay-linux.zip.sig" 
)             


gpg --recv-keys 5CD600A61112CFA1
validpgpkeys=('9D17E656BB3B6163AE9D71725CD600A61112CFA1')

package() {

    # Prep destination
    mkdir -p ${pkgdir}/opt/bitpay
    cd ${pkgdir}/opt/bitpay

    # Unzip the binary package
    unzip ${startdir}/BitPay-linux.zip
    
    # Remove arch suffix 
    mv BitPay-linux/* .
    rmdir BitPay-linux

    # Fix file permissions
    find ${pkgdir}/opt/bitpay/ -type f -print0 | xargs -0 chmod a+r

    # Symlink in to the default PATH
    mkdir -p ${pkgdir}/usr/bin
    ln -s /opt/bitpay/BitPay ${pkgdir}/usr/bin/bitpay

    # Create desktop icon
    install -Dm644 "$srcdir"/bitpay.desktop "$pkgdir/usr/share/applications/bitpay.desktop"
    install -Dm644 "$srcdir"/BitPay-linux/512x512.png "$pkgdir/usr/share/pixmaps/bitpay.png"
}
