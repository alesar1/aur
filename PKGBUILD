# Maintainer: Daniel Haß <aur@hass.onl>
pkgname=vpcs
pkgver=0.8
pkgrel=4
pkgdesc="Simple virtual PC simulator"
arch=('i686' 'x86_64')
url="http://sourceforge.net/projects/vpcs/"
license=('BSD')
makedepends=('make' 'gcc' 'git')
source=("https://github.com/GNS3/${pkgname}/archive/v${pkgver}beta1.tar.gz")
md5sums=('c02fa7181e6a66403318b3680368ae53')

prepare(){
   patch -p1 -d "${srcdir}/${pkgname}-${pkgver}beta1/" < "${startdir}/getopts.patch"
   cat "${srcdir}/${pkgname}-${pkgver}beta1/src/getopt.h" 
}

build(){
   cd "${srcdir}/${pkgname}-${pkgver}beta1/src"

   ./mk.sh $(getconf LONG_BIT)
}

package() {
   mkdir -p "$pkgdir/usr/bin"
   install -Dm755 "${srcdir}/${pkgname}-${pkgver}beta1/src/${pkgname}" ${pkgdir}/usr/bin/${pkgname}  
}
