# Maintainer: squitch <clementfoure2005@gmail.com>
pkgname=tess-git
pkgver=1.2r71.2da1049
pkgrel=1
pkgdesc="Tess hackable, simple, rapid and beautiful terminal for the new era"
arch=(x86_64)
url="https://github.com/SquitchYT/Tess.git"
license=('unknown')
depends=('glib2' 'glibc')
makedepends=('git' 'npm')
source=("git+$url")
md5sums=('SKIP')

pkgver() {
  cd "Tess"
  printf "1.2r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "Tess"

	mkdir -p "${pkgdir}/usr/share/applications"
	cp -r -f Tess.desktop "${pkgdir}/usr/share/applications/Tess.desktop"

	npm install
	npm run build

	cd "dist/linux-unpacked"

	mkdir -p "${pkgdir}/opt/tess"
	mkdir -p "${pkgdir}/usr/bin"

	cp -r -f * "${pkgdir}/opt/tess/"
	ln -s "/opt/tess/tess" "${pkgdir}/usr/bin/tess"
}
