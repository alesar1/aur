# Maintainer: Mohammadreza Abdollahzadeh <morealaz at gmail dot com>

pkgname=f24-backgrounds
pkgver=24.1.2
pkgrel=3
_rhver="${pkgver}-1.fc25"
pkgdesc="Fedora 24 backgrounds."
arch=("i686" "x86_64")
url="https://fedoraproject.org/wiki/F24_Artwork"
license=("CC-BY-SA")
_rhlink="https://archives.fedoraproject.org/pub/fedora/linux/development/rawhide/Everything/source/tree/Packages"
source=("${_rhlink}/f/${pkgname}-${_rhver}.src.rpm")
md5sums=('2f859cb44dd980ddd8ee87e4edff64d9')

prepare()  {
    tar -xvJf ./${pkgname}-${pkgver}.tar.xz
    rm -r ./${pkgname}-${pkgver}.tar.xz
    rm -r ./${pkgname}.spec
}

build() {
    cd ./${pkgname}-${pkgver}
    make
}

package() {    
    cd ./${pkgname}-${pkgver}
    make install DESTDIR="${pkgdir}"
}
