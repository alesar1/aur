# Maintainer: Christian Hesse <mail@eworm.de>

pkgname=vis-git
pkgver=0.1.r207.ga0ec87b
pkgrel=1
pkgdesc='modern, legacy free, simple yet efficient vim-like editor - git checkout'
arch=('i686' 'x86_64')
url='http://www.brain-dump.org/projects/vis/'
depends=('ncurses' 'libtermkey' 'lua')
makedepends=('git' 'pkg-config' 'markdown')
optdepends=('lua-lpeg: for syntax highlighting')
conflicts=('vis')
provides=('vis')
license=('custom:ISC')
source=('git://github.com/martanne/vis.git')
sha256sums=('SKIP')

pkgver() {
	cd vis/

	if GITTAG="$(git describe --abbrev=0 --tags 2>/dev/null)"; then
		printf '%s.r%s.g%s' \
			"$(sed -e "s/^${pkgname%%-git}//" -e 's/^[-_/a-zA-Z]\+//' -e 's/[-_+]/./g' <<< ${GITTAG})" \
			"$(git rev-list --count ${GITTAG}..)" \
			"$(git log -1 --format='%h')"
	else
		printf '0.r%s.g%s' \
			"$(git rev-list --count master)" \
			"$(git log -1 --format='%h')"
	fi
}

build() {
	cd vis/

	./configure --prefix=/usr
	make

	markdown README.md > README.html
}

package() {
	cd vis/

	make DESTDIR="${pkgdir}" PREFIX='/usr/' install

	install -D -m0644 'LICENSE' "${pkgdir}/usr/share/licenses/vis/LICENSE"
	install -D -m0644 'README.md' "${pkgdir}/usr/share/doc/vis/README.md"
	install -D -m0644 'README.html' "${pkgdir}/usr/share/doc/vis/README.html"
}

