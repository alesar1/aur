# Maintainer: Christian Hesse <mail@eworm.de>

pkgname=vis-git
pkgver=0.1.r144.ga05f231
pkgrel=1
pkgdesc='modern, legacy free, simple yet efficient vim-like editor - git checkout'
arch=('i686' 'x86_64')
url='http://www.brain-dump.org/projects/vis/'
depends=('ncurses' 'libtermkey' 'lua')
optdepends=('lua-lpeg: for syntax highlighting')
conflicts=('vis')
provides=('vis')
makedepends=('git' 'markdown')
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

prepare() {
	cd vis/

	sed -i '/^\s\(C\|LD\)FLAGS_LUA =/s/lua5.2/lua/g' config.mk
}

build() {
	cd vis/

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

