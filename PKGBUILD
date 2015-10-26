# Maintainer: Michael Wendland <michael@michiwend.com>
# Contributor: Adri�n P�rez de Castro <aperez@igalia.com>
# Contributor: Jo�o Guerra <joca.bt@gmail.com>

pkgname=evopop-gtk-theme-git
pkgver=0.29.r8.gdadcccd
pkgrel=1
pkgdesc="A simple, flat, and bold GTK+ theme for Solus OS and Budgie Desktop"
arch=('any')
url="https://github.com/fdinardo/evopop-gtk-theme"
license=('GPL3')
depends=('gtk3>=3.16' 'gtk-engine-murrine')
provides=('evopop-gtk-theme' 'evopop-light-gtk-theme')
conflicts=('evopop-gtk-theme')
source=("${pkgname}::git+${url}")
sha256sums=('SKIP')

pkgver () {
	cd "${srcdir}/${pkgname}"
	( set -o pipefail
	  git describe --long --tags 2>/dev/null | sed 's/\([^-]*-g\)/r\1/;s/-/./g' ||
	  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
	)
}

build() {
  cd "${srcdir}/${pkgname}"

  autoreconf -vfi
  ./configure --prefix=/usr $*
}

package() {
  cd "${srcdir}/${pkgname}"

  make DESTDIR=${pkgdir} install
}

# vim: ts=2 sw=2 et:
