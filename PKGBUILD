# Maintainer: Antoine Maleyrie <antoine.maleyrie@gmail.com>

pkgname=sys-pc-tool
pkgver=6.31
pkgrel=1

pkgdesc="SYS PC Tool is a software for downloading flights recorded inside Syrides instruments."
arch=('x86_64')
url="https://www.syride.com/"
license=('unknown')
depends=('glibc>=2.17' 'krb5>=1.10' 'libldap' 'gtk2' 'libusb' 'libxml2' 'p11-kit' 'openssl' 'libcurl-gnutls')
#install=
source=("https://www.syride.com/downloads/$pkgname-$pkgver-$pkgrel""_amd64.deb")
md5sums=('9398821a938019e7a95a12d3a30bc496')

prepare() {
    tar -xf data.tar.xz
}

package() {
    cp -r "usr/local/" "$pkgdir/usr/"
    
    mkdir -p "$pkgdir/usr/local/share/"
    cp -r "usr/local/share/syride/" "$pkgdir/usr/local/share/"
    
    mkdir -p "$pkgdir/etc/udev/rules.d/"
    cp "lib/udev/rules.d/96-syride.rules" "$pkgdir/etc/udev/rules.d/"
    
    # To update udev ruls:
    # $ udevadm control --reload
    # $ udevadm trigger
}
