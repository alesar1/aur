# Maintainer: D. Can Celasun <dcelasun[at]gmail[dot]com>
pkgname=n1
pkgver=0.4.47
pkgrel=1
pkgdesc="A new mail client for Mac, Linux and Windows, built on the modern web and designed to be extended."
arch=('x86_64')
url="https://nylas.com/N1/"
license=('MIT')
depends=('gtk2' 'libgnome-keyring' 'gnome-keyring' 'desktop-file-utils' 'python2' 'gconf' 'nodejs' 'libnotify' 'libxtst' 'nss' 'alsa-lib')
source=(N1-${pkgver}.deb::https://edgehill.s3-us-west-2.amazonaws.com/${pkgver}-3a2a94c/linux-deb/x64/N1.deb)
install=${pkgname}.install
md5sums=('d1c3529df4eb850428fd9c1c2993b7fa')
package() {
    msg2 "Extracting data.tar.gz..."
    bsdtar -xf data.tar.gz -C "${pkgdir}/"

    cd "${pkgdir}"
    find -name '*.py' -exec sed -i 's|^#!/usr/bin/env python\s*$|#!/usr/bin/env python2|' {} \;
    find -name '*.py' -exec sed -i 's|^#!/usr/bin/python\s*$|#!/usr/bin/python2|' {} \;
    
    
    find "${pkgdir}"/usr -type f -exec chmod 644 {} \;
    find "${pkgdir}"/usr/bin -type f -exec chmod 755 {} \;
    find "${pkgdir}"/usr -type d -exec chmod 755 {} \;
    chmod 755 "${pkgdir}"/usr/share/nylas/nylas
    chmod 755 "${pkgdir}"/usr/share/nylas/resources/app/apm/bin/{node,apm}

    mkdir -p "${pkgdir}"/usr/share/licenses/nylas-n1/

    rm -rf "${pkgdir}/usr/bin/nylas"
    ln -s /usr/share/nylas/nylas "${pkgdir}"/usr/bin/nylas
    ln -s /usr/share/nylas/LICENSE "${pkgdir}"/usr/share/licenses/nylas-n1/LICENSE
}
