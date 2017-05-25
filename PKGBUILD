# Maintainer: Thomas "Ventto" Venriès <thomas.venries@gmail.com>
pkgname='pug'
pkgver=1.1
pkgrel=2
pkgdesc='Automatically saves and synchronizes Pacman and AUR installed package lists into Gists.'
arch=('x86_64' 'i686')
license=('GPL')
depends=('pacman>=5.0' 'pacaur>=4.0.0' 'gist>=4.5.0')
makedepends=('make' 'git')
url="https://github.com/Ventto/${pkgname}.git"
source=("https://github.com/Ventto/${pkgname}/archive/v${pkgver}-${pkgrel}.tar.gz")
sha256sums=('SKIP')

package() {
  cd "${srcdir}/${pkgname}-${pkgver}-${pkgrel}"
  make DESTDIR="${pkgdir}" install
}
