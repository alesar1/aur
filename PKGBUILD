# Maintainer: Kochetkov Andrey <gornet@gmail.com>
# Contributor: Fabian Schoelzel <myfirstname.mylastname@googlemail.com>

pkgname=pyfa
pkgver=1.14.0
pkgrel=1
everelname="galatea"
everelver=1.2
pkgdesc="EVE Online Fitting Assistant"
arch=('any')
url="http://github.com/DarkFenX/Pyfa"
license=('GPL')
depends=('python2' 'wxpython2.8' 'python2-sqlalchemy' 'python2-dateutil')
optdepends=('python2-matplotlib: for graph plotting'
        'python2-numpy: for graph plotting')
source=(https://github.com/DarkFenX/Pyfa/releases/download/v$pkgver/pyfa-$pkgver-$everelname-$everelver-linux.zip pyfa.desktop pyfa-start.sh)

package() {
  cd "${srcdir}"/pyfa || return 1

  install -d "${pkgdir}"/usr/bin || return 1
  install -d "${pkgdir}"/usr/share/{applications,pixmaps,pyfa} || return 1

  cp -R "${srcdir}"/pyfa/* "${pkgdir}"/usr/share/pyfa || return 1

  install -m 644 "${srcdir}"/pyfa/icons/pyfa64.png "${pkgdir}"/usr/share/pixmaps/pyfa.png || return 1
  install -m 644 "${srcdir}"/pyfa.desktop "${pkgdir}"/usr/share/applications/pyfa.desktop || return 1
  install "${srcdir}"/pyfa-start.sh "${pkgdir}"/usr/bin/pyfa || return 1
  
  #rm "${pkgdir}"/usr/share/pyfa/config.pyc
}

md5sums=('a2b84a71fe84f21bd090219675613253'
         'a6f1cef5a9fcc5dfd6c5ecdddf2c5e38'
         '9937192cfce7f5e16e9cf26086f1899c')
